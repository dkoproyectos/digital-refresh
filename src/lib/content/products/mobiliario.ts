/**
 * ============================================================
 * CONTENIDO: Productos de Mobiliario Exterior
 * ============================================================
 * 🔌 Sanity: *[_type == "product" && category == "mobiliario"]
 * ============================================================
 */

import { ClipboardList, Palette, Truck, Wrench } from "lucide-react";
import type { ProductLandingData } from "@/components/ProductLanding";

import ventaImg from "@/assets/venta-mobiliario.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const sharedProcess: ProductLandingData["process"] = [
  { icon: ClipboardList, title: "Asesoría", description: "Evaluamos tu espacio exterior y te proponemos las mejores opciones." },
  { icon: Palette, title: "Selección", description: "Elige materiales, colores y configuraciones de tu set." },
  { icon: Truck, title: "Entrega", description: "Envío e instalación en tu terraza, jardín o zona social." },
  { icon: Wrench, title: "Armado", description: "Ensamblaje profesional y verificación de calidad." },
];

const parent = { label: "Mobiliario Exterior", href: "/ventas/mobiliario-exterior" };

export const mobiliarioProducts: Record<string, ProductLandingData> = {
  "salas-exterior": {
    breadcrumb: "Ventas · Mobiliario · Salas de Exterior",
    title: "Salas de",
    highlight: "Exterior",
    description: "Conjuntos de sofás y sillones en ratán sintético, aluminio y teca para terrazas y jardines.",
    heroImage: { src: ventaImg, alt: "Salas de exterior" },
    introTitle: "Confort de sala en tu",
    introHighlight: "terraza",
    introText: "Nuestras salas de exterior combinan el confort de un mueble de sala con la resistencia necesaria para estar al aire libre. Fabricadas en ratán sintético PE, aluminio tratado y madera teca, con cojines en telas Sunbrella resistentes a UV y agua. Diseños que van desde lo minimalista hasta lo más acogedor.",
    introImage: { src: ventaImg, alt: "Sala exterior instalada" },
    benefits: [
      "Ratán sintético PE resistente a UV",
      "Estructura de aluminio anticorrosión",
      "Cojines Sunbrella impermeables",
      "Diseños modulares y configurables",
      "Resistente a la intemperie",
      "Garantía de 5 años en estructura",
    ],
    process: sharedProcess,
    gallery: [
      { src: ventaImg, alt: "Sala exterior terraza" },
      { src: project1, alt: "Sala exterior jardín" },
      { src: project2, alt: "Sala exterior piscina" },
    ],
    faqs: [
      { question: "¿Se pueden dejar a la intemperie?", answer: "Sí, los materiales son resistentes al sol, lluvia y humedad. Sin embargo, recomendamos cubrirlos cuando no estén en uso para prolongar su vida útil." },
      { question: "¿Los cojines se pueden lavar?", answer: "Sí, las fundas de tela Sunbrella son removibles y lavables a máquina." },
      { question: "¿Se pueden armar configuraciones personalizadas?", answer: "Sí, ofrecemos módulos individuales (esquinero, central, otomana) para crear la configuración que se adapte a tu espacio." },
    ],
    parentCategory: parent,
    formContext: "Salas de Exterior - Mobiliario",
    productName: "Salas de Exterior",
  },

  "comedores-terraza": {
    breadcrumb: "Ventas · Mobiliario · Comedores de Terraza",
    title: "Comedores de",
    highlight: "Terraza",
    description: "Mesas y sillas resistentes a la intemperie con diseño contemporáneo para exteriores.",
    heroImage: { src: project2, alt: "Comedores de terraza" },
    introTitle: "Comidas al aire libre con",
    introHighlight: "estilo",
    introText: "Nuestros comedores de terraza están diseñados para disfrutar de la gastronomía al aire libre con comodidad y elegancia. Mesas en aluminio, teca y polywood con sillas apilables, sillones y bancos en materiales resistentes a la intemperie.",
    introImage: { src: project2, alt: "Comedor terraza instalado" },
    benefits: [
      "Mesas para 4, 6 y 8 personas",
      "Aluminio, teca y polywood",
      "Sillas apilables para ahorro de espacio",
      "Extensiones disponibles",
      "Colores y acabados variados",
      "Resistente a sol, lluvia y cloro",
    ],
    process: sharedProcess,
    gallery: [
      { src: project2, alt: "Comedor terraza piscina" },
      { src: ventaImg, alt: "Comedor terraza jardín" },
      { src: project3, alt: "Comedor terraza restaurante" },
    ],
    faqs: [
      { question: "¿Qué material es mejor para exterior?", answer: "El aluminio es el más liviano y resistente a la corrosión. La teca es premium y hermosa pero requiere mantenimiento. El polywood es económico y muy durable." },
      { question: "¿Las sillas son apilables?", answer: "Sí, la mayoría de nuestras sillas de exterior son apilables para facilitar el almacenamiento." },
      { question: "¿Sirven para restaurantes?", answer: "Sí, tenemos líneas comerciales con mayor resistencia y garantía para uso intensivo en restaurantes, hoteles y clubes." },
    ],
    parentCategory: parent,
    formContext: "Comedores de Terraza - Mobiliario",
    productName: "Comedores de Terraza",
  },

  "camastros": {
    breadcrumb: "Ventas · Mobiliario · Camastros y Daybeds",
    title: "Camastros y",
    highlight: "Daybeds",
    description: "Ideales para piscina, terraza y zonas de descanso al aire libre con máximo confort.",
    heroImage: { src: ventaImg, alt: "Camastros y daybeds" },
    introTitle: "Relax total en tu",
    introHighlight: "exterior",
    introText: "Camastros y daybeds diseñados para el máximo descanso al aire libre. Desde tumbonas de piscina ajustables hasta daybeds tipo cama balinesa con dosel. Fabricados en materiales resistentes a sol, agua y cloro, con cojines de secado rápido.",
    introImage: { src: ventaImg, alt: "Camastro piscina" },
    benefits: [
      "Posiciones ajustables",
      "Ruedas para fácil movimiento",
      "Cojines de secado rápido",
      "Materiales resistentes al cloro",
      "Daybeds con dosel opcional",
      "Diseños minimalistas y elegantes",
    ],
    process: sharedProcess,
    gallery: [
      { src: ventaImg, alt: "Camastro piscina" },
      { src: project1, alt: "Daybed terraza" },
      { src: project3, alt: "Camastro jardín" },
    ],
    faqs: [
      { question: "¿Los camastros resisten el cloro de piscina?", answer: "Sí, tanto la estructura como los cojines están diseñados para resistir el contacto con agua clorada sin deteriorarse." },
      { question: "¿Los cojines se secan rápido?", answer: "Sí, utilizamos espumas de célula abierta y telas de secado rápido que drenan el agua en minutos." },
      { question: "¿Tienen protección solar?", answer: "Los daybeds ofrecen dosel retráctil. Para camastros, recomendamos combinar con nuestras sombrillas." },
    ],
    parentCategory: parent,
    formContext: "Camastros y Daybeds - Mobiliario",
    productName: "Camastros y Daybeds",
  },

  "sombrillas": {
    breadcrumb: "Ventas · Mobiliario · Sombrillas y Parasoles",
    title: "Sombrillas y",
    highlight: "Parasoles",
    description: "Protección solar con estilo en múltiples tamaños y colores para cualquier espacio exterior.",
    heroImage: { src: project3, alt: "Sombrillas y parasoles" },
    introTitle: "Sombra con",
    introHighlight: "diseño",
    introText: "Nuestras sombrillas y parasoles combinan protección solar efectiva con diseño elegante. Desde sombrillas de centro para mesas de comedor hasta parasoles de brazo lateral para cubrir grandes áreas. Lonas con protección UV 50+ y estructuras de aluminio o madera.",
    introImage: { src: project3, alt: "Sombrilla instalada" },
    benefits: [
      "Protección UV 50+",
      "Brazo central y lateral",
      "Apertura manual y automática",
      "Lonas acrílicas impermeables",
      "Bases con ruedas disponibles",
      "Medidas desde 2m hasta 5m",
    ],
    process: sharedProcess,
    gallery: [
      { src: project3, alt: "Sombrilla terraza" },
      { src: ventaImg, alt: "Parasol piscina" },
      { src: project2, alt: "Sombrilla restaurante" },
    ],
    faqs: [
      { question: "¿Qué tamaño de sombrilla necesito?", answer: "Para una mesa de 4 personas: 2.5m. Para 6 personas: 3m. Para zonas lounge amplias: parasol lateral de 3.5-5m." },
      { question: "¿Resisten el viento?", answer: "Con la base adecuada (mínimo 25kg), resisten vientos moderados. En ráfagas fuertes, recomendamos cerrarlas." },
      { question: "¿Las lonas son reemplazables?", answer: "Sí, vendemos lonas de repuesto en todos los colores y tamaños." },
    ],
    parentCategory: parent,
    formContext: "Sombrillas y Parasoles - Mobiliario",
    productName: "Sombrillas y Parasoles",
  },

  "macetas": {
    breadcrumb: "Ventas · Mobiliario · Macetas y Jardineras",
    title: "Macetas y",
    highlight: "Jardineras",
    description: "Fibra de vidrio, cemento y cerámica en diseños modernos para complementar tu jardín.",
    heroImage: { src: project1, alt: "Macetas y jardineras" },
    introTitle: "Complementa tu jardín con",
    introHighlight: "estilo",
    introText: "Nuestras macetas y jardineras están diseñadas para ser protagonistas del paisajismo. Fabricadas en fibra de vidrio (ultra-livianas), cemento reforzado (estilo industrial) y cerámica esmaltada (colores vibrantes). Desde macetas de piso hasta jardineras elevadas y colgantes.",
    introImage: { src: project1, alt: "Macetas decorativas" },
    benefits: [
      "Fibra de vidrio ultraliviana",
      "Cemento estilo industrial",
      "Cerámica esmaltada colores vibrantes",
      "Drenaje integrado",
      "Resistentes a heladas",
      "Tamaños desde 20cm hasta 1.5m",
    ],
    process: sharedProcess,
    gallery: [
      { src: project1, alt: "Macetas terraza" },
      { src: ventaImg, alt: "Jardineras balcón" },
      { src: project3, alt: "Macetas jardín" },
    ],
    faqs: [
      { question: "¿Qué material es mejor para exterior?", answer: "La fibra de vidrio es ideal por su ligereza y resistencia. El cemento es más pesado pero aporta un look industrial moderno." },
      { question: "¿Tienen drenaje?", answer: "Sí, todas nuestras macetas incluyen agujeros de drenaje y bandeja recolectora." },
      { question: "¿Se pueden personalizar?", answer: "Sí, la fibra de vidrio se puede pintar en cualquier color RAL. También ofrecemos grabado y personalización." },
    ],
    parentCategory: parent,
    formContext: "Macetas y Jardineras - Mobiliario",
    productName: "Macetas y Jardineras",
  },

  "accesorios": {
    breadcrumb: "Ventas · Mobiliario · Accesorios Exterior",
    title: "Accesorios de",
    highlight: "Exterior",
    description: "Cojines, iluminación exterior y elementos decorativos weather-proof para completar tu espacio.",
    heroImage: { src: ventaImg, alt: "Accesorios de exterior" },
    introTitle: "Los detalles que hacen la",
    introHighlight: "diferencia",
    introText: "Completa tu espacio exterior con nuestra línea de accesorios diseñados para resistir la intemperie. Cojines decorativos en telas Sunbrella, iluminación LED solar y con cable, alfombras de exterior, mantas y elementos decorativos que transforman cualquier terraza en un oasis.",
    introImage: { src: ventaImg, alt: "Accesorios exterior" },
    benefits: [
      "Cojines Sunbrella anti-UV",
      "Iluminación LED solar",
      "Alfombras de exterior lavables",
      "Velas y faroles decorativos",
      "Mantas weather-proof",
      "Bandejas y mesas auxiliares",
    ],
    process: sharedProcess,
    gallery: [
      { src: ventaImg, alt: "Accesorios terraza" },
      { src: project2, alt: "Iluminación exterior" },
      { src: project1, alt: "Decoración exterior" },
    ],
    faqs: [
      { question: "¿Los cojines resisten la lluvia?", answer: "Sí, los cojines Sunbrella son resistentes al agua y se secan rápidamente. Sin embargo, para prolongar su vida útil, recomendamos guardarlos en temporadas de lluvia intensa." },
      { question: "¿La iluminación solar funciona en días nublados?", answer: "Sí, los paneles solares cargan incluso en días nublados, aunque la duración de la batería puede ser menor." },
      { question: "¿Las alfombras de exterior se pueden lavar?", answer: "Sí, se pueden limpiar con manguera y jabón neutro. Son resistentes a moho y hongos." },
    ],
    parentCategory: parent,
    formContext: "Accesorios de Exterior - Mobiliario",
    productName: "Accesorios de Exterior",
  },
};
