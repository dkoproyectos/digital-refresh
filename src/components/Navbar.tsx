import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/config";
import QuoteModal from "@/components/QuoteModal";

const services = [
  { label: "Diseño de Interior Premium", href: "/servicios/diseno-premium" },
  { label: "Tu Hogar VIS", href: "/servicios/hogar-vis" },
  { label: "Acabados para Rentas Cortas", href: "/servicios/rentas-cortas" },
];

const productos = [
  { label: "Piedra Flexible", href: "/productos/piedra-flexible" },
  { label: "Recubrimiento de Paredes", href: "/productos/recubrimiento" },
  { label: "Películas de Protección Solar", href: "/productos/peliculas-solares" },
  { label: "Cortinas, Persianas y Toldos", href: "/productos/cortinas-persianas" },
  { label: "Mobiliario Exterior", href: "/productos/mobiliario-exterior" },
];

const allOptions = [
  "── Servicios ──",
  ...services.map((s) => s.label),
  "── Productos ──",
  ...productos.map((v) => v.label),
];

/** Sub-opciones por categoría seleccionada */
const subOptionsMap: Record<string, string[]> = {
  "Tu Hogar VIS": ["Estilo Moderno", "Estilo Minimalista", "Estilo Industrial"],
  "Piedra Flexible": ["Piedra flexible interior", "Piedra flexible exterior", "Piedra flexible fachadas", "Piedra flexible muebles"],
  "Cortinas, Persianas y Toldos": ["Cortinas Roller", "Cortinas Blackout", "Sheer Elegance", "Persianas de Madera", "Persianas de Aluminio", "Toldos"],
  "Películas de Protección Solar": ["Control Solar", "Privacidad", "Seguridad", "Decorativa"],
  "Recubrimiento de Paredes": ["Paneles 3D", "Papel Tapiz", "Piedra Decorativa", "Enchapes Cerámicos", "Madera Decorativa", "Microcemento"],
  "Mobiliario Exterior": ["Salas de Exterior", "Comedores de Terraza", "Camastros", "Sombrillas", "Macetas", "Accesorios"],
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-gold/10">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold text-secondary tracking-wide">{siteConfig.shortName}</span>
          <span className="text-primary-foreground/80 text-xs font-body uppercase tracking-[3px] hidden sm:block">Proyectos</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <NavItem href="/" label="Home" />
          <NavItem href="/nosotros" label="Nosotros" />
          <DropdownNav label="Servicios" items={services} open={openDropdown === "servicios"} onToggle={() => setOpenDropdown(openDropdown === "servicios" ? null : "servicios")} onClose={() => setOpenDropdown(null)} />
          <DropdownNav label="Productos" items={productos} open={openDropdown === "productos"} onToggle={() => setOpenDropdown(openDropdown === "productos" ? null : "productos")} onClose={() => setOpenDropdown(null)} />
          <NavItem href="/proyectos" label="Proyectos" />
          <NavItem href="/contacto" label="Contacto" />
        </div>

        <button onClick={() => setQuoteOpen(true)} className="hidden lg:inline-flex btn-gold text-xs py-2 px-6 glow-pulse">
          Cotiza Gratis
        </button>

        <button className="lg:hidden text-primary-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-primary border-t border-gold/10 overflow-hidden">
            <div className="container py-6 flex flex-col gap-4">
              <MobileLink href="/" label="Home" onClick={() => setMobileOpen(false)} />
              <MobileLink href="/nosotros" label="Nosotros" onClick={() => setMobileOpen(false)} />
              <MobileDropdown label="Servicios" items={services} onItemClick={() => setMobileOpen(false)} />
              <MobileDropdown label="Productos" items={productos} onItemClick={() => setMobileOpen(false)} />
              <MobileLink href="/proyectos" label="Proyectos" onClick={() => setMobileOpen(false)} />
              <MobileLink href="/contacto" label="Contacto" onClick={() => setMobileOpen(false)} />
              <button onClick={() => { setMobileOpen(false); setQuoteOpen(true); }} className="btn-gold text-xs py-3 text-center mt-2">
                Cotiza Gratis
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <QuoteModal
        open={quoteOpen}
        onOpenChange={setQuoteOpen}
        context="Cotización general"
        productOptions={allOptions}
        subOptionsMap={subOptionsMap}
      />
    </nav>
  );
};

const NavItem = ({ href, label }: { href: string; label: string }) => (
  <Link to={href} className="nav-link-animated text-primary-foreground/90 hover:text-secondary transition-colors text-sm font-body font-medium uppercase tracking-wider">{label}</Link>
);

const DropdownNav = ({ label, items, open, onToggle, onClose }: { label: string; items: { label: string; href: string }[]; open: boolean; onToggle: () => void; onClose: () => void }) => (
  <div className="relative" onMouseEnter={onToggle} onMouseLeave={onClose}>
    <button className="flex items-center gap-1 text-primary-foreground/90 hover:text-secondary transition-colors text-sm font-body font-medium uppercase tracking-wider">
      {label} <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
    </button>
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }} transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }} className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded shadow-xl overflow-hidden">
          {items.map((item, i) => (
            <Link key={item.href} to={item.href} onClick={onClose} className="block px-5 py-3 text-sm font-body text-foreground hover:bg-muted hover:text-accent hover:pl-7 transition-all duration-300 border-b border-border last:border-0">{item.label}</Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const MobileLink = ({ href, label, onClick }: { href: string; label: string; onClick: () => void }) => (
  <Link to={href} onClick={onClick} className="text-primary-foreground/90 hover:text-secondary text-base font-body font-medium uppercase tracking-wider py-1">{label}</Link>
);

const MobileDropdown = ({ label, items, onItemClick }: { label: string; items: { label: string; href: string }[]; onItemClick: () => void }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="flex items-center gap-2 text-primary-foreground/90 hover:text-secondary text-base font-body font-medium uppercase tracking-wider py-1 w-full">
        {label} <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pl-4 mt-2 flex flex-col gap-2 border-l-2 border-gold/30">
          {items.map((item) => (
            <Link key={item.href} to={item.href} onClick={onItemClick} className="text-primary-foreground/80 hover:text-secondary text-sm font-body py-1">{item.label}</Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
