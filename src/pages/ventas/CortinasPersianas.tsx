import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import ventaImg from "@/assets/venta-cortinas.jpg";

const products = [
  { name: "Roller", desc: "Enrollables en screen, blackout y traslúcidas para ambientes modernos." },
  { name: "Blackout", desc: "Oscurecimiento total para dormitorios, salas de cine y oficinas." },
  { name: "Sheer Elegance", desc: "Doble tela con bandas alternas para controlar luz con elegancia." },
  { name: "Persianas de Madera", desc: "Calidez natural y control de privacidad con acabados premium." },
  { name: "Persianas de Aluminio", desc: "Durables y funcionales para espacios húmedos y comerciales." },
  { name: "Toldos Retráctiles", desc: "Protección solar exterior para terrazas, balcones y fachadas." },
];

const CortinasPersianas = () => (
  <PageLayout>
    <PageHero
      label="Ventas · Cortinas y Persianas"
      title="Cortinas, Persianas y"
      highlight="Toldos"
      description="Control de luz, privacidad y diseño para cada espacio de tu hogar u oficina."
    />

    <section className="relative h-[35vh] min-h-[260px]">
      <img src={ventaImg} alt="Cortinas y persianas" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/30" />
    </section>

    <section className="py-20 bg-background">
      <div className="container">
        <p className="section-label">Nuestros Productos</p>
        <h2 className="section-title">Catálogo de <span>cortinas y persianas</span></h2>
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
      <div className="container max-w-2xl text-center">
        <p className="section-label">Cotiza ahora</p>
        <h2 className="section-title">Viste tus <span>ventanas</span></h2>
        <ContactForm context="Cortinas, Persianas y Toldos" />
      </div>
    </section>
  </PageLayout>
);

export default CortinasPersianas;
