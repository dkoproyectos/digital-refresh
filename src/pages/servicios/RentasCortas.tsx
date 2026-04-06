import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import QuoteModal from "@/components/QuoteModal";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { rentasCortasContent } from "@/lib/content/services";

const c = rentasCortasContent;

const RentasCortas = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <PageLayout>
      <PageHero {...c.hero} />

      {/* Botón flotante de cotizar */}
      <div className="fixed bottom-24 right-6 z-40">
        <button onClick={() => setQuoteOpen(true)} className="btn-gold text-xs py-3 px-6 shadow-xl glow-pulse">
          Cotizar Ahora
        </button>
      </div>
      <QuoteModal open={quoteOpen} onOpenChange={setQuoteOpen} context={c.formContext} />

    {c.hero.bannerImage && (
      <section className="relative h-[35vh] min-h-[260px]">
        <img src={c.hero.bannerImage.src} alt={c.hero.bannerImage.alt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/40" />
      </section>
    )}

    <section className="py-20 bg-background">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="section-label">¿En qué consiste?</p>
          <h2 className="section-title">{c.intro.title} <span>{c.intro.titleHighlight}</span></h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-6">{c.intro.description}</p>
          <div className="grid grid-cols-2 gap-3">
            {c.intro.features.map((b) => (
              <div key={b} className="flex items-center gap-2">
                <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                <span className="text-sm font-body text-foreground">{b}</span>
              </div>
            ))}
          </div>
        </div>
        <img src={c.intro.image.src} alt={c.intro.image.alt} className="w-full h-[400px] object-cover rounded-sm" />
      </div>
    </section>

    <section className="py-20 bg-muted/30">
      <div className="container">
        <p className="section-label">¿Cómo trabajamos?</p>
        <h2 className="section-title">Nuestro <span>proceso</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {c.process.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center">
                <p.icon size={24} className="text-secondary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container max-w-2xl text-center">
        <p className="section-label">Cotiza tu proyecto</p>
        <h2 className="section-title">Potencia tu <span>renta corta</span></h2>
        <ContactForm context={c.formContext} variant="service" />
      </div>
    </section>
    </PageLayout>
  );
};

export default RentasCortas;
