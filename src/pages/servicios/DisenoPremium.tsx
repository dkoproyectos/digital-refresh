import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import QuoteModal from "@/components/QuoteModal";
import CreditSimulatorModal from "@/components/CreditSimulatorModal";
import CreditSimulatorCTA from "@/components/CreditSimulatorCTA";
import CreditFloatingButton from "@/components/CreditFloatingButton";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { disenoPremiumContent } from "@/lib/content/services";

const c = disenoPremiumContent;

const DisenoPremium = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [creditOpen, setCreditOpen] = useState(false);

  return (
    <PageLayout>
      <PageHero {...c.hero} />

      <QuoteModal open={quoteOpen} onOpenChange={setQuoteOpen} context={c.formContext} />
      <CreditSimulatorModal open={creditOpen} onOpenChange={setCreditOpen} serviceContext="Diseño de Interior Premium" />
      <CreditFloatingButton onClick={() => setCreditOpen(true)} />

    {c.hero.bannerImage && (
      <section className="relative h-[40vh] min-h-[300px]">
        <img src={c.hero.bannerImage.src} alt={c.hero.bannerImage.alt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-primary/10" />
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <button onClick={() => setQuoteOpen(true)} className="btn-gold text-base px-12 py-4 tracking-[3px] shadow-2xl">
            Cotizar Ahora
          </button>
        </div>
      </section>
    )}

    <section className="py-20 bg-background">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="section-label">¿En qué consiste?</p>
          <h2 className="section-title">{c.intro.title} <span>{c.intro.titleHighlight}</span></h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-6">{c.intro.description}</p>
          <div className="grid grid-cols-2 gap-3">
            {c.intro.features.map((f) => (
              <div key={f} className="flex items-center gap-2">
                <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                <span className="text-sm font-body text-foreground">{f}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img src={c.intro.image.src} alt={c.intro.image.alt} className="w-full h-[400px] object-cover rounded-sm" />
          <div className="absolute -bottom-4 -left-4 w-full h-full border border-secondary/20 rounded-sm pointer-events-none" />
        </div>
      </div>
    </section>

    <CreditSimulatorCTA onOpenSimulator={() => setCreditOpen(true)} />

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
              <span className="text-xs font-body text-secondary uppercase tracking-wider">Paso {i + 1}</span>
              <h3 className="font-display text-xl font-bold text-foreground mt-1 mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {c.projects.length > 0 && (
      <section className="py-20 bg-background">
        <div className="container">
          <p className="section-label">Proyectos destacados</p>
          <h2 className="section-title">Nuestro <span>portafolio</span></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.projects.map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative overflow-hidden rounded-sm cursor-pointer">
                <img src={img.src} alt={img.alt} className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <p className="text-card font-display text-lg font-bold">{img.alt}</p>
                    <p className="text-card/60 text-sm font-body">Cali, Colombia</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )}

    <FAQSection faqs={c.faqs} />

    <section className="py-20 bg-background">
      <div className="container max-w-2xl text-center">
        <p className="section-label">Cotiza tu proyecto</p>
        <h2 className="section-title">Hablemos de tu <span>espacio ideal</span></h2>
        <ContactForm context={c.formContext} variant="service" />
      </div>
    </section>
    </PageLayout>
  );
};

export default DisenoPremium;
