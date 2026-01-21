import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { Phone, AlertTriangle, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import RelatedArticles from "@/components/RelatedArticles";
import { relatedArticles } from "@/config/related-content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useSEOSchema } from "@/hooks/use-seo-schema";

const UrgenteDentare = () => {
  const faqs = [
    {
      question: "Pot să iau analgezice înainte să ajung la dentist?",
      answer: "Da, poți lua analgezice comune (paracetamol sau ibuprofen) pentru a gestiona durerea până ajungi la cabinet. Evită aspirina dacă există sângerare. Informează medicul ce ai luat."
    },
    {
      question: "Cât timp pot aștepta înainte să merg la dentist?",
      answer: "Depinde de urgență: traumatisme severe, sângerare abundentă sau infecții cu umflătură facială necesită atenție imediată. Plombe căzute sau dinți ușor fisurați pot aștepta 1-2 zile, dar nu amâna prea mult."
    },
    {
      question: "Pot să-mi pun singur plomba înapoi?",
      answer: "Nu încerca niciodată să îți montezi singur plomba! Poți folosi ciment dentar temporar din farmacie, dar este doar o soluție de urgență până ajungi la dentist în maximum 48 ore."
    },
    {
      question: "Ce fac dacă am o urgență dentară în weekend?",
      answer: "Contactează serviciul nostru de urgențe dentare disponibil non-stop la <a href='tel:0333630005' className='text-accent hover:underline font-semibold'>0333 630 005</a>. Avem program special pentru urgențe și în weekend pentru situații care nu pot aștepta."
    }
  ];

  const ArticleSchema = useSEOSchema({
    type: 'BlogPosting',
    canonical: '/blog/urgente-dentare',
    article: {
      headline: "Ți s-a rupt un dinte sau ți-a căzut o plombă? Ce faci înainte să ajungi la medic",
      description: "Ghid de prim ajutor dentar: ce faci când ți se rupe un dinte, cade plomba sau ai dureri severe. Sfaturi practice până ajungi la dentist.",
      image: "https://stomatologiepiatraneamt.ro/social-image.png",
      datePublished: "2025-01-20",
      dateModified: "2025-01-20"
    }
  });

  const FAQSchema = useSEOSchema({
    type: 'FAQPage',
    canonical: '/blog/urgente-dentare',
    faqs: faqs
  });

  return (
    <>
      {ArticleSchema}
      {FAQSchema}
      <Helmet>
        <title>Urgențe Dentare - Dinte Rupt, Plombă Căzută | Prim Ajutor Dentar</title>
        <meta name="description" content="Ghid de prim ajutor dentar: ce faci când ți se rupe un dinte, cade plomba sau ai dureri severe. Sfaturi practice până ajungi la dentist." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <Breadcrumbs 
          items={[
            { label: "Stomatologie Piatra Neamț", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Urgențe Dentare" }
          ]}
        />
        
        <section className="bg-accent py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-white max-w-4xl mb-4">
              Ți s-a rupt un dinte sau ți-a căzut o plombă? Ce faci înainte să ajungi la medic
            </h1>
            <div className="flex items-center gap-2 text-white/80">
              <Clock className="h-5 w-5" />
              <span>11 min de citit</span>
            </div>
          </div>
        </section>

        <article className="py-16 lg:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Social Share Buttons */}
            <div className="flex gap-3 mb-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const url = encodeURIComponent(window.location.href);
                  const text = encodeURIComponent("Ți s-a rupt un dinte sau ți-a căzut o plombă? Ce faci înainte să ajungi la medic");
                  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
                }}
              >
                <Share2 className="h-4 w-4 mr-2" />
                Facebook
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const url = encodeURIComponent(window.location.href);
                  const text = encodeURIComponent("Ți s-a rupt un dinte sau ți-a căzut o plombă? Ce faci înainte să ajungi la medic");
                  window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
                }}
              >
                <Share2 className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8">
                Urgențele dentare apar atunci când te aștepți mai puțin și pot fi înfricoșătoare. Știind 
                ce să faci în primele minute după accident sau la apariția problemei poate face diferența 
                între salvarea și pierderea dintelui. În acest ghid complet, îți explicăm exact ce măsuri 
                să iei pentru cele mai comune urgențe dentare.
              </p>

              <div className="bg-red-50 dark:bg-red-950/20 border-2 border-red-500 dark:border-red-700 rounded-lg p-6 mb-12">
                <div className="flex gap-3 items-start">
                  <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-red-900 dark:text-red-100 mt-0 mb-3">
                      Când este o urgență REALĂ (sună imediat la <a href="tel:0333630005" className="text-red-900 dark:text-red-100 underline font-bold hover:text-red-700 dark:hover:text-red-200">0333 630 005</a>):
                    </h3>
                    <ul className="list-disc pl-6 text-red-900 dark:text-red-100 mb-0">
                      <li>Dinte complet rupt cu rădăcina expusă</li>
                      <li>Dinte luxat (scos complet din alveolă)</li>
                      <li>Sângerare abundentă care nu se oprește după 15 minute</li>
                      <li>Umflătură severă a feței sau gâtului</li>
                      <li>Traumatism facial cu multiple dinți afectați</li>
                      <li>Durere extremă care nu răspunde la analgezice</li>
                      <li>Dificultăți de respirație sau înghițire</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                1. Dinte rupt sau fracturat
              </h2>
              
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Pași imediați:
              </h3>
              <ol className="list-decimal pl-6 mb-6 text-foreground space-y-3">
                <li>
                  <strong>Păstrează fragmentul rupt:</strong> Dacă găsești bucata ruptă, spală-o blând cu 
                  apă la temperatura camerei (nu freca!) și păstreaz-o într-un recipient cu lapte sau 
                  salivă. NU păstra în apă simplă - deteriorează dentina.
                </li>
                <li>
                  <strong>Clătește gura:</strong> Spală zona cu apă călduță pentru a îndepărta eventualele 
                  resturi și pentru a putea evalua gravitatea.
                </li>
                <li>
                  <strong>Oprește sângerarea:</strong> Dacă sângerează, aplică o compresă sterilă cu presiune ușoară timp de 10-15 minute.
                </li>
                <li>
                  <strong>Reduce umflarea:</strong> Aplică gheață pe obraz (15 minute cu pauză, 15 minute cu gheață) pentru a reduce inflamația și durerea.
                </li>
                <li>
                  <strong>Protejează marginile ascuțite:</strong> Dacă rămân margini ascuțite care îți 
                  rănesc limba sau obrajii, acoperă-le temporar cu ceară dentară sau chiar gumă de mestecat 
                  fără zahăr.
                </li>
                <li>
                  <strong>Gestionează durerea:</strong> Poți lua paracetamol sau ibuprofen conform dozei recomandate.
                </li>
                <li>
                  <strong>Contactează dentistul IMEDIAT:</strong> Chiar dacă fractură pare minoră, trebuie evaluată profesional cât mai curând.
                </li>
              </ol>

              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
                <h4 className="font-bold text-foreground mb-3">Tipuri de fracturi și gradul de urgență:</h4>
                <ul className="list-disc pl-6 text-foreground">
                  <li>
                    <strong>Fissură superficială în smalț:</strong> Nu este urgență extremă, dar programează 
                    vizită în 1-2 zile pentru a preveni agravarea.
                  </li>
                  <li>
                    <strong>Fractură de smalț și dentină (vezi zona galbenă):</strong> Urgență medie - 
                    programează în aceeași zi sau a doua zi dimineață.
                  </li>
                  <li>
                    <strong>Fractură cu pulpa expusă (vezi roșu, sângerare, durere severă):</strong> 
                    URGENȚĂ MAXIMĂ - sună imediat! Fiecare minut contează pentru salvarea dintelui.
                  </li>
                  <li>
                    <strong>Fractură de rădăcină:</strong> Foarte gravă - necesită evaluare urgentă cu radiografie.
                  </li>
                </ul>
              </div>

              <div className="flex justify-center my-8">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <a href="tel:0333630005">
                    <Phone className="mr-2 h-5 w-5" />
                    Sună acum: 0333 630 005
                  </a>
                </Button>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                2. Plombă căzută
              </h2>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Pași imediați:
              </h3>
              <ol className="list-decimal pl-6 mb-6 text-foreground space-y-3">
                <li>
                  <strong>NU arunca plomba:</strong> Chiar dacă pare ciudat, păstreaz-o și du-o cu tine la 
                  dentist - ajută medicul să vadă ce s-a întâmplat.
                </li>
                <li>
                  <strong>Curăță zona blând:</strong> Clătește gura cu apă călduță și folosește ața dentară 
                  foarte blând pentru a îndepărta resturile alimentare din cavitate.
                </li>
                <li>
                  <strong>Protejare temporară:</strong> Poți aplica ciment dentar temporar din farmacie (se 
                  găsește fără prescripție) pentru a acoperi cavitatea și a preveni sensibilitatea. Urmează 
                  instrucțiunile de pe ambalaj.
                </li>
                <li>
                  <strong>Evită acea parte:</strong> Nu mesteca pe partea unde a căzut plomba până ajungi la dentist.
                </li>
                <li>
                  <strong>Evită extremele de temperatură:</strong> Nu consuma alimente/băuturi foarte fierbinți 
                  sau foarte reci - dintele neprotejat va fi extrem de sensibil.
                </li>
                <li>
                  <strong>Programează cât mai curând:</strong> Ideal în aceeași zi sau maxim 48 ore. Cu cât 
                  aștepți mai mult, cu atât crește riscul de carie sau fractură.
                </li>
              </ol>

              <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-600 dark:border-yellow-800 rounded-lg p-6 mb-8">
                <h4 className="font-bold text-foreground mb-3">⚠️ NU face aceste greșeli:</h4>
                <ul className="list-disc pl-6 text-foreground">
                  <li>NU încerca să montezi plomba înapoi cu lipici sau alți adezivi casnici</li>
                  <li>NU folosi guma de mestecat ca "plombă temporară" - se lipește și agravează situația</li>
                  <li>NU amâna vizita la dentist - "poate aștepta" devine rapid "urgență cu dureri"</li>
                  <li>NU mesteca pe acea parte chiar dacă nu doare</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                3. Dinte luxat (scos complet)
              </h2>
              <p className="text-foreground mb-4">
                Aceasta este cea mai critică urgență dentară. Șansele de salvare a dintelui depind EXTREM 
                de mult de rapiditatea reacției și de modul în care manipulezi dintele.
              </p>

              <div className="bg-red-50 dark:bg-red-950/20 border-2 border-red-500 dark:border-red-700 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 text-xl">
                  ⏰ TIMPUL ESTE CRITIC: Fiecare minut contează!
                </h4>
                <p className="text-red-900 dark:text-red-100 mb-3">
                  Ai mai puțin de 30 minute pentru a maximiza șansele de salvare a dintelui. După 60 de minute, 
                  probabilitatea de succes scade dramatic.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Pași critici (în ordine):
              </h3>
              <ol className="list-decimal pl-6 mb-6 text-foreground space-y-3">
                <li>
                  <strong>Găsește dintele IMEDIAT:</strong> Ridică-l DOAR de coroană (partea albă), 
                  NICIODATĂ de rădăcină!
                </li>
                <li>
                  <strong>Curăță blând (dacă este murdar):</strong> Clătește FOARTE blând cu lapte sau salivă. 
                  NU folosi apă de la robinet, NU freca, NU ștergși rădăcina! Celulele de pe rădăcină sunt vitale.
                </li>
                <li>
                  <strong>IDEAL - Reimplantare imediată:</strong> Dacă ești capabil (adult cooperant, copil 
                  mai mare care nu va înghiți dintele), încearcă să-l pui înapoi în alveolă:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Asigură-te că este în poziția corectă</li>
                    <li>Apasă ferm dar blând</li>
                    <li>Mușcă o compresă sterilă pentru a-l menține în poziție</li>
                    <li>Mergi IMEDIAT la dentist</li>
                  </ul>
                </li>
                <li>
                  <strong>ALTERNATIV - Păstrare corectă:</strong> Dacă nu poți pune dintele înapoi:
                  <ul className="list-disc pl-6 mt-2">
                    <li><strong>Cea mai bună opțiune:</strong> În laptele rece (nu lapte vegetal!)</li>
                    <li><strong>A doua opțiune:</strong> În salivă (între obraz și gingie sau într-un vas cu saliva ta)</li>
                    <li><strong>A treia opțiune:</strong> Soluție salină</li>
                    <li><strong>NICIODATĂ în apă simplă sau uscat!</strong></li>
                  </ul>
                </li>
                <li>
                  <strong>Oprește sângerarea:</strong> Aplică o compresă sterilă cu presiune pe locul gol.
                </li>
                <li>
                  <strong>SUNĂ IMEDIAT la <a href="tel:0333630005" className="text-accent hover:underline">0333 630 005</a> și anunță că vii cu urgență maximă cu dinte luxat!</strong>
                </li>
                <li>
                  <strong>Ajunge la cabinet în MAXIM 30 minute!</strong> Fiecare minut întârziat reduce șansele de salvare.
                </li>
              </ol>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                4. Durere dentară severă
              </h2>
              
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Pași imediați:
              </h3>
              <ol className="list-decimal pl-6 mb-6 text-foreground space-y-3">
                <li>
                  <strong>Curăță zona:</strong> Spală-te pe dinți blând și folosește ața dentară - uneori 
                  durerea este cauzată de resturi alimentare blocate între dinți.
                </li>
                <li>
                  <strong>Clătire cu apă sărată:</strong> Dizolvă o linguriță de sare în apă călduță și 
                  clătește de 2-3 ori. Are efect antiseptic și calmant.
                </li>
                <li>
                  <strong>Gheață pe obraz:</strong> 15 minute cu gheață, 15 minute pauză. Reduce inflamația și amorțește durerea.
                </li>
                <li>
                  <strong>Analgezice:</strong> Ibuprofen 400mg sau paracetamol 500-1000mg conform prospectului. 
                  NU pune aspirina direct pe gingie - provoacă arsuri!
                </li>
                <li>
                  <strong>Poziție ridicată:</strong> Dormi cu capul ridicat pe 2-3 perne pentru a reduce presiunea.
                </li>
                <li>
                  <strong>Programează urgență:</strong> Durerea severă indică de obicei carie profundă, 
                  abces sau problemă de nerv - necesită tratament profesional cât mai curând.
                </li>
              </ol>

              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-8">
                <h4 className="font-bold text-foreground mb-3">Semnele că durerea este URGENȚĂ:</h4>
                <ul className="list-disc pl-6 text-foreground">
                  <li>Umflarea feței sau gingiilor</li>
                  <li>Febră (peste 38°C)</li>
                  <li>Durere pulsatilă care te trezește noaptea</li>
                  <li>Gust sau miros neplăcut persistent</li>
                  <li>Dificultăți la deschiderea gurii sau înghițire</li>
                  <li>Durerea durează mai mult de 1-2 zile sau se agravează</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                5. Coroană sau punte căzută
              </h2>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Pași imediați:
              </h3>
              <ol className="list-decimal pl-6 mb-6 text-foreground space-y-3">
                <li>
                  <strong>Păstrează coroana:</strong> Nu o arunca! Spală-o blând și păstreaz-o într-un loc sigur.
                </li>
                <li>
                  <strong>Curăță dintele:</strong> Periază blând dintele rămas expus și clătește gura.
                </li>
                <li>
                  <strong>Încercare de fixare temporară:</strong> Poți încerca să pui coroana înapoi folosind 
                  ciment dentar temporar sau pasta de dinți (DOAR temporar până la dentist, nu este soluție permanentă!):
                  <ul className="list-disc pl-6 mt-2">
                    <li>Aplică puțin ciment în interior</li>
                    <li>Poziționează coroana corect</li>
                    <li>Mușcă blând pentru a o așeza bine</li>
                    <li>Șterge excesul de ciment</li>
                  </ul>
                </li>
                <li>
                  <strong>Evită acea zonă:</strong> Nu mesteca pe partea respectivă.
                </li>
                <li>
                  <strong>Programează cât mai curând:</strong> Ideal în aceeași zi. Dintele rămas neprotejat 
                  se poate fractura sau deplasa.
                </li>
              </ol>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                Ce să ai mereu în trusa de prim ajutor dentar
              </h2>
              <p className="text-foreground mb-4">
                Pregătește o trusă mică cu:
              </p>
              <ul className="list-disc pl-6 mb-8 text-foreground">
                <li>Comprese sterile</li>
                <li>Ciment dentar temporar (farmacie)</li>
                <li>Ceară dentară ortodontică</li>
                <li>Analgezice (paracetamol, ibuprofen)</li>
                <li>Container mic pentru păstrarea dinților/fragmentelor</li>
                <li>Numărul de urgență al dentistului (<a href="tel:0333630005" className="text-accent hover:underline font-semibold">0333 630 005</a>)</li>
                <li>Mănuși medicale de unică folosință</li>
                <li>Oglindă dentară mică</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                Întrebări frecvente despre urgențele dentare
              </h2>
              <Accordion type="single" collapsible className="mb-12">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="bg-primary/5 rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Urgențe dentare în Piatra Neamț - Suntem aici pentru tine!
                </h3>
                <p className="text-foreground mb-6">
                  Oferim servicii de urgențe stomatologice cu echipamentul și experiența necesare pentru a 
                  gestiona orice urgență dentară. Suntem pregătiți să te ajutăm rapid. Nu amâna - contactează-ne imediat!
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                    <a href="tel:0333630005">
                      <Phone className="mr-2 h-5 w-5" />
                      URGENȚE: 0333 630 005
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/servicii/urgente">Detalii urgențe dentare</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </article>

        <RelatedArticles articles={relatedArticles['urgente-dentare-dinte-rupt']} />

        <Footer />
      </div>
    </>
  );
};

export default UrgenteDentare;
