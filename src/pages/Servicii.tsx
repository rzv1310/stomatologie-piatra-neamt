import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useSEOSchema } from "@/hooks/use-seo-schema";
import profilaxieImg from "@/assets/service-profilaxie.jpg";
import esteticaImg from "@/assets/service-estetica.jpg";
import endodontieImg from "@/assets/service-endodontie.jpg";
import proteticaImg from "@/assets/service-protetica.jpg";
import implantImg from "@/assets/service-implant.jpg";
import chirurgieImg from "@/assets/service-chirurgie.jpg";
import parodontologieImg from "@/assets/service-parodontologie.jpg";
import ortodontieImg from "@/assets/service-ortodontie.jpg";
import copiiImg from "@/assets/service-copii.jpg";
import radiologieImg from "@/assets/cbct-green-x-radiologie.jpg";
import urgenteImg from "@/assets/service-urgente.jpg";
import stomatologieGeneralaImg from "@/assets/service-stomatologie-generala.jpg";

const Servicii = () => {
  const faqs = [
    {
      question: "De ce este importantă profilaxia regulată?",
      answer: "Profilaxia previne bolile dentare și reduce costurile viitoare. Controalele regulate detectează problemele în stadii incipiente când sunt mai ușor de tratat."
    },
    {
      question: "Care este diferența între fațete și coroane estetice?",
      answer: "Fațetele acoperă doar fața vizibilă a dintelui și necesită șlefuire minimă, în timp ce coroanele înconjoară întregul dinte și sunt indicate când acesta este deteriorat semnificativ."
    },
    {
      question: "Cum știu dacă am o carie care necesită tratament?",
      answer: "Semnele includ sensibilitate la rece/cald/dulce, durere la mestec sau pete vizibile pe dinți. La consultație putem detecta cariile chiar și în stadii timpurii prin examinare și radiografii."
    },
    {
      question: "Când este necesar tratamentul de canal?",
      answer: "Când nervul dintelui este inflamat sau infectat din cauza cariei profunde, traumatismelor sau fisurilor. Tratamentul salvează dintele care altfel ar trebui extras."
    },
    {
      question: "Ce tipuri de proteze dentare există?",
      answer: "Avem proteze fixe (coroane, punți) și proteze mobile (totale sau parțiale, scheletate). Alegerea depinde de câți dinți lipsesc și de starea dinților rămași."
    },
    {
      question: "Cât durează vindecarea după inserarea unui implant?",
      answer: "Osteointegrarea (fuziunea implantului cu osul) durează 2-6 luni, dar în majoritatea cazurilor ofertim dinți provizorii imediat sau în 24-48 ore."
    },
    {
      question: "Extracția dintelui este singura soluție în chirurgie orală?",
      answer: "Nu! Chirurgia orală include și proceduri de salvare a dinților (rezecții apicale), pregătire pentru implanturi, îndepărtarea chisturilor și corectarea țesuturilor moi."
    },
    {
      question: "Ce este boala parodontală și cum se tratează?",
      answer: "Este inflamația gingiilor și a osului care susține dinții, cauzată de bacterii. Se tratează prin igienizare profesională profundă, chiuretaj și în cazuri severe, chirurgie parodontală."
    },
    {
      question: "Pot face ortodonție și ca adult?",
      answer: "Absolut! Nu există limită de vârstă pentru ortodonție. Adulții pot beneficia de aparate estetice sau alignere transparente pentru un tratament discret."
    },
    {
      question: "La ce vârstă trebuie adus copilul la dentist?",
      answer: "Prima vizită se recomandă la 1 an sau când erupe primul dinț. Controalele regulate de la vârstă fragedă previn problemele și ajută copilul să se obișnuiască cu dentistul."
    },
    {
      question: "De ce am nevoie de radiografie dentară?",
      answer: "Radiografiile detectează probleme invizibile cu ochiul liber: carii între dinți, infecții la rădăcină, probleme osoase, dinți incluși. Sunt esențiale pentru diagnostic precis."
    },
    {
      question: "Ce fac în caz de urgență stomatologică în afara programului?",
      answer: "Sunați la 0333 630 005. Avem servicii de urgență pentru dureri acute, traumatisme dentare, abcese și alte situații care necesită intervenție imediată."
    }
  ];

  const FAQSchema = useSEOSchema({
    type: 'FAQPage',
    canonical: '/servicii',
    faqs: faqs
  });

  const services = [
    {
      title: "Profilaxie și Igienizare",
      image: profilaxieImg,
      services: [
        "Consultație și plan de tratament",
        "Detartraj cu ultrasunete și periaj profesional",
        "Air-flow (prophy-jet)",
        "Sigilări dentare, Fluorizare",
        "Educație și consiliere în igiena orală"
      ],
      link: "/servicii/profilaxie"
    },
    {
      title: "Estetică Dentară",
      image: esteticaImg,
      services: [
        "Albire dentară profesională",
        "Fațete dentare (ceramică sau compozit)",
        "Coroane integral ceramice sau de zirconiu",
        "Bijuterii dentare",
        "Remodelare gingivală (gingivoplastie)"
      ],
      link: "/servicii/estetica-dentara"
    },
    {
      title: "Odontoterapie (Tratament Carii)",
      image: stomatologieGeneralaImg,
      services: [
        "Obturații (plombe) fizionomice (compozit)",
        "Inlay/Onlay/Overlay din ceramică sau compozit",
        "Restaurări complexe"
      ],
      link: "/servicii/tratament-carii"
    },
    {
      title: "Endodonție (Tratament de Canal)",
      image: endodontieImg,
      services: [
        "Tratament de canal la microscop",
        "Retratament endodontic",
        "Managementul urgențelor endodontice"
      ],
      link: "/servicii/endodontie-piatra-neamt"
    },
    {
      title: "Protetică Dentară",
      image: proteticaImg,
      services: [
        "Coroane și punți dentare (metal-ceramică, zirconiu)",
        "Proteze dentare mobile (totale sau parțiale)",
        "Proteze scheletate, fixe, hibride",
        "Lucrări pe implanturi"
      ],
      link: "/servicii/protetica-piatra-neamt"
    },
    {
      title: "Implantologie",
      image: implantImg,
      services: [
        "Inserare implant dentar",
        "Adiție de os",
        "Sinus lift",
        "Reabilitări complete pe implanturi (All-on-4, All-on-6)"
      ],
      link: "/servicii/implant-dentar"
    },
    {
      title: "Chirurgie Orală",
      image: chirurgieImg,
      services: [
        "Extracții dentare simple și complexe",
        "Molari de minte incluși",
        "Rezecții apicale, Chistectomii",
        "Frenectomie, Gingivectomie"
      ],
      link: "/servicii/chirurgie-orala"
    },
    {
      title: "Parodontologie",
      image: parodontologieImg,
      services: [
        "Tratamentul gingivitei și al bolii parodontale",
        "Chiuretaj subgingival în câmp deschis/închis",
        "Operații cu lambou",
        "Regenerare osoasă ghidată"
      ],
      link: "/servicii/parodontologie-piatra-neamt"
    },
    {
      title: "Ortodonție și Ortopedie Dento-Facială",
      image: ortodontieImg,
      services: [
        "Aparate dentare fixe (metalice, ceramice, safir)",
        "Aparate dentare mobile",
        "Invisalign / Spark / Gutieră de contenție",
        "Tratament ortodontic interceptiv la copii"
      ],
      link: "/servicii/ortodontie-piatra-neamt"
    },
    {
      title: "Stomatologie Copii Piatra Neamț (Pedodonție)",
      image: copiiImg,
      services: [
        "Tratamente specifice pentru copii",
        "Sigilări",
        "Controlul anxietății la copii",
        "Pulpotomii și pulpectomii la copii"
      ],
      link: "/servicii/stomatologie-copii-piatra-neamt"
    },
    {
      title: "Radiologie Dentară",
      image: radiologieImg,
      services: [
        "Radiografii retroalveolare",
        "Radiografii bitewing",
        "Radiografii panoramice (ORT)",
        "Tomografie Computerizată (CBCT)",
        "Imagistică digitală 3D"
      ],
      link: "/servicii/radiologie-dentara-piatra-neamt"
    },
    {
      title: "Urgențe Stomatologice",
      image: urgenteImg,
      services: [
        "Tratament urgențe dentare (abcese, traumatisme)",
        "Tratamentul aftelor bucale și al infecțiilor orale",
        "Diagnostic precoce al cancerului oral",
        "Consiliere și screening periodic"
      ],
      link: "/servicii/urgente"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {FAQSchema}
      <Navigation />
      <Breadcrumbs
        items={[
          { label: "Stomatologie Piatra Neamț", href: "/" },
          { label: "Servicii" }
        ]}
      />

      <main className="flex-1">
        {/* Hero */}
      <section className="bg-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-heading">
              Servicii stomatologice complete în Piatra Neamț
            </h1>
            <p className="text-xl text-text-custom">
              De la prevenție și igienă dentară până la reabilitări complexe pe implanturi - toate serviciile într-o singură clinică modernă
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-primary/20 hover:shadow-lg transition-shadow overflow-hidden relative group"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />
                <CardContent className="p-6 relative z-10">
                  <h2 className="text-2xl font-bold mb-4 text-white">{service.title}</h2>
                  <ul className="space-y-2 mb-6">
                    {service.services.map((item, idx) => (
                      <li key={idx} className="text-sm text-white/90 flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={service.link}>
                    <Button variant="outline" className="w-full bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                      Vezi Prețuri
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center text-heading">
              Întrebări frecvente despre serviciile noastre
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
      <section className="py-16 bg-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Ai nevoie de o consultație?
            </h2>
            <p className="text-xl mb-8 text-white">
              Programează-te acum și descoperă soluțiile personalizate pentru zâmbetul tău
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Programare online
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+40333630005">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-orange-500">
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

export default Servicii;
