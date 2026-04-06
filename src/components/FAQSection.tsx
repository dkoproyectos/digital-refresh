import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
  highlight?: string;
}

const FAQSection = ({
  faqs,
  title = "Resolvemos tus",
  highlight = "dudas",
}: FAQSectionProps) => {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
          {/* Left: Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28"
          >
            <p className="section-label">Preguntas Frecuentes</p>
            <h2 className="section-title text-left">
              {title} <span>{highlight}</span>
            </h2>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mt-4 max-w-sm">
              ¿Tienes otra pregunta? No dudes en contactarnos, estaremos encantados de ayudarte.
            </p>
          </motion.div>

          {/* Right: Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${i}`}
                  className="border-b border-border/60 py-1"
                >
                  <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground hover:text-accent hover:no-underline py-5 gap-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-body text-sm leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
