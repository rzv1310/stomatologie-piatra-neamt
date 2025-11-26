import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import proteticaHero from "@/assets/service-protetica.jpg";
import { useServiceMeta } from "@/hooks/use-service-meta";
import { useSEOSchema } from "@/hooks/use-seo-schema";
import RelatedServices from "@/components/RelatedServices";
import { relatedServices } from "@/config/related-content";

const Protetica = () => {
  const ServiceMeta = useServiceMeta({
    title: "Protetică Dentară Piatra Neamț - Coroane, Punți, Proteze | Medstom",
    description: "Lucrări protetice de calitate în Piatra Neamț. Coroane zirconiu, EMAX, proteze dentare, lucrări pe implanturi. Laborator propriu. ☎ 0333 630 005",
    image: "https://storage.googleapis.com/gpt-engineer-file-uploads/4JwdkPfG3Mgryfl0Byt7yN5KIf43/social-images/social-1763674029142-stomatologie piatra neamt - echipa medstom.webp",
    path: "/servicii/protetica-piatra-neamt"
  });

  const pricingData = [
    { service: "Coroană Weiser ceramică", price: "800 lei" },
    { service: "Coroană Metalo-ceramică", price: "1000 lei" },
    { service: "Coroană Zirconiu", price: "1400 lei" },
    { service: "Coroană Ceramică Integrală EMAX", price: "1500 lei" },
    { service: "Proteză dentară CANDULOR", price: "2500 lei" },
    { service: "Lucrare înfiletată pe implanturi SUPERIOR", price: "25000 lei" },
    { service: "Lucrare înfiletată pe implanturi PREMIUM", price: "14500-17000 lei" },
    { service: "Lucrare înfiletată pe implanturi CLASSIC", price: "10000 lei" }
  ];

  const prosthesisTypes = [
    {
      title: "Coroane dentare",
      description: "Coroane din zirconiu sau ceramică pentru restaurări durabile și estetice",
      icon: "👑"
    },
    {
      title: "Punți dentare",
      description: "Înlocuirea dinților lipsă fără implanturi, prin ancorare pe dinții vecini",
      icon: "🌉"
    },
    {
      title: "Proteze mobile",
      description: "Proteze totale sau parțiale pentru înlocuirea mai multor dinți",
      icon: "🦷"
    },
    {
       title: "Lucrări pe implanturi",
       description: "Coroane, punți și proteze fixate pe <Link to=\"/servicii/implant-dentar-piatra-neamt\" className=\"text-primary hover:underline font-medium\">implanturi dentare</Link>",
      icon: "🔩"
    }
  ];

  const benefits = [
    {
      title: "Funcție completă",
      description: "Restabilim capacitatea de a mesteca și vorbi normal"
    },
    {
      title: "Aspect natural",
      description: "Lucrări protetice care imită perfect dinții naturali, cu rezultate superioare pentru <Link to=\"/servicii/estetica-dentara\" className=\"text-primary hover:underline font-medium\">estetică dentară</Link>"
    },
    {
      title: "Confort maxim",
      description: "Proteze bine adaptate care nu causează disconfort"
    },
    {
      title: "Durabilitate",
      description: "Materiale premium pentru rezultate ce durează ani de zile"
    }
  ];

  const crownSteps = [
    {
      number: "01",
      title: "Consultație și plan",
      description: "Evaluăm starea dintelui și stabilim tipul de coroană optim pentru tine"
    },
    {
      number: "02",
      title: "Pregătirea dintelui",
      description: "Pregătim dintele pentru coroană, păstrând cât mai multă structură sănătoasă"
    },
    {
      number: "03",
      title: "Scanare digitală 3D",
      description: "Realizăm amprente digitale precise cu <Link to=\"/servicii/radiologie-dentara-piatra-neamt\" className=\"text-primary hover:underline font-medium\">radiografie 3D</Link> pentru fabricarea coroanei în laborator"
    },
    {
      number: "04",
      title: "Coroană provizorie",
      description: "Aplicăm o coroană temporară pentru protecție și estetică"
    },
    {
      number: "05",
      title: "Fabricare în laborator",
      description: "Tehnicianul dentar realizează coroana personalizată în laboratorul nostru"
    },
    {
      number: "06",
      title: "Aplicare finală",
      description: "Verificăm adaptarea și cimentăm coroana definitivă"
    }
  ];

  const faqs = [
    {
      question: "Cât durează o coroană dentară?",
      answer: "Coroanele din zirconiu sau ceramică pot dura 15-20 ani sau chiar mai mult cu îngrijire corespunzătoare. Durata de viață depinde de igiena orală, obiceiurile alimentare și controalele regulate la dentist."
    },
    {
      question: "Care este diferența dintre zirconiu și ceramică?",
      answer: "Zirconiul este extrem de rezistent și recomandat pentru dinții din spate (molari) unde presiunea de mestecat este mare. Ceramica integrală (fără metal) oferă estetica superioară și este ideală pentru dinții din față. Ambele sunt biocompatibile."
    },
    {
      question: "Pot avea coroane pe implanturi?",
      answer: "Da, coroanele pe implanturi sunt una dintre cele mai bune soluții pentru înlocuirea dinților lipsă. Oferă stabilitate maximă și arată identic cu dinții naturali."
    },
    {
      question: "Cât durează realizarea unei coroane?",
      answer: "Procesul complet durează 7-10 zile. Prima ședință pentru pregătirea dintelui și amprentă (1-2 ore), timp de lucru în laborator (5-7 zile), apoi ședința finală pentru aplicare (30-60 minute)."
    },
    {
      question: "Sunt dureroase protezele mobile?",
      answer: "Protezele moderne, bine realizate, nu ar trebui să cauzeze durere. Poate exista o perioadă scurtă de adaptare (1-2 săptămâni), dar cu ajustări corespunzătoare, ar trebui să fie confortabile."
    },
    {
      question: "Ce este o proteză scheletată?",
      answer: "Proteza scheletată este o proteză parțială cu cadru metalic care se sprijină pe dinții rămași. Este mai stabilă și mai confortabilă decât protezele acrilice simple și poate înlocui mai mulți dinți lipsă."
    }
  ];

  const MedicalProcedureSchema = useSEOSchema({
    type: 'MedicalProcedure',
    canonical: '/servicii/protetica-piatra-neamt',
    medicalProcedure: {
      name: 'Protetică Dentară',
      description: 'Înlocuim dinții lipsă sau deteriorați cu lucrări protetice de cea mai înaltă calitate. De la coroane individuale până la proteze complete - soluții durabile și estetice.',
      procedureType: 'Dental Prosthetics'
    }
  });

  const FAQSchema = useSEOSchema({
    type: 'FAQPage',
    canonical: '/servicii/protetica-piatra-neamt',
    faqs: faqs
  });

  return (
    <div className="min-h-screen flex flex-col">
      {ServiceMeta}
      {MedicalProcedureSchema}
      {FAQSchema}
      <Navigation />
      <Breadcrumbs
        items={[
          { label: "Stomatologie Piatra Neamț", href: "/" },
          { label: "Servicii", href: "/servicii" },
          { label: "Protetică Dentară" }
        ]}
      />

      <main className="flex-1">
        {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${proteticaHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Protetică Dentară în Piatra Neamț
            </h1>
            <p className="text-xl mb-8 text-white">
              Înlocuim dinții lipsă sau deteriorați cu lucrări protetice de cea mai înaltă calitate. De la coroane individuale până la proteze complete - soluții durabile și estetice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Programează consultație
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
              Prețuri coroane dentare și protetică
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

      {/* Prosthesis Types */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Tipuri de lucrări protetice
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Soluții personalizate pentru fiecare situație
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {prosthesisTypes.map((type, index) => (
              <Card key={index} className="border-primary/20">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-heading">{type.title}</h3>
                  <p className="text-text-custom">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Prosthetics */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-heading">
              Ce este protetica dentară?
            </h2>
            <div className="prose prose-lg max-w-none text-text-custom space-y-4">
              <p>
                Protetica dentară este specialitatea stomatologiei care se ocupă cu înlocuirea dinților lipsă sau reconstruirea celor deteriorați prin diverse tipuri de proteze și restaurări.
              </p>
              <p>
                La Medstom avem propriul laborator de tehnică dentară digitală, ceea ce înseamnă:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Control complet asupra calității lucrărilor protetice</li>
                <li>Termene mai rapide - fără intermediari</li>
                <li>Posibilitatea ajustărilor rapide dacă este necesar</li>
                <li>Comunicare directă între medic și tehnician pentru rezultate optime</li>
                <li>Prețuri mai bune datorită eliminării costurilor intermediare</li>
              </ul>
              <p>
                Folosim tehnologie CAD/CAM pentru designul și fabricarea lucrărilor protetice, asigurând precizie maximă și aspect natural.
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
              Beneficiile protezelor dentare
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Mai mult decât simplă înlocuire a dinților
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
              Procesul de realizare a coroanelor dentare
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Pași clari pentru rezultate perfecte
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {crownSteps.map((step, index) => (
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
              De ce Medstom pentru protetica dentară?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-5xl mb-4">🏭</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Laborator propriu</h3>
                <p className="opacity-90 text-white">Control total asupra calității și termene rapide</p>
              </div>
              <div>
                <div className="text-5xl mb-4">💻</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Tehnologie CAD/CAM</h3>
                <p className="opacity-90 text-white">Design digital pentru precizie maximă</p>
              </div>
              <div>
                <div className="text-5xl mb-4">💎</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Materiale premium</h3>
                <p className="opacity-90 text-white">Zirconiu și ceramică de cea mai înaltă calitate</p>
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
              Ai nevoie de lucrări protetice?
            </h2>
            <p className="text-xl mb-8">
              Programează o consultație și descoperă soluțiile protetice potrivite pentru tine
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

      <RelatedServices services={relatedServices['protetica']} />
      </main>

      <Footer />
    </div>
  );
};

export default Protetica;
