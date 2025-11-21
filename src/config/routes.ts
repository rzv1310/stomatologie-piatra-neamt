import { lazy } from "react";

// Route configuration with SEO metadata
export interface RouteConfig {
  path: string;
  component: React.LazyExoticComponent<React.ComponentType<any>> | React.ComponentType<any>;
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  title?: string;
  excludeFromSitemap?: boolean;
}

// Lazy load components for better performance
const Index = lazy(() => import("@/pages/Index"));
const Servicii = lazy(() => import("@/pages/Servicii"));
const ImplantDentar = lazy(() => import("@/pages/ImplantDentar"));
const Profilaxie = lazy(() => import("@/pages/Profilaxie"));
const EsteticaDentara = lazy(() => import("@/pages/EsteticaDentara"));
const StomatologieGenerala = lazy(() => import("@/pages/StomatologieGenerala"));
const Protetica = lazy(() => import("@/pages/Protetica"));
const Chirurgie = lazy(() => import("@/pages/Chirurgie"));
const Parodontologie = lazy(() => import("@/pages/Parodontologie"));
const Radiologie = lazy(() => import("@/pages/Radiologie"));
const Ortodontie = lazy(() => import("@/pages/Ortodontie"));
const StomatologieCopii = lazy(() => import("@/pages/StomatologieCopii"));
const Urgente = lazy(() => import("@/pages/Urgente"));
const TratamentCarii = lazy(() => import("@/pages/TratamentCarii"));
const Tarife = lazy(() => import("@/pages/Tarife"));
const Despre = lazy(() => import("@/pages/Despre"));
const Contact = lazy(() => import("@/pages/Contact"));
const PoliticaCookies = lazy(() => import("@/pages/PoliticaCookies"));
const TermeniConditii = lazy(() => import("@/pages/TermeniConditii"));
const PoliticaConfidentialitate = lazy(() => import("@/pages/PoliticaConfidentialitate"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Blog = lazy(() => import("@/pages/Blog"));
const AlbireDentara = lazy(() => import("@/pages/blog/AlbireDentara"));
const AparatDentarAdulti = lazy(() => import("@/pages/blog/AparatDentarAdulti"));
const PrimaVizitaCopil = lazy(() => import("@/pages/blog/PrimaVizitaCopil"));
const MaseauaMinte = lazy(() => import("@/pages/blog/MaseauaMinte"));
const UrgenteDentare = lazy(() => import("@/pages/blog/UrgenteDentare"));
const Parodontoza = lazy(() => import("@/pages/blog/Parodontoza"));

export const routes: RouteConfig[] = [
  // Homepage
  {
    path: "/",
    component: Index,
    priority: 1.0,
    changefreq: "weekly",
    title: "Home"
  },
  
  // Main pages
  {
    path: "/servicii",
    component: Servicii,
    priority: 0.9,
    changefreq: "monthly",
    title: "Servicii"
  },
  {
    path: "/despre",
    component: Despre,
    priority: 0.9,
    changefreq: "monthly",
    title: "Despre"
  },
  {
    path: "/contact",
    component: Contact,
    priority: 0.9,
    changefreq: "monthly",
    title: "Contact"
  },
  {
    path: "/tarife",
    component: Tarife,
    priority: 0.9,
    changefreq: "monthly",
    title: "Tarife"
  },
  {
    path: "/blog",
    component: Blog,
    priority: 0.9,
    changefreq: "weekly",
    title: "Blog"
  },

  // Service pages
  {
    path: "/servicii/implant-dentar",
    component: ImplantDentar,
    priority: 0.8,
    changefreq: "monthly",
    title: "Implant Dentar"
  },
  {
    path: "/servicii/profilaxie",
    component: Profilaxie,
    priority: 0.8,
    changefreq: "monthly",
    title: "Profilaxie"
  },
  {
    path: "/servicii/estetica-dentara",
    component: EsteticaDentara,
    priority: 0.8,
    changefreq: "monthly",
    title: "Estetica Dentara"
  },
  {
    path: "/servicii/tratament-carii",
    component: TratamentCarii,
    priority: 0.8,
    changefreq: "monthly",
    title: "Tratament Carii"
  },
  {
    path: "/servicii/endodontie-piatra-neamt",
    component: StomatologieGenerala,
    priority: 0.8,
    changefreq: "monthly",
    title: "Endodontie"
  },
  {
    path: "/servicii/protetica-piatra-neamt",
    component: Protetica,
    priority: 0.8,
    changefreq: "monthly",
    title: "Protetica"
  },
  {
    path: "/servicii/ortodontie-piatra-neamt",
    component: Ortodontie,
    priority: 0.8,
    changefreq: "monthly",
    title: "Ortodontie"
  },
  {
    path: "/servicii/stomatologie-copii-piatra-neamt",
    component: StomatologieCopii,
    priority: 0.8,
    changefreq: "monthly",
    title: "Stomatologie Copii"
  },
  {
    path: "/servicii/urgente",
    component: Urgente,
    priority: 0.8,
    changefreq: "monthly",
    title: "Urgente"
  },
  {
    path: "/servicii/chirurgie-orala",
    component: Chirurgie,
    priority: 0.8,
    changefreq: "monthly",
    title: "Chirurgie Orala"
  },
  {
    path: "/servicii/parodontologie-piatra-neamt",
    component: Parodontologie,
    priority: 0.8,
    changefreq: "monthly",
    title: "Parodontologie"
  },
  {
    path: "/servicii/radiologie-dentara-piatra-neamt",
    component: Radiologie,
    priority: 0.8,
    changefreq: "monthly",
    title: "Radiologie"
  },

  // Blog posts
  {
    path: "/blog/albire-dentara-piatra-neamt",
    component: AlbireDentara,
    priority: 0.7,
    changefreq: "weekly",
    title: "Albire Dentara"
  },
  {
    path: "/blog/aparat-dentar-adulti-piatra-neamt",
    component: AparatDentarAdulti,
    priority: 0.7,
    changefreq: "weekly",
    title: "Aparat Dentar Adulti"
  },
  {
    path: "/blog/prima-vizita-copil-dentist",
    component: PrimaVizitaCopil,
    priority: 0.7,
    changefreq: "weekly",
    title: "Prima Vizita Copil"
  },
  {
    path: "/blog/maseaua-de-minte",
    component: MaseauaMinte,
    priority: 0.7,
    changefreq: "weekly",
    title: "Maseaua de Minte"
  },
  {
    path: "/blog/urgente-dentare-dinte-rupt",
    component: UrgenteDentare,
    priority: 0.7,
    changefreq: "weekly",
    title: "Urgente Dentare"
  },
  {
    path: "/blog/parodontoza-tratament",
    component: Parodontoza,
    priority: 0.7,
    changefreq: "weekly",
    title: "Parodontoza"
  },

  // Legal pages
  {
    path: "/politica-confidentialitate",
    component: PoliticaConfidentialitate,
    priority: 0.5,
    changefreq: "yearly",
    title: "Politica Confidentialitate"
  },
  {
    path: "/termeni-conditii",
    component: TermeniConditii,
    priority: 0.5,
    changefreq: "yearly",
    title: "Termeni si Conditii"
  },
  {
    path: "/politica-cookies",
    component: PoliticaCookies,
    priority: 0.5,
    changefreq: "yearly",
    title: "Politica Cookies"
  },

  // 404 - exclude from sitemap
  {
    path: "*",
    component: NotFound,
    priority: 0,
    changefreq: "never",
    title: "404",
    excludeFromSitemap: true
  }
];

export const SITE_URL = "https://stomatologiepiatraneamt.ro";
