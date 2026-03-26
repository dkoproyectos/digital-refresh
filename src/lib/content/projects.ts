/**
 * ============================================================
 * CONTENIDO: PÁGINA DE PROYECTOS
 * ============================================================
 * 🔌 Sanity: *[_type == "project"] | order(date desc)
 * ============================================================
 */

import type { ProjectItem } from "./types";

import heroImg from "@/assets/hero-home.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export const projectsHero = {
  label: "Proyectos",
  title: "Nuestro",
  highlight: "portafolio",
  description: "Galería de proyectos realizados en diseño interior, remodelación y ventas en Cali.",
};

export const projectFilters = ["Todos", "Diseño Premium", "Hogar VIS", "Rentas Cortas", "Ventas"];

export const allProjects: ProjectItem[] = [
  { image: { src: heroImg, alt: "Penthouse El Peñón" }, title: "Penthouse El Peñón", category: "Diseño Premium", location: "Cali" },
  { image: { src: project1, alt: "Apartamento Ciudad Jardín" }, title: "Apartamento Ciudad Jardín", category: "Diseño Premium", location: "Cali" },
  { image: { src: project2, alt: "Loft Airbnb San Antonio" }, title: "Loft Airbnb San Antonio", category: "Rentas Cortas", location: "Cali" },
  { image: { src: project3, alt: "Hogar VIS Valle del Lili" }, title: "Hogar VIS Valle del Lili", category: "Hogar VIS", location: "Cali" },
  { image: { src: project4, alt: "Studio Airbnb Granada" }, title: "Studio Airbnb Granada", category: "Rentas Cortas", location: "Cali" },
  { image: { src: heroImg, alt: "Oficinas Holguines" }, title: "Oficinas Holguines", category: "Diseño Premium", location: "Cali" },
  { image: { src: project1, alt: "Apartamento Torres de Comfandi" }, title: "Apartamento Torres de Comfandi", category: "Hogar VIS", location: "Cali" },
  { image: { src: project3, alt: "Películas Solares Edificio Carvajal" }, title: "Películas Solares Edificio Carvajal", category: "Ventas", location: "Cali" },
  { image: { src: project2, alt: "Cortinas Residencia Pance" }, title: "Cortinas Residencia Pance", category: "Ventas", location: "Cali" },
];
