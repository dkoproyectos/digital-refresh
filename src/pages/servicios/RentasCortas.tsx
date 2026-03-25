import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { CheckCircle, Star, TrendingUp, Camera, Bed } from "lucide-react";
import project2 from "@/assets/project-2.jpg";
import project4 from "@/assets/project-4.jpg";

const benefits = [
  "Diseño enfocado en fotografía para plataformas",
  "Mobiliario resistente y estético",
  "Optimización para reseñas 5 estrellas",
  "Ambientación tipo hotel boutique",
  "Gestión integral del proyecto",
  "Mantenimiento post-entrega",
];

const process = [
  { icon: Camera, title: "Análisis de Mercado", desc: "Estudiamos tu zona y el perfil de huéspedes ideales." },
  { icon: Bed, title: "Diseño Estratégico", desc: "Cada elemento pensado para maximizar reservas." },
  { icon: Star, title: "Ejecución", desc: "Remodelación y ambientación profesional." },
  { icon: TrendingUp, title: "Resultados", desc: "Tu propiedad lista para generar ingresos desde el día 1." },
];

const RentasCortas = () => (
  <PageLayout>
    <PageHero
      label="Servicios · Rentas Cortas"
      title="Acabados para"
      highlight="Rentas Cortas"
      description="Diseño que maximiza reservas y genera las mejores reseñas en plataformas como Airbnb y Booking."
    />

    <section className="relative h-[35vh] min-h-[260px]">
      <img src={project4} alt="Rentas cortas" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/40" />
    </section>

    <section className="py-20 bg-background">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="section-label">¿En qué consiste?</p>
          <h2 className="section-title">Espacios que <span>generan ingresos</span></h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-6">
            Diseñamos propiedades de renta corta con un enfoque 100% estratégico: cada elemento está pensado para que tu espacio se vea increíble en fotos, reciba reseñas 5 estrellas y maximice tu ocupación.
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
        <img src={project2} alt="Rentas cortas proyecto" className="w-full h-[400px] object-cover rounded-sm" />
      </div>
    </section>

    <section className="py-20 bg-muted/30">
      <div className="container">
        <p className="section-label">¿Cómo trabajamos?</p>
        <h2 className="section-title">Nuestro <span>proceso</span></h2>
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
        <h2 className="section-title">Potencia tu <span>renta corta</span></h2>
        <ContactForm context="Acabados para Rentas Cortas" />
      </div>
    </section>
  </PageLayout>
);

export default RentasCortas;
