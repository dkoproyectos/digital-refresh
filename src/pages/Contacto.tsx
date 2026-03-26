import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { contactHero } from "@/lib/content/contact";
import { contactInfo, socialLinks } from "@/lib/config";

const info = [
  { icon: MapPin, label: "Dirección", value: contactInfo.address },
  { icon: Phone, label: "Teléfonos", value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Correo", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: Clock, label: "Horario", value: contactInfo.schedule },
];

const socials = [
  { icon: Facebook, href: socialLinks.facebook, label: "Facebook" },
  { icon: Instagram, href: socialLinks.instagram, label: "Instagram" },
  { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
];

const Contacto = () => (
  <PageLayout>
    <PageHero {...contactHero} />

    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="section-label">Información de Contacto</p>
            <h2 className="section-title">Encuéntranos en <span>Cali</span></h2>

            <div className="space-y-6 mb-10">
              {info.map((item, i) => (
                <motion.div key={item.label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4">
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-secondary/10 flex items-center justify-center">
                    <item.icon size={18} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-body uppercase tracking-wider text-muted-foreground mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-body text-foreground hover:text-secondary transition-colors">{item.value}</a>
                    ) : (
                      <p className="font-body text-foreground text-sm leading-relaxed">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <p className="text-xs font-body uppercase tracking-wider text-muted-foreground mb-3">Redes Sociales</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground/60 hover:text-secondary hover:bg-primary/80 transition-colors" aria-label={s.label}>
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-sm overflow-hidden border border-border h-[240px]">
              <iframe title="DKO Proyectos ubicación" src={contactInfo.mapEmbedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>

          <div>
            <p className="section-label">Escríbenos</p>
            <h2 className="section-title">Cotiza <span>sin compromiso</span></h2>
            <ContactForm variant="general" />
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Contacto;
