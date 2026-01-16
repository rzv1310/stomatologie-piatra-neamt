import { Link, useLocation } from "react-router-dom";
import { Home, Search, Frown, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const SITE_URL = "https://stomatologiepiatraneamt.ro";

// Recommended services for 404 page
const recommendedServices = [
  {
    title: "Implant Dentar",
    description: "Soluția permanentă pentru dinți lipsă",
    href: "/servicii/implant-dentar",
    icon: "🦷"
  },
  {
    title: "Urgențe Stomatologice",
    description: "Intervenții rapide pentru dureri acute",
    href: "/servicii/urgente",
    icon: "🚨"
  },
  {
    title: "Estetică Dentară",
    description: "Zâmbetul perfect pe care îl meriți",
    href: "/servicii/estetica-dentara",
    icon: "✨"
  }
];

// Recommended articles for 404 page
const recommendedArticles = [
  {
    title: "Măseaua de Minte",
    description: "Când trebuie scoasă și când poate rămâne",
    href: "/blog/maseaua-de-minte"
  },
  {
    title: "Prima Vizită la Dentist",
    description: "Ghid pentru părinți și copii",
    href: "/blog/prima-vizita-copil-dentist"
  },
  {
    title: "Albire Dentară",
    description: "Metode profesionale și sfaturi",
    href: "/blog/albire-dentara-piatra-neamt"
  }
];

const NotFound = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Generate BreadcrumbList schema for 404 page
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Stomatologie Piatra Neamț",
        "item": SITE_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Pagină negăsită (404)",
        "item": `${SITE_URL}${currentPath}`
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Pagină Negăsită (404) | Stomatologie MedStom Piatra Neamț</title>
        <meta name="description" content="Pagina căutată nu a fost găsită. Descoperă serviciile noastre stomatologice în Piatra Neamț sau contactează-ne pentru programări." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={`${SITE_URL}/404`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Pagină Negăsită | Stomatologie MedStom Piatra Neamț" />
        <meta property="og:description" content="Pagina căutată nu a fost găsită. Descoperă serviciile noastre stomatologice în Piatra Neamț." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}${currentPath}`} />
        
        {/* Schema.org BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Navigation />
      
      <main className="flex-1 bg-gradient-to-br from-hero via-background to-primary/5 px-4 py-12 lg:py-20">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            {/* Funny Tooth Icon */}
            <div className="mb-6 relative inline-block">
              <div className="text-8xl lg:text-9xl animate-[wiggle_1s_ease-in-out_infinite] inline-block">
                🦷
              </div>
              <div className="absolute -top-2 -right-2 animate-bounce">
                <Frown className="h-10 w-10 lg:h-12 lg:w-12 text-accent" />
              </div>
            </div>

            {/* 404 Title */}
            <h1 className="text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              404
            </h1>

            {/* Message */}
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-heading">
              Ups! Această pagină și-a pierdut nervul! 😬
            </h2>
            
            <p className="text-lg text-text-custom mb-6 max-w-lg mx-auto">
              Pagina pe care o cauți nu mai există sau a fost mutată. 
              Dar nu-ți face griji, avem multe alte pagini utile pentru tine!
            </p>

            {/* Quick CTA */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
              <Link to="/">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group">
                  <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Înapoi Acasă
                </Button>
              </Link>
              <a href="tel:+40333630005">
                <Button size="lg" variant="outline" className="border-primary hover:bg-primary hover:text-white">
                  <Phone className="mr-2 h-5 w-5" />
                  Sună-ne: 0333 630 005
                </Button>
              </a>
            </div>
          </div>

          {/* Recommended Services */}
          <section className="mb-12">
            <h3 className="text-xl lg:text-2xl font-bold text-heading text-center mb-6">
              <Search className="inline-block h-6 w-6 mr-2 text-primary" />
              Servicii Populare
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {recommendedServices.map((service, index) => (
                <Link key={index} to={service.href} className="group">
                  <Card className="h-full border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                    <CardContent className="p-5">
                      <div className="text-3xl mb-3">{service.icon}</div>
                      <h4 className="font-semibold text-heading mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-sm text-text-custom mb-3">{service.description}</p>
                      <div className="flex items-center text-primary text-sm font-medium">
                        Află mai multe
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* Recommended Articles */}
          <section className="mb-12">
            <h3 className="text-xl lg:text-2xl font-bold text-heading text-center mb-6">
              📚 Articole Utile
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {recommendedArticles.map((article, index) => (
                <Link key={index} to={article.href} className="group">
                  <Card className="h-full border-primary/20 hover:border-accent/40 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-5">
                      <h4 className="font-semibold text-heading mb-2 group-hover:text-accent transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-sm text-text-custom mb-3">{article.description}</p>
                      <div className="flex items-center text-accent text-sm font-medium">
                        Citește articolul
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* All Navigation Options */}
          <section className="bg-card border border-primary/20 rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-heading text-center mb-4">
              Navighează pe site
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/servicii">
                <Button variant="outline" className="hover-scale">Toate Serviciile</Button>
              </Link>
              <Link to="/tarife">
                <Button variant="outline" className="hover-scale">Prețuri</Button>
              </Link>
              <Link to="/blog">
                <Button variant="outline" className="hover-scale">Blog</Button>
              </Link>
              <Link to="/despre">
                <Button variant="outline" className="hover-scale">Despre Noi</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="hover-scale">Contact</Button>
              </Link>
            </div>
          </section>

          {/* Fun Fact */}
          <div className="mt-8 p-4 bg-accent/10 rounded-lg border border-accent/20 text-center max-w-2xl mx-auto">
            <p className="text-sm text-text-custom italic">
              💡 <strong>Știai că?</strong> Stratul de email dentar este cel mai tare țesut din corpul uman. 
              La fel de tare ca și determinarea noastră de a-ți oferi cele mai bune servicii stomatologice!
            </p>
          </div>
        </div>
      </main>

      <Footer />
      
      <style>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
