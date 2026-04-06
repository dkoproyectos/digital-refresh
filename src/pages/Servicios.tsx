import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { serviciosLanding } from "@/lib/content/services";

const Servicios = () => (
  <PageLayout>
    <PageHero {...serviciosLanding.hero} />

    <section className="py-20 bg-background">
      <div className="container">
        <div className="space-y-20">
          {serviciosLanding.services.map((s, i) => (
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
                  <img src={s.image.src} alt={s.image.alt} className="w-full h-[360px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                </div>
              </div>
              <div style={{ direction: "ltr" }}>
                <s.icon size={32} className="text-secondary mb-4" />
                <h3 className="font-display text-3xl font-bold text-foreground mb-4">{s.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">{s.description}</p>
                <Link to={s.href} className="btn-gold inline-flex items-center gap-2">
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
