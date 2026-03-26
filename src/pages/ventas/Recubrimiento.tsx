import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { recubrimientoContent } from "@/lib/content/sales";

const c = recubrimientoContent;

const Recubrimiento = () => (
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
        <h2 className="section-title">Catálogo de <span>recubrimientos</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.products.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card p-6 border border-border hover:border-secondary/30 transition-colors">
              <CheckCircle size={20} className="text-secondary mb-3" />
              <h3 className="font-display text-lg font-bold text-primary mb-2">{p.name}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {c.gallery && c.gallery.length > 0 && (
      <section className="py-20 bg-muted/30">
        <div className="container">
          <p className="section-label">Proyectos realizados</p>
          <h2 className="section-title">Inspiración en <span>recubrimientos</span></h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {c.gallery.map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="overflow-hidden rounded-sm">
                <img src={img.src} alt={img.alt} className="w-full h-[260px] object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )}

    {c.faqs && c.faqs.length > 0 && (
      <section className="py-20 bg-background">
        <div className="container max-w-2xl">
          <p className="section-label">Preguntas Frecuentes</p>
          <h2 className="section-title">Resolvemos tus <span>dudas</span></h2>
          <div className="space-y-4">
            {c.faqs.map((faq) => (
              <div key={faq.question} className="bg-card p-6 border border-border">
                <h3 className="font-display text-lg font-bold text-primary mb-2">{faq.question}</h3>
                <p className="text-muted-foreground font-body text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )}

    <section className="py-20 bg-muted/30">
      <div className="container max-w-2xl text-center">
        <p className="section-label">Cotiza ahora</p>
        <h2 className="section-title">Transforma tus <span>paredes</span></h2>
        <ContactForm
          context={c.formContext}
          variant="sales"
          productOptions={c.products.map((p) => p.name)}
        />
      </div>
    </section>
  </PageLayout>
);

export default Recubrimiento;
