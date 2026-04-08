import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const Nosotros = lazy(() => import("./pages/Nosotros"));
const Servicios = lazy(() => import("./pages/Servicios"));
const DisenoPremium = lazy(() => import("./pages/servicios/DisenoPremium"));
const HogarVis = lazy(() => import("./pages/servicios/HogarVis"));
const HogarVisStyle = lazy(() => import("./pages/servicios/hogar-vis/[slug]"));
const RentasCortas = lazy(() => import("./pages/servicios/RentasCortas"));
const Productos = lazy(() => import("./pages/Ventas"));
const PiedraFlexible = lazy(() => import("./pages/ventas/PiedraFlexible"));
const Recubrimiento = lazy(() => import("./pages/ventas/Recubrimiento"));
const PeliculasSolares = lazy(() => import("./pages/ventas/PeliculasSolares"));
const CortinasPersianas = lazy(() => import("./pages/ventas/CortinasPersianas"));
const MobiliarioExterior = lazy(() => import("./pages/ventas/MobiliarioExterior"));
const Proyectos = lazy(() => import("./pages/Proyectos"));
const Contacto = lazy(() => import("./pages/Contacto"));

// Product landing pages
const PiedraFlexibleProduct = lazy(() => import("./pages/ventas/piedra-flexible/[slug]"));
const RecubrimientoProduct = lazy(() => import("./pages/ventas/recubrimiento/[slug]"));
const RecubrimientoSubProduct = lazy(() => import("./pages/ventas/recubrimiento/[slug]/[subSlug]"));
const PeliculasProduct = lazy(() => import("./pages/ventas/peliculas-solares/[slug]"));
const CortinasProduct = lazy(() => import("./pages/ventas/cortinas-persianas/[slug]"));
const MobiliarioProduct = lazy(() => import("./pages/ventas/mobiliario-exterior/[slug]"));
const MobiliarioSubProduct = lazy(() => import("./pages/ventas/mobiliario-exterior/[slug]/[subSlug]"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/servicios/diseno-premium" element={<DisenoPremium />} />
            <Route path="/servicios/hogar-vis" element={<HogarVis />} />
            <Route path="/servicios/hogar-vis/:slug" element={<HogarVisStyle />} />
            <Route path="/servicios/rentas-cortas" element={<RentasCortas />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/productos/piedra-flexible" element={<PiedraFlexible />} />
            <Route path="/productos/piedra-flexible/:slug" element={<PiedraFlexibleProduct />} />
            <Route path="/productos/recubrimiento" element={<Recubrimiento />} />
            <Route path="/productos/recubrimiento/:slug" element={<RecubrimientoProduct />} />
            <Route path="/productos/recubrimiento/:slug/:subSlug" element={<RecubrimientoSubProduct />} />
            <Route path="/productos/peliculas-solares" element={<PeliculasSolares />} />
            <Route path="/productos/peliculas-solares/:slug" element={<PeliculasProduct />} />
            <Route path="/productos/cortinas-persianas" element={<CortinasPersianas />} />
            <Route path="/productos/cortinas-persianas/:slug" element={<CortinasProduct />} />
            <Route path="/productos/mobiliario-exterior" element={<MobiliarioExterior />} />
            <Route path="/productos/mobiliario-exterior/:slug" element={<MobiliarioProduct />} />
            <Route path="/productos/mobiliario-exterior/:slug/:subSlug" element={<MobiliarioSubProduct />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
