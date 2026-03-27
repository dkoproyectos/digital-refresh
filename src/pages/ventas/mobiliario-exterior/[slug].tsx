import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { mobiliarioProducts } from "@/lib/content/products/mobiliario";
import { mobiliarioItems } from "@/lib/content/products/mobiliario-items";

const MobiliarioProduct = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? mobiliarioProducts[slug] : undefined;
  if (!data) return <Navigate to="/ventas/mobiliario-exterior" replace />;

  const subProducts = slug ? mobiliarioItems[slug] : undefined;
  const subSlugs = subProducts ? Object.keys(subProducts) : [];

  return (
    <PageLayout>
      <PageHero label={data.breadcrumb} title={data.title} highlight={data.highlight} description={data.description} />

      {data.heroImage && (
        <section className="relative h-[35vh] min-h-[260px]">
          <img src={data.heroImage.src} alt={data.heroImage.alt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/30" />
          <div className="absolute top-6 left-6">
            <Link to="/ventas/mobiliario-exterior" className="inline-flex items-center gap-2 px-4 py-2 bg-card/90 backdrop-blur-sm rounded-sm text-sm font-body text-foreground hover:bg-card transition-colors">
              ← Mobiliario Exterior
            </Link>
          </div>
        </section>
      )}

      {/* Sub-products catalog */}
      {subSlugs.length > 0 && (
        <section className="py-20 bg-background">
          <div className="container">
            <p className="section-label">Nuestras Referencias</p>
            <h2 className="section-title">Catálogo de <span>{data.highlight}</span></h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {subSlugs.map((subSlug, i) => {
                const item = subProducts![subSlug];
                return (
                  <motion.div key={subSlug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                    <Link
                      to={`/ventas/mobiliario-exterior/${slug}/${subSlug}`}
                      className="block bg-card p-6 border border-border hover:border-secondary/30 hover:shadow-md transition-all group"
                    >
                      {item.heroImage && (
                        <div className="overflow-hidden rounded-sm mb-4 h-[180px]">
                          <img src={item.heroImage.src} alt={item.heroImage.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                      )}
                      <h3 className="font-display text-lg font-bold text-primary mb-2">{item.productName}</h3>
                      <p className="text-muted-foreground font-body text-sm leading-relaxed mb-3">{item.description}</p>
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
      )}

      {/* FAQ */}
      {data.faqs.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container max-w-2xl">
            <p className="section-label">Preguntas Frecuentes</p>
            <h2 className="section-title">Resolvemos tus <span>dudas</span></h2>
            <div className="space-y-4">
              {data.faqs.map((faq) => (
                <div key={faq.question} className="bg-card p-6 border border-border">
                  <h3 className="font-display text-lg font-bold text-primary mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground font-body text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact form */}
      <section className="py-20 bg-background">
        <div className="container max-w-2xl text-center">
          <p className="section-label">Cotiza ahora</p>
          <h2 className="section-title">Solicita tu <span>cotización</span></h2>
          <ContactForm context={data.formContext} variant="sales" productOptions={[data.productName]} />
        </div>
      </section>
    </PageLayout>
  );
};

export default MobiliarioProduct;
