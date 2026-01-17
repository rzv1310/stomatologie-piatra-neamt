import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Database, Lock, UserCheck, FileText, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useDynamicSEO } from "@/hooks/use-dynamic-seo";

const PoliticaConfidentialitate = () => {
  const DynamicSEO = useDynamicSEO({
    title: "Politica de Confidențialitate | Stomatologie MedStom Piatra Neamț",
    description: "Cum protejăm și utilizăm datele dumneavoastră personale pe site-ul stomatologiepiatraneamt.ro",
    path: "/politica-confidentialitate",
    noIndex: true
  });

  return (
    <div className="min-h-screen flex flex-col">
      {DynamicSEO}
      <Navigation />
      <Breadcrumbs
        items={[
          { label: "Stomatologie Piatra Neamț", href: "/" },
          { label: "Politica de Confidențialitate" },
        ]}
      />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Shield className="h-16 w-16 mx-auto mb-6 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Politica de confidențialitate
              </h1>
              <p className="text-lg text-muted-foreground">
                Cum protejăm și utilizăm datele dumneavoastră personale
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <h2 className="text-2xl font-bold mb-4">Politica de confidențialitate a Site-ului</h2>
                  <p className="text-foreground leading-relaxed">
                    Această politică de confidențialitate descrie practicile cu privire la datele personale pe care le colectăm prin Site-ul{" "}
                    <a 
                      href="https://www.stomatologiepiatraneamt.ro" 
                      className="font-semibold text-primary hover:text-primary/80 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.stomatologiepiatraneamt.ro
                    </a>
                    , care este găzduit și operat din România.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Tot în politica de confidenţialitate prezentăm şi măsurile pe care le luăm pentru a proteja securitatea datelor. De asemenea, vă explicăm şi cum ne puteţi contacta pentru:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground">
                    <li>a accesa, rectifica sau şterge datele pe care ni le-aţi furnizat,</li>
                    <li>a retrage orice consimţământ pe care ni l-aţi acordat în vederea prelucrării datelor cu caracter personal</li>
                    <li>a ne spune să nu vă mai trimitem informaţii despre produsele şi serviciile noastre</li>
                    <li>a vă răspunde oricăror întrebări despre practicile de confidenţialitate online.</li>
                  </ul>
                  <p className="text-foreground leading-relaxed font-semibold">
                    Vă încurajăm să citiți această Politică înainte să utilizați Site-ul www.stomatologiepiatraneamt.ro. Utilizand acest Site, sunteți de acord cu termenii și condițiile acestei Politici.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ce informații colectăm */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Database className="h-8 w-8 text-primary" />
                Ce informaţii colectăm şi cum le utilizăm
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">1. În cadrul formularelor de contact sau prin chat:</h3>
                    <p className="text-foreground leading-relaxed mb-4">
                      Datele cu caracter personal pe care le colectăm în aceste secțiuni sunt:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-foreground mb-4">
                      <li>Nume</li>
                      <li>Prenume</li>
                      <li>Adresa email</li>
                      <li>Telefon</li>
                    </ul>
                    <p className="text-foreground leading-relaxed mb-4">
                      Folosim aceste date pentru a vă permite să ne adresați diferite cereri și pentru a vă contacta, fie în legătură cu produsele și serviciile noastre, fie în legătură cu exercitarea drepturilor dumneavoastră referitoare la datele cu caracter personal colectate și prelucrate prin intermediul Site-ului.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Informații cu privire la drepturile dumneavoastră referitoare la datele cu caracter personal colectate și prelucrate prin intermediul Site-ului și exercitarea acestora găsiți la secțiunea corespunzătoare din prezenta politică de confidențialitate.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">2. În cadrul secțiunii newsletter:</h3>
                    <p className="text-foreground leading-relaxed mb-4">
                      Datele cu caracter personal pe care le colectăm în aceasta secțiune sunt:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-foreground mb-4">
                      <li>Adresa de email</li>
                      <li>Numele dumneavoastră</li>
                    </ul>
                    <p className="text-foreground leading-relaxed mb-4">
                      Folosim aceste date pentru a va trimite materiale de marketing (adică mesaje care să prezinte noutăţi, caracteristici noi sau oferte promoţionale).
                    </p>
                    <p className="text-foreground leading-relaxed">
                      Nu vă vom trimite materiale de marketing dacă nu v-aţi dat consimţământul în acest sens, înregistrându-vă, în cadrul secțiunii newsletter, pentru a primi informaţii despre produsele şi serviciile noastre. Puteţi alege oricând să întrerupeţi primirea acestor materiale. Trebuie doar să respectaţi instrucţiunile incluse în e-mail, să bifați butonul de dezabonare sau să trimiteţi un răspuns cu solicitarea dumneavoastră.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Cookies */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Despre cookies şi fişiere jurnal</h2>
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <p className="text-foreground leading-relaxed">
                    Ca şi majoritatea site-urilor din România şi străinătate, folosim tehnologia „cookie" în cadrul raportării statistice privind pagina web. Cookie este un fragment de informaţie trimis de o pagină web, salvat de browser-ul calculatorului dumneavoastră pe hard disk. Acesta reţine informaţii de care ar avea nevoie o pagină web pentru a vă personaliza experienţa (adică imaginile dinamice de pe site, preferinţe de setări pentru limbă etc.) şi a aduna informaţii statistice despre pagina web, cum ar fi paginile web vizitate, descărcările făcute, numele de domeniu al furnizorului de Internet şi ţara de origine a vizitatorilor, precum şi adresele paginilor vizitate imediat înainte şi după intrarea pe pagina noastră.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    De asemenea, utilizăm şi fişiere jurnal de servere web standard care ne ajută să numărăm vizitatorii şi să evaluăm capacitatea tehnică a paginii noastre. Folosim aceste informaţii pentru a afla câte persoane vizitează site-ul, ne ajută să aranjăm paginile într-un mod atractiv pentru utilizatori, să avem o pagină uşor de folosit în browser şi să oferim vizitatorilor pagini mai utile. Înregistrăm informaţii despre traficul pe pagină, dar nu şi informaţiile despre vizitatorii individuali ai paginii noastre.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Utilizăm Google Analytics care ne ajută să măsurăm eficienţa publicităţii noastre şi modul în care vizitatorii folosesc pagina web.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Partea de „asistenţă" din bara de instrumente a majorităţii browser-elor vă arată cum să blocaţi acceptarea de noi cookies, cum să fiţi înştiinţaţi atunci când primiţi un nou cookie şi cum să dezactivaţi cookie-urile existente. Nu uitaţi însă că fără cookies s-ar putea să nu beneficiaţi pe deplin de toate caracteristicile paginii noastre web.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Minori */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <UserCheck className="h-8 w-8 text-primary" />
                Datele cu caracter personal ale minorilor sub 16 ani
              </h2>
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <p className="text-foreground leading-relaxed">
                    Minorii cu vârsta de până la 16 ani nu ar trebui să transmită niciun fel de date cu caracter personal pe pagina web fără permisiunea (consimțământul sau aprobarea) tutorelui legal.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Site-ul nostru nu va colecta niciodată cu bună știință date cu caracter personal de la persoane despre care ar fi știut că sunt minori (sub 16 ani) și nici nu le va folosi sau dezvălui vreunei terțe părți neautorizate fără consimțământul expres al tutorelui legal.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Luând în considerare tehnologia disponibilă în astfel de situații, vom face eforturi rezonabile pentru a verifica dacă titularul răspunderii părintești pentru copil a dat sau a aprobat consimțământul precum și dacă datele cu caracter personal sunt introduse de un minor cu vârsta sub 16 ani.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Transmitere informații */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Informaţiile pe care le transmitem</h2>
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <p className="text-foreground leading-relaxed">
                    Nu vom transmite către terțe părți datele dumneavoastră cu caracter personal, cu următoarele excepții:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-foreground">
                    <li>Cu acordul dvs.;</li>
                    <li>Dacă este necesara transmiterea unor informații în vederea furnizării produselor și serviciilor solicitate de dvs.</li>
                    <li>În cazul în care informația este necesara partenerilor companiei pentru îmbunătățirea sau facilitarea unor servicii sau produse solicitate de dumneavoastră. Societățile partenere au dreptul de a utiliza datele cu caracter personal furnizate numai în măsura în care este necesara pentru executarea serviciului solicitat de dumneavoastră (de ex. transmiterea serviciilor si/sau produselor comandate, procesarea informațiilor privind plata etc.).</li>
                  </ul>
                  <p className="text-foreground leading-relaxed mt-4">
                    Putem transmite date cu caracter personal autorităților sau instituțiilor publice conform prevederilor legale sau bunei-credințe dacă:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground">
                    <li>este prevazut într-o dispoziție legală;</li>
                    <li>previne o infracțiune sau protejează siguranța națională;</li>
                    <li>protejează siguranța individului sau siguranța publică;</li>
                    <li>aceste informații sunt necesare în vederea rezolvării diferitelor situații juridice;</li>
                    <li>în cazul în care activitățile dvs. contravin termenilor și condițiilor statuate de societatea noastră, sau a instrucțiunilor pentru utilizarea anumitor produse și servicii;</li>
                    <li>în cazul în care societatea noastră fuzionează sau e achiziționată total sau parțial de o altă companie, iar baza de date e transferată noului operator;</li>
                    <li>în cazul în care societatea noastră devine insolvabilă, voluntar sau involuntar, prin lichidatorul, administratorul sau cumpărătorul, baza de date poate fi vândută, autorizată, tranzacționată doar cu acordul instanței.</li>
                  </ul>
                  <p className="text-muted-foreground text-sm mt-4">
                    În cazul în care vor apare situații menționate mai sus, veți fi anunțați prin e-mail sau printr-un anunț postat pe site.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Link-uri */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <ExternalLink className="h-8 w-8 text-primary" />
                Link-uri către alte pagini
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-foreground leading-relaxed">
                    Nu uitaţi că atunci când folosiţi un link pentru a ajunge de pe Site-ul nostru pe o altă pagină web, prezenta politică de confidenţialitate nu se mai aplică. Navigarea şi interacţiunea pe care le desfăşuraţi pe o altă pagină web, inclusiv orice pagină care are un link către prezentul Site, se supun regulilor şi politicilor paginii respective. Vă încurajăm să citiţi regulile şi politicile paginilor pe care le vizitaţi pentru a înţelege mai exact procedurile lor de colectare, utilizare şi dezvăluire a datelor cu caracter personal.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Securitate */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Lock className="h-8 w-8 text-primary" />
                Securitatea datelor cu caracter personal
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-foreground leading-relaxed">
                    Securitatea datelor cu caracter personal este importantă pentru noi. Păstrăm măsuri adecvate de precauţie de ordin administrativ, tehnic şi fizic pentru a proteja datele cu caracter personal împotriva distrugerii accidentale sau ilegale, pierderii accidentale, modificării, dezvăluirii sau accesului neautorizat, utilizării şi tuturor celorlalte forme legale de prelucrare a datelor cu caracter personal aflate în posesia noastră. De asemenea, utilizăm o conexiune internet securizată prin SSL, criptată pentru a preveni interceptarea (https).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Drepturi */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <FileText className="h-8 w-8 text-primary" />
                Drepturile dumneavoastră
              </h2>
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <p className="text-foreground leading-relaxed">
                    În conformitate cu dispoziţiile Regulamentului UE nr.679/2016, persoanele înregistrate, în calitate de persoane vizate, au următoarele drepturi:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground">
                    <li>dreptul la informare</li>
                    <li>dreptul de acces</li>
                    <li>dreptul de rectificare</li>
                    <li>dreptul de opoziţie</li>
                    <li>dreptul de a solicita ștergerea (dreptul de a fi uitat)</li>
                    <li>dreptul de a solicita restricționarea prelucrării</li>
                    <li>dreptul de portare</li>
                    <li>dreptul de a nu fi supus unei decizii individuale</li>
                    <li>dreptul de a se adresa cu plângere către ANSPDCP - Autoritatea de Supraveghere.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Actualizări */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Actualizarea politicii de confidenţialitate</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-foreground leading-relaxed">
                    Societatea noastră îşi rezervă dreptul de a schimba, modifica sau actualiza politica de confidenţialitate în orice moment, dar nu vă reduce nivelul de protecţie din cadrul acesteia. Acordăm cea mai mare importanță aspectelor legate de confidenţialitate şi intenţionăm să rămânem pe deplin conformați prevederilor legale în ceea ce priveşte politica de confidenţialitate şi protecţia datelor cu caracter personal. Vom actualiza periodic politica de confidenţialitate şi vom afişa noutăţile pe această pagină.
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
                    <Link to="/termeni-conditii" className="block text-primary hover:underline">
                      → Termeni și Condiții
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

export default PoliticaConfidentialitate;
