import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const info = [
  { icon: MapPin, label: "Dirección", value: "Av 9 norte No 18N 25, Oficina 201A, Cali, Colombia" },
  { icon: Phone, label: "Teléfonos", value: "+57 313 876 5825", href: "tel:+573138765825" },
  { icon: Mail, label: "Correo", value: "victor.florez@dkoproyectos.com.co", href: "mailto:victor.florez@dkoproyectos.com.co" },
  { icon: Clock, label: "Horario", value: "Lunes a Viernes: 8:00 AM - 6:00 PM · Sábados: 9:00 AM - 1:00 PM" },
];

const socials = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

const Contacto = () => (
  <PageLayout>
    <PageHero
      label="Contacto"
      title="Hablemos de tu"
      highlight="proyecto"
      description="Estamos listos para ayudarte. Contáctanos y recibe asesoría personalizada sin compromiso."
    />

    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <p className="section-label">Información de Contacto</p>
            <h2 className="section-title">Encuéntranos en <span>Cali</span></h2>

            <div className="space-y-6 mb-10">
              {info.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
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

            {/* Social */}
            <div>
              <p className="text-xs font-body uppercase tracking-wider text-muted-foreground mb-3">Redes Sociales</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground/60 hover:text-secondary hover:bg-primary/80 transition-colors"
                    aria-label={s.label}
                  >
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="mt-10 rounded-sm overflow-hidden border border-border h-[240px]">
              <iframe
                title="DKO Proyectos ubicación"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.6!2d-76.536!3d3.455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMjcnMTguMCJOIDc2wrAzMicxMC4wIlc!5e0!3m2!1ses!2sco!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <p className="section-label">Escríbenos</p>
            <h2 className="section-title">Cotiza <span>sin compromiso</span></h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Contacto;
