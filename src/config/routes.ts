import { lazy, createElement, type ComponentType, type LazyExoticComponent } from "react";
import Redirect from "@/components/Redirect";
import { ROUTE_REGISTRY, SITE_URL, type PageKey, type RouteEntry } from "./route-registry";

export { SITE_URL };

export interface RouteConfig extends RouteEntry {
  component: LazyExoticComponent<ComponentType<any>> | ComponentType<any>;
}

const Index = lazy(() => import("@/pages/Index"));
const Servicii = lazy(() => import("@/pages/Servicii"));
const ImplantDentar = lazy(() => import("@/pages/ImplantDentar"));
const Profilaxie = lazy(() => import("@/pages/Profilaxie"));
const EsteticaDentara = lazy(() => import("@/pages/EsteticaDentara"));
const Endodontie = lazy(() => import("@/pages/Endodontie"));
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

const PAGES: Record<PageKey, LazyExoticComponent<ComponentType<any>>> = {
  AlbireDentara,
  AparatDentarAdulti,
  Blog,
  Chirurgie,
  Contact,
  Despre,
  Endodontie,
  EsteticaDentara,
  ImplantDentar,
  Index,
  MaseauaMinte,
  NotFound,
  Ortodontie,
  Parodontologie,
  Parodontoza,
  PoliticaConfidentialitate,
  PoliticaCookies,
  PrimaVizitaCopil,
  Profilaxie,
  Protetica,
  Radiologie,
  Servicii,
  StomatologieCopii,
  Tarife,
  TermeniConditii,
  TratamentCarii,
  Urgente,
  UrgenteDentare,
};

export const routes: RouteConfig[] = ROUTE_REGISTRY.map((r) => ({
  ...r,
  component: r.redirectTo
    ? () => createElement(Redirect, { to: r.redirectTo! })
    : PAGES[r.page!],
}));
