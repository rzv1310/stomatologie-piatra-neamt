import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Servicii from "./pages/Servicii";
import ImplantDentar from "./pages/ImplantDentar";
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
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicii" element={<Servicii />} />
          <Route path="/servicii/implant-dentar" element={<ImplantDentar />} />
          <Route path="/servicii/stomatologie-generala" element={<ImplantDentar />} />
          <Route path="/servicii/estetica-dentara" element={<ImplantDentar />} />
          <Route path="/servicii/ortodontie" element={<ImplantDentar />} />
          <Route path="/servicii/stomatologie-copii" element={<ImplantDentar />} />
          <Route path="/servicii/urgente" element={<ImplantDentar />} />
          <Route path="/servicii/protetica" element={<ImplantDentar />} />
          <Route path="/servicii/chirurgie" element={<ImplantDentar />} />
          <Route path="/servicii/parodontologie" element={<ImplantDentar />} />
          <Route path="/servicii/profilaxie" element={<ImplantDentar />} />
          <Route path="/servicii/radiologie" element={<ImplantDentar />} />
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
