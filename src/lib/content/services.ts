/**
 * ============================================================
 * CONTENIDO: PÁGINAS DE SERVICIOS
 * ============================================================
 * 🔌 Sanity: *[_type == "servicePage" && slug.current == $slug][0]
 * ============================================================
 */

import {
  Paintbrush, Home, Building,
  Ruler, Palette, Sofa, Sparkles, CheckCircle,
  DollarSign, Clock, Wrench,
  Camera, Bed, Star, TrendingUp,
} from "lucide-react";
import type { ServicePageContent, ServiceItem } from "./types";

import heroImg from "@/assets/hero-home.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

// ─── LANDING SERVICIOS ───────────────────────────────────────
export const serviciosLanding = {
  hero: {
    label: "Servicios",
    title: "Soluciones integrales de",
    highlight: "diseño",
    description: "Desde la conceptualización hasta la entrega final, gestionamos cada etapa de tu proyecto.",
  },
  services: [
    {
      icon: Paintbrush,
      title: "Diseño de Interior Premium",
      description: "Proyectos de alto nivel con materiales exclusivos, diseño personalizado y acabados de lujo para espacios residenciales y comerciales.",
      href: "/servicios/diseno-premium",
      image: { src: heroImg, alt: "Diseño de interior premium" },
    },
    {
      icon: Home,
      title: "Tu Hogar VIS",
      description: "Soluciones inteligentes de diseño y remodelación para viviendas de interés social, maximizando cada metro cuadrado.",
      href: "/servicios/hogar-vis",
      image: { src: project1, alt: "Hogar VIS" },
    },
    {
      icon: Building,
      title: "Acabados para Rentas Cortas",
      description: "Diseño funcional y atractivo para propiedades de renta turística. Espacios que generan más reservas y mejores reseñas.",
      href: "/servicios/rentas-cortas",
      image: { src: project2, alt: "Rentas cortas" },
    },
  ] as (ServiceItem & { image: { src: string; alt: string } })[],
};

// ─── DISEÑO PREMIUM ──────────────────────────────────────────
export const disenoPremiumContent: ServicePageContent = {
  hero: {
    label: "Servicios · Diseño Premium",
    title: "Diseño de Interior",
    highlight: "Premium",
    description: "Espacios exclusivos con materiales de alta gama, diseño personalizado y ejecución impecable.",
    bannerImage: { src: heroImg, alt: "Diseño de interiores premium" },
  },
  intro: {
    title: "Creamos espacios que",
    titleHighlight: "trascienden",
    description: "Nuestro servicio de Diseño de Interior Premium está diseñado para clientes que buscan exclusividad, atención al detalle y una experiencia completamente personalizada. Desde la conceptualización hasta la entrega, cada elemento es cuidadosamente seleccionado.",
    features: [
      "Renders 3D fotorrealistas",
      "Materiales importados premium",
      "Mobiliario personalizado",
      "Iluminación arquitectónica",
      "Asesoría en arte y decoración",
      "Garantía post-entrega",
    ],
    image: { src: project1, alt: "Proyecto premium" },
  },
  process: [
    { icon: Ruler, title: "Consultoría Inicial", description: "Visita al espacio, análisis de necesidades y definición del presupuesto." },
    { icon: Palette, title: "Diseño Conceptual", description: "Propuesta de diseño con renders 3D, paleta de colores y materiales." },
    { icon: Sofa, title: "Ejecución", description: "Gestión integral de obra, coordinación de proveedores y control de calidad." },
    { icon: Sparkles, title: "Entrega", description: "Decoración final, ambientación y entrega del espacio transformado." },
  ],
  projects: [
    { src: heroImg, alt: "Proyecto premium 1" },
    { src: project1, alt: "Proyecto premium 2" },
    { src: project2, alt: "Proyecto premium 3" },
  ],
  faqs: [
    { question: "¿Cuánto tarda un proyecto de diseño premium?", answer: "Dependiendo de la complejidad, entre 4 y 12 semanas desde el diseño hasta la entrega final." },
    { question: "¿Trabajan con presupuesto definido?", answer: "Sí, nos adaptamos a tu presupuesto y te presentamos opciones dentro de tu rango." },
    { question: "¿Incluyen la compra de materiales?", answer: "Sí, gestionamos toda la cadena: selección, compra, transporte e instalación." },
  ],
  formContext: "Diseño de Interior Premium",
};

// ─── HOGAR VIS ───────────────────────────────────────────────
export const hogarVisContent: ServicePageContent = {
  hero: {
    label: "Servicios · Hogar VIS",
    title: "Tu Hogar",
    highlight: "VIS",
    description: "Soluciones de diseño y remodelación inteligentes para viviendas de interés social.",
    bannerImage: { src: project3, alt: "Hogar VIS" },
  },
  intro: {
    title: "Maximiza cada",
    titleHighlight: "metro cuadrado",
    description: "Entendemos que un hogar VIS merece ser funcional, bonito y cómodo. Diseñamos soluciones que aprovechan cada espacio, con materiales de calidad y precios justos.",
    features: [
      "Diseño inteligente para espacios compactos",
      "Materiales de calidad a precios accesibles",
      "Financiación disponible",
      "Entrega en tiempos récord",
      "Asesoría gratuita inicial",
      "Garantía en todos los trabajos",
    ],
    image: { src: project1, alt: "Hogar VIS proyecto" },
  },
  process: [
    { icon: Home, title: "Visita Técnica", description: "Evaluamos tu vivienda VIS y detectamos todo el potencial." },
    { icon: DollarSign, title: "Presupuesto", description: "Cotización detallada con opciones de financiación." },
    { icon: Wrench, title: "Ejecución", description: "Remodelación eficiente con mínima interrupción." },
    { icon: Clock, title: "Entrega Rápida", description: "Tu hogar transformado en el menor tiempo posible." },
  ],
  projects: [],
  faqs: [],
  formContext: "Tu Hogar VIS",
};

// ─── RENTAS CORTAS ───────────────────────────────────────────
export const rentasCortasContent: ServicePageContent = {
  hero: {
    label: "Servicios · Rentas Cortas",
    title: "Acabados para",
    highlight: "Rentas Cortas",
    description: "Diseño que maximiza reservas y genera las mejores reseñas en plataformas como Airbnb y Booking.",
    bannerImage: { src: project4, alt: "Rentas cortas" },
  },
  intro: {
    title: "Espacios que",
    titleHighlight: "generan ingresos",
    description: "Diseñamos propiedades de renta corta con un enfoque 100% estratégico: cada elemento está pensado para que tu espacio se vea increíble en fotos, reciba reseñas 5 estrellas y maximice tu ocupación.",
    features: [
      "Diseño enfocado en fotografía para plataformas",
      "Mobiliario resistente y estético",
      "Optimización para reseñas 5 estrellas",
      "Ambientación tipo hotel boutique",
      "Gestión integral del proyecto",
      "Mantenimiento post-entrega",
    ],
    image: { src: project2, alt: "Rentas cortas proyecto" },
  },
  process: [
    { icon: Camera, title: "Análisis de Mercado", description: "Estudiamos tu zona y el perfil de huéspedes ideales." },
    { icon: Bed, title: "Diseño Estratégico", description: "Cada elemento pensado para maximizar reservas." },
    { icon: Star, title: "Ejecución", description: "Remodelación y ambientación profesional." },
    { icon: TrendingUp, title: "Resultados", description: "Tu propiedad lista para generar ingresos desde el día 1." },
  ],
  projects: [],
  faqs: [],
  formContext: "Acabados para Rentas Cortas",
};
