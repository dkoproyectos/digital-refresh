/**
 * ============================================================
 * CONTENIDO: Estilos de Hogar VIS (sub-categorías)
 * ============================================================
 * 🔌 Sanity: *[_type == "hogarVisStyle" && slug.current == $slug][0]
 * ============================================================
 */

import { Ruler, Palette, Wrench, Sparkles } from "lucide-react";
import type { ProductLandingData } from "@/components/ProductLanding";

import heroImg from "@/assets/hero-home.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const sharedProcess: ProductLandingData["process"] = [
  { icon: Ruler, title: "Visita Técnica", description: "Evaluamos tu vivienda VIS y definimos el estilo ideal." },
  { icon: Palette, title: "Diseño", description: "Propuesta de diseño con renders y paleta de materiales." },
  { icon: Wrench, title: "Ejecución", description: "Remodelación eficiente con mínima interrupción." },
  { icon: Sparkles, title: "Entrega", description: "Tu hogar transformado y listo para disfrutar." },
];

const parent = { label: "Tu Hogar VIS", href: "/servicios/hogar-vis" };

export const hogarVisStyles: Record<string, ProductLandingData> = {
  moderno: {
    breadcrumb: "Servicios · Hogar VIS · Moderno",
    title: "Estilo",
    highlight: "Moderno",
    description: "Líneas limpias, colores neutros y acabados contemporáneos para tu vivienda VIS.",
    heroImage: { src: heroImg, alt: "Estilo moderno VIS" },
    introTitle: "Espacios actuales en tu",
    introHighlight: "hogar VIS",
    introText: "El estilo moderno para viviendas VIS combina funcionalidad con estética contemporánea. Utilizamos colores neutros, muebles de líneas rectas y acabados en alto brillo o mate para crear ambientes amplios y luminosos, maximizando cada metro cuadrado.",
    introImage: { src: project1, alt: "Hogar VIS moderno" },
    benefits: [
      "Paleta de colores neutros y elegantes",
      "Mobiliario de líneas rectas",
      "Acabados en alto brillo y mate",
      "Iluminación LED integrada",
      "Optimización de espacios reducidos",
      "Materiales de fácil mantenimiento",
    ],
    process: sharedProcess,
    gallery: [
      { src: heroImg, alt: "VIS moderno sala" },
      { src: project1, alt: "VIS moderno cocina" },
      { src: project2, alt: "VIS moderno habitación" },
    ],
    faqs: [
      { question: "¿Qué incluye el paquete moderno?", answer: "Incluye diseño de interiores, pintura, iluminación LED, instalación de mobiliario y acabados en pisos y paredes." },
      { question: "¿Cuánto tiempo toma la remodelación?", answer: "Entre 2 y 4 semanas dependiendo del alcance del proyecto." },
      { question: "¿Ofrecen financiación?", answer: "Sí, contamos con opciones de financiación hasta 12 meses." },
    ],
    parentCategory: parent,
    formContext: "Hogar VIS - Estilo Moderno",
    productName: "Estilo Moderno",
  },

  minimalista: {
    breadcrumb: "Servicios · Hogar VIS · Minimalista",
    title: "Estilo",
    highlight: "Minimalista",
    description: "Menos es más. Espacios despejados, funcionales y con máxima sensación de amplitud.",
    heroImage: { src: project2, alt: "Estilo minimalista VIS" },
    introTitle: "Simplicidad que",
    introHighlight: "transforma",
    introText: "El estilo minimalista es ideal para viviendas VIS donde cada centímetro cuenta. Eliminamos lo innecesario y potenciamos la funcionalidad con almacenamiento inteligente, colores claros y materiales naturales que crean una sensación de calma y amplitud.",
    introImage: { src: project3, alt: "Hogar VIS minimalista" },
    benefits: [
      "Almacenamiento oculto e inteligente",
      "Paleta monocromática y natural",
      "Muebles multifuncionales",
      "Espacios despejados y ordenados",
      "Materiales naturales (madera, lino)",
      "Sensación de amplitud visual",
    ],
    process: sharedProcess,
    gallery: [
      { src: project2, alt: "VIS minimalista sala" },
      { src: project3, alt: "VIS minimalista dormitorio" },
      { src: heroImg, alt: "VIS minimalista cocina" },
    ],
    faqs: [
      { question: "¿El minimalismo funciona en espacios pequeños?", answer: "¡Es ideal! El minimalismo maximiza la sensación de espacio al eliminar elementos innecesarios y usar colores claros." },
      { question: "¿Qué tipo de muebles usan?", answer: "Muebles multifuncionales, como camas con almacenamiento, mesas plegables y estanterías flotantes." },
      { question: "¿Incluye organización de espacios?", answer: "Sí, diseñamos soluciones de almacenamiento a medida para aprovechar cada rincón." },
    ],
    parentCategory: parent,
    formContext: "Hogar VIS - Estilo Minimalista",
    productName: "Estilo Minimalista",
  },

  industrial: {
    breadcrumb: "Servicios · Hogar VIS · Industrial",
    title: "Estilo",
    highlight: "Industrial",
    description: "Carácter urbano con materiales expuestos, metal y acabados tipo loft para tu VIS.",
    heroImage: { src: project4, alt: "Estilo industrial VIS" },
    introTitle: "Carácter urbano en tu",
    introHighlight: "hogar",
    introText: "El estilo industrial aporta personalidad y carácter a viviendas VIS. Combinamos elementos como ladrillo expuesto (real o vinílico), tuberías vistas decorativas, metal negro y madera rústica para crear un ambiente tipo loft accesible y lleno de estilo.",
    introImage: { src: project4, alt: "Hogar VIS industrial" },
    benefits: [
      "Ladrillo expuesto o paneles vinílicos",
      "Elementos metálicos decorativos",
      "Madera rústica recuperada",
      "Iluminación tipo Edison",
      "Colores oscuros y cálidos",
      "Estanterías industriales abiertas",
    ],
    process: sharedProcess,
    gallery: [
      { src: project4, alt: "VIS industrial sala" },
      { src: project1, alt: "VIS industrial cocina" },
      { src: project3, alt: "VIS industrial dormitorio" },
    ],
    faqs: [
      { question: "¿Se puede lograr el look industrial en un VIS?", answer: "¡Absolutamente! Usamos materiales vinílicos tipo ladrillo, pintura de efecto cemento y accesorios metálicos que logran el look sin intervenciones estructurales." },
      { question: "¿Es más costoso que otros estilos?", answer: "No necesariamente. Muchos elementos industriales son económicos, como pintura efecto concreto y tuberías decorativas." },
      { question: "¿Combina bien con espacios pequeños?", answer: "Sí, el estilo industrial con tonos claros y elementos verticales puede hacer que los espacios se sientan más amplios." },
    ],
    parentCategory: parent,
    formContext: "Hogar VIS - Estilo Industrial",
    productName: "Estilo Industrial",
  },
};
