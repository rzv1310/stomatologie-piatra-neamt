import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import stomatologieHero from "@/assets/service-stomatologie-generala.jpg";

const StomatologieGenerala = () => {
  const pricingData = [
    { category: "Terapie dentară", items: [
      { service: "Obturație colet", price: "150-200 lei" },
      { service: "Obturație grad I", price: "170 lei" },
      { service: "Obturație grad II", price: "220 lei" },
      { service: "Obturație grad III", price: "300-400 lei" }
    ]},
    { category: "Endodonție la microscop", items: [
      { service: "Tratament monoradicular cu/fără microscop", price: "200-400 lei" },
      { service: "Tratament pluriradicular cu/fără microscop", price: "350-550 lei" },
      { service: "Retratament monoradicular la microscop", price: "550 lei" },
      { service: "Retratament pluriradicular la microscop", price: "700 lei" }
    ]}
  ];

  const services = [
    {
      title: "Tratament carii dentare",
      description: "Obturații fizionomice din compozit de ultimă generație",
      icon: "🦷"
    },
    {
      title: "Tratament de canal la microscop",
      description: "Endodonție de precizie pentru salvarea dinților afectați",
      icon: "🔬"
    },
    {
      title: "Restaurări complexe",
      description: "Inlay, onlay și overlay din ceramică sau compozit",
      icon: "🔧"
    },
    {
      title: "Tratament urgențe",
      description: "Rezolvăm rapid durerea și problemele dentare acute",
      icon: "🚨"
    }
  ];

  const benefits = [
    {
      title: "Fără durere",
      description: "Folosim cele mai eficiente metode de anestezie pentru confortul tău maxim"
    },
    {
      title: "Microscop dentar",
      description: "Precizie maximă în tratamentele de canal pentru rate de succes de peste 95%"
    },
    {
      title: "Materiale premium",
      description: "Compozite de ultimă generație care imită perfect dinții naturali"
    },
    {
      title: "Rezultate durabile",
      description: "Tratamente de calitate care rezistă în timp și previne reapariția problemelor"
    }
  ];

  const endoSteps = [
    {
      number: "01",
      title: "Diagnostic și radiografie",
      description: "Evaluăm starea dintelui și stabilim planul de tratament optim"
    },
    {
      number: "02",
      title: "Anestezie locală",
      description: "Aplicăm anestezie pentru un tratament complet fără durere"
    },
    {
      number: "03",
      title: "Accesul la canalele radiculare",
      description: "Realizăm accesul controlat la camera pulpară și canalele dentare"
    },
    {
      number: "04",
      title: "Curățarea sub microscop",
      description: "Îndepărtăm țesutul infectat și curățăm canalele cu precizie sub magnificare"
    },
    {
      number: "05",
      title: "Obturarea canalelor",
      description: "Umplem ermetic canalele pentru a preveni reinfectarea"
    },
    {
      number: "06",
      title: "Restaurare finală",
      description: "Reconstruim dintele cu obturație sau coroană pentru funcționalitate completă"
    }
  ];

  const faqs = [
    {
      question: "Cât durează o obturație dentară?",
      answer: "Obturațiile din compozit de calitate pot dura 7-10 ani sau chiar mai mult cu îngrijire corespunzătoare. Durata de viață depinde de mărimea obturației, poziția dintelui și igiena orală."
    },
    {
      question: "Este dureros tratamentul de canal?",
      answer: "Nu, tratamentul de canal modern nu este dureros. Folosim anestezie eficientă și microscop dentar pentru un tratament precis și confortabil. Majoritatea pacienților raportează că este similar cu realizarea unei obturații simple."
    },
    {
      question: "Când este necesar tratamentul de canal?",
      answer: "Tratamentul de canal este necesar când pulpa dentară (nervul) este infectată sau inflamată ireversibil. Semnele includ: durere intensă, sensibilitate prelungită la cald/rece, umflături sau abcese."
    },
    {
      question: "Pot salva un dinte cu carie mare?",
      answer: "În multe cazuri da! Cu tehnologie modernă și tratament de canal, putem salva dinți care altfel ar trebui extrași. La consultație evaluăm dacă dintele poate fi salvat și care este cea mai bună soluție."
    },
    {
      question: "Cât durează tratamentul de canal?",
      answer: "Un tratament de canal standard durează 60-90 de minute la Medstom, datorită folosirii microscopului dentar. Cazurile complexe pot necesita 2 ședințe. Timpul investit asigură rate de succes foarte mari."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Breadcrumbs
        items={[
          { label: "Stomatologie Piatra Neamț", href: "/" },
          { label: "Servicii", href: "/servicii" },
          { label: "Endodonție" }
        ]}
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${stomatologieHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Stomatologie Generală și Endodonție în Piatra Neamț
            </h1>
            <p className="text-xl mb-8 text-white">
              Tratamente dentare complete, de la obturații simple până la tratamente de canal sub microscop. Salvăm dinții tăi cu tehnologie de ultimă generație.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Programează-te acum
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+40333630005">
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                  <Phone className="mr-2 h-5 w-5" />
                  0333 630 005
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-heading">
              Prețuri stomatologie generală și endodonție
            </h2>
            {pricingData.map((category, idx) => (
              <div key={idx} className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-heading">{category.category}</h3>
                <Card className="border-primary/20">
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-heading font-semibold">Serviciu</TableHead>
                          <TableHead className="text-right text-heading font-semibold">Preț</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {category.items.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell className="text-text-custom">{item.service}</TableCell>
                            <TableCell className="text-right font-semibold text-accent">{item.price}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            ))}
            <p className="text-center text-text-custom mt-4 text-sm">
              *Prețurile sunt orientative și pot varia în funcție de complexitatea cazului
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Servicii de stomatologie generală
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Tratamente complete pentru sănătatea dinților tăi
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-primary/20">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-heading">{service.title}</h3>
                  <p className="text-text-custom">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Endodontics */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-heading">
              Tratament de canal la microscop - Endodonție de precizie
            </h2>
            <div className="prose prose-lg max-w-none text-text-custom space-y-4">
              <p>
                Tratamentul de canal (endodonția) este procedura prin care salvăm dinți cu nervul infectat sau inflamat. La Medstom, folosim microscop dentar pentru toate tratamentele de canal, ceea ce ne permite să vedem detalii imposibil de observat cu ochiul liber.
              </p>
              <p>
                Avantajele microscopului dentar includ:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Identificarea și tratarea tuturor canalelor radiculare, inclusiv celor ascunse</li>
                <li>Îndepărtarea precisă a țesutului infectat</li>
                <li>Păstrarea maximă a structurii dentare sănătoase</li>
                <li>Rate de succes de peste 95% (comparativ cu 75-85% fără microscop)</li>
                <li>Rezolvarea cazurilor complexe și retratamente</li>
              </ul>
              <p>
                Investiția în microscop dentar înseamnă că primești tratamente de nivel internațional, chiar în Piatra Neamț.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              De ce să alegi Medstom?
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Tehnologie avansată și experiență pentru rezultate optime
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-heading">{benefit.title}</h3>
                      <p className="text-text-custom">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Steps */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Cum decurge tratamentul de canal?
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Proces pas cu pas pentru salvarea dintelui tău
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {endoSteps.map((step, index) => (
              <Card key={index} className="border-primary/20 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-6">
                    <div className="text-4xl font-bold text-accent">{step.number}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-heading">{step.title}</h3>
                      <p className="text-text-custom">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Microscope */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              De ce microscop dentar?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-5xl mb-4">🔬</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Magnificare până la 25x</h3>
                <p className="opacity-90 text-white">Vedem detalii imposibil de observat cu ochiul liber</p>
              </div>
              <div>
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Precizie maximă</h3>
                <p className="opacity-90 text-white">Tratament precis care păstrează structura dentară sănătoasă</p>
              </div>
              <div>
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Rate de succes {'>'} 95%</h3>
                <p className="opacity-90 text-white">Rezultate superioare comparativ cu metodele tradiționale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center text-heading">
              Întrebări frecvente
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-primary/20 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-text-custom pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ai nevoie de tratament dentar?
            </h2>
            <p className="text-xl mb-8">
              Programează-te astăzi și beneficiază de tratamente moderne, fără durere
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

export default StomatologieGenerala;
