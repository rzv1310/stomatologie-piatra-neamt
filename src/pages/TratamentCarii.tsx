import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/service-tratament-carii.jpg";
import { useServiceMeta } from "@/hooks/use-service-meta";

const TratamentCarii = () => {
  const ServiceMeta = useServiceMeta({
    title: "Tratament Carii Dentare Piatra Neamț - Plombe Estetice | Medstom",
    description: "Tratament carii dentare modern în Piatra Neamț. Obturații estetice din compozit, nedureros. Salvăm dinții afectați de carii. ☎ 0333 630 005",
    image: "https://storage.googleapis.com/gpt-engineer-file-uploads/4JwdkPfG3Mgryfl0Byt7yN5KIf43/social-images/social-1763674029142-stomatologie piatra neamt - echipa medstom.webp",
    path: "/servicii/tratament-carii"
  });
  const pricingData = [
    { service: "Obturație simplă (compozit)", price: "250-350 lei" },
    { service: "Obturație complexă (2-3 suprafețe)", price: "350-500 lei" },
    { service: "Inlay/Onlay ceramică", price: "1200-1500 lei" }
  ];

  const benefits = [
    {
      title: "Tratament nedureros",
      description: "Folosim tehnici moderne de anestezie pentru un confort maxim în timpul procedurii"
    },
    {
      title: "Materiale biocompatibile",
      description: "Utilizăm doar materiale certificate, fără mercur, sigure pentru sănătatea ta"
    },
    {
      title: "Rezultate estetice",
      description: "Obturațiile moderne imită perfect culoarea și transparența dintelui natural"
    },
    {
      title: "Durabilitate garantată",
      description: "Materialele moderne oferă rezistență superioară și o durată de viață îndelungată"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Consultația inițială",
      description: "Examinare dentară completă și identificarea cariilor prin inspecție vizuală și radiografii dentare"
    },
    {
      number: "02",
      title: "Anestezie locală",
      description: "Administrarea anesteziei locale pentru un tratament confortabil și fără durere"
    },
    {
      number: "03",
      title: "Îndepărtarea cariei",
      description: "Curățarea completă a țesutului dentar afectat folosind instrumente moderne și tehnologie dentară avansată"
    },
    {
      number: "04",
      title: "Obturația",
      description: "Aplicarea materialului de obturație în straturi succesive, polimerizate cu lampă specială, și modelarea anatomică a dintelui"
    },
    {
      number: "05",
      title: "Finisare și control",
      description: "Ajustarea ocluziei (mușcăturii), lustruirea obturației și recomandări pentru îngrijirea dentară"
    }
  ];

  const faqs = [
    {
      question: "Doare tratamentul cariilor?",
      answer: "Nu, tratamentul se efectuează sub anestezie locală, astfel încât nu vei simți durere în timpul procedurii. După ce efectul anesteziei trece, poți simți o ușoară sensibilitate care dispare în câteva ore."
    },
    {
      question: "Cât durează o obturație?",
      answer: "Durata de viață a unei obturații moderne poate fi de 10-15 ani sau mai mult, în funcție de îngrijirea dentară zilnică, igiena orală și controalele periodice la dentist."
    },
    {
      question: "Pot mânca imediat după tratament?",
      answer: "Se recomandă să aștepți până când efectul anesteziei trece complet (aproximativ 2-3 ore) pentru a evita mușcarea accidentală a buzei sau limbii. Obturațiile moderne se polimerizează instant, deci dintele poate fi folosit imediat."
    },
    {
      question: "Care este diferența între o obturație și o coroană?",
      answer: "Obturația se folosește pentru cariile mici și medii, când mai mult de 50% din țesutul dentar este intact. Coroana dentară este recomandată când distrucția dentară este mare și dintele necesită protecție completă pentru a rezista forțelor masticatorii."
    }
  ];
  return (
    <div className="min-h-screen flex flex-col">
      {ServiceMeta}
      <Navigation />
      <Breadcrumbs
        items={[
          { label: "Stomatologie Piatra Neamț", href: "/" },
          { label: "Servicii", href: "/servicii" },
          { label: "Tratamentul Cariilor" },
        ]}
      />
      
      <main className="flex-1">
        {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Odontoterapie Restauratorie în Piatra Neamț
            </h1>
            <p className="text-xl mb-8 text-white">
              Tratamentul profesional al cariilor dentare pentru un zâmbet sănătos
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
              Prețuri tratament carii
            </h2>
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
                    {pricingData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="text-text-custom">{item.service}</TableCell>
                        <TableCell className="text-right font-semibold text-accent">{item.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <p className="text-center text-text-custom mt-4 text-sm">
              *Prețurile sunt orientative și pot varia în funcție de complexitatea cazului
            </p>
          </div>
        </div>
      </section>

      {/* What is it */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-heading">
              Ce este tratamentul cariilor dentare?
            </h2>
            <div className="prose prose-lg max-w-none text-text-custom space-y-4">
              <p>
                Odontoterapia restauratorie (tratamentul cariilor dentare) este procedura prin care se îndepărtează țesutul dentar afectat de carie și se restaurează structura dintelui cu materiale moderne, biocompatibile. Tratamentul prompt al cariilor previne complicații grave și păstrează integritatea dinților naturali.
              </p>
              <p>
                Cariile dentare sunt una dintre cele mai comune afecțiuni ale cavității orale și pot apărea la orice vârstă. Dacă nu sunt tratate la timp, cariile pot progresa, afectând stratul profund al dintelui (dentina) și chiar pulpa dentară, cauzând durere intensă și necesitând tratamente mai complexe.
              </p>
              <p>
                La Medstom folosim materiale compozite foto-polimerizabile de ultimă generație care oferă un aspect natural, rezistență superioară și durabilitate pe termen lung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Beneficiile tratamentului modern al cariilor
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Tehnologie avansată pentru rezultate optime
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Cum se desfășoară tratamentul?
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Proces pas cu pas pentru rezultate perfecte
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {steps.map((step, index) => (
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

      {/* Why Choose Us */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              De ce să alegi Medstom pentru tratarea cariilor?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-5xl mb-4">🦷</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Materiale premium</h3>
                <p className="opacity-90 text-white">Compozite de ultimă generație pentru rezultate estetice și durabile</p>
              </div>
              <div>
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Tratament rapid</h3>
                <p className="opacity-90 text-white">Obturații realizate într-o singură ședință</p>
              </div>
              <div>
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Precizie maximă</h3>
                <p className="opacity-90 text-white">Tehnologie avansată pentru restaurări perfecte</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              Nu ignora cariile dentare!
            </h2>
            <p className="text-xl mb-8 text-white">
              Un tratament la timp salvează dintele și previne complicațiile
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

export default TratamentCarii;
