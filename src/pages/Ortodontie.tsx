import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import ortodontieHero from "@/assets/service-ortodontie.jpg";
import { useServiceMeta } from "@/hooks/use-service-meta";
import { useSEOSchema } from "@/hooks/use-seo-schema";
import { useLocalBusinessSchema } from "@/hooks/use-local-business-schema";
import RelatedServices from "@/components/RelatedServices";
import { relatedServices } from "@/config/related-content";
import { CTAWithTrust } from "@/components/CTAWithTrust";
import { HeroContactBox } from "@/components/HeroContactBox";

const Ortodontie = () => {
  const pricingData = [
    { service: "Aparat fix brackeți metalici arcadă", price: "1800 lei" },
    { service: "Aparat fix brackeți safir arcadă", price: "2800 lei" },
    { service: "Aparat Spark Advanced (ambele arcade)", price: "22500 lei" }
  ];

  const orthodonticTreatments = [
    {
      title: "Aparate fixe metalice",
      description: "Soluția clasică și eficientă pentru corectarea malpoziției dentare",
      icon: "🦷"
    },
    {
      title: "Aparate fixe estetice",
      description: "Bracket-uri din ceramică sau safir, mult mai discrete",
      icon: "💎"
    },
    {
      title: "Alignere transparente (Invisalign)",
      description: "Gutiere transparente removibile pentru corectare invizibilă",
      icon: "✨"
    },
    {
      title: "Aparate mobile",
      description: "Pentru cazuri simple sau ca menținere după tratament fix",
      icon: "🔄"
    },
    {
      title: "Ortodonție interceptivă",
      description: "Tratamente preventive la copii pentru ghidarea creșterii",
      icon: "👶"
    },
    {
      title: "Retenție ortodontică",
      description: "Menținerea rezultatelor obținute după tratamentul ortodontic",
      icon: "🔒"
    }
  ];

  const benefits = [
    {
      title: "Zâmbet perfect aliniat",
      description: "Dinți drepți și o ocluzie corectă pentru un zâmbet de care să fii mândru"
    },
    {
      title: "Sănătate orală îmbunătățită",
      description: "Dinții drepți sunt mai ușor de curățat, reducând riscul de carii și boli parodontale"
    },
    {
      title: "Funcție optimă",
      description: "Îmbunătățim mestecatul, vorbitul și prevenirea uzurii anormale a dinților"
    },
    {
      title: "Stimă de sine crescută",
      description: "Un zâmbet frumos îți crește încrederea în tine în viața personală și profesională"
    }
  ];

  const treatmentSteps = [
    {
      number: "01",
      title: "Consultație și diagnostic",
      description: "Evaluare completă cu fotografii, amprente digitale și <Link to=\"/servicii/radiologie-dentara-piatra-neamt\" className=\"text-primary hover:underline font-medium\">radiografii panoramice și cefalometrice</Link>"
    },
    {
      number: "02",
      title: "Plan de tratament personalizat",
      description: "Analizăm cazul și stabilim tipul de aparat optim și durata estimată a tratamentului"
    },
    {
      number: "03",
      title: "Pregătire",
      description: "<Link to=\"/servicii/profilaxie-dentara-piatra-neamt\" className=\"text-primary hover:underline font-medium\">Igienizare profesională</Link> și tratarea eventualelor carii înainte de aplicarea aparatului"
    },
    {
      number: "04",
      title: "Aplicarea aparatului",
      description: "Montarea bracket-urilor sau livrarea primului set de alignere transparente"
    },
    {
      number: "05",
      title: "Controale regulate",
      description: "Verificări lunare pentru ajustări și monitorizarea progresului tratamentului"
    },
    {
      number: "06",
      title: "Finalizare și retenție",
      description: "Îndepărtăm aparatul și aplicăm dispozitive de menținere a rezultatelor"
    }
  ];

  const ageGroups = [
    {
      title: "Copii (7-12 ani)",
      description: "Ortodonție interceptivă pentru ghidarea creșterii și prevenirea problemelor severe",
      points: [
        "Corectarea obiceiurilor nocive (suptul degetului)",
        "Expansiune palatină pentru spațiu suficient",
        "Corectarea musculaturii bucale",
        "Prevenirea problemelor complexe"
      ]
    },
    {
      title: "Adolescenți (12-18 ani)",
      description: "Perioada optimă pentru tratament ortodontic complet cu aparate fixe sau alignere",
      points: [
        "Creștere în curs - rezultate mai rapide",
        "Diversitate de opțiuni (fixe, estetice, invisibile)",
        "Corecție completă a malpoziției",
        "Impact pozitiv asupra stimei de sine"
      ]
    },
    {
      title: "Adulți (18+ ani)",
      description: "Nu este niciodată prea târziu pentru un zâmbet perfect aliniat",
      points: [
        "Aparate estetice discrete",
        "Alignere transparente Invisalign",
        "Tratament ortodontic pre-protetic",
        "Rezultate excelente la orice vârstă"
      ]
    }
  ];

  const faqs = [
    {
      question: "La ce vârstă trebuie să încep tratamentul ortodontic?",
      answer: "Prima consultație ortodontică se recomandă la 7 ani pentru depistarea precoce a problemelor. Tratamentul activ începe de obicei la 11-13 ani când majoritatea dinților permanenți au erupt. Adulții pot beneficia de ortodonție la orice vârstă."
    },
    {
      question: "Cât durează un tratament ortodontic?",
      answer: "Durata medie este 18-24 luni pentru cazuri medii. Cazurile simple pot fi rezolvate în 12-15 luni, în timp ce cazurile complexe pot necesita 30-36 luni. Depinde de severitatea malpoziției și de colaborarea pacientului."
    },
    {
      question: "Este dureros tratamentul cu aparat dentar?",
      answer: "Nu este dureros, dar în primele 3-5 zile după aplicare sau după ajustări, poți simți presiune și disconfort ușor. Acest disconfort dispare rapid și se gestionează cu analgezice simple dacă este necesar."
    },
    {
      question: "Care este diferența între aparatul fix și Invisalign?",
      answer: "Aparatul fix (bracket-uri și sârme) este mai eficient pentru cazuri complexe și nu depinde de colaborarea pacientului. Invisalign folosește gutiere transparente removibile, este invizibil și mai confortabil, dar necesită disciplină (20-22 ore/zi) și este mai scump."
    },
    {
      question: "Pot mânca normal cu aparat dentar?",
      answer: "Da, dar trebuie să eviți alimentele foarte tari (nuci, ghețari) care pot desprinde bracket-urile și alimentele lipicioase (gumă de mestecat, caramele) care se lipesc de aparat. Cu Invisalign poți mânca orice pentru că îndepărtezi gutierele."
    },
    {
      question: "Ce se întâmplă după ce se scoate aparatul?",
      answer: "Se aplică dispozitive de retenție (fire fixe pe dinții din spate sau gutiere transparente de noapte) pentru a menține rezultatele. Dinții au tendința naturală de a reveni la poziția inițială, de aceea retenția este esențială și se poartă pe termen lung."
    },
    {
      question: "Cât costă un tratament ortodontic?",
      answer: "Costul variază în funcție de complexitatea cazului și tipul de aparat ales. La Medstom oferim consultație gratuită cu plan de tratament detaliat și opțiuni de plată în rate. Investiția într-un zâmbet perfect se amortizează pe toată viața."
    }
  ];

  const ServiceMeta = useServiceMeta({
    title: "Ortodonție Piatra Neamț - Aparat Dentar Fix și Invisalign | Medstom",
    description: "Aparate dentare fixe, estetice și alignere transparente pentru copii, adolescenți și adulți în Piatra Neamț. Consultație ortodontică gratuită. ☎ 0333 630 005",
    image: "https://storage.googleapis.com/gpt-engineer-file-uploads/4JwdkPfG3Mgryfl0Byt7yN5KIf43/social-images/social-1763674029142-stomatologie piatra neamt - echipa medstom.webp",
    path: "/servicii/ortodontie-piatra-neamt"
  });

  const MedicalProcedureSchema = useSEOSchema({
    type: 'MedicalProcedure',
    canonical: '/servicii/ortodontie-piatra-neamt',
    medicalProcedure: {
      name: 'Ortodonție',
      description: 'Aparate dentare fixe, estetice și alignere transparente pentru un zâmbet perfect aliniat. Ortodonție pentru copii, adolescenți și adulți.',
      procedureType: 'Orthodontic Treatment'
    }
  });

  const FAQSchema = useSEOSchema({
    type: 'FAQPage',
    canonical: '/servicii/ortodontie-piatra-neamt',
    faqs: faqs
  });

  const LocalBusinessSchema = useLocalBusinessSchema({
    serviceName: "Ortodonție",
    serviceDescription: "Aparate dentare fixe, estetice și alignere transparente pentru copii, adolescenți și adulți în Piatra Neamț.",
    path: "/servicii/ortodontie-piatra-neamt",
    medicalSpecialty: "Ortodonție"
  });

  return (
    <div className="min-h-screen flex flex-col">
      {ServiceMeta}
      {MedicalProcedureSchema}
      {FAQSchema}
      {LocalBusinessSchema}
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ortodontieHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Ortodonție în Piatra Neamț
            </h1>
            <p className="text-xl mb-8 text-white">
              Aparate dentare fixe, estetice și alignere transparente pentru un zâmbet perfect aliniat. Ortodonție pentru copii, adolescenți și adulți.
            </p>
            <HeroContactBox
              microcopy="✓ Evaluare gratuită · Simulare digitală · Plată în rate"
            />
          </div>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Stomatologie Piatra Neamț", href: "/" },
          { label: "Servicii", href: "/servicii" },
          { label: "Ortodonție" }
        ]}
      />

      {/* Pricing Table */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-heading">
              Prețuri ortodonție - aparate dentare
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
              *Prețurile includ o arcadă. Pentru tratament complet consultați cabinetul
            </p>
          </div>
        </div>
      </section>

      {/* Orthodontic Treatments */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Tipuri de tratamente ortodontice
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Soluții moderne pentru fiecare nevoie și buget
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {orthodonticTreatments.map((treatment, index) => (
              <Card key={index} className="border-primary/20">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{treatment.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-heading">{treatment.title}</h3>
                  <p className="text-text-custom">{treatment.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What is Orthodontics */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-heading">
              Ce este ortodonția?
            </h2>
            <div className="prose prose-lg max-w-none text-text-custom space-y-4">
               <p>
                 Ortodonția este specialitatea stomatologiei care se ocupă cu diagnosticul, prevenția și tratamentul anomaliilor dento-maxilare - adică poziționarea incorectă a dinților și relațiile anormale între maxilare. Tratamentul ortodontic îmbunătățește și <Link to="/servicii/estetica-dentara" className="text-primary hover:underline font-medium">estetica zâmbetului</Link>.
              </p>
              <p>
                <strong>Când este nevoie de tratament ortodontic?</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground text-base [&_a]:text-primary [&_a]:hover:underline">
                <li>Dinți înghețuiți sau suprapuși (aglomerație dentară)</li>
                <li>Spații mari între dinți (diasteme)</li>
                <li>Ocluzie incorectă - dinții superiori acoperă excesiv pe cei inferiori</li>
                <li>Prognatism - maxilarul inferior depășește pe cel superior</li>
                <li>Retrognatism - maxilarul inferior este prea retras</li>
                <li>Ocluzie încrucișată - dinții se închid incorect lateral</li>
                <li>Dinți impactați sau incluși</li>
              </ul>
              <p>
                La Medstom avem specialiști ortodonți cu experiență în tratarea cazurilor de la simple la complexe, pentru toate grupele de vârstă.
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
              Beneficiile tratamentului ortodontic
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Mai mult decât un zâmbet frumos
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
              Cum decurge tratamentul ortodontic?
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Pași clari către zâmbetul perfect
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

      {/* Age Groups */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Ortodonție pentru toate vârstele
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Fiecare vârstă are particularitățile sale
            </p>
          </div>
          <div className="max-w-6xl mx-auto space-y-6">
            {ageGroups.map((group, index) => (
              <Card key={index} className="border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-3 text-heading">{group.title}</h3>
                  <p className="text-lg text-text-custom mb-4">{group.description}</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {group.points.map((point, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1 mr-3" />
                        <span className="text-text-custom">{point}</span>
                      </div>
                    ))}
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
              De ce ortodonție la Medstom?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-5xl mb-4">👨‍⚕️</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Ortodonți specialiști</h3>
                <p className="opacity-90 text-white">Echipă dedicată cu formare avansată în ortodonție</p>
              </div>
              <div>
                <div className="text-5xl mb-4">💻</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Tehnologie digitală</h3>
                <p className="opacity-90 text-white">Scanare 3D și planificare digitală a tratamentului</p>
              </div>
              <div>
                <div className="text-5xl mb-4">💳</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Plată în rate</h3>
                <p className="opacity-90 text-white">Opțiuni flexibile de plată pentru orice buget</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices services={relatedServices['ortodontie']} />

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
              Începe transformarea zâmbetului tău
            </h2>
            <p className="text-xl mb-8">
              Consultație ortodontică gratuită cu plan de tratament personalizat
            </p>
            <CTAWithTrust
              primaryButton={{ text: "Programare online", href: "/contact" }}
              secondaryButton={{ text: "0333 630 005", href: "tel:+40333630005" }}
              microcopy="✓ Evaluare gratuită · Simulare digitală · Plată în rate"
              badges={[
                { icon: "😊", text: "Ortodont specialist" },
                { icon: "📸", text: "Scanare digitală 3D" },
                { icon: "👨‍👩‍👧", text: "Soluții pt. adulți & copii" },
                { icon: "💳", text: "Rate flexibile" }
              ]}
            />
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
};

export default Ortodontie;