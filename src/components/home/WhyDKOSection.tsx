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
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-5 bg-card border border-border rounded"
              >
                <p.icon size={20} className="text-accent mb-3" />
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
