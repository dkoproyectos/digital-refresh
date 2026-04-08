import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CreditCard, CheckCircle, Sparkles } from "lucide-react";
import { creditSimulatorContent as cms } from "@/lib/content/credit-simulator";

interface CreditSimulatorCTAProps {
  onOpenSimulator: () => void;
}

const CreditSimulatorCTA = ({ onOpenSimulator }: CreditSimulatorCTAProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-foreground/[0.08]" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--secondary)) 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 mb-6">
              <Sparkles size={14} className="text-secondary" />
              <span className="text-[11px] font-body font-medium uppercase tracking-[3px] text-secondary">
                {cms.cta.label}
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.8rem] font-bold text-primary-foreground leading-[1.1] mb-4">
              {cms.cta.title}{" "}
              <span className="text-secondary">{cms.cta.titleHighlight}</span>
            </h2>

            <p className="text-primary-foreground/70 font-body text-base leading-relaxed mb-8 max-w-lg">
              {cms.cta.description}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {cms.cta.features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle size={14} className="text-accent shrink-0" />
                  <span className="text-sm font-body text-primary-foreground/80">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={onOpenSimulator}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="btn-gold text-sm py-4 px-10 tracking-[2px] flex items-center gap-3 group"
            >
              <CreditCard size={18} className="group-hover:scale-110 transition-transform" />
              {cms.cta.buttonLabel}
            </motion.button>
          </motion.div>

          {/* Right: Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Decorative credit card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="bg-gradient-to-br from-foreground/90 to-foreground/70 rounded-xl p-8 shadow-2xl border border-card/10"
              >
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <p className="text-card/40 text-[10px] font-body uppercase tracking-[3px]">DKO Proyectos</p>
                    <p className="text-card font-display text-xl font-bold mt-1">Financiación</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center">
                    <CreditCard size={20} className="text-secondary" />
                  </div>
                </div>

                <div className="space-y-1 mb-8">
                  <p className="text-card/70 font-mono text-lg tracking-[4px]">•••• •••• •••• 4321</p>
                </div>

                <div className="flex justify-between">
                  <div>
                    <p className="text-card/40 text-[9px] uppercase tracking-wider">Monto hasta</p>
                    <p className="text-secondary font-display text-lg font-bold">$120.000.000</p>
                  </div>
                  <div>
                    <p className="text-card/40 text-[9px] uppercase tracking-wider">Plazo hasta</p>
                    <p className="text-card font-display text-lg font-bold">60 meses</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground rounded-sm px-5 py-3 shadow-lg"
              >
                <p className="text-xs font-body font-bold uppercase tracking-wider">Pre-aprobado ✓</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CreditSimulatorCTA;
