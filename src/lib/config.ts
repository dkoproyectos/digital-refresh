/**
 * ============================================================
 * CONFIGURACIÓN GENERAL DEL SITIO
 * ============================================================
 * Centraliza todos los datos de contacto, redes sociales y
 * configuración global. Edita aquí para cambiar en todo el sitio.
 * 
 * 🔌 Sanity: Este archivo puede reemplazarse por un documento
 *    "siteConfig" en Sanity con los mismos campos.
 * ============================================================
 */

export const siteConfig = {
  name: "DKO Proyectos",
  shortName: "DKO",
  tagline: "Diseño · Remodelación · Interiorismo",
  description:
    "Gestión y ejecución integral de proyectos de construcción, remodelación, diseño de interiores y decoración en Cali.",
  location: "Cali, Colombia",
  year: 2026,
  foundedYear: 2014,
};

export const contactInfo = {
  /** Número de WhatsApp con código de país (solo dígitos) */
  whatsappNumber: "573138765825",
  phone: "+57 313 876 5825",
  email: "victor.florez@dkoproyectos.com.co",
  address: "Av 9 norte No 18N 25, Oficina 201A, Cali, Colombia",
  schedule: "Lunes a Viernes: 8:00 AM - 6:00 PM · Sábados: 9:00 AM - 1:00 PM",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.6!2d-76.536!3d3.455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMjcnMTguMCJOIDc2wrAzMicxMC4wIlc!5e0!3m2!1ses!2sco!4v1",
};

export const socialLinks = {
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
};

/**
 * Genera el URL de WhatsApp con un mensaje pre-llenado.
 */
export const getWhatsAppUrl = (message?: string) => {
  const defaultMsg = "Hola, quiero cotizar un proyecto con DKO";
  const msg = message || defaultMsg;
  return `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(msg)}`;
};

/**
 * ============================================================
 * CONFIGURACIÓN DE FORMULARIOS / CRM
 * ============================================================
 * Aquí se centralizan los endpoints y configuración para
 * integración futura con Bitrix24 u otro CRM.
 * 
 * 🔌 Bitrix: Cuando conectes Bitrix, actualiza estos valores
 *    con tu webhook URL y field mappings.
 * ============================================================
 */
export const crmConfig = {
  /** Habilitar envío a CRM (false = solo WhatsApp) */
  enabled: false,
  /** URL del webhook de Bitrix24 para crear leads */
  bitrixWebhookUrl: "",
  /** Mapeo de campos del formulario a campos de Bitrix */
  fieldMapping: {
    nombre: "NAME",
    email: "EMAIL",
    celular: "PHONE",
    tipo: "UF_CRM_TIPO_PROYECTO",
    mensaje: "COMMENTS",
    origen: "SOURCE_ID",
    presupuesto: "OPPORTUNITY",
    producto: "UF_CRM_PRODUCTO",
    medidas: "UF_CRM_MEDIDAS",
  },
};
