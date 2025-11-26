import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { Phone, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useSEOSchema } from "@/hooks/use-seo-schema";
import RelatedArticles from "@/components/RelatedArticles";
import { relatedArticles } from "@/config/related-content";
const AparatDentarAdulti = () => {
  const faqs = [{
    question: "Cât durează tratamentul ortodontic la adulți?",
    answer: "Durata medie este între 18-24 luni, dar poate varia între 12-36 luni în funcție de complexitatea cazului, tipul aparatului ales și colaborarea pacientului."
  }, {
    question: "Este dureros să porți aparat dentar la vârsta adultă?",
    answer: "Nu este dureros, dar este posibil să simți disconfort timp de 2-3 zile după montare sau după ajustările lunare. Disconfortul este minim și poate fi gestionat cu analgezice ușoare."
  }, {
    question: "Pot să port aparat dentar dacă am lucrări protetice?",
    answer: "Da, în majoritatea cazurilor. Evaluăm situația individual și adaptăm planul de tratament. Uneori este necesar să refacem lucrările protetice după terminarea tratamentului ortodontic."
  }, {
    question: "Cât costă un aparat dentar pentru adulți?",
    answer: "Prețul variază în funcție de tipul aparatului: metalic (5000-8000 lei), ceramic (7000-12000 lei), Invisalign (12000-20000 lei). Costul include montarea, ajustările lunare și aparatul de menținere."
  }];
  const ArticleSchema = useSEOSchema({
    type: 'BlogPosting',
    canonical: '/blog/aparat-dentar-adulti',
    article: {
      headline: "Aparat dentar pentru adulți în Piatra Neamț: metalic, ceramic sau Invisalign?",
      description: "Ghid complet despre aparatele dentare pentru adulți în Piatra Neamț. Compară tipurile de aparate, prețuri, durata tratamentului și află care este cea mai bună opțiune pentru tine.",
      image: "https://storage.googleapis.com/gpt-engineer-file-uploads/4JwdkPfG3Mgryfl0Byt7yN5KIf43/social-images/social-1763674029142-stomatologie piatra neamt - echipa medstom.webp",
      datePublished: "2025-01-20",
      dateModified: "2025-01-20"
    }
  });
  const FAQSchema = useSEOSchema({
    type: 'FAQPage',
    canonical: '/blog/aparat-dentar-adulti',
    faqs: faqs
  });
  return <>
      {ArticleSchema}
      {FAQSchema}
      <Helmet>
        <title>Aparat Dentar pentru Adulți Piatra Neamț | Metalic, Ceramic sau Invisalign</title>
        <meta name="description" content="Ghid complet despre aparatele dentare pentru adulți în Piatra Neamț. Compară tipurile de aparate, prețuri, durata tratamentului și află care este cea mai bună opțiune pentru tine." />
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
        label: "Aparat Dentar Adulți"
      }]} />
        
        <section className="bg-accent py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-white max-w-4xl mb-4">
              Aparat dentar pentru adulți în Piatra Neamț: metalic, ceramic sau Invisalign?
            </h1>
            <div className="flex items-center gap-2 text-white/80">
              <Clock className="h-5 w-5" />
              <span>15 min de citit</span>
            </div>
          </div>
        </section>

        <article className="py-16 lg:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Social Share Buttons */}
            <div className="flex gap-3 mb-8">
              <Button variant="outline" size="sm" onClick={() => {
              const url = encodeURIComponent(window.location.href);
              const text = encodeURIComponent("Aparat dentar pentru adulți în Piatra Neamț");
              window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
            }}>
                <Share2 className="h-4 w-4 mr-2" />
                Facebook
              </Button>
              <Button variant="outline" size="sm" onClick={() => {
              const url = encodeURIComponent(window.location.href);
              const text = encodeURIComponent("Aparat dentar pentru adulți în Piatra Neamț");
              window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
            }}>
                <Share2 className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8">Tot mai mulți adulți aleg să își corecteze dinții, fie din motive estetice, fie pentru îmbunătățirea sănătății orale. Vestea bună este că tehnologia modernă oferă multiple opțiuni de tratament ortodontic, fiecare cu avantajele ei. În acest ghid, îți prezentăm cele 3 tipuri principale de aparate dentare pentru adulți și te ajutăm să alegi varianta potrivită.</p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                De ce să porți aparat dentar ca adult?
              </h2>
              <p className="text-foreground mb-6">Multe persoane cred că aparatul dentar este doar pentru copii și adolescenți, dar realitatea e că nu există o limită de vârstă pentru tratamentul ortodontic. Iată câteva motive pentru care adulții aleg să își corecteze dinții:</p>
              <ul className="list-disc pl-6 mb-8 text-foreground">
                <li>Îmbunătățirea esteticii zâmbetului și creșterea încrederii în sine</li>
                <li>Corectarea problemelor de mușcare ce pot cauza dureri de cap</li>
                <li>Facilitarea igienei orale (dinții aliniați sunt mai ușor de curățat)</li>
                <li>Prevenirea uzurii anormale a dinților</li>
                <li>Pregătirea pentru tratamente protetice (implanturi, coroane)</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                Tipuri de aparate dentare pentru adulți
              </h2>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                1. Aparat dentar metalic (clasic)
              </h3>
              <p className="text-foreground mb-4">Aparatul dentar metalic este varianta tradițională, fabricată din metal de înaltă calitate. Deși este cel mai vizibil tip de aparat, rămâne o opțiune excelentă pentru adulți, datorită eficienței și prețului accesibil.</p>
              
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-foreground mb-3">Avantaje:</h4>
                <ul className="list-disc pl-6 text-foreground">
                  <li>Cel mai eficient pentru cazuri complexe</li>
                  <li>Cel mai accesibil ca preț (5000-8000 lei)</li>
                  <li>Foarte durabil și rezistent</li>
                  <li>Tratament mai rapid în unele cazuri</li>
                  <li>Nu se decolorează în timp</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-8">
                <h4 className="font-bold text-foreground mb-3">Dezavantaje:</h4>
                <ul className="list-disc pl-6 text-foreground">
                  <li>Cel mai vizibil tip de aparat</li>
                  <li>Poate cauza iritații ușoare ale obrajilor</li>
                  <li>Unele persoane consideră că nu este suficient de estetic</li>
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

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                2. Aparat dentar ceramic (estetic)
              </h3>
              <p className="text-foreground mb-4">
                Aparatul ceramic folosește bracket-uri din ceramică transparentă sau de culoarea dintelui, 
                fiind mult mai discret decât varianta metalică. Este alegerea preferată a adulților care 
                doresc eficiență fără a compromite aspectul estetic.
              </p>

              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-foreground mb-3">Avantaje:</h4>
                <ul className="list-disc pl-6 text-foreground">
                  <li>Mult mai estetic decât aparatul metalic</li>
                  <li>La fel de eficient ca cel metalic</li>
                  <li>Bracket-urile se potrivesc cu culoarea dinților</li>
                  <li>Confortabil de purtat</li>
                  <li>Potrivit pentru cazuri complexe</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-8">
                <h4 className="font-bold text-foreground mb-3">Dezavantaje:</h4>
                <ul className="list-disc pl-6 text-foreground">
                  <li>Mai scump decât aparatul metalic (7000-12000 lei)</li>
                  <li>Bracket-urile ceramice sunt ușor mai mari</li>
                  <li>Pot apărea decolorări dacă igiena este neglijată</li>
                  <li>Mai fragile decât bracket-urile metalice</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                3. Invisalign (gutiere transparente)
              </h3>
              <p className="text-foreground mb-4">
                Invisalign folosește gutiere transparente personalizate care se schimbă la fiecare 1-2 săptămâni. 
                Este cel mai estetic sistem ortodontic și preferatul absolut al adulților care doresc un 
                tratament discret.
              </p>

              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-foreground mb-3">Avantaje:</h4>
                <ul className="list-disc pl-6 text-foreground">
                  <li>Practic invizibil - nimeni nu observă că porți aparat</li>
                  <li>Removibil - poți să îl scoți când mănânci sau te speli pe dinți</li>
                  <li>Confort maxim - fără metal, fără iritații</li>
                  <li>Igiena orală simplificată</li>
                  <li>Poți vizualiza rezultatul final înainte de a începe tratamentul</li>
                  <li>Mai puține vizite la cabinet</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-8">
                <h4 className="font-bold text-foreground mb-3">Dezavantaje:</h4>
                <ul className="list-disc pl-6 text-foreground">
                  <li>Cel mai scump (12000-20000 lei)</li>
                  <li>Nu este potrivit pentru toate cazurile complexe</li>
                  <li>Necesită disciplină (trebuie purtat 20-22 ore/zi)</li>
                  <li>Poate fi pierdut sau deteriorat</li>
                  <li>Poate prelungi ușor durata tratamentului dacă nu este purtat corect</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                Cum alegi aparatul potrivit pentru tine?
              </h2>
              <p className="text-foreground mb-6">
                Alegerea tipului de aparat depinde de mai mulți factori. Iată o comparație rapidă pentru a te ajuta:
              </p>

              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
                <h4 className="font-bold text-foreground mb-4">Alege aparatul metalic dacă:</h4>
                <ul className="list-disc pl-6 text-foreground">
                  <li>Ai un caz ortodontic complex</li>
                  <li>Bugetul este o prioritate</li>
                  <li>Dorești rezultate cât mai rapide</li>
                  <li>Nu te deranjează vizibilitatea</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
                <h4 className="font-bold text-foreground mb-4">Alege aparatul ceramic dacă:</h4>
                <ul className="list-disc pl-6 text-foreground">
                  <li>Dorești un echilibru între eficiență și estetică</li>
                  <li>Ai un caz ortodontic moderat sau complex</li>
                  <li>Îți permiți un buget mediu</li>
                  <li>Vrei rezultate sigure cu aspect mai discret</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
                <h4 className="font-bold text-foreground mb-4">Alege Invisalign dacă:</h4>
                <ul className="list-disc pl-6 text-foreground">
                  <li>Dorești un tratament complet invizibil</li>
                  <li>Ai un caz ușor sau moderat</li>
                  <li>Ești disciplinat să porți gutierele 20-22 ore/zi</li>
                  <li>Estetica este prioritatea numărul unu</li>
                  <li>Îți permiți un buget mai mare</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                La ce să te aștepți în timpul tratamentului?
              </h2>
              <p className="text-foreground mb-6">
                Indiferent de tipul de aparat ales, tratamentul ortodontic pentru adulți urmează acești pași:
              </p>
              <ol className="list-decimal pl-6 mb-8 text-foreground space-y-3">
                <li>
                  <strong>Consultație și diagnostic:</strong> Evaluare completă, fotografii, radiografii și 
                  impresii dentare pentru plan de tratament personalizat
                </li>
                <li>
                  <strong>Pregătire:</strong> Detartraj, eventuale tratamente necesare (carii, extracții)
                </li>
                <li>
                  <strong>Montare:</strong> Aplicarea aparatului (2-3 ore) sau primirea primelor gutiere Invisalign
                </li>
                <li>
                  <strong>Ajustări regulate:</strong> Vizite lunare pentru strângere și monitorizare
                </li>
                <li>
                  <strong>Finalizare:</strong> Demontare și montare aparat de menținere (retainer)
                </li>
                <li>
                  <strong>Menținere:</strong> Purtarea retainerului conform indicațiilor pentru rezultate pe termen lung
                </li>
              </ol>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                Întrebări frecvente despre aparatul dentar la adulți
              </h2>
              <Accordion type="single" collapsible className="mb-12">
                {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>)}
              </Accordion>

              <div className="bg-primary/5 rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Îți dorești un zâmbet drept și sănătos?
                </h3>
                <p className="text-foreground mb-6">
                  Programează o consultație ortodontică gratuită în Piatra Neamț. Vom evalua cazul tău, 
                  îți vom prezenta toate opțiunile disponibile și vom crea un plan de tratament personalizat 
                  cu prețuri clare de la început.
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
        <RelatedArticles articles={relatedArticles['aparat-dentar-adulti']} />

        <Footer />
      </div>
    </>;
};
export default AparatDentarAdulti;