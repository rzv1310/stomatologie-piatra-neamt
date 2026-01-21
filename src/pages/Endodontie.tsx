import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import stomatologieHero from "@/assets/service-stomatologie-generala.jpg?w=1200&format=webp";
import { useDynamicSEO } from "@/hooks/use-dynamic-seo";
import { useSEOSchema } from "@/hooks/use-seo-schema";
import { useLocalBusinessSchema } from "@/hooks/use-local-business-schema";
import RelatedServices from "@/components/RelatedServices";
import { relatedServices } from "@/config/related-content";
import { CTAWithTrust } from "@/components/CTAWithTrust";
import { HeroContactBox } from "@/components/HeroContactBox";

const Endodontie = () => {
  const DynamicSEO = useDynamicSEO({
    title: "Endodonție Piatra Neamț - Tratament de Canal la Microscop | Medstom",
    description: "Tratamente dentare complete, de la obturații simple până la tratamente de canal sub microscop. Îți salvăm dinții cu tehnologie de ultimă generație. ☎ 0333 630 005",
    path: "/servicii/endodontie-piatra-neamt"
  });

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
      description: <>Rezolvăm rapid durerea și problemele dentare acute - vezi <Link to="/servicii/urgente-dentare-piatra-neamt" className="text-primary hover:underline font-medium">urgențe dentare</Link></>,
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
      description: <>Îndepărtăm țesutul infectat și curățăm canalele cu precizie sub magnificare, cu ajutor de <Link to="/servicii/radiologie-dentara-piatra-neamt" className="text-primary hover:underline font-medium">radiografie dentară</Link></>
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

  const MedicalProcedureSchema = useSEOSchema({
    type: 'MedicalProcedure',
    canonical: '/servicii/endodontie-piatra-neamt',
    medicalProcedure: {
      name: 'Endodonție și Tratament de Canal',
      description: 'Tratamente dentare complete, de la obturații simple până la tratamente de canal sub microscop. Îți salvăm dinții cu tehnologie de ultimă generație.',
      procedureType: 'Endodontics'
    }
  });

  const FAQSchema = useSEOSchema({
    type: 'FAQPage',
    canonical: '/servicii/endodontie-piatra-neamt',
    faqs: faqs
  });

  const LocalBusinessSchema = useLocalBusinessSchema({
    serviceName: "Endodonție și Tratament de Canal",
    serviceDescription: "Tratamente dentare complete, de la obturații simple până la tratamente de canal sub microscop. Îți salvăm dinții cu tehnologie de ultimă generație.",
    path: "/servicii/endodontie-piatra-neamt",
    medicalSpecialty: "Endodonție"
  });

  const doctorsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Person",
        "name": "Dr. Dolganiuc Inesa",
        "jobTitle": "Medic stomatolog cu competențe în implantologie și protetică dentară",
        "worksFor": {
          "@type": "Dentist",
          "name": "Stomatologie MedStom Piatra Neamț"
        }
      },
      {
        "@type": "Person",
        "name": "Dr. Iacomi Adelina",
        "jobTitle": "Medic stomatolog specializat în implantologie și parodontologie",
        "worksFor": {
          "@type": "Dentist",
          "name": "Stomatologie MedStom Piatra Neamț"
        }
      },
      {
        "@type": "Person",
        "name": "Dr. Bratu Diana Andreea",
        "jobTitle": "Medic stomatolog specializat în endodonție",
        "worksFor": {
          "@type": "Dentist",
          "name": "Stomatologie MedStom Piatra Neamț"
        }
      },
      {
        "@type": "Person",
        "name": "Dr. Bogulean Victoria",
        "jobTitle": "Medic stomatolog specializat în ortodonție",
        "worksFor": {
          "@type": "Dentist",
          "name": "Stomatologie MedStom Piatra Neamț"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      {DynamicSEO}
      {MedicalProcedureSchema}
      {FAQSchema}
      {LocalBusinessSchema}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(doctorsSchema)}
        </script>
      </Helmet>
      <Navigation />

      <main className="flex-1">
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
              Endodonție în Piatra Neamț
            </h1>
            <p className="text-xl mb-8 text-white">
              Tratamente dentare complete, de la obturații simple până la tratamente de canal sub microscop. Îți salvăm dinții cu tehnologie de ultimă generație.
            </p>
            <HeroContactBox
              microcopy="✓ Consultație gratuită · Tratament nedureros · Microscop dentar"
            />
          </div>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Stomatologie Piatra Neamț", href: "/" },
          { label: "Servicii", href: "/servicii" },
          { label: "Endodonție" }
        ]}
      />

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
                            <TableCell className="text-foreground">{item.service}</TableCell>
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
              <ul className="list-disc list-inside space-y-2 text-foreground text-base [&_a]:text-primary [&_a]:hover:underline">
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
                  <AccordionContent className="pt-2">
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
            <CTAWithTrust
              primaryButton={{ text: "Programare online", href: "/contact" }}
              secondaryButton={{ text: "0333 630 005", href: "tel:+40333630005" }}
              microcopy="✓ Consultație gratuită · Tratament nedureros · Microscop dentar"
              badges={[
                { icon: "🔬", text: "Tratamente sub microscop" },
                { icon: "🦷", text: "Salvăm dinții tăi" },
                { icon: "💉", text: "Anestezie fără durere" },
                { icon: "⭐", text: "Tehnologie modernă" }
              ]}
            />
          </div>
        </div>
      </section>

      <RelatedServices services={relatedServices['endodontie']} />
      </main>

      <Footer />
    </div>
  );
};

export default Endodontie;
