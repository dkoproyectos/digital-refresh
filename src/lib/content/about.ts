/**
 * ============================================================
 * CONTENIDO: NOSOTROS
 * ============================================================
 * 🔌 Sanity: *[_type == "aboutPage"][0]
 * ============================================================
 */

import { Award, Users, Target, Heart, Shield, Lightbulb } from "lucide-react";
import type { ValueItem, TimelineItem } from "./types";

export const aboutHero = {
  label: "Nosotros",
  title: "Diseñamos con",
  highlight: "esencia",
  description: "Más de una década creando espacios que reflejan la identidad de cada cliente en Cali y el Valle del Cauca.",
};

export const timeline: TimelineItem[] = [
  { year: "2014", text: "Fundación de DKO Proyectos en Cali con la visión de transformar la industria del diseño interior." },
  { year: "2017", text: "Expansión a proyectos de construcción integral y remodelación de viviendas VIS." },
  { year: "2020", text: "Lanzamiento de la línea de ventas: cortinas, películas solares y recubrimientos." },
  { year: "2023", text: "Más de 500 proyectos completados y alianzas estratégicas con las mejores marcas." },
  { year: "2026", text: "Consolidación como referente en diseño integral y soluciones para el hogar en el Valle del Cauca." },
];

export const companyValues: ValueItem[] = [
  { icon: Award, title: "Excelencia", description: "Cada detalle importa. Nos comprometemos con la más alta calidad en cada proyecto." },
  { icon: Target, title: "Precisión", description: "Cumplimos presupuestos y tiempos, sin sorpresas ni sobrecostos." },
  { icon: Heart, title: "Pasión", description: "Amamos transformar espacios y crear ambientes que inspiran." },
  { icon: Shield, title: "Confianza", description: "Transparencia total en cada etapa del proceso." },
  { icon: Users, title: "Equipo", description: "Profesionales expertos en diseño, arquitectura y construcción." },
  { icon: Lightbulb, title: "Innovación", description: "Tendencias actuales y soluciones creativas para cada espacio." },
];
