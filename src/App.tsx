import { Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import {
  AboutPage,
  CampusCURAPage,
  ContactPage,
  HardwareProductsPage,
  HomePage,
  LibraryRadarPage,
  NotFoundPage,
  RfidSolutionPage,
  ServicesPage,
  WhyChooseUsPage,
  preloadCommonRoutes,
} from "@/lib/routes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <GoogleAnalytics />
          <RouteWarmup />
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center bg-background text-professional-grey">
                Loading System One...
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/campusCURA" element={<Navigate to="/campus-cura" replace />} />
              <Route path="/LibraryRadar" element={<Navigate to="/library-radar" replace />} />
              <Route path="/HardwareProducts" element={<Navigate to="/hardware-products" replace />} />
              <Route path="/campus-cura" element={<CampusCURAPage />} />
              <Route path="/library-radar" element={<LibraryRadarPage />} />
              <Route path="/hardware-products" element={<HardwareProductsPage />} />
              <Route path="/rfid-solutions/:slug" element={<RfidSolutionPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const RouteWarmup = () => {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      preloadCommonRoutes();
    }, 1200);

    return () => window.clearTimeout(timer);
  }, []);

  return null;
};

export default App;
