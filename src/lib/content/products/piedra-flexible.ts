/**
 * ============================================================
 * CONTENIDO: Productos de Piedra Flexible
 * ============================================================
 * 🔌 Sanity: *[_type == "product" && category == "piedra-flexible"]
 * ============================================================
 */

import { ClipboardList, Ruler, Truck, Wrench } from "lucide-react";
import type { ProductLandingData } from "@/components/ProductLanding";

import ventaImg from "@/assets/venta-recubrimiento.jpg";
import project1 from "@/assets/project-1.jpg";
import project3 from "@/assets/project-3.jpg";

const sharedProcess: ProductLandingData["process"] = [
  { icon: ClipboardList, title: "Asesoría", description: "Te ayudamos a elegir el tipo de piedra flexible ideal según tu proyecto." },
  { icon: Ruler, title: "Medición", description: "Visita técnica para tomar medidas exactas sin costo." },
  { icon: Truck, title: "Entrega", description: "Recibe tu producto en la puerta de tu hogar u oficina." },
  { icon: Wrench, title: "Instalación", description: "Nuestro equipo profesional realiza la instalación completa." },
];

const parent = { label: "Piedra Flexible", href: "/productos/piedra-flexible" };

export const piedraFlexibleProducts: Record<string, ProductLandingData> = {
  "piedra-flexible-interior": {
    breadcrumb: "Productos · Piedra Flexible · Interior",
    title: "Piedra Flexible",
    highlight: "Interior",
    description: "Láminas ultradelgadas de piedra natural para revestir paredes interiores con un acabado auténtico y elegante.",
    heroImage: { src: ventaImg, alt: "Piedra flexible interior" },
    introTitle: "Paredes con textura",
    introHighlight: "natural",
    introText: "La piedra flexible interior es una lámina ultradelgada (1-3mm) extraída de piedra natural real que se adhiere a cualquier superficie interior. Perfecta para salas, dormitorios, recepciones y espacios comerciales. Aporta la belleza de la piedra sin el peso ni la complejidad de instalación del enchape tradicional.",
    introImage: { src: ventaImg, alt: "Piedra flexible interior instalada" },
    benefits: [
      "Ultradelgada: solo 1-3mm de espesor",
      "100% piedra natural real",
      "Peso mínimo: ideal para cualquier pared",
      "Flexible: se adapta a curvas y columnas",
      "Fácil instalación con adhesivo",
      "Variedad de texturas y tonalidades",
    ],
    process: sharedProcess,
    gallery: [
      { src: ventaImg, alt: "Piedra flexible sala" },
      { src: project1, alt: "Piedra flexible recepción" },
      { src: project3, alt: "Piedra flexible dormitorio" },
    ],
    faqs: [
      { question: "¿La piedra flexible es piedra real?", answer: "Sí, es una lámina extraída de piedra natural mediante un proceso especial que conserva la textura y color originales." },
      { question: "¿Se puede instalar sobre cualquier superficie?", answer: "Sí, se adhiere a concreto, drywall, madera, cerámica y prácticamente cualquier superficie lisa o ligeramente texturizada." },
      { question: "¿Cuánto pesa por metro cuadrado?", answer: "Aproximadamente 1.5 a 3 kg/m², mucho menos que la piedra tradicional que pesa entre 30-50 kg/m²." },
    ],
    parentCategory: parent,
    formContext: "Piedra Flexible Interior",
    productName: "Piedra Flexible Interior",
  },

  "piedra-flexible-exterior": {
    breadcrumb: "Productos · Piedra Flexible · Exterior",
    title: "Piedra Flexible",
    highlight: "Exterior",
    description: "Revestimiento de piedra natural flexible resistente a la intemperie para fachadas, terrazas y zonas exteriores.",
    heroImage: { src: project3, alt: "Piedra flexible exterior" },
    introTitle: "Fachadas con carácter",
    introHighlight: "natural",
    introText: "La piedra flexible para exteriores cuenta con tratamiento UV e hidrofugante que la hace resistente a la lluvia, el sol y los cambios de temperatura. Ideal para fachadas, muros de jardín, terrazas y zonas húmedas exteriores. Conserva la belleza natural con mínimo mantenimiento.",
    introImage: { src: project3, alt: "Piedra flexible exterior fachada" },
    benefits: [
      "Resistente a rayos UV",
      "Tratamiento hidrofugante incluido",
      "Soporta cambios de temperatura",
      "No se decolora con el tiempo",
      "Fácil limpieza con agua",
      "Garantía extendida para exterior",
    ],
    process: sharedProcess,
    gallery: [
      { src: project3, alt: "Piedra flexible fachada" },
      { src: ventaImg, alt: "Piedra flexible jardín" },
      { src: project1, alt: "Piedra flexible terraza" },
    ],
    faqs: [
      { question: "¿Resiste la lluvia y el sol directo?", answer: "Sí, nuestra piedra flexible para exterior tiene tratamiento UV e hidrofugante certificado para resistir las condiciones climáticas más exigentes." },
      { question: "¿Se puede instalar en piscinas o zonas húmedas?", answer: "Sí, con el sellador adecuado se puede usar en zonas cercanas a piscinas, fuentes y muros de contención." },
      { question: "¿Qué mantenimiento requiere?", answer: "Mínimo. Limpieza periódica con agua y jabón neutro. Se recomienda reaplicar sellador cada 3-5 años." },
    ],
    parentCategory: parent,
    formContext: "Piedra Flexible Exterior",
    productName: "Piedra Flexible Exterior",
  },

  "piedra-flexible-fachadas": {
    breadcrumb: "Productos · Piedra Flexible · Fachadas",
    title: "Piedra Flexible para",
    highlight: "Fachadas",
    description: "Solución liviana y elegante para renovar fachadas comerciales y residenciales con acabado de piedra real.",
    heroImage: { src: project1, alt: "Piedra flexible fachadas" },
    introTitle: "Renueva tu fachada sin",
    introHighlight: "obras mayores",
    introText: "Transformar la fachada de un edificio ya no requiere obras costosas ni semanas de trabajo. La piedra flexible para fachadas se instala directamente sobre la superficie existente, reduciendo tiempos y costos hasta un 70% comparado con enchapes tradicionales. Resultado: una fachada con aspecto de piedra natural premium.",
    introImage: { src: project1, alt: "Piedra flexible fachada comercial" },
    benefits: [
      "Hasta 70% más económico que piedra tradicional",
      "Instalación rápida sin andamios pesados",
      "No requiere refuerzo estructural",
      "Apariencia idéntica a piedra natural",
      "Disponible en múltiples formatos",
      "Ideal para renovaciones y obra nueva",
    ],
    process: sharedProcess,
    gallery: [
      { src: project1, alt: "Fachada comercial piedra flexible" },
      { src: project3, alt: "Fachada residencial" },
      { src: ventaImg, alt: "Detalle piedra flexible fachada" },
    ],
    faqs: [
      { question: "¿Se puede instalar sobre fachada existente?", answer: "Sí, se adhiere directamente sobre concreto, ladrillo, bloque y estuco sin necesidad de demoler la fachada actual." },
      { question: "¿Cuánto cubre un metro cuadrado?", answer: "Cada lámina viene en formatos estándar de 120x60cm (0.72m²). El rendimiento depende del diseño y los cortes necesarios." },
      { question: "¿Tiene garantía contra decoloración?", answer: "Sí, ofrecemos garantía de 10 años contra decoloración y desprendimiento cuando se instala con nuestro equipo profesional." },
    ],
    parentCategory: parent,
    formContext: "Piedra Flexible Fachadas",
    productName: "Piedra Flexible para Fachadas",
  },

  "piedra-flexible-muebles": {
    breadcrumb: "Productos · Piedra Flexible · Muebles",
    title: "Piedra Flexible para",
    highlight: "Muebles",
    description: "Aplica acabados de piedra natural sobre muebles, barras, islas de cocina y superficies de mobiliario.",
    heroImage: { src: ventaImg, alt: "Piedra flexible muebles" },
    introTitle: "Muebles con acabado de",
    introHighlight: "piedra real",
    introText: "La flexibilidad extrema de estas láminas permite aplicar piedra natural sobre superficies curvas, bordes y mobiliario. Perfecta para barras de bar, islas de cocina, mesas de centro, recepciones y cualquier pieza de mobiliario que quieras distinguir con un acabado único e irrepetible.",
    introImage: { src: ventaImg, alt: "Piedra flexible en mueble" },
    benefits: [
      "Se adapta a superficies curvas",
      "Ideal para barras e islas de cocina",
      "Cada pieza es única (piedra natural)",
      "Compatible con selladores alimenticios",
      "Extremadamente liviana",
      "Acabado artesanal premium",
    ],
    process: sharedProcess,
    gallery: [
      { src: ventaImg, alt: "Barra con piedra flexible" },
      { src: project1, alt: "Isla de cocina piedra flexible" },
      { src: project3, alt: "Mesa con piedra flexible" },
    ],
    faqs: [
      { question: "¿Se puede usar en superficies de cocina?", answer: "Sí, con un sellador adecuado apto para contacto con alimentos, la piedra flexible es perfecta para islas y mesones de cocina." },
      { question: "¿Resiste el calor?", answer: "Resiste temperaturas moderadas. Para zonas cercanas a fuentes de calor directas, se recomienda un protector térmico adicional." },
      { question: "¿Se puede aplicar sobre MDF o melamina?", answer: "Sí, se adhiere perfectamente a MDF, melamina, madera sólida y superficies metálicas con la preparación adecuada." },
    ],
    parentCategory: parent,
    formContext: "Piedra Flexible Muebles",
    productName: "Piedra Flexible para Muebles",
  },
};
