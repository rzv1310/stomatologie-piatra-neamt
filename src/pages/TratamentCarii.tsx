import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Shield, Clock, Award, CheckCircle, AlertCircle } from "lucide-react";
import heroImage from "@/assets/service-tratament-carii.jpg";

const TratamentCarii = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Breadcrumbs
        items={[
          { label: "Acasă", href: "/" },
          { label: "Servicii", href: "/servicii" },
          { label: "Tratamentul Cariilor" },
        ]}
      />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Odontoterapie Restauratorie
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-white/90">
                Tratamentul profesional al cariilor dentare pentru un zâmbet sănătos
              </p>
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+40233123456" className="inline-flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Programează-te acum
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Introducere */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Ce este tratamentul cariilor dentare?
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-8 leading-relaxed">
                Odontoterapia restauratorie (tratamentul cariilor dentare) este procedura prin care se îndepărtează țesutul dentar afectat de carie și se restaurează structura dintelui cu materiale moderne, biocompatibile. Tratamentul prompt al cariilor previne complicații grave și păstrează integritatea dinților naturali.
              </p>
            </div>
          </div>
        </section>

        {/* De ce este important */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-center">
                De ce este important tratamentul cariilor?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center">
                  <CardHeader>
                    <AlertCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <CardTitle className="text-lg">Previne durerea</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Tratarea timpurie a cariilor previne durerea dentară intensă și disconfortul
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <CardTitle className="text-lg">Salvează dintele</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Evită pierderea dintelui și necesitatea unor tratamente complexe
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <CardTitle className="text-lg">Economisești timp</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Tratamentul rapid al cariilor mici necesită mai puțin timp decât complicațiile
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <CardTitle className="text-lg">Rezultat estetic</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Materialele moderne oferă un aspect natural și durabil
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Tipuri de tratamente */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-center">
                Tipuri de tratamente ale cariilor
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Obturații simple</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Pentru cariile superficiale și de dimensiuni mici, se folosesc obturații simple cu materiale compozite foto-polimerizabile, care se leagă chimic de țesutul dentar și oferă un rezultat estetic excelent.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Aspect natural, culoare identică cu dintele</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Durabilitate crescută</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Procedură rapid</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Obturații complexe</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Pentru cariile extinse care afectează mai multe suprafețe ale dintelui, se realizează obturații complexe care reconstituie forma și funcția dintelui, asigurând rezistență la forțele masticatorii.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Restaurare completă a dintelui</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Protecție pe termen lung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Rezultat estetic și functional</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Inlay și Onlay</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Pentru cariile foarte mari, când țesutul dentar rămas este insuficient pentru o obturație clasică, se recomandă restaurări indirecte (inlay/onlay) realizate în laborator din ceramică sau materiale compozite de înaltă rezistență.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Rezistență superioară</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Precizie maximă</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Durabilitate pe termen lung</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Procesul de tratament */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-center">
                Cum se desfășoară tratamentul?
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          1
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Consultația inițială</h3>
                        <p className="text-muted-foreground">
                          Examinare dentară completă și identificarea cariilor prin inspecție vizuală și radiografii dentare
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          2
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Anestezie locală</h3>
                        <p className="text-muted-foreground">
                          Administrarea anesteziei locale pentru un tratament confortabil și fără durere
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          3
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Îndepărtarea cariei</h3>
                        <p className="text-muted-foreground">
                          Curățarea completă a țesutului dentar afectat folosind instrumente moderne și tehnologie dentară avansată
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          4
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Obturația</h3>
                        <p className="text-muted-foreground">
                          Aplicarea materialului de obturație în straturi succesive, polimerizate cu lampă specială, și modelarea anatomică a dintelui
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          5
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Finisare și control</h3>
                        <p className="text-muted-foreground">
                          Ajustarea ocluziei (mușcăturii), lustruirea obturației și recomandări pentru îngrijirea dentară
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficii */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-center">
                Beneficiile tratamentului modern al cariilor
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <CheckCircle className="h-8 w-8 text-primary mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Tratament nedureros</h3>
                    <p className="text-muted-foreground">
                      Folosim tehnici moderne de anestezie pentru un confort maxim în timpul procedurii
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <CheckCircle className="h-8 w-8 text-primary mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Materiale biocompatibile</h3>
                    <p className="text-muted-foreground">
                      Utilizăm doar materiale certificate, fără mercur, sigure pentru sănătatea ta
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <CheckCircle className="h-8 w-8 text-primary mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Rezultate estetice</h3>
                    <p className="text-muted-foreground">
                      Obturațiile moderne imită perfect culoarea și transparența dintelui natural
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <CheckCircle className="h-8 w-8 text-primary mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Durabilitate garantată</h3>
                    <p className="text-muted-foreground">
                      Materialele moderne oferă rezistență superioară și o durată de viață îndelungată
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Întrebări frecvente */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-center">
                Întrebări frecvente
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Doare tratamentul cariilor?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Nu, tratamentul se efectuează sub anestezie locală, astfel încât nu vei simți durere în timpul procedurii. După ce efectul anesteziei trece, poți simți o ușoară sensibilitate care dispare în câteva ore.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Cât durează o obturație?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Durata de viață a unei obturații moderne poate fi de 10-15 ani sau mai mult, în funcție de îngrijirea dentară zilnică, igiena orală și controalele periodice la dentist.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Pot mânca imediat după tratament?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Se recomandă să aștepți până când efectul anesteziei trece complet (aproximativ 2-3 ore) pentru a evita mușcarea accidentală a buzei sau limbii. Obturațiile moderne se polimerizează instant, deci dintele poate fi folosit imediat.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Care este diferența între o obturație și o coroană?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Obturația se folosește pentru cariile mici și medii, când mai mult de 50% din țesutul dentar este intact. Coroana dentară este recomandată când distrucția dentară este mare și dintele necesită protecție completă pentru a rezista forțelor masticatorii.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nu ignora cariile dentare!
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Un tratament la timp salvează dintele și previne complicațiile. Programează-te astăzi pentru o consultație gratuită.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+40233123456" className="inline-flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Sună acum: 0233 123 456
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TratamentCarii;
