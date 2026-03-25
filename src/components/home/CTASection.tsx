import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    celular: "",
    tipo: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola, soy ${formData.nombre}. ${formData.mensaje} (Tipo: ${formData.tipo}, Tel: ${formData.celular})`;
    window.open(`https://wa.me/573138765825?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="cotizar" className="py-24 bg-primary relative overflow-hidden" ref={ref}>
      {/* Decorative */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary" />
      <div className="absolute right-[-40px] bottom-[-40px] font-display text-[200px] font-bold text-card/[0.02] pointer-events-none select-none hidden lg:block">
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
              Cotiza Ahora
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-card leading-tight mb-6">
              ¿Listo para transformar{" "}
              <em className="text-secondary italic">tu espacio?</em>
            </h2>
            <p className="text-card/60 font-body leading-relaxed mb-10 max-w-md">
              Completa el formulario y uno de nuestros expertos se pondrá en contacto contigo para ofrecerte una cotización personalizada.
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-secondary/20 flex items-center justify-center">
                  <Phone size={18} className="text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-card/40 font-body uppercase tracking-wider">Teléfono</p>
                  <a href="tel:+573138765825" className="text-sm text-card/80 font-body hover:text-secondary transition-colors">+57 313 876 5825</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-secondary/20 flex items-center justify-center">
                  <Mail size={18} className="text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-card/40 font-body uppercase tracking-wider">Email</p>
                  <a href="mailto:victor.florez@dkoproyectos.com.co" className="text-sm text-card/80 font-body hover:text-secondary transition-colors">victor.florez@dkoproyectos.com.co</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-secondary/20 flex items-center justify-center">
                  <MapPin size={18} className="text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-card/40 font-body uppercase tracking-wider">Ubicación</p>
                  <p className="text-sm text-card/80 font-body">Av 9 norte No 18N 25, Oficina 201A, Cali</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card/5 backdrop-blur border border-card/10 rounded p-8 flex flex-col gap-5"
          >
            <input
              type="text"
              required
              placeholder="Nombre completo *"
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              className="w-full bg-card/10 border border-card/10 rounded px-4 py-3 text-sm text-card font-body placeholder:text-card/30 focus:outline-none focus:border-secondary transition-colors"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="email"
                required
                placeholder="Email *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-card/10 border border-card/10 rounded px-4 py-3 text-sm text-card font-body placeholder:text-card/30 focus:outline-none focus:border-secondary transition-colors"
              />
              <input
                type="tel"
                required
                placeholder="Celular *"
                value={formData.celular}
                onChange={(e) => setFormData({ ...formData, celular: e.target.value })}
                className="w-full bg-card/10 border border-card/10 rounded px-4 py-3 text-sm text-card font-body placeholder:text-card/30 focus:outline-none focus:border-secondary transition-colors"
              />
            </div>
            <select
              required
              value={formData.tipo}
              onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
              className="w-full bg-card/10 border border-card/10 rounded px-4 py-3 text-sm text-card font-body focus:outline-none focus:border-secondary transition-colors appearance-none"
            >
              <option value="" className="text-foreground">Tipo de proyecto *</option>
              <option value="Diseño Interior Premium" className="text-foreground">Diseño Interior Premium</option>
              <option value="Remodelación VIS" className="text-foreground">Remodelación VIS</option>
              <option value="Rentas Cortas / Airbnb" className="text-foreground">Rentas Cortas / Airbnb</option>
              <option value="Cortinas y Persianas" className="text-foreground">Cortinas y Persianas</option>
              <option value="Películas Solares" className="text-foreground">Películas Solares</option>
              <option value="Mobiliario Exterior" className="text-foreground">Mobiliario Exterior</option>
              <option value="Otro" className="text-foreground">Otro</option>
            </select>
            <textarea
              required
              rows={4}
              placeholder="Cuéntanos sobre tu proyecto *"
              value={formData.mensaje}
              onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              className="w-full bg-card/10 border border-card/10 rounded px-4 py-3 text-sm text-card font-body placeholder:text-card/30 focus:outline-none focus:border-secondary transition-colors resize-none"
            />
            <button type="submit" className="btn-gold w-full py-4 mt-2">
              Enviar Cotización
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
