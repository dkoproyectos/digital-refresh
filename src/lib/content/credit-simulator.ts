/**
 * ============================================================
 * CONTENIDO: SIMULADOR DE CRÉDITO
 * ============================================================
 * 🔌 Sanity: *[_type == "creditSimulator"][0]
 *    Todos los textos, labels y opciones son editables desde CMS.
 * ============================================================
 */

export const creditSimulatorContent = {
  // ─── CTA Section ───────────────────────────────────────────
  cta: {
    label: "Financiación Inteligente",
    title: "¿Quieres saber si calificas para",
    titleHighlight: "financiar tu proyecto?",
    description:
      "Simula tu crédito en segundos. Descubre tu capacidad de financiación sin compromisos y empieza a planear la transformación de tu espacio.",
    buttonLabel: "Simular mi Crédito",
    features: [
      "Resultado en segundos",
      "Sin compromisos",
      "100% confidencial",
      "Pre-aprobación inmediata",
    ],
  },

  // ─── Floating Button ──────────────────────────────────────
  floatingButton: {
    label: "Simula tu Crédito",
  },

  // ─── Modal / Formulario ────────────────────────────────────
  form: {
    title: "Simulador de Crédito",
    subtitle: "Completa tus datos y obtén una pre-aprobación estimada al instante.",
    disclaimer:
      "Este simulador ofrece un estimado orientativo. La aprobación final está sujeta a verificación con Experian y la entidad financiera.",
    fields: {
      name: { label: "Nombre completo", placeholder: "Ej: Juan Pérez" },
      document: { label: "Número de cédula", placeholder: "Ej: 1.234.567.890" },
      phone: { label: "Teléfono", placeholder: "Ej: 300 123 4567" },
      email: { label: "Correo electrónico", placeholder: "Ej: juan@email.com" },
      income: { label: "Ingresos mensuales", placeholder: "Ej: 3.500.000" },
      employmentType: {
        label: "Tipo de empleo",
        options: [
          { value: "empleado", label: "Empleado" },
          { value: "independiente", label: "Independiente" },
          { value: "pensionado", label: "Pensionado" },
          { value: "empresario", label: "Empresario" },
        ],
      },
    },
    submitLabel: "Simular Ahora",
  },

  // ─── Resultado Simulado ────────────────────────────────────
  result: {
    successTitle: "¡Pre-aprobación Estimada!",
    successSubtitle: "Basado en tus datos, este es tu estimado de financiación:",
    labels: {
      maxAmount: "Monto máximo estimado",
      monthlyPayment: "Cuota mensual estimada",
      term: "Plazo sugerido",
      rate: "Tasa estimada",
    },
    ctaLabel: "Solicitar Asesoría Personalizada",
    ctaDescription: "Un asesor te contactará para formalizar tu pre-aprobación con condiciones reales.",
    disclaimerResult:
      "* Valores estimados con fines informativos. La aprobación definitiva está sujeta a la evaluación crediticia de Experian y la entidad financiera aliada.",
  },
};
