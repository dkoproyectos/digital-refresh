/**
 * ============================================================
 * CONTENIDO: PÁGINAS DE VENTAS
 * ============================================================
 * 🔌 Sanity: *[_type == "salesPage" && slug.current == $slug][0]
 *    Los productos individuales vendrán de:
 *    *[_type == "product" && category == $category]
 * ============================================================
 */

import { Sun, Shield, Eye, Sparkles, CheckCircle } from "lucide-react";
import type { SalePageContent } from "./types";

import ventaRecubrimiento from "@/assets/venta-recubrimiento.jpg";
import ventaPeliculas from "@/assets/venta-peliculas.jpg";
import ventaCortinas from "@/assets/venta-cortinas.jpg";
import ventaMobiliario from "@/assets/venta-mobiliario.jpg";
import project1 from "@/assets/project-1.jpg";
import project3 from "@/assets/project-3.jpg";

// ─── LANDING VENTAS ──────────────────────────────────────────
export const ventasLanding = {
  hero: {
    label: "Productos",
    title: "Productos para tu",
    highlight: "espacio",
    description: "Catálogo completo de soluciones en piedra flexible, recubrimientos, protección solar, cortinas y mobiliario exterior.",
  },
  categories: [
    {
      title: "Piedra Flexible",
      description: "Láminas ultradelgadas de piedra natural flexible para revestir cualquier superficie con un acabado único.",
      href: "/productos/piedra-flexible",
      image: { src: ventaRecubrimiento, alt: "Piedra flexible" },
    },
    {
      title: "Recubrimiento de Muros",
      description: "Paneles 3D, papel tapiz, piedra decorativa y enchapes para transformar tus muros interiores y exteriores.",
      href: "/productos/recubrimiento",
      image: { src: ventaRecubrimiento, alt: "Recubrimiento de paredes" },
    },
    {
      title: "Películas de Protección Solar",
      description: "Control solar, privacidad, seguridad anti-impacto y decorativa para vidrios residenciales y comerciales.",
      href: "/productos/peliculas-solares",
      image: { src: ventaPeliculas, alt: "Películas solares" },
    },
    {
      title: "Cortinas, Persianas y Toldos",
      description: "Roller, blackout, sheer elegance, persianas en madera y aluminio, y toldos retráctiles.",
      href: "/productos/cortinas-persianas",
      image: { src: ventaCortinas, alt: "Cortinas y persianas" },
    },
    {
      title: "Mobiliario Exterior",
      description: "Muebles para terraza, balcón y jardín en materiales resistentes a la intemperie y diseño contemporáneo.",
      href: "/productos/mobiliario-exterior",
      image: { src: ventaMobiliario, alt: "Mobiliario exterior" },
    },
  ],
};

// ─── RECUBRIMIENTO ───────────────────────────────────────────
export const recubrimientoContent: SalePageContent = {
  hero: {
    label: "Productos · Recubrimiento",
    title: "Recubrimiento de",
    highlight: "Paredes",
    description: "Soluciones para exterior e interior que transforman cualquier muro en una obra de arte.",
    bannerImage: { src: ventaRecubrimiento, alt: "Recubrimiento de paredes" },
  },
  products: [
    { name: "Paneles 3D", description: "Relieve tridimensional para paredes interiores con diseños exclusivos." },
    { name: "Papel Tapiz", description: "Amplia variedad de texturas, patrones y colores para todos los estilos." },
    { name: "Piedra Decorativa", description: "Revestimientos en piedra natural y sintética para interiores y exteriores." },
    { name: "Enchapes Cerámicos", description: "Porcelanatos y cerámicas de última generación para pisos y paredes." },
    { name: "Madera Decorativa", description: "Paneles y láminas en madera natural y laminada." },
    { name: "Microcemento", description: "Acabado continuo moderno para pisos, paredes y superficies." },
  ],
  gallery: [
    { src: ventaRecubrimiento, alt: "Recubrimiento proyecto 1" },
    { src: project1, alt: "Recubrimiento proyecto 2" },
    { src: project3, alt: "Recubrimiento proyecto 3" },
  ],
  faqs: [
    { question: "¿Hacen instalación?", answer: "Sí, nuestro equipo se encarga de la venta e instalación completa." },
    { question: "¿Tienen muestras disponibles?", answer: "Sí, podemos llevar muestras a tu domicilio o visitarnos en showroom." },
    { question: "¿Cuánto tarda la instalación?", answer: "Depende del área, pero la mayoría de proyectos se completan en 1 a 3 días." },
  ],
  formContext: "Recubrimiento de Muros",
};

// ─── PELÍCULAS SOLARES ───────────────────────────────────────
export const peliculasSolaresContent: SalePageContent = {
  hero: {
    label: "Productos · Películas Solares",
    title: "Películas de Protección",
    highlight: "Solar",
    description: "Control solar, seguridad y privacidad para vidrios residenciales y comerciales.",
    bannerImage: { src: ventaPeliculas, alt: "Películas solares" },
  },
  products: [
    { icon: Sun, name: "Control Solar", description: "Reduce hasta el 80% del calor sin perder luminosidad natural." },
    { icon: Eye, name: "Privacidad", description: "Películas espejo y frosted para privacidad sin sacrificar la luz." },
    { icon: Shield, name: "Seguridad Anti-impacto", description: "Protección contra roturas, robos y desastres naturales." },
    { icon: Sparkles, name: "Decorativa", description: "Diseños, texturas y colores para vidrios con estilo." },
  ],
  benefits: [
    "Ahorro energético hasta 30%",
    "Protección UV al 99%",
    "Instalación profesional",
    "Garantía del fabricante",
    "Aplicación residencial y comercial",
    "Muestras gratuitas",
  ],
  formContext: "Películas de Protección Solar",
};

// ─── CORTINAS Y PERSIANAS ────────────────────────────────────
export const cortinasContent: SalePageContent = {
  hero: {
    label: "Productos · Cortinas y Persianas",
    title: "Cortinas, Persianas y",
    highlight: "Toldos",
    description: "Control de luz, privacidad y diseño para cada espacio de tu hogar u oficina.",
    bannerImage: { src: ventaCortinas, alt: "Cortinas y persianas" },
  },
  products: [
    { name: "Roller", description: "Enrollables en screen, blackout y traslúcidas para ambientes modernos." },
    { name: "Blackout", description: "Oscurecimiento total para dormitorios, salas de cine y oficinas." },
    { name: "Sheer Elegance", description: "Doble tela con bandas alternas para controlar luz con elegancia." },
    { name: "Persianas de Madera", description: "Calidez natural y control de privacidad con acabados premium." },
    { name: "Persianas de Aluminio", description: "Durables y funcionales para espacios húmedos y comerciales." },
    { name: "Toldos Retráctiles", description: "Protección solar exterior para terrazas, balcones y fachadas." },
  ],
  formContext: "Cortinas, Persianas y Toldos",
};

// ─── MOBILIARIO EXTERIOR ─────────────────────────────────────
export const mobiliarioContent: SalePageContent = {
  hero: {
    label: "Productos · Mobiliario Exterior",
    title: "Mobiliario",
    highlight: "Exterior",
    description: "Muebles resistentes y con diseño para terrazas, balcones, jardines y zonas sociales.",
    bannerImage: { src: ventaMobiliario, alt: "Mobiliario exterior" },
  },
  products: [
    { name: "Salas de Exterior", description: "Conjuntos de sofás y sillones en ratán sintético, aluminio y teca." },
    { name: "Comedores de Terraza", description: "Mesas y sillas resistentes a la intemperie con diseño contemporáneo." },
    { name: "Camastros y Daybeds", description: "Ideales para piscina, terraza y zonas de descanso al aire libre." },
    { name: "Sombrillas y Parasoles", description: "Protección solar con estilo en múltiples tamaños y colores." },
    { name: "Macetas y Jardineras", description: "Fibra de vidrio, cemento y cerámica en diseños modernos." },
    { name: "Accesorios", description: "Cojines, iluminación exterior y elementos decorativos weather-proof." },
  ],
  formContext: "Mobiliario Exterior",
};
