/**
 * ============================================================
 * CONTENIDO: Productos de Recubrimiento de Paredes
 * ============================================================
 * 🔌 Sanity: *[_type == "product" && category == "recubrimiento"]
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

const parent = { label: "Recubrimiento de Paredes", href: "/ventas/recubrimiento" };

export const recubrimientoProducts: Record<string, ProductLandingData> = {
  "paneles-3d": {
    breadcrumb: "Ventas · Recubrimiento · Paneles 3D",
    title: "Paneles",
    highlight: "3D",
    description: "Relieve tridimensional para paredes interiores con diseños exclusivos que transforman cualquier ambiente.",
    heroImage: { src: ventaImg, alt: "Paneles 3D decorativos" },
    introTitle: "Dale profundidad a tus",
    introHighlight: "paredes",
    introText: "Los paneles 3D son la solución perfecta para crear paredes con personalidad. Fabricados en PVC, yeso o fibra vegetal, ofrecen una variedad de texturas y patrones que transforman cualquier espacio plano en una obra de arte tridimensional. Ideales para salas, recepciones, oficinas y espacios comerciales.",
    introImage: { src: ventaImg, alt: "Paneles 3D instalados" },
    benefits: [
      "Fácil instalación sin obras mayores",
      "Resistentes a la humedad (PVC)",
      "Variedad de diseños y texturas",
      "Se pueden pintar en cualquier color",
      "Aislamiento acústico adicional",
      "Mantenimiento mínimo",
    ],
    process: sharedProcess,
    gallery: [
      { src: ventaImg, alt: "Paneles 3D sala" },
      { src: project1, alt: "Paneles 3D recepción" },
      { src: project3, alt: "Paneles 3D oficina" },
    ],
    faqs: [
      { question: "¿Cuánto cuestan los paneles 3D por metro cuadrado?", answer: "El precio varía según el material y diseño. Desde $35.000/m² en PVC hasta $120.000/m² en diseños premium. Solicita cotización personalizada." },
      { question: "¿Se pueden instalar en baños o cocinas?", answer: "Sí, los paneles de PVC son resistentes a la humedad y son ideales para estos espacios." },
      { question: "¿Cuánto tarda la instalación?", answer: "Una pared estándar se instala en 1-2 horas. Proyectos completos en 1-2 días." },
    ],
    parentCategory: parent,
    formContext: "Paneles 3D - Recubrimiento",
    productName: "Paneles 3D",
  },

  "papel-tapiz": {
    breadcrumb: "Ventas · Recubrimiento · Papel Tapiz",
    title: "Papel",
    highlight: "Tapiz",
    description: "Amplia variedad de texturas, patrones y colores premium para transformar tus paredes con estilo.",
    heroImage: { src: ventaImg, alt: "Papel tapiz decorativo" },
    introTitle: "Paredes con",
    introHighlight: "personalidad",
    introText: "El papel tapiz es una de las formas más versátiles y económicas de renovar un espacio. Ofrecemos colecciones de las mejores marcas internacionales con diseños que van desde lo clásico hasta lo contemporáneo. Texturas, estampados florales, geométricos, tropicales y acabados metalizados.",
    introImage: { src: project1, alt: "Papel tapiz instalado" },
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
      { src: ventaImg, alt: "Papel tapiz dormitorio" },
      { src: project1, alt: "Papel tapiz sala" },
      { src: project3, alt: "Papel tapiz oficina" },
    ],
    faqs: [
      { question: "¿El papel tapiz se puede quitar sin dañar la pared?", answer: "Sí, los papeles tapiz modernos son removibles y no dejan residuos en la pared." },
      { question: "¿Cuánto dura el papel tapiz?", answer: "Con buen cuidado, un papel tapiz de calidad dura entre 10 y 15 años." },
      { question: "¿Se puede instalar sobre paredes con textura?", answer: "Se recomienda una superficie lisa. Si la pared tiene textura, se puede preparar con masilla antes de la instalación." },
    ],
    parentCategory: parent,
    formContext: "Papel Tapiz - Recubrimiento",
    productName: "Papel Tapiz",
  },

  "piedra-decorativa": {
    breadcrumb: "Ventas · Recubrimiento · Piedra Decorativa",
    title: "Piedra",
    highlight: "Decorativa",
    description: "Revestimientos en piedra natural y sintética para darle carácter y elegancia a tus interiores y exteriores.",
    heroImage: { src: ventaImg, alt: "Piedra decorativa" },
    introTitle: "La nobleza de la",
    introHighlight: "piedra",
    introText: "La piedra decorativa aporta calidez, textura y un carácter único a cualquier espacio. Trabajamos con piedra natural (pizarra, cuarcita, mármol) y piedra sintética de alta calidad que replica fielmente las texturas naturales con menor peso y costo. Perfecta para muros de acento, chimeneas, fachadas y jardines.",
    introImage: { src: project3, alt: "Piedra decorativa instalada" },
    benefits: [
      "Piedra natural y sintética disponible",
      "Resistente a intemperie",
      "Múltiples texturas y colores",
      "Apto para interior y exterior",
      "Alta durabilidad",
      "Aumenta el valor del inmueble",
    ],
    process: sharedProcess,
    gallery: [
      { src: ventaImg, alt: "Piedra decorativa muro" },
      { src: project1, alt: "Piedra decorativa chimenea" },
      { src: project3, alt: "Piedra decorativa fachada" },
    ],
    faqs: [
      { question: "¿Cuál es la diferencia entre piedra natural y sintética?", answer: "La piedra natural es más pesada y costosa pero 100% auténtica. La sintética es más liviana, económica y fácil de instalar, con una estética muy similar." },
      { question: "¿Se puede instalar en exteriores?", answer: "Sí, ambos tipos son aptos para exteriores con el tratamiento adecuado." },
      { question: "¿Necesita mantenimiento?", answer: "Mínimo. Limpieza periódica con agua y cepillo suave. Se puede aplicar sellador hidrofugante." },
    ],
    parentCategory: parent,
    formContext: "Piedra Decorativa - Recubrimiento",
    productName: "Piedra Decorativa",
  },

  "enchapes-ceramicos": {
    breadcrumb: "Ventas · Recubrimiento · Enchapes Cerámicos",
    title: "Enchapes",
    highlight: "Cerámicos",
    description: "Porcelanatos y cerámicas de última generación para pisos y paredes con acabados impecables.",
    heroImage: { src: project1, alt: "Enchapes cerámicos" },
    introTitle: "Pisos y paredes con acabados",
    introHighlight: "impecables",
    introText: "Nuestra línea de enchapes cerámicos incluye porcelanatos de gran formato, cerámicas de alta resistencia y acabados que replican madera, mármol y concreto. Trabajamos con las mejores marcas nacionales e importadas para garantizar calidad y durabilidad en cada metro cuadrado.",
    introImage: { src: project1, alt: "Enchapes cerámicos proyecto" },
    benefits: [
      "Porcelanatos gran formato",
      "Acabados tipo madera, mármol y concreto",
      "Alta resistencia al tráfico",
      "Marcas nacionales e importadas",
      "Apto para pisos y paredes",
      "Fácil limpieza y mantenimiento",
    ],
    process: sharedProcess,
    gallery: [
      { src: project1, alt: "Enchape cocina" },
      { src: ventaImg, alt: "Enchape baño" },
      { src: project3, alt: "Enchape piso" },
    ],
    faqs: [
      { question: "¿Qué diferencia hay entre cerámica y porcelanato?", answer: "El porcelanato es más denso, resistente y menos poroso. Ideal para alto tráfico y exteriores. La cerámica es más económica y suficiente para paredes y pisos de bajo tráfico." },
      { question: "¿Hacen la instalación?", answer: "Sí, contamos con instaladores certificados que garantizan un acabado perfecto." },
      { question: "¿Tienen showroom con muestras?", answer: "Sí, puedes visitarnos o solicitar muestras a domicilio sin costo." },
    ],
    parentCategory: parent,
    formContext: "Enchapes Cerámicos - Recubrimiento",
    productName: "Enchapes Cerámicos",
  },

  "madera-decorativa": {
    breadcrumb: "Ventas · Recubrimiento · Madera Decorativa",
    title: "Madera",
    highlight: "Decorativa",
    description: "Paneles y láminas en madera natural y laminada para ambientes cálidos y sofisticados.",
    heroImage: { src: project3, alt: "Madera decorativa" },
    introTitle: "Calidez natural para tus",
    introHighlight: "espacios",
    introText: "La madera decorativa aporta una sensación de calidez y naturalidad inigualable. Ofrecemos paneles de madera natural, laminados de alta presión y revestimientos tipo deck para paredes, cielos rasos y exteriores. Acabados desde rústicos hasta ultra-modernos.",
    introImage: { src: project3, alt: "Madera decorativa instalada" },
    benefits: [
      "Madera natural y laminada",
      "Acabados rústicos y modernos",
      "Apto para paredes y cielos",
      "Tratamiento anti-humedad",
      "Variedad de tonos",
      "Instalación rápida con clips",
    ],
    process: sharedProcess,
    gallery: [
      { src: project3, alt: "Madera decorativa sala" },
      { src: ventaImg, alt: "Madera decorativa cielo" },
      { src: project1, alt: "Madera decorativa terraza" },
    ],
    faqs: [
      { question: "¿La madera decorativa se puede usar en exteriores?", answer: "Sí, ofrecemos líneas tratadas para exterior tipo deck y fachada con protección UV y anti-humedad." },
      { question: "¿Necesita mantenimiento especial?", answer: "La madera natural requiere sellado periódico. Los laminados son prácticamente libres de mantenimiento." },
      { question: "¿Se puede instalar sobre la pared existente?", answer: "Sí, se instala con una estructura liviana de perfiles que no requiere demoler la pared original." },
    ],
    parentCategory: parent,
    formContext: "Madera Decorativa - Recubrimiento",
    productName: "Madera Decorativa",
  },

  "microcemento": {
    breadcrumb: "Ventas · Recubrimiento · Microcemento",
    title: "Micro",
    highlight: "cemento",
    description: "Acabado continuo moderno para pisos, paredes y superficies con estilo industrial y contemporáneo.",
    heroImage: { src: project1, alt: "Microcemento" },
    introTitle: "Superficies continuas con estilo",
    introHighlight: "contemporáneo",
    introText: "El microcemento es un revestimiento de alta resistencia que se aplica sobre superficies existentes sin necesidad de demoler. Crea acabados continuos sin juntas, ideales para pisos, paredes, mesones, duchas y escaleras. Disponible en más de 30 colores y acabados mate, satinado y brillante.",
    introImage: { src: project1, alt: "Microcemento aplicado" },
    benefits: [
      "Sin juntas ni dilataciones",
      "Se aplica sobre piso existente",
      "Más de 30 colores disponibles",
      "Acabados mate, satinado y brillante",
      "Resistente al agua (con sellador)",
      "Espesor mínimo (2-3mm)",
    ],
    process: sharedProcess,
    gallery: [
      { src: project1, alt: "Microcemento baño" },
      { src: project3, alt: "Microcemento cocina" },
      { src: ventaImg, alt: "Microcemento piso" },
    ],
    faqs: [
      { question: "¿El microcemento es resistente al agua?", answer: "Sí, con el sellador adecuado es completamente impermeable. Ideal para baños, cocinas y zonas húmedas." },
      { question: "¿Se puede aplicar sobre cerámica existente?", answer: "Sí, una de sus grandes ventajas es que se aplica directamente sobre el piso o pared existente sin necesidad de demoler." },
      { question: "¿Cuánto tarda el proceso de aplicación?", answer: "El proceso completo (preparación, aplicación y sellado) toma entre 5 y 7 días hábiles dependiendo del área." },
    ],
    parentCategory: parent,
    formContext: "Microcemento - Recubrimiento",
    productName: "Microcemento",
  },
};
