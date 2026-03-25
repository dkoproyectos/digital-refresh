import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { CheckCircle, Home, DollarSign, Clock, Wrench } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project3 from "@/assets/project-3.jpg";

const benefits = [
  "Diseño inteligente para espacios compactos",
  "Materiales de calidad a precios accesibles",
  "Financiación disponible",
  "Entrega en tiempos récord",
  "Asesoría gratuita inicial",
  "Garantía en todos los trabajos",
];

const process = [
  { icon: Home, title: "Visita Técnica", desc: "Evaluamos tu vivienda VIS y detectamos todo el potencial." },
  { icon: DollarSign, title: "Presupuesto", desc: "Cotización detallada con opciones de financiación." },
  { icon: Wrench, title: "Ejecución", desc: "Remodelación eficiente con mínima interrupción." },
  { icon: Clock, title: "Entrega Rápida", desc: "Tu hogar transformado en el menor tiempo posible." },
];

const HogarVis = () => (
  <PageLayout>
    <PageHero
      label="Servicios · Hogar VIS"
      title="Tu Hogar"
      highlight="VIS"
      description="Soluciones de diseño y remodelación inteligentes para viviendas de interés social."
    />

    <section className="relative h-[35vh] min-h-[260px]">
      <img src={project3} alt="Hogar VIS" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/40" />
    </section>

    <section className="py-20 bg-background">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="section-label">¿En qué consiste?</p>
          <h2 className="section-title">Maximiza cada <span>metro cuadrado</span></h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-6">
            Entendemos que un hogar VIS merece ser funcional, bonito y cómodo. Diseñamos soluciones que aprovechan cada espacio, con materiales de calidad y precios justos.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-2">
                <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                <span className="text-sm font-body text-foreground">{b}</span>
              </div>
            ))}
          </div>
        </div>
        <img src={project1} alt="Hogar VIS proyecto" className="w-full h-[400px] object-cover rounded-sm" />
      </div>
    </section>

    <section className="py-20 bg-muted/30">
      <div className="container">
        <p className="section-label">¿Cómo trabajamos?</p>
        <h2 className="section-title">Proceso <span>simplificado</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center">
                <p.icon size={24} className="text-secondary" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container max-w-2xl text-center">
        <p className="section-label">Cotiza tu proyecto</p>
        <h2 className="section-title">Transforma tu hogar <span>VIS</span></h2>
        <ContactForm context="Tu Hogar VIS" />
      </div>
    </section>
  </PageLayout>
);

export default HogarVis;
