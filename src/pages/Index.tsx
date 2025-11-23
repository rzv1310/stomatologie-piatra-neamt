import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Phone, Clock, MapPin, Star, Users, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useCounter } from "@/hooks/use-counter";
import { useState, useEffect, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { useSEOSchema } from "@/hooks/use-seo-schema";
import { recentArticles } from "@/config/related-content";
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
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  const yearsCount = useCounter(20, 5000, isStatsVisible);
  const patientsCount = useCounter(10000, 5000, isStatsVisible);

  // FAQ data for schema
  const faqData = [
    { question: "De ce am nevoie de detartraj, dacă mă spăl zilnic pe dinți?", answer: "Periajul de acasă nu reușește să îndepărteze complet tartrul și placa bacteriană întărită; detartrajul cu ultrasunete curăță zonele greu accesibile și previne gingivita și parodontoza." },
    { question: "Cât de des este recomandat detartrajul?", answer: "În general, la 6-12 luni, în funcție de cât de repede se depune tartrul și de recomandarea medicului dentist." },
    { question: "Ce este tratamentul Air-flow și la ce mă ajută?", answer: "Air-flow folosește un jet de apă, aer și particule fine de pulbere pentru a curăța petele superficiale și placa moale, lăsând dinții mai curați și mai netezi." },
    { question: "Ce sunt sigilările dentare și de ce ar avea nevoie copilul meu de ele?", answer: "Sigilările sunt straturi subțiri de material aplicate pe suprafața măselelor pentru a împiedica resturile alimentare și bacteriile să se depună în șanțuri, reducând riscul de carii." },
    { question: "Ce sunt fațetele dentare și ce probleme pot corecta pentru mine?", answer: "Fațetele sunt foițe subțiri aplicate pe fața vizibilă a dinților, care pot corecta culoarea, forma, mici spații sau ușoare aliniamente inestetice." },
    { question: "Cum îmi dau seama dacă am o carie?", answer: "Uneori apar dureri la rece sau dulce, alteori nu ai niciun simptom; doar controlul periodic și radiografiile pot depista cariile ascunse." },
    { question: "Ce înseamnă tratamentul de canal pentru dintele meu?", answer: "Înseamnă curățarea, dezinfectarea și obturarea canalelor din rădăcina dintelui atunci când nervul este inflamat sau necrozat, pentru a salva dintele de la extracție." },
    { question: "Când am nevoie de o proteză dentară?", answer: "Când lipsesc mai mulți dinți și nu se pot înlocui cu punți sau implanturi, proteza dentară te ajută să mănânci și să zâmbești din nou." },
    { question: "De ce am nevoie de adiție de os înainte de implant?", answer: "Când osul este prea subțire sau prea puțin, adiția de os reconstruiește volumul necesar pentru a susține un implant stabil." },
    { question: "Când este absolut necesară extracția unui dinte?", answer: "Atunci când dintele este irecuperabil (cariată profund, fracturată, mobilă sever) și nu mai poate fi salvat prin alte tratamente." },
    { question: "Ce se consideră urgență dentară?", answer: "Durerea intensă, umflăturile, abcesele, hemoragiile sau traumatismele (dinți fracturați sau scoși din alveolă) sunt situații de urgență." },
    { question: "Ce este parodontoza și cum mă afectează?", answer: "Parodontoza este o boală a țesuturilor care susțin dintele (gingie și os), ducând la mobilitatea și, în timp, pierderea dinților dacă nu este tratată." }
  ];

  const FAQSchema = useSEOSchema({
    type: 'FAQPage',
    canonical: '/',
    faqs: faqData
  });

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

  useEffect(() => {
    if (!carouselApi) return;

    setSlideCount(carouselApi.scrollSnapList().length);
    setCurrentSlide(carouselApi.selectedScrollSnap());

    carouselApi.on("select", () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  const services = [
    {
      title: "Implant dentar",
      description: "Implanturi 'All on 4' si 'All on 6' , reabilitări orale full-arch",
      link: "/servicii/implant-dentar",
      image: serviceImplant,
      anchorText: "Detalii pentru dinti ficsi in 24 ore"
    },
    {
      title: "Estetică dentară",
      description: "Fațete ceramice și albire profesională pentru zâmbetul perfect",
      link: "/servicii/estetica-dentara",
      image: serviceEstetica,
      anchorText: "Estetică dentară pentru zâmbet strălucitor"
    },
    {
      title: "Ortodonție",
      description: "Aparate dentare fixe și Spark pentru alinierea perfectă a dinților",
      link: "/servicii/ortodontie-piatra-neamt",
      image: serviceOrtodontie,
      anchorText: "Vino la ortodont pentru dinți perfect aliniați"
    },
    {
      title: "Stomatologie copii",
      description: "Tratamente delicate pentru cei mici, în siguranță și confort",
      link: "/servicii/stomatologie-copii-piatra-neamt",
      image: serviceCopii,
      anchorText: "Pedodonție pentru tratamente fără frică"
    },
    {
      title: "Radiologie Dentară",
      description: "Radiografii digitale și CT Dentar pentru diagnosticare fără erori",
      link: "/servicii/radiologie-dentara-piatra-neamt",
      image: serviceRadiologie,
      anchorText: "Computer tomografie pentru diagnostic precis"
    },
    {
      title: "Endodonție sub microscop",
      description: "Tratăm și salvăm dintele fără durere",
      link: "/servicii/endodontie-piatra-neamt",
      image: serviceEndodontie,
      anchorText: "Tratamente canal pentru salvarea dintelui fără durere"
    }
  ];

  const whyChooseUs = [
    "Scapi de grija \"Oare iese bine?\" - tratamentele tale sunt planificate digital.",
    "Nu mai pierzi timp și bani pe drumuri - Radiografii, CT dentar, planul și lucrările se rezolvă în același loc, într-un flux rapid, gândit pentru confortul tău.",
    "Ai rezultate rapide - în loc să aștepți săptămâni, în 24-48 de ore poți să mănânci și să zâmbești din nou fără jenă.",
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
      {FAQSchema}
      <Navigation />

      <main className="flex-1">
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
                  <span>Strada Ana Ipătescu 9, Piatra Neamț 610120</span>
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
                      {service.anchorText || `Detalii ${service.title.toLowerCase()}`}
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
              <h2 className="text-[32px] lg:text-4xl font-bold mb-2 text-primary-foreground">CT Dentar</h2>
              <div className="text-sm opacity-90">CBCT Vatech Green X16</div>
            </div>
            <div>
              <h2 className="text-[32px] lg:text-4xl font-bold mb-2 text-primary-foreground">Laborator</h2>
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
              Cauți <em>'Dentist Piatra Neamț'</em> ?
            </h2>
            <p className="text-lg text-text-custom mb-8">
              La Medstom ai 15+ specialiști dedicați (medici, tehnicieni, asistenți), cu formare în UE și EAU
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
              Programări rapide - online sau telefonic
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
              Strada Ana Ipătescu 9, Piatra Neamț 610120
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

      {/* FAQs Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Întrebări frecvente
            </h2>
            <p className="text-lg text-text-custom">
              Răspundem pacienților noștri
            </p>
          </div>
          <Carousel setApi={setCarouselApi} className="max-w-5xl mx-auto">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-primary/20">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-heading">Detartraj cu ultrasunete și periaj profesional</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">De ce am nevoie de detartraj, dacă mă spăl zilnic pe dinți?</h3>
                        <p className="text-text-custom text-sm">Periajul de acasă nu reușește să îndepărteze complet tartrul și placa bacteriană întărită; detartrajul cu ultrasunete curăță zonele greu accesibile și previne gingivita și parodontoza.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Cât de des este recomandat detartrajul?</h3>
                        <p className="text-text-custom text-sm">În general, la 6-12 luni, în funcție de cât de repede se depune tartrul și de recomandarea medicului dentist.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Detartrajul doare sau zgârie dinții?</h3>
                        <p className="text-text-custom text-sm">Nu doare, poate fi doar ușor neplăcut; ultrasunetele sparg depunerile de tartru, nu smalțul dintelui.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-primary/20">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-heading">Air-flow (prophy-jet)</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Ce este tratamentul Air-flow și la ce mă ajută?</h3>
                        <p className="text-text-custom text-sm">Air-flow folosește un jet de apă, aer și particule fine de pulbere pentru a curăța petele superficiale și placa moale, lăsând dinții mai curați și mai netezi.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Air-flow înlocuiește detartrajul cu ultrasunete?</h3>
                        <p className="text-text-custom text-sm">Nu, Air-flow completează detartrajul; el nu îndepărtează tartrul dur, ci curăță și lustruiește suprafața dinților.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Air-flow albește dinții?</h3>
                        <p className="text-text-custom text-sm">Nu este un tratament de albire, dar poate face dinții să pară mai albi prin îndepărtarea petelor de cafea, ceai, vin sau tutun.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-primary/20">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-heading">Sigilări dentare</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Ce sunt sigilările dentare și de ce ar avea nevoie copilul meu de ele?</h3>
                        <p className="text-text-custom text-sm">Sigilările sunt straturi subțiri de material aplicate pe suprafața măselelor pentru a împiedica resturile alimentare și bacteriile să se depună în șanțuri, reducând riscul de carii.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">La ce vârstă se fac sigilările?</h3>
                        <p className="text-text-custom text-sm">De obicei, după erupția măselelor definitive (în jur de 6-7 ani și apoi 11-13 ani), dar medicul stabilește momentul ideal.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Sigilările dor sau necesită anestezie?</h3>
                        <p className="text-text-custom text-sm">Nu, sigilarea este o procedură non-invazivă, fără durere și fără freză, de obicei bine tolerată de copii.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-primary/20">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-heading">Fațete dentare</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Ce sunt fațetele dentare și ce probleme pot corecta pentru mine?</h3>
                        <p className="text-text-custom text-sm">Fațetele sunt foițe subțiri aplicate pe fața vizibilă a dinților, care pot corecta culoarea, forma, mici spații sau ușoare aliniamente inestetice.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Fațetele îmi strică dinții naturali?</h3>
                        <p className="text-text-custom text-sm">Este necesară o șlefuire minimă, controlată, a smalțului; medicul îți explică exact cât și dacă ești un bun candidat pentru fațete.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Cât timp rezistă fațetele dentare?</h3>
                        <p className="text-text-custom text-sm">Cu igienă bună și controale regulate, fațetele pot rezista mulți ani, însă durata depinde de obiceiurile tale (bruxism, fumat, alimentație).</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-primary/20">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-heading">Bijuterii dentare</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">O bijuterie dentară îmi poate strica smalțul?</h3>
                        <p className="text-text-custom text-sm">Aplicată corect, cu materiale stomatologice, bijuteria nu deteriorează smalțul și poate fi îndepărtată fără a lăsa urme.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Cât durează să-mi pun o bijuterie dentară?</h3>
                        <p className="text-text-custom text-sm">Procedura este rapidă, de obicei 15-20 de minute, nedureroasă și fără anestezie.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Dacă mă răzgândesc, pot să o scot?</h3>
                        <p className="text-text-custom text-sm">Da, medicul o poate îndepărta ușor și poate lustrui dintele pentru a reveni la aspectul inițial.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-primary/20">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-heading">Tratamentul cariilor</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Cum îmi dau seama dacă am o carie?</h3>
                        <p className="text-text-custom text-sm">Uneori apar dureri la rece sau dulce, alteori nu ai niciun simptom; doar controlul periodic și radiografiile pot depista cariile ascunse.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Ce se întâmplă dacă amân tratamentul unei carii?</h3>
                        <p className="text-text-custom text-sm">Caria avansează, ajunge la nerv, poate necesita tratament de canal sau chiar extracție, crescând costurile și timpul de tratament.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Tratamentul cariei doare?</h3>
                        <p className="text-text-custom text-sm">În majoritatea cazurilor, tratamentul se face cu anestezie locală și este confortabil, fără durere propriu-zisă.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-primary/20">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-heading">Plombe (obturații)</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Ce este o plombă dentară?</h3>
                        <p className="text-text-custom text-sm">Plomba este materialul cu care medicul reface dintele după ce a îndepărtat țesutul cariat, redându-i forma și funcția.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Cât timp rezistă o plombă?</h3>
                        <p className="text-text-custom text-sm">Durata depinde de dimensiune, poziție, material și modul în care muști, dar poate fi de la câțiva ani la peste 10 ani.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">După plombă pot mânca imediat?</h3>
                        <p className="text-text-custom text-sm">În cazul plombelor fotopolimerizabile poți mânca relativ repede, dar este recomandat să aștepți puțin și să eviți masticația intensă pe dintele tratat în primele ore.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-primary/20">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-heading">Tratament de canal (endodonție)</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Ce înseamnă tratamentul de canal pentru dintele meu?</h3>
                        <p className="text-text-custom text-sm">Înseamnă curățarea, dezinfectarea și obturarea canalelor din rădăcina dintelui atunci când nervul este inflamat sau necrozat, pentru a salva dintele de la extracție.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Tratamentul de canal doare?</h3>
                        <p className="text-text-custom text-sm">Se face sub anestezie, iar scopul lui este tocmai să elimine durerea; poți simți un disconfort ușor câteva zile după, dar acesta este temporar.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Câte ședințe sunt necesare pentru un tratament de canal?</h3>
                        <p className="text-text-custom text-sm">Depinde de complexitatea cazului; uneori este suficientă o ședință, alteori pot fi necesare 2-3 vizite.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-primary/20">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-heading">Proteze dentare</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Când am nevoie de o proteză dentară?</h3>
                        <p className="text-text-custom text-sm">Când lipsesc mai mulți dinți și nu se pot înlocui cu punți sau implanturi, proteza dentară te ajută să mănânci și să zâmbești din nou.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Cât durează până mă obișnuiesc cu proteza?</h3>
                        <p className="text-text-custom text-sm">Perioada de adaptare diferă de la o persoană la alta, dar în general câteva săptămâni; în acest timp pot fi necesare mici ajustări.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Cum îngrijesc corect o proteză dentară?</h3>
                        <p className="text-text-custom text-sm">Se curăță zilnic, separat de dinții naturali, cu perie și produse speciale pentru proteze, și se păstrează în mediu umed când nu este purtată.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-primary/20">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-heading">Adiție de os</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">De ce am nevoie de adiție de os înainte de implant?</h3>
                        <p className="text-text-custom text-sm">Când osul este prea subțire sau prea puțin, adiția de os reconstruiește volumul necesar pentru a susține un implant stabil.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Este dureroasă intervenția de adiție de os?</h3>
                        <p className="text-text-custom text-sm">Se efectuează sub anestezie locală, astfel încât pe moment nu simți durere; ulterior poți avea disconfort și ușoară umflătură, controlate cu medicația recomandată.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Cât durează vindecarea după adiția de os?</h3>
                        <p className="text-text-custom text-sm">În general, între câteva luni și 6-9 luni, în funcție de tipul de material folosit și zona tratată.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-primary/20">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-heading">Extracții dentare</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Când este absolut necesară extracția unui dinte?</h3>
                        <p className="text-text-custom text-sm">Atunci când dintele este irecuperabil (cariată profund, fracturată, mobilă sever) și nu mai poate fi salvat prin alte tratamente.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Extracția doare?</h3>
                        <p className="text-text-custom text-sm">Nu, se face sub anestezie locală; poți simți doar presiune, iar durerea de după se controlează cu medicamente prescrise de medic.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Ce nu am voie să fac după o extracție?</h3>
                        <p className="text-text-custom text-sm">În primele 24 de ore trebuie evitate fumatul, băuturile fierbinți, clătirea energică și efortul fizic intens, pentru a nu desprinde cheagul de sânge.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-primary/20">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-heading">Tratamentul gingivitei</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Cum îmi dau seama că am gingivită?</h3>
                        <p className="text-text-custom text-sm">Gingivita se manifestă prin gingii roșii, umflate, sensibile, care sângerează la periaj sau spontan.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Cum se tratează gingivita?</h3>
                        <p className="text-text-custom text-sm">Prin igienizare profesională (detartraj, periaj, eventual Air-flow), periaj corect acasă și folosirea mijloacelor auxiliare (ață, duș bucal, apă de gură).</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Gingivita poate reveni?</h3>
                        <p className="text-text-custom text-sm">Da, dacă igiena orală este necorespunzătoare; controalele regulate ajută la prevenirea recidivei.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-primary/20">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-heading">Aparate dentare</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">De la ce vârstă se poate pune aparat dentar?</h3>
                        <p className="text-text-custom text-sm">Aparatele mobile se pot folosi la copii, iar cele fixe de regulă după erupția majorității dinților permanenți; medicul ortodont stabilește momentul potrivit.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Doare purtarea aparatului dentar?</h3>
                        <p className="text-text-custom text-sm">Poți simți disconfort sau sensibilitate câteva zile după aplicare și activări, dar acestea se diminuează în timp.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Cât durează, în general, tratamentul ortodontic?</h3>
                        <p className="text-text-custom text-sm">De la aproximativ 12 luni până la 2-3 ani, în funcție de gravitatea cazului și de cooperarea pacientului.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-primary/20">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-heading">Invisalign</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Ce este Invisalign?</h3>
                        <p className="text-text-custom text-sm">Invisalign este un sistem de aliniatori transparenți, personalizați, care îndreaptă treptat dinții fără bracketurile metalice clasice.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Este Invisalign la fel de eficient ca aparatul dentar clasic?</h3>
                        <p className="text-text-custom text-sm">Pentru multe cazuri, da; totuși, doar ortodontul poate spune dacă malpoziția ta poate fi corectată suficient cu Invisalign.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Câte ore pe zi trebuie purtați aliniatorii Invisalign?</h3>
                        <p className="text-text-custom text-sm">De obicei 20-22 de ore pe zi, fiind îndepărtați doar pentru mese și periaj.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-primary/20">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-heading">Pedodonție (stomatologie copii)</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">De la ce vârstă ar trebui să duc copilul la dentist?</h3>
                        <p className="text-text-custom text-sm">Ideal, primul control se face la apariția primilor dinți sau cel târziu în jurul vârstei de 1 an.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">De ce trebuie tratați dinții de lapte, dacă oricum cad?</h3>
                        <p className="text-text-custom text-sm">Pentru că dinții de lapte cariați dau dureri, infecții și pot afecta dinții permanenți și dezvoltarea armonioasă a maxilarelor.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Copilului meu îi va fi frică și va simți durere?</h3>
                        <p className="text-text-custom text-sm">Se folosesc tehnici blânde de acomodare și, la nevoie, anestezie locală; scopul este ca vizita la dentist să fie o experiență cât mai plăcută.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-primary/20">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-heading">Radiografii panoramice (ORT)</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Ce este radiografia panoramică (ORT)?</h3>
                        <p className="text-text-custom text-sm">Este o imagine largă, 2D, a maxilarelor, dinților și articulațiilor, care ajută medicul să vadă structurile „din interior".</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Sunt radiațiile periculoase?</h3>
                        <p className="text-text-custom text-sm">Doza de radiații este redusă și se folosesc măsuri de protecție; radiografia se indică doar când este cu adevărat necesară.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">De ce am nevoie de panoramă înainte de tratament?</h3>
                        <p className="text-text-custom text-sm">Pentru a depista probleme ascunse (rădăcini, chisturi, dinți incluși) și pentru a planifica corect tratamentul.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-primary/20">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-heading">Tomografie Computerizată (CBCT)</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Ce este tomografia computerizată dentară (CBCT)?</h3>
                        <p className="text-text-custom text-sm">CBCT oferă imagini 3D detaliate ale dinților și oaselor maxilare, mult mai precise decât o radiografie clasică.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">De ce este necesară CBCT înainte de implant?</h3>
                        <p className="text-text-custom text-sm">Pentru a măsura cu exactitate grosimea și înălțimea osului, poziția nervilor și a sinusurilor, reducând riscurile intervenției.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">CBCT este dureroasă sau incomodă?</h3>
                        <p className="text-text-custom text-sm">Nu, nu doare; trebuie doar să stai nemișcat câteva secunde în timpul scanării.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-primary/20">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-heading">Tratamentul aftelor bucale</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">De ce apar aftele în gură?</h3>
                        <p className="text-text-custom text-sm">Cauzele pot fi multiple: mici traumatisme, stres, carențe nutritive sau factori imunologici; uneori nu se găsește o singură cauză clară.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Cum se tratează aftele bucale?</h3>
                        <p className="text-text-custom text-sm">Prin geluri și soluții locale care reduc durerea și inflamația, ajustarea factorilor favorizanți și, la nevoie, investigații suplimentare recomandate de medic.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Când trebuie să vin la dentist pentru afte?</h3>
                        <p className="text-text-custom text-sm">Dacă aftele sunt foarte dureroase, recidivează des sau nu se vindecă în 10-14 zile, este indicat un consult.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-primary/20">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-heading">Urgențe dentare</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Ce se consideră urgență dentară?</h3>
                        <p className="text-text-custom text-sm">Durerea intensă, umflăturile, abcesele, hemoragiile sau traumatismele (dinți fracturați sau scoși din alveolă) sunt situații de urgență.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Ce pot face acasă până ajung la dentist?</h3>
                        <p className="text-text-custom text-sm">Poți lua un analgezic uzual (dacă nu ai contraindicații) și poți aplica comprese reci extern; nu pune pe dinte medicamente sau alcool și nu încerca „leacuri" agresive.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Pot veni fără programare în caz de urgență?</h3>
                        <p className="text-text-custom text-sm">În caz de urgențe acute, clinicile au de obicei intervale dedicate; este ideal să suni înainte pentru a fi preluat cât mai rapid.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-primary/20">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-heading">Cancer oral - diagnostic precoce</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Ce semne în gură ar trebui să mă îngrijoreze?</h3>
                        <p className="text-text-custom text-sm">Leziuni care nu se vindecă, pete roșii sau albe persistente, noduli, sângerări, durere sau senzație de corp străin care durează mai mult de două săptămâni.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Ce înseamnă screening pentru cancerul oral?</h3>
                        <p className="text-text-custom text-sm">Este examinarea cavității orale de către medic, uneori cu ajutorul unor lumini speciale sau teste suplimentare, pentru a identifica leziuni suspecte cât mai devreme.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Cât de des ar trebui să fac un control pentru prevenție?</h3>
                        <p className="text-text-custom text-sm">De regulă, o dată pe an, iar dacă fumezi sau consumi frecvent alcool, controalele ar trebui să fie și mai regulate, la recomandarea medicului.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-primary/20">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-heading">Tratament parodontoză</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Ce este parodontoza și cum mă afectează?</h3>
                        <p className="text-text-custom text-sm">Parodontoza este o boală a țesuturilor care susțin dintele (gingie și os), ducând la mobilitatea și, în timp, pierderea dinților dacă nu este tratată.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Se poate vindeca parodontoza?</h3>
                        <p className="text-text-custom text-sm">Nu se „vindecă" complet, dar poate fi controlată; tratamentul reduce inflamația și încetinește sau oprește evoluția bolii.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-heading">Ce pot face eu ca pacient pentru a preveni sau controla parodontoza?</h3>
                        <p className="text-text-custom text-sm">Igienă riguroasă acasă, renunțarea la fumat, controale și igienizări profesionale regulate și respectarea indicațiilor medicului parodontolog.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-2 md:-left-12 bg-primary hover:bg-primary/90 text-white border-primary" />
            <CarouselNext className="right-2 md:-right-12 bg-primary hover:bg-primary/90 text-white border-primary" />
          </Carousel>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: slideCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => carouselApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blog Articles */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Ultimele articole de pe blog
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Informații utile despre tratamente dentare și sănătatea orală
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {recentArticles.map((article, index) => (
              <Link key={index} to={article.link}>
                <Card className="h-full hover:shadow-lg transition-shadow border-primary/20 hover:border-primary/40">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-heading line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-text-custom mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-accent font-medium">
                      {article.anchorText || 'Citește articolul'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/blog">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Vezi toate articolele
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
