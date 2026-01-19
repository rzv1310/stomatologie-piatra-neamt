import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, ArrowRight, Phone, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import parodontologieHero from "@/assets/service-parodontologie.jpg?w=1200&format=webp";
import { useDynamicSEO } from "@/hooks/use-dynamic-seo";
import { useSEOSchema } from "@/hooks/use-seo-schema";
import { useLocalBusinessSchema } from "@/hooks/use-local-business-schema";
import RelatedServices from "@/components/RelatedServices";
import { relatedServices } from "@/config/related-content";
import { CTAWithTrust } from "@/components/CTAWithTrust";
import { HeroContactBox } from "@/components/HeroContactBox";

const Parodontologie = () => {
  const DynamicSEO = useDynamicSEO({
    title: "Parodontologie Piatra Neamț - Tratament Parodontoză | Medstom",
    description: "Tratament parodontal specializat în Piatra Neamț. Chiuretaj, detartraj subgingival, regenerare osoasă. Prevenim pierderea dinților. ☎ 0333 630 005",
    path: "/servicii/parodontologie-piatra-neamt"
  });

  const pricingData = [
    { service: "Chiuretaj parodontal în câmp închis (+- laser)", price: "60 lei / dinte" },
    { service: "Chiuretaj parodontal în câmp deschis (+- laser)", price: "250 lei / dinte" },
    { service: "Biostimulare cu laser hemiarcadă", price: "200 lei" }
  ];

  const parodontalServices = [
    {
      title: "Detartraj subgingival",
      description: <>Curățarea în profunzime a depunerilor de tartru sub gingie, parte din <Link to="/servicii/profilaxie-dentara-piatra-neamt" className="text-primary hover:underline font-medium">igienizare profesională</Link></>,
      icon: "🧹"
    },
    {
      title: "Chiuretaj parodontal",
      description: "Îndepărtarea țesutului inflamat și curățarea buzunarelor parodontale",
      icon: "🔬"
    },
    {
      title: "Operații cu lambou",
      description: "Chirurgie parodontală pentru acces la rădăcinile dentare și osul alveolar",
      icon: "🏥"
    },
    {
      title: "Regenerare osoasă",
      description: <>Reconstrucția osului pierdut prin grefe și membrane speciale, esențial pentru <Link to="/servicii/implant-dentar-piatra-neamt" className="text-primary hover:underline font-medium">implanturi dentare</Link></>,
      icon: "🦴"
    }
  ];

  const warningSigns = [
    "Sângerare gingivală la periaj sau spontană",
    "Gingii roșii, umflate sau sensibile",
    "Retracția gingivală (dinții par mai lungi)",
    "Miros neplăcut persistent din gură",
    "Dinți mobili sau care își schimbă poziția",
    "Durere la mestecat",
    "Secreții purulente între dinte și gingie"
  ];

  const benefits = [
    {
      title: "Salvează dinții",
      description: "Previne pierderea dinților cauzată de boala parodontală avansată"
    },
    {
      title: "Oprește progresia",
      description: "Tratament eficient care oprește evoluția bolii parodontale"
    },
    {
      title: "Îmbunătățește sănătatea",
      description: "Reduce inflamația și riscul complicațiilor sistemice (diabet, boli cardiovasculare)"
    },
    {
      title: "Estetică gingivală",
      description: "Restabilește aspectul sănătos și atractiv al gingiilor"
    }
  ];

  const treatmentSteps = [
    {
      number: "01",
      title: "Evaluare parodontală completă",
      description: "Măsurăm adâncimea buzunarelor parodontale, evaluăm mobilitatea dentară și realizăm radiografii"
    },
    {
      number: "02",
      title: "Igienizare profesională",
      description: "Detartraj supra și subgingival pentru îndepărtarea plăcii și tartrului"
    },
    {
      number: "03",
      title: "Chiuretaj și netezire radiculară",
      description: "Curățăm în profunzime suprafața rădăcinilor pentru a elimina bacteria și toxinele"
    },
    {
      number: "04",
      title: "Reevaluare",
      description: "Verificăm vindecarea după 4-6 săptămâni și decidem dacă este necesară chirurgie"
    },
    {
      number: "05",
      title: "Chirurgie parodontală (dacă e necesar)",
      description: "Operații cu lambou pentru cazurile avansate cu buzunare adânci"
    },
    {
      number: "06",
      title: "Menținere parodontală",
      description: "Controale regulate la 3-4 luni pentru prevenirea recidivelor"
    }
  ];

  const faqs = [
    {
      question: "Ce este boala parodontală (parodontita)?",
      answer: (
        <>
          Boala parodontală (<Link to="/blog/parodontoza" className="text-primary hover:underline font-medium">parodontoză</Link>) este o infecție bacteriană a gingiei, ligamentului parodontal și osului care susține dinții. Începe cu gingivita (inflamația gingiei) și poate progresa până la pierderea dinților dacă nu este tratată. Este cauzată de acumularea de placă bacteriană și tartru.
        </>
      )
    },
    {
      question: "Este dureros tratamentul parodontal?",
      answer: "Tratamentul se realizează sub anestezie locală, astfel încât nu veți simți durere în timpul procedurii. După tratament poate apărea sensibilitate ușoară care dispare în câteva zile. Folosim tehnici moderne care minimizează disconfortul."
    },
    {
      question: "Pot pierde dinții din cauza bolii parodontale?",
      answer: "Da, boala parodontală netratată este principala cauză a pierderii dinților la adulți. Bacteria distruge treptat osul care susține dinții, ducând la mobilitate și eventual la pierderea lor. De aceea tratamentul precoce este esențial."
    },
    {
      question: "Cât durează tratamentul parodontal?",
      answer: "Depinde de severitatea bolii. Cazurile ușoare (gingivita) se rezolvă în 1-2 ședințe. Parodontita moderată necesită 2-4 ședințe de chiuretaj. Cazurile severe pot necesita chirurgie și tratament extins pe 2-3 luni, urmat de menținere pe termen lung."
    },
    {
      question: "Pot preveni boala parodontală?",
      answer: "Da! Periajul corect de 2 ori pe zi, folosirea aței dentare, controale regulate la dentist și igienizări profesionale la 6 luni sunt esențiale. Nefumatul și controlul diabetului reduc semnificativ riscul de boală parodontală."
    },
    {
      question: "De ce sunt necesare controalele regulate după tratament?",
      answer: "Boala parodontală are tendința de recidivă. Controalele la 3-4 luni permit detectarea precoce a semnelor de reactivare și menținerea rezultatelor obținute prin igienizări profesionale regulate și monitorizare atentă."
    }
  ];

  const MedicalProcedureSchema = useSEOSchema({
    type: 'MedicalProcedure',
    canonical: '/servicii/parodontologie-piatra-neamt',
    medicalProcedure: {
      name: 'Parodontologie',
      description: 'Tratament specializat pentru sănătatea gingiilor și a osului care susține dinții. Salvăm dinții amenințați de boala parodontală prin tratamente moderne și eficiente.',
      procedureType: 'Periodontal Treatment'
    }
  });

  const FAQSchema = useSEOSchema({
    type: 'FAQPage',
    canonical: '/servicii/parodontologie-piatra-neamt',
    faqs: faqs
  });

  const LocalBusinessSchema = useLocalBusinessSchema({
    serviceName: "Parodontologie",
    serviceDescription: "Tratament parodontal specializat în Piatra Neamț. Chiuretaj, detartraj subgingival, regenerare osoasă. Prevenim pierderea dinților.",
    path: "/servicii/parodontologie-piatra-neamt",
    medicalSpecialty: "Parodontologie"
  });

  return (
    <div className="min-h-screen flex flex-col">
      {DynamicSEO}
      {MedicalProcedureSchema}
      {FAQSchema}
      {LocalBusinessSchema}
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${parodontologieHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Parodontologie în Piatra Neamț
            </h1>
            <p className="text-xl mb-8 text-white">
              Tratament specializat pentru sănătatea gingiilor și a osului care susține dinții. Salvăm dinții amenințați de boala parodontală prin tratamente moderne și eficiente.
            </p>
            <HeroContactBox
              microcopy="✓ Consultație gratuită · Tratament laser · Plan personalizat"
            />
          </div>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Stomatologie Piatra Neamț", href: "/" },
          { label: "Servicii", href: "/servicii" },
          { label: "Parodontologie" }
        ]}
      />

      {/* Pricing Table */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-heading">
              Prețuri parodontologie
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
                        <TableCell className="text-foreground">{item.service}</TableCell>
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

      {/* Warning Signs */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-accent/10 border-l-4 border-accent p-8 rounded-lg mb-12">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-heading">
                    Semne de alarmă - Când ai nevoie de tratament parodontal?
                  </h2>
                  <ul className="space-y-3">
                    {warningSigns.map((sign, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1 mr-3" />
                        <span className="text-text-custom">{sign}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-lg font-semibold text-heading">
                    Dacă prezinți oricare dintre aceste simptome, programează urgent o consultație parodontală!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Tratamente parodontale
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Soluții complete pentru sănătatea gingiilor și a osului alveolar
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {parodontalServices.map((service, index) => (
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

      {/* About Periodontics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-heading">
              Ce este parodontologia?
            </h2>
            <div className="prose prose-lg max-w-none text-text-custom space-y-4">
              <p>
                Parodontologia este specialitatea stomatologiei care se ocupă cu diagnosticul, prevenția și tratamentul bolilor parodontale - afecțiuni care atacă gingiile, ligamentul parodontal și osul alveolar care susține dinții.
              </p>
              <p>
                <strong>Boala parodontală</strong> este o infecție bacteriană cronică care, netratată, duce la distrugerea progresivă a țesuturilor de susținere ale dinților și, în final, la pierderea lor. Este extrem de răspândită - peste 50% dintre adulți prezintă o formă de boală parodontală.
              </p>
              <p>
                La Medstom, tratamentul parodontal include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground text-base [&_a]:text-primary [&_a]:hover:underline">
                <li>Evaluare parodontală detaliată cu măsurarea buzunarelor</li>
                <li>Detartraj subgingival cu ultrasunete</li>
                <li>Chiuretaj și netezire radiculară (scaling și root planing)</li>
                <li>Chirurgie parodontală cu lambou pentru cazuri avansate</li>
                <li>Regenerare osoasă ghidată cu grefe și membrane</li>
                <li>Program personalizat de menținere parodontală</li>
              </ul>
              <p>
                <strong>Important:</strong> Boala parodontală este legată de probleme de sănătate generală - diabet, boli cardiovasculare, AVC. Tratamentul parodontal nu doar salvează dinții, dar contribuie și la sănătatea generală.
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
              Beneficiile tratamentului parodontal
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Salvează dinții și îmbunătățește sănătatea generală
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
              Cum decurge tratamentul parodontal?
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Abordare pas cu pas pentru rezultate optime
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {treatmentSteps.map((step, index) => (
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
              De ce tratament parodontal la Medstom?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-5xl mb-4">🔬</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Diagnostic precis</h3>
                <p className="opacity-90 text-white">Evaluare completă cu sondaj parodontal și radiografii</p>
              </div>
              <div>
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Tratament personalizat</h3>
                <p className="opacity-90 text-white">Plan adaptat severității bolii și nevoilor tale</p>
              </div>
              <div>
                <div className="text-5xl mb-4">📅</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Menținere pe termen lung</h3>
                <p className="opacity-90 text-white">Program de urmărire pentru prevenirea recidivelor</p>
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
              Salvează-ți dinții înainte să fie prea târziu
            </h2>
            <p className="text-xl mb-8">
              Boala parodontală tratată timpuriu poate fi oprită. Programează o evaluare astăzi!
            </p>
            <CTAWithTrust
              primaryButton={{ text: "Evaluare parodontală", href: "/contact" }}
              secondaryButton={{ text: "0333 630 005", href: "tel:+40333630005" }}
              microcopy="✓ Consultație gratuită · Tratament laser · Plan personalizat"
              badges={[
                { icon: "🔬", text: "Tratament cu laser diodă" },
                { icon: "🦷", text: "Salvăm dinții" },
                { icon: "📊", text: "Monitoring parodontal" },
                { icon: "💚", text: "Fără durere" }
              ]}
            />
          </div>
        </div>
      </section>
      </main>

      {/* Related Services */}
      <RelatedServices services={relatedServices['parodontologie']} />

      <Footer />
    </div>
  );
};

export default Parodontologie;
