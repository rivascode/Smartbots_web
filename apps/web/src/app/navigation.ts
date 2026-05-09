import { isPageSlug, type PageSlug } from "@smartbots/shared";

export const navItems: Array<{ slug: PageSlug; label: string }> = [
  { slug: "inicio", label: "Inicio" },
  { slug: "nosotros", label: "Nosotros" },
  { slug: "servicios", label: "Servicios" },
  { slug: "beneficios", label: "Beneficios" },
  { slug: "contacto", label: "Contacto" }
];

export function readPageFromHash(): PageSlug {
  const rawHash = window.location.hash.replace(/^#\/?/, "");
  return isPageSlug(rawHash) ? rawHash : "inicio";
}

export function pageHref(page: PageSlug): string {
  return `#${page}`;
}
