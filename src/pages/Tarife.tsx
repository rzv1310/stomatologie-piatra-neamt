import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRight, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Tarife = () => {
  const priceCategories = [
    {
      title: "Terapie dentară",
      prices: [
        { service: "Obturație colet", price: "150-200 lei" },
        { service: "Obturație grad I", price: "170 lei" },
        { service: "Obturație grad II", price: "220 lei" },
        { service: "Obturație grad III", price: "300-400 lei" }
      ]
    },
    {
      title: "Endodonție la microscop",
      prices: [
        { service: "Tratament monoradicular cu/fără microscop", price: "200-400 lei" },
        { service: "Tratament pluriradicular cu/fără microscop", price: "350-550 lei" },
        { service: "Retratament monoradicular la microscop", price: "550 lei" },
        { service: "Retratament pluriradicular la microscop", price: "700 lei" }
      ]
    },
    {
      title: "Ortodonție – aparate dentare",
      prices: [
        { service: "Aparat fix brackeți metalici arcadă", price: "1800 lei" },
        { service: "Aparat fix brackeți safir arcadă", price: "2800 lei" },
        { service: "Aparat Spark Advanced (ambele arcade)", price: "22500 lei" }
      ]
    },
    {
      title: "Parodontologie",
      prices: [
        { service: "Chiuretaj parodontal în câmp închis (+- laser)", price: "60 lei / dinte" },
        { service: "Chiuretaj parodontal în câmp deschis (+- laser)", price: "250 lei / dinte" },
        { service: "Biostimulare cu laser hemiarcadă", price: "200 lei" }
      ]
    },
    {
      title: "Albire dentară profesională",
      prices: [
        { service: "Albire dentară premium cu LAMPĂ BEYOND® POLUS® Advanced, nr. 1 în lume", price: "1000 lei" },
        { service: "Albire endodontică per dinte / ședință", price: "250 lei" }
      ]
    },
    {
      title: "Pedodonție – stomatologie copii",
      prices: [
        { service: "Extracție dinte temporar mobil – fără anestezie", price: "100 lei" },
        { service: "Extracție dinte temporar mobil – cu anestezie", price: "150 lei" },
        { service: "Sigilare dinte permanent", price: "150 lei" },
        { service: "Obturație dinte temporar (compozit)", price: "100-200 lei" }
      ]
    },
    {
      title: "Radiologie dentară digitală",
      prices: [
        { service: "Radiografie dentară panoramică (OPG) digitală", price: "100 lei" },
        { service: "Tomografie / CT dentar parțial digital", price: "200 lei" },
        { service: "Tomografie / CT dentar arcadă digital", price: "300 lei" },
        { service: "Tomografie / CT dentar total digital", price: "500 lei" },
        { service: "Teleradiografie", price: "100 lei" }
      ]
    },
    {
      title: "Fațete dentare",
      prices: [
        { service: "Fațetă Ceramică EMAX", price: "1700 lei" },
        { service: "Fațetă integral ceramică feldspatică VIP", price: "2000 lei" }
      ]
    },
    {
      title: "Profilaxie dentară",
      prices: [
        { service: "Detartraj și periaj profesional", price: "300 lei" },
        { service: "Igienizare profesională (detartraj + periaj + air flow)", price: "400 lei" }
      ]
    },
    {
      title: "Chirurgie dentară",
      prices: [
        { service: "Extracție dinte parodontotic", price: "100 lei" },
        { service: "Extracție monoradicular", price: "150 lei" },
        { service: "Extracție pluriradicular", price: "200-250 lei" },
        { service: "Extracție molar de minte", price: "300-400 lei" },
        { service: "Extracție rest radicular", price: "200 lei" },
        { service: "Adiție osoasă mică (1-2 elemente)", price: "2000-2500 lei" },
        { service: "Adiție osoasă mare (3-6 elemente)", price: "3000-3500 lei" },
        { service: "Sinus Lift Extern", price: "de la 4000 lei" },
        { service: "Sinus Lift Intern", price: "de la 2000 lei" }
      ]
    },
    {
      title: "Coroane dentare / Protetică",
      prices: [
        { service: "Coroană Weiser ceramică", price: "800 lei" },
        { service: "Coroană Metalo-ceramică", price: "1000 lei" },
        { service: "Coroană Zirconiu", price: "1400 lei" },
        { service: "Coroană Ceramică Integrală EMAX", price: "1500 lei" },
        { service: "Proteză dentară CANDULOR", price: "2500 lei" },
        { service: "Lucrare înfiletată pe implanturi SUPERIOR (titan+zirconiu+gingie)", price: "25000 lei" },
        { service: "Lucrare înfiletată pe implanturi PREMIUM (metal+Candulor+gingie)", price: "14500-17000 lei" },
        { service: "Lucrare înfiletată pe implanturi CLASSIC (metal+Vita+acrilat)", price: "10000 lei" }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Breadcrumbs
        items={[
          { label: "Stomatologie Piatra Neamț", href: "/" },
          { label: "Tarife" }
        ]}
      />

      {/* Hero */}
      <section className="bg-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-heading">
              Prețuri Stomatologie Piatra Neamț
            </h1>
            <p className="text-xl text-text-custom">
              Tarife transparente și corecte pentru servicii stomatologice premium
            </p>
          </div>
        </div>
      </section>

      {/* Info Alert */}
      <section className="py-8 bg-section-alt">
        <div className="container mx-auto px-4">
          <Alert className="max-w-4xl mx-auto border-primary/30">
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Important:</strong> Prețurile afișate sunt orientative și pot varia în funcție de complexitatea cazului. La consultație vei primi un plan de tratament detaliat cu costul exact. Oferim și opțiuni de plată în rate pentru tratamente complexe.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Prices */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {priceCategories.map((category, index) => (
              <Card key={index} className="border-primary/20">
                <CardHeader className="bg-section-alt">
                  <CardTitle className="text-2xl text-heading">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-2/3 text-accent font-bold">Serviciu</TableHead>
                        <TableHead className="text-right text-accent font-bold">Preț</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {category.prices.map((item, idx) => (
                        <TableRow key={idx}>
                          <TableCell className="text-text-custom">{item.service}</TableCell>
                          <TableCell className="text-right font-semibold text-primary">{item.price}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-heading">Opțiuni de plată</h2>
            <p className="text-lg text-text-custom mb-8">
              Înțelegem că tratamentele stomatologice reprezintă o investiție importantă. De aceea, oferim mai multe opțiuni de plată pentru a face tratamentele accesibile:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-heading">Numerar / Card</h3>
                  <p className="text-sm text-text-custom">Plată integrală la finalizarea tratamentului</p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-heading">Plată în rate</h3>
                  <p className="text-sm text-text-custom">Opțiuni flexibile pentru tratamente complexe</p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-heading">Transfer bancar</h3>
                  <p className="text-sm text-text-custom">Pentru plăți programate</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Vrei un plan de tratament personalizat?
            </h2>
            <p className="text-xl mb-8 text-white">
              Programează o consultație și primești un plan complet cu costul exact, transparent, fără surprize
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Programare consultație
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

export default Tarife;
