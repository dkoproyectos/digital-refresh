import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { Award, Users, Target, Heart, Shield, Lightbulb } from "lucide-react";

const values = [
  { icon: Award, title: "Excelencia", desc: "Cada detalle importa. Nos comprometemos con la más alta calidad en cada proyecto." },
  { icon: Target, title: "Precisión", desc: "Cumplimos presupuestos y tiempos, sin sorpresas ni sobrecostos." },
  { icon: Heart, title: "Pasión", desc: "Amamos transformar espacios y crear ambientes que inspiran." },
  { icon: Shield, title: "Confianza", desc: "Transparencia total en cada etapa del proceso." },
  { icon: Users, title: "Equipo", desc: "Profesionales expertos en diseño, arquitectura y construcción." },
  { icon: Lightbulb, title: "Innovación", desc: "Tendencias actuales y soluciones creativas para cada espacio." },
];

const timeline = [
  { year: "2014", text: "Fundación de DKO Proyectos en Cali con la visión de transformar la industria del diseño interior." },
  { year: "2017", text: "Expansión a proyectos de construcción integral y remodelación de viviendas VIS." },
  { year: "2020", text: "Lanzamiento de la línea de ventas: cortinas, películas solares y recubrimientos." },
  { year: "2023", text: "Más de 500 proyectos completados y alianzas estratégicas con las mejores marcas." },
  { year: "2026", text: "Consolidación como referente en diseño integral y soluciones para el hogar en el Valle del Cauca." },
];

const Nosotros = () => (
  <PageLayout>
    <PageHero
      label="Nosotros"
      title="Diseñamos con"
      highlight="esencia"
      description="Más de una década creando espacios que reflejan la identidad de cada cliente en Cali y el Valle del Cauca."
    />

    {/* Historia */}
    <section className="py-20 bg-background">
      <div className="container">
        <p className="section-label">Nuestra Historia</p>
        <h2 className="section-title">
          Una trayectoria de <span>pasión</span> y compromiso
        </h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-12 pb-10 last:pb-0"
            >
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-secondary" />
              </div>
              <span className="font-display text-2xl font-bold text-secondary">{item.year}</span>
              <p className="text-muted-foreground font-body text-sm mt-1 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Valores */}
    <section className="py-20 bg-muted/30">
      <div className="container">
        <p className="section-label">Nuestros Valores</p>
        <h2 className="section-title">
          Lo que nos <span>define</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-8 border border-border hover:border-secondary/30 transition-colors"
            >
              <v.icon size={28} className="text-secondary mb-4" />
              <h3 className="font-display text-xl font-bold text-primary mb-2">{v.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-background">
      <div className="container max-w-2xl text-center">
        <p className="section-label">¿Listo para empezar?</p>
        <h2 className="section-title">
          Cotiza tu proyecto <span>sin compromiso</span>
        </h2>
        <ContactForm context="Información general" />
      </div>
    </section>
  </PageLayout>
);

export default Nosotros;
