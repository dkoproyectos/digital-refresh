/**
 * ============================================================
 * CONTENIDO: NOSOTROS
 * ============================================================
 * 🔌 Sanity: *[_type == "aboutPage"][0]
 * ============================================================
 */

import { Award, Users, Target, Heart, Shield, Lightbulb } from "lucide-react";
import type { ValueItem, TeamMember } from "./types";

export const aboutHero = {
  label: "Nosotros",
  title: "Diseñamos con",
  highlight: "esencia",
  description: "Más de una década creando espacios que reflejan la identidad de cada cliente en Cali y el Valle del Cauca.",
};

/**
 * 🔌 Sanity: *[_type == "teamMember"] | order(order asc)
 * Reemplaza name, role, description e image desde el CMS.
 */
export const teamMembers: TeamMember[] = [
  {
    name: "Nombre del Fundador",
    role: "Director General",
    description: "Líder visionario con más de 10 años de experiencia en diseño de interiores y gestión de proyectos.",
    image: { src: "/placeholder.svg", alt: "Foto del Director General" },
  },
  {
    name: "Nombre del Miembro",
    role: "Diseñador(a) de Interiores",
    description: "Especialista en crear ambientes funcionales y estéticos que reflejan la personalidad de cada cliente.",
    image: { src: "/placeholder.svg", alt: "Foto del Diseñador de Interiores" },
  },
  {
    name: "Nombre del Miembro",
    role: "Coordinador(a) de Proyectos",
    description: "Responsable de la planificación, ejecución y entrega puntual de cada proyecto.",
    image: { src: "/placeholder.svg", alt: "Foto del Coordinador de Proyectos" },
  },
  {
    name: "Nombre del Miembro",
    role: "Asesor(a) Comercial",
    description: "Encargado de guiar a los clientes en la selección de productos y soluciones ideales para su espacio.",
    image: { src: "/placeholder.svg", alt: "Foto del Asesor Comercial" },
  },
  {
    name: "Nombre del Miembro",
    role: "Instalador(a) Técnico",
    description: "Experto en la instalación profesional de cortinas, películas solares y recubrimientos.",
    image: { src: "/placeholder.svg", alt: "Foto del Instalador Técnico" },
  },
];

export const companyValues: ValueItem[] = [
  { icon: Award, title: "Excelencia", description: "Cada detalle importa. Nos comprometemos con la más alta calidad en cada proyecto." },
  { icon: Target, title: "Precisión", description: "Cumplimos presupuestos y tiempos, sin sorpresas ni sobrecostos." },
  { icon: Heart, title: "Pasión", description: "Amamos transformar espacios y crear ambientes que inspiran." },
  { icon: Shield, title: "Confianza", description: "Transparencia total en cada etapa del proceso." },
  { icon: Users, title: "Equipo", description: "Profesionales expertos en diseño, arquitectura y construcción." },
  { icon: Lightbulb, title: "Innovación", description: "Tendencias actuales y soluciones creativas para cada espacio." },
];
