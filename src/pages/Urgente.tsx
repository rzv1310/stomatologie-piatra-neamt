import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import urgenteHero from "@/assets/service-urgente.jpg";

const Urgente = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${urgenteHero})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Urgențe Stomatologice Piatra Neamț</h1>
            <p className="text-xl mb-8">Durerea nu așteaptă. Nici noi. Suntem aici pentru tine când ai nevoie.</p>
            <a href="tel:+40333630005"><Button size="lg" className="bg-accent hover:bg-accent/90"><Phone className="mr-2 h-5 w-5" />Sună ACUM - 0333 630 005</Button></a>
          </div>
        </div>
      </section>
      <section className="py-20 bg-accent text-white"><div className="container mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-6">Tratăm urgențe stomatologice rapid</h2><p className="text-xl mb-8">Abces dentar, dureri acute, traumatisme - rezolvăm rapid!</p></div></section>
      <Footer />
    </div>
  );
};
export default Urgente;
