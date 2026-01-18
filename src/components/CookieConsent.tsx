import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie, Shield, BarChart3, Megaphone } from "lucide-react";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = "medstom_cookie_consent";
const COOKIE_PREFERENCES_KEY = "medstom_cookie_preferences";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);
      if (savedPreferences) {
        setPreferences(JSON.parse(savedPreferences));
      }
    }
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setIsVisible(false);

    // Here you would initialize analytics/marketing scripts based on preferences
    if (prefs.analytics) {
      // Initialize GA4/GTM
      console.log("Analytics cookies accepted");
    }
    if (prefs.marketing) {
      // Initialize marketing scripts
      console.log("Marketing cookies accepted");
    }
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const acceptNecessary = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const savePreferences = () => {
    saveConsent(preferences);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-end justify-center sm:items-center p-4 bg-foreground/20 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="w-full max-w-lg bg-card rounded-2xl shadow-2xl border border-border overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="bg-primary/5 px-6 py-4 flex items-center justify-between border-b border-border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-full">
              <Cookie className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-lg text-foreground">Setări Cookies</h3>
          </div>
          <button
            onClick={acceptNecessary}
            className="p-2 hover:bg-muted rounded-full transition-colors"
            aria-label="Închide"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-4">
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Folosim cookies pentru a îmbunătăți experiența pe site. Puteți alege ce tipuri de cookies acceptați.
          </p>

          {showDetails ? (
            <div className="space-y-3 mb-4">
              {/* Necessary Cookies */}
              <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="p-1.5 bg-primary/10 rounded">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm text-foreground">Necesare</span>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                      Obligatorii
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Esențiale pentru funcționarea site-ului. Nu pot fi dezactivate.
                  </p>
                </div>
              </div>

              {/* Analytics Cookies */}
              <label className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg cursor-pointer hover:bg-muted/70 transition-colors">
                <div className="p-1.5 bg-accent/10 rounded">
                  <BarChart3 className="w-4 h-4 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm text-foreground">Analitice</span>
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences((prev) => ({ ...prev, analytics: e.target.checked }))
                      }
                      className="w-4 h-4 accent-primary rounded"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Ne ajută să înțelegem cum folosiți site-ul (Google Analytics).
                  </p>
                </div>
              </label>

              {/* Marketing Cookies */}
              <label className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg cursor-pointer hover:bg-muted/70 transition-colors">
                <div className="p-1.5 bg-destructive/10 rounded">
                  <Megaphone className="w-4 h-4 text-destructive" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm text-foreground">Marketing</span>
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) =>
                        setPreferences((prev) => ({ ...prev, marketing: e.target.checked }))
                      }
                      className="w-4 h-4 accent-primary rounded"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Permit personalizarea reclamelor și măsurarea campaniilor.
                  </p>
                </div>
              </label>
            </div>
          ) : (
            <button
              onClick={() => setShowDetails(true)}
              className="text-sm text-primary hover:underline mb-4 inline-block"
            >
              Personalizează preferințele →
            </button>
          )}

          {/* Link to Cookie Policy */}
          <p className="text-xs text-muted-foreground font-bold">
            Aflați mai multe în{" "}
            <a href="/politica-cookies" className="text-primary hover:underline font-bold">
              Politica de Cookies
            </a>
            .
          </p>
        </div>

        {/* Actions */}
        <div className="px-6 py-4 bg-muted/30 border-t border-border flex flex-col sm:flex-row gap-2">
          {showDetails ? (
            <>
              <Button
                variant="outline"
                onClick={acceptNecessary}
                className="flex-1 text-sm"
              >
                Doar necesare
              </Button>
              <Button
                onClick={savePreferences}
                className="flex-1 text-sm bg-primary hover:bg-primary/90"
              >
                Salvează preferințele
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                onClick={acceptNecessary}
                className="flex-1 text-sm"
              >
                Doar necesare
              </Button>
              <Button
                onClick={acceptAll}
                className="flex-1 text-sm bg-primary hover:bg-primary/90"
              >
                Accept toate
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
