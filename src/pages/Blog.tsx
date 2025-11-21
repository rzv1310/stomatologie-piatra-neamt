import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Albire dentară profesională în Piatra Neamț | Opțiuni, prețuri și rezultate",
      slug: "albire-dentara-piatra-neamt",
      excerpt: "Descoperă metodele de albire dentară disponibile în Piatra Neamț, prețurile orientative și rezultatele pe care le poți obține pentru un zâmbet strălucitor.",
      image: "/src/assets/service-estetica.jpg",
      date: "15 Noiembrie 2025"
    },
    {
      id: 2,
      title: "Aparat dentar pentru adulți în Piatra Neamț: metalic, ceramic sau Invisalign?",
      slug: "aparat-dentar-adulti-piatra-neamt",
      excerpt: "Comparație detaliată între aparatele dentare metalice, ceramice și Invisalign pentru adulți. Află care este cea mai bună opțiune pentru tine.",
      image: "/src/assets/service-ortodontie.jpg",
      date: "10 Noiembrie 2025"
    },
    {
      id: 3,
      title: "Cum pregătești copilul pentru prima vizită la dentist",
      slug: "prima-vizita-copil-dentist",
      excerpt: "Sfaturi practice pentru părinți despre cum să pregătească copilul pentru prima vizită la dentist, reducând anxietatea și creând o experiență pozitivă.",
      image: "/src/assets/service-copii.jpg",
      date: "5 Noiembrie 2025"
    },
    {
      id: 4,
      title: "Măseaua de minte - când o lași în pace și când trebuie neapărat scoasă",
      slug: "maseaua-de-minte",
      excerpt: "Ghid complet despre măselele de minte: când este necesară extracția, care sunt semnalele de alarmă și cum decurge procesul de recuperare.",
      image: "/src/assets/service-chirurgie.jpg",
      date: "1 Noiembrie 2025"
    },
    {
      id: 5,
      title: "Ți s-a rupt un dinte sau ți-a căzut o plombă? Ce faci înainte să ajungi la medic",
      slug: "urgente-dentare-dinte-rupt",
      excerpt: "Primul ajutor dentar: ce măsuri să iei imediat când ai o urgență dentară, cum păstrezi fragmentul și când trebuie să mergi urgent la dentist.",
      image: "/src/assets/service-urgente.jpg",
      date: "28 Octombrie 2025"
    },
    {
      id: 6,
      title: "Ai dinți care se mișcă? Cum recunoști și tratezi parodontoza, pas cu pas",
      slug: "parodontoza-tratament",
      excerpt: "Totul despre parodontoză: simptome timpurii, stadii de evoluție, opțiuni de tratament și cum poți preveni agravarea acestei afecțiuni comune.",
      image: "/src/assets/service-parodontologie.jpg",
      date: "25 Octombrie 2025"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog Stomatologie Piatra Neamț | Sfaturi și Ghiduri Utile</title>
        <meta name="description" content="Ghiduri complete și sfaturi practice despre tratamentele dentare, îngrijirea dinților și sănătatea orală de la specialiștii noștri din Piatra Neamț." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="bg-accent py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Blog Stomatologie - Sfaturi și Ghiduri Utile
              </h1>
              <p className="text-xl text-white/90">
                Descoperă articole informative despre tratamentele dentare, îngrijirea dinților și 
                sănătatea orală, scrise de specialiștii noștri din Piatra Neamț.
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <Link 
                      to={`/blog/${article.slug}`}
                      className="inline-flex items-center text-accent font-semibold hover:text-accent/80 transition-colors"
                    >
                      Citește articolul →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
