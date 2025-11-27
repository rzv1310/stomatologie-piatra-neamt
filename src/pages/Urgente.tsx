import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Phone, AlertCircle, Clock, CheckCircle, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import urgenteHero from "@/assets/service-urgente.jpg";
import toothBrokenIcon from "@/assets/icon-tooth-broken.png";
import toothInfectionIcon from "@/assets/icon-tooth-infection.png";
import toothPainIcon from "@/assets/icon-tooth-pain.png";
import toothDamagedIcon from "@/assets/icon-tooth-damaged.png";
import bleedingIcon from "@/assets/icon-bleeding.png";
import surgeryIcon from "@/assets/icon-surgery.png";
import rapidResponseIcon from "@/assets/icon-rapid-response.png";
import equipmentIcon from "@/assets/icon-equipment.png";
import painManagementIcon from "@/assets/icon-pain-management.png";
import { useServiceMeta } from "@/hooks/use-service-meta";
import { useSEOSchema } from "@/hooks/use-seo-schema";
import RelatedServices from "@/components/RelatedServices";
import { relatedServices } from "@/config/related-content";
import { CTAWithTrust } from "@/components/CTAWithTrust";
import { HeroContactBox } from "@/components/HeroContactBox";

const Urgente = () => {
  const ServiceMeta = useServiceMeta({
    title: "Urgențe Stomatologice Piatra Neamț - Cabinet Deschis 24/7 | Medstom",
    description: "Urgențe stomatologice în Piatra Neamț. Tratăm dureri acute, abcese, traumatisme dentare. Program prelungit pentru urgențe. ☎ 0333 630 005",
    image: "https://storage.googleapis.com/gpt-engineer-file-uploads/4JwdkPfG3Mgryfl0Byt7yN5KIf43/social-images/social-1763674029142-stomatologie piatra neamt - echipa medstom.webp",
    path: "/servicii/urgente"
  });

  const pricingData = [
    { service: "Extracție dinte parodontotic", price: "100 lei" },
    { service: "Extracție monoradicular", price: "150 lei" },
    { service: "Extracție pluriradicular", price: "200-250 lei" },
    { service: "Extracție molar de minte", price: "300-400 lei" },
    { service: "Extracție rest radicular", price: "200 lei" }
  ];

  const emergencyTypes = [
    {
      title: "Durere acută de dinți",
      description: "Pulpită, abces dentar, dureri severe care te țin treaz noaptea",
      icon: <img src={toothPainIcon} alt="Durere de dinți" className="h-12 w-12" />,
      severity: "Urgent"
    },
    {
      title: "Traumatisme dentare",
      description: "Dinte spart, rupt, luxat sau complet ieșit din alveolă",
      icon: <img src={toothBrokenIcon} alt="Dinte fracturat" className="h-12 w-12" />,
      severity: "Foarte urgent"
    },
    {
      title: "Infecții și abcese",
      description: <>Umflături faciale, febră, infecții care se răspândesc, necesită <Link to="/servicii/chirurgie-orala-piatra-neamt" className="text-primary hover:underline font-medium">chirurgie orală</Link></>,
      icon: <img src={toothInfectionIcon} alt="Infecție dentară" className="h-12 w-12" />,
      severity: "Foarte urgent"
    },
    {
      title: "Hemoragii",
      description: "Sângerări persistente după extracții sau traumatisme",
      icon: <img src={bleedingIcon} alt="Sângerare" className="h-12 w-12" />,
      severity: "Urgent"
    },
    {
      title: "Plombe sau coroane căzute",
      description: "Restaurări pierdute care lasă dintele expus și sensibil",
      icon: <img src={toothDamagedIcon} alt="Dinte deteriorat" className="h-12 w-12" />,
      severity: "Mediu"
    },
    {
      title: "Complicații post-operatorii",
      description: "Dureri severe, umflături anormale după tratamente",
      icon: <img src={surgeryIcon} alt="Complicații chirurgicale" className="h-12 w-12" />,
      severity: "Urgent"
    }
  ];

  const immediateSteps = [
    {
      problem: "Dinte complet ieșit (avulsie)",
      steps: [
        "Găsiți dintele și țineți-l de coroană (partea de sus), NU de rădăcină",
        "Clătiți ușor cu apă (nu frecați sau curățați excesiv)",
        "Încercați să-l repoziționați în alveolă dacă e posibil",
        "Dacă nu puteți, păstrați-l în lapte sau salivă",
        "Ajungeți la dentist în maxim 30 minute - fiecare minut contează!"
      ]
    },
    {
      problem: "Durere acută de dinți",
       steps: [
         "Luați un analgezic (ibuprofen 400mg sau paracetamol)",
         "Clătiți gura cu apă călduță sărată",
         "Aplicați o compresă rece pe obraz dacă e umflat",
         "Evitați alimentele foarte calde, reci sau dulci",
         "Nu puneți aspirină direct pe gingie - arde țesuturile!",
         <>Sunați urgent pentru programare - poate fi nevoie de <Link to="/servicii/stomatologie-generala" className="text-primary hover:underline font-medium">tratament de canal</Link></>
       ]
    },
    {
      problem: "Dinte spart sau fracturat",
      steps: [
        "Păstrați fragmentele de dinte dacă le găsiți",
        "Clătiți gura cu apă călduță",
        "Aplicați compresă rece pentru umflătură",
        "Acoperiți marginile ascuțite cu ceară dentară sau gumă fără zahăr",
        "Evitați să mestecați pe acea parte",
        "Prezentați-vă la dentist în aceeași zi"
      ]
    },
    {
      problem: "Sângerare după extracție",
      steps: [
        "Mușcați ferm un tifon sau o compresă de tifon timp de 30 minute",
        "Stați cu capul ridicat (nu vă întindeți)",
        "Evitați să clătiți, să scuipați sau să folosiți pai",
        "Nu fumați și nu consumați alcool",
        "Dacă sângerarea continuă după 2 ore, sunați urgent",
        "Aplicați gheață pe obraz în exterior"
      ]
    }
  ];

  const whenToCall = [
    "Durere severă care nu răspunde la analgezice",
    "Umflătură facială care se extinde rapid",
    "Dificultăți la înghițire sau respirație",
    "Febră peste 38°C asociată cu probleme dentare",
    "Sângerare care nu se oprește după 2 ore",
    "Traumatism dentar cu dinți mobili sau deplasați",
    "Infecție vizibilă cu puroi sau miros neplăcut"
  ];

  const preventionTips = [
    {
      title: "Controale regulate",
      description: "Vizite la dentist din 6 în 6 luni previne urgențele"
    },
    {
      title: "Igienă corespunzătoare",
      description: "Periaj de 2 ori pe zi și ață dentară zilnic"
    },
    {
      title: "Protecție sportivă",
      description: "Folosiți proteze dentare (gutiere) la sporturi de contact"
    },
    {
      title: "Evitați alimente tari",
      description: "Nu mușcați ghețari, bomboane tari sau coajă de nuci cu dinții"
    }
  ];

  const faqs = [
    {
      question: "Ce fac dacă am durere de dinți noaptea?",
      answer: (
        <>
          Pentru durere acută nocturnă: luați un analgezic (ibuprofen 400mg), clătiți cu apă călduță sărată, stați cu capul ridicat pe 2 perne. Aplicați compresă rece pe obraz 15 minute. Sunați-ne dimineață pentru programare de urgență în aceeași zi. Dacă durerea persistă, poate fi necesară <Link to="/servicii/radiologie-dentara-piatra-neamt" className="text-primary hover:underline font-medium">radiografie CBCT</Link>.
        </>
      )
    },
    {
      question: "Cât costă o vizită de urgență?",
      answer: "Consultația de urgență are un tarif de consultație standard plus costul tratamentului necesar (analgezice, drenaj abces, pansament provizoriu, extracție de urgență etc). Vă vom informa despre costuri înainte de a începe tratamentul."
    },
    {
      question: "Primiți urgențe în weekend sau seara târziu?",
      answer: "În timpul programului nostru de lucru (Luni-Vineri 8:00-20:00), primim urgențe fără programare sau cu programare rapidă. Pentru urgențe în afara programului, sunați la 0333 630 005 și veți fi direcționat către serviciul de urgență."
    },
    {
      question: "Pot veni direct la cabinet fără să sun înainte?",
      answer: "Pentru urgențe severe (durere acută, traumatisme, infecții), vă puteți prezenta direct la cabinet în timpul programului. Totuși, recomandăm să sunați înainte pentru a ne anunța, astfel încât să vă putem primi imediat."
    },
    {
      question: "Ce analgezice pot lua pentru durerea de dinți?",
      answer: "Pentru adulți: Ibuprofen 400mg la 6-8 ore (maxim 1200mg/zi) sau Paracetamol 500mg la 6 ore. Pentru dureri severe, se pot combina (ibuprofen + paracetamol). Evitați aspirina direct pe gingie. Nu luați analgezice cu stomacul gol dacă aveți probleme gastrice."
    },
    {
      question: "Dacă mi-a căzut o plombă, este urgență?",
      answer: "Plomba căzută nu este urgență vitală, dar necesită tratament în câteva zile. Protejați dintele: evitați mestecatul pe acea parte, alimente foarte reci/calde, dulciuri. Acoperiți cavitatea cu ceară dentară din farmacie. Programați-vă în 2-3 zile pentru a evita fracturi sau sensibilitate crescută."
    }
  ];

  const MedicalProcedureSchema = useSEOSchema({
    type: 'MedicalProcedure',
    canonical: '/servicii/urgente',
    medicalProcedure: {
      name: 'Urgențe Stomatologice',
      description: 'Durerea de dinți nu așteaptă. Nici noi. Te primim rapid pentru urgențe stomatologice - dureri acute, traumatisme, infecții, abcese.',
      procedureType: 'Dental Emergency'
    }
  });

  const FAQSchema = useSEOSchema({
    type: 'FAQPage',
    canonical: '/servicii/urgente',
    faqs: faqs
  });

  return (
    <div className="min-h-screen flex flex-col">
      {ServiceMeta}
      {MedicalProcedureSchema}
      {FAQSchema}
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center pt-[30px] md:pt-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${urgenteHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center bg-accent px-4 py-2 rounded-full mb-4">
              <AlertCircle className="mr-2 h-5 w-5" />
              <span className="font-semibold">Urgențe Stomatologice</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Urgențe Dentare în Piatra Neamț
            </h1>
            <p className="text-xl mb-2 text-white">
              Durerea de dinți nu așteaptă. Nici noi.
            </p>
            <p className="text-xl mb-8 text-white">
              Te primim rapid pentru urgențe stomatologice - dureri acute, traumatisme, infecții, abcese.
            </p>
            <HeroContactBox
              title="Program urgențe"
              subtitle="Luni-Vineri: 8:00 - 20:00"
              microcopy="✓ Durere oprită imediat"
            />
          </div>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Stomatologie Piatra Neamț", href: "/" },
          { label: "Servicii", href: "/servicii" },
          { label: "Urgențe Stomatologice" }
        ]}
      />

      {/* Pricing Table */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-heading">
              Prețuri urgențe stomatologice
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
              *Consultația de urgență include evaluare și plan de tratament
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Types */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Tipuri de urgențe stomatologice
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Tratăm toate urgențele dentare rapid și eficient
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {emergencyTypes.map((emergency, index) => (
              <Card key={index} className="border-primary/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-4xl flex items-center justify-center w-12 h-12">{emergency.icon}</div>
                    <span className={`px-3 py-1 rounded-md text-sm font-semibold text-white transform -translate-y-1 ${
                      emergency.severity === 'Foarte urgent' 
                        ? 'bg-red-500 shadow-[0_8px_16px_-4px_rgba(239,68,68,0.5)]' 
                        : emergency.severity === 'Urgent'
                        ? 'bg-orange-500 shadow-[0_8px_16px_-4px_rgba(249,115,22,0.5)]'
                        : 'bg-amber-400 shadow-[0_8px_16px_-4px_rgba(251,191,36,0.5)]'
                    }`}>
                      {emergency.severity}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-heading">{emergency.title}</h3>
                  <p className="text-text-custom">{emergency.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Immediate Steps */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Prim ajutor dentar - Ce faci până ajungi la dentist?
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Acțiuni imediate pentru situații de urgență
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-6">
            {immediateSteps.map((item, index) => (
              <Card key={index} className="border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-heading flex items-center">
                    <AlertCircle className="h-6 w-6 text-accent mr-3" />
                    {item.problem}
                  </h3>
                  <ol className="space-y-3">
                    {item.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="text-text-custom">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* When to Call */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-accent/10 border-l-4 border-accent p-8 rounded-lg">
              <div className="flex items-start space-x-4">
                <Phone className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-heading">
                    Când să suni urgent?
                  </h2>
                  <p className="text-lg text-text-custom mb-4">
                    Contactează-ne imediat dacă experimentezi:
                  </p>
                  <ul className="space-y-3">
                    {whenToCall.map((situation, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1 mr-3" />
                        <span className="text-text-custom font-medium">{situation}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 p-4 bg-accent text-white rounded-lg">
                    <p className="font-bold text-lg mb-2">În caz de urgență severă:</p>
                    <a href="tel:+40333630005" className="text-2xl font-bold hover:underline">
                      0333 630 005
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Prevenirea urgențelor dentare
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Cea mai bună urgență este cea evitată
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {preventionTips.map((tip, index) => (
              <Card key={index} className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-heading">{tip.title}</h3>
                      <p className="text-text-custom">{tip.description}</p>
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
              De ce să alegi Medstom pentru urgențe?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="mb-4 flex justify-center">
                  <img src={rapidResponseIcon} alt="Răspuns rapid" className="h-16 w-16 brightness-0 invert" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Răspuns rapid</h3>
                <p className="opacity-90 text-white">Te primim în aceeași zi pentru urgențe</p>
              </div>
              <div>
                <div className="mb-4 flex justify-center">
                  <img src={equipmentIcon} alt="Echipament complet" className="h-16 w-16 brightness-0 invert" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Echipament complet</h3>
                <p className="opacity-90 text-white">Toate instrumentele pentru orice urgență</p>
              </div>
              <div>
                <div className="mb-4 flex justify-center">
                  <img src={painManagementIcon} alt="Management al durerii" className="h-16 w-16 brightness-0 invert" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Management al durerii</h3>
                <p className="opacity-90 text-white">Analgezii eficiente și tratament nedureros</p>
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
              Ai o urgență dentară?
            </h2>
            <p className="text-xl mb-8 text-white">
              Nu mai suporta durerea - sună acum și te primim rapid!
            </p>
            <CTAWithTrust
              primaryButton={{ 
                text: "Sună acum", 
                href: "tel:+40333630005",
                className: "bg-white hover:bg-white/90 text-accent font-bold",
                showIcon: true
              }}
              microcopy="✓ Primire rapidă · Luni-Vineri 8:00-20:00 · Durere oprită imediat"
              badges={[
                { icon: "", text: "Durerea oprită chiar la prima vizită" },
                { icon: "", text: "Încercăm programare în aceeași zi, fără liste de așteptare" },
                { icon: "", text: "Tratament blând, gândit pentru cei cu frică de dentist" },
                { icon: "", text: "Plan clar și costuri transparente, înainte să începem" }
              ]}
            />
          </div>
        </div>
      </section>

      <RelatedServices services={relatedServices['urgente']} />
      </main>

      <Footer />
    </div>
  );
};

export default Urgente;