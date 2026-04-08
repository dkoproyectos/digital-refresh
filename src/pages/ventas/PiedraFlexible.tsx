import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { piedraFlexibleProducts } from "@/lib/content/products/piedra-flexible";

const productSlugs = Object.keys(piedraFlexibleProducts);

const piedraFlexibleFaqs = [
  { question: "¿Qué es la piedra flexible?", answer: "Es una lámina ultradelgada extraída de piedra natural real que conserva su textura, color y características, pero con un espesor de solo 1-3mm." },
  { question: "¿Hacen instalación?", answer: "Sí, nuestro equipo se encarga de la venta e instalación completa con garantía." },
  { question: "¿Tienen muestras disponibles?", answer: "Sí, podemos llevar muestras a tu domicilio o visitarnos en showroom." },
  { question: "¿Se puede instalar sobre cualquier superficie?", answer: "Sí, se adhiere a concreto, drywall, madera, cerámica, muebles y prácticamente cualquier superficie." },
];

const PiedraFlexible = () => (
  <PageLayout>
    <PageHero
      label="Productos · Piedra Flexible"
      title="Piedra"
      highlight="Flexible"
      description="Láminas ultradelgadas de piedra natural para revestir cualquier superficie con un acabado único, elegante y liviano."
    />

    <section className="py-20 bg-background">
      <div className="container">
        <p className="section-label">Nuestros Productos</p>
        <h2 className="section-title">Catálogo de <span>piedra flexible</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productSlugs.map((slug, i) => {
            const p = piedraFlexibleProducts[slug];
            return (
              <motion.div key={slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link
                  to={`/productos/piedra-flexible/${slug}`}
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

    <FAQSection faqs={piedraFlexibleFaqs} />

    <section className="py-20 bg-background">
      <div className="container max-w-2xl text-center">
        <p className="section-label">Cotiza ahora</p>
        <h2 className="section-title">Transforma tus <span>espacios</span> con piedra flexible</h2>
        <ContactForm
          context="Piedra Flexible"
          variant="sales"
          productOptions={productSlugs.map((s) => piedraFlexibleProducts[s].productName)}
        />
      </div>
    </section>
  </PageLayout>
);

export default PiedraFlexible;
