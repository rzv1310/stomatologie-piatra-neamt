import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Servicii = () => {
  const services = [
    {
      title: "Profilaxie și Igienizare",
      icon: "🧼",
      services: [
        "Consultație și plan de tratament",
        "Detartraj cu ultrasunete și periaj profesional",
        "Air-flow (prophy-jet)",
        "Sigilări dentare",
        "Fluorizare",
        "Educație și consiliere în igiena orală"
      ],
      link: "/servicii/profilaxie"
    },
    {
      title: "Estetică Dentară",
      icon: "✨",
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
      title: "Odontoterapie (Tratamentul Cariilor)",
      icon: "🦷",
      services: [
        "Obturații (plombe) fizionomice (compozit)",
        "Inlay/Onlay/Overlay din ceramică sau compozit",
        "Restaurări complexe"
      ],
      link: "/servicii/endodontie-piatra-neamt"
    },
    {
      title: "Endodonție",
      icon: "🔬",
      services: [
        "Tratament de canal la microscop",
        "Retratament endodontic",
        "Managementul urgențelor endodontice"
      ],
      link: "/servicii/endodontie-piatra-neamt"
    },
    {
      title: "Protetică Dentară",
      icon: "👄",
      services: [
        "Coroane și punți dentare (metal-ceramică, zirconiu)",
        "Proteze dentare mobile (totale sau parțiale)",
        "Proteze scheletate",
        "Lucrări pe implanturi",
        "Proteze fixe și hibride"
      ],
      link: "/servicii/protetica-piatra-neamt"
    },
    {
      title: "Implantologie",
      icon: "🦴",
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
      icon: "🏥",
      services: [
        "Extracții dentare simple și complexe",
        "Molari de minte incluși",
        "Rezecții apicale",
        "Chistectomii",
        "Frenectomie",
        "Gingivectomie"
      ],
      link: "/servicii/chirurgie-orala"
    },
    {
      title: "Parodontologie",
      icon: "🌿",
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
      icon: "📐",
      services: [
        "Aparate dentare fixe (metalice, ceramice, safir)",
        "Aparate dentare mobile",
        "Invisalign sau alte tipuri de alignere transparente",
        "Gutieră de contenție",
        "Tratament ortodontic interceptiv la copii"
      ],
      link: "/servicii/ortodontie-piatra-neamt"
    },
    {
      title: "Stomatologie Copii (Pedodonție)",
      icon: "👶",
      services: [
        "Tratamente specifice pentru copii",
        "Sigilări",
        "Controlul anxietății la copii",
        "Pulpotomii și pulpectomii la copii"
      ],
      link: "/servicii/stomatologie-copii-piatra-neamt"
    },
    {
      title: "Radiologie Dentară și Imagistică",
      icon: "📸",
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
      icon: "🚨",
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
      <Navigation />

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
              <Card key={index} className="border-primary/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h2 className="text-2xl font-bold mb-4 text-heading">{service.title}</h2>
                  <ul className="space-y-2 mb-6">
                    {service.services.map((item, idx) => (
                      <li key={idx} className="text-sm text-text-custom flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={service.link}>
                    <Button variant="outline" className="w-full">
                      Află mai mult
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ai nevoie de o consultație?
            </h2>
            <p className="text-xl mb-8 opacity-90">
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
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  033 363 0005
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

export default Servicii;
