/**
 * ============================================================
 * CONTENIDO: Productos de Películas de Protección Solar
 * ============================================================
 * 🔌 Sanity: *[_type == "product" && category == "peliculas-solares"]
 * ============================================================
 */

import { ClipboardList, Eye, Shield, Wrench } from "lucide-react";
import type { ProductLandingData } from "@/components/ProductLanding";

import ventaImg from "@/assets/venta-peliculas.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";

const sharedProcess: ProductLandingData["process"] = [
  { icon: ClipboardList, title: "Consulta", description: "Evaluamos tus ventanas y necesidades de protección solar." },
  { icon: Eye, title: "Muestra", description: "Te mostramos muestras físicas para que elijas la película ideal." },
  { icon: Shield, title: "Cotización", description: "Presupuesto detallado por metro cuadrado sin compromiso." },
  { icon: Wrench, title: "Instalación", description: "Aplicación profesional con garantía del fabricante." },
];

const parent = { label: "Películas Solares", href: "/productos/peliculas-solares" };

export const peliculasProducts: Record<string, ProductLandingData> = {
  "control-solar": {
    breadcrumb: "Ventas · Películas · Control Solar",
    title: "Control",
    highlight: "Solar",
    description: "Reduce hasta el 80% del calor sin perder luminosidad natural. La solución más eficiente para el confort térmico.",
    heroImage: { src: ventaImg, alt: "Película de control solar" },
    introTitle: "Confort térmico sin perder",
    introHighlight: "luminosidad",
    introText: "Las películas de control solar son la forma más eficiente de reducir el calor en interiores sin sacrificar la luz natural. Fabricadas con tecnología de nano-cerámica y metalizado, rechazan hasta el 80% del calor solar, reduciendo significativamente el consumo de aire acondicionado y creando ambientes más confortables.",
    introImage: { src: ventaImg, alt: "Control solar instalado" },
    benefits: [
      "Rechaza hasta 80% del calor solar",
      "Mantiene la luminosidad natural",
      "Ahorro energético del 25-35%",
      "Protección UV al 99%",
      "No altera la estética del vidrio",
      "Garantía de 10+ años",
    ],
    process: sharedProcess,
    gallery: [
      { src: ventaImg, alt: "Control solar oficina" },
      { src: project1, alt: "Control solar residencial" },
      { src: project2, alt: "Control solar edificio" },
    ],
    faqs: [
      { question: "¿Cuánto calor rechaza realmente?", answer: "Dependiendo del tipo de película, entre el 50% y el 80% del calor solar. Las películas de nano-cerámica ofrecen el mejor rendimiento." },
      { question: "¿Se puede ver hacia afuera?", answer: "Sí, las películas de control solar permiten una visión clara hacia el exterior. Algunas tienen efecto espejo solo desde afuera durante el día." },
      { question: "¿Afecta la señal de celular o WiFi?", answer: "Las películas de nano-cerámica no interfieren con señales. Las metalizadas pueden tener una ligera reducción." },
    ],
    parentCategory: parent,
    formContext: "Control Solar - Películas",
    productName: "Control Solar",
  },

  "privacidad": {
    breadcrumb: "Ventas · Películas · Privacidad",
    title: "Películas de",
    highlight: "Privacidad",
    description: "Películas espejo y frosted para privacidad total sin sacrificar la luz natural.",
    heroImage: { src: ventaImg, alt: "Película de privacidad" },
    introTitle: "Privacidad sin sacrificar",
    introHighlight: "la luz",
    introText: "Nuestras películas de privacidad ofrecen diferentes niveles de ocultamiento: desde el efecto espejo (vista total desde adentro, reflejo desde afuera) hasta el esmerilado completo tipo frosted. Ideales para oficinas, baños, consultorios médicos y cualquier espacio donde necesites privacidad con elegancia.",
    introImage: { src: project1, alt: "Película de privacidad instalada" },
    benefits: [
      "Efecto espejo unidireccional",
      "Esmerilado tipo frosted",
      "Múltiples niveles de opacidad",
      "Mantiene la entrada de luz",
      "Diseños personalizados disponibles",
      "Fácil de mantener y limpiar",
    ],
    process: sharedProcess,
    gallery: [
      { src: ventaImg, alt: "Privacidad oficina" },
      { src: project1, alt: "Privacidad consultorio" },
      { src: project2, alt: "Privacidad baño" },
    ],
    faqs: [
      { question: "¿La película espejo funciona de noche?", answer: "De noche, cuando la iluminación interior es mayor que la exterior, el efecto se invierte parcialmente. Se recomienda complementar con cortinas para la noche." },
      { question: "¿Se puede personalizar con logos o diseños?", answer: "Sí, ofrecemos corte de diseños personalizados con ploter para logos, franjas decorativas y señalética." },
      { question: "¿Se puede remover sin dañar el vidrio?", answer: "Sí, la película se retira limpiamente sin dejar residuos ni dañar el vidrio." },
    ],
    parentCategory: parent,
    formContext: "Privacidad - Películas",
    productName: "Privacidad",
  },

  "seguridad": {
    breadcrumb: "Ventas · Películas · Seguridad",
    title: "Seguridad",
    highlight: "Anti-impacto",
    description: "Protección contra roturas, robos y desastres naturales. Vidrio seguro para tu familia y negocio.",
    heroImage: { src: project2, alt: "Película de seguridad" },
    introTitle: "Protección que",
    introHighlight: "salva vidas",
    introText: "Las películas de seguridad anti-impacto mantienen los fragmentos de vidrio unidos en caso de rotura, previniendo lesiones por esquirlas. Fabricadas en poliéster de alta resistencia (4 a 14 mil de espesor), son ideales para ventanales, puertas de vidrio, vitrinas comerciales y zonas de alto riesgo. Cumplen normativas internacionales de seguridad.",
    introImage: { src: project2, alt: "Película de seguridad aplicada" },
    benefits: [
      "Retiene fragmentos de vidrio",
      "Protección contra robos y vandalismo",
      "Resistente a impactos y explosiones",
      "Cumple normas ANSI Z97.1",
      "Transparente e invisible",
      "Compatible con cualquier tipo de vidrio",
    ],
    process: sharedProcess,
    gallery: [
      { src: project2, alt: "Seguridad ventanal" },
      { src: ventaImg, alt: "Seguridad vitrina" },
      { src: project1, alt: "Seguridad puerta" },
    ],
    faqs: [
      { question: "¿La película de seguridad es visible?", answer: "No, es completamente transparente. No altera la apariencia del vidrio." },
      { question: "¿Detiene un intento de robo?", answer: "La película no hace el vidrio irrompible, pero retarda significativamente la penetración, dando tiempo para activar alarmas o evacuar." },
      { question: "¿Se puede combinar con control solar?", answer: "Sí, existen películas combo que ofrecen seguridad + control solar en una sola aplicación." },
    ],
    parentCategory: parent,
    formContext: "Seguridad Anti-impacto - Películas",
    productName: "Seguridad Anti-impacto",
  },

  "decorativa": {
    breadcrumb: "Ventas · Películas · Decorativa",
    title: "Películas",
    highlight: "Decorativas",
    description: "Diseños, texturas y colores para vidrios con estilo. Transforma cualquier superficie de vidrio.",
    heroImage: { src: ventaImg, alt: "Película decorativa" },
    introTitle: "Arte en tus",
    introHighlight: "vidrios",
    introText: "Las películas decorativas transforman vidrios comunes en elementos de diseño. Disponibles en texturas tipo vitral, líneas, patrones geométricos, colores sólidos y acabados esmerilados. Perfectas para dividir espacios, crear privacidad parcial o simplemente añadir personalidad a ventanas y puertas de vidrio.",
    introImage: { src: project1, alt: "Película decorativa aplicada" },
    benefits: [
      "Cientos de diseños y texturas",
      "Efecto vitral y esmerilado",
      "Colores sólidos y degradados",
      "Corte personalizado con ploter",
      "Ideal para divisiones de oficina",
      "Removible sin daño al vidrio",
    ],
    process: sharedProcess,
    gallery: [
      { src: ventaImg, alt: "Decorativa oficina" },
      { src: project1, alt: "Decorativa división" },
      { src: project2, alt: "Decorativa vitral" },
    ],
    faqs: [
      { question: "¿Se pueden hacer diseños personalizados?", answer: "Sí, podemos cortar cualquier diseño, logo o patrón personalizado con nuestro equipo de ploter de corte." },
      { question: "¿Cuánto dura la película decorativa?", answer: "Con buen cuidado, las películas decorativas duran entre 8 y 12 años sin decoloración." },
      { question: "¿Se puede aplicar en vidrio templado?", answer: "Sí, es compatible con vidrio templado, laminado y flotado." },
    ],
    parentCategory: parent,
    formContext: "Decorativa - Películas",
    productName: "Decorativa",
  },
};
