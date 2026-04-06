import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { hogarVisContent } from "@/lib/content/services";
import { hogarVisStyles } from "@/lib/content/services/hogar-vis-styles";

const c = hogarVisContent;
const styleSlugs = Object.keys(hogarVisStyles);

const HogarVis = () => (
  <PageLayout>
    <PageHero {...c.hero} />

    {c.hero.bannerImage && (
      <section className="relative h-[35vh] min-h-[260px]">
        <img src={c.hero.bannerImage.src} alt={c.hero.bannerImage.alt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/40" />
      </section>
    )}

    {/* Catálogo de estilos */}
    <section className="py-20 bg-background">
      <div className="container">
        <p className="section-label">Elige tu estilo</p>
        <h2 className="section-title">Nuestros estilos <span>VIS</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {styleSlugs.map((slug, i) => {
            const s = hogarVisStyles[slug];
            return (
              <motion.div key={slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link
                  to={`/servicios/hogar-vis/${slug}`}
                  className="block bg-card p-6 border border-border hover:border-secondary/30 hover:shadow-md transition-all group"
                >
                  {s.heroImage && (
                    <div className="overflow-hidden rounded-sm mb-4 h-[220px]">
                      <img src={s.heroImage.src} alt={s.heroImage.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                  )}
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{s.title} {s.highlight}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-3">{s.description}</p>
                  <span className="inline-flex items-center gap-1 text-secondary text-xs font-body font-semibold uppercase tracking-wider group-hover:gap-2 transition-all">
                    Ver estilo <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Contact form */}
    <section className="py-20 bg-muted/30">
      <div className="container max-w-2xl text-center">
        <p className="section-label">Cotiza tu proyecto</p>
        <h2 className="section-title">Transforma tu hogar <span>VIS</span></h2>
        <ContactForm context={c.formContext} variant="service" />
      </div>
    </section>
  </PageLayout>
);

export default HogarVis;
