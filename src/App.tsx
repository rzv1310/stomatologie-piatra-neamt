import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Servicii from "./pages/Servicii";
import ImplantDentar from "./pages/ImplantDentar";
import Profilaxie from "./pages/Profilaxie";
import EsteticaDentara from "./pages/EsteticaDentara";
import StomatologieGenerala from "./pages/StomatologieGenerala";
import Protetica from "./pages/Protetica";
import Chirurgie from "./pages/Chirurgie";
import Parodontologie from "./pages/Parodontologie";
import Radiologie from "./pages/Radiologie";
import Ortodontie from "./pages/Ortodontie";
import StomatologieCopii from "./pages/StomatologieCopii";
import Urgente from "./pages/Urgente";
import Tarife from "./pages/Tarife";
import Despre from "./pages/Despre";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicii" element={<Servicii />} />
          <Route path="/servicii/implant-dentar" element={<ImplantDentar />} />
          <Route path="/servicii/profilaxie" element={<Profilaxie />} />
          <Route path="/servicii/estetica-dentara" element={<EsteticaDentara />} />
          <Route path="/servicii/endodontie-piatra-neamt" element={<StomatologieGenerala />} />
          <Route path="/servicii/protetica-piatra-neamt" element={<Protetica />} />
          <Route path="/servicii/ortodontie-piatra-neamt" element={<Ortodontie />} />
          <Route path="/servicii/stomatologie-copii-piatra-neamt" element={<StomatologieCopii />} />
          <Route path="/servicii/urgente" element={<Urgente />} />
          <Route path="/servicii/chirurgie-orala" element={<Chirurgie />} />
          <Route path="/servicii/parodontologie-piatra-neamt" element={<Parodontologie />} />
          <Route path="/servicii/radiologie-dentara-piatra-neamt" element={<Radiologie />} />
          <Route path="/tarife" element={<Tarife />} />
          <Route path="/despre" element={<Despre />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
