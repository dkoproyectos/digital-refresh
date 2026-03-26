/**
 * ============================================================
 * TIPOS PARA CONTENIDO CMS-READY
 * ============================================================
 * Estos tipos definen la estructura de cada "cajita" de contenido.
 * Cuando conectes Sanity, los queries deben retornar objetos
 * que cumplan con estas interfaces.
 * ============================================================
 */

import type { LucideIcon } from "lucide-react";

/** Imagen que viene de Sanity o de assets locales */
export interface CMSImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

/** Estadística del hero o secciones */
export interface Stat {
  value: string;
  label: string;
}

/** Servicio mostrado en cards */
export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  image?: CMSImage;
}

/** Pilar / diferenciador (¿Por qué DKO?) */
export interface PillarItem {
  icon: LucideIcon;
  title: string;
  text: string;
}

/** Categoría de venta */
export interface SaleCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: CMSImage;
  href: string;
  products: string[];
}

/** Proyecto del portafolio */
export interface ProjectItem {
  image: CMSImage;
  title: string;
  category: string;
  location: string;
}

/** Aliado / marca */
export interface AllyItem {
  name: string;
  logo?: CMSImage;
}

/** Elemento de timeline */
export interface TimelineItem {
  year: string;
  text: string;
}

/** Miembro del equipo */
export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: CMSImage;
}

/** Valor de la empresa */
export interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

/** Producto de una línea de venta */
export interface ProductItem {
  icon?: LucideIcon;
  name: string;
  description: string;
  image?: CMSImage;
  price?: string;
}

/** Paso de un proceso */
export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

/** FAQ */
export interface FAQItem {
  question: string;
  answer: string;
}

/** Contenido de sección hero de página */
export interface PageHeroContent {
  label: string;
  title: string;
  highlight: string;
  description: string;
  bannerImage?: CMSImage;
}

/** Contenido completo de una página de servicio */
export interface ServicePageContent {
  hero: PageHeroContent;
  intro: {
    title: string;
    titleHighlight: string;
    description: string;
    features: string[];
    image: CMSImage;
  };
  process: ProcessStep[];
  projects: CMSImage[];
  faqs: FAQItem[];
  formContext: string;
}

/** Contenido completo de una página de venta */
export interface SalePageContent {
  hero: PageHeroContent;
  products: ProductItem[];
  benefits?: string[];
  gallery?: CMSImage[];
  faqs?: FAQItem[];
  formContext: string;
}
