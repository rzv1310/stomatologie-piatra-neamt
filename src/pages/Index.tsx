import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Phone, Clock, MapPin, Star, Users, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useCounter } from "@/hooks/use-counter";
import { useState, useEffect, useRef } from "react";
import teamHero from "@/assets/team-hero.webp";
import serviceImplant from "@/assets/service-implant.jpg";
import serviceEstetica from "@/assets/service-estetica.jpg";
import serviceOrtodontie from "@/assets/service-ortodontie.jpg";
import serviceCopii from "@/assets/service-copii.jpg";
import serviceRadiologie from "@/assets/cbct-green-x-radiologie.jpg";
import serviceEndodontie from "@/assets/service-endodontie.jpg";

const Index = () => {
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const yearsCount = useCounter(20, 5000, isStatsVisible);
  const patientsCount = useCounter(10000, 5000, isStatsVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const services = [
    {
      title: "Implant dentar",
      description: "Dinți ficși în 24h cu tehnologie digitală avansată",
      link: "/servicii/implant-dentar",
      image: serviceImplant
    },
    {
      title: "Estetică dentară",
      description: "Fațete ceramice și albire profesională pentru zâmbetul perfect",
      link: "/servicii/estetica-dentara",
      image: serviceEstetica
    },
    {
      title: "Ortodonție",
      description: "Aparate dentare fixe și Spark pentru alinierea dinților",
      link: "/servicii/ortodontie-piatra-neamt",
      image: serviceOrtodontie
    },
    {
      title: "Stomatologie copii",
      description: "Tratamente delicate pentru cei mici, în siguranță și confort",
      link: "/servicii/stomatologie-copii-piatra-neamt",
      image: serviceCopii
    },
    {
      title: "Radiologie Dentară",
      description: "Radiografii digitale și CT dentar pentru diagnosticare precisă",
      link: "/servicii/radiologie-dentara-piatra-neamt",
      image: serviceRadiologie
    },
    {
      title: "Endodonție sub microscop",
      description: "Tratamente de canal precise cu tehnologie avansată",
      link: "/servicii/endodontie-piatra-neamt",
      image: serviceEndodontie
    }
  ];

  const whyChooseUs = [
    "Scapi de grija \"Oare iese bine?\" - tratamentele tale sunt planificate digital.",
    "Nu mai pierzi timp și bani pe drumuri - Radiografii, CT dentar, planul și lucrările se rezolvă în același loc, într-un flux rapid, gândit pentru confortul tău.",
    "Ai rezultate rapide – în loc să aștepți săptămâni, în 24-48 de ore poți să mănânci și să zâmbești din nou fără jenă.",
    "Spui \"adio\" durerii - tehnologie de ultimă generație pentru tratamente fără durere.",
    "Știi mereu pe mâna cui este zâmbetul tău - ai acces la o echipă completă de specialiști și nu vei fi plimbat dintr-o parte în alta pentru fiecare problemă.",
    "La Medstom NU ești „doar încă un pacient\" - Ești sprijinit pas cu pas și vei avea claritate încă de la prima vizită!"
  ];

  const testimonials = [
    {
      name: "Nicolae Lazar",
      text: "Profesionalism şi seriozitate, lucrări în siguranţă, personal calificat şi drăguț. Am găsit în sfârşit un cabinet unde același medic execută toate lucrările de la anestezie până la implant dentar. RECOMAND!!!!!!",
      rating: 5
    },
    {
      name: "Irina",
      text: "Servicii PROFESIONALE ca în București la preturi mai mici ca în Iași! Cel mai bun anestezic, NU SIMȚI DUREREA. Am avut 3 săptămâni, aproape zilnic, lucrări la toate cariile! Recomand cu încredere!!!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-hero py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <img 
                src={teamHero} 
                alt="Echipa medicală Medstom - medici stomatologi Piatra Neamț" 
                className="rounded-2xl shadow-2xl w-full max-w-lg object-cover"
              />
            </div>
            <div className="text-center lg:text-left order-1 lg:order-2">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-heading">
                Stomatologie în Piatra Neamț pentru întreaga familie
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-text-custom">
                În clinica noastră avem o singură prioritate: <strong>Rezultatele!</strong><br />
                Nu promisiuni. REZULTATE.<br />
                Îți spunem exact ce ai nevoie. Nimic în plus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <a href="tel:+40333630005">
                  <Button size="lg" className="bg-accent text-accent-foreground text-lg px-8 hover:bg-accent">
                    <Phone className="mr-2 h-5 w-5" />
                    0333 630 005
                  </Button>
                </a>
              </div>
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-accent" />
                  <span>Luni-Vineri 09:00-19:00</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-accent" />
                  <span>Str. 1 Decembrie 1918 58A</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency CTA */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              URGENȚĂ STOMATOLOGICĂ ÎN PIATRA NEAMȚ
            </h2>
            <p className="text-xl mb-6 text-white">
              Durerea nu așteaptă. Nici noi.
            </p>
            <p className="text-lg mb-8 text-foreground">
              Abces dentar? Carie dureroasă? Nu poți dormi de 3 nopți?<br />
              În timp ce alte clinici îți dau programare peste 2 săptămâni, noi avem un singur răspuns:
            </p>
            <a href="tel:+40333630005">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Sună Acum pentru Urgențe
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              De ce să alegi cabinetul stomatologic Medstom din Piatra Neamț
            </h2>
            <p className="text-lg text-text-custom">
              Oamenii te judecă în primele 3 secunde. Și ghici ce văd prima dată?<br />
              <strong>Zâmbetul tău!</strong>
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="border-accent shadow-md">
                <CardContent className="p-6 flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-text-custom">{reason}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="tel:+40333630005">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                0333 630 005
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Servicii stomatologice
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Tratamente moderne complete, de la prevenție la reabilitări complexe
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link key={index} to={service.link}>
                <Card className="h-full hover:shadow-lg transition-shadow border-primary/20 hover:border-primary/40 overflow-hidden group relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                  <CardContent className="p-6 relative z-10">
                    <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                    <p className="text-white/90 mb-4">{service.description}</p>
                    <div className="flex items-center text-accent font-medium">
                      Află mai mult
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/servicii">
              <Button size="lg" className="bg-accent hover:bg-accent text-accent-foreground">
                Vezi toate serviciile
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/tarife">
              <Button size="lg" className="bg-white hover:bg-white border border-accent text-accent">
                Mergi la Prețuri
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              De ce facem asta?
            </h2>
            <div className="space-y-4 text-lg text-white">
              <p className="font-bold">
                Pentru că am investit +1 milion € în tehnologie, ca să lucrăm de 3x mai rapid.
              </p>
              <p className="font-bold text-white">
                Pentru că preferăm 1000 de pacienți fericiți, nu 100 captivi, care se întorc mereu cu aceleași probleme.
              </p>
              <p className="font-bold">
                Pentru că știm că ne vei trimite alți 10 pacienți când vei vedea rezultatele.
              </p>
            </div>
            <div className="mt-8 p-6 bg-card border-l-4 border-white rounded-lg">
              <p className="text-xl font-semibold">
                <span className="text-black">Majoritatea clinicilor îți repară dinții.</span> <br />
                <span className="text-accent">Noi îți reparăm viața!</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Părerea pacienților noștri contează
            </h2>
            <p className="text-lg text-text-custom">
              De-a lungul anilor, am avut onoarea să tratăm mii de pacienți
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-text-custom mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-heading">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">{yearsCount}+</div>
              <div className="text-sm opacity-90">ani de experiență</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{patientsCount.toLocaleString('ro-RO')}+</div>
              <div className="text-sm opacity-90">pacienți tratați</div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-2 text-primary-foreground">CT Dentar</h2>
              <div className="text-sm opacity-90">CBCT Vatech Green X16</div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-2 text-primary-foreground">Laborator</h2>
              <div className="text-sm opacity-90">de tehnică dentară digital</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Echipă de medici stomatologi cu experiență
            </h2>
            <p className="text-lg text-text-custom mb-8">
              15 specialiști cu formare în Europa și Emiratele Arabe Unite
            </p>
            <Link to="/despre">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Cunoaște echipa
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              Programări rapide – online sau telefonic
            </h2>
            <p className="text-xl mb-8 text-white">
              Dacă ai citit până aici și nu acționezi, peste 6 luni vei fi în același loc. Garantat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Programare online
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+40333630005">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Phone className="mr-2 h-5 w-5" />
                  0333 630 005
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Localizare clinică stomatologică în Piatra Neamț
            </h2>
            <p className="text-lg text-text-custom">
              Strada 1 Decembrie 1918 58A, Piatra Neamț 615200
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d38928.582512702225!2d26.384864!3d46.944676!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473555b4963f433b%3A0xef353338e857b1d2!2sImplant%20Dentar%20Piatra%20Neamt!5e1!3m2!1sro!2sro!4v1763672431638!5m2!1sro!2sro" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localizare Medstom Clinic Piatra Neamț"
              />
            </div>
            <div className="text-center mt-6">
              <a 
                href="https://maps.app.goo.gl/bdybD18DhPFw35fi7" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <MapPin className="mr-2 h-5 w-5" />
                  Deschide în Google Maps
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

export default Index;
