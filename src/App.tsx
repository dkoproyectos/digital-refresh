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
const RentasCortas = lazy(() => import("./pages/servicios/RentasCortas"));
const Ventas = lazy(() => import("./pages/Ventas"));
const Recubrimiento = lazy(() => import("./pages/ventas/Recubrimiento"));
const PeliculasSolares = lazy(() => import("./pages/ventas/PeliculasSolares"));
const CortinasPersianas = lazy(() => import("./pages/ventas/CortinasPersianas"));
const MobiliarioExterior = lazy(() => import("./pages/ventas/MobiliarioExterior"));
const Proyectos = lazy(() => import("./pages/Proyectos"));
const Contacto = lazy(() => import("./pages/Contacto"));

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
            <Route path="/servicios/rentas-cortas" element={<RentasCortas />} />
            <Route path="/ventas" element={<Ventas />} />
            <Route path="/ventas/recubrimiento" element={<Recubrimiento />} />
            <Route path="/ventas/peliculas-solares" element={<PeliculasSolares />} />
            <Route path="/ventas/cortinas-persianas" element={<CortinasPersianas />} />
            <Route path="/ventas/mobiliario-exterior" element={<MobiliarioExterior />} />
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
