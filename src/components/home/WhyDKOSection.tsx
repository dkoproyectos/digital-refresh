import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { DollarSign, Ruler, Clock, Award, CreditCard, Users } from "lucide-react";

const pillars = [
  { icon: DollarSign, title: "Presupuesto", text: "Planificamos con precisión para evitar gastos adicionales. Transparencia total." },
  { icon: Ruler, title: "Diseño", text: "Soluciones que equilibran estética, funcionalidad y viabilidad técnica." },
  { icon: Clock, title: "Cumplimiento", text: "Cronogramas detallados con seguimiento para ejecución puntual." },
  { icon: Award, title: "Calidad", text: "Alianza con proveedores certificados y materiales de alta gama." },
  { icon: CreditCard, title: "Financiación", text: "Alternativas propias adaptadas a la magnitud de tu proyecto." },
  { icon: Users, title: "Personal", text: "Expertos en cada etapa, garantizando trabajo profesional y responsable." },
];

const WhyDKOSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <div>
            <p className="section-label">¿Por qué DKO?</p>
            <h2 className="section-title">
              Gestión integral con <span>resultados garantizados</span>
            </h2>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              En DKO no solo diseñamos espacios, los hacemos realidad. Nuestro modelo integral abarca desde la planificación presupuestal hasta la entrega final, con financiación flexible y los mejores materiales del mercado.
            </p>
            <a href="#cotizar" className="btn-gold">
              Cotiza tu Proyecto
            </a>
          </div>

          {/* Right: pillars grid */}
          <div className="grid grid-cols-2 gap-5">
            {pillars.map((p, i) => (
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
