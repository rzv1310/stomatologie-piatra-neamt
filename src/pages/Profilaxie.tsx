import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import profilaxieHero from "@/assets/service-profilaxie.jpg";

const Profilaxie = () => {
  const pricingData = [
    { service: "Detartraj și periaj profesional", price: "300 lei" },
    { service: "Igienizare profesională (detartraj + periaj + air flow)", price: "400 lei" }
  ];

  const benefits = [
    {
      title: "Prevenție eficientă",
      description: "Prevenim apariția cariilor și a bolilor parodontale prin controale regulate și igienizare profesională"
    },
    {
      title: "Zâmbet strălucitor",
      description: "Îndepărtăm petele și decolorările, redând dinților strălucirea naturală"
    },
    {
      title: "Economii pe termen lung",
      description: "Previi tratamente costisitoare prin controale regulate și igienă corespunzătoare"
    },
    {
      title: "Sănătate generală",
      description: "Igiena orală corespunzătoare contribuie la sănătatea întregului organism"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Consultație și evaluare",
      description: "Examinăm starea dinților și gingiilor, identificăm zonele care necesită atenție specială"
    },
    {
      number: "02",
      title: "Detartraj cu ultrasunete",
      description: "Îndepărtăm tartrul și placa bacteriană folosind tehnologie cu ultrasunete, fără durere"
    },
    {
      number: "03",
      title: "Air-Flow",
      description: "Curățăm petele superficiale și biofilmul bacterian cu jet de apă, aer și pulbere fină"
    },
    {
      number: "04",
      title: "Periaj profesional",
      description: "Polizăm suprafața dinților pentru a preveni acumularea rapidă a plăcii bacteriene"
    },
    {
      number: "05",
      title: "Fluorizare",
      description: "Aplicăm fluor pentru întărirea smalțului și protecție suplimentară împotriva cariilor"
    }
  ];

  const faqs = [
    {
      question: "Cât de des ar trebui să fac o igienizare profesională?",
      answer: "Recomandăm o igienizare profesională la fiecare 6 luni pentru menținerea unei sănătăți orale optime. Pacienții cu risc crescut de boli parodontale sau acumulare rapidă de tartru pot necesita controale la 3-4 luni."
    },
    {
      question: "Este dureroasă procedura de detartraj?",
      answer: "Detartrajul cu ultrasunete este în general nedureros. Dacă aveți gingii sensibile sau inflamate, puteți simți un ușor disconfort, dar procedura este bine tolerată de majoritatea pacienților."
    },
    {
      question: "Cât durează o ședință de igienizare?",
      answer: "O ședință completă de igienizare profesională durează între 45-60 de minute, în funcție de cantitatea de tartru acumulat și de starea generală a dinților."
    },
    {
      question: "Pot mânca imediat după igienizare?",
      answer: "Da, puteți mânca imediat după procedură. Totuși, recomandăm să evitați alimentele foarte colorate (cafea, ceai, vin roșu) în primele 24 de ore pentru a menține rezultatele curățării."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Breadcrumbs
        items={[
          { label: "Stomatologie Piatra Neamț", href: "/" },
          { label: "Servicii", href: "/servicii" },
          { label: "Profilaxie și Igienizare Dentară" }
        ]}
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${profilaxieHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Profilaxie și Igienizare Dentară în Piatra Neamț
            </h1>
            <p className="text-xl mb-8 text-white">
              Prevenția este cheia unui zâmbet sănătos. Igienizarea profesională regulată te ajută să eviți problemele dentare și să păstrezi dinții sănătoși pe termen lung.
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
              Prețuri profilaxie și igienizare
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

      {/* What is Prophylaxis */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-heading">
              Ce este profilaxia dentară?
            </h2>
            <div className="prose prose-lg max-w-none text-text-custom space-y-4">
              <p>
                Profilaxia dentară reprezintă ansamblul măsurilor preventive destinate menținerii sănătății cavității orale și prevenirii apariției afecțiunilor dentare. Aceasta include igienizarea profesională, detartrajul, fluorizarea și educația pentru igiena orală corespunzătoare.
              </p>
              <p>
                Chiar dacă îți perezi dinții zilnic și folosești ață dentară, există zone greu accesibile unde se poate acumula placa bacteriană și tartrul. Igienizarea profesională îndepărtează aceste depozite și previne dezvoltarea cariilor și a bolilor parodontale.
              </p>
              <p>
                La Medstom folosim tehnologie modernă, inclusiv ultrasunete și Air-Flow, pentru o curățare eficientă și delicată, care protejează smalțul dinților și asigură rezultate durabile.
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
              Beneficiile igienizării profesionale
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Investiția în prevenție te scutește de probleme și cheltuieli viitoare
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
              Cum decurge o ședință de igienizare?
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Proces complet pentru un zâmbet curat și sănătos
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
              De ce să alegi Medstom pentru profilaxie?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-5xl mb-4">🦷</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Tehnologie modernă</h3>
                <p className="opacity-90 text-white">Echipamente de ultimă generație pentru rezultate optime</p>
              </div>
              <div>
                <div className="text-5xl mb-4">👨‍⚕️</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Echipă specializată</h3>
                <p className="opacity-90 text-white">Igieniști dentari cu experiență și formare continuă</p>
              </div>
              <div>
                <div className="text-5xl mb-4">💝</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Abordare personalizată</h3>
                <p className="opacity-90 text-white">Plan de profilaxie adaptat nevoilor tale specifice</p>
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
              Programează-te pentru o igienizare profesională
            </h2>
            <p className="text-xl mb-8">
              Investește în sănătatea dinților tăi astăzi și evită problemele de mâine
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

export default Profilaxie;
