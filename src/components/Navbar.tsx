import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppUrl, siteConfig } from "@/lib/config";

const services = [
  { label: "Diseño de Interior Premium", href: "/servicios/diseno-premium" },
  { label: "Tu Hogar VIS", href: "/servicios/hogar-vis" },
  { label: "Acabados para Rentas Cortas", href: "/servicios/rentas-cortas" },
];

const ventas = [
  { label: "Recubrimiento de Paredes", href: "/ventas/recubrimiento" },
  { label: "Películas de Protección Solar", href: "/ventas/peliculas-solares" },
  { label: "Cortinas, Persianas y Toldos", href: "/ventas/cortinas-persianas" },
  { label: "Mobiliario Exterior", href: "/ventas/mobiliario-exterior" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-gold/10">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold text-secondary tracking-wide">{siteConfig.shortName}</span>
          <span className="text-primary-foreground/60 text-xs font-body uppercase tracking-[3px] hidden sm:block">Proyectos</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <NavItem href="/" label="Home" />
          <NavItem href="/nosotros" label="Nosotros" />
          <DropdownNav label="Servicios" items={services} open={openDropdown === "servicios"} onToggle={() => setOpenDropdown(openDropdown === "servicios" ? null : "servicios")} onClose={() => setOpenDropdown(null)} />
          <DropdownNav label="Ventas" items={ventas} open={openDropdown === "ventas"} onToggle={() => setOpenDropdown(openDropdown === "ventas" ? null : "ventas")} onClose={() => setOpenDropdown(null)} />
          <NavItem href="/proyectos" label="Proyectos" />
          <NavItem href="/contacto" label="Contacto" />
        </div>

        <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hidden lg:inline-flex btn-gold text-xs py-2 px-6">
          Cotiza Gratis
        </a>

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
              <MobileDropdown label="Ventas" items={ventas} onItemClick={() => setMobileOpen(false)} />
              <MobileLink href="/proyectos" label="Proyectos" onClick={() => setMobileOpen(false)} />
              <MobileLink href="/contacto" label="Contacto" onClick={() => setMobileOpen(false)} />
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn-gold text-xs py-3 text-center mt-2">
                Cotiza Gratis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavItem = ({ href, label }: { href: string; label: string }) => (
  <Link to={href} className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm font-body font-medium uppercase tracking-wider">{label}</Link>
);

const DropdownNav = ({ label, items, open, onToggle, onClose }: { label: string; items: { label: string; href: string }[]; open: boolean; onToggle: () => void; onClose: () => void }) => (
  <div className="relative" onMouseEnter={onToggle} onMouseLeave={onClose}>
    <button className="flex items-center gap-1 text-primary-foreground/70 hover:text-secondary transition-colors text-sm font-body font-medium uppercase tracking-wider">
      {label} <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
    </button>
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded shadow-lg overflow-hidden">
          {items.map((item) => (
            <Link key={item.href} to={item.href} onClick={onClose} className="block px-5 py-3 text-sm font-body text-foreground hover:bg-muted hover:text-accent transition-colors border-b border-border last:border-0">{item.label}</Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const MobileLink = ({ href, label, onClick }: { href: string; label: string; onClick: () => void }) => (
  <Link to={href} onClick={onClick} className="text-primary-foreground/80 hover:text-secondary text-base font-body font-medium uppercase tracking-wider py-1">{label}</Link>
);

const MobileDropdown = ({ label, items, onItemClick }: { label: string; items: { label: string; href: string }[]; onItemClick: () => void }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary text-base font-body font-medium uppercase tracking-wider py-1 w-full">
        {label} <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pl-4 mt-2 flex flex-col gap-2 border-l-2 border-gold/30">
          {items.map((item) => (
            <Link key={item.href} to={item.href} onClick={onItemClick} className="text-primary-foreground/60 hover:text-secondary text-sm font-body py-1">{item.label}</Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
