import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import esteticaHero from "@/assets/service-estetica.jpg";

const EsteticaDentara = () => {
  const benefits = [
    {
      title: "Zâmbet perfect",
      description: "Transformăm aspectul dinților pentru un zâmbet de care să fii mândru"
    },
    {
      title: "Încredere sporită",
      description: "Un zâmbet frumos îți crește stima de sine și îți îmbunătățește relațiile sociale și profesionale"
    },
    {
      title: "Rezultate naturale",
      description: "Lucrări estetice care arată natural și se potrivesc perfect cu trăsăturile feței tale"
    },
    {
      title: "Durabilitate",
      description: "Materiale premium de cea mai înaltă calitate pentru rezultate ce durează ani de zile"
    }
  ];

  const treatments = [
    {
      title: "Albire dentară profesională",
      description: "Albirea dinților cu până la 8 nuanțe mai deschis într-o singură ședință",
      icon: "✨"
    },
    {
      title: "Fațete dentare",
      description: "Coroanițe subțiri de ceramică sau compozit care acoperă fața vizibilă a dinților",
      icon: "💎"
    },
    {
      title: "Coroane ceramice",
      description: "Restaurări integrale din zirconiu sau ceramică pentru un aspect impecabil",
      icon: "👑"
    },
    {
      title: "Remodelare gingivală",
      description: "Corectarea liniei gingiei pentru un zâmbet mai armonios",
      icon: "🎨"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Consultație și planificare",
      description: "Discutăm așteptările tale, realizăm fotografii și simulăm rezultatul final digital"
    },
    {
      number: "02",
      title: "Pregătirea dinților",
      description: "Pregătim minim dinții naturali pentru aplicarea fațetelor sau coroanelor"
    },
    {
      number: "03",
      title: "Amprente digitale",
      description: "Realizăm scanări 3D precise pentru fabricarea lucrărilor în laboratorul nostru"
    },
    {
      number: "04",
      title: "Lucrări provizorii",
      description: "Aplicăm restaurări temporare pentru protecție și evaluarea rezultatului"
    },
    {
      number: "05",
      title: "Aplicarea finală",
      description: "Fixăm lucrările definitive și verificăm aspectul și funcționalitatea"
    }
  ];

  const faqs = [
    {
      question: "Cât de albe pot deveni dinții mei?",
      answer: "Albirea profesională poate îmbunătăți culoarea dinților cu 6-8 nuanțe. Rezultatul depinde de culoarea inițială și de tipul de decolorare. La consultație evaluăm potențialul de albire specific cazului tău."
    },
    {
      question: "Cât durează fațetele dentare?",
      answer: "Fațetele dentare din ceramică pot dura 10-15 ani sau chiar mai mult cu îngrijire corespunzătoare. Cele din compozit au o durată de viață de 5-7 ani și pot necesita repolisări periodice."
    },
    {
      question: "Este necesară șlefuirea dinților pentru fațete?",
      answer: "Da, pentru fațetele ceramice tradiționale este necesară o șlefuire minimă (0.3-0.5mm) pentru a asigura aderența optimă și un aspect natural. Există și opțiuni no-prep pentru cazuri selectate."
    },
    {
      question: "Pot mânca normal cu fațete dentare?",
      answer: "Da, poți mânca normal după o perioadă scurtă de adaptare. Recomandăm să eviți mușcarea obiectelor dure (ghețari, crustacee cu coajă) și să nu folosești dinții ca pe o unealtă."
    },
    {
      question: "Se pot decolora fațetele în timp?",
      answer: "Fațetele din ceramică sunt rezistente la pete și nu se decolorează. Cele din compozit pot acumula pete superficiale în timp, dar acestea pot fi îndepărtate prin polisare profesională."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Breadcrumbs
        items={[
          { label: "Stomatologie Piatra Neamț", href: "/" },
          { label: "Servicii", href: "/servicii" },
          { label: "Estetică Dentară" }
        ]}
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${esteticaHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Estetică Dentară în Piatra Neamț
            </h1>
            <p className="text-xl mb-8 text-white">
              Transformă-ți zâmbetul cu servicii de estetică dentară de top. De la albirea dinților până la fațete ceramice - realizăm zâmbetul pe care ți l-ai dorit mereu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Consultație gratuită
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+40333630005">
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                  <Phone className="mr-2 h-5 w-5" />
                  0333 630 005
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is Dental Aesthetics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-heading">
              Ce este estetica dentară?
            </h2>
            <div className="prose prose-lg max-w-none text-text-custom space-y-4">
              <p>
                Estetica dentară reprezintă ansamblul tratamentelor și procedurilor care vizează îmbunătățirea aspectului zâmbetului tău. Nu este vorba doar despre dinți albi - este vorba despre armonie, proporții corecte și un zâmbet care să îți reflecte personalitatea.
              </p>
              <p>
                La Medstom combinăm arta cu știința pentru a crea zâmbete naturale și armonioase. Folosim tehnologie digitală avansată pentru a simula rezultatul final înainte de începerea tratamentului, astfel încât să știi exact cum va arăta zâmbetul tău nou.
              </p>
              <p>
                Fie că dorești să îți albești dinții, să corectezi forma sau mărimea lor, sau să realizezi o transformare completă cu fațete ceramice, echipa noastră te va ghida pas cu pas către zâmbetul perfect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Tratamente de estetică dentară
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Soluții personalizate pentru fiecare tip de necesitate estetică
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {treatments.map((treatment, index) => (
              <Card key={index} className="border-primary/20">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{treatment.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-heading">{treatment.title}</h3>
                  <p className="text-text-custom">{treatment.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Beneficiile esteticii dentare
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Mai mult decât un zâmbet frumos
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-heading">{benefit.title}</h3>
                      <p className="text-text-custom">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Steps */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Procesul de realizare a fațetelor dentare
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Transformare completă în câțiva pași simpli
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {steps.map((step, index) => (
              <Card key={index} className="border-primary/20 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-6">
                    <div className="text-4xl font-bold text-accent">{step.number}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-heading">{step.title}</h3>
                      <p className="text-text-custom">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              De ce Medstom pentru estetica dentară?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-5xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Design digital</h3>
                <p className="opacity-90 text-white">Simulăm rezultatul final înainte de a începe tratamentul</p>
              </div>
              <div>
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Laborator propriu</h3>
                <p className="opacity-90 text-white">Control total asupra calității și termene rapide</p>
              </div>
              <div>
                <div className="text-5xl mb-4">💎</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Materiale premium</h3>
                <p className="opacity-90 text-white">Folosim doar ceramică și zirconiu de cea mai înaltă calitate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center text-heading">
              Întrebări frecvente
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-primary/20 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-text-custom pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Începe transformarea zâmbetului tău astăzi
            </h2>
            <p className="text-xl mb-8">
              Programează o consultație gratuită și descoperă cum putem transforma zâmbetul tău
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Consultație gratuită
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+40333630005">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-accent">
                  0333 630 005
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EsteticaDentara;
