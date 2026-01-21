import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Award, Users, TrendingUp, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { useDynamicSEO } from "@/hooks/use-dynamic-seo";

// Team images
import drDolganiucInesa from "@/assets/team/dr-dolganiuc-inesa.webp?w=300&format=webp";
import drBratuDiana from "@/assets/team/dr-bratu-diana.webp?w=300&format=webp";
import drBoguleanVictoria from "@/assets/team/dr-bogulean-victoria.webp?w=300&format=webp";
import drIacomiAdelina from "@/assets/team/dr-iacomi-adelina.webp?w=300&format=webp";
import tehnicianDolganiucDenis from "@/assets/team/tehnician-dolganiuc-denis.webp?w=300&format=webp";
import tehnicianDascaluAndrei from "@/assets/team/tehnician-dascalu-andrei.webp?w=300&format=webp";
import tehnicianCioataIonela from "@/assets/team/tehnician-cioata-ionela.webp?w=300&format=webp";
import asistentBraneaGabi from "@/assets/team/asistent-branea-gabi.webp?w=300&format=webp";
import asistentNeguraSandra from "@/assets/team/asistent-negura-sandra.webp?w=300&format=webp";
import asistentMinacCorina from "@/assets/team/asistent-minac-corina.webp?w=300&format=webp";
import asistentTurnaCornelia from "@/assets/team/asistent-turna-cornelia.webp?w=300&format=webp";

const Despre = () => {
  const DynamicSEO = useDynamicSEO({
    title: "Despre Clinica Stomatologică MedStom Piatra Neamț | 20 ani experiență",
    description: "Clinica stomatologică MedStom Piatra Neamț - 20 ani de excelență, 15 specialiști dedicați, laborator propriu și tehnologie de ultimă generație.",
    path: "/despre"
  });

  const doctors = [
    {
      name: "Dr. Dolganiuc Inesa",
      specialty: "Medic stomatolog cu competențe în implantologie și protetică dentară",
      image: drDolganiucInesa
    },
    {
      name: "Dr. Iacomi Adelina",
      specialty: "Medic stomatolog specializat în implantologie și parodontologie",
      image: drIacomiAdelina
    },
    {
      name: "Dr. Bratu Diana Andreea",
      specialty: "Medic stomatolog specializat în endodonție",
      image: drBratuDiana
    },
    {
      name: "Dr. Bogulean Victoria",
      specialty: "Medic stomatolog specializat în ortodonție",
      image: drBoguleanVictoria
    }
  ];

  const technicians = [
    {
      name: "Dolganiuc Denis",
      specialty: "Tehnician dentar specializat în fațete dentare, lucrări zirconiu, porțelan, Exocad",
      image: tehnicianDolganiucDenis
    },
    {
      name: "Dascalu Andries Andrei",
      specialty: "Tehnician dentar specializat în lucrări provizorii, lucrări cu suport metalic",
      image: tehnicianDascaluAndrei
    },
    {
      name: "Cioata Ionela",
      specialty: "Tehnician dentar specializat în protetică mobilă, lucrări fixe cu suport pe implanturi",
      image: tehnicianCioataIonela
    }
  ];

  const assistants = [
    { name: "Branea Gabi", image: asistentBraneaGabi },
    { name: "Negura Sandra Anamaria", image: asistentNeguraSandra },
    { name: "Minac Corina", image: asistentMinacCorina },
    { name: "Turna Cornelia Elena", image: asistentTurnaCornelia }
  ];

  const values = [
    {
      icon: <Award className="h-12 w-12 text-accent" />,
      title: "Excelență",
      description: "20 de ani de experiență și inovație continuă în stomatologie"
    },
    {
      icon: <Users className="h-12 w-12 text-accent" />,
      title: "Echipă completă",
      description: "15 specialiști dedicați - medici, tehnicieni și asistenți"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-accent" />,
      title: "Formare continuă",
      description: "Perfecționări în Europa și Emiratele Arabe Unite"
    },
    {
      icon: <Target className="h-12 w-12 text-accent" />,
      title: "Rezultate garantate",
      description: "Nu promisiuni. REZULTATE. Zero durere, zero stres"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {DynamicSEO}
      <Navigation />
      <Breadcrumbs
        items={[
          { label: "Stomatologie Piatra Neamț", href: "/" },
          { label: "Despre noi" }
        ]}
      />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-accent py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                Despre Clinica de Stomatologie MedStom Piatra Neamț
              </h1>
              <p className="text-xl text-white italic">
                Suntem dedicați transformării zâmbetelor și vieților pacienților noștri
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-heading">20 de ani de excelență</h2>
              <div className="space-y-4 text-lg text-text-custom">
                <p>
                  Fondată în 2005 de Dr. Valeriu Dolganiuc, clinica stomatologică Medstom a fost printre primele clinici din Piatra Neamț care au introdus reabilitări totale prin sistemul <strong>Fast and Fixed by Bredent</strong> și implanturi subperiostale.
                </p>
                <p>
                  De-a lungul celor 20 de ani, am tratat peste 10.000 de pacienți și am investit constant în tehnologie de ultimă generație, echipament modern și formarea continuă a echipei noastre. Am depășit 1 milion de euro investiți în tehnologie pentru a oferi tratamente de 3x mai rapide și mai precise.
                </p>
                <p>
                  Astăzi, Medstom Clinic este lider regional în implantologie dentară, estetică dentară avansată și tratamente complexe, oferind pacienților soluții complete într-o singură locație.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Medici stomatologi</h2>
              <p className="text-lg text-white/90">
                Echipă de specialiști cu experiență internațională și formare continuă
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {doctors.map((doctor, index) => (
                <Card key={index} className="text-center border-primary/20 bg-white">
                  <CardContent className="p-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                      <img 
                        src={doctor.image} 
                        alt={doctor.name}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-heading">{doctor.name}</h3>
                    <p className="text-sm text-text-custom">{doctor.specialty}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technicians */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-heading">Tehnicieni dentari</h2>
              <p className="text-lg text-text-custom">
                Specialiști în fabricarea lucrărilor dentare de înaltă calitate
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {technicians.map((tech, index) => (
                <Card key={index} className="text-center border-primary/20">
                  <CardContent className="p-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                      <img 
                        src={tech.image} 
                        alt={tech.name}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-heading">{tech.name}</h3>
                    <p className="text-sm text-text-custom">{tech.specialty}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Assistants */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Asistenți medicali</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {assistants.map((assistant, index) => (
                <Card key={index} className="text-center border-primary/20 bg-white">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                      <img 
                        src={assistant.image} 
                        alt={assistant.name}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-heading font-medium">{assistant.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-heading">Valorile noastre</h2>
              <p className="text-lg text-text-custom">Ce ne face diferiți și de ce pacienții ne aleg</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">{value.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-heading">{value.title}</h3>
                    <p className="text-text-custom">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Difference Section */}
        <section className="py-20 bg-section-alt">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center text-heading">
                Diferența între MEDSTOM și restul?
              </h2>
              <p className="text-xl text-center text-text-custom mb-8">
                O armată de specialiști obsedați de rezultate perfecte, nu un singur medic care face totul mediocru.
              </p>
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-heading">CE PRIMEȘTI LA NOI:</h3>
                  <ul className="space-y-3 text-lg text-text-custom">
                    <li className="flex items-start">
                      <span className="text-accent mr-3">✓</span>
                      <span><strong>Echipă completă:</strong> medici, asistenți și tehnicieni dentari sub același acoperiș.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3">✓</span>
                      <span><strong>Expertiză în:</strong> implanturi dentare, coroane, fațete, ortodonție și chirurgie.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3">✓</span>
                      <span><strong>Soluții permanente,</strong> nu reparații temporare.</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-background rounded-lg">
                    <p className="text-lg font-semibold text-heading">
                      LA FINAL: Economisești timp, bani și frustrare. Rezolvi problema O SINGURĂ DATĂ, definitiv.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-heading">
                Facilități și tehnologie
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-heading">4 cabinete ultradotate</h3>
                    <p className="text-text-custom">
                      Echipate cu aparatură modernă și tehnologie implantologică digitală pentru tratamente precise și confortabile.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-heading">Laborator propriu</h3>
                    <p className="text-text-custom">
                      Laborator de tehnică dentară integrat - garantează proteze, coroane, fațete și lucrări pe implanturi, personalizate și realizate rapid.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-heading">Radiologie avansată</h3>
                    <p className="text-text-custom">
                      ORT, CBCT (tomografie dentară) și imagistică digitală intraorală pentru diagnostic precis.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-heading">Tehnologie CAD/CAM</h3>
                    <p className="text-text-custom">
                      Sistem digital pentru designul și fabricarea lucrărilor dentare cu precizie maximă.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-accent text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Vino să ne cunoaștem!
              </h2>
              <p className="text-xl mb-8 text-white">
                Programează o consultație și descoperă diferența unei echipe dedicate rezultatelor tale
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" variant="secondary">
                    Programare consultație
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

export default Despre;
