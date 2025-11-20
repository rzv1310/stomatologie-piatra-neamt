import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import chirurgieHero from "@/assets/service-chirurgie.jpg";

const Chirurgie = () => {
  const surgicalServices = [
    {
      title: "Extracții dentare",
      description: "Extracții simple și complexe, inclusiv molari de minte incluși",
      icon: "🦷"
    },
    {
      title: "Rezecții apicale",
      description: "Îndepărtarea vârfului rădăcinii și a țesutului infectat periapical",
      icon: "🔬"
    },
    {
      title: "Chiuretaj alveolar",
      description: "Curățarea alveolei dentare după extracție pentru vindecare optimă",
      icon: "🧹"
    },
    {
      title: "Chistectomie",
      description: "Îndepărtarea chisturilor dentare și chirurgia maxilarului",
      icon: "💉"
    },
    {
      title: "Frenectomie",
      description: "Corectarea frenului labial sau lingual pentru funcție optimă",
      icon: "✂️"
    },
    {
      title: "Gingivectomie",
      description: "Remodelare gingivală pentru estetică și sănătate parodontală",
      icon: "🎨"
    }
  ];

  const benefits = [
    {
      title: "Fără durere",
      description: "Anestezie modernă pentru intervenții complet nedureroase"
    },
    {
      title: "Recuperare rapidă",
      description: "Tehnici minim invazive pentru vindecare accelerată"
    },
    {
      title: "Sterilizare maximă",
      description: "Protocoale stricte de sterilizare și sală de chirurgie dedicată"
    },
    {
      title: "Experiență vastă",
      description: "Chirurgi orali cu peste 20 de ani de experiență"
    }
  ];

  const extractionSteps = [
    {
      number: "01",
      title: "Evaluare și radiografie",
      description: "Analizăm poziția dintelui și structurile anatomice prin radiografie 3D CBCT"
    },
    {
      number: "02",
      title: "Anestezie locală",
      description: "Aplicăm anestezie eficientă pentru confort maxim în timpul procedurii"
    },
    {
      number: "03",
      title: "Extracția propriu-zisă",
      description: "Îndepărtăm dintele folosind tehnici minim invazive"
    },
    {
      number: "04",
      title: "Sutura rănii",
      description: "Aplicăm suturi pentru o vindecare optimă și rapidă"
    },
    {
      number: "05",
      title: "Instrucțiuni post-operatorii",
      description: "Oferim indicații clare pentru îngrijirea rănii și medicație necesară"
    }
  ];

  const wisdomTeethInfo = [
    {
      title: "Când trebuie extrași molarii de minte?",
      points: [
        "Durere cronică sau recurentă în zona molarilor",
        "Infecții repetate (pericoronarite)",
        "Dinte inclus care afectează dinții vecini",
        "Chisturi sau tumori asociate molarului",
        "Carii pe molarii de minte greu accesibili",
        "Înainte de tratament ortodontic"
      ]
    }
  ];

  const faqs = [
    {
      question: "Este dureroasă extracția unui molar de minte?",
      answer: "Nu, procedura se realizează sub anestezie locală și nu veți simți durere în timpul extracției. După procedură, pot apărea disconfort și umflături, dar acestea se gestionează eficient cu medicație antiinflamatoare și analgezică."
    },
    {
      question: "Cât durează recuperarea după o extracție?",
      answer: "Recuperarea depinde de complexitatea extracției. Pentru extracții simple: 3-5 zile. Pentru molari de minte incluși: 7-10 zile. Umflăturile sunt maxime în zilele 2-3 și dispar treptat. Respectarea instrucțiunilor post-operatorii accelerează vindecarea."
    },
    {
      question: "Pot mânca după extracție?",
      answer: "Da, dar recomandăm alimente moi și reci în primele 24-48 de ore. Evitați zona extracției când mestecați. Nu folosiți paie pentru băut și evitați alimentele fierbinți, picante sau tari pentru câteva zile."
    },
    {
      question: "Ce este o rezecție apicală?",
      answer: "Rezecția apicală este o procedură chirurgicală prin care îndepărtăm vârful rădăcinii unui dinte și țesutul infectat din jur, când tratamentul de canal clasic nu este suficient sau nu este posibil. Este o alternativă la extracție pentru salvarea dintelui."
    },
    {
      question: "Când este necesară gingivectomia?",
      answer: "Gingivectomia este indicată când gingia acoperă excesiv dinții (zâmbet gingival), pentru corectarea buzunarelor parodontale, sau înainte de lucrări protetice pentru a crea spațiu adecvat. Procedura îmbunătățește atât estetica cât și sănătatea gingivală."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${chirurgieHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Chirurgie Orală în Piatra Neamț
            </h1>
            <p className="text-xl mb-8 text-white">
              Intervenții chirurgicale dentare cu tehnologie modernă și anestezie eficientă. De la extracții simple până la chirurgie complexă - în mâini sigure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Programează consultație
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

      {/* Surgical Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Servicii de chirurgie orală
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Intervenții chirurgicale complete pentru sănătatea cavității orale
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {surgicalServices.map((service, index) => (
              <Card key={index} className="border-primary/20">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-heading">{service.title}</h3>
                  <p className="text-text-custom">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Oral Surgery */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-heading">
              Ce este chirurgia orală?
            </h2>
            <div className="prose prose-lg max-w-none text-text-custom space-y-4">
              <p>
                Chirurgia orală este specialitatea stomatologiei care se ocupă cu diagnosticul și tratamentul chirurgical al afecțiunilor dinților, maxilarelor și țesuturilor moi ale cavității orale.
              </p>
              <p>
                La Medstom, intervențiile chirurgicale se realizează în condiții optime:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Sală de chirurgie dedicată cu protocoale stricte de sterilizare</li>
                <li>Radiografie 3D CBCT pentru planificare precisă a intervențiilor</li>
                <li>Anestezie modernă pentru proceduri complet nedureroase</li>
                <li>Tehnici minim invazive pentru recuperare rapidă</li>
                <li>Echipă de chirurgi cu experiență vastă în chirurgie orală</li>
              </ul>
              <p>
                Folosim instrumente chirurgicale de ultimă generație și materiale de sutură moderne pentru rezultate optime și vindecare accelerată.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              De ce să alegi Medstom pentru chirurgie orală?
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Experiență, tehnologie și grijă pentru pacient
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

      {/* Extraction Steps */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Cum decurge o extracție dentară?
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Proces pas cu pas pentru confortul și siguranța ta
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {extractionSteps.map((step, index) => (
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

      {/* Wisdom Teeth */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-heading text-center">
              Extracția molarilor de minte (măseaua de minte)
            </h2>
            <div className="mb-8 text-center">
              <p className="text-lg text-text-custom">
                Molarii de minte (al treilea molar) sunt ultimii dinți care erup, de obicei între 17-25 de ani. În multe cazuri, aceștia cauzează probleme și necesită extracție.
              </p>
            </div>
            {wisdomTeethInfo.map((info, index) => (
              <Card key={index} className="border-primary/20 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-heading">{info.title}</h3>
                  <ul className="space-y-3">
                    {info.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1 mr-3" />
                        <span className="text-text-custom">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
            <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg mt-6">
              <p className="text-lg text-text-custom">
                <strong>Important:</strong> La Medstom, extracția molarilor de minte se realizează sub anestezie locală eficientă, cu radiografie 3D CBCT pentru planificare precisă. Majoritatea pacienților se întorc la activitățile normale în 2-3 zile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              De ce chirurgie la Medstom?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-5xl mb-4">🏥</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Sală chirurgicală dedicată</h3>
                <p className="opacity-90 text-white">Spațiu special amenajat cu sterilizare maximă</p>
              </div>
              <div>
                <div className="text-5xl mb-4">📸</div>
                <h3 className="text-xl font-semibold mb-3 text-white">CBCT 3D</h3>
                <p className="opacity-90 text-white">Planificare precisă a intervențiilor chirurgicale</p>
              </div>
              <div>
                <div className="text-5xl mb-4">👨‍⚕️</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Chirurgi experimentați</h3>
                <p className="opacity-90 text-white">Peste 20 de ani de experiență în chirurgie orală</p>
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
              Ai nevoie de chirurgie orală?
            </h2>
            <p className="text-xl mb-8">
              Programează o consultație și beneficiază de expertiză și tehnologie modernă
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Programare online
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

export default Chirurgie;
