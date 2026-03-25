import { useState } from "react";
import { Send } from "lucide-react";

interface ContactFormProps {
  context?: string;
}

const ContactForm = ({ context }: ContactFormProps) => {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola DKO, soy ${form.nombre}.${context ? ` Me interesa: ${context}.` : ""} ${form.mensaje}`;
    window.open(
      `https://wa.me/573138765825?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          required
          placeholder="Nombre completo"
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          className="w-full px-4 py-3 bg-background border border-border rounded-sm text-sm font-body focus:outline-none focus:border-secondary transition-colors"
        />
        <input
          required
          type="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-4 py-3 bg-background border border-border rounded-sm text-sm font-body focus:outline-none focus:border-secondary transition-colors"
        />
      </div>
      <input
        placeholder="Teléfono"
        value={form.telefono}
        onChange={(e) => setForm({ ...form, telefono: e.target.value })}
        className="w-full px-4 py-3 bg-background border border-border rounded-sm text-sm font-body focus:outline-none focus:border-secondary transition-colors"
      />
      <textarea
        required
        rows={4}
        placeholder="Cuéntanos sobre tu proyecto..."
        value={form.mensaje}
        onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
        className="w-full px-4 py-3 bg-background border border-border rounded-sm text-sm font-body focus:outline-none focus:border-secondary transition-colors resize-none"
      />
      <button type="submit" className="btn-gold flex items-center gap-2">
        <Send size={16} /> Enviar Mensaje
      </button>
    </form>
  );
};

export default ContactForm;
