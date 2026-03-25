import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import ventaImg from "@/assets/venta-mobiliario.jpg";

const products = [
  { name: "Salas de Exterior", desc: "Conjuntos de sofás y sillones en ratán sintético, aluminio y teca." },
  { name: "Comedores de Terraza", desc: "Mesas y sillas resistentes a la intemperie con diseño contemporáneo." },
  { name: "Camastros y Daybeds", desc: "Ideales para piscina, terraza y zonas de descanso al aire libre." },
  { name: "Sombrillas y Parasoles", desc: "Protección solar con estilo en múltiples tamaños y colores." },
  { name: "Macetas y Jardineras", desc: "Fibra de vidrio, cemento y cerámica en diseños modernos." },
  { name: "Accesorios", desc: "Cojines, iluminación exterior y elementos decorativos weather-proof." },
];

const MobiliarioExterior = () => (
  <PageLayout>
    <PageHero
      label="Ventas · Mobiliario Exterior"
      title="Mobiliario"
      highlight="Exterior"
      description="Muebles resistentes y con diseño para terrazas, balcones, jardines y zonas sociales."
    />

    <section className="relative h-[35vh] min-h-[260px]">
      <img src={ventaImg} alt="Mobiliario exterior" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/30" />
    </section>

    <section className="py-20 bg-background">
      <div className="container">
        <p className="section-label">Nuestros Productos</p>
        <h2 className="section-title">Catálogo de <span>mobiliario</span></h2>
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
        <h2 className="section-title">Equipa tu <span>exterior</span></h2>
        <ContactForm context="Mobiliario Exterior" />
      </div>
    </section>
  </PageLayout>
);

export default MobiliarioExterior;
