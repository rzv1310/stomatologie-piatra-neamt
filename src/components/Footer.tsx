import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About & Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Medstom Clinic</h3>
            <p className="text-sm text-white mb-4">
              Clinică stomatologică modernă în Piatra Neamț, cu 20 de ani de experiență în tratamente dentare de calitate.
            </p>
            <a
              href="https://www.facebook.com/medstomclinic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-white hover:text-accent transition-colors mb-6"
            >
              <Facebook className="h-5 w-5 mr-2 text-white" />
              Urmărește-ne pe Facebook
            </a>
            
            <h3 className="text-lg font-semibold mb-4 mt-6 text-white">Contact</h3>
            <ul className="space-y-3 text-sm text-white">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-white" />
                <span>Strada 1 Decembrie 1918 58A, Piatra Neamț 615200</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0 text-white" />
                <a href="tel:+40333630005" className="hover:text-accent transition-colors">
                  0333 630 005
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-white" />
                <div>
                  <div>Luni - Vineri</div>
                  <div>09:00 - 19:00</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legături rapide</h3>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Stomatologie Piatra Neamț
                </Link>
              </li>
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
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Servicii</h3>
            <ul className="space-y-2 text-sm text-white">
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
            © {new Date().getFullYear()} Medstom Clinic. Toate drepturile rezervate.
          </p>
          <div className="mt-2 space-x-4 text-white">
            <Link to="/politica-cookies" className="hover:text-accent transition-colors">
              Politica cookies
            </Link>
            <Link to="/termeni-conditii" className="hover:text-accent transition-colors">
              Termeni și condiții
            </Link>
            <Link to="/politica-confidentialitate" className="hover:text-accent transition-colors">
              Politica de confidențialitate
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
