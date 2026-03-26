/**
 * ============================================================
 * PRODUCT LANDING — Componente reutilizable para landings
 * de productos individuales (campañas / ads).
 * ============================================================
 * Estructura: Hero → Descripción → Beneficios → Proceso →
 *             Galería → FAQ → Formulario de cotización
 *
 * 🔌 Sanity: Cada producto será un documento _type == "product"
 *    con todos estos campos. Este componente recibe los datos
 *    ya resueltos.
 * ============================================================
 */

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export interface ProductLandingData {
  /** Hero */
  breadcrumb: string;
  title: string;
  highlight: string;
  description: string;
  heroImage?: { src: string; alt: string };

  /** Intro / descripción principal */
  introTitle: string;
  introHighlight: string;
  introText: string;
  introImage?: { src: string; alt: string };

  /** Lista de beneficios / características */
  benefits: string[];

  /** Proceso de compra/instalación */
  process: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];

  /** Galería de imágenes del producto */
  gallery: { src: string; alt: string }[];

  /** FAQ */
  faqs: { question: string; answer: string }[];

  /** Categoría padre para el link "volver" */
  parentCategory: {
    label: string;
    href: string;
  };

  /** Contexto del formulario para WhatsApp/CRM */
  formContext: string;

  /** Nombre del producto para el select del formulario */
  productName: string;
}

interface ProductLandingProps {
  data: ProductLandingData;
}

const ProductLanding = ({ data }: ProductLandingProps) => {
  const d = data;

  return (
    <PageLayout>
      <PageHero
        label={d.breadcrumb}
        title={d.title}
        highlight={d.highlight}
        description={d.description}
      />

      {/* Banner image */}
      {d.heroImage && (
        <section className="relative h-[45vh] min-h-[320px]">
          <img
            src={d.heroImage.src}
            alt={d.heroImage.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-primary/10" />
          {/* Back link */}
          <div className="absolute top-6 left-6">
            <Link
              to={d.parentCategory.href}
              className="inline-flex items-center gap-2 px-4 py-2 bg-card/90 backdrop-blur-sm rounded-sm text-sm font-body text-foreground hover:bg-card transition-colors"
            >
              ← {d.parentCategory.label}
            </Link>
          </div>
          {/* Big CTA on banner */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center">
            <a
              href="#cotizar-producto"
              className="btn-gold text-base px-12 py-4 tracking-[3px] shadow-2xl"
            >
              Cotizar Ahora
            </a>
          </div>
        </section>
      )}

      {/* Intro section */}
      <section className="py-20 bg-background">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">¿Qué es?</p>
            <h2 className="section-title">
              {d.introTitle} <span>{d.introHighlight}</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              {d.introText}
            </p>

            {/* Benefits */}
            {d.benefits.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {d.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-2">
                    <CheckCircle
                      size={16}
                      className="text-secondary flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm font-body text-foreground">
                      {b}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {d.introImage && (
            <div className="relative">
              <img
                src={d.introImage.src}
                alt={d.introImage.alt}
                className="w-full h-[400px] object-cover rounded-sm"
              />
              <div className="absolute -bottom-4 -left-4 w-full h-full border border-secondary/20 rounded-sm pointer-events-none" />
            </div>
          )}
        </div>
      </section>

      {/* Process */}
      {d.process.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container">
            <p className="section-label">¿Cómo funciona?</p>
            <h2 className="section-title">
              Proceso de <span>compra e instalación</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {d.process.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center">
                    <p.icon size={24} className="text-secondary" />
                  </div>
                  <span className="text-xs font-body text-secondary uppercase tracking-wider">
                    Paso {i + 1}
                  </span>
                  <h3 className="font-display text-xl font-bold text-primary mt-1 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">
                    {p.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {d.gallery.length > 0 && (
        <section className="py-20 bg-background">
          <div className="container">
            <p className="section-label">Galería</p>
            <h2 className="section-title">
              Inspírate con nuestros <span>trabajos</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {d.gallery.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group overflow-hidden rounded-sm cursor-pointer"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {d.faqs.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container max-w-2xl">
            <p className="section-label">Preguntas Frecuentes</p>
            <h2 className="section-title">
              Resolvemos tus <span>dudas</span>
            </h2>
            <div className="space-y-4">
              {d.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-card p-6 border border-border"
                >
                  <h3 className="font-display text-lg font-bold text-primary mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Form */}
      <section id="cotizar-producto" className="py-20 bg-background">
        <div className="container max-w-2xl text-center">
          <p className="section-label">Cotiza ahora</p>
          <h2 className="section-title">
            Solicita tu <span>cotización</span>
          </h2>
          <ContactForm
            context={d.formContext}
            variant="sales"
            productOptions={[d.productName]}
          />
        </div>
      </section>
    </PageLayout>
  );
};

export default ProductLanding;
