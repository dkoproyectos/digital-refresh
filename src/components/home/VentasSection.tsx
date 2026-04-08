import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { homeSaleCategories } from "@/lib/content/home";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const VentasSection = () => {
  const [activeId, setActiveId] = useState(homeSaleCategories[0].id);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const active = homeSaleCategories.find((c) => c.id === activeId) ?? homeSaleCategories[0];

  return (
    <section id="productos" className="py-16 md:py-20 bg-primary" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[4px] text-secondary mb-2">Catálogo de Productos</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-4">
            Nuestras líneas de <span className="text-secondary">productos</span>
          </h2>
          <p className="text-primary-foreground/80 font-body text-base">
            Productos de alta calidad para complementar y transformar tus espacios.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <Select value={activeId} onValueChange={setActiveId}>
            <SelectTrigger className="w-full max-w-sm bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:border-secondary transition-colors text-sm font-semibold uppercase tracking-wider">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {homeSaleCategories.map((cat) => (
                <SelectItem key={cat.id} value={cat.id}>
                  {cat.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded overflow-hidden border border-primary-foreground/10"
        >
          <div className="relative h-72 lg:h-[480px] overflow-hidden">
            <img src={active.image.src} alt={active.image.alt} loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="inline-block px-3 py-1 rounded text-[10px] font-semibold uppercase tracking-wider bg-secondary text-secondary-foreground">
                {active.subtitle}
              </span>
            </div>
          </div>

          <div className="bg-card p-8 lg:p-12 flex flex-col justify-center">
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-3">{active.title}</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-8">{active.description}</p>
            <div className="mb-8">
              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-accent mb-4">Productos destacados</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {active.products.map((product) => (
                  product.href ? (
                    <Link
                      key={product.name}
                      to={product.href}
                      className="flex items-center gap-3 p-3 rounded border border-border bg-muted/30 hover:bg-secondary/10 hover:border-secondary/40 transition-colors group/prod"
                    >
                      <ShoppingBag size={14} className="text-accent shrink-0 group-hover/prod:text-secondary transition-colors" />
                      <span className="text-sm font-body text-foreground group-hover/prod:text-secondary transition-colors">{product.name}</span>
                    </Link>
                  ) : (
                    <div key={product.name} className="flex items-center gap-3 p-3 rounded border border-border bg-muted/30">
                      <ShoppingBag size={14} className="text-accent shrink-0" />
                      <span className="text-sm font-body text-foreground">{product.name}</span>
                    </div>
                  )
                ))}
              </div>
            </div>
            <Link to={active.href} className="btn-gold text-xs py-3 px-8 self-start">Ver Catálogo Completo</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VentasSection;
