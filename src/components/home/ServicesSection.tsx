import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Paintbrush, Home, Building2 } from "lucide-react";

const services = [
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

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-24 bg-card" ref={ref}>
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="section-label">Nuestros Servicios</p>
          <h2 className="section-title">
            Soluciones integrales para <span>transformar tu espacio</span>
          </h2>
          <p className="text-muted-foreground font-body text-base">
            En DKO creamos soluciones que combinan innovación, calidad y diseño. Gestionamos cada proyecto con precisión, asegurando resultados que superan tus expectativas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.a
              key={service.title}
              href={service.href}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 border border-border rounded bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded bg-muted flex items-center justify-center mb-5 group-hover:bg-accent transition-colors">
                <service.icon size={22} className="text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{service.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
