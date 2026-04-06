import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { peliculasSolaresContent } from "@/lib/content/sales";
import { peliculasProducts } from "@/lib/content/products/peliculas";

const c = peliculasSolaresContent;
const productSlugs = Object.keys(peliculasProducts);

const PeliculasSolares = () => (
  <PageLayout>
    <PageHero {...c.hero} />

    {c.hero.bannerImage && (
      <section className="relative h-[35vh] min-h-[260px]">
        <img src={c.hero.bannerImage.src} alt={c.hero.bannerImage.alt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/30" />
      </section>
    )}

    <section className="py-20 bg-background">
      <div className="container">
        <p className="section-label">Tipos de Películas</p>
        <h2 className="section-title">Soluciones para cada <span>necesidad</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productSlugs.map((slug, i) => {
            const p = peliculasProducts[slug];
            return (
              <motion.div key={slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link
                  to={`/ventas/peliculas-solares/${slug}`}
                  className="block bg-card p-6 border border-border hover:border-secondary/30 hover:shadow-md transition-all group"
                >
                  {p.heroImage && (
                    <div className="overflow-hidden rounded-sm mb-4 h-[180px]">
                      <img src={p.heroImage.src} alt={p.heroImage.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                  )}
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{p.productName}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-3">{p.description}</p>
                  <span className="inline-flex items-center gap-1 text-secondary text-xs font-body font-semibold uppercase tracking-wider group-hover:gap-2 transition-all">
                    Ver producto <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {c.benefits && c.benefits.length > 0 && (
      <section className="py-20 bg-muted/30">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">Beneficios</p>
            <h2 className="section-title">¿Por qué elegir <span>películas solares</span>?</h2>
            <div className="space-y-3">
              {c.benefits.map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                  <span className="font-body text-foreground">{b}</span>
                </div>
              ))}
            </div>
          </div>
          {c.hero.bannerImage && (
            <img src={c.hero.bannerImage.src} alt="Películas solares" className="w-full h-[360px] object-cover rounded-sm" />
          )}
        </div>
      </section>
    )}

    <section className="py-20 bg-background">
      <div className="container max-w-2xl text-center">
        <p className="section-label">Cotiza ahora</p>
        <h2 className="section-title">Protege tus <span>espacios</span></h2>
        <ContactForm context={c.formContext} variant="sales" productOptions={c.products.map((p) => p.name)} />
      </div>
    </section>
  </PageLayout>
);

export default PeliculasSolares;
