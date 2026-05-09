export const pageSlugs = ["inicio", "nosotros", "servicios", "beneficios", "contacto"] as const;

export type PageSlug = (typeof pageSlugs)[number];

export const solutionOptions = [
  "Automatización de procesos",
  "Inteligencia Artificial",
  "Desarrollo de software",
  "Integraciones API",
  "Outsourcing TI",
  "Cloud e infraestructura",
  "Consultoría tecnológica",
  "Soluciones logísticas",
  "Otro"
] as const;

export type SolutionOption = (typeof solutionOptions)[number];

export interface ContactRequest {
  name: string;
  company: string;
  email: string;
  phone: string;
  solution: SolutionOption | "";
  message: string;
}

export interface ContactResponse {
  id: string;
  receivedAt: string;
}

export function isPageSlug(value: string): value is PageSlug {
  return pageSlugs.includes(value as PageSlug);
}
