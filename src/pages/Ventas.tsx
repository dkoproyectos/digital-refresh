import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ventasLanding } from "@/lib/content/sales";

const Ventas = () => (
  <PageLayout>
    <PageHero {...ventasLanding.hero} />

    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          {ventasLanding.categories.map((cat, i) => (
            <motion.div key={cat.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Link to={cat.href} className="group block relative overflow-hidden rounded-sm h-[380px]">
                <img src={cat.image.src} alt={cat.image.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-display text-2xl font-bold text-card mb-2">{cat.title}</h3>
                  <p className="text-card/60 font-body text-sm leading-relaxed mb-4">{cat.description}</p>
                  <span className="inline-flex items-center gap-2 text-secondary text-sm font-body font-medium uppercase tracking-wider group-hover:gap-3 transition-all">
                    Ver Productos <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Ventas;
