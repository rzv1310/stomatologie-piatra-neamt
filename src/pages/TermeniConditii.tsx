import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Scale, Shield, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useDynamicSEO } from "@/hooks/use-dynamic-seo";

const TermeniConditii = () => {
  const DynamicSEO = useDynamicSEO({
    title: "Termeni și Condiții | Stomatologie MedStom Piatra Neamț",
    description: "Termenii și condițiile de utilizare ale site-ului stomatologiepiatraneamt.ro",
    path: "/termeni-conditii",
    noIndex: true
  });

  return (
    <div className="min-h-screen flex flex-col">
      {DynamicSEO}
      <Navigation />
      <Breadcrumbs
        items={[
          { label: "Stomatologie Piatra Neamț", href: "/" },
          { label: "Termeni și Condiții" },
        ]}
      />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <FileText className="h-16 w-16 mx-auto mb-6 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Termeni și condiții
              </h1>
              <p className="text-lg text-muted-foreground">
                Condițiile de utilizare ale site-ului stomatologiepiatraneamt.ro
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
                    Prezentul document conținând termenii și condițiile de utilizare ale site-ului{" "}
                    <a 
                      href="https://stomatologiepiatraneamt.ro" 
                      className="font-semibold text-primary hover:text-primary/80 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://stomatologiepiatraneamt.ro/
                    </a>
                    {" "}(denumit în continuare "Termeni și Condiții") stabilește care sunt condițiile în care orice persoană poate vizita ori accesa site-ul www.stomatologiepiatraneamt.ro, ori poate utiliza în orice mod serviciile oferite prin intermediul site-ului.
                  </p>
                  <p className="text-foreground leading-relaxed mt-4">
                    Încă de la început Administratorul face cunoscut utilizatorului faptul că acesta nu își asumă obligația și nu garantează implicit sau expres pentru conținutul de orice fel al Site-ului, sau pentru întreg conținutul oferit de către Utilizatori. Administratorul Site-ului va face toate eforturile rezonabile pentru a asigura acuratețea și încrederea în Site și va încerca să corecteze erorile și omisiunile cât mai repede posibil.
                  </p>
                  <p className="text-foreground leading-relaxed mt-4">
                    Prin "Termeni și Condiții", administratorul transmite către utilizator faptul că: Prin "site" se înțelege în continuare site-ul de internet www.stomatologiepiatraneamt.ro
                  </p>
                  <p className="text-foreground leading-relaxed mt-4 font-semibold">
                    Neacceptarea acestor "termeni și condiții" atrage obligația utilizatorului de a părăsi și de a înceta accesarea site-ului.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* I. Limitarea răspunderii */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Scale className="h-8 w-8 text-primary" />
                I. Limitarea răspunderii site-ului stomatologiepiatraneamt.ro
              </h2>
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <p className="text-foreground leading-relaxed">
                    Administratorul Site-ului nu oferă niciun fel de garanții sau răspundere pentru Conținutul Site-ului și în nicio situație nu poate fi făcut răspunzător pentru nicio pierdere sau prejudiciu ce ar putea rezulta din utilizarea oricărei părți, secvență, modul al Conținutului de pe Site sau din imposibilitatea utilizării acestuia, indiferent de cauza acesteia, ori din interpretarea eronată a oricăror prevederi ale Conținutului Site-ului.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Utilizatorii înțeleg și acceptă că funcționarea Site-ului poate fi afectată de anumite condiții obiective, precum și că orice servicii oferite prin intermediul Site-ului sunt oferite potrivit principiului "așa cum sunt", "așa cum sunt disponibile", iar Utilizatorii folosesc aceste servicii pe riscul lor. În consecință, Administratorul Site-ului nu poate fi tras la răspundere nici cu privire la orice informații și date din Conţinutul Site-ului inclusiv, dar nu numai cele privind textul, imaginile, secvențele video, avatarurile, blogurile, sau orice altă activitate legată de utilizarea, precum și niciun alt efect juridic derivând din acestea.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Utilizatorii înțeleg și acceptă că Administratorul Site-ului este absolvit de orice răspundere în eventualitatea producerii oricărei opriri, întreruperi, îngreunări, disfuncționalități sau erori în funcționarea Site-ului precum și în orice situație în care nu ar dovedi cert că orice erori sau probleme de natură tehnică din cele menționate mai sus se datorează în mod direct și exclusiv culpei grave a Administratorului Site-ului.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    În mod expres, Utilizatorii înțeleg și acceptă că Administratorul Site-ului este absolvit de orice răspundere pentru orice fel de daune directe, indirecte, incluzând dar fără a se limita la pierderi de profit, vad comercial sau alte pierderi intangibile, rezultate din utilizarea Conținutului Site-ului în orice mod sau orice efecte juridice derivând din aceasta.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Utilizatorii înțeleg și accepta că Administratorul Site-ului este absolvit de orice răspundere pentru mesajele publicitare postate pe Site sau prin intermediul Serviciului, precum și pentru bunurile sau serviciile furnizate de către autorii acestor mesaje publicitare.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    În cazurile de forță majoră Administratorul Site-ului și / sau operatorii, directorii, angajații, subunitățile, sediile secundare și reprezentanții săi, sunt exoneraţi total de răspundere. Cazurile de forță majoră includ, dar nu se limitează la acestea, erori de funcționare ale echipamentului tehnic al Administratorului Site-ului, lipsa funcționării conexiunii la internet, lipsa funcționării conexiunilor de telefon, virușii informatici, atacurile informatice de orice fel și interferarea cu programe informatice malițioase, accesul neautorizat în sistemele Site-ului, erorile de operare, grevă etc.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Utilizatorii sunt de acord să protejeze, să asigure și despăgubească integral pe Administratorul Site-ului și / sau pe operatorii, directorii, angajații și reprezentanții săi de și împotriva oricăror cereri, pretenții, acțiuni, impuneri, pierderi, daune, costuri (incluzând, fără nici un fel de limitare, onorariile avocaților, experților si consultanților sau executorilor, taxe judiciare, notariale sau de executare), cheltuieli, judecăți, decizii, amenzi, regularizări sau alte obligații rezultate sau relaționate cu orice altă acțiune a Utilizatorului în legătură cu utilizarea necorespunzătoare a Site-ului/Serviciului sau orice alt aspect în legătură cu Site-ul/Serviciul.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* II. Modificarea termenilor */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                II. Modificarea termenilor și condițiilor
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-foreground leading-relaxed">
                    Administratorul Site-ului are dreptul de a modifica oricând și în orice mod oricare dintre prevederile din Termeni și Condiții sau Termenii și Condițiile în întregime, fără nicio notificare prealabilă și fără a fi obligat să îndeplinească vreo altă formalitate față de Utilizatori. Orice modificare va fi considerată ca fiind acceptata deplin și necondiționat de către oricare dintre Utilizatori prin simpla utilizare sau accesare a oricărei facilități oferite de Site sau de Serviciu, ori prin accesarea Site-ului, intervenite oricând după operarea modificării, iar neacceptarea oricărei modificări atrage obligația respectivului Utilizator de a înceta de îndată accesarea Site-ului și / sau utilizarea în orice mod a Serviciului.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* III. Protecția datelor */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                III. Protecția datelor personale
              </h2>
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <p className="text-foreground leading-relaxed">
                    În ceea ce privește această notă de informare a protecției datelor personale, conform cerințelor Legii nr. 677/2001 pentru protecția persoanelor cu privire la prelucrarea datelor cu caracter personal și libera circulație a acestor date, modificată și completată, și ale Legii nr. 506/2004 privind prelucrarea datelor cu caracter personal și protecția vieții private în sectorul comunicațiilor electronice, Administratorul Site-ului va administra în condiții de siguranță și numai pentru scopurile specificate, datele personale furnizate de Utilizatori.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Vă informăm că datele personale pe care Utilizatorii le furnizează Administratorului Site-ului sunt prelucrate în scopul oferirii în condiţii optime a Serviciului. Prin completarea pe Site a formularului de contact / programare sau orice altă modalitate de preluare a unor astfel de date personale, Utilizatorul declară că este de acord ca toate datele personale să fie incluse în baza de date a Administratorului Site-ului și își dă acordul expres și neechivoc ca toate datele personale să fie stocate și utilizate pentru: activități de marketing prin primirea de mesaje de informare sau comerciale la adresele de e-mail comunicate; transmiterea de email-uri/mesaje informative și non-comerciale cu privire la concursurile, promoțiile și discounturile perioadei respective.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Vă invităm să citiți cu atenție{" "}
                    <Link to="/politica-confidentialitate" className="text-primary hover:text-primary/80 transition-colors font-semibold">
                      Politica de confidențialitate
                    </Link>
                    {" "}a Site-ului.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* IV. Legături cu alte site-uri */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <LinkIcon className="h-8 w-8 text-primary" />
                IV. Posibila legătură cu alte site-uri
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-foreground leading-relaxed">
                    Utilizatorul înțelege această legătură a site-ului inițial cu alte posibile site-uri și acceptă totodată trimiterea pe site-uri noi care pot conține produse, furnizori, cazuistică sau posibile articole ale unor blog-uri etc.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* V. Drepturile asupra conținutului */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                V. Drepturile asupra conținutului site-ului
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-foreground leading-relaxed">
                    Este interzisă copierea, preluarea, reproducerea, publicarea, transmiterea, vânzarea, distribuția totală sau parțială, integrală sau modificată a conținutului acestui Site sau a oricărei părți a acestuia efectuate în orice alte scopuri decât cele personale; în caz contrar, se vor aplica sancțiunile legislației în vigoare, prima etapă fiind rezolvarea situației pe cale amiabilă, iar dacă acest lucru nu va fi posibil, părțile se vor întâlni în instanță.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* VI. Legea aplicabilă */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                VI. Legea aplicabilă. Litigii
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-foreground leading-relaxed">
                    Drepturile și obligațiile Utilizatorilor și ale Administratorului Site-ului, prevăzute de Termeni și Condiții, precum și toate efectele juridice pe care le produc Termenii și Condițiile vor fi interpretate și guvernate în conformitate cu legea română în vigoare. Orice litigiu născut din sau în legătură cu Termenii și Condițiile va fi soluționat pe cale amiabilă. În caz de imposibilitate de a ajunge la un acord, litigiul va fi soluționat de către instanța judecătorească română competentă aflată în raza teritorială a municipiului București.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Documente conexe */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Documente conexe
                  </h3>
                  <div className="space-y-2">
                    <Link to="/politica-confidentialitate" className="block text-primary hover:underline">
                      → Politica de Confidențialitate
                    </Link>
                    <Link to="/politica-cookies" className="block text-primary hover:underline">
                      → Politica Cookies
                    </Link>
                  </div>
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

export default TermeniConditii;
