import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { useState } from "react";
import heroImg from "@/assets/hero-home.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const filters = ["Todos", "Diseño Premium", "Hogar VIS", "Rentas Cortas", "Ventas"];

const projects = [
  { img: heroImg, title: "Penthouse El Peñón", category: "Diseño Premium", location: "Cali" },
  { img: project1, title: "Apartamento Ciudad Jardín", category: "Diseño Premium", location: "Cali" },
  { img: project2, title: "Loft Airbnb San Antonio", category: "Rentas Cortas", location: "Cali" },
  { img: project3, title: "Hogar VIS Valle del Lili", category: "Hogar VIS", location: "Cali" },
  { img: project4, title: "Studio Airbnb Granada", category: "Rentas Cortas", location: "Cali" },
  { img: heroImg, title: "Oficinas Holguines", category: "Diseño Premium", location: "Cali" },
  { img: project1, title: "Apartamento Torres de Comfandi", category: "Hogar VIS", location: "Cali" },
  { img: project3, title: "Películas Solares Edificio Carvajal", category: "Ventas", location: "Cali" },
  { img: project2, title: "Cortinas Residencia Pance", category: "Ventas", location: "Cali" },
];

const Proyectos = () => {
  const [active, setActive] = useState("Todos");
  const filtered = active === "Todos" ? projects : projects.filter((p) => p.category === active);

  return (
    <PageLayout>
      <PageHero
        label="Proyectos"
        title="Nuestro"
        highlight="portafolio"
        description="Galería de proyectos realizados en diseño interior, remodelación y ventas en Cali."
      />

      <section className="py-20 bg-background">
        <div className="container">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 text-xs font-body font-semibold uppercase tracking-wider border transition-all ${
                  active === f
                    ? "bg-secondary text-card border-secondary"
                    : "bg-transparent text-muted-foreground border-border hover:border-secondary/50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-sm cursor-pointer"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <span className="text-[10px] font-body uppercase tracking-wider text-secondary">{p.category}</span>
                    <p className="text-card font-display text-lg font-bold">{p.title}</p>
                    <p className="text-card/50 text-sm font-body">{p.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container max-w-2xl text-center">
          <p className="section-label">¿Te gustaría un resultado así?</p>
          <h2 className="section-title">Cotiza tu <span>proyecto</span></h2>
          <ContactForm context="Información sobre proyectos" />
        </div>
      </section>
    </PageLayout>
  );
};

export default Proyectos;
