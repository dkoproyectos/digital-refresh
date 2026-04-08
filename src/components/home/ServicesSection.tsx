import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { homeServices } from "@/lib/content/home";
import { Link } from "react-router-dom";

import serviceDiseno from "@/assets/service-diseno.jpg";
import serviceVis from "@/assets/service-vis.jpg";
import serviceRentas from "@/assets/service-rentas.jpg";

const serviceImages = [serviceDiseno, serviceVis, serviceRentas];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="servicios" className="py-0 relative overflow-hidden" ref={ref}>
      <div className="bg-primary">
        <div className="container pt-16 md:pt-20 pb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/30 bg-card/50 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                <span className="text-[11px] font-body font-medium uppercase tracking-[3px] text-secondary">
                  Nuestros Servicios
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-primary-foreground leading-[1.1]">
                Soluciones integrales para{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-secondary">transformar</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="absolute bottom-1 left-0 right-0 h-[3px] bg-secondary/40 origin-left"
                  />
                </span>{" "}
                tu espacio
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary-foreground/70 font-body text-base md:text-lg leading-relaxed lg:text-right max-w-md lg:ml-auto"
            >
              En DKO creamos soluciones que combinan innovación, calidad y diseño. Gestionamos cada proyecto con precisión.
            </motion.p>
          </div>
        </div>

        <div className="container pb-16 md:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {homeServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to={service.href}
                  className="group block rounded-sm overflow-hidden border border-card/[0.08] hover:border-secondary/30 transition-colors duration-500"
                >
                  {/* Image */}
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    <img
                      src={serviceImages[i]}
                      alt={service.title}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                    <motion.span
                      className="absolute top-4 left-5 font-display text-6xl font-bold text-card/[0.08] select-none group-hover:text-secondary/15 transition-colors duration-500"
                    >
                      0{i + 1}
                    </motion.span>
                  </div>

                  {/* Text content */}
                  <div className="p-6 md:p-8 bg-card/[0.04]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-sm bg-secondary/15 flex items-center justify-center border border-secondary/20 group-hover:bg-secondary/25 transition-colors duration-300">
                        <service.icon size={20} className="text-secondary" />
                      </div>
                      <h3 className="font-display text-lg md:text-xl font-bold text-primary-foreground group-hover:text-secondary transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-sm text-primary-foreground/60 font-body leading-relaxed mb-5">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-2 text-secondary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span className="text-xs font-body font-semibold uppercase tracking-[2px]">
                        Explorar servicio
                      </span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
