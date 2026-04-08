/**
 * ============================================================
 * CONTENIDO: Subcategorías de Recubrimiento de Muros
 * ============================================================
 * 🔌 Sanity: *[_type == "product" && category == "recubrimiento"]
 *    Nivel 1: subcategorías (Papel de Colgadura, Panel para Muros)
 *    Nivel 2: productos individuales → recubrimiento-items.ts
 * ============================================================
 */

import { ClipboardList, Ruler, Truck, Wrench } from "lucide-react";
import type { ProductLandingData } from "@/components/ProductLanding";

import ventaImg from "@/assets/venta-recubrimiento.jpg";
import project1 from "@/assets/project-1.jpg";
import project3 from "@/assets/project-3.jpg";

const sharedProcess: ProductLandingData["process"] = [
  { icon: ClipboardList, title: "Asesoría", description: "Te ayudamos a elegir el producto ideal según tu espacio y estilo." },
  { icon: Ruler, title: "Medición", description: "Visita técnica para tomar medidas exactas sin costo." },
  { icon: Truck, title: "Entrega", description: "Recibe tu producto en la puerta de tu hogar u oficina." },
  { icon: Wrench, title: "Instalación", description: "Nuestro equipo profesional realiza la instalación completa." },
];

const parent = { label: "Recubrimiento de Muros", href: "/productos/recubrimiento" };

export const recubrimientoProducts: Record<string, ProductLandingData> = {
  "papel-colgadura": {
    breadcrumb: "Productos · Recubrimiento · Papel de Colgadura",
    title: "Papel de",
    highlight: "Colgadura",
    description: "Amplia variedad de papeles tapiz, murales y texturas decorativas para transformar tus paredes con estilo y personalidad.",
    heroImage: { src: ventaImg, alt: "Papel de colgadura" },
    introTitle: "Paredes con",
    introHighlight: "personalidad",
    introText: "El papel de colgadura es una de las formas más versátiles y elegantes de renovar un espacio. Ofrecemos colecciones de las mejores marcas internacionales con diseños que van desde lo clásico hasta lo contemporáneo. Texturas, estampados florales, geométricos, tropicales y acabados metalizados.",
    introImage: { src: ventaImg, alt: "Papel de colgadura instalado" },
    benefits: [
      "Más de 500 diseños disponibles",
      "Marcas internacionales premium",
      "Instalación rápida y limpia",
      "Lavable y resistente",
      "Opciones eco-friendly",
      "Fácil de reemplazar",
    ],
    process: sharedProcess,
    gallery: [
      { src: ventaImg, alt: "Papel colgadura sala" },
      { src: project1, alt: "Papel colgadura dormitorio" },
      { src: project3, alt: "Papel colgadura oficina" },
    ],
    faqs: [
      { question: "¿El papel de colgadura se puede quitar sin dañar la pared?", answer: "Sí, los papeles modernos son removibles y no dejan residuos en la pared." },
      { question: "¿Cuánto dura el papel de colgadura?", answer: "Con buen cuidado, un papel de calidad dura entre 10 y 15 años." },
      { question: "¿Se puede instalar sobre paredes con textura?", answer: "Se recomienda una superficie lisa. Si la pared tiene textura, se puede preparar con masilla antes de la instalación." },
    ],
    parentCategory: parent,
    formContext: "Papel de Colgadura - Recubrimiento",
    productName: "Papel de Colgadura",
  },

  "panel-muros": {
    breadcrumb: "Productos · Recubrimiento · Panel para Muros",
    title: "Panel para",
    highlight: "Muros",
    description: "Paneles decorativos 3D, madera, piedra sintética y microcemento para revestir muros con texturas y acabados de alto impacto.",
    heroImage: { src: project1, alt: "Panel para muros" },
    introTitle: "Muros con textura y",
    introHighlight: "carácter",
    introText: "Nuestros paneles para muros ofrecen soluciones de revestimiento con alto impacto visual. Desde paneles 3D en PVC y yeso hasta enchapes cerámicos, madera decorativa y microcemento. Cada opción transforma cualquier superficie plana en un elemento arquitectónico protagonista.",
    introImage: { src: project1, alt: "Panel para muros instalado" },
    benefits: [
      "Variedad de materiales y texturas",
      "Instalación sin obras mayores",
      "Apto para interior y exterior",
      "Alta durabilidad y resistencia",
      "Se pueden pintar y personalizar",
      "Aislamiento acústico adicional",
    ],
    process: sharedProcess,
    gallery: [
      { src: project1, alt: "Panel muros sala" },
      { src: ventaImg, alt: "Panel muros recepción" },
      { src: project3, alt: "Panel muros comercial" },
    ],
    faqs: [
      { question: "¿Qué tipos de paneles manejan?", answer: "Paneles 3D (PVC, yeso, fibra vegetal), enchapes cerámicos, madera decorativa, piedra sintética y microcemento." },
      { question: "¿Se pueden instalar en exteriores?", answer: "Sí, contamos con líneas específicas para exterior con tratamiento anti-humedad y UV." },
      { question: "¿Cuánto tarda la instalación?", answer: "Una pared estándar se instala en 1-2 horas. Proyectos completos en 1-3 días." },
    ],
    parentCategory: parent,
    formContext: "Panel para Muros - Recubrimiento",
    productName: "Panel para Muros",
  },
};
