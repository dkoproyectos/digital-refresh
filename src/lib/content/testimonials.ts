/**
 * ============================================================
 * CONTENIDO: TESTIMONIOS DE CLIENTES
 * ============================================================
 * 🔌 Sanity: *[_type == "testimonial"] | order(order asc)
 * ============================================================
 */

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  project?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Carolina Martínez",
    role: "Propietaria de apartamento",
    text: "DKO transformó completamente mi apartamento VIS. El equipo fue muy profesional, cumplieron con los tiempos y el resultado superó mis expectativas. ¡Mi hogar ahora se siente completamente diferente!",
    rating: 5,
    project: "Remodelación VIS",
  },
  {
    name: "Andrés Restrepo",
    role: "Empresario",
    text: "Contratamos a DKO para el diseño de nuestras oficinas y el resultado fue espectacular. Entendieron nuestra visión desde el primer momento y la ejecutaron con materiales de primera calidad.",
    rating: 5,
    project: "Diseño Corporativo",
  },
  {
    name: "María Fernanda López",
    role: "Anfitriona Airbnb",
    text: "Gracias a DKO mis dos apartamentos de renta corta tienen una ocupación del 95%. El diseño que propusieron es moderno, funcional y a los huéspedes les encanta.",
    rating: 5,
    project: "Rentas Cortas",
  },
  {
    name: "Jorge Caicedo",
    role: "Arquitecto",
    text: "Como profesional del sector, valoro mucho la calidad de acabados de DKO. Sus productos de recubrimiento y piedra flexible son de lo mejor que he encontrado en Cali.",
    rating: 5,
    project: "Productos",
  },
  {
    name: "Valentina Ochoa",
    role: "Diseñadora de interiores",
    text: "La variedad de cortinas y persianas que manejan es impresionante. La instalación fue impecable y el servicio postventa excelente. Los recomiendo al 100%.",
    rating: 5,
    project: "Cortinas & Persianas",
  },
  {
    name: "Ricardo Mejía",
    role: "Propietario de casa campestre",
    text: "El mobiliario exterior que nos entregaron es hermoso y súper resistente. Llevamos más de un año y se ve como nuevo. DKO siempre tiene la mejor asesoría.",
    rating: 5,
    project: "Mobiliario Exterior",
  },
];

export const testimonialsContent = {
  label: "Testimonios",
  title: "Lo que dicen nuestros",
  titleHighlight: "clientes",
  description: "La satisfacción de nuestros clientes es nuestra mejor carta de presentación.",
};
