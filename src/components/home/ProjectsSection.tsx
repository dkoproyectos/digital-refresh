import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  { img: project1, title: "Cocina Premium Cataya", category: "Diseño Interior", location: "Cali, Valle" },
  { img: project2, title: "Oficinas Learn English", category: "Corporativo", location: "Cali, Valle" },
  { img: project3, title: "Apartamento VIS Pie de Loma", category: "Remodelación VIS", location: "Cali, Valle" },
  { img: project4, title: "Cortinas & Persianas Capilla SF", category: "Ventas", location: "Cali, Valle" },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-card" ref={ref}>
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
          <div>
            <p className="section-label">Portafolio</p>
            <h2 className="section-title mb-0">
              Proyectos que <span>inspiran</span>
            </h2>
          </div>
          <a href="/proyectos" className="btn-gold text-xs self-start">
            Ver Todos
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-project group aspect-[4/3] rounded overflow-hidden"
            >
              <img src={p.img} alt={p.title} loading="lazy" width={800} height={800} />
              <div className="overlay">
                <span className="text-[10px] uppercase tracking-[3px] text-secondary font-body font-semibold">
                  {p.category}
                </span>
                <h3 className="font-display text-2xl font-bold text-card mt-1">{p.title}</h3>
                <p className="text-xs text-card/60 font-body mt-1">{p.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
