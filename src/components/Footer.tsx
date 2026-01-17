import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About & Contact */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-white">
              <Link to="/" className="hover:text-accent transition-colors">
                Stomatologie MedStom Piatra Neamt
              </Link>
            </h2>
            <ul className="space-y-3 text-sm text-white mb-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-white" />
                <a 
                  href="https://maps.app.goo.gl/KxdWvszC7MCPTLsb9" 
                  target="_blank" 
                  rel="dofollow noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Strada Ana Ipătescu 9, Piatra Neamț 610120
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0 text-white" />
                <span>Telefon: <a href="tel:+40333630005" className="hover:text-accent transition-colors">0333 630 005</a></span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0 text-white" />
                <a href="mailto:hello@stomatologiepiatraneamt.ro" className="hover:text-accent transition-colors">
                  Email: hello@stomatologiepiatraneamt.ro
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-white" />
                <span>Luni - Vineri: 09:00 - 19:00</span>
              </li>
            </ul>
            <a
              href="https://www.facebook.com/profile.php?id=100024207206327"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-white hover:text-accent transition-colors mb-4"
            >
              <Facebook className="h-5 w-5 mr-2 text-white" />
              Urmărește-ne pe Facebook
            </a>
            <p className="text-sm text-white mt-4">
              Clinica stomatologică Medstom din Piatra Neamț - 20 de ani de experiență în tratamente dentare premium.
            </p>
            <p className="text-sm text-white mt-2">
              Deservim pacienți din Piatra Neamț și zonele învecinate.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-white">Legături rapide</h2>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <Link to="/servicii" className="hover:text-accent transition-colors">
                  Servicii stomatologice
                </Link>
              </li>
              <li>
                <Link to="/despre" className="hover:text-accent transition-colors">
                  Despre noi
                </Link>
              </li>
              <li>
                <Link to="/tarife" className="hover:text-accent transition-colors">
                  Tarife
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-accent transition-colors">
                  Articole Medicale
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-white">
              <Link to="/servicii" className="hover:text-accent transition-colors">
                Servicii
              </Link>
            </h2>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <Link to="/servicii/tratament-carii" className="hover:text-accent transition-colors">
                  Odontoterapie
                </Link>
              </li>
              <li>
                <Link to="/servicii/endodontie-piatra-neamt" className="hover:text-accent transition-colors">
                  Endodonție
                </Link>
              </li>
              <li>
                <Link to="/servicii/implant-dentar" className="hover:text-accent transition-colors">
                  Implant dentar
                </Link>
              </li>
              <li>
                <Link to="/servicii/estetica-dentara" className="hover:text-accent transition-colors">
                  Estetică dentară
                </Link>
              </li>
              <li>
                <Link to="/servicii/ortodontie-piatra-neamt" className="hover:text-accent transition-colors">
                  Ortodonție
                </Link>
              </li>
              <li>
                <Link to="/servicii/profilaxie" className="hover:text-accent transition-colors">
                  Profilaxie
                </Link>
              </li>
              <li>
                <Link to="/servicii/protetica-piatra-neamt" className="hover:text-accent transition-colors">
                  Protetică dentară
                </Link>
              </li>
              <li>
                <Link to="/servicii/chirurgie-orala" className="hover:text-accent transition-colors">
                  Chirurgie orală
                </Link>
              </li>
              <li>
                <Link to="/servicii/parodontologie-piatra-neamt" className="hover:text-accent transition-colors">
                  Parodontologie
                </Link>
              </li>
              <li>
                <Link to="/servicii/radiologie-dentara-piatra-neamt" className="hover:text-accent transition-colors">
                  Radiologie dentară
                </Link>
              </li>
              <li>
                <Link to="/servicii/stomatologie-copii-piatra-neamt" className="hover:text-accent transition-colors">
                  Stomatologie copii
                </Link>
              </li>
              <li>
                <Link to="/servicii/urgente" className="hover:text-accent transition-colors">
                  Urgențe stomatologice
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p className="text-white">
            © {new Date().getFullYear()} Stomatologie MedStom Piatra Neamt. Toate drepturile rezervate.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-2 text-white">
            <Link to="/politica-cookies" className="hover:text-accent transition-colors">
              Politica cookies
            </Link>
            <Link to="/termeni-conditii" className="hover:text-accent transition-colors">
              Termeni și condiții
            </Link>
            <Link to="/politica-confidentialitate" className="hover:text-accent transition-colors w-full text-center md:w-auto md:text-left">
              Politica de confidențialitate
            </Link>
            <a 
              href="https://anpc.ro/ce-este-sal/" 
              target="_blank" 
              rel="nofollow noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              ANPC - SAL
            </a>
            <a 
              href="https://consumer-redress.ec.europa.eu/index_ro" 
              target="_blank" 
              rel="nofollow noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              ANPC - SOL
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
