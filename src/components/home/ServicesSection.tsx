import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { homeServices } from "@/lib/content/home";

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
          {homeServices.map((service, i) => (
            <motion.a
              key={service.title}
              href={service.href}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] } }}
              className="group p-8 border border-border rounded bg-card hover:shadow-xl hover:border-accent/30 transition-[box-shadow,border-color] duration-500"
            >
              <motion.div
                className="w-12 h-12 rounded bg-muted flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300"
                whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
              >
                <service.icon size={22} className="text-accent group-hover:text-accent-foreground transition-colors" />
              </motion.div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{service.description}</p>
              <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-accent to-secondary transition-all duration-500 ease-out" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
