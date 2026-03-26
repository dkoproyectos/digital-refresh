import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { homeServices } from "@/lib/content/home";

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicios" className="py-28 bg-primary relative overflow-hidden" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full bg-secondary/[0.04] blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[50%] rounded-full bg-accent/[0.06] blur-[80px]" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--secondary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--secondary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/[0.08] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="text-[11px] font-body font-medium uppercase tracking-[3px] text-secondary">
              Nuestros Servicios
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-card leading-tight">
            Soluciones integrales para{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-secondary">transformar tu espacio</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-1 left-0 right-0 h-[3px] bg-secondary/40 origin-left"
              />
            </span>
          </h2>
          <p className="mt-5 text-card/50 font-body text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            En DKO creamos soluciones que combinan innovación, calidad y diseño.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {homeServices.map((service, i) => (
            <motion.a
              key={service.title}
              href={service.href}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-8 md:p-10 rounded-sm border border-card/[0.08] bg-card/[0.04] backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-secondary/30 hover:bg-card/[0.08]"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/[0.08] via-transparent to-accent/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Number */}
              <motion.span
                className="absolute top-6 right-6 font-display text-6xl md:text-7xl font-bold text-card/[0.04] group-hover:text-secondary/[0.08] transition-colors duration-500 select-none"
                whileHover={{ scale: 1.1 }}
              >
                0{i + 1}
              </motion.span>

              {/* Icon */}
              <div className="relative z-10">
                <motion.div
                  className="w-14 h-14 rounded-sm bg-secondary/[0.1] flex items-center justify-center mb-8 group-hover:bg-secondary/[0.2] transition-colors duration-500"
                  whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.5 } }}
                >
                  <service.icon size={26} className="text-secondary" />
                </motion.div>

                <h3 className="font-display text-xl md:text-2xl font-bold text-card mb-4 group-hover:text-secondary transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-sm text-card/50 font-body leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-secondary/70 group-hover:text-secondary transition-colors duration-300">
                  <span className="text-xs font-body font-semibold uppercase tracking-[2px]">
                    Ver más
                  </span>
                  <ArrowRight
                    size={14}
                    className="transform group-hover:translate-x-2 transition-transform duration-300"
                  />
                </div>

                {/* Bottom line */}
                <div className="mt-6 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-secondary to-secondary/30 transition-all duration-700 ease-out" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
