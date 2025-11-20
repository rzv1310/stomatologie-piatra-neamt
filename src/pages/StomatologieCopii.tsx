import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import copiiHero from "@/assets/service-copii.jpg";

const StomatologieCopii = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${copiiHero})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Stomatologie pentru Copii în Piatra Neamț</h1>
            <p className="text-xl mb-8">Tratamente gentle și fără teamă pentru dinții de lapte și permanenți</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact"><Button size="lg" className="bg-accent hover:bg-accent/90">Programează-ți copilul<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <a href="tel:+40333630005"><Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary"><Phone className="mr-2 h-5 w-5" />0333 630 005</Button></a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20"><div className="container mx-auto px-4"><h2 className="text-3xl font-bold mb-6 text-heading">Pedodonție - Stomatologie pentru copii</h2><p className="text-lg text-text-custom">Abordare prietenoasă și delicată pentru cei mici.</p></div></section>
      <Footer />
    </div>
  );
};
export default StomatologieCopii;
