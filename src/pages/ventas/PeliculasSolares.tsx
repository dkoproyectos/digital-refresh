import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { CheckCircle, Sun, Shield, Eye, Sparkles } from "lucide-react";
import ventaImg from "@/assets/venta-peliculas.jpg";

const products = [
  { icon: Sun, name: "Control Solar", desc: "Reduce hasta el 80% del calor sin perder luminosidad natural." },
  { icon: Eye, name: "Privacidad", desc: "Películas espejo y frosted para privacidad sin sacrificar la luz." },
  { icon: Shield, name: "Seguridad Anti-impacto", desc: "Protección contra roturas, robos y desastres naturales." },
  { icon: Sparkles, name: "Decorativa", desc: "Diseños, texturas y colores para vidrios con estilo." },
];

const benefits = [
  "Ahorro energético hasta 30%",
  "Protección UV al 99%",
  "Instalación profesional",
  "Garantía del fabricante",
  "Aplicación residencial y comercial",
  "Muestras gratuitas",
];

const PeliculasSolares = () => (
  <PageLayout>
    <PageHero
      label="Ventas · Películas Solares"
      title="Películas de Protección"
      highlight="Solar"
      description="Control solar, seguridad y privacidad para vidrios residenciales y comerciales."
    />

    <section className="relative h-[35vh] min-h-[260px]">
      <img src={ventaImg} alt="Películas solares" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/30" />
    </section>

    <section className="py-20 bg-background">
      <div className="container">
        <p className="section-label">Tipos de Películas</p>
        <h2 className="section-title">Soluciones para cada <span>necesidad</span></h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {products.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-5 bg-card p-6 border border-border hover:border-secondary/30 transition-colors">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-secondary/10 flex items-center justify-center">
                <p.icon size={22} className="text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-primary mb-1">{p.name}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-muted/30">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="section-label">Beneficios</p>
          <h2 className="section-title">¿Por qué elegir <span>películas solares</span>?</h2>
          <div className="space-y-3">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-3">
                <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                <span className="font-body text-foreground">{b}</span>
              </div>
            ))}
          </div>
        </div>
        <img src={ventaImg} alt="Películas solares beneficios" className="w-full h-[360px] object-cover rounded-sm" />
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container max-w-2xl text-center">
        <p className="section-label">Cotiza ahora</p>
        <h2 className="section-title">Protege tus <span>espacios</span></h2>
        <ContactForm context="Películas de Protección Solar" />
      </div>
    </section>
  </PageLayout>
);

export default PeliculasSolares;
