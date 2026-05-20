import type { PageSlug } from "@smartbots/shared";
import { siteSettings } from "../data/siteSettings";

const siteUrl = "https://www.smartbots.pe/";
const siteName = "SMARTBOTS";
const previewImage = `${siteUrl}assets/logo-smartbots-official.png`;

const seoByPage: Record<PageSlug, { title: string; description: string; keywords: string; route: string }> = {
  inicio: {
    title: "SMARTBOTS | Automatización de procesos, IA y software empresarial",
    description:
      "Automatizamos procesos, conectamos sistemas y desarrollamos software a medida para empresas que buscan reducir errores, ahorrar tiempo y crecer con control.",
    keywords:
      "automatización de procesos, inteligencia artificial empresarial, software empresarial, RPA, bots empresariales, integraciones API, Perú, LATAM",
    route: ""
  },
  nosotros: {
    title: "Nosotros | Tecnología con propósito operativo | SMARTBOTS",
    description:
      "Conoce el enfoque de SMARTBOTS para transformar procesos manuales en operaciones conectadas, medibles y listas para escalar.",
    keywords: "SMARTBOTS, transformación digital, automatización empresarial, datos conectados, eficiencia operativa",
    route: "#nosotros"
  },
  servicios: {
    title: "Servicios | Automatización, IA, software e infraestructura TI",
    description:
      "Servicios SMARTBOTS: automatización inteligente, inteligencia artificial, desarrollo de software, integraciones API, cloud, outsourcing TI y soluciones logísticas.",
    keywords: "automatización empresarial, inteligencia artificial, desarrollo de software, integraciones API, outsourcing TI, cloud, RPA",
    route: "#servicios"
  },
  beneficios: {
    title: "Beneficios | Menos costos, más productividad y control operativo",
    description:
      "Descubre cómo la automatización ayuda a reducir costos, ahorrar tiempo, mejorar KPIs y aumentar la capacidad operativa sin sumar complejidad.",
    keywords: "beneficios de automatización, productividad empresarial, eficiencia operativa, reducción de costos, KPIs",
    route: "#beneficios"
  },
  contacto: {
    title: "Contacto | Agenda un diagnóstico tecnológico con SMARTBOTS",
    description:
      "Agenda una reunión con SMARTBOTS o cuéntanos qué necesita tu empresa para optimizar procesos, integrar sistemas y acelerar resultados.",
    keywords: "contacto SMARTBOTS, diagnóstico tecnológico, automatización empresarial, consultoría tecnológica, reunión",
    route: "#contacto"
  }
};

function pageUrl(page: PageSlug) {
  return `${siteUrl}${seoByPage[page].route}`;
}

function setMeta(selector: string, attribute: "content" | "href", value: string) {
  const element = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
  if (element) {
    element.setAttribute(attribute, value);
  }
}

function setOptionalMeta(selector: string, attribute: "name" | "property", key: string, value: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", value);
}

function setJsonLd(page: PageSlug) {
  const id = "smartbots-structured-data";
  const existing = document.getElementById(id);
  const seo = seoByPage[page];
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: siteName,
        url: siteUrl,
        logo: previewImage,
        email: siteSettings.contact.email,
        telephone: siteSettings.contact.phoneNumber,
        sameAs: [siteSettings.contact.linkedinUrl],
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
          email: siteSettings.contact.email,
          telephone: siteSettings.contact.phoneNumber,
          url: siteSettings.contact.whatsappUrl,
          availableLanguage: ["es"]
        }
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: siteName,
        url: siteUrl,
        publisher: { "@id": `${siteUrl}#organization` },
        inLanguage: "es-PE"
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl(page)}#webpage`,
        url: pageUrl(page),
        name: seo.title,
        description: seo.description,
        isPartOf: { "@id": `${siteUrl}#website` },
        about: { "@id": `${siteUrl}#organization` },
        inLanguage: "es-PE"
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}#services`,
        name: "Automatización de procesos, IA y software empresarial",
        provider: { "@id": `${siteUrl}#organization` },
        areaServed: ["Perú", "LATAM"],
        serviceType: [
          "Automatización inteligente",
          "Inteligencia artificial",
          "Desarrollo de software",
          "Integraciones API",
          "Cloud e infraestructura"
        ],
        url: `${siteUrl}#servicios`
      },
      {
        "@type": "ScheduleAction",
        target: siteSettings.contact.appointmentUrl,
        name: "Agendar diagnóstico tecnológico con SMARTBOTS"
      }
    ]
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
  const url = pageUrl(page);
  document.title = seo.title;
  setMeta('meta[name="description"]', "content", seo.description);
  setMeta('meta[name="keywords"]', "content", seo.keywords);
  setMeta('meta[property="og:title"]', "content", seo.title);
  setMeta('meta[property="og:description"]', "content", seo.description);
  setMeta('meta[property="og:url"]', "content", url);
  setMeta('meta[property="og:image"]', "content", previewImage);
  setMeta('meta[name="twitter:title"]', "content", seo.title);
  setMeta('meta[name="twitter:description"]', "content", seo.description);
  setMeta('link[rel="canonical"]', "href", url);
  setOptionalMeta('meta[property="og:image:alt"]', "property", "og:image:alt", "Logo oficial de SMARTBOTS");
  setOptionalMeta('meta[name="twitter:image"]', "name", "twitter:image", previewImage);
  setOptionalMeta('meta[name="twitter:image:alt"]', "name", "twitter:image:alt", "Logo oficial de SMARTBOTS");
  setJsonLd(page);
}
