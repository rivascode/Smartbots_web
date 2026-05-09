import { useEffect, useMemo, useState } from "react";
import type { PageSlug } from "@smartbots/shared";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { BackToTopButton, ScrollReveal } from "../components/ui/ScrollEnhancements";
import { AboutPage } from "../features/about/AboutPage";
import { BenefitsPage } from "../features/benefits/BenefitsPage";
import { ContactPage } from "../features/contact/ContactPage";
import { HomePage } from "../features/home/HomePage";
import { ServicesPage } from "../features/services/ServicesPage";
import { readPageFromHash } from "./navigation";

const pages: Record<PageSlug, JSX.Element> = {
  inicio: <HomePage />,
  nosotros: <AboutPage />,
  servicios: <ServicesPage />,
  beneficios: <BenefitsPage />,
  contacto: <ContactPage />
};

export function App() {
  // Routing liviano por hash: mantiene la web como landing multipágina sin depender de React Router.
  const [currentPage, setCurrentPage] = useState<PageSlug>(() => readPageFromHash());

  useEffect(() => {
    const syncRoute = () => setCurrentPage(readPageFromHash());
    window.addEventListener("hashchange", syncRoute);
    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // Las páginas se importan directo para evitar pantallas en blanco durante cambios de sección.
  const page = useMemo(() => pages[currentPage], [currentPage]);

  return (
    <div className="app-shell">
      <Header currentPage={currentPage} />
      <main>
        {page}
      </main>
      <ScrollReveal page={currentPage} />
      <BackToTopButton />
      <Footer />
    </div>
  );
}
