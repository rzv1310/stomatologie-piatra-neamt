import { useState, useEffect } from "react";
import { ChevronUp, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface SectionNavItem {
  id: string;
  label: string;
}

interface SectionNavProps {
  sections: SectionNavItem[];
  className?: string;
}

const SectionNav = ({ sections, className }: SectionNavProps) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show scroll to top button after scrolling down
      setShowScrollTop(window.scrollY > 500);

      // Find the current active section
      const sectionElements = sections
        .map(s => document.getElementById(s.id))
        .filter(Boolean);

      const currentSection = sectionElements.find((el) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom > 150;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80; // Account for fixed navigation
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (sections.length === 0) return null;

  return (
    <>
      {/* Mobile: Floating button with dropdown */}
      <div className={cn("fixed bottom-20 right-4 z-40 lg:hidden", className)}>
        {/* Scroll to top button */}
        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            size="icon"
            variant="secondary"
            className="mb-2 shadow-lg"
            aria-label="Înapoi sus"
          >
            <ChevronUp className="h-5 w-5" />
          </Button>
        )}
        
        {/* Section nav toggle */}
        <div className="relative">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            size="icon"
            className="shadow-lg bg-primary hover:bg-primary/90"
            aria-label="Navigare secțiuni"
          >
            <List className="h-5 w-5" />
          </Button>

          {/* Dropdown menu */}
          {isOpen && (
            <div className="absolute bottom-14 right-0 bg-card border border-border rounded-lg shadow-xl p-2 min-w-[200px] max-h-[60vh] overflow-y-auto">
              <p className="text-xs text-muted-foreground px-3 py-1 font-medium">
                Salt la secțiune
              </p>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    "w-full text-left px-3 py-2 text-sm rounded-md transition-colors",
                    activeSection === section.id
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted text-foreground"
                  )}
                >
                  {section.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop: Sticky sidebar */}
      <nav 
        className={cn(
          "hidden lg:block fixed right-4 top-1/2 -translate-y-1/2 z-40",
          className
        )}
        aria-label="Navigare rapidă"
      >
        <div className="bg-card/95 backdrop-blur-sm border border-border rounded-lg shadow-lg p-3 max-w-[180px]">
          <p className="text-xs text-muted-foreground mb-2 font-medium px-2">
            Pe această pagină
          </p>
          <ul className="space-y-1">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    "w-full text-left px-2 py-1.5 text-sm rounded-md transition-all duration-200",
                    activeSection === section.id
                      ? "bg-primary text-primary-foreground font-medium"
                      : "hover:bg-muted text-muted-foreground hover:text-foreground"
                  )}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
          
          {/* Scroll to top */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="w-full mt-3 pt-3 border-t border-border flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ChevronUp className="h-4 w-4" />
              Înapoi sus
            </button>
          )}
        </div>
      </nav>

      {/* Backdrop for mobile dropdown */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default SectionNav;
