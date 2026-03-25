import { motion } from "framer-motion";
import heroImage from "@/assets/hero-home.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="Diseño de interiores premium en Cali - DKO Proyectos"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-primary/60" />
    </div>

    {/* Gold accent line */}
    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary z-10" />

    {/* Content */}
    <div className="container relative z-10 pt-32 pb-20">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[10px] font-body font-semibold uppercase tracking-[5px] text-secondary mb-6"
      >
        Diseño · Remodelación · Interiorismo en Cali
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-card leading-[1.05] max-w-3xl"
      >
        Cada idea tiene una esencia que refleja{" "}
        <em className="text-secondary italic">quién eres</em>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-6 text-card/70 font-body text-base md:text-lg max-w-xl leading-relaxed"
      >
        Somos especialistas en la gestión y ejecución integral de proyectos de construcción, remodelación, diseño de interiores y decoración en Cali.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-10 flex flex-col sm:flex-row gap-4"
      >
        <a href="#cotizar" className="btn-gold">
          Cotiza tu Proyecto
        </a>
        <a href="#servicios" className="btn-outline-light">
          Nuestros Servicios
        </a>
      </motion.div>
    </div>

    {/* Decorative text */}
    <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 rotate-90 font-display text-[120px] font-bold text-card/[0.03] tracking-[0.2em] pointer-events-none select-none hidden xl:block">
      DKO
    </div>
  </section>
);

export default HeroSection;
