import { motion } from "framer-motion";

interface PageHeroProps {
  label: string;
  title: string;
  highlight?: string;
  description?: string;
}

const PageHero = ({ label, title, highlight, description }: PageHeroProps) => (
  <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-navy-mid to-primary" />
      <div className="absolute top-[-30%] right-[-10%] w-[60%] h-[70%] rounded-full bg-secondary/[0.06] blur-[100px]" />
    </div>
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--secondary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--secondary)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
    <div className="container relative z-10">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-label text-secondary"
      >
        {label}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-card leading-tight max-w-3xl"
      >
        {title}{" "}
        {highlight && <span className="text-secondary">{highlight}</span>}
      </motion.h1>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-card/60 font-body text-base md:text-lg max-w-xl leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  </section>
);

export default PageHero;
