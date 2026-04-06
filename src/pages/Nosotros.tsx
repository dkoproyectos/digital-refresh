import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { aboutHero, teamMembers, companyValues } from "@/lib/content/about";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Nosotros = () => (
  <PageLayout>
    <PageHero {...aboutHero} />

    {/* Equipo */}
    <section className="py-20 bg-background">
      <div className="container">
        <p className="section-label">Nuestro Equipo</p>
        <h2 className="section-title">Las personas detrás de <span>DKO</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border hover:border-secondary/30 transition-colors p-8 text-center group"
            >
              <Avatar className="w-24 h-24 mx-auto mb-5 ring-2 ring-secondary/20 group-hover:ring-secondary/50 transition-all">
                <AvatarImage src={member.image.src} alt={member.image.alt} />
                <AvatarFallback className="bg-secondary/10 text-secondary font-display text-xl">
                  {member.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-display text-lg font-bold text-foreground">{member.name}</h3>
              <p className="text-secondary font-body text-sm font-medium mt-1">{member.role}</p>
              <p className="text-muted-foreground font-body text-sm mt-3 leading-relaxed">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Valores */}
    <section className="py-20 bg-muted/30">
      <div className="container">
        <p className="section-label">Nuestros Valores</p>
        <h2 className="section-title">Lo que nos <span>define</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyValues.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card p-8 border border-border hover:border-secondary/30 transition-colors">
              <v.icon size={28} className="text-secondary mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{v.title}</h3>
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
