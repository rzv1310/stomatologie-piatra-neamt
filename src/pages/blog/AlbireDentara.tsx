import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { Phone, Clock, Share2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useSEOSchema } from "@/hooks/use-seo-schema";
import RelatedArticles from "@/components/RelatedArticles";
import { relatedArticles } from "@/config/related-content";
const AlbireDentara = () => {
  const faqs = [{
    question: "Cât durează efectul albirii dentare?",
    answer: "Cu îngrijire corespunzătoare, rezultatele albirii profesionale pot dura 1-3 ani. Durata depinde de obiceiurile alimentare, igiena dentară și consumul de substanțe colorante (cafea, ceai negru sau vin roșu)."
  }, {
    question: "Albirea dăunează smalțului?",
    answer: "Albirea profesională făcută sub supraveghere medicală este sigură și nu dăunează smalțului. Folosim concentrații controlate de agent de albire și tehnici aprobate medical care protejează structura dinților."
  }, {
    question: "Pot albi dinții dacă am sensibilitate dentară?",
    answer: "Da, însă este important să discutăm despre sensibilitatea ta înainte de tratament. Putem adapta protocolul de albire și putem folosi produse desensibilizante pentru a minimiza disconfortul."
  }, {
    question: "Toți dinții se albesc la fel?",
    answer: "Nu, decolorările de pe dinții naturali răspund foarte bine la albire, dar coroana dentară, plombele și fațetele nu își schimbă culoarea. De aceea, evaluăm întâi situația și discutăm despre așteptări realiste."
  }];
  const ArticleSchema = useSEOSchema({
    type: 'BlogPosting',
    canonical: '/blog/albire-dentara',
    article: {
      headline: "Albire Dentară | Vezi Preț Albire Dinți in Piatra Neamț",
      description: "Ghidul tău pentru albirea dentară în Piatra Neamț: metode, prețuri orientative, durata tratamentului și rezultate. Află cum obții un zâmbet strălucitor.",
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
  return <>
      {ArticleSchema}
      {FAQSchema}
      <Helmet>
        <title>Albire Dentară | Vezi Preț Albire Dinți in Piatra Neamț</title>
        <meta name="description" content="Ghidul tău pentru albirea dentară în Piatra Neamț: metode, prețuri orientative, durata tratamentului și rezultate. Află cum obții un zâmbet strălucitor." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <Breadcrumbs items={[{
        label: "Stomatologie Piatra Neamț",
        href: "/"
      }, {
        label: "Blog",
        href: "/blog"
      }, {
        label: "Albire Dentară"
      }]} />
        
        <section className="bg-accent py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-white max-w-4xl mb-4">
              Albire Dentară | Vezi Preț Albire Dinți in Piatra Neamț
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
              <Button variant="outline" size="sm" onClick={() => {
              const url = encodeURIComponent(window.location.href);
              const text = encodeURIComponent("Albire dentară profesională în Piatra Neamț");
              window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
            }}>
                <Share2 className="h-4 w-4 mr-2" />
                Facebook
              </Button>
              <Button variant="outline" size="sm" onClick={() => {
              const url = encodeURIComponent(window.location.href);
              const text = encodeURIComponent("Albire dentară profesională în Piatra Neamț");
              window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
            }}>
                <Share2 className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8">Un zâmbet strălucitor te poate face să te simți mai încrezător și mai tânăr.</p>
              
              <p className="text-xl text-muted-foreground mb-8">Albirea dinților este una dintre cele mai populare <Link to="/servicii/estetica-dentara" className="text-primary hover:underline font-medium">proceduri estetice dentare</Link>, oferind rezultate rapide și sigure. În continuare îți prezentăm tot ce trebuie să știi despre albirea dentară în Piatra Neamț.</p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Ce este albirea dentară?</h2>
              <p className="text-foreground mb-6">Albirea dentară profesională este un tratament care folosește agenți de albire cu concentrație controlată pentru a elimina petele și decolorările de pe suprafața dinților. Spre deosebire de produsele casnice, tratamentele profesionale sunt mai puternice, mai rapide și se fac sub supravegherea medicului stomatolog.</p>
              <p className="text-foreground mb-6">Procedura este sigură, eficientă și poate îmbunătăți culoarea dinților cu 6-8 nuanțe, în funcție de culoarea inițială și de tipul de decolorare.</p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Metode disponibile</h2>
              
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                1. Albire în cabinet (chairside bleaching)
              </h3>
              <p className="text-foreground mb-4">
                Aceasta este cea mai rapidă metodă de albire dentară. Se aplică un gel de albire cu concentrație 
                ridicată direct pe dinți, iar procesul poate fi accelerat cu lumină LED sau laser.
              </p>
              <ul className="list-disc pl-6 mb-6 text-foreground">
                <li>Durată: aprox. 60 minute</li>
                <li>Rezultate: imediate, vizibile după o singură ședință</li>
                <li>Ideal pentru persoanele care doresc rezultate rapide, pentru un eveniment special</li>
                <li>Preț orientativ: 700-1000 lei</li>
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
                <li>Ideal pentru persoane care preferă tratament în ritmul lor</li>
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
                Prețuri albire dinți în Piatra Neamț
              </h2>
              
              <Card className="border-primary/20 my-8">
                <CardHeader className="bg-primary/5">
                  <h3 className="text-xl font-semibold">Albire dentară profesională</h3>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-2/3 font-bold">Serviciu</TableHead>
                        <TableHead className="text-right font-bold">Preț</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Albire dentară premium cu LAMPĂ BEYOND® POLUS® Advanced, nr. 1 în lume</TableCell>
                        <TableCell className="text-right font-semibold text-primary">1000 lei</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Albire endodontică per dinte / ședință</TableCell>
                        <TableCell className="text-right font-semibold text-primary">250 lei</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <div className="mt-6 flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <Info className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-muted-foreground">
                      <p className="mb-2">Prețurile sunt orientative. La consultație vei primi un plan de tratament detaliat cu costul exact pentru situația ta.</p>
                      <Link to="/tarife" className="text-primary hover:underline font-medium">
                        Vezi lista completă de prețuri →
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Ești candidat potrivit pentru albirea dentară?</h2>
              <p className="text-foreground mb-4">
                Albirea dentară este potrivită pentru majoritatea adulților cu dinți și gingii sănătoase. 
                Răspunde cel mai bine la:
              </p>
              <ul className="list-disc pl-6 mb-6 text-foreground">
                <li>Decolorări datorate vârstei (dinți îngălbeniți în timp)</li>
                <li>Pete de la cafea, ceai, vin roșu sau tutun</li>
                <li>Decolorări superficiale sau moderate</li>
              </ul>
              <p className="text-foreground mb-6">Nu este recomandată pentru femei însărcinate sau care alăptează, persoane cu carii netratate, cu boli parodontale active sau cu sensibilitate dentară severă.</p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Cum te pregătești pentru albirea dinților?</h2>
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
                  <strong>Procedura:</strong> Îți explicăm cât durează și cum să îți întreții rezultatele.
                </li>
              </ol>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">La ce să te aștepți după tratament?</h2>
              <p className="text-foreground mb-4">
                După albire, este normal să experimentezi o ușoară sensibilitate dentară timp de 24-48 de ore. 
                Aceasta dispare de obicei rapid și poate fi gestionată cu pastă de dinți pentru sensibilitate.
              </p>
              <p className="text-foreground mb-6">
                Pentru a menține rezultatele cât mai mult timp:
              </p>
              <ul className="list-disc pl-6 mb-6 text-foreground">
                <li>Evită alimentele și băuturile colorate în primele 48 de ore</li>
                <li>Limitează consumul de cafea, ceai și vin roșu</li>
                <li>Nu fuma (sau cel puțin încearcă să reduci fumatul)</li>
                <li>Menține o igienă orală riguroasă</li>
                <li>Fă detartraj profesional la 6 luni</li>
                <li>Vino pentru retușuri periodice (la 1-2 ani)</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Întrebări frecvente</h2>
              <Accordion type="single" collapsible className="mb-12">
                {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>)}
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
    </>;
};
export default AlbireDentara;