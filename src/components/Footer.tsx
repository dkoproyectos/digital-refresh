import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    {/* Main footer */}
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h3 className="font-display text-3xl font-bold text-secondary mb-4">DKO</h3>
          <p className="text-primary-foreground/60 text-sm font-body leading-relaxed">
            Somos expertos en la gestión integral de proyectos de construcción, remodelación y diseño, con soluciones eficientes y resultados de alta calidad.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-secondary transition-colors">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-secondary transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-secondary transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Servicios */}
        <div>
          <h4 className="text-xs font-body font-semibold uppercase tracking-[3px] text-secondary mb-6">Servicios</h4>
          <div className="flex flex-col gap-3">
            <Link to="/servicios/diseno-premium" className="text-sm text-primary-foreground/50 hover:text-secondary transition-colors font-body">Diseño de Interior Premium</Link>
            <Link to="/servicios/hogar-vis" className="text-sm text-primary-foreground/50 hover:text-secondary transition-colors font-body">Tu Hogar VIS</Link>
            <Link to="/servicios/rentas-cortas" className="text-sm text-primary-foreground/50 hover:text-secondary transition-colors font-body">Acabados Rentas Cortas</Link>
          </div>
        </div>

        {/* Ventas */}
        <div>
          <h4 className="text-xs font-body font-semibold uppercase tracking-[3px] text-secondary mb-6">Ventas</h4>
          <div className="flex flex-col gap-3">
            <Link to="/ventas/cortinas-persianas" className="text-sm text-primary-foreground/50 hover:text-secondary transition-colors font-body">Cortinas y Persianas</Link>
            <Link to="/ventas/peliculas-solares" className="text-sm text-primary-foreground/50 hover:text-secondary transition-colors font-body">Películas Protección Solar</Link>
            <Link to="/ventas/recubrimiento" className="text-sm text-primary-foreground/50 hover:text-secondary transition-colors font-body">Recubrimiento Paredes</Link>
            <Link to="/ventas/mobiliario-exterior" className="text-sm text-primary-foreground/50 hover:text-secondary transition-colors font-body">Mobiliario Exterior</Link>
          </div>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-xs font-body font-semibold uppercase tracking-[3px] text-secondary mb-6">Contacto</h4>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-secondary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-primary-foreground/50 font-body">Av 9 norte No 18N 25, Oficina 201A, Cali, Colombia</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-secondary flex-shrink-0" />
              <a href="tel:+573138765825" className="text-sm text-primary-foreground/50 hover:text-secondary transition-colors font-body">+57 313 876 5825</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-secondary flex-shrink-0" />
              <a href="mailto:victor.florez@dkoproyectos.com.co" className="text-sm text-primary-foreground/50 hover:text-secondary transition-colors font-body">victor.florez@dkoproyectos.com.co</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-primary-foreground/10">
      <div className="container py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-primary-foreground/30 font-body">
          © 2026 DKO Proyectos. Todos los derechos reservados.
        </p>
        <p className="text-xs text-primary-foreground/30 font-body">
          Diseño de Interiores · Remodelación · Interiorismo en Cali
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
