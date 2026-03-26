import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { whyDkoPillars, whyDkoContent } from "@/lib/content/home";

const WhyDKOSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label">{whyDkoContent.label}</p>
            <h2 className="section-title">
              {whyDkoContent.title} <span>{whyDkoContent.titleHighlight}</span>
            </h2>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              {whyDkoContent.description}
            </p>
            <a href="#cotizar" className="btn-gold">Cotiza tu Proyecto</a>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {whyDkoPillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.03, transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] } }}
                className="p-5 bg-card border border-border rounded hover:shadow-xl hover:border-accent/30 transition-[box-shadow,border-color] duration-500 cursor-default"
              >
                <motion.div whileHover={{ rotate: 360, transition: { duration: 0.6 } }}>
                  <p.icon size={20} className="text-accent mb-3" />
                </motion.div>
                <h4 className="font-display text-lg font-bold text-foreground mb-1">{p.title}</h4>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDKOSection;
