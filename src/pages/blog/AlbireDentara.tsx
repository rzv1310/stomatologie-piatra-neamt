import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { Phone, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useSEOSchema } from "@/hooks/use-seo-schema";
import RelatedArticles from "@/components/RelatedArticles";
import { relatedArticles } from "@/config/related-content";

const AlbireDentara = () => {
  const faqs = [
    {
      question: "Cât durează efectul albirii dentare?",
      answer: "Cu îngrijire corespunzătoare, rezultatele albirii profesionale pot dura între 1-3 ani. Durata depinde de obiceiurile alimentare, igiena dentară și consumul de substanțe colorante precum cafeaua, ceaiul sau vinul roșu."
    },
    {
      question: "Albirea dăunează smalțului?",
      answer: "Albirea profesională făcută sub supraveghere medicală este sigură și nu dăunează smalțului. Folosim concentrații controlate de agent de albire și tehnici aprobate medical care protejează structura dinților."
    },
    {
      question: "Pot albi dinții dacă am sensibilitate dentară?",
      answer: "Da, însă este important să discutăm despre sensibilitatea ta înainte de tratament. Putem adapta protocolul de albire și putem folosi produse desensibilizante pentru a minimiza disconfortul."
    },
    {
      question: "Toți dinții se albesc la fel?",
      answer: "Nu, decolorările de pe dinții naturali răspund foarte bine la albire, dar coroana dentară, plombele și fațetele nu își schimbă culoarea. De aceea, evaluăm întâi situația și discutăm așteptările realiste."
    }
  ];

  const ArticleSchema = useSEOSchema({
    type: 'BlogPosting',
    canonical: '/blog/albire-dentara',
    article: {
      headline: "Albire dentară profesională în Piatra Neamț | Opțiuni, prețuri și rezultate",
      description: "Ghid complet despre albirea dentară în Piatra Neamț: metode profesionale, prețuri orientative, durata tratamentului și rezultate. Află cum obții un zâmbet strălucitor.",
      image: "https://storage.googleapis.com/gpt-engineer-file-uploads/4JwdkPfG3Mgryfl0Byt7yN5KIf43/social-images/social-1763674029142-stomatologie piatra neamt - echipa medstom.webp",
      datePublished: "2025-01-20",
      dateModified: "2025-01-20"
    }
  });

  const FAQSchema = useSEOSchema({
    type: 'FAQPage',
    canonical: '/blog/albire-dentara',
    faqs: faqs
  });

  return (
    <>
      {ArticleSchema}
      {FAQSchema}
      <Helmet>
        <title>Albire Dentară Profesională Piatra Neamț | Opțiuni, Prețuri și Rezultate</title>
        <meta name="description" content="Ghid complet despre albirea dentară în Piatra Neamț: metode profesionale, prețuri orientative, durata tratamentului și rezultate. Află cum obții un zâmbet strălucitor." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <Breadcrumbs 
          items={[
            { label: "Stomatologie Piatra Neamț", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Albire Dentară" }
          ]}
        />
        
        <section className="bg-accent py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-white max-w-4xl mb-4">
              Albire dentară profesională în Piatra Neamț | Opțiuni, prețuri și rezultate
            </h1>
            <div className="flex items-center gap-2 text-white/80">
              <Clock className="h-5 w-5" />
              <span>12 min de citit</span>
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
                  const text = encodeURIComponent("Albire dentară profesională în Piatra Neamț");
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
                  const text = encodeURIComponent("Albire dentară profesională în Piatra Neamț");
                  window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
                }}
              >
                <Share2 className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8">
                Un zâmbet strălucitor te poate face să te simți mai încrezător și mai tânăr. Albirea dentară 
                profesională este una dintre cele mai populare proceduri estetice dentare, oferind rezultate 
                rapide și sigure. În acest ghid, îți prezentăm tot ce trebuie să știi despre albirea dentară 
                în Piatra Neamț.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                Ce este albirea dentară profesională?
              </h2>
              <p className="text-foreground mb-6">
                Albirea dentară profesională este un tratament care folosește agenți de albire cu concentrație 
                controlată pentru a elimina petele și decolorările de pe suprafața dinților. Spre deosebire de 
                produsele casnice, tratamentele profesionale sunt mai puternice, mai rapide și se fac sub 
                supravegherea medicului dentist.
              </p>
              <p className="text-foreground mb-6">
                Procedura este sigură, eficientă și poate îmbunătăți culoarea dinților cu 6-8 nuanțe în funcție 
                de culoarea inițială și de tipul de decolorare.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                Metode de albire dentară disponibile
              </h2>
              
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                1. Albire în cabinet (chairside bleaching)
              </h3>
              <p className="text-foreground mb-4">
                Aceasta este cea mai rapidă metodă de albire dentară. Se aplică un gel de albire cu concentrație 
                ridicată direct pe dinți, iar procesul poate fi accelerat cu lumină LED sau laser.
              </p>
              <ul className="list-disc pl-6 mb-6 text-foreground">
                <li>Durată: 60-90 minute</li>
                <li>Rezultate: imediate, vizibile după o singură ședință</li>
                <li>Ideal pentru: persoane care doresc rezultate rapide pentru un eveniment special</li>
                <li>Preț orientativ: 800-1500 lei</li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                2. Albire acasă cu gutiere personalizate
              </h3>
              <p className="text-foreground mb-4">
                Medicul creează gutiere dentare personalizate pe baza amprentelor tale. Tu aplici gelul de albire 
                acasă, purtând gutierele câteva ore pe zi sau peste noapte.
              </p>
              <ul className="list-disc pl-6 mb-6 text-foreground">
                <li>Durată tratament: 1-2 săptămâni</li>
                <li>Rezultate: graduale, dar de lungă durată</li>
                <li>Ideal pentru: persoane care preferă tratament în ritmul lor</li>
                <li>Preț orientativ: 600-1200 lei (include gutierele și gelul)</li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                3. Tratament combinat
              </h3>
              <p className="text-foreground mb-6">
                Mulți pacienți optează pentru o combinație: o ședință în cabinet pentru rezultate imediate, 
                urmată de menținere acasă cu gutiere personalizate. Aceasta este cea mai eficientă metodă 
                pentru rezultate maxime și de lungă durată.
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
                Cine este candidat potrivit pentru albirea dentară?
              </h2>
              <p className="text-foreground mb-4">
                Albirea dentară este potrivită pentru majoritatea adulților cu dinți și gingii sănătoase. 
                Răspunde cel mai bine la:
              </p>
              <ul className="list-disc pl-6 mb-6 text-foreground">
                <li>Decolorări datorate vârstei (dinți îngălbeniți în timp)</li>
                <li>Pete de la cafea, ceai, vin roșu sau tutun</li>
                <li>Decolorări superficiale sau moderate</li>
              </ul>
              <p className="text-foreground mb-6">
                Nu este recomandată pentru femei însărcinate sau care alăptează, persoane cu carii netratate, 
                bolnavii parodontale active sau sensibilitate dentară severă.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                Cum te pregătești pentru albirea dentară?
              </h2>
              <ol className="list-decimal pl-6 mb-6 text-foreground">
                <li className="mb-3">
                  <strong>Consultație inițială:</strong> Evaluăm starea dinților și a gingiilor, discutăm 
                  așteptările și alegem metoda potrivită.
                </li>
                <li className="mb-3">
                  <strong>Detartraj profesional:</strong> Este esențial să ai dinții curățați înainte de albire 
                  pentru rezultate uniforme.
                </li>
                <li className="mb-3">
                  <strong>Tratarea problemelor existente:</strong> Orice carie sau problemă gingivală trebuie 
                  rezolvată înainte de albire.
                </li>
                <li className="mb-3">
                  <strong>Înțelegerea procesului:</strong> Îți explicăm ce să te aștepți, cât durează și cum 
                  să îți întreții rezultatele.
                </li>
              </ol>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                Ce să te aștepți după tratament?
              </h2>
              <p className="text-foreground mb-4">
                După albire, este normal să experimentezi o ușoară sensibilitate dentară timp de 24-48 de ore. 
                Aceasta dispare de obicei rapid și poate fi gestionată cu pastă de dinți pentru sensibilitate.
              </p>
              <p className="text-foreground mb-6">
                Pentru a menține rezultatele cât mai mult timp:
              </p>
              <ul className="list-disc pl-6 mb-6 text-foreground">
                <li>Evită alimentele și băuturile colorante în primele 48 de ore</li>
                <li>Limitează consumul de cafea, ceai și vin roșu</li>
                <li>Nu fuma (sau cel puțin încearcă să reduci)</li>
                <li>Menține o igienă orală riguroasă</li>
                <li>Fă detartraj profesional la 6 luni</li>
                <li>Consideră retușuri periodice (la 1-2 ani)</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                Întrebări frecvente despre albirea dentară
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
                  Dorești un zâmbet mai strălucitor?
                </h3>
                <p className="text-foreground mb-6">
                  Programează o consultație gratuită pentru albire dentară în Piatra Neamț. Îți vom evalua 
                  dinții, îți vom prezenta opțiunile disponibile și vom crea un plan personalizat pentru 
                  rezultatele pe care le dorești.
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

        {/* Related Articles */}
        <RelatedArticles articles={relatedArticles['albire-dentara-piatra-neamt']} />

        <Footer />
      </div>
    </>
  );
};

export default AlbireDentara;
