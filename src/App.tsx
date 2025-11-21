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
import TratamentCarii from "./pages/TratamentCarii";
import Tarife from "./pages/Tarife";
import Despre from "./pages/Despre";
import Contact from "./pages/Contact";
import PoliticaCookies from "./pages/PoliticaCookies";
import TermeniConditii from "./pages/TermeniConditii";
import PoliticaConfidentialitate from "./pages/PoliticaConfidentialitate";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import AlbireDentara from "./pages/blog/AlbireDentara";
import AparatDentarAdulti from "./pages/blog/AparatDentarAdulti";
import PrimaVizitaCopil from "./pages/blog/PrimaVizitaCopil";
import MaseauaMinte from "./pages/blog/MaseauaMinte";
import UrgenteDentare from "./pages/blog/UrgenteDentare";
import Parodontoza from "./pages/blog/Parodontoza";

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
          <Route path="/servicii/tratament-carii" element={<TratamentCarii />} />
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
          <Route path="/politica-cookies" element={<PoliticaCookies />} />
          <Route path="/termeni-conditii" element={<TermeniConditii />} />
          <Route path="/politica-confidentialitate" element={<PoliticaConfidentialitate />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/albire-dentara-piatra-neamt" element={<AlbireDentara />} />
          <Route path="/blog/aparat-dentar-adulti-piatra-neamt" element={<AparatDentarAdulti />} />
          <Route path="/blog/prima-vizita-copil-dentist" element={<PrimaVizitaCopil />} />
          <Route path="/blog/maseaua-de-minte" element={<MaseauaMinte />} />
          <Route path="/blog/urgente-dentare-dinte-rupt" element={<UrgenteDentare />} />
          <Route path="/blog/parodontoza-tratament" element={<Parodontoza />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
