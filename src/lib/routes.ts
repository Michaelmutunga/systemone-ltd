import { lazyWithPreload } from "@/lib/lazyWithPreload";

export const HomePage = lazyWithPreload(() => import("@/pages/Home"));
export const AboutPage = lazyWithPreload(() => import("@/pages/About"));
export const ServicesPage = lazyWithPreload(() => import("@/pages/Services"));
export const WhyChooseUsPage = lazyWithPreload(() => import("@/pages/WhyChooseUs"));
export const ContactPage = lazyWithPreload(() => import("@/pages/Contact"));
export const CampusCURAPage = lazyWithPreload(() => import("@/pages/CampusCURA"));
export const LibraryRadarPage = lazyWithPreload(() => import("@/pages/LibraryRadar"));
export const HardwareProductsPage = lazyWithPreload(() => import("@/pages/HardwareProducts"));
export const NotFoundPage = lazyWithPreload(() => import("@/pages/NotFound"));

const routePreloaders: Record<string, () => Promise<unknown>> = {
  "/": HomePage.preload,
  "/about": AboutPage.preload,
  "/services": ServicesPage.preload,
  "/why-choose-us": WhyChooseUsPage.preload,
  "/contact": ContactPage.preload,
  "/campus-cura": CampusCURAPage.preload,
  "/library-radar": LibraryRadarPage.preload,
  "/hardware-products": HardwareProductsPage.preload,
};

export const preloadRoute = (path: string) => routePreloaders[path]?.();

export const preloadCommonRoutes = () => {
  void ServicesPage.preload();
  void ContactPage.preload();
  void AboutPage.preload();
};
