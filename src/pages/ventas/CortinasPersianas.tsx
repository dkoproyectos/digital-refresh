import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cortinasContent } from "@/lib/content/sales";
import { cortinasProducts } from "@/lib/content/products/cortinas";

const c = cortinasContent;
const productSlugs = Object.keys(cortinasProducts);

const CortinasPersianas = () => (
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
        <p className="section-label">Nuestros Productos</p>
        <h2 className="section-title">Catálogo de <span>cortinas y persianas</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productSlugs.map((slug, i) => {
            const p = cortinasProducts[slug];
            return (
              <motion.div key={slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link
                  to={`/ventas/cortinas-persianas/${slug}`}
                  className="block bg-card p-6 border border-border hover:border-secondary/30 hover:shadow-md transition-all group"
                >
                  {p.heroImage && (
                    <div className="overflow-hidden rounded-sm mb-4 h-[180px]">
                      <img src={p.heroImage.src} alt={p.heroImage.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                  )}
                  <h3 className="font-display text-lg font-bold text-primary mb-2">{p.productName}</h3>
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

    <section className="py-20 bg-muted/30">
      <div className="container max-w-2xl text-center">
        <p className="section-label">Cotiza ahora</p>
        <h2 className="section-title">Viste tus <span>ventanas</span></h2>
        <ContactForm context={c.formContext} variant="sales" productOptions={c.products.map((p) => p.name)} />
      </div>
    </section>
  </PageLayout>
);

export default CortinasPersianas;
