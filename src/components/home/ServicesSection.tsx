import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="servicios" className="py-0 relative overflow-hidden" ref={ref}>
      {/* Full-width dark band */}
      <div className="bg-primary">
        {/* Header */}
        <div className="container pt-28 pb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/[0.08] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                <span className="text-[11px] font-body font-medium uppercase tracking-[3px] text-secondary">
                  Nuestros Servicios
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-card leading-[1.1]">
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
              className="text-card/50 font-body text-base md:text-lg leading-relaxed lg:text-right max-w-md lg:ml-auto"
            >
              En DKO creamos soluciones que combinan innovación, calidad y diseño. Gestionamos cada proyecto con precisión.
            </motion.p>
          </div>
        </div>

        {/* Service cards — full bleed feeling */}
        <div className="container pb-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-sm overflow-hidden border border-card/[0.06]">
            {homeServices.map((service, i) => {
              const isHovered = hoveredIndex === i;
              const hasHover = hoveredIndex !== null;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative group"
                >
                  <Link to={service.href} className="block relative h-full">
                    {/* Image */}
                    <div className="relative h-[420px] md:h-[520px] overflow-hidden">
                      <motion.img
                        src={serviceImages[i]}
                        alt={service.title}
                        loading="lazy"
                        width={800}
                        height={1000}
                        className="w-full h-full object-cover"
                        animate={{
                          scale: isHovered ? 1.08 : 1,
                          filter: hasHover && !isHovered ? "brightness(0.4)" : "brightness(0.55)",
                        }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />

                      {/* Accent line top */}
                      <motion.div
                        className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-secondary via-accent to-secondary/0"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        style={{ transformOrigin: "left" }}
                      />
                    </div>

                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                      {/* Number tag */}
                      <motion.span
                        className="absolute top-6 left-8 font-display text-7xl md:text-8xl font-bold text-card/[0.06] select-none"
                        animate={{ 
                          color: isHovered ? "hsl(var(--secondary) / 0.12)" : "hsl(0 0% 100% / 0.06)",
                          y: isHovered ? -5 : 0
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        0{i + 1}
                      </motion.span>

                      {/* Icon */}
                      <motion.div
                        className="w-12 h-12 rounded-sm bg-secondary/20 backdrop-blur-sm flex items-center justify-center mb-5 border border-secondary/20"
                        animate={{ 
                          y: isHovered ? -4 : 0,
                          backgroundColor: isHovered ? "hsl(var(--secondary) / 0.3)" : "hsl(var(--secondary) / 0.15)"
                        }}
                        transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                      >
                        <service.icon size={22} className="text-secondary" />
                      </motion.div>

                      {/* Title */}
                      <motion.h3
                        className="font-display text-2xl md:text-3xl font-bold text-card mb-3"
                        animate={{ y: isHovered ? -4 : 0 }}
                        transition={{ duration: 0.4, delay: 0.05 }}
                      >
                        {service.title}
                      </motion.h3>

                      {/* Description — slides up on hover */}
                      <motion.p
                        className="text-sm text-card/60 font-body leading-relaxed max-w-xs"
                        animate={{ 
                          opacity: isHovered ? 1 : 0.6,
                          y: isHovered ? -4 : 0
                        }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        {service.description}
                      </motion.p>

                      {/* CTA row */}
                      <motion.div
                        className="flex items-center gap-3 mt-6"
                        animate={{ 
                          opacity: isHovered ? 1 : 0,
                          y: isHovered ? 0 : 10
                        }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                      >
                        <span className="text-xs font-body font-semibold uppercase tracking-[2px] text-secondary">
                          Explorar servicio
                        </span>
                        <motion.div
                          animate={{ x: isHovered ? 4 : 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          <ArrowRight size={14} className="text-secondary" />
                        </motion.div>
                      </motion.div>

                      {/* Bottom accent line */}
                      <motion.div
                        className="mt-6 h-[2px] bg-gradient-to-r from-secondary to-secondary/0"
                        animate={{ width: isHovered ? "100%" : "0%" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>

                    {/* Right border between cards */}
                    {i < 2 && (
                      <div className="hidden md:block absolute top-[10%] right-0 bottom-[10%] w-[1px] bg-card/[0.08]" />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
