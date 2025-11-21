import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cookie, Shield, Settings, BarChart3, Palette, ExternalLink } from "lucide-react";

const PoliticaCookies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Breadcrumbs
        items={[
          { label: "Acasă", href: "/" },
          { label: "Politica Cookies" },
        ]}
      />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Cookie className="h-16 w-16 mx-auto mb-6 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Politica cookies
              </h1>
              <p className="text-lg text-muted-foreground">
                Informații despre utilizarea cookie-urilor pe site-ul nostru
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-foreground leading-relaxed">
                    Această politică se referă la cookie-urile folosite pe site-ul <strong>stomatologiepiatraneamt.ro</strong>. Prin utilizarea acestui site, ești de acord cu utilizarea cookie-urilor în condițiile descrise mai jos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ce sunt cookie-urile */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Cookie className="h-8 w-8 text-primary" />
                Ce sunt cookie-urile?
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-foreground leading-relaxed">
                    Cookie-urile sunt fișiere mici de text stocate pe dispozitivul tău (computer, telefon, tabletă) atunci când vizitezi un site web. Acestea sunt utilizate pentru a face site-ul să funcționeze mai eficient, pentru a îmbunătăți experiența utilizatorilor și pentru a oferi informații proprietarilor site-ului despre modul în care este folosit.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tipuri de cookie-uri */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Ce tipuri de cookie-uri folosim?</h2>
              
              <div className="space-y-6">
                {/* Cookie-uri esențiale */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Shield className="h-6 w-6 text-primary" />
                      Cookie-uri esențiale (necesare)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Aceste cookie-uri sunt esențiale pentru funcționarea corectă a site-ului și nu pot fi dezactivate. Ele permit navigarea pe site și accesul la funcționalități de bază.
                    </p>
                  </CardContent>
                </Card>

                {/* Cookie-uri de performanță */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <BarChart3 className="h-6 w-6 text-primary" />
                      Cookie-uri de performanță și analiză
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Aceste cookie-uri ne ajută să înțelegem cum este folosit site-ul de către vizitatori, colectând informații în mod anonim. De exemplu, putem vedea ce pagini sunt accesate cel mai des sau ce erori apar, astfel încât să îmbunătățim experiența utilizatorului.
                    </p>
                  </CardContent>
                </Card>

                {/* Cookie-uri de funcționalitate */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Settings className="h-6 w-6 text-primary" />
                      Cookie-uri de funcționalitate
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Acestea permit site-ului să-și amintească preferințele tale (cum ar fi limba sau zona geografică) pentru a oferi o experiență personalizată.
                    </p>
                  </CardContent>
                </Card>

                {/* Cookie-uri de marketing */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Palette className="h-6 w-6 text-primary" />
                      Cookie-uri de marketing și publicitate
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Sunt folosite pentru a afișa anunțuri relevante pentru tine și interesele tale. Pot fi plasate pe site de către terți (ex: Google, Facebook) cu acordul nostru.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie-uri de la terți */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Cookie-uri plasate de terți</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-foreground leading-relaxed">
                    Pe site-ul nostru pot fi folosite cookie-uri ale unor servicii externe, cum ar fi Google Analytics, Google Ads sau Facebook Pixel, pentru analiză de trafic sau publicitate. Aceste terțe părți pot utiliza cookie-uri conform propriilor politici de confidențialitate.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Control cookie-uri */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Cum poți controla cookie-urile?</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-foreground leading-relaxed mb-4">
                    Poți controla sau șterge cookie-urile din setările browserului tău. De asemenea, poți configura browserul astfel încât să blocheze cookie-urile sau să te avertizeze înainte ca un cookie să fie salvat. Totuși, blocarea cookie-urilor esențiale poate afecta funcționalitatea site-ului.
                  </p>
                  <p className="text-foreground leading-relaxed mb-2">
                    Pentru mai multe informații despre cum poți gestiona cookie-urile, vizitează:
                  </p>
                  <a
                    href="https://www.allaboutcookies.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    https://www.allaboutcookies.org/
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <p className="text-muted-foreground mt-2">
                    sau consultă setările browserului tău.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Actualizări */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Actualizări ale politicii de cookie</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-foreground leading-relaxed mb-4">
                    Această politică poate fi actualizată periodic. Orice modificare va fi publicată pe această pagină, iar data ultimei actualizări va fi menționată mai jos.
                  </p>
                  <p className="text-muted-foreground italic">
                    Ultima actualizare: 20.11.2025
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticaCookies;
