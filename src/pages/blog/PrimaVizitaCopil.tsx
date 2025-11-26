import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { Phone, Clock, Share2 } from "lucide-react";
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

const PrimaVizitaCopil = () => {
  const faqs = [
    {
      question: "La ce vârstă ar trebui să duc copilul pentru prima dată la dentist?",
      answer: "Recomandăm prima vizită la dentist în jurul vârstei de 1 an sau când apare primul dințișor. Controalele timpurii ajută la prevenirea problemelor și obișnuiesc copilul cu mediul cabinetului stomatologic."
    },
    {
      question: "Ce se întâmplă dacă copilul plânge sau refuză să coopereze?",
      answer: "Este perfect normal! Nu forțăm niciodată copilul. Avem răbdare, folosim tehnici de distragere a atenției și transformăm vizita într-o experiență pozitivă. Uneori sunt necesare mai multe vizite scurte pentru a câștiga încrederea."
    },
    {
      question: "Trebuie să rămân cu copilul în cabinet?",
      answer: "Pentru copiii mici (sub 3-4 ani), părintele rămâne în cabinet. Pentru cei mai mari, depinde de preferința copilului - unii se simt mai curajoși singuri, alții preferă prezența părintelui."
    },
    {
      question: "Cât durează prima vizită?",
      answer: "Prima vizită durează de obicei 20-30 de minute. Includere consultație, examinare blândă, eventual curățare ușoară și aplicare fluor. Păstrăm totul scurt și plăcut pentru a nu obosi copilul."
    }
  ];

  const ArticleSchema = useSEOSchema({
    type: 'BlogPosting',
    canonical: '/blog/prima-vizita-copil-dentist',
    article: {
      headline: "Cum pregătești copilul pentru prima vizită la dentist",
      description: "Sfaturi practice pentru părinți despre cum să pregătească copilul pentru prima vizită la dentist. Creează o experiență pozitivă și reduce anxietatea copilului.",
      image: "https://storage.googleapis.com/gpt-engineer-file-uploads/4JwdkPfG3Mgryfl0Byt7yN5KIf43/social-images/social-1763674029142-stomatologie piatra neamt - echipa medstom.webp",
      datePublished: "2025-01-20",
      dateModified: "2025-01-20"
    }
  });

  const FAQSchema = useSEOSchema({
    type: 'FAQPage',
    canonical: '/blog/prima-vizita-copil-dentist',
    faqs: faqs
  });

  return (
    <>
      {ArticleSchema}
      {FAQSchema}
      <Helmet>
        <title>Cum Pregătești Copilul pentru Prima Vizită la Dentist | Ghid pentru Părinți</title>
        <meta name="description" content="Sfaturi practice pentru părinți despre cum să pregătească copilul pentru prima vizită la dentist. Creează o experiență pozitivă și reduce anxietatea copilului." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <Breadcrumbs 
          items={[
            { label: "Stomatologie Piatra Neamț", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Prima Vizită Copil" }
          ]}
        />
        
        <section className="bg-accent py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-white max-w-4xl mb-4">
              Cum pregătești copilul pentru prima vizită la dentist
            </h1>
            <div className="flex items-center gap-2 text-white/80">
              <Clock className="h-5 w-5" />
              <span>10 min de citit</span>
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
                  const text = encodeURIComponent("Cum pregătești copilul pentru prima vizită la dentist");
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
                  const text = encodeURIComponent("Cum pregătești copilul pentru prima vizită la dentist");
                  window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
                }}
              >
                <Share2 className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-4">
                Prima vizită la dentist poate părea intimidantă atât pentru copil, cât și pentru părinte. 
                Dar, cu pregătirea potrivită, poți transforma această experiență într-un moment pozitiv care va stabili baza pentru o relație sănătoasă cu medicina dentară pe tot parcursul vieții copilului. 
                Iată tot ce trebuie să știi pentru a pregăti copilul pentru prima vizită la dentist.
              </p>

              <p className="text-xl text-muted-foreground mb-8">
                Prima vizită la dentist nu este doar despre verificarea dinților - este despre crearea unei experiențe pozitive care va influența atitudinea copilului față de sănătatea orală pentru întreaga viață. 
                Copiii care au vizite plăcute la dentist devin adulți care nu își neglijează sănătatea dentară.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                Pregătirea emoțională a copilului
              </h2>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                1. Vorbește pozitiv despre vizită
              </h3>
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-foreground mb-3">Ce SĂ spui:</h4>
                <ul className="list-disc pl-6 text-foreground">
                  <li>"Mergem să vedem pe doctorul care se ocupă de dinții să fie sănătoși"</li>
                  <li>"Doctorul o să-ți numere dinții și o să-i facă să strălucească"</li>
                  <li>"O să vezi un scaun special care se urcă și se coboară"</li>
                  <li>"Doctorul are o oglindă mică ca să poată vedea bine fiecare dințișor"</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-8">
                <h4 className="font-bold text-foreground mb-3">Ce să NU spui:</h4>
                <ul className="list-disc pl-6 text-foreground">
                  <li>"Nu o să doară deloc" (plantează ideea că ar putea durea)</li>
                  <li>"Nu fi copil fricos" (invalidează emoțiile copilului)</li>
                  <li>"Dacă ești cuminte primești cadou" (implică că e ceva neplăcut)</li>
                  <li>Propriile tale experiențe negative la dentist</li>
                  <li>Cuvinte ca "ac", "durere", "frică", "bormasină"</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                2. Folosește jocul de rol
              </h3>
              <p className="text-foreground mb-4">
                Copiii învață cel mai bine prin joacă. Iată câteva idei:
              </p>
              <ul className="list-disc pl-6 mb-8 text-foreground">
                <li>
                  <strong>Joacă-te de-a dentistul:</strong> Folosește o periuță de dinți ca să "verifici" 
                  dinții jucăriilor sau ai părintelui
                </li>
                <li>
                  <strong>Cărți despre dentist:</strong> Citește povești cu personaje care merg la dentist 
                  și trăiesc experiențe pozitive
                </li>
                <li>
                  <strong>Videoclipuri educaționale:</strong> Multe canale pentru copii au episoade despre 
                  vizita la dentist
                </li>
                <li>
                  <strong>Exercițiu "deschide gura mare":</strong> Fă-l un joc să vadă cine poate deschide 
                  gura mai mare sau mai mult timp
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                3. Alege momentul potrivit
              </h3>
              <p className="text-foreground mb-4">
                Programează vizita:
              </p>
              <ul className="list-disc pl-6 mb-8 text-foreground">
                <li>Dimineața, când copilul este odihnit și cooperant</li>
                <li>Nu după un eveniment stresant sau schimbări majore în viața copilului</li>
                <li>Nu imediat după masa (unii copii au reflexul de vărsătură când li se atinge gura)</li>
                <li>Evită perioadele când copilul are nevoie de somn</li>
              </ul>

              <div className="flex justify-center my-8">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <a href="tel:0333630005">
                    <Phone className="mr-2 h-5 w-5" />
                    Sună acum: 0333 630 005
                  </a>
                </Button>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                În ziua vizitei
              </h2>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Înainte de a pleca de acasă
              </h3>
              <ul className="list-disc pl-6 mb-8 text-foreground">
                <li>Asigură-te că copilul este odihnit și hrănit (dar nu imediat înainte)</li>
                <li>Mergi la baie înainte de a pleca</li>
                <li>Îmbracă copilul confortabil - evită hainele strâmte sau incomode</li>
                <li>Ia jucăria sau păturița preferată pentru confort</li>
                <li>Planifică să ajungi cu 10-15 minute înainte pentru a vă acomoda</li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                La cabinet
              </h3>
              <p className="text-foreground mb-4">
                Atitudinea ta contează enorm! Copiii simt anxietatea părinților, așa că:
              </p>
              <ul className="list-disc pl-6 mb-8 text-foreground">
                <li>Fii calm și zâmbitor - transmite încredere</li>
                <li>Lasă-l să exploreze sala de așteptare și jucăriile</li>
                <li>Nu-i spune "nu fi fricos" sau "comportă-te frumos" (creează presiune)</li>
                <li>Susține echipa medicală și urmează indicațiile lor</li>
                <li>Dacă copilul plânge, rămâi calm - este normal</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                Ce se întâmplă la prima vizită?
              </h2>
              <p className="text-foreground mb-6">
                Prima vizită este scurtă, blândă și concepută pentru a face cunoștință. Iată ce va include:
              </p>

              <ol className="list-decimal pl-6 mb-8 text-foreground space-y-4">
                <li>
                  <strong>Turul cabinetului:</strong> Copilul explorează scaunul dentar, vede instrumentele, 
                  se urcă și se coboară cu scaunul magic
                </li>
                <li>
                  <strong>Examinare blândă:</strong> Medicul numără dinții, verifică gingiile și mușcătura 
                  folosind o oglindă mică
                </li>
                <li>
                  <strong>Curățare ușoară:</strong> Dacă copilul cooperează, se face o curățare blândă cu 
                  periuță specială
                </li>
                <li>
                  <strong>Aplicare fluor:</strong> Un gel cu gust plăcut care întărește smalțul
                </li>
                <li>
                  <strong>Sfaturi pentru părinți:</strong> Informații despre igiena orală, alimentație și 
                  dezvoltarea normală a dinților
                </li>
                <li>
                  <strong>Cadou și laude:</strong> Copilul primește un mic cadou și foarte multe laude pentru 
                  curaj
                </li>
              </ol>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                După vizită - întărește experiența pozitivă
              </h2>
              <ul className="list-disc pl-6 mb-8 text-foreground">
                <li>Laudă copilul pentru curaj, indiferent cum a decurs vizita</li>
                <li>Povestiți împreună despre experiență și ce i-a plăcut cel mai mult</li>
                <li>Fă fotografii cu cadoul sau cu "diploma de curaj"</li>
                <li>Nu folosi vizita la dentist ca amenințare niciodată ("Dacă nu te speli o să mergem la dentist")</li>
                <li>Continuă să vorbești pozitiv despre dentist în conversațiile zilnice</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                Ce faci dacă vizita nu merge bine?
              </h2>
              <p className="text-foreground mb-6">
                Uneori, în ciuda pregătirii, copiii nu cooperează. Este absolut normal și nu înseamnă că 
                ai eșuat ca părinte. Iată ce poți face:
              </p>
              <ul className="list-disc pl-6 mb-8 text-foreground">
                <li>Nu certa sau pedepsește copilul - ar asocia dentistul cu ceva rău</li>
                <li>Rămâi calm și îți arată suportul</li>
                <li>Colaborează cu medicul pentru o nouă vizită de obișnuire</li>
                <li>Continuă pregătirea acasă prin joc și povești</li>
                <li>Fii răbdător - unii copii au nevoie de 2-3 vizite scurte pentru a se acomoda</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                Sfaturi pentru vizitele viitoare
              </h2>
              <p className="text-foreground mb-4">
                Pentru a menține atitudinea pozitivă pe termen lung:
              </p>
              <ul className="list-disc pl-6 mb-8 text-foreground">
                <li>Programează controale regulate la 6 luni</li>
                <li>Nu folosi vizita la dentist ca pedeapsă sau amenințare</li>
                <li>Întărește importanța periajului zilnic acasă</li>
                <li>Fii un model - arată-i că și tu te speli pe dinți și mergi la dentist</li>
                <li>Celebrează fiecare vizită reușită, nu doar rezultatul</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                Întrebări frecvente
              </h2>
              <Accordion type="single" collapsible className="mb-12">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="bg-primary/5 rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Cabinet prietenos cu copiii în Piatra Neamț
                </h3>
                <p className="text-foreground mb-6">
                  Avem experiență vastă în tratarea copiilor și știm cum să transformăm vizita la dentist 
                  într-o experiență pozitivă. Prima consultație este gratuită și dedicată în special pentru 
                  a face cunoștință cu micuțul tău într-un mediu relaxat și prietenos.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link to="/contact">Programează prima vizită</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="tel:0333630005">
                      <Phone className="mr-2 h-5 w-5" />
                      0333 630 005
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </article>

        <RelatedArticles articles={relatedArticles['prima-vizita-copil-dentist']} />

        <Footer />
      </div>
    </>
  );
};

export default PrimaVizitaCopil;
