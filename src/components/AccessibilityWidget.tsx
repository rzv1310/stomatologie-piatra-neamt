import { useEffect, useState } from "react";
import { applyA11y, DEFAULT_A11Y, loadA11y, saveA11y, type A11yPrefs } from "@/lib/a11y-prefs";
import { Accessibility, X, ZoomIn, ZoomOut, Eye, Type } from "lucide-react";
import { Button } from "@/components/ui/button";

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prefs, setPrefs] = useState<A11yPrefs>(loadA11y);
  const { fontSize, highContrast, largeText } = prefs;

  useEffect(() => {
    applyA11y(prefs);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const update = (next: A11yPrefs) => {
    setPrefs(next);
    saveA11y(next);
  };

  const increaseFontSize = () => {
    if (fontSize < 150) update({ ...prefs, fontSize: fontSize + 10 });
  };
  const decreaseFontSize = () => {
    if (fontSize > 80) update({ ...prefs, fontSize: fontSize - 10 });
  };
  const toggleHighContrast = () => update({ ...prefs, highContrast: !highContrast });
  const toggleLargeText = () => update({ ...prefs, largeText: !largeText });
  const resetAll = () => update({ ...DEFAULT_A11Y });

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-14 h-14 bg-primary rounded-full shadow-lg hover:bg-primary/90 transition-colors duration-300 hover:scale-110"
        aria-label="Opțiuni de accesibilitate"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <Accessibility className="h-7 w-7 text-white" />
        )}
      </button>

      {/* Widget Panel */}
      {isOpen && (
        <div className="absolute bottom-16 left-0 bg-white rounded-lg shadow-xl p-4 w-64 border border-border">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Accesibilitate</h3>
          
          {/* Font Size Controls */}
          <div className="mb-4">
            <p className="text-sm text-muted-foreground mb-2">Mărime text: {fontSize}%</p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={decreaseFontSize}
                disabled={fontSize <= 80}
                aria-label="Micșorează textul"
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={increaseFontSize}
                disabled={fontSize >= 150}
                aria-label="Mărește textul"
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* High Contrast Toggle */}
          <div className="mb-4">
            <Button
              variant={highContrast ? "default" : "outline"}
              size="sm"
              onClick={toggleHighContrast}
              className="w-full justify-start"
            >
              <Eye className="h-4 w-4 mr-2" />
              Contrast ridicat
            </Button>
          </div>

          {/* Large Text Toggle */}
          <div className="mb-4">
            <Button
              variant={largeText ? "default" : "outline"}
              size="sm"
              onClick={toggleLargeText}
              className="w-full justify-start"
            >
              <Type className="h-4 w-4 mr-2" />
              Text mărit
            </Button>
          </div>

          {/* Reset Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={resetAll}
            className="w-full text-muted-foreground"
          >
            Resetează setările
          </Button>
        </div>
      )}
    </div>
  );
};

export default AccessibilityWidget;
