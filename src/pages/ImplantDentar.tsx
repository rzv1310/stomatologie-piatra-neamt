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
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const ImplantDentar = () => {
  const pricingSection = useIntersectionObserver();
  const whatIsSection = useIntersectionObserver();
  const whenRecommendedSection = useIntersectionObserver();
  const stepsSection = useIntersectionObserver();
  const whyChooseSection = useIntersectionObserver();
  const faqSection = useIntersectionObserver();

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

      <main className="flex-1">
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
            <div className="flex justify-center mt-[30px]">
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

      {/* Pricing Tables */}
      <section 
        ref={pricingSection.ref}
        className={`py-20 bg-section-alt transition-all duration-700 ${
          pricingSection.isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-heading">
              Prețuri Implant Dentar
            </h2>
            
            {/* Individual Implants */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-heading">Implantologie</h3>
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-heading">Serviciu</TableHead>
                        <TableHead className="text-heading">Brand</TableHead>
                        <TableHead className="text-right text-heading">Preț</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium text-text-custom">Implant dentar</TableCell>
                        <TableCell className="text-text-custom">Bredent</TableCell>
                        <TableCell className="text-right font-semibold text-text-custom">3.000 lei</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-text-custom">Implant dentar</TableCell>
                        <TableCell className="text-text-custom">MegaGen</TableCell>
                        <TableCell className="text-right font-semibold text-text-custom">2.500 lei</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-text-custom">Implant dentar</TableCell>
                        <TableCell className="text-text-custom">JD Dental Implants</TableCell>
                        <TableCell className="text-right font-semibold text-text-custom">2.000 lei</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            {/* Fast and Fixed Packages */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-heading">Dinți ficși în 24 ore Piatra Neamț</h3>
              
              {/* Bredent Packages */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-accent">Fast and Fixed Bredent</h4>
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-heading">Pachet</TableHead>
                          <TableHead className="text-right text-heading">Preț</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="text-text-custom">4 implanturi premium Bredent și lucrare fixă provizorie GRATUITĂ în 24 ore</TableCell>
                          <TableCell className="text-right font-semibold text-text-custom">17.500 lei</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-text-custom">6 implanturi premium Bredent și lucrare fixă provizorie GRATUITĂ în 24 ore</TableCell>
                          <TableCell className="text-right font-semibold text-text-custom">23.000 lei</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-text-custom">8 implanturi premium Bredent și lucrare fixă provizorie GRATUITĂ în 24 ore</TableCell>
                          <TableCell className="text-right font-semibold text-text-custom">29.500 lei</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>

              {/* MegaGen Packages */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-accent">All-on-4 MegaGen</h4>
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-heading">Pachet</TableHead>
                          <TableHead className="text-right text-heading">Preț</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="text-text-custom">4 implanturi premium MegaGen și lucrare fixă provizorie GRATUITĂ în 24 ore</TableCell>
                          <TableCell className="text-right font-semibold text-text-custom">13.000 lei</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-text-custom">6 implanturi premium MegaGen și lucrare fixă provizorie GRATUITĂ în 24 ore</TableCell>
                          <TableCell className="text-right font-semibold text-text-custom">19.500 lei</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-text-custom">8 implanturi premium MegaGen și lucrare fixă provizorie GRATUITĂ în 24 ore</TableCell>
                          <TableCell className="text-right font-semibold text-text-custom">26.000 lei</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>

              {/* JD Dental Packages */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-accent">All-on-4 JD Dental Implants</h4>
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-heading">Pachet</TableHead>
                          <TableHead className="text-right text-heading">Preț</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="text-text-custom">4 implanturi premium JD și lucrare fixă provizorie GRATUITĂ în 24 ore</TableCell>
                          <TableCell className="text-right font-semibold text-text-custom">9.900 lei</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-text-custom">6 implanturi premium JD și lucrare fixă provizorie GRATUITĂ în 24 ore</TableCell>
                          <TableCell className="text-right font-semibold text-text-custom">14.900 lei</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-text-custom">8 implanturi premium JD și lucrare fixă provizorie GRATUITĂ în 24 ore</TableCell>
                          <TableCell className="text-right font-semibold text-text-custom">19.900 lei</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="text-center mt-8">
              <a href="tel:+40333630005" className="text-accent hover:text-accent/90 text-xl font-semibold">
                +40 333 630 005
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is Dental Implant */}
      <section 
        ref={whatIsSection.ref}
        className={`py-20 transition-all duration-700 ${
          whatIsSection.isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-heading">Ce este implantul dentar</h2>
            <div className="prose prose-lg text-text-custom">
              <p>
                Implantul dentar este o rădăcină artificială din titan care se integrează în osul maxilar și servește ca bază solidă pentru dinți noi. Este cea mai avansată și durabilă soluție pentru înlocuirea dinților lipsă.
              </p>
              <p>
                Spre deosebire de protezele mobile sau podurile dentare clasice, implanturile nu necesită șlefuirea dinților sănătoși vecini și oferă stabilitate și confort comparabile cu dinții naturali.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When Recommended */}
      <section 
        ref={whenRecommendedSection.ref}
        className={`py-20 bg-primary transition-all duration-700 ${
          whenRecommendedSection.isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-white">Când este recomandat implantul dentar</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Lipsă unuia sau mai multor dinți",
                "Proteze mobile instabile și incomode",
                "Atrofia osoasă din cauza lipsei dinților",
                "Dorința de dinți ficși și estetici",
                "Necesitatea de a păstra dinții sănătoși vecini",
                "Reabilitări orale complete"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Steps */}
      <section 
        ref={stepsSection.ref}
        className={`py-20 transition-all duration-700 ${
          stepsSection.isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-heading">
              Etapele tratamentului la clinica Medstom
            </h2>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <Card key={index} className="border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-heading">{step.title}</h3>
                        <p className="text-text-custom">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Medstom */}
      <section 
        ref={whyChooseSection.ref}
        className={`py-20 bg-primary transition-all duration-700 ${
          whyChooseSection.isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">
              De ce să alegi implant dentar în Piatra Neamț la Medstom
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center border-primary/20 bg-white/10">
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-white">Rapiditate</h3>
                  <p className="text-sm text-white">Dinți ficși în 24-48h pentru majoritatea cazurilor</p>
                </CardContent>
              </Card>
              <Card className="text-center border-primary/20 bg-white/10">
                <CardContent className="p-6">
                  <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-white">Experiență</h3>
                  <p className="text-sm text-white">20 ani experiență, primii cu Fast & Fixed în regiune</p>
                </CardContent>
              </Card>
              <Card className="text-center border-primary/20 bg-white/10">
                <CardContent className="p-6">
                  <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-white">Tehnologie</h3>
                  <p className="text-sm text-white">CBCT, CAD/CAM, laborator propriu integrat</p>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-white text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section 
        ref={faqSection.ref}
        className={`py-20 transition-all duration-700 ${
          faqSection.isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-heading">
              Întrebări frecvente despre implant dentar
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-primary/20 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-heading hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-text-custom">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
      </main>

      <Footer />
    </div>
  );
};

export default ImplantDentar;
