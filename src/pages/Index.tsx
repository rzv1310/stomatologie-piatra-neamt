import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Phone, Clock, MapPin, Star, Users, Award, TrendingUp, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useCounter } from "@/hooks/use-counter";
import { useState, useEffect, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { useSEOSchema } from "@/hooks/use-seo-schema";
import { useAggregateRatingSchema } from "@/hooks/use-aggregate-rating-schema";
import { recentArticles } from "@/config/related-content";
import { faqCategories, faqDataForSEO } from "@/config/faq-data";
import teamHero from "@/assets/team-hero.webp?w=700&format=webp";
import serviceImplant from "@/assets/service-implant.jpg?format=webp";
import serviceEstetica from "@/assets/service-estetica.jpg?format=webp";
import serviceOrtodontie from "@/assets/service-ortodontie.jpg?format=webp";
import serviceCopii from "@/assets/service-copii.jpg?format=webp";
import serviceRadiologie from "@/assets/cbct-green-x-radiologie.jpg?format=webp";
import clinicLocationStreetView from "@/assets/clinic-location-street-view.png?format=webp";
import telegondolaPiatraNeamt from "@/assets/telegondola-piatra-neamt.jpg?format=webp";
import turnulStefanCelMare from "@/assets/turnul-stefan-cel-mare-piatra-neamt.webp?format=webp";
import serviceEndodontie from "@/assets/service-endodontie.jpg?format=webp";
import { AttractionMap } from "@/components/AttractionMap";
import MobileServicesCarousel from "@/components/MobileServicesCarousel";

const Index = () => {
  // State management for stats animation and carousel
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  const { count: yearsCount, isComplete: yearsComplete } = useCounter(20, 2000, isStatsVisible);
  const { count: patientsCount, isComplete: patientsComplete } = useCounter(10000, 2000, isStatsVisible);

  const FAQSchema = useSEOSchema({
    type: 'FAQPage',
    canonical: '/',
    faqs: faqDataForSEO
  });

  const AggregateRatingSchema = useAggregateRatingSchema({
    ratingValue: "5.0",
    reviewCount: "10",
    reviews: [
      {
        author: "Nicolae Lazar",
        reviewBody: "Profesionalism şi seriozitate, lucrări în siguranţă, personal calificat şi drăguț. Am găsit în sfârşit un cabinet unde același medic execută toate lucrările de la anestezie până la implant dentar. RECOMAND!!!!!!",
        ratingValue: 5
      },
      {
        author: "Irina",
        reviewBody: "Servicii PROFESIONALE ca în București la preturi mai mici ca în Iași! Cel mai bun anestezic, NU SIMȚI DUREREA. Am avut 3 săptămâni, aproape zilnic, lucrări la toate cariile! Recomand cu încredere!!!",
        ratingValue: 5
      }
    ]
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
      anchorText: "Cum poți avea un zâmbet strălucitor"
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
      description: "Tratamente de canal precise, cu rată de succes de peste 95%",
      link: "/servicii/endodontie-piatra-neamt",
      image: serviceEndodontie,
      anchorText: "Tratăm și salvăm dintele fără durere"
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
      {AggregateRatingSchema}
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
                fetchPriority="high"
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
                  <a 
                    href="https://maps.app.goo.gl/KxdWvszC7MCPTLsb9" 
                    target="_blank" 
                    rel="dofollow noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    Strada Ana Ipătescu 9, Piatra Neamț 610120
                  </a>
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
            <p className="text-lg mb-2 text-black dark:text-black font-bold">
              Abces dentar? Carie dureroasă? Nu poți dormi de 3 nopți?
            </p>
            <p className="text-lg mb-8 text-white">
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

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Servicii stomatologice
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Tratamente moderne complete, de la prevenție la reabilitări complexe
            </p>
          </div>
          
          {/* Mobile: GSAP horizontal scroll carousel */}
          <MobileServicesCarousel services={services} />
          
          {/* Desktop: Grid layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link key={index} to={service.link}>
                <Card className="h-full min-h-[280px] hover:shadow-lg transition-shadow border-primary/20 hover:border-primary/40 overflow-hidden group relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30" />
                  <CardContent className="p-6 relative z-10 h-full flex flex-col justify-end">
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

      {/* Why Choose Us */}
      <section className="py-20">
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
              <div className={`text-4xl font-bold mb-2 ${yearsComplete ? 'animate-bounce-once' : ''}`}>
                {yearsCount}+
              </div>
              <div className="text-sm opacity-90">ani de experiență</div>
            </div>
            <div>
              <div className={`text-4xl font-bold mb-2 ${patientsComplete ? 'animate-bounce-once' : ''}`}>
                {patientsCount.toLocaleString('ro-RO')}+
              </div>
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

      {/* FAQs Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Întrebări frecvente
            </h2>
            <p className="text-lg text-text-custom">
              Răspundem pacienților noștri din Piatra Neamț
            </p>
          </div>
          <Carousel setApi={setCarouselApi} className="max-w-5xl mx-auto">
            <CarouselContent>
              {faqCategories.map((category, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border-primary/20">
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold mb-6 text-heading">{category.category}</h2>
                      <div className="space-y-4">
                        {category.questions.map((faq, qIndex) => (
                          <div key={qIndex}>
                            <h3 className="font-semibold mb-2 text-heading">{faq.question}</h3>
                            <p className="text-text-custom text-base">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:-left-12 bg-primary hover:bg-primary/90 text-white border-primary" />
            <CarouselNext className="right-2 md:-right-12 bg-primary hover:bg-primary/90 text-white border-primary" />
          </Carousel>
          
          {/* Carousel Indicators - hidden on mobile */}
          <div className="hidden md:flex justify-center gap-2 mt-8">
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

      {/* Location */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Localizare clinică stomatologică în <a href="https://ro.wikipedia.org/wiki/Piatra-Neam%C8%9B" target="_blank" rel="nofollow noopener noreferrer" className="text-accent hover:underline">Piatra Neamț</a>
            </h2>
            <p className="text-lg text-text-custom">
              Clinica este situată ultracentral, pe Strada Ana Ipătescu 9, Piatra Neamț 610120, în spate la Magazinul UNIC, Școala Gimnazială nr. 12 „Spiru Haret" și clinica Medlife Micromedica.
            </p>
            <p className="text-lg text-text-custom mt-4">
              Suntem la 15 minute de mers de <a href="https://ro.wikipedia.org/wiki/Gara_Piatra_Neam%C8%9B" target="_blank" rel="nofollow noopener noreferrer" className="text-accent hover:underline">Gara Piatra Neamț</a> și stația Telegondolei și la 7 minute de <a href="https://ro.wikipedia.org/wiki/Teatrul_Tineretului_din_Piatra_Neam%C8%9B" target="_blank" rel="nofollow noopener noreferrer" className="text-accent hover:underline">Teatrul Tineretului din Piatra Neamț</a>, <a href="https://ro.wikipedia.org/wiki/Turnul_clopotni%C8%9B%C4%83_al_cur%C8%9Bii_domne%C8%99ti_din_Piatra_Neam%C8%9B" target="_blank" rel="nofollow noopener noreferrer" className="text-accent hover:underline">Curtea Domnească și Turnul lui Ștefan cel Mare</a>.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Street View Image */}
              <div className="bg-muted rounded-lg overflow-hidden relative group">
                <a 
                  href="https://www.google.com/maps/@46.9336581,26.3743251,3a,75y,255.83h,93.38t/data=!3m7!1e1!3m5!1sloUopwjl8115BKiTa6d1JQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-3.3761188188514097%26panoid%3DloUopwjl8115BKiTa6d1JQ%26yaw%3D255.82701803033197!7i16384!8i8192?hl=ro&entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <div className="aspect-video">
                    <img 
                      src={clinicLocationStreetView} 
                      alt="Vedere din stradă a Clinicii Medstom pe Strada Ana Ipătescu 9, Piatra Neamț"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Overlay indicator */}
                  <div className="absolute bottom-3 left-3 bg-black/70 text-white px-3 py-2 rounded-lg flex items-center gap-2 text-sm group-hover:bg-black/90 transition-colors">
                    <Eye className="w-4 h-4" />
                    <span>Deschide Street View</span>
                  </div>
                </a>
                <p className="text-sm text-muted-foreground p-3 text-center">Clinica stomatologică MedStom, Strada Ana Ipătescu 9, Piatra Neamț</p>
              </div>
              
              {/* Google Maps */}
              <div className="bg-muted rounded-lg overflow-hidden">
                <div className="aspect-video">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19583.935789343344!2d26.351835853920782!3d46.92785704494117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47355500267d647d%3A0x52595dde4c16837d!2sStomatologie%20MedStom%20Piatra%20Neamt!5e1!3m2!1sro!2sro!4v1768278894357!5m2!1sro!2sro" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localizare Medstom Clinic Piatra Neamț"
                  />
                </div>
                <p className="text-sm text-muted-foreground p-3 text-center">Hartă interactivă - localizare cabinet stomatologic MedStom</p>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <a 
                href="https://maps.app.goo.gl/KxdWvszC7MCPTLsb9" 
                target="_blank" 
                rel="dofollow noopener noreferrer"
              >
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <MapPin className="mr-2 h-5 w-5" />
                  Deschide în Google Maps
                </Button>
              </a>
            </div>
            
            <div className="mt-8 max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              <div className="rounded-lg overflow-hidden bg-muted">
                <a 
                  href="https://google.com/maps/dir/Telegondolă,+Piața+Gării,+Piatra+Neamț/Ana+Ipatescu,+Piatra+Neamț/@46.9303661,26.3627494,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x473555c641748c49:0x67376e9d1e54a160!2m2!1d26.3615745!2d46.9272262!1m5!1m1!1s0x473555b58723a50b:0xce65c1ea28efbea9!2m2!1d26.3742312!2d46.9335473!3e2?entry=tts&g_ep=EgoyMDI1MTEyMy4xKgBIAVAD&skid=196d8e97-a2ab-4e87-8773-1a4eb072a7b0" 
                  target="_blank" 
                  rel="dofollow noopener noreferrer"
                  className="relative block h-[300px] md:h-[400px] group"
                >
                  <img 
                    src={telegondolaPiatraNeamt} 
                    alt="Telegondola din Piatra Neamț - atracție turistică în apropierea clinicii Medstom"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/70 text-white px-3 py-2 rounded-lg flex items-center gap-2 text-sm group-hover:bg-black/90 transition-colors">
                    <Eye className="w-4 h-4" />
                    <span>Deschide link</span>
                  </div>
                </a>
                <p className="text-sm text-muted-foreground p-3 text-center">Telegondola Piatra Neamț - la 20 minute de mers pe jos de clinică</p>
              </div>
              
              <div className="rounded-lg overflow-hidden bg-muted">
                <a 
                  href="https://google.com/maps/dir/Turnul+lui+Ștefan+cel+Mare,+Piața+Libertății,+Piatra+Neamț/Ana+Ipatescu,+Piatra+Neamț/@46.9330914,26.3686079,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x473555ca215116a9:0x3f8d068c510eff52!2m2!1d26.3684632!2d46.9331526!1m5!1m1!1s0x473555b58723a50b:0xce65c1ea28efbea9!2m2!1d26.3742312!2d46.9335473!3e0?entry=tts&g_ep=EgoyMDI1MTEyMy4xKgBIAVAD&skid=76e94c82-524d-40fa-8107-94bc805c8356" 
                  target="_blank" 
                  rel="dofollow noopener noreferrer"
                  className="relative block h-[300px] md:h-[400px] group"
                >
                  <img 
                    src={turnulStefanCelMare} 
                    alt="Turnul lui Ștefan cel Mare din Piatra Neamț - monument istoric în apropierea clinicii Medstom"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/70 text-white px-3 py-2 rounded-lg flex items-center gap-2 text-sm group-hover:bg-black/90 transition-colors">
                    <Eye className="w-4 h-4" />
                    <span>Deschide link</span>
                  </div>
                </a>
                <p className="text-sm text-muted-foreground p-3 text-center">Turnul lui Ștefan cel Mare - la 8 minute de mers pe jos de clinică</p>
              </div>
            </div>
            
            {/* Hartă interactivă cu atracții turistice */}
            <div className="mt-12 max-w-4xl mx-auto">
              <AttractionMap />
            </div>
            
            {/* Zone deservite */}
            <div className="mt-12 max-w-4xl mx-auto bg-card rounded-xl p-6 md:p-8 border border-primary/20">
              <p className="text-lg text-text-custom mb-6">
                Deservim pacienți din toate cartierele municipiului Piatra Neamț, precum și din localitățile adiacente.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-heading mb-3">Cartiere deservite în Piatra Neamț:</h3>
                  <ul className="grid grid-cols-2 gap-2 text-text-custom">
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                      <span>Centru</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                      <span>Precista</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                      <span>Dărmănești</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                      <span>Mărăței</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                      <span>Dacia</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                      <span>Sărata</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                      <span>Valea Viei</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                      <span>Ștefan cel Mare</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-heading mb-3">Localități din apropiere:</h3>
                  <ul className="space-y-2 text-text-custom">
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                      <span>Doamna</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                      <span>Văleni</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                      <span>Ciritei</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Articles */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Ultimele articole medicale
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
