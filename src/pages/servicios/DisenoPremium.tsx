import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { CheckCircle, Ruler, Palette, Sofa, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-home.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";

const process = [
  { icon: Ruler, title: "Consultoría Inicial", desc: "Visita al espacio, análisis de necesidades y definición del presupuesto." },
  { icon: Palette, title: "Diseño Conceptual", desc: "Propuesta de diseño con renders 3D, paleta de colores y materiales." },
  { icon: Sofa, title: "Ejecución", desc: "Gestión integral de obra, coordinación de proveedores y control de calidad." },
  { icon: Sparkles, title: "Entrega", desc: "Decoración final, ambientación y entrega del espacio transformado." },
];

const features = [
  "Renders 3D fotorrealistas",
  "Materiales importados premium",
  "Mobiliario personalizado",
  "Iluminación arquitectónica",
  "Asesoría en arte y decoración",
  "Garantía post-entrega",
];

const faqs = [
  { q: "¿Cuánto tarda un proyecto de diseño premium?", a: "Dependiendo de la complejidad, entre 4 y 12 semanas desde el diseño hasta la entrega final." },
  { q: "¿Trabajan con presupuesto definido?", a: "Sí, nos adaptamos a tu presupuesto y te presentamos opciones dentro de tu rango." },
  { q: "¿Incluyen la compra de materiales?", a: "Sí, gestionamos toda la cadena: selección, compra, transporte e instalación." },
];

const DisenoPremium = () => (
  <PageLayout>
    <PageHero
      label="Servicios · Diseño Premium"
      title="Diseño de Interior"
      highlight="Premium"
      description="Espacios exclusivos con materiales de alta gama, diseño personalizado y ejecución impecable."
    />

    {/* Banner */}
    <section className="relative h-[40vh] min-h-[300px]">
      <img src={heroImg} alt="Diseño de interiores premium" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/40" />
    </section>

    {/* ¿En qué consiste? */}
    <section className="py-20 bg-background">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="section-label">¿En qué consiste?</p>
          <h2 className="section-title">
            Creamos espacios que <span>trascienden</span>
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-6">
            Nuestro servicio de Diseño de Interior Premium está diseñado para clientes que buscan exclusividad, atención al detalle y una experiencia completamente personalizada. Desde la conceptualización hasta la entrega, cada elemento es cuidadosamente seleccionado.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-2">
                <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                <span className="text-sm font-body text-foreground">{f}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img src={project1} alt="Proyecto premium" className="w-full h-[400px] object-cover rounded-sm" />
          <div className="absolute -bottom-4 -left-4 w-full h-full border border-secondary/20 rounded-sm pointer-events-none" />
        </div>
      </div>
    </section>

    {/* Cómo trabajamos */}
    <section className="py-20 bg-muted/30">
      <div className="container">
        <p className="section-label">¿Cómo trabajamos?</p>
        <h2 className="section-title">
          Nuestro <span>proceso</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center">
                <p.icon size={24} className="text-secondary" />
              </div>
              <span className="text-xs font-body text-secondary uppercase tracking-wider">Paso {i + 1}</span>
              <h3 className="font-display text-xl font-bold text-primary mt-1 mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Proyectos */}
    <section className="py-20 bg-background">
      <div className="container">
        <p className="section-label">Proyectos destacados</p>
        <h2 className="section-title">
          Nuestro <span>portafolio</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[heroImg, project1, project2].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-sm cursor-pointer"
            >
              <img src={img} alt={`Proyecto premium ${i + 1}`} className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <p className="text-card font-display text-lg font-bold">Proyecto Premium {i + 1}</p>
                  <p className="text-card/60 text-sm font-body">Cali, Colombia</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-20 bg-muted/30">
      <div className="container max-w-2xl">
        <p className="section-label">Preguntas Frecuentes</p>
        <h2 className="section-title">
          Resolvemos tus <span>dudas</span>
        </h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-card p-6 border border-border">
              <h3 className="font-display text-lg font-bold text-primary mb-2">{faq.q}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Cotización */}
    <section className="py-20 bg-background">
      <div className="container max-w-2xl text-center">
        <p className="section-label">Cotiza tu proyecto</p>
        <h2 className="section-title">
          Hablemos de tu <span>espacio ideal</span>
        </h2>
        <ContactForm context="Diseño de Interior Premium" />
      </div>
    </section>
  </PageLayout>
);

export default DisenoPremium;
