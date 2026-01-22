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

const Parodontoza = () => {
  const faqs = [
    {
      question: "Parodontoza se vindecă complet?",
      answer: "Parodontoza în stadii avansate nu se vindecă complet, dar poate fi oprită din progresie și stabilizată. În stadiile timpurii (gingivita), vindecarea completă este posibilă cu tratament adecvat și igienă riguroasă."
    },
    {
      question: "Voi pierde dinții dacă am parodontoză?",
      answer: "Nu în mod necesar! Dacă este diagnosticată și tratată la timp, parodontoza poate fi controlată și dinții pot fi salvați. Cu cât intervenția este mai rapidă, cu atât șansele de păstrare a dinților sunt mai mari."
    },
    {
      question: "Este dureros tratamentul pentru parodontoză?",
      answer: "Procedurile se fac sub anestezie locală, așa că nu vei simți durere în timpul tratamentului. După procedură poți simți un ușor disconfort care se gestionează cu analgezice și dispare în 2-3 zile."
    },
    {
      question: "Cât costă tratamentul parodontal?",
      answer: "Costul depinde de severitatea cazului și de tratamentele necesare: detartraj și curetaj 300-600 lei per ședință, tratament parodontal complex 1500-4000 lei per arcadă. Evaluăm și oferim plan de tratament detaliat cu costuri clare."
    }
  ];

  const ArticleSchema = useSEOSchema({
    type: 'BlogPosting',
    canonical: '/blog/parodontoza',
    article: {
      headline: "Ai dinți care se mișcă? Cum recunoști și tratezi parodontoza, pas cu pas",
      description: "Ghid complet despre parodontoză: cum o recunoști, stadii de evoluție, opțiuni de tratament pas cu pas și prevenție. Salvează-ți dinții la timp.",
      image: "https://stomatologiepiatraneamt.ro/social-image.png",
      datePublished: "2025-01-20",
      dateModified: "2025-01-20"
    }
  });

  const FAQSchema = useSEOSchema({
    type: 'FAQPage',
    canonical: '/blog/parodontoza',
    faqs: faqs
  });

  return (
    <>
      {ArticleSchema}
      {FAQSchema}
      <Helmet>
        <title>Parodontoză - Simptome, Tratament și Prevenție | Dinți Care Se Mișcă</title>
        <meta name="description" content="Ghid complet despre parodontoză: cum o recunoști, stadii de evoluție, opțiuni de tratament pas cu pas și prevenție. Salvează-ți dinții la timp." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <Breadcrumbs 
          items={[
            { label: "Stomatologie Piatra Neamț", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Parodontoză" }
          ]}
        />
        
        <section className="bg-accent py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-white max-w-4xl mb-4">
              Ai dinți care se mișcă? Cum recunoști și tratezi parodontoza, pas cu pas
            </h1>
            <div className="flex items-center gap-2 text-white/80">
              <Clock className="h-5 w-5" />
              <span>14 min de citit</span>
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
                  const text = encodeURIComponent("Ai dinți care se mișcă? Cum recunoști și tratezi parodontoza, pas cu pas");
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
                  const text = encodeURIComponent("Ai dinți care se mișcă? Cum recunoști și tratezi parodontoza, pas cu pas");
                  window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
                }}
              >
                <Share2 className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8">
                Dinții care se mișcă, sângerează gingiile sau ai observat că dinții par mai lungi decât înainte? 
                Acestea pot fi semne ale parodontozei, o boală comună dar gravă care afectează țesuturile de 
                susținere ale dinților. Vestea bună este că, depistată la timp, parodontoza poate fi oprită și 
                dinții pot fi salvați. În acest ghid complet, îți explicăm tot ce trebuie să știi despre această afecțiune.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                Ce este parodontoza?
              </h2>
              <p className="text-foreground mb-6">
                Parodontoza (boala parodontală sau parodontita) este o infecție bacteriană cronică care 
                distruge treptat gingiile, osul și ligamentele care susțin dinții. Este ca și cum fundația 
                unei case ar putea să cedeze - dintele în sine poate fi sănătos, dar pierde susținerea și 
                în final se clatină și poate cădea.
              </p>
              <p className="text-foreground mb-8">
                Parodontoza este principala cauză de pierdere a dinților la adulți după vârsta de 35 de ani, 
                afectând aproximativ 50% dintre adulți într-o formă sau alta. Multe persoane nu realizează 
                că au această boală pentru că simptomele timpurii sunt subtile și nedureroase.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                Cum începe totul? De la gingivită la parodontoză
              </h2>
              <p className="text-foreground mb-6">
                Parodontoza nu apare brusc - este rezultatul unei progresii:
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 p-6">
                  <h4 className="font-bold text-foreground mb-2">Stadiul 1: Placa bacteriană</h4>
                  <p className="text-foreground text-sm">
                    Totul începe cu placa bacteriană (biofilmul) care se formează constant pe dinți. 
                    Dacă nu este îndepărtată zilnic prin periaj și ață dentară, bacteriile produc toxine.
                  </p>
                </div>

                <div className="bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-500 p-6">
                  <h4 className="font-bold text-foreground mb-2">Stadiul 2: Gingivita (reversibil)</h4>
                  <p className="text-foreground text-sm mb-2">
                    Toxinele irită gingiile, provocând inflamație. Gingiile devin roșii, umflate și sângerează 
                    la periaj. <strong>La acest stadiu, boala este complet reversibilă cu tratament corespunzător!</strong>
                  </p>
                  <p className="text-foreground text-sm">
                    <strong>Semne:</strong> Sângerare la periaj, gingii roșii/umflate, halena (respirație urât mirositoare)
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-6">
                  <h4 className="font-bold text-foreground mb-2">Stadiul 3: Parodontita timpurie (parțial ireversibil)</h4>
                  <p className="text-foreground text-sm mb-2">
                    Infecția se extinde sub nivelul gingiilor, formând buzunare parodontale. Începe distrugerea 
                    osului și a ligamentelor. <strong>Pagubele existente sunt permanente, dar progresia poate fi oprită cu <Link to="/servicii/parodontologie-piatra-neamt" className="text-primary hover:underline">tratament parodontal</Link>.</strong>
                  </p>
                  <p className="text-foreground text-sm">
                    <strong>Semne:</strong> Retracția gingivală (dinții par mai lungi), sensibilitate, mici spații între dinți
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-700 p-6">
                  <h4 className="font-bold text-foreground mb-2">Stadiul 4: Parodontita moderată</h4>
                  <p className="text-foreground text-sm mb-2">
                    Pierdere semnificativă de os (25-50%). Buzunare parodontale profunde. Dinții încep să se miște ușor.
                  </p>
                  <p className="text-foreground text-sm">
                    <strong>Semne:</strong> Dinți care se clatină, sângerare frecventă, puroi între gingie și dinte, 
                    retracție gingivală evidentă
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-900 p-6">
                  <h4 className="font-bold text-foreground mb-2">Stadiul 5: Parodontita avansată (severă)</h4>
                  <p className="text-foreground text-sm mb-2">
                    Pierdere masivă de os (peste 50%). Dinții sunt foarte mobili și pot cădea spontan sau necesită extracție.
                  </p>
                  <p className="text-foreground text-sm">
                    <strong>Semne:</strong> Dinți foarte mobili, durere la mestecat, schimbarea poziției dinților, 
                    abcese frecvente, pierdere de dinți
                  </p>
                </div>
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
                Cum recunoști parodontoza? Semne de alarmă
              </h2>
              <p className="text-foreground mb-4">
                Fii atent la aceste simptome - cu cât intervii mai repede, cu atât șansele de salvare a dinților sunt mai mari:
              </p>

              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-8">
                <h4 className="font-bold text-foreground mb-4">🚨 Mergi URGENT la dentist dacă ai:</h4>
                <ul className="list-disc pl-6 text-foreground text-base space-y-2 [&_a]:text-primary [&_a]:hover:underline">
                  <li>Gingii care sângerează spontan sau la cel mai ușor atingere</li>
                  <li>Gingii roșii închis, violacee sau strălucitoare (nu roz pal sănătos)</li>
                  <li>Gingii umflate, sensibile sau dureroase</li>
                  <li>Dinți care se clatină sau s-au deplasat vizibil</li>
                  <li>Retracție gingivală - dinții par mai lungi, rădăcinile se văd</li>
                  <li>Spații noi apărute între dinți</li>
                  <li>Puroi între gingie și dinte</li>
                  <li>Haleană persistentă sau gust neplăcut constant</li>
                  <li>Schimbarea modului în care dinții se închid la mușcat</li>
                  <li>Proteze parțiale care nu mai stau bine (dinții s-au mutat)</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                Cine este la risc? Factori care favorizează parodontoza
              </h2>
              <ul className="list-disc pl-6 mb-8 text-foreground text-base [&_a]:text-primary [&_a]:hover:underline">
                <li>
                  <strong>Igiena orală deficitară:</strong> Cel mai important factor! Periaj insuficient sau 
                  nefolosirea aței dentare
                </li>
                <li>
                  <strong>Fumatul:</strong> Fumătorii au de 2-7 ori mai multe șanse să dezvolte parodontoză severă
                </li>
                <li>
                  <strong>Diabetul zaharat:</strong> Creșterile glicemiei favorizează infecțiile și încetinesc vindecarea
                </li>
                <li>
                  <strong>Factori genetici:</strong> 30% din populație are predispoziție genetică
                </li>
                <li>
                  <strong>Stresul:</strong> Slăbește sistemul imunitar și favorizează infecțiile
                </li>
                <li>
                  <strong>Medicamentele:</strong> Unele reduc producția de salivă sau provoacă creșterea gingivală
                </li>
                <li>
                  <strong>Sarcina:</strong> Schimbările hormonale pot agrava gingivita
                </li>
                <li>
                  <strong>Deficiențe nutriționale:</strong> Lipsa vitaminei C și a altor nutrienți
                </li>
                <li>
                  <strong>Bruxismul:</strong> Scrâșnitul dinților agravează distrugerea osoasă
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                Diagnostic - cum se depistează parodontoza?
              </h2>
              <ol className="list-decimal pl-6 mb-8 text-foreground text-base space-y-3 [&_a]:text-primary [&_a]:hover:underline">
                <li>
                  <strong>Examen clinic:</strong> Medicul verifică culoarea, textura și sângerarea gingiilor
                </li>
                <li>
                  <strong>Sondaj parodontal:</strong> Se măsoară adâncimea buzunarelor parodontale cu o sondă 
                  graduată. Normal: 1-3mm. Probleme: peste 4mm
                </li>
                <li>
                  <strong>Evaluarea mobilității dentare:</strong> Se verifică gradul de clătinare al fiecărui dinte
                </li>
                <li>
                  <strong><Link to="/servicii/radiologie-dentara-piatra-neamt">Radiografii dentare</Link>:</strong> Esențiale pentru a vedea gradul de pierdere osoasă și 
                  a stabili prognosticul fiecărui dinte
                </li>
                <li>
                  <strong>Status parodontal complet:</strong> Hartă detaliată cu toate măsurătorile pentru 
                  fiecare dinte
                </li>
              </ol>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                Tratamentul parodontozei - pas cu pas
              </h2>
              <p className="text-foreground mb-6">
                Tratamentul depinde de severitatea bolii și este întotdeauna personalizat:
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Faza 1: Tratament parodontal inițial (non-chirurgical)
              </h3>
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
                <ol className="list-decimal pl-6 text-foreground text-base space-y-3 [&_a]:text-primary [&_a]:hover:underline">
                  <li>
                    <strong><Link to="/servicii/profilaxie">Detartraj supragingival</Link>:</strong> Îndepărtarea plăcii și tartrului de deasupra gingiilor
                  </li>
                  <li>
                    <strong>Curetaj și nivelare radiculară (detartraj subgingival):</strong> Curățarea 
                    profundă a buzunarelor parodontale și netezirea rădăcinilor. Se face sub anestezie locală, 
                    de obicei în 2-4 ședințe
                  </li>
                  <li>
                    <strong>Instruire în igienă orală:</strong> Învățarea tehnicilor corecte de periaj, 
                    folosire ață dentară și periuță interdentară
                  </li>
                  <li>
                    <strong>Control chimio-mecanic:</strong> Uneori se prescriu geluri sau irigații antiseptice
                  </li>
                  <li>
                    <strong>Tratament medicamentos (dacă e necesar):</strong> Antibiotice locale sau sistemice 
                    în cazuri severe
                  </li>
                </ol>
              </div>

              <p className="text-foreground mb-6">
                După 4-6 săptămâni se face reevaluare. Dacă răspunsul este bun (buzunare reduse, fără sângerare), 
                se trece la întreținere. Dacă buzunarele profunde persistă, se consideră tratament chirurgical.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Faza 2: Tratament parodontal chirurgical (cazuri moderate-severe)
              </h3>
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
                <ul className="list-disc pl-6 text-foreground text-base space-y-3 [&_a]:text-primary [&_a]:hover:underline">
                  <li>
                    <strong>Chirurgie cu lambou parodontal:</strong> Se ridică gingiile pentru acces direct 
                    la buzunare și rădăcini, se curăță complet, apoi se repoziționează
                  </li>
                  <li>
                    <strong>Grefă osoasă:</strong> În zonele cu pierdere osoasă severă, se poate stimula 
                    regenerarea cu biomateriale
                  </li>
                  <li>
                    <strong>Regenerare tisulară ghidată:</strong> Membrane speciale care permit regenerarea 
                    osului și ligamentului parodontal
                  </li>
                  <li>
                    <strong>Grefă gingivală:</strong> Pentru acoperirea rădăcinilor expuse și creșterea 
                    cantității de gingii atașată
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Faza 3: Întreținere parodontală (pe viață!)
              </h3>
              <p className="text-foreground mb-4">
                Aceasta este faza cea mai importantă! Parodontoza este o boală cronică care necesită monitorizare constantă:
              </p>
              <ul className="list-disc pl-6 mb-8 text-foreground text-base [&_a]:text-primary [&_a]:hover:underline">
                <li>Controale regulate la 3-4 luni (nu la 6 luni ca pacienții fără parodontoză!)</li>
                <li>Curățări profesionale periodice</li>
                <li>Monitorizarea buzunarelor și a mobilității</li>
                <li>Radiografii anuale pentru verificarea osului</li>
                <li>Reîmprospătarea tehnicilor de igienă orală</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                Îngrijirea acasă - esențială pentru succes
              </h2>
              <p className="text-foreground mb-4">
                Tratamentul profesional reprezintă doar 30% din succes. Celelalte 70% depind de tine!
              </p>

              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
                <h4 className="font-bold text-foreground mb-4">Rutina zilnică obligatorie:</h4>
                <ul className="list-disc pl-6 text-foreground text-base space-y-2 [&_a]:text-primary [&_a]:hover:underline">
                  <li>
                    <strong>Periaj de 2 ori pe zi, 2 minute:</strong> Folosește o periuță cu peri moi sau 
                    electrică, tehnică corectă (nu orizontal!)
                  </li>
                  <li>
                    <strong>Ață dentară ZILNIC:</strong> Obligatoriu seara. Curăță 40% din suprafața dinților 
                    pe care periuța nu o atinge
                  </li>
                  <li>
                    <strong>Periuțe interdentare:</strong> Pentru spațiile mai mari între dinți
                  </li>
                  <li>
                    <strong>Clătire cu apă de gură:</strong> Antimicrobiană, fără alcool, după ce te-ai spălat pe dinți
                  </li>
                  <li>
                    <strong>Irigator oral (opțional):</strong> Waterpik sau similar pentru spălarea buzunarelor
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                Prevenția - cum eviți parodontoza?
              </h2>
              <ul className="list-disc pl-6 mb-8 text-foreground text-base [&_a]:text-primary [&_a]:hover:underline">
                <li>Periază-te pe dinți de 2 ori pe zi și folosește ața dentară zilnic</li>
                <li>Detartraj profesional la 6 luni</li>
                <li>Alimentație echilibrată, bogată în vitamine (mai ales C)</li>
                <li>NU fuma! Sau măcar încearcă să te lași</li>
                <li>Controlează diabetul dacă suferi de această afecțiune</li>
                <li>Gestionează stresul</li>
                <li>Nu ignora sângerarea gingiilor - consultă medicul imediat</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                Prognostic - ce te poți aștepta?
              </h2>
              <p className="text-foreground mb-6">
                Cu tratament adecvat și igienă riguroasă:
              </p>
              <ul className="list-disc pl-6 mb-8 text-foreground text-base [&_a]:text-primary [&_a]:hover:underline">
                <li><strong>Gingivita:</strong> Vindecare completă în 1-2 săptămâni</li>
                <li><strong>Parodontita ușoară:</strong> Stabilizare completă, fără alte pierderi</li>
                <li><strong>Parodontita moderată:</strong> Oprirea progresiei, salvarea majorității dinților</li>
                <li><strong>Parodontita severă:</strong> Unii dinți pot fi pierduți, dar mulți pot fi salvați</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                Întrebări frecvente despre parodontoză
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
                  Salvează-ți dinții! Tratament parodontal în Piatra Neamț
                </h3>
                <p className="text-foreground mb-6">
                  Oferim tratament parodontal complet: de la diagnostic precis până la tratament avansat și 
                  întreținere pe termen lung. Cu cât intervenim mai repede, cu atât șansele de salvare a dinților 
                  sunt mai mari. Programează o evaluare completă astăzi!
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link to="/contact">Programează evaluare parodontală</Link>
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

        <RelatedArticles articles={relatedArticles['parodontoza-tratament']} />

        <Footer />
      </div>
    </>
  );
};

export default Parodontoza;
