import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ventaRecubrimiento from "@/assets/venta-recubrimiento.jpg";
import ventaPeliculas from "@/assets/venta-peliculas.jpg";
import ventaCortinas from "@/assets/venta-cortinas.jpg";
import ventaMobiliario from "@/assets/venta-mobiliario.jpg";

const categories = [
  {
    title: "Recubrimiento de Paredes",
    desc: "Paneles 3D, papel tapiz, piedra decorativa y enchapes para transformar tus muros interiores y exteriores.",
    href: "/ventas/recubrimiento",
    img: ventaRecubrimiento,
  },
  {
    title: "Películas de Protección Solar",
    desc: "Control solar, privacidad, seguridad anti-impacto y decorativa para vidrios residenciales y comerciales.",
    href: "/ventas/peliculas-solares",
    img: ventaPeliculas,
  },
  {
    title: "Cortinas, Persianas y Toldos",
    desc: "Roller, blackout, sheer elegance, persianas en madera y aluminio, y toldos retráctiles.",
    href: "/ventas/cortinas-persianas",
    img: ventaCortinas,
  },
  {
    title: "Mobiliario Exterior",
    desc: "Muebles para terraza, balcón y jardín en materiales resistentes a la intemperie y diseño contemporáneo.",
    href: "/ventas/mobiliario-exterior",
    img: ventaMobiliario,
  },
];

const Ventas = () => (
  <PageLayout>
    <PageHero
      label="Ventas"
      title="Productos para tu"
      highlight="espacio"
      description="Catálogo completo de soluciones en recubrimientos, protección solar, cortinas y mobiliario exterior."
    />

    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={cat.href} className="group block relative overflow-hidden rounded-sm h-[380px]">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-display text-2xl font-bold text-card mb-2">{cat.title}</h3>
                  <p className="text-card/60 font-body text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <span className="inline-flex items-center gap-2 text-secondary text-sm font-body font-medium uppercase tracking-wider group-hover:gap-3 transition-all">
                    Ver Productos <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Ventas;
