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

const MaseauaMinte = () => {
  const faqs = [
    {
      question: "Este dureroasă extracția măselei de minte?",
      answer: "Nu, procedura se face sub anestezie locală și nu vei simți durere în timpul extracției. După ce trece efectul anesteziei, poți simți disconfort care se gestionează cu analgezice. Durerile sunt mai intense în primele 2-3 zile și scad treptat."
    },
    {
      question: "Cât durează recuperarea după extracția măselei de minte?",
      answer: "Recuperarea inițială durează 3-5 zile, când disconfortul este mai mare. Vindecarea completă a plăgii durează 2-3 săptămâni. La majoritatea persoanelor, activitățile normale pot fi reluate după 3-7 zile."
    },
    {
      question: "Pot să mănânc normal după extracție?",
      answer: "În primele 24-48 de ore se recomandă alimente moi și reci (iaurt, înghețată, piureuri). Evită alimentele fierbinți, crocante sau lipicioase. Gradual, poți reveni la alimentația normală în 1-2 săptămâni."
    },
    {
      question: "Cât costă extracția unei măsele de minte?",
      answer: "Prețul variază în funcție de complexitate: 200-400 lei pentru extracție simplă, 400-800 lei pentru extracție chirurgicală. Prețul exact se stabilește după evaluarea radiografică."
    }
  ];

  const ArticleSchema = useSEOSchema({
    type: 'BlogPosting',
    canonical: '/blog/maseaua-de-minte',
    article: {
      headline: "Măseaua de minte - când o lași în pace și când trebuie neapărat scoasă",
      description: "Tot ce trebuie să știi despre măselele de minte: când este necesară extracția, semne de alarmă, procesul de extracție și recuperare. Sfaturi de la specialiști.",
      image: "https://stomatologiepiatraneamt.ro/social-image.png",
      datePublished: "2025-01-20",
      dateModified: "2025-01-20"
    }
  });

  const FAQSchema = useSEOSchema({
    type: 'FAQPage',
    canonical: '/blog/maseaua-de-minte',
    faqs: faqs
  });

  return (
    <>
      {ArticleSchema}
      {FAQSchema}
      <Helmet>
        <title>Măseaua de Minte - Când Trebuie Scoasă și Când Poate Rămâne | Ghid Complet</title>
        <meta name="description" content="Tot ce trebuie să știi despre măselele de minte: când este necesară extracția, semne de alarmă, procesul de extracție și recuperare. Sfaturi de la specialiști." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <Breadcrumbs 
          items={[
            { label: "Stomatologie Piatra Neamț", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Măseaua de Minte" }
          ]}
        />
        
        <section className="bg-accent py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-white max-w-4xl mb-4">
              Măseaua de minte - când o lași în pace și când trebuie neapărat scoasă
            </h1>
            <div className="flex items-center gap-2 text-white/80">
              <Clock className="h-5 w-5" />
              <span>13 min de citit</span>
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
                  const text = encodeURIComponent("Măseaua de minte - când o lași în pace și când trebuie neapărat scoasă");
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
                  const text = encodeURIComponent("Măseaua de minte - când o lași în pace și când trebuie neapărat scoasă");
                  window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
                }}
              >
                <Share2 className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8">
                Măselele de minte (dinții de minte sau al treilea molar) sunt subiect de dezbateri și îngrijorări 
                pentru mulți oameni. Unii cred că trebuie scoase preventiv, alții preferă să le păstreze cât mai mult. 
                Realitatea este că decizia depinde de fiecare caz în parte. În acest ghid complet, îți explicăm când 
                măseaua de minte poate rămâne liniștită și când trebuie neapărat extrasă.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                Ce sunt măselele de minte?
              </h2>
              <p className="text-foreground mb-6">
                Măselele de minte sunt ultimii patru dinți care erup în cavitatea bucală, de obicei între 17-25 de ani. 
                Sunt o moștenire evolutivă din timpurile când strămoșii noștri aveau nevoie de mai mulți dinți pentru 
                a mesteca alimente crude și tari.
              </p>
              <p className="text-foreground mb-8">
                Astăzi, maxilarele noastre sunt mai mici, așa că adesea nu există suficient spațiu pentru acești dinți. 
                De aceea, măselele de minte pot cauza diverse probleme.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                Când măseaua de minte poate rămâne - situații fără risc
              </h2>
              <p className="text-foreground mb-6">
                Nu toate măselele de minte trebuie scoase! Ele pot rămâne în siguranță dacă:
              </p>

              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
                <h4 className="font-bold text-foreground mb-4">Condiții pentru a păstra măseaua de minte:</h4>
                <ul className="list-disc pl-6 text-foreground text-base space-y-2 [&_a]:text-primary [&_a]:hover:underline">
                  <li>
                    <strong>Erup complet și corect:</strong> Dinții sunt complet ieșiți în arcadă, în poziție normală
                  </li>
                  <li>
                    <strong>Funcționali:</strong> Au un dinte opus cu care să se articuleze corect la masticație
                  </li>
                  <li>
                    <strong>Sănătoși:</strong> Nu au carii, infecții sau probleme parodontale
                  </li>
                  <li>
                    <strong>Accesibili pentru igienă:</strong> Poți ajunge cu periuța și ața dentară pentru curățare
                  </li>
                  <li>
                    <strong>Nu provoacă durere:</strong> Nu există inflamație, umflături sau disconfort
                  </li>
                  <li>
                    <strong>Nu afectează dinții vecini:</strong> Nu împing sau deteriorează al doilea molar
                  </li>
                  <li>
                    <strong>Spațiu suficient:</strong> Maxilarul are loc pentru ei fără aglomerare
                  </li>
                </ul>
              </div>

              <p className="text-foreground mb-8">
                Dacă toate aceste condiții sunt îndeplinite, măseaua de minte este un atu, nu o problemă! 
                Ajută la masticație și poate servi drept suport pentru lucrări protetice în viitor.
              </p>

              <div className="flex justify-center my-8">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <a href="tel:0333630005">
                    <Phone className="mr-2 h-5 w-5" />
                    Sună acum: 0333 630 005
                  </a>
                </Button>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                Când măseaua de minte TREBUIE scoasă - semnale de alarmă
              </h2>

              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-8">
                <h4 className="font-bold text-foreground mb-4">Situații care impun extracția:</h4>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">1. Dinți incluși (rămași în os)</h5>
                    <p className="text-foreground text-sm">
                      Măseaua de minte nu a erupt complet și rămâne parțial sau total acoperită de os sau gingie. 
                      Poate cauza dureri, infecții recurente (pericoronarite) și chisti.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-foreground mb-2">2. Poziție greșită (impactare)</h5>
                    <p className="text-foreground text-sm">
                      Dinții cresc orizontal sau înclinat, împingând dinții vecini. Pot cauza aglomerare dentară 
                      și deteriorarea celui de-al doilea molar.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-foreground mb-2">3. Infecții repetate</h5>
                    <p className="text-foreground text-sm">
                      Umflături, dureri, gust neplăcut sau dificultăți la deschiderea gurii care revin periodic. 
                      Infecțiile pot deveni severe și se pot răspândi.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-foreground mb-2">4. Carii extinse</h5>
                    <p className="text-foreground text-sm">
                      Datorită poziției greu accesibile, măselele de minte fac frecvent carii care nu pot fi tratate eficient.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-foreground mb-2">5. Afectarea dinților vecini</h5>
                    <p className="text-foreground text-sm">
                      Măseaua de minte creează presiune pe al doilea molar, provocând resorbție de rădăcină sau carii.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-foreground mb-2">6. Chisti sau tumori</h5>
                    <p className="text-foreground text-sm">
                      Dinții incluși pot forma chisti sau tumori în jurul lor, care pot distruge osul maxilar.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-foreground mb-2">7. Pregătire pentru tratament ortodontic</h5>
                    <p className="text-foreground text-sm">
                      <Link to="/servicii/ortodontie-piatra-neamt" className="text-primary hover:underline">Ortodontul</Link> poate recomanda extracția pentru a crea spațiu și preveni recidivele după aparat.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-foreground mb-2">8. Boală parodontală în zonă</h5>
                    <p className="text-foreground text-sm">
                      Pierdere osoasă sau retracție gingivală severă în jurul măselei de minte.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                Cum se face evaluarea? Radiografia este esențială
              </h2>
              <p className="text-foreground mb-6">
                Nu poți decide singur dacă măseaua de minte trebuie scoasă! Este nevoie de:
              </p>
              <ul className="list-disc pl-6 mb-8 text-foreground text-base [&_a]:text-primary [&_a]:hover:underline">
                <li>
                  <strong>Examinare clinică:</strong> Medicul verifică poziția, gradul de erupție și sănătatea gingivală
                </li>
                <li>
                  <strong><Link to="/servicii/radiologie-dentara-piatra-neamt">Radiografie panoramică</Link>:</strong> Arată poziția exactă a măselelor de minte, relația cu 
                  dinții vecini, nervii și sinusurile maxilare
                </li>
                <li>
                  <strong><Link to="/servicii/radiologie-dentara-piatra-neamt">CT dentar</Link> (în cazuri complexe):</strong> Pentru vizualizare 3D exactă a poziției și 
                  planificarea <Link to="/servicii/chirurgie-orala">extracției chirurgicale</Link>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                Procesul de extracție - ce să te aștepți
              </h2>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Tipuri de extracție
              </h3>

              <div className="space-y-6 mb-8">
                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <h4 className="font-bold text-foreground mb-3">Extracție simplă</h4>
                  <p className="text-foreground mb-3">
                    Când măseaua de minte a erupt complet și este vizibilă în gură.
                  </p>
                  <ul className="list-disc pl-6 text-foreground text-base [&_a]:text-primary [&_a]:hover:underline">
                    <li>Durată: 15-20 minute</li>
                    <li>Anestezie locală</li>
                    <li>Recuperare rapidă (2-4 zile)</li>
                    <li>Procedură asemănătoare cu extracția altor dinți</li>
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <h4 className="font-bold text-foreground mb-3">Extracție chirurgicală</h4>
                  <p className="text-foreground mb-3">
                    Când măseaua de minte este parțial sau total acoperită de gingie sau os.
                  </p>
                  <ul className="list-disc pl-6 text-foreground text-base [&_a]:text-primary [&_a]:hover:underline">
                    <li>Durată: 30-60 minute</li>
                    <li>Anestezie locală (opțional sedare)</li>
                    <li>Se face incizie în gingie și eventual se îndepărtează os</li>
                    <li>Dintele poate fi secționat pentru a fi extras în bucăți</li>
                    <li>Se aplică sutură</li>
                    <li>Recuperare mai lungă (5-10 zile)</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Îngrijirea după extracție
              </h3>
              <p className="text-foreground mb-4">
                Pentru o vindecare optimă și fără complicații:
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Primele 24 de ore:</h4>
                  <ul className="list-disc pl-6 text-foreground text-base [&_a]:text-primary [&_a]:hover:underline">
                    <li>Mușcă tamponul steril timp de 30-60 minute pentru a opri sângerarea</li>
                    <li>Aplică gheață pe obraz (15 minute aplici, 15 minute pauză)</li>
                    <li>Evită clătitul, scuipatul sau sugerea cu paiul</li>
                    <li>Nu fuma și nu consuma alcool</li>
                    <li>Evită efortul fizic</li>
                    <li>Dormi cu capul ridicat</li>
                    <li>Mănâncă doar alimente moi și reci</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Următoarele 2-7 zile:</h4>
                  <ul className="list-disc pl-6 text-foreground text-base [&_a]:text-primary [&_a]:hover:underline">
                    <li>Clătește blând cu apă sărată după 24 de ore</li>
                    <li>Ia medicația prescrisă (antibiotice, analgezice)</li>
                    <li>Continuă cu alimente moi (piureuri, supe, iaurt)</li>
                    <li>Evită alimentele fierbinți, crocante sau lipicioase</li>
                    <li>Îngrijește igiena în rest dar evită zona extracției</li>
                    <li>Umflarea atinge maximum după 48-72 ore, apoi scade</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-600 dark:border-yellow-800 rounded-lg p-6 mb-8">
                <h4 className="font-bold text-foreground mb-3">Semnele care impun vizită urgentă:</h4>
                <ul className="list-disc pl-6 text-foreground text-base [&_a]:text-primary [&_a]:hover:underline">
                  <li>Sângerare abundentă care nu se oprește</li>
                  <li>Durere severă care nu răspunde la analgezice</li>
                  <li>Umflare care crește după 3 zile</li>
                  <li>Febră peste 38°C</li>
                  <li>Dificultăți de respirație sau înghițire</li>
                  <li>Miros foarte neplăcut sau gust putred (posibil alveolită)</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                Este mai bine să scot măseaua de minte preventiv?
              </h2>
              <p className="text-foreground mb-6">
                Aceasta este o întrebare controversată. Iată argumentele de ambele părți:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                  <h4 className="font-bold text-foreground mb-3">Pro extracție preventivă:</h4>
                  <ul className="list-disc pl-6 text-foreground text-base [&_a]:text-primary [&_a]:hover:underline">
                    <li>Recuperare mai ușoară la vârstă tânără</li>
                    <li>Previne complicațiile viitoare</li>
                    <li>Evită infecțiile și durerile</li>
                    <li>Reduce riscul de chisti</li>
                  </ul>
                </div>

                <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                  <h4 className="font-bold text-foreground mb-3">Contra extracție preventivă:</h4>
                  <ul className="list-disc pl-6 text-foreground text-base [&_a]:text-primary [&_a]:hover:underline">
                    <li>Risc inutil dacă dinții sunt sănătoși</li>
                    <li>Procedură invazivă fără beneficiu imediat</li>
                    <li>Cost și timp de recuperare</li>
                    <li>Unii oameni nu au niciodată probleme</li>
                  </ul>
                </div>
              </div>

              <p className="text-foreground mb-8">
                <strong>Recomandarea noastră:</strong> Nu scoatem măselele de minte preventiv dacă sunt sănătoase 
                și funcționale. Monitorizăm periodic cu radiografii și intervenim doar când există indicații clare. 
                Totuși, fiecare caz este diferit și discutăm individual cu fiecare pacient.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                Întrebări frecvente despre măselele de minte
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
                  Ai probleme cu măseaua de minte?
                </h3>
                <p className="text-foreground mb-6">
                  Programează o consultație cu evaluare radiografică completă în Piatra Neamț. Îți vom analiza 
                  cazul în detaliu și îți vom recomanda cea mai bună soluție - fie monitorizare, fie extracție 
                  planificată în condiții optime.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link to="/contact">Programează consultație</Link>
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

        <RelatedArticles articles={relatedArticles['maseaua-de-minte']} />

        <Footer />
      </div>
    </>
  );
};

export default MaseauaMinte;
