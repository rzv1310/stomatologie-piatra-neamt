import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: "Urgențe stomatologice", href: "/servicii/urgente" },
    { name: "Stomatologie copii", href: "/servicii/stomatologie-copii-piatra-neamt" },
    { name: "Endodonție", href: "/servicii/endodontie-piatra-neamt" },
    { name: "Tratament Carii", href: "/servicii/tratament-carii" },
    { name: "Estetică dentară", href: "/servicii/estetica-dentara" },
    { name: "Ortodonție", href: "/servicii/ortodontie-piatra-neamt" },
    { name: "Profilaxie", href: "/servicii/profilaxie" },
    { name: "Protetică dentară", href: "/servicii/protetica-piatra-neamt" },
    { name: "Chirurgie orală", href: "/servicii/chirurgie-orala" },
    { name: "Parodontologie", href: "/servicii/parodontologie-piatra-neamt" },
    { name: "Radiologie dentară", href: "/servicii/radiologie-dentara-piatra-neamt" },
    { name: "Implant dentar", href: "/servicii/implant-dentar" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Stomatologie MedStom Piatra Neamt Logo" className="h-10 w-10 rounded-lg" />
            <div className="text-[16px] lg:text-xl font-bold text-accent">Stomatologie MedStom Piatra Neamt</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu value={servicesOpen ? "servicii" : ""}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className="px-4 py-2 text-foreground hover:text-primary transition-colors">
                    Stomatologie Piatra Neamț
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem value="servicii">
                  <NavigationMenuTrigger 
                    onClick={() => setServicesOpen(!servicesOpen)}
                    onPointerEnter={(e) => e.preventDefault()}
                    onPointerMove={(e) => e.preventDefault()}
                  >
                    Servicii
                  </NavigationMenuTrigger>
                  <NavigationMenuContent 
                    onPointerEnter={(e) => e.preventDefault()}
                    onPointerLeave={(e) => e.preventDefault()}
                  >
                    <ul className="grid w-[400px] gap-3 p-4 max-h-[70vh] overflow-y-auto">
                      {services.map((service) => (
                        <li key={service.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              onClick={() => setServicesOpen(false)}
                            >
                              <div className="text-sm font-medium leading-none">{service.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/despre" className="px-4 py-2 text-foreground hover:text-primary transition-colors">
                    Despre noi
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/tarife" className="px-4 py-2 text-foreground hover:text-primary transition-colors">
                    Tarife
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact" className="px-4 py-2 text-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <a href="tel:+40333630005">
              <Button variant="default" className="bg-accent hover:bg-accent/90">
                <Phone className="mr-2 h-4 w-4" />
                0333 630 005
              </Button>
            </a>
          </div>

          {/* Mobile menu button + phone icon */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              className="p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <a href="tel:+40333630005" className="p-2" aria-label="Sună acum">
              <Phone className="h-6 w-6 text-accent animate-pulse" />
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Stomatologie Piatra Neamț
              </Link>
              <div className="px-4">
                <div className="font-semibold mb-2">Servicii</div>
                <div className="flex flex-col space-y-2 ml-4">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className="py-1 hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                to="/despre"
                className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Despre noi
              </Link>
              <Link
                to="/tarife"
                className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tarife
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <a href="tel:+40333630005" className="px-4">
                <Button variant="default" className="w-full bg-accent hover:bg-accent/90">
                  <Phone className="mr-2 h-4 w-4" />
                  0333 630 005
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
