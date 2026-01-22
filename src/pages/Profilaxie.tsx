import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import profilaxieHero from "@/assets/service-profilaxie.jpg?w=1200&format=webp";
import { useDynamicSEO } from "@/hooks/use-dynamic-seo";
import { useSEOSchema } from "@/hooks/use-seo-schema";
import { useLocalBusinessSchema } from "@/hooks/use-local-business-schema";
import RelatedServices from "@/components/RelatedServices";
import { relatedServices } from "@/config/related-content";
import { CTAWithTrust } from "@/components/CTAWithTrust";
import { HeroContactBox } from "@/components/HeroContactBox";

const Profilaxie = () => {
  const DynamicSEO = useDynamicSEO({
    title: "Profilaxie Dentară Piatra Neamț - Detartraj și Igienizare | MedStom",
    description: "Igienizare profesională și detartraj în Piatra Neamț. Prevenție dentară, air-flow, periaj profesional pentru dinți sănătoși. ☎ 0333 630 005",
    path: "/servicii/profilaxie"
  });

  const pricingData = [
    { service: "Detartraj și periaj profesional", price: "300 lei" },
    { service: "Igienizare profesională (detartraj + periaj + air flow)", price: "400 lei" }
  ];

  const benefits = [
    {
      title: "Prevenție eficientă",
      description: "Prevenim apariția cariilor și a bolilor parodontale prin controale regulate și igienizare profesională"
    },
    {
      title: "Zâmbet strălucitor",
      description: <>Îndepărtăm petele și decolorările, redând dinților strălucirea naturală. După detartraj, poți considera și <Link to="/blog/albire-dentara-piatra-neamt" className="text-primary hover:underline font-medium">albirea dentară profesională</Link> pentru un zâmbet și mai strălucitor.</>
    },
    {
      title: "Economii pe termen lung",
      description: "Previi tratamente costisitoare prin controale regulate și igienă corespunzătoare"
    },
    {
      title: "Sănătate generală",
      description: <>Igiena orală corespunzătoare contribuie la sănătatea întregului organism. Pentru copii, profilaxia începe devreme - citește sfaturi pentru <Link to="/blog/prima-vizita-copil-dentist" className="text-primary hover:underline font-medium">prima vizită a copilului la dentist</Link>.</>
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Consultație și evaluare",
      description: "Examinăm starea dinților și gingiilor, identificăm zonele care necesită atenție specială"
    },
    {
      number: "02",
      title: "Detartraj cu ultrasunete",
      description: "Îndepărtăm tartrul și placa bacteriană folosind tehnologie cu ultrasunete, fără durere"
    },
    {
      number: "03",
      title: "Air-Flow",
      description: "Curățăm petele superficiale și biofilmul bacterian cu jet de apă, aer și pulbere fină"
    },
    {
      number: "04",
      title: "Periaj profesional",
      description: "Polizăm suprafața dinților pentru a preveni acumularea rapidă a plăcii bacteriene"
    },
    {
      number: "05",
      title: "Fluorizare",
      description: "Aplicăm fluor pentru întărirea smalțului și protecție suplimentară împotriva cariilor"
    }
  ];

  const faqs = [
    {
      question: "Cât de des ar trebui să fac o igienizare profesională?",
      answer: (
        <>
          Recomandăm o igienizare profesională la fiecare 6 luni pentru menținerea unei sănătăți orale optime. Pacienții cu risc crescut de boli parodontale sau acumulare rapidă de tartru pot necesita controale la 3-4 luni. Dacă este nevoie de <Link to="/servicii/endodontie-piatra-neamt" className="text-primary hover:underline font-medium">tratament de canal</Link>, îl recomandăm înainte de igienizare.
        </>
      )
    },
    {
      question: "Este dureroasă procedura de detartraj?",
      answer: "Detartrajul cu ultrasunete este în general nedureros. Dacă aveți gingii sensibile sau inflamate, puteți simți un ușor disconfort, dar procedura este bine tolerată de majoritatea pacienților."
    },
     {
       question: "Cât durează o ședință de igienizare?",
       answer: (
         <>
           O ședință completă de igienizare profesională durează între 45-60 de minute, în funcție de cantitatea de tartru acumulat și de starea generală a dinților. Pentru copii, vezi serviciul de <Link to="/servicii/stomatologie-copii-piatra-neamt" className="text-primary hover:underline font-medium">stomatologie pediatrică</Link>.
         </>
       )
     },
    {
      question: "Pot mânca imediat după igienizare?",
      answer: "Da, puteți mânca imediat după procedură. Totuși, recomandăm să evitați alimentele foarte colorate (cafea, ceai, vin roșu) în primele 24 de ore pentru a menține rezultatele curățării."
    }
  ];

  const MedicalProcedureSchema = useSEOSchema({
    type: 'MedicalProcedure',
    canonical: '/servicii/profilaxie',
    medicalProcedure: {
      name: 'Profilaxie și Igienizare Dentară',
      description: 'Prevenția este cheia unui zâmbet sănătos. Igienizarea profesională regulată te ajută să eviți problemele dentare și să păstrezi dinții sănătoși pe termen lung.',
      procedureType: 'Dental Prophylaxis'
    }
  });

  const FAQSchema = useSEOSchema({
    type: 'FAQPage',
    canonical: '/servicii/profilaxie',
    faqs: faqs
  });

  const LocalBusinessSchema = useLocalBusinessSchema({
    serviceName: "Profilaxie și Igienizare Dentară",
    serviceDescription: "Igienizare profesională și detartraj în Piatra Neamț. Prevenție dentară, air-flow, periaj profesional pentru dinți sănătoși.",
    path: "/servicii/profilaxie",
    medicalSpecialty: "Stomatologie Preventivă"
  });

  return (
    <div className="min-h-screen flex flex-col">
      {DynamicSEO}
      {MedicalProcedureSchema}
      {FAQSchema}
      {LocalBusinessSchema}
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${profilaxieHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Profilaxie și Igienizare Dentară în Piatra Neamț
            </h1>
            <p className="text-xl mb-8 text-white">
              Prevenția este cheia unui zâmbet sănătos. Igienizarea profesională regulată te ajută să eviți problemele dentare și să păstrezi dinții sănătoși pe termen lung.
            </p>
            <HeroContactBox
              microcopy="✓ Fără durere · Aparatură modernă · Preț fix"
            />
          </div>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Stomatologie Piatra Neamț", href: "/" },
          { label: "Servicii", href: "/servicii" },
          { label: "Profilaxie și Igienizare Dentară" }
        ]}
      />

      {/* Pricing Table */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-heading">
              Prețuri profilaxie și igienizare
            </h2>
            <Card className="border-primary/20">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-heading font-semibold">Serviciu</TableHead>
                      <TableHead className="text-right text-heading font-semibold">Preț</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pricingData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="text-foreground">{item.service}</TableCell>
                        <TableCell className="text-right font-semibold text-accent">{item.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <p className="text-center text-text-custom mt-4 text-sm">
              *Prețurile sunt orientative și pot varia în funcție de complexitatea cazului
            </p>
          </div>
        </div>
      </section>

      {/* What is Prophylaxis */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-text-custom space-y-4 border border-accent rounded-lg p-6">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-heading">
                Ce este profilaxia dentară?
              </h2>
              <p>
                Profilaxia dentară reprezintă ansamblul măsurilor preventive destinate menținerii sănătății cavității orale și prevenirii apariției afecțiunilor dentare. Aceasta include igienizarea profesională, detartrajul, fluorizarea și educația pentru igiena orală corespunzătoare.
              </p>
              <p>
                Chiar dacă îți perezi dinții zilnic și folosești ață dentară, există zone greu accesibile unde se poate acumula placa bacteriană și tartrul. Igienizarea profesională îndepărtează aceste depozite și previne dezvoltarea cariilor și a <Link to="/servicii/parodontologie-piatra-neamt" className="text-primary hover:underline font-medium">bolii parodontale</Link>.
              </p>
              <p>
                La <a href="/" target="_blank" rel="noopener" className="text-primary hover:underline font-medium">MedStom</a> folosim tehnologie modernă, inclusiv ultrasunete și Air-Flow, pentru o curățare eficientă și delicată, care protejează smalțul dinților și asigură rezultate durabile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Beneficiile igienizării profesionale
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Investiția în prevenție te scutește de probleme și cheltuieli viitoare
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-primary/20 bg-white">
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-heading">
              Cum decurge o ședință de igienizare?
            </h2>
            <p className="text-lg text-text-custom max-w-2xl mx-auto">
              Proces complet pentru un zâmbet curat și sănătos
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
                  <AccordionContent className="pt-2">
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              Programează-te pentru o igienizare profesională
            </h2>
            <p className="text-xl mb-8">
              Investește în sănătatea dinților tăi astăzi și evită problemele de mâine
            </p>
            <CTAWithTrust
              primaryButton={{ text: "Programare online", href: "/contact" }}
              secondaryButton={{ text: "0333 630 005", href: "tel:+40333630005" }}
              microcopy="✓ Fără durere · Aparatură modernă · Preț fix"
              badges={[
                { icon: "🦷", text: "Tehnologie Air-Flow" },
                { icon: "⚡", text: "Ședință 45 min" },
                { icon: "✨", text: "Dinți mai albi" },
                { icon: "💚", text: "Prevenție eficientă" }
              ]}
            />
          </div>
        </div>
      </section>
      </main>

      {/* Related Services */}
      <RelatedServices services={relatedServices['profilaxie']} />

      <Footer />
    </div>
  );
};

export default Profilaxie;
