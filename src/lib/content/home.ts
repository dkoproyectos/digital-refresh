/**
 * ============================================================
 * CONTENIDO: HOME PAGE
 * ============================================================
 * 🔌 Sanity: Reemplaza estas constantes con queries a Sanity.
 *    Ej: const heroContent = await sanityClient.fetch(`*[_type == "homePage"][0].hero`)
 * ============================================================
 */

import {
  Paintbrush, Home, Building2,
  DollarSign, Ruler, Clock, Award, CreditCard, Users,
} from "lucide-react";
import type { Stat, ServiceItem, PillarItem, AllyItem, ProjectItem, SaleCategory } from "./types";

// Assets locales — reemplazar con URLs de Sanity
import heroImage from "@/assets/hero-home.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import ventaRecubrimiento from "@/assets/venta-recubrimiento.jpg";
import ventaPeliculas from "@/assets/venta-peliculas.jpg";
import ventaCortinas from "@/assets/venta-cortinas.jpg";
import ventaMobiliario from "@/assets/venta-mobiliario.jpg";

// ─── HERO ────────────────────────────────────────────────────
export const heroContent = {
  badge: "Diseño · Remodelación · Interiorismo",
  titleLine1: "Transformamos",
  titleHighlight: "espacios",
  titleLine2: "que inspiran vida",
  description:
    "Gestión y ejecución integral de proyectos de construcción, remodelación, diseño de interiores y decoración en Cali.",
  ctaPrimary: { label: "Cotiza tu Proyecto", href: "#cotizar" },
  ctaSecondary: { label: "Nuestros Servicios", href: "#servicios" },
  image: { src: heroImage, alt: "Diseño de interiores premium en Cali - DKO Proyectos", width: 640, height: 520 },
  floatingCard: { title: "Cali, Colombia", subtitle: "Diseño con esencia" },
};

export const heroStats: Stat[] = [
  { value: "500+", label: "Proyectos" },
  { value: "12", label: "Años" },
  { value: "98%", label: "Satisfacción" },
];

// ─── SERVICIOS ───────────────────────────────────────────────
export const homeServices: ServiceItem[] = [
  {
    icon: Paintbrush,
    title: "Diseño de Interior Premium",
    description: "Transformamos espacios con diseño exclusivo, materiales de alta gama y atención al detalle para proyectos residenciales y comerciales.",
    href: "/servicios/diseno-premium",
  },
  {
    icon: Home,
    title: "Tu Hogar VIS",
    description: "Soluciones inteligentes y accesibles para remodelación de apartamentos VIS, maximizando cada metro cuadrado.",
    href: "/servicios/hogar-vis",
  },
  {
    icon: Building2,
    title: "Rentas Cortas & Airbnb",
    description: "Acabados y decoración optimizados para rentabilidad en plataformas de alquiler temporal.",
    href: "/servicios/rentas-cortas",
  },
];

// ─── ¿POR QUÉ DKO? ──────────────────────────────────────────
export const whyDkoPillars: PillarItem[] = [
  { icon: DollarSign, title: "Presupuesto", text: "Planificamos con precisión para evitar gastos adicionales. Transparencia total." },
  { icon: Ruler, title: "Diseño", text: "Soluciones que equilibran estética, funcionalidad y viabilidad técnica." },
  { icon: Clock, title: "Cumplimiento", text: "Cronogramas detallados con seguimiento para ejecución puntual." },
  { icon: Award, title: "Calidad", text: "Alianza con proveedores certificados y materiales de alta gama." },
  { icon: CreditCard, title: "Financiación", text: "Alternativas propias adaptadas a la magnitud de tu proyecto." },
  { icon: Users, title: "Personal", text: "Expertos en cada etapa, garantizando trabajo profesional y responsable." },
];

export const whyDkoContent = {
  label: "¿Por qué DKO?",
  title: "Gestión integral con",
  titleHighlight: "resultados garantizados",
  description:
    "En DKO no solo diseñamos espacios, los hacemos realidad. Nuestro modelo integral abarca desde la planificación presupuestal hasta la entrega final, con financiación flexible y los mejores materiales del mercado.",
};

// ─── VENTAS (HOME) ───────────────────────────────────────────
export const homeSaleCategories: SaleCategory[] = [
  {
    id: "recubrimiento",
    title: "Recubrimiento de Paredes",
    subtitle: "Interior & Exterior",
    description: "Paneles decorativos, enchapes y soluciones de revestimiento para transformar cualquier superficie con estilo y durabilidad.",
    image: { src: ventaRecubrimiento, alt: "Recubrimiento de paredes" },
    href: "/ventas/recubrimiento",
    products: [
      { name: "Paneles 3D decorativos", href: "/ventas/recubrimiento/paneles-3d" },
      { name: "Enchape de piedra natural", href: "/ventas/recubrimiento/piedra-decorativa" },
      { name: "Papel tapiz premium", href: "/ventas/recubrimiento/papel-tapiz" },
      { name: "Microcemento", href: "/ventas/recubrimiento/microcemento" },
    ],
  },
  {
    id: "peliculas",
    title: "Películas de Protección Solar",
    subtitle: "Control térmico & UV",
    description: "Películas de alta tecnología para ventanas que reducen el calor, bloquean rayos UV y mejoran la eficiencia energética.",
    image: { src: ventaPeliculas, alt: "Películas de protección solar" },
    href: "/ventas/peliculas-solares",
    products: [
      { name: "Control solar", href: "/ventas/peliculas-solares/control-solar" },
      { name: "Privacidad", href: "/ventas/peliculas-solares/privacidad" },
      { name: "Seguridad anti-impacto", href: "/ventas/peliculas-solares/seguridad" },
      { name: "Decorativa esmerilada", href: "/ventas/peliculas-solares/decorativa" },
    ],
  },
  {
    id: "cortinas",
    title: "Cortinas, Persianas y Toldos",
    subtitle: "Control de luz & privacidad",
    description: "Soluciones a medida con las mejores marcas para controlar la luz, la temperatura y la privacidad de tus espacios.",
    image: { src: ventaCortinas, alt: "Cortinas y persianas" },
    href: "/ventas/cortinas-persianas",
    products: [
      { name: "Cortinas roller", href: "/ventas/cortinas-persianas/roller" },
      { name: "Cortinas blackout", href: "/ventas/cortinas-persianas/blackout" },
      { name: "Persianas de madera", href: "/ventas/cortinas-persianas/persianas-madera" },
      { name: "Toldos retráctiles", href: "/ventas/cortinas-persianas/toldos" },
    ],
  },
  {
    id: "mobiliario",
    title: "Mobiliario Exterior",
    subtitle: "Terrazas & jardines",
    description: "Mobiliario resistente a la intemperie con diseño elegante para terrazas, jardines, piscinas y zonas sociales al aire libre.",
    image: { src: ventaMobiliario, alt: "Mobiliario exterior" },
    href: "/ventas/mobiliario-exterior",
    products: [
      { name: "Salas de exterior", href: "/ventas/mobiliario-exterior/salas-exterior" },
      { name: "Comedores de terraza", href: "/ventas/mobiliario-exterior/comedores-terraza" },
      { name: "Sombrillas premium", href: "/ventas/mobiliario-exterior/sombrillas" },
      { name: "Camastros", href: "/ventas/mobiliario-exterior/camastros" },
    ],
  },
];

// ─── PROYECTOS (HOME) ────────────────────────────────────────
export const homeProjects: ProjectItem[] = [
  { image: { src: project1, alt: "Cocina Premium Cataya" }, title: "Cocina Premium Cataya", category: "Diseño Interior", location: "Cali, Valle" },
  { image: { src: project2, alt: "Oficinas Learn English" }, title: "Oficinas Learn English", category: "Corporativo", location: "Cali, Valle" },
  { image: { src: project3, alt: "Apartamento VIS Pie de Loma" }, title: "Apartamento VIS Pie de Loma", category: "Remodelación VIS", location: "Cali, Valle" },
  { image: { src: project4, alt: "Cortinas Capilla SF" }, title: "Cortinas & Persianas Capilla SF", category: "Ventas", location: "Cali, Valle" },
];

// ─── ALIADOS ─────────────────────────────────────────────────
export const allies: AllyItem[] = [
  { name: "Pentagrama" },
  { name: "Neolith" },
  { name: "Alfa" },
  { name: "Hunter Douglas" },
  { name: "Solattu" },
  { name: "3M" },
  { name: "Solar Gard" },
  { name: "Llanogrande" },
];

// ─── CTA SECTION ─────────────────────────────────────────────
export const ctaContent = {
  label: "Cotiza Ahora",
  title: "¿Listo para transformar",
  titleHighlight: "tu espacio?",
  description:
    "Completa el formulario y uno de nuestros expertos se pondrá en contacto contigo para ofrecerte una cotización personalizada.",
};

export const ctaProjectTypes = [
  "Diseño Interior Premium",
  "Remodelación VIS",
  "Rentas Cortas / Airbnb",
  "Cortinas y Persianas",
  "Películas Solares",
  "Mobiliario Exterior",
  "Otro",
];
