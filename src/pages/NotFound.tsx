import { Link } from "react-router-dom";
import { Home, Search, Frown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-hero via-background to-primary/5 px-4 py-20">
        <div className="text-center max-w-2xl mx-auto animate-fade-in">
          {/* Funny Tooth Icon */}
          <div className="mb-8 relative inline-block">
            <div className="text-9xl animate-[wiggle_1s_ease-in-out_infinite] inline-block">
              🦷
            </div>
            <div className="absolute -top-2 -right-2 animate-bounce">
              <Frown className="h-12 w-12 text-accent" />
            </div>
          </div>

          {/* 404 Title */}
          <h1 className="text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            404
          </h1>

          {/* Funny Message */}
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
            Ups! Această pagină și-a pierdut nervul! 😬
          </h2>
          
          <p className="text-xl text-text-custom mb-8 max-w-lg mx-auto">
            Pagina pe care o cauți a fost extrasă din site-ul nostru. 
            Dar nu-ți face griji, restul dinților... err... paginilor sunt perfect sănătoși!
          </p>

          {/* Search Suggestions */}
          <div className="bg-card border border-primary/20 rounded-xl p-6 mb-8 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <Search className="h-6 w-6 text-primary mr-2" />
              <p className="text-lg font-semibold text-heading">Ce ai putea căuta în schimb:</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/servicii">
                <Button variant="outline" className="hover-scale">
                  Servicii Stomatologice
                </Button>
              </Link>
              <Link to="/servicii/implant-dentar">
                <Button variant="outline" className="hover-scale">
                  Implanturi Dentare
                </Button>
              </Link>
              <Link to="/tarife">
                <Button variant="outline" className="hover-scale">
                  Prețuri
                </Button>
              </Link>
              <Link to="/blog">
                <Button variant="outline" className="hover-scale">
                  Blog
                </Button>
              </Link>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group">
                <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Înapoi Acasă
              </Button>
            </Link>
            <a href="tel:+40333630005">
              <Button size="lg" variant="outline" className="border-primary hover:bg-primary hover:text-white">
                Sună-ne: 0333 630 005
              </Button>
            </a>
          </div>

          {/* Fun Fact */}
          <div className="mt-12 p-4 bg-accent/10 rounded-lg border border-accent/20">
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
