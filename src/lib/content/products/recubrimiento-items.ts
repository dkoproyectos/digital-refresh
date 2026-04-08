/**
 * ============================================================
 * CONTENIDO: Sub-productos / referencias de Recubrimiento
 * ============================================================
 * 🔌 Sanity: *[_type == "recubrimientoItem" && category == $category]
 * ============================================================
 */

import { ClipboardList, Ruler, Truck, Wrench } from "lucide-react";
import type { ProductLandingData } from "@/components/ProductLanding";

import ventaImg from "@/assets/venta-recubrimiento.jpg";
import project1 from "@/assets/project-1.jpg";
import project3 from "@/assets/project-3.jpg";

const sharedProcess: ProductLandingData["process"] = [
  { icon: ClipboardList, title: "Asesoría", description: "Te ayudamos a elegir el producto ideal según tu espacio." },
  { icon: Ruler, title: "Medición", description: "Visita técnica para tomar medidas exactas sin costo." },
  { icon: Truck, title: "Entrega", description: "Recibe tu producto en la puerta de tu hogar u oficina." },
  { icon: Wrench, title: "Instalación", description: "Nuestro equipo profesional realiza la instalación completa." },
];

/** Sub-productos por subcategoría de recubrimiento */
export const recubrimientoItems: Record<string, Record<string, ProductLandingData>> = {
  "papel-colgadura": {
    "papel-tapiz-clasico": {
      breadcrumb: "Recubrimiento · Papel de Colgadura · Clásico",
      title: "Papel Tapiz",
      highlight: "Clásico",
      description: "Diseños atemporales con patrones elegantes, damasco y rayas para ambientes sofisticados.",
      heroImage: { src: ventaImg, alt: "Papel tapiz clásico" },
      introTitle: "Elegancia",
      introHighlight: "atemporal",
      introText: "Nuestra línea clásica de papel tapiz incluye patrones damasco, rayas diplomáticas, motivos florales sutiles y texturas lisas en tonos neutros y cálidos. Ideal para salas, comedores y dormitorios que buscan un ambiente refinado y acogedor.",
      introImage: { src: ventaImg, alt: "Papel tapiz clásico instalado" },
      benefits: ["Patrones damasco y rayas", "Tonos neutros y cálidos", "Lavable y resistente", "Marcas europeas premium", "Fácil de instalar y remover", "Durabilidad de 10-15 años"],
      process: sharedProcess,
      gallery: [{ src: ventaImg, alt: "Clásico sala" }, { src: project1, alt: "Clásico comedor" }],
      faqs: [
        { question: "¿El papel tapiz clásico se ve anticuado?", answer: "No, los diseños actuales reinventan los patrones clásicos con escalas y colores contemporáneos que lucen modernos y elegantes." },
        { question: "¿Se puede limpiar?", answer: "Sí, nuestros papeles son lavables con un paño húmedo y jabón neutro." },
      ],
      parentCategory: { label: "Papel de Colgadura", href: "/productos/recubrimiento/papel-colgadura" },
      formContext: "Papel Tapiz Clásico - Recubrimiento",
      productName: "Papel Tapiz Clásico",
    },
    "papel-tapiz-moderno": {
      breadcrumb: "Recubrimiento · Papel de Colgadura · Moderno",
      title: "Papel Tapiz",
      highlight: "Moderno",
      description: "Diseños geométricos, abstractos y minimalistas para espacios contemporáneos y vanguardistas.",
      heroImage: { src: project1, alt: "Papel tapiz moderno" },
      introTitle: "Diseño",
      introHighlight: "contemporáneo",
      introText: "Líneas geométricas, patrones abstractos, efectos 3D ópticos y texturas metalizadas definen nuestra colección moderna. Perfecta para espacios que buscan personalidad y vanguardia sin perder la elegancia.",
      introImage: { src: project1, alt: "Papel tapiz moderno instalado" },
      benefits: ["Diseños geométricos y abstractos", "Efectos 3D ópticos", "Acabados metalizados", "Colores vibrantes y neutros", "Materiales eco-friendly", "Tendencias internacionales"],
      process: sharedProcess,
      gallery: [{ src: project1, alt: "Moderno sala" }, { src: ventaImg, alt: "Moderno oficina" }],
      faqs: [
        { question: "¿Los diseños modernos combinan con muebles clásicos?", answer: "Sí, los papeles modernos en tonos neutros crean un contraste interesante con mobiliario clásico." },
        { question: "¿Tienen diseños personalizados?", answer: "Sí, podemos imprimir murales y diseños a medida según tu gusto." },
      ],
      parentCategory: { label: "Papel de Colgadura", href: "/productos/recubrimiento/papel-colgadura" },
      formContext: "Papel Tapiz Moderno - Recubrimiento",
      productName: "Papel Tapiz Moderno",
    },
    "murales-decorativos": {
      breadcrumb: "Recubrimiento · Papel de Colgadura · Murales",
      title: "Murales",
      highlight: "Decorativos",
      description: "Murales fotográficos y artísticos a gran escala para crear ambientes únicos e impactantes.",
      heroImage: { src: project3, alt: "Murales decorativos" },
      introTitle: "Paredes que cuentan",
      introHighlight: "historias",
      introText: "Los murales decorativos transforman una pared completa en una obra de arte. Desde paisajes naturales y ciudades hasta diseños abstractos y artísticos. Impresión de alta resolución en materiales premium que garantizan colores vivos y durabilidad.",
      introImage: { src: project3, alt: "Mural decorativo instalado" },
      benefits: ["Impresión alta resolución", "Diseños a medida", "Paisajes, abstractos y artísticos", "Materiales premium", "Colores vivos garantizados", "Instalación profesional"],
      process: sharedProcess,
      gallery: [{ src: project3, alt: "Mural sala" }, { src: ventaImg, alt: "Mural comercial" }],
      faqs: [
        { question: "¿Se puede hacer un mural con mi propia foto?", answer: "Sí, podemos imprimir cualquier imagen en alta resolución como mural para tu pared." },
        { question: "¿Qué tamaño de pared se puede cubrir?", answer: "No hay límite, los murales se imprimen en paneles que cubren desde 2m² hasta paredes completas de cualquier tamaño." },
      ],
      parentCategory: { label: "Papel de Colgadura", href: "/productos/recubrimiento/papel-colgadura" },
      formContext: "Murales Decorativos - Recubrimiento",
      productName: "Murales Decorativos",
    },
  },

  "panel-muros": {
    "paneles-3d": {
      breadcrumb: "Recubrimiento · Panel para Muros · Paneles 3D",
      title: "Paneles",
      highlight: "3D",
      description: "Relieve tridimensional para paredes interiores con diseños exclusivos que transforman cualquier ambiente.",
      heroImage: { src: ventaImg, alt: "Paneles 3D decorativos" },
      introTitle: "Dale profundidad a tus",
      introHighlight: "paredes",
      introText: "Los paneles 3D son la solución perfecta para crear paredes con personalidad. Fabricados en PVC, yeso o fibra vegetal, ofrecen una variedad de texturas y patrones que transforman cualquier espacio plano en una obra de arte tridimensional.",
      introImage: { src: ventaImg, alt: "Paneles 3D instalados" },
      benefits: ["Fácil instalación sin obras mayores", "Resistentes a la humedad (PVC)", "Variedad de diseños y texturas", "Se pueden pintar en cualquier color", "Aislamiento acústico adicional", "Mantenimiento mínimo"],
      process: sharedProcess,
      gallery: [{ src: ventaImg, alt: "Paneles 3D sala" }, { src: project1, alt: "Paneles 3D recepción" }, { src: project3, alt: "Paneles 3D oficina" }],
      faqs: [
        { question: "¿Cuánto cuestan los paneles 3D por metro cuadrado?", answer: "Desde $35.000/m² en PVC hasta $120.000/m² en diseños premium. Solicita cotización personalizada." },
        { question: "¿Se pueden instalar en baños o cocinas?", answer: "Sí, los paneles de PVC son resistentes a la humedad y son ideales para estos espacios." },
        { question: "¿Cuánto tarda la instalación?", answer: "Una pared estándar se instala en 1-2 horas. Proyectos completos en 1-2 días." },
      ],
      parentCategory: { label: "Panel para Muros", href: "/productos/recubrimiento/panel-muros" },
      formContext: "Paneles 3D - Recubrimiento",
      productName: "Paneles 3D",
    },
    "enchapes-ceramicos": {
      breadcrumb: "Recubrimiento · Panel para Muros · Enchapes Cerámicos",
      title: "Enchapes",
      highlight: "Cerámicos",
      description: "Porcelanatos y cerámicas de última generación para pisos y paredes con acabados impecables.",
      heroImage: { src: project1, alt: "Enchapes cerámicos" },
      introTitle: "Pisos y paredes con acabados",
      introHighlight: "impecables",
      introText: "Nuestra línea de enchapes cerámicos incluye porcelanatos de gran formato, cerámicas de alta resistencia y acabados que replican madera, mármol y concreto.",
      introImage: { src: project1, alt: "Enchapes cerámicos proyecto" },
      benefits: ["Porcelanatos gran formato", "Acabados tipo madera, mármol y concreto", "Alta resistencia al tráfico", "Marcas nacionales e importadas", "Apto para pisos y paredes", "Fácil limpieza y mantenimiento"],
      process: sharedProcess,
      gallery: [{ src: project1, alt: "Enchape cocina" }, { src: ventaImg, alt: "Enchape baño" }, { src: project3, alt: "Enchape piso" }],
      faqs: [
        { question: "¿Qué diferencia hay entre cerámica y porcelanato?", answer: "El porcelanato es más denso, resistente y menos poroso. Ideal para alto tráfico y exteriores." },
        { question: "¿Hacen la instalación?", answer: "Sí, contamos con instaladores certificados que garantizan un acabado perfecto." },
      ],
      parentCategory: { label: "Panel para Muros", href: "/productos/recubrimiento/panel-muros" },
      formContext: "Enchapes Cerámicos - Recubrimiento",
      productName: "Enchapes Cerámicos",
    },
    "madera-decorativa": {
      breadcrumb: "Recubrimiento · Panel para Muros · Madera Decorativa",
      title: "Madera",
      highlight: "Decorativa",
      description: "Paneles y láminas en madera natural y laminada para ambientes cálidos y sofisticados.",
      heroImage: { src: project3, alt: "Madera decorativa" },
      introTitle: "Calidez natural para tus",
      introHighlight: "espacios",
      introText: "La madera decorativa aporta una sensación de calidez y naturalidad inigualable. Ofrecemos paneles de madera natural, laminados de alta presión y revestimientos tipo deck para paredes, cielos rasos y exteriores.",
      introImage: { src: project3, alt: "Madera decorativa instalada" },
      benefits: ["Madera natural y laminada", "Acabados rústicos y modernos", "Apto para paredes y cielos", "Tratamiento anti-humedad", "Variedad de tonos", "Instalación rápida con clips"],
      process: sharedProcess,
      gallery: [{ src: project3, alt: "Madera sala" }, { src: ventaImg, alt: "Madera cielo" }, { src: project1, alt: "Madera terraza" }],
      faqs: [
        { question: "¿La madera decorativa se puede usar en exteriores?", answer: "Sí, ofrecemos líneas tratadas para exterior tipo deck y fachada con protección UV y anti-humedad." },
        { question: "¿Necesita mantenimiento especial?", answer: "La madera natural requiere sellado periódico. Los laminados son prácticamente libres de mantenimiento." },
      ],
      parentCategory: { label: "Panel para Muros", href: "/productos/recubrimiento/panel-muros" },
      formContext: "Madera Decorativa - Recubrimiento",
      productName: "Madera Decorativa",
    },
    "microcemento": {
      breadcrumb: "Recubrimiento · Panel para Muros · Microcemento",
      title: "Micro",
      highlight: "cemento",
      description: "Acabado continuo moderno para pisos, paredes y superficies con estilo industrial y contemporáneo.",
      heroImage: { src: project1, alt: "Microcemento" },
      introTitle: "Superficies continuas con estilo",
      introHighlight: "contemporáneo",
      introText: "El microcemento es un revestimiento de alta resistencia que se aplica sobre superficies existentes sin necesidad de demoler. Crea acabados continuos sin juntas, ideales para pisos, paredes, mesones, duchas y escaleras.",
      introImage: { src: project1, alt: "Microcemento aplicado" },
      benefits: ["Sin juntas ni dilataciones", "Se aplica sobre piso existente", "Más de 30 colores disponibles", "Acabados mate, satinado y brillante", "Resistente al agua (con sellador)", "Espesor mínimo (2-3mm)"],
      process: sharedProcess,
      gallery: [{ src: project1, alt: "Microcemento baño" }, { src: project3, alt: "Microcemento cocina" }, { src: ventaImg, alt: "Microcemento piso" }],
      faqs: [
        { question: "¿El microcemento es resistente al agua?", answer: "Sí, con el sellador adecuado es completamente impermeable." },
        { question: "¿Se puede aplicar sobre cerámica existente?", answer: "Sí, se aplica directamente sobre el piso o pared existente sin necesidad de demoler." },
      ],
      parentCategory: { label: "Panel para Muros", href: "/productos/recubrimiento/panel-muros" },
      formContext: "Microcemento - Recubrimiento",
      productName: "Microcemento",
    },
  },
};
