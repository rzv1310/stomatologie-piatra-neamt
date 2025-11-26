import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, ArrowRight, Phone, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import copiiHero from "@/assets/service-copii.jpg";
import { useServiceMeta } from "@/hooks/use-service-meta";
import { useSEOSchema } from "@/hooks/use-seo-schema";
import RelatedServices from "@/components/RelatedServices";
import { relatedServices } from "@/config/related-content";
import { CTAWithTrust } from "@/components/CTAWithTrust";

const StomatologieCopii = () => {
  const ServiceMeta = useServiceMeta({
    title: "Stomatologie Copii Piatra Neamț - Pedodonție | Medstom",
    description: "Pedodonție specializată în Piatra Neamț. Cabinet stomatologic pentru copii, tratamente nedureroase, preventie dentară pediatrică. ☎ 0333 630 005",
    image: "https://storage.googleapis.com/gpt-engineer-file-uploads/4JwdkPfG3Mgryfl0Byt7yN5KIf43/social-images/social-1763674029142-stomatologie piatra neamt - echipa medstom.webp",
    path: "/servicii/stomatologie-copii-piatra-neamt"
  });

  const pricingData = [
    { service: "Extracție dinte temporar mobil - fără anestezie", price: "100 lei" },
    { service: "Extracție dinte temporar mobil - cu anestezie", price: "150 lei" },
    { service: "Sigilare dinte permanent", price: "150 lei" },
    { service: "Obturație dinte temporar (compozit)", price: "100-200 lei" }
  ];

  const childrenServices = [
    {
      title: "Consultații preventive",
      description: "Controale regulate și educație pentru igienă orală de la cea mai fragedă vârstă",
      icon: "🔍"
    },
    {
      title: "Sigilări de șanțuri",
      description: "Protecție împotriva cariilor pe dinții permanenți nou eruați",
      icon: "🛡️"
    },
    {
       title: "Fluorizări",
       description: <>Tratamente preventive pentru întărirea smalțului și prevenirea cariilor, parte din <Link to="/servicii/profilaxie-dentara-piatra-neamt" className="text-primary hover:underline font-medium">profilaxie profesională</Link></>,
      icon: "💧"
    },
    {
      title: "Tratarea cariilor",
      description: <>Plombe delicate și nedureroase pentru <Link to="/servicii/tratament-carii-piatra-neamt" className="text-primary hover:underline font-medium">tratamentul cariilor</Link> la dinții de lapte și permanenți</>,
      icon: "🦷"
    },
    {
      title: "Extracții atraumatice",
      description: "Îndepărtarea dinților de lapte sau permanenți cu tehnici gentle",
      icon: "🌟"
    },
    {
      title: "Ortodonție interceptivă",
      description: "Corectarea precoce a problemelor de creștere și dezvoltare",
      icon: "🎯"
    }
  ];

  const benefits = [
    {
      title: "Fără teamă și frică",
      description: "Abordare prietenoasă și jucăușă pentru o experiență plăcută la dentist"
    },
    {
      title: "Prevenție eficientă",
      description: "Educația timpurie previne problemele dentare pe viață"
    },
    {
      title: "Dinți sănătoși",
      description: "Menținem dinții de lapte sănătoși până când cad natural"
    },
    {
      title: "Obiceiuri bune",
      description: "Învățăm copiii tehnici corecte de periaj și igienă orală"
    }
  ];

  const ageStages = [
    {
      age: "0-3 ani",
      title: "Bebeluși și copii mici",
      description: "Prima vizită la dentist",
      points: [
        "Prima vizită se recomandă la apariția primului dinte sau la 1 an",
        "Evaluarea creșterii și dezvoltării normale",
        "Sfaturi pentru alimentație și igienă orală",
        "Prevenirea cariilor de biberon",
        "Obiceiuri nocive (suptul degetului, suzeta)"
      ]
    },
    {
      age: "3-6 ani",
      title: "Preșcolari",
      description: "Perioada dinților de lapte",
      points: [
        "Controale regulate la 6 luni",
        "Învățarea periajului corect",
        "Tratarea cariilor pe dinți de lapte",
        "Fluorizări pentru prevenție",
        "Monitorizarea creșterii maxilarelor"
      ]
    },
    {
      age: "6-12 ani",
      title: "Școlari mici",
      description: "Perioada schimbării dinților",
      points: [
        "Sigilarea șanțurilor pe molarii permanenți",
        "Tratarea cariilor pe dinți permanenți",
        "Extracții de dinți de lapte la momentul potrivit",
        "Evaluare ortodontică",
        "Educație pentru igienă și alimentație sănătoasă"
      ]
    }
  ];

  const parentTips = [
    "Începeți periajul de la primul dinte - de 2 ori pe zi cu pastă cu fluor",
    "Controale la dentist din 6 în 6 luni pentru prevenție",
    "Evitați alimentele zaharoase între mese",
    "Nu folosiți biberonul cu lapte sau sucuri pe timpul nopții",
    "Renunțați la suzetă până la 3 ani",
    "Faceți din periajul dinților o activitate distractivă",
    "Fiți un model - copiii vă imită obiceiurile de igienă orală"
  ];

  const firstVisitSteps = [
    {
      number: "01",
      title: "Cunoaștere și adaptare",
      description: "Copilul explorează cabinetul, se joacă cu instrumentele și se obișnuiește cu mediul"
    },
    {
      number: "02",
      title: "Examinare delicată",
      description: "Verificăm dinții și gingiile într-o manieră prietenoasă și neinvazivă"
    },
    {
      number: "03",
      title: "Învățare prin joc",
      description: "Arătăm cum se periază corect dinții folosind o marionetă sau o jucărie"
    },
    {
      number: "04",
      title: "Răsplătire și încurajare",
      description: "Copilul primește laude, diplomă de curaj și o jucărie mică"
    }
  ];

  const faqs = [
    {
      question: "La ce vârstă trebuie să aduc copilul la prima vizită?",
      answer: (
        <>
          Primul control la dentist se recomandă la apariția primului dinte sau cel târziu la vârsta de 1 an. Această <Link to="/blog/prima-vizita-copil-dentist" className="text-primary hover:underline font-medium">prima vizită</Link> timpurie ajută copilul să se obișnuiască cu cabinetul dentar și permite depistarea precoce a problemelor.
        </>
      )
    },
    {
      question: "De ce sunt importanți dinții de lapte dacă vor cădea oricum?",
      answer: "Dinții de lapte au roluri esențiale: ajută la mestecatul corect al alimentelor, dezvoltarea vorbirii, mențin spațiul pentru dinții permanenți și contribuie la dezvoltarea normală a feței. Cariile netratate pe dinții de lapte pot afecta dinții permanenți care cresc dedesubt."
    },
    {
      question: "Copilul meu are frică de dentist. Ce pot face?",
      answer: "La Medstom folosim tehnici speciale de management comportamental pentru copii anxioși: tell-show-do (explicăm, arătăm, apoi facem), distragere prin joacă, întărire pozitivă. Vă rugăm să nu folosiți cuvinte ca 'durere', 'ac', 'freza' și să ne spuneți despre eventualele experiențe negative anterioare."
    },
    {
      question: "Ce sunt sigilările de șanțuri și când sunt necesare?",
      answer: "Sigilările sunt acoperiri protectoare aplicare pe suprafața de mestecat a molarilor permanenți pentru a preveni cariile. Se recomandă imediat după erupția molarilor permanenți (6-7 ani pentru primii molari, 11-13 ani pentru cei de-ai doilea molari)."
    },
    {
      question: "Cât de des trebuie să aducă copilul la dentist?",
      answer: "Recomandăm controale la fiecare 6 luni pentru copiii fără probleme dentare. Pentru copiii cu risc crescut de carii sau în tratament ortodontic, controalele pot fi mai frecvente (la 3-4 luni)."
    },
    {
      question: "Este sigură anestezia pentru copii?",
      answer: "Da, anestezia locală este foarte sigură pentru copii. Folosim doze adaptate vârstei și greutății copilului și tehnici speciale (anestezie topicală înainte de injecție) pentru a minimiza disconfortul. Pentru cazuri speciale, putem discuta despre sedare cu protoxid de azot."
    }
  ];

  const MedicalProcedureSchema = useSEOSchema({
    type: 'MedicalProcedure',
    canonical: '/servicii/stomatologie-copii-piatra-neamt',
    medicalProcedure: {
      name: 'Stomatologie pentru Copii (Pedodonție)',
      description: 'Pedodonție cu dragoste și răbdare. Transformăm vizita la dentist într-o aventură plăcută pentru cei mici. Prima vizită fără frică, zâmbete sănătoase pe viață.',
      procedureType: 'Pediatric Dentistry'
    }
  });

  const FAQSchema = useSEOSchema({
    type: 'FAQPage',
    canonical: '/servicii/stomatologie-copii-piatra-neamt',
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
          { label: "Stomatologie Copii" }
        ]}
      />

      <main className="flex-1">
        {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${copiiHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Stomatologie pentru Copii în Piatra Neamț
            </h1>
            <p className="text-xl mb-8 text-white">
              Pedodonție cu dragoste și răbdare. Transformăm vizita la dentist într-o aventură plăcută pentru cei mici. Prima vizită fără frică, zâmbete sănătoase pe viață.
            </p>
            <CTAWithTrust
              secondaryButton={{ text: "0333 630 005", href: "tel:+40333630005" }}
              microcopy="✓ Cabinet prietenos · Fără durere · Diplomă de curaj"
              badges={[
                { icon: "❤️", text: "Medic pedodont" },
                { icon: "🎮", text: "Experiență plăcută" },
                { icon: "🦷", text: "Prevenție de la 1 an" },
                { icon: "🎁", text: "Cadouri pentru copii" }
              ]}
              className="text-white"
            />
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-heading">
              Prețuri pedodonție - stomatologie copii
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
              *Prețurile sunt orientative. Prima consultație este gratuită
            </p>
          </div>
        </div>
      </section>

      {/* Children Services */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Servicii pentru copii
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Tratamente gentle și preventive pentru dinți sănătoși
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {childrenServices.map((service, index) => (
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

      {/* What is Pediatric Dentistry */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-heading">
              Ce este pedodontia (stomatologia pediatrică)?
            </h2>
            <div className="prose prose-lg max-w-none text-text-custom space-y-4">
              <p>
                Pedodontia este specialitatea stomatologiei dedicată sănătății orale a copiilor, de la naștere până în adolescență. Un pedodont nu este doar un dentist pentru copii - este un specialist în creștere și dezvoltare, psihologie infantilă și managementul comportamental.
              </p>
              <p>
                <strong>De ce este diferită stomatologia pentru copii?</strong>
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Copiii au dinți de lapte care necesită abordare specifică</li>
                <li>Psihologia copilului cere tehnici speciale de comunicare</li>
                <li>Creșterea și dezvoltarea necesită monitorizare atentă</li>
                <li>Prevenția este prioritatea principală</li>
                <li>Educația copilului și a părinților este esențială</li>
              </ul>
              <p>
                La Medstom, pedodontul nostru are experiență vastă în lucrul cu copii de toate vârstele și creează o atmosferă prietenoasă și relaxantă. Fiecare copil primește atenție personalizată și tratament adaptat vârstei și temperamentului său.
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
              De ce pedodonție la Medstom?
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Copilul tău merită cea mai bună îngrijire
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

      {/* Age Stages */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Îngrijire dentară pe etape de vârstă
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Fiecare vârstă are nevoile sale specifice
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-6">
            {ageStages.map((stage, index) => (
              <Card key={index} className="border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-accent text-white px-4 py-2 rounded-lg font-bold text-lg">
                      {stage.age}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-heading">{stage.title}</h3>
                      <p className="text-text-custom">{stage.description}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3 mt-4">
                    {stage.points.map((point, idx) => (
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

      {/* First Visit */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Cum decurge prima vizită?
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              O experiență plăcută și fără frică
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {firstVisitSteps.map((step, index) => (
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

      {/* Parent Tips */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-accent/10 border-l-4 border-accent p-8 rounded-lg">
              <div className="flex items-start space-x-4">
                <Heart className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-heading">
                    Sfaturi pentru părinți
                  </h2>
                  <p className="text-lg text-text-custom mb-4">
                    Rolul tău ca părinte este esențial în menținerea sănătății orale a copilului:
                  </p>
                  <ul className="space-y-3">
                    {parentTips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1 mr-3" />
                        <span className="text-text-custom">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              De ce copiii iubesc să vină la Medstom?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-5xl mb-4">🎈</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Atmosferă prietenoasă</h3>
                <p className="opacity-90 text-white">Cabinet colorat și jucării pentru o experiență plăcută</p>
              </div>
              <div>
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Răsplătim curajul</h3>
                <p className="opacity-90 text-white">Fiecare vizită vine cu diplomă și surprize</p>
              </div>
              <div>
                <div className="text-5xl mb-4">💙</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Pedodont cu experiență</h3>
                <p className="opacity-90 text-white">Specialist dedicat cu dragoste pentru copii</p>
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
              Prima vizită fără frică
            </h2>
            <p className="text-xl mb-8">
              Programează copilul tău pentru o experiență plăcută la dentist
            </p>
            <CTAWithTrust
              primaryButton={{ text: "Programare online", href: "/contact" }}
              secondaryButton={{ text: "0333 630 005", href: "tel:+40333630005" }}
              microcopy="✓ Cabinet prietenos · Fără durere · Diplomă de curaj"
              badges={[
                { icon: "❤️", text: "Medic pedodont" },
                { icon: "🎮", text: "Experiență plăcută" },
                { icon: "🦷", text: "Prevenție de la 1 an" },
                { icon: "🎁", text: "Cadouri pentru copii" }
              ]}
            />
          </div>
        </div>
      </section>

      <RelatedServices services={relatedServices['stomatologie-copii']} />
      </main>

      <Footer />
    </div>
  );
};

export default StomatologieCopii;