import { motion } from "framer-motion";
import heroImage from "@/assets/hero-home.jpg";

const stats = [
  { value: "500+", label: "Proyectos" },
  { value: "12", label: "Años" },
  { value: "98%", label: "Satisfacción" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
    {/* Abstract gradient mesh background */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-navy-mid to-primary" />
      <div className="absolute top-[-30%] right-[-10%] w-[70%] h-[80%] rounded-full bg-secondary/[0.06] blur-[120px]" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full bg-accent/[0.08] blur-[100px]" />
    </div>

    {/* Grid pattern overlay */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--secondary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--secondary)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />

    {/* Content */}
    <div className="container relative z-10 pt-32 pb-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left – copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/[0.08] mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="text-[11px] font-body font-medium uppercase tracking-[3px] text-secondary">
              Diseño · Remodelación · Interiorismo
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-7xl font-bold text-card leading-[1.05]"
          >
            Transformamos{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-secondary">espacios</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute bottom-1 left-0 right-0 h-[3px] bg-secondary/40 origin-left"
              />
            </span>
            <br />
            que inspiran vida
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-card/60 font-body text-base md:text-lg max-w-md leading-relaxed"
          >
            Gestión y ejecución integral de proyectos de construcción,
            remodelación, diseño de interiores y decoración en Cali.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a href="#cotizar" className="btn-gold">
              Cotiza tu Proyecto
            </a>
            <a href="#servicios" className="btn-outline-light">
              Nuestros Servicios
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-14 flex gap-10"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="font-display text-3xl md:text-4xl font-bold text-secondary">
                  {s.value}
                </span>
                <span className="text-[11px] font-body uppercase tracking-[2px] text-card/40 mt-1">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right – image composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          {/* Main image card */}
          <div className="relative rounded-sm overflow-hidden shadow-2xl">
            <img
              src={heroImage}
              alt="Diseño de interiores premium en Cali - DKO Proyectos"
              className="w-full h-[520px] object-cover"
              width={640}
              height={520}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          </div>

          {/* Floating accent card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute -bottom-6 -left-8 bg-card/95 backdrop-blur-sm p-5 rounded-sm shadow-xl border border-border"
          >
            <p className="font-display text-lg font-semibold text-primary">
              Cali, Colombia
            </p>
            <p className="text-[11px] font-body text-muted-foreground uppercase tracking-[2px] mt-1">
              Diseño con esencia
            </p>
          </motion.div>

          {/* Decorative border */}
          <div className="absolute -top-4 -right-4 w-full h-full border border-secondary/20 rounded-sm pointer-events-none" />
        </motion.div>
      </div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="text-[10px] font-body uppercase tracking-[3px] text-card/30">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="w-[1px] h-8 bg-gradient-to-b from-secondary/60 to-transparent"
      />
    </motion.div>
  </section>
);

export default HeroSection;
