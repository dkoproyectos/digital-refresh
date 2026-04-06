/**
 * ============================================================
 * FORMULARIO DE CONTACTO FLEXIBLE — CRM-READY
 * ============================================================
 * Tres variantes:
 *   - "general"   → Home & Contacto (nombre, email, cel, tipo proyecto, mensaje)
 *   - "service"   → Páginas de servicios (+ tipo espacio, presupuesto)
 *   - "sales"     → Páginas de ventas (+ producto, medidas)
 *
 * 🔌 Bitrix: Cuando crmConfig.enabled = true, los datos se
 *    enviarán vía webhook además de abrir WhatsApp.
 *    Estructura del payload ya mapea a campos Bitrix.
 * ============================================================
 */

import { useState } from "react";
import { Send } from "lucide-react";
import { getWhatsAppUrl, crmConfig, contactInfo } from "@/lib/config";

export type FormVariant = "general" | "service" | "sales";

export interface FormData {
  nombre: string;
  email: string;
  celular: string;
  mensaje: string;
  tipoProyecto?: string;
  tipoEspacio?: string;
  presupuesto?: string;
  producto?: string;
  subProducto?: string;
  medidas?: string;
}

interface ContactFormProps {
  /** Contexto que se incluye en el mensaje de WhatsApp */
  context?: string;
  /** Tipo de formulario */
  variant?: FormVariant;
  /** Opciones para el select de tipo de proyecto (variant=general) */
  projectTypes?: string[];
  /** Opciones para el select de producto (variant=sales) */
  productOptions?: string[];
  /** Sub-opciones dinámicas por producto seleccionado */
  subOptionsMap?: Record<string, string[]>;
  onFormSubmit?: (data: FormData) => void;
}

const inputClass =
  "w-full px-4 py-3 bg-background border border-border rounded-sm text-sm font-body text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-secondary transition-colors";

const selectClass =
  "w-full px-4 py-3 bg-background border border-border rounded-sm text-sm font-body text-foreground focus:outline-none focus:border-secondary transition-colors appearance-none";

const defaultProjectTypes = [
  "Diseño Interior Premium",
  "Remodelación VIS",
  "Rentas Cortas / Airbnb",
  "Cortinas y Persianas",
  "Películas Solares",
  "Mobiliario Exterior",
  "Recubrimiento de Paredes",
  "Otro",
];

const presupuestoRanges = [
  "Menos de $5.000.000",
  "$5.000.000 - $15.000.000",
  "$15.000.000 - $30.000.000",
  "$30.000.000 - $60.000.000",
  "Más de $60.000.000",
  "Por definir",
];

const ContactForm = ({
  context,
  variant = "general",
  projectTypes = defaultProjectTypes,
  productOptions = [],
  subOptionsMap = {},
  onFormSubmit,
}: ContactFormProps) => {
  const [form, setForm] = useState<FormData>({
    nombre: "",
    email: "",
    celular: "",
    mensaje: "",
    tipoProyecto: "",
    tipoEspacio: "",
    presupuesto: "",
    producto: "",
    subProducto: "",
    medidas: "",
  });
  const [sending, setSending] = useState(false);

  const update = (field: keyof FormData, value: string) =>
    setForm((prev) => ({
      ...prev,
      [field]: value,
      // Reset sub-product when main product changes
      ...(field === "producto" ? { subProducto: "" } : {}),
    }));

  const currentSubOptions = form.producto ? subOptionsMap[form.producto] || [] : [];

  const buildWhatsAppMessage = (): string => {
    const parts = [`Hola DKO, soy ${form.nombre}.`];
    if (context) parts.push(`Me interesa: ${context}.`);
    if (form.tipoProyecto) parts.push(`Tipo: ${form.tipoProyecto}.`);
    if (form.tipoEspacio) parts.push(`Espacio: ${form.tipoEspacio}.`);
    if (form.presupuesto) parts.push(`Presupuesto: ${form.presupuesto}.`);
    if (form.producto) parts.push(`Producto: ${form.producto}.`);
    if (form.medidas) parts.push(`Medidas: ${form.medidas}.`);
    if (form.mensaje) parts.push(form.mensaje);
    if (form.celular) parts.push(`Tel: ${form.celular}`);
    return parts.join(" ");
  };

  /**
   * 🔌 Bitrix: Esta función se activará cuando crmConfig.enabled = true.
   * Envía los datos del formulario al webhook de Bitrix24 para crear un lead.
   */
  const sendToCRM = async (data: FormData) => {
    if (!crmConfig.enabled || !crmConfig.bitrixWebhookUrl) return;

    const payload = {
      fields: {
        [crmConfig.fieldMapping.nombre]: data.nombre,
        [crmConfig.fieldMapping.email]: [{ VALUE: data.email, VALUE_TYPE: "WORK" }],
        [crmConfig.fieldMapping.celular]: [{ VALUE: data.celular, VALUE_TYPE: "MOBILE" }],
        [crmConfig.fieldMapping.mensaje]: data.mensaje,
        [crmConfig.fieldMapping.origen]: context || "Web",
        ...(data.tipoProyecto && { [crmConfig.fieldMapping.tipo]: data.tipoProyecto }),
        ...(data.presupuesto && { [crmConfig.fieldMapping.presupuesto]: data.presupuesto }),
        ...(data.producto && { [crmConfig.fieldMapping.producto]: data.producto }),
        ...(data.medidas && { [crmConfig.fieldMapping.medidas]: data.medidas }),
      },
    };

    try {
      await fetch(`${crmConfig.bitrixWebhookUrl}/crm.lead.add.json`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("Error enviando a CRM:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Callback externo (analytics, etc.)
    onFormSubmit?.(form);

    // Enviar a CRM si está habilitado
    await sendToCRM(form);

    // Abrir WhatsApp
    const msg = buildWhatsAppMessage();
    window.open(getWhatsAppUrl(msg), "_blank");

    setSending(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Fila 1: Nombre + Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          required
          placeholder="Nombre completo *"
          value={form.nombre}
          onChange={(e) => update("nombre", e.target.value)}
          className={inputClass}
        />
        <input
          required
          type="email"
          placeholder="Correo electrónico *"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className={inputClass}
        />
      </div>

      {/* Fila 2: Celular */}
      <input
        required
        type="tel"
        placeholder="Celular *"
        value={form.celular}
        onChange={(e) => update("celular", e.target.value)}
        className={inputClass}
      />

      {/* ── Campos específicos por variante ── */}

      {/* GENERAL: Tipo de proyecto */}
      {variant === "general" && (
        <select
          required
          value={form.tipoProyecto}
          onChange={(e) => update("tipoProyecto", e.target.value)}
          className={selectClass}
        >
          <option value="">Tipo de proyecto *</option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      )}

      {/* SERVICE: Tipo espacio + Presupuesto */}
      {variant === "service" && (
        <div className="grid sm:grid-cols-2 gap-4">
          <select
            value={form.tipoEspacio}
            onChange={(e) => update("tipoEspacio", e.target.value)}
            className={selectClass}
          >
            <option value="">Tipo de espacio</option>
            <option value="Apartamento">Apartamento</option>
            <option value="Casa">Casa</option>
            <option value="Oficina">Oficina</option>
            <option value="Local Comercial">Local Comercial</option>
            <option value="Airbnb / Renta Corta">Airbnb / Renta Corta</option>
            <option value="Otro">Otro</option>
          </select>
          <select
            value={form.presupuesto}
            onChange={(e) => update("presupuesto", e.target.value)}
            className={selectClass}
          >
            <option value="">Presupuesto estimado</option>
            {presupuestoRanges.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
      )}

      {/* SALES: Producto + Medidas */}
      {variant === "sales" && (
        <div className="grid sm:grid-cols-2 gap-4">
          {productOptions.length > 0 ? (
            <select
              value={form.producto}
              onChange={(e) => update("producto", e.target.value)}
              className={selectClass}
            >
              <option value="">Producto de interés</option>
              {productOptions.map((p) =>
                p.startsWith("──") ? (
                  <option key={p} disabled className="font-bold text-muted-foreground">{p}</option>
                ) : (
                  <option key={p} value={p}>{p}</option>
                )
              )}
            </select>
          ) : (
            <input
              placeholder="Producto de interés"
              value={form.producto}
              onChange={(e) => update("producto", e.target.value)}
              className={inputClass}
            />
          )}
          <input
            placeholder="Medidas aproximadas (ej: 2m x 3m)"
            value={form.medidas}
            onChange={(e) => update("medidas", e.target.value)}
            className={inputClass}
          />
        </div>
      )}

      {/* Mensaje */}
      <textarea
        required
        rows={4}
        placeholder="Cuéntanos sobre tu proyecto... *"
        value={form.mensaje}
        onChange={(e) => update("mensaje", e.target.value)}
        className={`${inputClass} resize-none`}
      />

      {/* Submit */}
      <button
        type="submit"
        disabled={sending}
        className="btn-gold flex items-center justify-center gap-2 w-full sm:w-auto disabled:opacity-60"
      >
        <Send size={16} />
        {sending ? "Enviando..." : "Enviar Mensaje"}
      </button>
    </form>
  );
};

export default ContactForm;
