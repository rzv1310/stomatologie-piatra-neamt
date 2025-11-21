import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Clock, Award } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import heroImage from "@/assets/service-implant.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ImplantDentar = () => {
  const benefits = [
    "Dinți ficși în 24-48h cu încărcare imediată",
    "Tehnologie digitală avansată pentru precizie maximă",
    "Laborator propriu pentru rapiditate și calitate",
    "Reabilitări complete: All-on-4, All-on-6",
    "Zero durere, zero stres",
    "Soluții permanente, nu reparații temporare"
  ];

  const steps = [
    {
      title: "Consultația și planificarea",
      description: "Evaluare completă cu radiografie 3D (CBCT) și plan de tratament personalizat"
    },
    {
      title: "Inserarea implantului",
      description: "Procedură precisă cu tehnologie digitală, în condiții sterile și cu anestezie modernă"
    },
    {
      title: "Încărcare imediată (opțional)",
      description: "Pentru majoritatea cazurilor, poți primi dinți provizorii în aceeași zi"
    },
    {
      title: "Lucrarea finală",
      description: "Coroane sau lucrări pe implanturi realizate în laboratorul propriu, cu materiale premium"
    }
  ];

  const faqs = [
    {
      question: "Cât durează procedura de implant dentar?",
      answer: "Inserarea unui implant durează aproximativ 30-60 de minute. În multe cazuri, oferim încărcare imediată, astfel încât poți pleca cu dinți provizorii în aceeași zi. Lucrarea finală este montată după perioada de vindecare (2-6 luni), dar în acest timp ai dinți funcționali."
    },
    {
      question: "Este dureroasă procedura?",
      answer: "Nu! Folosim cei mai buni anestezici și tehnici moderne care fac procedura complet nedureroasă. Majoritatea pacienților raportează un disconfort minim după procedură, comparabil cu o extracție simplă."
    },
    {
      question: "Cât costă un implant dentar la Medstom?",
      answer: "Costul variază în funcție de complexitatea cazului și de tipul lucrării finale. Oferim consultație gratuită cu plan de tratament detaliat și cost total transparent. Avem și opțiuni de plată în rate."
    },
    {
      question: "Sunt un candidat bun pentru implant dentar?",
      answer: "Majoritatea persoanelor care au pierdut unul sau mai mulți dinți sunt candidați buni. În cazurile cu deficit osos, oferim soluții de augmentare osoasă (adiție de os, sinus lift). Vom evalua cazul tău în detaliu la consultație."
    },
    {
      question: "Ce garanție oferă implanturile?",
      answer: "Implanturile dentare de calitate au o rată de succes de peste 95% și pot dura toată viața cu îngrijire corespunzătoare. Oferim garanție pentru implanturile și lucrările realizate, cu detalii comunicate la consultație."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Breadcrumbs
        items={[
          { label: "Stomatologie Piatra Neamț", href: "/" },
          { label: "Servicii", href: "/servicii" },
          { label: "Implant Dentar" }
        ]}
      />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Implant dentar în Piatra Neamț
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white">
              Dinți ficși în 24h - Tehnologie digitală avansată pentru rezultate perfecte și durabile
            </p>
            <div className="flex justify-center">
              <a href="tel:+40333630005">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Sună pentru consultație gratuită
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Gata să îți transformi zâmbetul?
            </h2>
            <p className="text-xl mb-8 text-white">
              Programează o consultație gratuită și află exact de ce ai nevoie. Cost transparent, zero surprize.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Programare online
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+40333630005">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-accent">
                  0333 630 005
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ImplantDentar;
