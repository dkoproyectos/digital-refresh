import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { aboutHero, timeline, companyValues } from "@/lib/content/about";

const Nosotros = () => (
  <PageLayout>
    <PageHero {...aboutHero} />

    <section className="py-20 bg-background">
      <div className="container">
        <p className="section-label">Nuestra Historia</p>
        <h2 className="section-title">Una trayectoria de <span>pasión</span> y compromiso</h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
          {timeline.map((item, i) => (
            <motion.div key={item.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative pl-12 pb-10 last:pb-0">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-secondary" />
              </div>
              <span className="font-display text-2xl font-bold text-secondary">{item.year}</span>
              <p className="text-muted-foreground font-body text-sm mt-1 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-muted/30">
      <div className="container">
        <p className="section-label">Nuestros Valores</p>
        <h2 className="section-title">Lo que nos <span>define</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyValues.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card p-8 border border-border hover:border-secondary/30 transition-colors">
              <v.icon size={28} className="text-secondary mb-4" />
              <h3 className="font-display text-xl font-bold text-primary mb-2">{v.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container max-w-2xl text-center">
        <p className="section-label">¿Listo para empezar?</p>
        <h2 className="section-title">Cotiza tu proyecto <span>sin compromiso</span></h2>
        <ContactForm context="Información general" variant="general" />
      </div>
    </section>
  </PageLayout>
);

export default Nosotros;
