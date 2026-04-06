import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { contactInfo, getWhatsAppUrl } from "@/lib/config";
import { ctaContent, ctaProjectTypes } from "@/lib/content/home";
import ContactForm from "@/components/ContactForm";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cotizar" className="py-24 bg-primary relative overflow-hidden" ref={ref}>
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary" />
      <div className="absolute right-[-40px] bottom-[-40px] font-display text-[200px] font-bold text-white/[0.04] pointer-events-none select-none hidden lg:block">
        DKO
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] font-body font-semibold uppercase tracking-[5px] text-secondary mb-4">
              {ctaContent.label}
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {ctaContent.title}{" "}
              <em className="text-secondary italic">{ctaContent.titleHighlight}</em>
            </h2>
            <p className="text-white/70 font-body leading-relaxed mb-10 max-w-md">
              {ctaContent.description}
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-secondary/20 flex items-center justify-center">
                  <Phone size={18} className="text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-white/60 font-body uppercase tracking-wider">Teléfono</p>
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="text-sm text-white/90 font-body hover:text-secondary transition-colors">{contactInfo.phone}</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-secondary/20 flex items-center justify-center">
                  <Mail size={18} className="text-secondary" />
                </div>
                <div>
                   <p className="text-xs text-white/60 font-body uppercase tracking-wider">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-sm text-white/90 font-body hover:text-secondary transition-colors">{contactInfo.email}</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-secondary/20 flex items-center justify-center">
                  <MapPin size={18} className="text-secondary" />
                </div>
                <div>
                   <p className="text-xs text-white/60 font-body uppercase tracking-wider">Ubicación</p>
                  <p className="text-sm text-white/90 font-body">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card/5 backdrop-blur border border-card/10 rounded p-8"
          >
            <ContactForm
              context="Cotización desde Home"
              variant="general"
              projectTypes={ctaProjectTypes}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
