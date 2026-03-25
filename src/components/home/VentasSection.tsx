import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

import ventaRecubrimiento from "@/assets/venta-recubrimiento.jpg";
import ventaPeliculas from "@/assets/venta-peliculas.jpg";
import ventaCortinas from "@/assets/venta-cortinas.jpg";
import ventaMobiliario from "@/assets/venta-mobiliario.jpg";

const categories = [
  {
    id: "recubrimiento",
    title: "Recubrimiento de Paredes",
    subtitle: "Interior & Exterior",
    description: "Paneles decorativos, enchapes y soluciones de revestimiento para transformar cualquier superficie con estilo y durabilidad.",
    image: ventaRecubrimiento,
    href: "/ventas/recubrimiento",
    products: [
      "Paneles 3D decorativos",
      "Enchape de piedra natural",
      "Revestimiento PVC",
      "Papel tapiz premium",
    ],
  },
  {
    id: "peliculas",
    title: "Películas de Protección Solar",
    subtitle: "Control térmico & UV",
    description: "Películas de alta tecnología para ventanas que reducen el calor, bloquean rayos UV y mejoran la eficiencia energética.",
    image: ventaPeliculas,
    href: "/ventas/peliculas-solares",
    products: [
      "Película espejada",
      "Control solar residencial",
      "Seguridad anti-impacto",
      "Decorativa esmerilada",
    ],
  },
  {
    id: "cortinas",
    title: "Cortinas, Persianas y Toldos",
    subtitle: "Control de luz & privacidad",
    description: "Soluciones a medida con las mejores marcas para controlar la luz, la temperatura y la privacidad de tus espacios.",
    image: ventaCortinas,
    href: "/ventas/cortinas-persianas",
    products: [
      "Cortinas roller",
      "Persianas de madera",
      "Toldos retráctiles",
      "Cortinas blackout",
    ],
  },
  {
    id: "mobiliario",
    title: "Mobiliario Exterior",
    subtitle: "Terrazas & jardines",
    description: "Mobiliario resistente a la intemperie con diseño elegante para terrazas, jardines, piscinas y zonas sociales al aire libre.",
    image: ventaMobiliario,
    href: "/ventas/mobiliario-exterior",
    products: [
      "Sofás de ratán sintético",
      "Mesas de aluminio",
      "Sombrillas premium",
      "Sets lounge exterior",
    ],
  },
];

const VentasSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const scrollTo = (direction: "prev" | "next") => {
    setActiveIndex((prev) => {
      if (direction === "next") return prev < categories.length - 1 ? prev + 1 : 0;
      return prev > 0 ? prev - 1 : categories.length - 1;
    });
  };

  const active = categories[activeIndex];

  return (
    <section id="ventas" className="py-24 bg-primary" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[4px] text-secondary mb-2">
            Catálogo de Productos
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-4">
            Nuestras líneas de <span className="text-secondary">venta</span>
          </h2>
          <p className="text-primary-foreground/60 font-body text-base">
            Productos de alta calidad para complementar y transformar tus espacios. Cuatro líneas especializadas con las mejores marcas del mercado.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => setActiveIndex(i)}
              className={`px-5 py-2.5 rounded text-xs font-body font-semibold uppercase tracking-wider transition-all duration-300 border ${
                activeIndex === i
                  ? "bg-secondary text-secondary-foreground border-secondary shadow-lg"
                  : "bg-transparent text-primary-foreground/50 border-primary-foreground/20 hover:border-secondary hover:text-secondary"
              }`}
            >
              {cat.title.length > 20 ? cat.title.split(" ").slice(0, 2).join(" ") : cat.title}
            </button>
          ))}
        </div>

        {/* Featured category display */}
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded overflow-hidden border border-primary-foreground/10"
        >
          {/* Image side */}
          <div className="relative h-72 lg:h-[480px] overflow-hidden">
            <img
              src={active.image}
              alt={active.title}
              loading="lazy"
              width={640}
              height={640}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="inline-block px-3 py-1 rounded text-[10px] font-semibold uppercase tracking-wider bg-secondary text-secondary-foreground">
                {active.subtitle}
              </span>
            </div>
            {/* Nav arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
              <button
                onClick={() => scrollTo("prev")}
                className="pointer-events-auto w-10 h-10 rounded-full bg-primary/70 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={() => scrollTo("next")}
                className="pointer-events-auto w-10 h-10 rounded-full bg-primary/70 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Content side */}
          <div className="bg-card p-8 lg:p-12 flex flex-col justify-center">
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-3">
              {active.title}
            </h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-8">
              {active.description}
            </p>

            {/* Product list */}
            <div className="mb-8">
              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-accent mb-4">
                Productos destacados
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {active.products.map((product) => (
                  <div
                    key={product}
                    className="flex items-center gap-3 p-3 rounded border border-border bg-muted/30 hover:bg-muted/60 transition-colors"
                  >
                    <ShoppingBag size={14} className="text-accent shrink-0" />
                    <span className="text-sm font-body text-foreground">{product}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to={active.href}
              className="btn-gold text-xs py-3 px-8 self-start"
            >
              Ver Catálogo Completo
            </Link>
          </div>
        </motion.div>

        {/* Category indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {categories.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === i
                  ? "w-8 bg-secondary"
                  : "w-4 bg-primary-foreground/20 hover:bg-primary-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VentasSection;
