import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials, testimonialsContent } from "@/lib/content/testimonials";

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const count = testimonials.length;

  const next = () => setCurrent((p) => (p + 1) % count);
  const prev = () => setCurrent((p) => (p - 1 + count) % count);

  // Auto-advance every 6s
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section className="py-16 md:py-20 bg-background overflow-hidden" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="section-label">{testimonialsContent.label}</p>
          <h2 className="section-title">
            {testimonialsContent.title}{" "}
            <span>{testimonialsContent.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground font-body text-base">
            {testimonialsContent.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto relative"
        >
          {/* Quote icon */}
          <Quote
            size={48}
            className="text-secondary/15 absolute -top-2 left-4 md:left-0 -translate-x-2"
          />

          <div className="bg-card border border-border rounded-sm p-8 md:p-12 relative overflow-hidden min-h-[280px] flex flex-col justify-center">
            {/* Decorative accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary/60 via-secondary to-secondary/60" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-secondary text-secondary"
                    />
                  ))}
                </div>

                {/* Text */}
                <blockquote className="font-body text-foreground/90 text-base md:text-lg leading-relaxed italic mb-8">
                  "{t.text}"
                </blockquote>

                {/* Author */}
                <div>
                  <p className="font-display font-bold text-foreground text-base">
                    {t.name}
                  </p>
                  <p className="text-muted-foreground font-body text-sm">
                    {t.role}
                  </p>
                  {t.project && (
                    <span className="inline-block mt-2 px-3 py-1 rounded text-[10px] font-semibold uppercase tracking-wider bg-secondary/10 text-secondary border border-secondary/20">
                      {t.project}
                    </span>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:border-secondary hover:text-secondary transition-colors"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    current === i
                      ? "w-8 bg-secondary"
                      : "w-3 bg-border hover:bg-muted-foreground/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:border-secondary hover:text-secondary transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
