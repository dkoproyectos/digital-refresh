import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Paintbrush, Home, Building } from "lucide-react";
import heroImg from "@/assets/hero-home.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";

const services = [
  {
    icon: Paintbrush,
    title: "Diseño de Interior Premium",
    desc: "Proyectos de alto nivel con materiales exclusivos, diseño personalizado y acabados de lujo para espacios residenciales y comerciales.",
    href: "/servicios/diseno-premium",
    img: heroImg,
  },
  {
    icon: Home,
    title: "Tu Hogar VIS",
    desc: "Soluciones inteligentes de diseño y remodelación para viviendas de interés social, maximizando cada metro cuadrado.",
    href: "/servicios/hogar-vis",
    img: project1,
  },
  {
    icon: Building,
    title: "Acabados para Rentas Cortas",
    desc: "Diseño funcional y atractivo para propiedades de renta turística. Espacios que generan más reservas y mejores reseñas.",
    href: "/servicios/rentas-cortas",
    img: project2,
  },
];

const Servicios = () => (
  <PageLayout>
    <PageHero
      label="Servicios"
      title="Soluciones integrales de"
      highlight="diseño"
      description="Desde la conceptualización hasta la entrega final, gestionamos cada etapa de tu proyecto."
    />

    <section className="py-20 bg-background">
      <div className="container">
        <div className="space-y-20">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              style={{ direction: i % 2 === 1 ? "rtl" : "ltr" }}
            >
              <div style={{ direction: "ltr" }}>
                <div className="relative overflow-hidden rounded-sm">
                  <img src={s.img} alt={s.title} className="w-full h-[360px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                </div>
              </div>
              <div style={{ direction: "ltr" }}>
                <s.icon size={32} className="text-secondary mb-4" />
                <h3 className="font-display text-3xl font-bold text-primary mb-4">{s.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">{s.desc}</p>
                <Link
                  to={s.href}
                  className="btn-gold inline-flex items-center gap-2"
                >
                  Ver más <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Servicios;
