import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import ventaImg from "@/assets/venta-recubrimiento.jpg";
import project1 from "@/assets/project-1.jpg";
import project3 from "@/assets/project-3.jpg";

const products = [
  { name: "Paneles 3D", desc: "Relieve tridimensional para paredes interiores con diseños exclusivos." },
  { name: "Papel Tapiz", desc: "Amplia variedad de texturas, patrones y colores para todos los estilos." },
  { name: "Piedra Decorativa", desc: "Revestimientos en piedra natural y sintética para interiores y exteriores." },
  { name: "Enchapes Cerámicos", desc: "Porcelanatos y cerámicas de última generación para pisos y paredes." },
  { name: "Madera Decorativa", desc: "Paneles y láminas en madera natural y laminada." },
  { name: "Microcemento", desc: "Acabado continuo moderno para pisos, paredes y superficies." },
];

const faqs = [
  { q: "¿Hacen instalación?", a: "Sí, nuestro equipo se encarga de la venta e instalación completa." },
  { q: "¿Tienen muestras disponibles?", a: "Sí, podemos llevar muestras a tu domicilio o visitarnos en showroom." },
  { q: "¿Cuánto tarda la instalación?", a: "Depende del área, pero la mayoría de proyectos se completan en 1 a 3 días." },
];

const Recubrimiento = () => (
  <PageLayout>
    <PageHero
      label="Ventas · Recubrimiento"
      title="Recubrimiento de"
      highlight="Paredes"
      description="Soluciones para exterior e interior que transforman cualquier muro en una obra de arte."
    />

    <section className="relative h-[35vh] min-h-[260px]">
      <img src={ventaImg} alt="Recubrimiento de paredes" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/30" />
    </section>

    <section className="py-20 bg-background">
      <div className="container">
        <p className="section-label">Nuestros Productos</p>
        <h2 className="section-title">Catálogo de <span>recubrimientos</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card p-6 border border-border hover:border-secondary/30 transition-colors"
            >
              <CheckCircle size={20} className="text-secondary mb-3" />
              <h3 className="font-display text-lg font-bold text-primary mb-2">{p.name}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-muted/30">
      <div className="container">
        <p className="section-label">Proyectos realizados</p>
        <h2 className="section-title">Inspiración en <span>recubrimientos</span></h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[ventaImg, project1, project3].map((img, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="overflow-hidden rounded-sm">
              <img src={img} alt={`Recubrimiento proyecto ${i + 1}`} className="w-full h-[260px] object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container max-w-2xl">
        <p className="section-label">Preguntas Frecuentes</p>
        <h2 className="section-title">Resolvemos tus <span>dudas</span></h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-card p-6 border border-border">
              <h3 className="font-display text-lg font-bold text-primary mb-2">{faq.q}</h3>
              <p className="text-muted-foreground font-body text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-muted/30">
      <div className="container max-w-2xl text-center">
        <p className="section-label">Cotiza ahora</p>
        <h2 className="section-title">Transforma tus <span>paredes</span></h2>
        <ContactForm context="Recubrimiento de Paredes" />
      </div>
    </section>
  </PageLayout>
);

export default Recubrimiento;
