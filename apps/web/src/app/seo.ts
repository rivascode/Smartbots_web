import type { PageSlug } from "@smartbots/shared";

const siteUrl = "https://www.smartbots.pe/";
const siteName = "SMARTBOTS";

const seoByPage: Record<PageSlug, { title: string; description: string; keywords: string }> = {
  inicio: {
    title: "SMARTBOTS | Automatización, IA y software para empresas",
    description:
      "SMARTBOTS desarrolla automatización de procesos, inteligencia artificial, software empresarial, integraciones API e infraestructura TI para empresas en Perú y LATAM.",
    keywords:
      "automatización de procesos, inteligencia artificial empresarial, software empresarial, integraciones API, infraestructura TI, Perú, LATAM"
  },
  nosotros: {
    title: "Nosotros | Soluciones digitales con propósito operativo | SMARTBOTS",
    description:
      "Conoce el enfoque de SMARTBOTS para mejorar operaciones con automatización, datos conectados y software escalable.",
    keywords: "SMARTBOTS, soluciones digitales, automatización, datos conectados, operaciones, transformación digital"
  },
  servicios: {
    title: "Servicios | Automatización, IA, software e infraestructura TI",
    description:
      "Servicios para empresas: automatización de procesos, inteligencia artificial, desarrollo de software, integraciones API, outsourcing TI y cloud.",
    keywords: "automatización empresarial, inteligencia artificial, desarrollo de software, integraciones API, outsourcing TI, cloud"
  },
  beneficios: {
    title: "Beneficios | Productividad, control y eficiencia operativa",
    description:
      "Beneficios de automatizar operaciones: menos reprocesos, mejor control, productividad, datos conectados y crecimiento escalable.",
    keywords: "beneficios de automatización, productividad empresarial, eficiencia operativa, control de procesos"
  },
  contacto: {
    title: "Contacto | Agenda un diagnóstico con SMARTBOTS",
    description:
      "Cuéntanos qué necesita tu empresa y agenda un diagnóstico para optimizar procesos, integrar sistemas y acelerar resultados.",
    keywords: "contacto SMARTBOTS, diagnóstico tecnológico, automatización empresarial, consultoría tecnológica"
  }
};

function setMeta(selector: string, attribute: "content" | "href", value: string) {
  const element = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
  if (element) {
    element.setAttribute(attribute, value);
  }
}

function setJsonLd() {
  const id = "smartbots-structured-data";
  const existing = document.getElementById(id);
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}assets/logo-smartbots-official.png`,
    areaServed: ["Perú", "LATAM"],
    knowsAbout: [
      "Automatización de procesos",
      "Inteligencia artificial empresarial",
      "Desarrollo de software",
      "Integraciones API",
      "Infraestructura TI"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "contacto@smartbots.pe",
      availableLanguage: ["es"]
    }
  };
  const script = (existing ?? document.createElement("script")) as HTMLScriptElement;
  script.id = id;
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  if (!existing) {
    document.head.appendChild(script);
  }
}

export function updateSeo(page: PageSlug) {
  const seo = seoByPage[page];
  document.title = seo.title;
  setMeta('meta[name="description"]', "content", seo.description);
  setMeta('meta[name="keywords"]', "content", seo.keywords);
  setMeta('meta[property="og:title"]', "content", seo.title);
  setMeta('meta[property="og:description"]', "content", seo.description);
  setMeta('meta[name="twitter:title"]', "content", seo.title);
  setMeta('meta[name="twitter:description"]', "content", seo.description);
  setMeta('link[rel="canonical"]', "href", siteUrl);
  setJsonLd();
}
