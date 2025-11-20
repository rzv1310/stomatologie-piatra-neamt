import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import radiologieHero from "@/assets/service-radiologie.jpg";

const Radiologie = () => {
  const radiologyServices = [
    {
      title: "Radiografie panoramică (OPG)",
      description: "Imagine completă a ambelor arcade dentare, sinusuri și ATM",
      icon: "📸"
    },
    {
      title: "CBCT - Tomografie 3D",
      description: "Scanare 3D de înaltă rezoluție pentru planificare precisă",
      icon: "🔬"
    },
    {
      title: "Radiografii retroalveolare",
      description: "Detalii exacte despre un dinte specific și structurile adiacente",
      icon: "🦷"
    },
    {
      title: "Radiografii bitewing",
      description: "Detectarea cariilor interdentare și evaluarea osului alveolar",
      icon: "📐"
    }
  ];

  const cbctAdvantages = [
    {
      title: "Planificare implanturi",
      description: "Evaluare precisă a osului disponibil și poziționare optimă a implanturilor"
    },
    {
      title: "Endodonție complexă",
      description: "Identificarea tuturor canalelor radiculare și a anatomiei complexe"
    },
    {
      title: "Extracții dificile",
      description: "Vizualizarea poziției dinților incluși și a structurilor anatomice importante"
    },
    {
      title: "Evaluare sinusuri",
      description: "Diagnostic precis al sinuzitelor maxilare și patologiei sinusurilor"
    },
    {
      title: "Patologie osoasă",
      description: "Detectarea chisturilor, tumorilor și anomaliilor osoase"
    },
    {
      title: "ATM - Articulație temporomandibulară",
      description: "Evaluarea disfuncțiilor ATM și a structurilor articulare"
    }
  ];

  const benefits = [
    {
      title: "Diagnostic precis",
      description: "Detectăm probleme invizibile la examenul clinic standard"
    },
    {
      title: "Planificare optimă",
      description: "Tratamente planificate digital pentru rezultate previzibile"
    },
    {
      title: "Siguranță maximă",
      description: "Identificăm riscurile înainte de intervenții chirurgicale"
    },
    {
      title: "Radiații minime",
      description: "Tehnologie digitală cu doze foarte reduse de radiații"
    }
  ];

  const faqs = [
    {
      question: "Este sigur CBCT-ul? Cât de multe radiații primesc?",
      answer: "CBCT-ul modern emite radiații semnificativ mai reduse decât tomografiile medicale clasice (CT). Doza este comparabilă cu 4-6 radiografii panoramice. La Medstom folosim aparatul CBCT Vatech Green X16 cu tehnologie de reducere a dozei, menținând calitatea imaginii la nivel înalt. Beneficiile diagnostice depășesc cu mult riscurile minime."
    },
    {
      question: "Când este necesar un CBCT în loc de o radiografie normală?",
      answer: "CBCT-ul este indicat pentru: planificarea implanturilor dentare, evaluarea dinților incluși (molari de minte), endodonție complexă, suspiciuni de fractură radiculară, patologie osoasă (chisturi, tumori), evaluarea sinusurilor maxilare, și planificarea chirurgiei ortodontice. Medicul va recomanda CBCT când informațiile din radiografiile 2D nu sunt suficiente."
    },
    {
      question: "Cât durează o investigație radiologică?",
      answer: "Radiografia panoramică: 15-20 secunde. Radiografie retroalveolară: câteva secunde. CBCT: 15-25 secunde de scanare efectivă, plus 5-10 minute pentru reconstrucția imaginii 3D. Imaginile sunt disponibile imediat pentru evaluare."
    },
    {
      question: "Pot face radiografii dacă sunt gravidă?",
      answer: "În general, radiografiile dentare se evită în primul trimestru de sarcină. În cazuri de urgență când beneficiul diagnostic depășește riscul, se poate realiza cu protecție abdominală cu șorț de plumb. CBCT-ul se evită pe toată durata sarcinii, cu excepția situațiilor de urgență vitală. Anunță întotdeauna medicul dacă ești sau poți fi gravidă."
    },
    {
      question: "Pot obține radiografiile mele pe CD sau USB?",
      answer: "Da, toate radiografiile (panoramice, CBCT) pot fi furnizate pe CD în format DICOM standard, care poate fi vizualizat cu software gratuit. De asemenea, putem trimite imaginile prin email sau le poți primi pe stick USB. Radiografiile îți aparțin și ai dreptul să le primești pentru a doua opinie sau pentru arhivare personală."
    },
    {
      question: "De ce este important să am radiografii la tratamentele dentare?",
      answer: "Radiografiile permit medicului să vadă ce nu este vizibil clinic: carii între dinți, infectii la rădăcină, nivel osos, formarea dentară la copii, poziția dinților de minte. Fără radiografii, multe probleme ar rămâne nedetectate până devin grave. Ele sunt esențiale pentru diagnostic corect și planificare precisă a tratamentului."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${radiologieHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Radiologie Dentară și Imagistică 3D în Piatra Neamț
            </h1>
            <p className="text-xl mb-8">
              CBCT Vatech Green X16 pentru diagnostic de precizie și planificare digitală. Vedem exact ce nu se poate vedea cu ochiul liber.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Programează investigație
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

      {/* Radiology Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Servicii de radiologie dentară
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Investigații complete pentru diagnostic precis
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {radiologyServices.map((service, index) => (
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

      {/* About CBCT */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-heading">
              CBCT - Tomografie computerizată Cone Beam
            </h2>
            <div className="prose prose-lg max-w-none text-text-custom space-y-4">
              <p>
                <strong>CBCT (Cone Beam Computed Tomography)</strong> este tehnologia de imagistică 3D de ultimă generație în stomatologie. Spre deosebire de radiografiile tradiționale care oferă imagini 2D, CBCT-ul creează o reconstrucție tridimensională completă a structurilor dentare, osoase și tisulare moi.
              </p>
              <p>
                La Medstom avem <strong>CBCT Vatech Green X16</strong>, unul dintre cele mai performante aparate din categoria sa:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Rezoluție foarte înaltă pentru detalii anatomice precise</li>
                <li>Câmp mare de scanare - de la un singur dinte la craniul complet</li>
                <li>Tehnologie de reducere a dozei de radiații (Green Technology)</li>
                <li>Timp scurt de scanare - doar 15-25 secunde</li>
                <li>Software avansat pentru planificare digitală a implanturilor</li>
                <li>Imagini disponibile imediat pentru evaluare</li>
              </ul>
              <p>
                CBCT-ul revoluționează diagnosticul și planificarea tratamentelor, oferind medicului o vizualizare completă 3D înainte de orice intervenție.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CBCT Applications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Aplicații ale CBCT în stomatologie
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Precizie diagnostică pentru rezultate optime
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {cbctAdvantages.map((advantage, index) => (
              <Card key={index} className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-heading">{advantage.title}</h3>
                      <p className="text-sm text-text-custom">{advantage.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Avantajele radiologiei moderne
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Tehnologie digitală pentru sănătatea ta
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

      {/* Digital Planning */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-heading text-center">
              Planificare digitală - Viitorul stomatologiei
            </h2>
            <div className="prose prose-lg max-w-none text-text-custom space-y-4">
              <p>
                Combinând datele din CBCT cu scanările intraorale digitale, putem realiza o <strong>planificare digitală completă</strong> a tratamentelor:
              </p>
              <Card className="border-primary/20 my-6">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-heading">Planificare implanturi dentare</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1 mr-3" />
                      <span>Evaluăm densitatea și volumul osului disponibil</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1 mr-3" />
                      <span>Identificăm structuri anatomice importante (nervi, sinusuri)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1 mr-3" />
                      <span>Plasăm virtual implanturile în poziția optimă</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1 mr-3" />
                      <span>Cream ghiduri chirurgicale pentru precizie maximă</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1 mr-3" />
                      <span>Simulăm rezultatul final - vezi exact cum va arăta</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <p>
                Această abordare digitală elimină aproximările și îmbunătățește dramatic rata de succes a tratamentelor complexe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              De ce radiologie la Medstom?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold mb-3">CBCT Vatech Green X16</h3>
                <p className="opacity-90">Tehnologie premium cu radiații minime</p>
              </div>
              <div>
                <div className="text-5xl mb-4">💻</div>
                <h3 className="text-xl font-semibold mb-3">Software avansat</h3>
                <p className="opacity-90">Planificare digitală 3D pentru implanturi</p>
              </div>
              <div>
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">Rezultate imediate</h3>
                <p className="opacity-90">Imagini disponibile instant pentru evaluare</p>
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
              Diagnostic precis pentru tratamente de succes
            </h2>
            <p className="text-xl mb-8">
              CBCT 3D și radiologie digitală pentru planificarea optimă a tratamentului tău
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Programare investigație
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

export default Radiologie;
