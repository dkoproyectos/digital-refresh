/**
 * ============================================================
 * CONTENIDO: Productos de Cortinas, Persianas y Toldos
 * ============================================================
 * 🔌 Sanity: *[_type == "product" && category == "cortinas"]
 * ============================================================
 */

import { ClipboardList, Palette, Truck, Wrench } from "lucide-react";
import type { ProductLandingData } from "@/components/ProductLanding";

import ventaImg from "@/assets/venta-cortinas.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project4 from "@/assets/project-4.jpg";

const sharedProcess: ProductLandingData["process"] = [
  { icon: ClipboardList, title: "Asesoría", description: "Visita a tu espacio para asesorarte en la mejor solución." },
  { icon: Palette, title: "Selección", description: "Elige entre cientos de telas, colores y mecanismos." },
  { icon: Truck, title: "Fabricación", description: "Confección a medida con materiales de primera calidad." },
  { icon: Wrench, title: "Instalación", description: "Montaje profesional con garantía en todos los mecanismos." },
];

const parent = { label: "Cortinas y Persianas", href: "/ventas/cortinas-persianas" };

export const cortinasProducts: Record<string, ProductLandingData> = {
  "roller": {
    breadcrumb: "Ventas · Cortinas · Roller",
    title: "Cortinas",
    highlight: "Roller",
    description: "Enrollables en screen, blackout y traslúcidas para ambientes modernos y funcionales.",
    heroImage: { src: ventaImg, alt: "Cortinas roller" },
    introTitle: "Estilo y funcionalidad en un",
    introHighlight: "solo mecanismo",
    introText: "Las cortinas roller son la opción más popular para espacios modernos. Su mecanismo enrollable es compacto, elegante y fácil de operar. Disponibles en telas screen (filtran luz manteniendo visibilidad), blackout (oscurecimiento total) y traslúcidas (difusión suave de luz). Opciones motorizadas disponibles.",
    introImage: { src: ventaImg, alt: "Cortina roller instalada" },
    benefits: [
      "Mecanismo compacto y silencioso",
      "Telas screen, blackout y traslúcidas",
      "Opción motorizada con control remoto",
      "Fácil limpieza y mantenimiento",
      "Medidas personalizadas",
      "Amplia gama de colores",
    ],
    process: sharedProcess,
    gallery: [
      { src: ventaImg, alt: "Roller sala" },
      { src: project1, alt: "Roller oficina" },
      { src: project4, alt: "Roller dormitorio" },
    ],
    faqs: [
      { question: "¿Qué diferencia hay entre screen y blackout?", answer: "La tela screen permite ver hacia afuera y filtra la luz. El blackout bloquea el 100% de la luz, ideal para dormitorios." },
      { question: "¿Se pueden motorizar?", answer: "Sí, ofrecemos motores con control remoto, interruptor de pared e integración con domótica (Alexa, Google Home)." },
      { question: "¿Cuánto tarda la fabricación?", answer: "Las cortinas se fabrican a medida en 5-7 días hábiles después de la medición." },
    ],
    parentCategory: parent,
    formContext: "Cortinas Roller - Cortinas",
    productName: "Cortinas Roller",
  },

  "blackout": {
    breadcrumb: "Ventas · Cortinas · Blackout",
    title: "Cortinas",
    highlight: "Blackout",
    description: "Oscurecimiento total para dormitorios, salas de cine, oficinas y consultorios.",
    heroImage: { src: project4, alt: "Cortinas blackout" },
    introTitle: "Oscuridad total para tu",
    introHighlight: "descanso",
    introText: "Las cortinas blackout bloquean el 100% de la luz exterior, creando un ambiente de oscuridad total ideal para el descanso. Disponibles en mecanismo roller, paneles deslizantes y cortinas tradicionales. Además del bloqueo de luz, ofrecen aislamiento térmico y acústico significativo.",
    introImage: { src: project4, alt: "Blackout instalado" },
    benefits: [
      "Bloqueo de luz al 100%",
      "Aislamiento térmico",
      "Reducción acústica",
      "Múltiples mecanismos disponibles",
      "Variedad de colores",
      "Ideal para turnos nocturnos",
    ],
    process: sharedProcess,
    gallery: [
      { src: project4, alt: "Blackout dormitorio" },
      { src: ventaImg, alt: "Blackout sala cine" },
      { src: project1, alt: "Blackout consultorio" },
    ],
    faqs: [
      { question: "¿Realmente bloquean toda la luz?", answer: "Sí, las telas blackout certificadas bloquean el 100% de la luz. Es importante que la medida cubra completamente la ventana para evitar filtraciones laterales." },
      { question: "¿Son más caras que las roller normales?", answer: "Tienen un incremento de 15-25% sobre las telas screen, pero ofrecen beneficios adicionales de aislamiento térmico y acústico." },
      { question: "¿Vienen en colores claros?", answer: "Sí, aunque la cara exterior puede ser clara, la capa interior de bloqueo garantiza la oscuridad total." },
    ],
    parentCategory: parent,
    formContext: "Cortinas Blackout - Cortinas",
    productName: "Cortinas Blackout",
  },

  "sheer-elegance": {
    breadcrumb: "Ventas · Cortinas · Sheer Elegance",
    title: "Sheer",
    highlight: "Elegance",
    description: "Doble tela con bandas alternas para controlar la luz con máxima elegancia y versatilidad.",
    heroImage: { src: ventaImg, alt: "Sheer Elegance" },
    introTitle: "Control de luz con",
    introHighlight: "máxima elegancia",
    introText: "Las cortinas Sheer Elegance (también llamadas Duo Roller o Zebra) combinan bandas alternas de tela opaca y translúcida. Al alinear las bandas puedes controlar la entrada de luz de forma gradual: desde privacidad total hasta luz filtrada. Un mecanismo sofisticado que se ha convertido en tendencia en el diseño interior moderno.",
    introImage: { src: ventaImg, alt: "Sheer Elegance instalada" },
    benefits: [
      "Control gradual de luz",
      "Estética sofisticada y moderna",
      "Privacidad sin sacrificar luz",
      "Mecanismo suave y preciso",
      "Opción motorizada disponible",
      "Amplia gama de colores y texturas",
    ],
    process: sharedProcess,
    gallery: [
      { src: ventaImg, alt: "Sheer Elegance sala" },
      { src: project1, alt: "Sheer Elegance comedor" },
      { src: project2, alt: "Sheer Elegance oficina" },
    ],
    faqs: [
      { question: "¿Es difícil de limpiar?", answer: "No, se limpia con un paño húmedo o aspiradora con accesorio suave. La tela es antiestática y repele el polvo." },
      { question: "¿Funciona como blackout?", answer: "No es 100% blackout, pero al cerrar las bandas opacas se logra un oscurecimiento significativo (~85%)." },
      { question: "¿Cuánto dura la tela?", answer: "Con buen cuidado, las telas Sheer Elegance duran entre 8 y 12 años sin perder funcionalidad." },
    ],
    parentCategory: parent,
    formContext: "Sheer Elegance - Cortinas",
    productName: "Sheer Elegance",
  },

  "persianas-madera": {
    breadcrumb: "Ventas · Cortinas · Persianas de Madera",
    title: "Persianas de",
    highlight: "Madera",
    description: "Calidez natural y control de privacidad con acabados premium que elevan cualquier espacio.",
    heroImage: { src: project1, alt: "Persianas de madera" },
    introTitle: "Calidez y elegancia",
    introHighlight: "natural",
    introText: "Las persianas de madera son un clásico atemporal del diseño interior. Fabricadas en madera natural (tilo, cedro) o madera sintética (PVC tipo madera), ofrecen un control preciso de luz y privacidad mientras añaden calidez y sofisticación al espacio. Disponibles en lamas de 25mm, 50mm y 63mm.",
    introImage: { src: project1, alt: "Persianas de madera instaladas" },
    benefits: [
      "Madera natural y sintética",
      "Lamas de 25mm, 50mm y 63mm",
      "Control preciso de luz",
      "Acabados lacados y naturales",
      "Alta durabilidad",
      "Resistente a humedad (PVC)",
    ],
    process: sharedProcess,
    gallery: [
      { src: project1, alt: "Persianas madera sala" },
      { src: ventaImg, alt: "Persianas madera estudio" },
      { src: project4, alt: "Persianas madera dormitorio" },
    ],
    faqs: [
      { question: "¿Madera natural o sintética?", answer: "La madera natural es más elegante pero sensible a humedad. La sintética (PVC) es ideal para baños y cocinas y tiene un precio más accesible." },
      { question: "¿Qué ancho de lama recomiendas?", answer: "50mm es el estándar más popular. 63mm para ventanas grandes. 25mm para ventanas pequeñas o estilo clásico." },
      { question: "¿Necesitan mantenimiento?", answer: "Limpieza periódica con paño seco o ligeramente húmedo. La madera natural se puede pulir y relacquer." },
    ],
    parentCategory: parent,
    formContext: "Persianas de Madera - Cortinas",
    productName: "Persianas de Madera",
  },

  "persianas-aluminio": {
    breadcrumb: "Ventas · Cortinas · Persianas de Aluminio",
    title: "Persianas de",
    highlight: "Aluminio",
    description: "Durables y funcionales para espacios húmedos, comerciales e industriales.",
    heroImage: { src: project2, alt: "Persianas de aluminio" },
    introTitle: "Funcionalidad y durabilidad",
    introHighlight: "garantizada",
    introText: "Las persianas de aluminio son la opción más durable y funcional para espacios que requieren resistencia a la humedad, facilidad de limpieza y un look moderno. Ideales para oficinas, consultorios, cocinas, baños y espacios comerciales. Disponibles en lamas de 16mm y 25mm con amplia gama de colores.",
    introImage: { src: project2, alt: "Persianas aluminio instaladas" },
    benefits: [
      "Resistentes a humedad",
      "Fácil limpieza",
      "Lamas de 16mm y 25mm",
      "Amplia gama de colores",
      "Mecanismo de larga duración",
      "Precio competitivo",
    ],
    process: sharedProcess,
    gallery: [
      { src: project2, alt: "Aluminio oficina" },
      { src: ventaImg, alt: "Aluminio consultorio" },
      { src: project1, alt: "Aluminio cocina" },
    ],
    faqs: [
      { question: "¿Son ruidosas?", answer: "Las persianas de aluminio de calidad tienen sistemas anti-ruido. Nuestras persianas utilizan lamas con bordes redondeados que minimizan el sonido." },
      { question: "¿Se oxidan?", answer: "No, el aluminio es naturalmente resistente a la corrosión. Además, nuestras persianas tienen acabado electrostático que las protege." },
      { question: "¿Son aptas para ventanas grandes?", answer: "Sí, fabricamos persianas de aluminio hasta 3m de ancho con sistemas de cadena reforzada." },
    ],
    parentCategory: parent,
    formContext: "Persianas de Aluminio - Cortinas",
    productName: "Persianas de Aluminio",
  },

  "toldos": {
    breadcrumb: "Ventas · Cortinas · Toldos",
    title: "Toldos",
    highlight: "Retráctiles",
    description: "Protección solar exterior para terrazas, balcones y fachadas con diseño y funcionalidad.",
    heroImage: { src: project2, alt: "Toldos retráctiles" },
    introTitle: "Sombra y protección para tus",
    introHighlight: "exteriores",
    introText: "Los toldos retráctiles son la solución ideal para crear sombra en terrazas, balcones, patios y fachadas. Con mecanismos de brazos articulados, cofre cerrado y apertura motorizada, protegen del sol y la lluvia ligera mientras extienden tu espacio habitable al exterior.",
    introImage: { src: project2, alt: "Toldo instalado" },
    benefits: [
      "Brazos articulados de alta resistencia",
      "Lonas acrílicas anti-UV",
      "Motorización con sensor de viento",
      "Sistema de cofre protector",
      "Más de 100 colores de lona",
      "Medidas a la carta",
    ],
    process: sharedProcess,
    gallery: [
      { src: project2, alt: "Toldo terraza" },
      { src: ventaImg, alt: "Toldo balcón" },
      { src: project4, alt: "Toldo comercial" },
    ],
    faqs: [
      { question: "¿Los toldos resisten el viento?", answer: "Los toldos motorizados incluyen sensor de viento que los recoge automáticamente cuando hay ráfagas fuertes (>40km/h)." },
      { question: "¿Qué mantenimiento necesitan?", answer: "Limpieza periódica de la lona con agua y jabón neutro. Lubricación anual de mecanismos." },
      { question: "¿Protegen de la lluvia?", answer: "Protegen de lluvia ligera cuando están inclinados. No se recomiendan para lluvia intensa por acumulación de agua." },
    ],
    parentCategory: parent,
    formContext: "Toldos Retráctiles - Cortinas",
    productName: "Toldos Retráctiles",
  },
};
