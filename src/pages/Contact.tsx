import { useState } from "react";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { useDynamicSEO } from "@/hooks/use-dynamic-seo";
const Contact = () => {
  const DynamicSEO = useDynamicSEO({
    title: "Contact & Programări | Stomatologie MedStom Piatra Neamț",
    description: "Programează-te la clinica stomatologică MedStom din Piatra Neamț. Adresă: Strada Ana Ipătescu 9. Program: Luni-Vineri 09:00-19:00. ☎ 0333 630 005",
    path: "/contact"
  });
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.phone) {
      toast({
        title: "Eroare",
        description: "Te rugăm să completezi numele și numărul de telefon.",
        variant: "destructive"
      });
      return;
    }

    // Privacy policy validation
    if (!acceptedPrivacy) {
      toast({
        title: "Eroare",
        description: "Trebuie să accepți Politica de confidențialitate pentru a continua.",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("form-name", "contact");
      formDataToSend.append("bot-field", "");
      formDataToSend.append("name", formData.name);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(formDataToSend as any).toString()
      });
      if (response.ok) {
        toast({
          title: "Cerere trimisă cu succes!",
          description: "Te vom contacta în cel mai scurt timp posibil."
        });

        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: ""
        });
        setAcceptedPrivacy(false);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Eroare la trimitere",
        description: "Te rugăm să încerci din nou sau să ne contactezi telefonic.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <div className="min-h-screen flex flex-col">
      {DynamicSEO}
      <Navigation />
      <Breadcrumbs items={[{
      label: "Stomatologie Piatra Neamț",
      href: "/"
    }, {
      label: "Contact"
    }]} />

      <main className="flex-1">
        {/* Hero */}
      <section className="bg-accent py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Contact & Programări Stomatologie MedStom Piatra Neamt
            </h1>
            <p className="text-xl text-white/90">
              Apelează-ne pentru orice întrebare. Dacă suntem foarte ocupați, te sunăm noi inapoi în câteva minute!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-heading">Informații de contact</h2>
                <p className="text-lg text-text-custom mb-8">Dacă ești în căutarea unui medic dentist experimentat în Piatra Neamț, într-o clinică care oferă materiale de top și tratamente moderne - Medstom este soluția.</p>
              </div>

              <Card className="border-primary/20">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1 text-heading">Adresa clinicii</h3>
                      <a href="https://maps.app.goo.gl/KxdWvszC7MCPTLsb9" target="_blank" rel="dofollow noopener noreferrer" className="text-text-custom hover:text-primary transition-colors">
                        Strada Ana Ipătescu 9, Piatra Neamț 610120
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1 text-heading">Telefon</h3>
                      <a href="tel:+40333630005" className="text-primary hover:underline text-lg font-medium">
                        0333 630 005
                      </a>
                      <p className="text-sm text-text-custom mt-1">Pentru urgențe și programări</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1 text-heading">Program de lucru</h3>
                      <p className="text-text-custom">Luni - Vineri: 09:00 - 19:00</p>
                      <p className="text-sm text-muted-foreground mt-2">Sâmbătă și Duminică: Închis</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-accent/30 bg-accent/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-heading flex items-center">
                    <span className="text-2xl mr-2">🚨</span>
                    Urgențe stomatologice
                  </h3>
                  <p className="text-text-custom mb-4">
                    Pentru urgențe dentare (dureri severe, abcese, traumatisme), sunați la numărul de mai jos. Vom face tot posibilul să vă primim în aceeași zi.
                  </p>
                  <a href="tel:+40333630005">
                    <Button className="w-full bg-accent hover:bg-accent/90">
                      <Phone className="mr-2 h-4 w-4" />
                      Sună pentru urgențe
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6 text-heading">Formular de contact</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nume și prenume *</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Introdu numele tău" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon *</Label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="07xx xxx xxx" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email (opțional)</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="email@exemplu.ro" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mesaj (opțional)</Label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Descrie motivul programării sau întrebările tale..." rows={5} />
                    </div>

                    {/* Privacy Policy Checkbox */}
                    <div className="flex items-start space-x-3 py-4">
                      <Checkbox id="privacy-policy" checked={acceptedPrivacy} onCheckedChange={checked => setAcceptedPrivacy(checked === true)} className="mt-1" />
                      <Label htmlFor="privacy-policy" className="text-sm text-text-custom leading-relaxed cursor-pointer">
                        De acord cu{" "}
                        <Link to="/politica-confidentialitate" className="text-primary hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                          Politica de confidențialitate
                        </Link>
                        {" "}*
                      </Label>
                    </div>

                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90" disabled={isSubmitting}>
                      {isSubmitting ? "Se trimite..." : "Trimite cererea de programare"}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      Te vom contacta în cel mai scurt timp pentru a confirma programarea
                    </p>
                  </form>
                </CardContent>
              </Card>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Preferi să vorbești direct cu noi?
                </p>
                <a href="tel:+40333630005">
                  <Button variant="outline" className="mt-2">
                    <Phone className="mr-2 h-4 w-4" />
                    0333 630 005
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-heading">Cum ajungi la clinică</h2>
              <a href="https://maps.app.goo.gl/KxdWvszC7MCPTLsb9" target="_blank" rel="dofollow noopener noreferrer" className="text-lg text-text-custom hover:text-primary transition-colors">
                Strada Ana Ipătescu 9, Piatra Neamț 610120
              </a>
            </div>
            <Card className="border-primary/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video w-full">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19583.935789343344!2d26.351835853920782!3d46.92785704494117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47355500267d647d%3A0x52595dde4c16837d!2sStomatologie%20MedStom%20Piatra%20Neamt!5e1!3m2!1sro!2sro!4v1768278894357!5m2!1sro!2sro" width="100%" height="100%" style={{
                    border: 0
                  }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Locație Medstom Clinic" />
                </div>
              </CardContent>
            </Card>
            <div className="text-center mt-6">
              <a href="https://maps.app.goo.gl/KxdWvszC7MCPTLsb9" target="_blank" rel="dofollow noopener noreferrer">
                <Button variant="outline" size="lg" className="gap-2">
                  <MapPin className="h-5 w-5" />
                  Deschide în Google Maps
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>;
};
export default Contact;