import type { InfoCardData } from "../components/ui/InfoCard";

export const aboutCards: InfoCardData[] = [
  {
    icon: "target",
    tone: "magenta",
    title: "Innovación aplicada",
    description: "Implementamos tecnología moderna enfocada en resolver desafíos reales de negocio."
  },
  {
    icon: "zap",
    tone: "cyan",
    title: "Eficiencia operativa",
    description: "Automatizamos procesos y optimizamos flujos para mejorar productividad y control."
  },
  {
    icon: "brain",
    title: "Tecnología estratégica",
    description: "Diseñamos soluciones alineadas a objetivos operativos, financieros y de crecimiento."
  },
  {
    icon: "shield",
    tone: "magenta",
    title: "Acompañamiento continuo",
    description: "Trabajamos junto a nuestros clientes en cada etapa de evolución digital."
  }
];

export const homeSolutions = [
  {
    title: "Inteligencia Artificial",
    description: "OCR, agentes IA y automatización cognitiva.",
    icon: "brain",
    tone: "cyan"
  },
  {
    title: "Desarrollo de Software",
    description: "Apps, plataformas y sistemas empresariales.",
    icon: "globe",
    tone: "default"
  },
  {
    title: "Integraciones API",
    description: "Conectamos ERPs, CRMs y plataformas.",
    icon: "link",
    tone: "magenta"
  },
  {
    title: "Cloud & Infraestructura",
    description: "Servidores, virtualización y arquitectura escalable.",
    icon: "cloud",
    tone: "cyan"
  }
] as const;

export const industries = [
  { title: "Logística y Aduanas", icon: "truck" },
  { title: "Salud", icon: "health" },
  { title: "Retail", icon: "shopping" },
  { title: "Finanzas", icon: "analytics" },
  { title: "Servicios Corporativos", icon: "file" },
  { title: "Operaciones Industriales", icon: "factory" },
  { title: "Recursos Humanos", icon: "users" },
  { title: "Empresas Tecnológicas", icon: "monitor" }
] as const;

export const reasons = [
  {
    number: "01",
    title: "Enfoque estratégico",
    description: "Entendemos procesos reales de negocio antes de proponer tecnología."
  },
  {
    number: "02",
    title: "Implementación ágil",
    description: "Resultados visibles desde etapas tempranas."
  },
  {
    number: "03",
    title: "Soluciones personalizadas",
    description: "Tecnología adaptada al tamaño, operación y madurez digital del cliente."
  },
  {
    number: "04",
    title: "Acompañamiento continuo",
    description: "Soporte, evolución y mejora constante después de la implementación."
  }
] as const;

export const serviceCards: InfoCardData[] = [
  {
    icon: "automation",
    tone: "magenta",
    title: "Automatización Inteligente",
    description:
      "Automatizamos tareas repetitivas y procesos operativos mediante bots y flujos digitales capaces de trabajar 24/7 con alta precisión.",
    items: ["Facturación", "Validaciones", "Reportes", "Procesos administrativos", "Flujos documentarios"]
  },
  {
    icon: "brain",
    tone: "cyan",
    title: "Inteligencia Artificial",
    description: "Implementamos soluciones IA enfocadas en productividad y automatización empresarial.",
    items: ["IA documental", "OCR inteligente", "Agentes virtuales", "Asistentes internos", "Automatización cognitiva"]
  },
  {
    icon: "globe",
    title: "Desarrollo de Software",
    description: "Creamos plataformas y sistemas empresariales personalizados.",
    items: ["Apps web", "Dashboards", "Portales clientes", "Gestión documental", "Plataformas internas"]
  },
  {
    icon: "link",
    tone: "magenta",
    title: "Integraciones API",
    description: "Conectamos sistemas y plataformas para centralizar información y eliminar reprocesos.",
    items: ["ERP", "CRM", "APIs empresariales", "SUNAT", "WhatsApp", "Sistemas internos"]
  },
  {
    icon: "cloud",
    tone: "cyan",
    title: "Cloud & Infraestructura",
    description: "Diseñamos entornos tecnológicos escalables y seguros.",
    items: ["Virtualización", "Servidores", "Cloud", "Redes", "Continuidad operativa"]
  },
  {
    icon: "monitor",
    title: "Outsourcing TI",
    description: "Brindamos soporte tecnológico y administración TI para empresas modernas."
  },
  {
    icon: "truck",
    tone: "magenta",
    title: "Soluciones logísticas y aduanas",
    description:
      "Herramientas especializadas para trazabilidad, automatización documentaria, bots aduaneros, reportes e integración operativa."
  }
];

export const benefitCards: InfoCardData[] = [
  {
    icon: "zap",
    tone: "cyan",
    title: "Mayor eficiencia operativa",
    description: "Reducimos tiempos y eliminamos tareas repetitivas mediante automatización inteligente."
  },
  {
    icon: "analytics",
    tone: "magenta",
    title: "Más productividad",
    description: "Tu equipo dedica más tiempo a actividades estratégicas y menos a procesos manuales."
  },
  {
    icon: "target",
    title: "Mayor precisión y control",
    description: "Minimizamos errores y mejoramos la trazabilidad de la información."
  },
  {
    icon: "dollar",
    tone: "magenta",
    title: "Optimización de costos",
    description: "Reducimos reprocesos, desperdicios operativos y dependencia manual."
  },
  {
    icon: "link",
    tone: "cyan",
    title: "Operaciones conectadas",
    description: "Integramos sistemas y centralizamos información en tiempo real."
  },
  {
    icon: "cloud",
    title: "Escalabilidad empresarial",
    description: "La tecnología acompaña el crecimiento de tu operación sin aumentar complejidad."
  }
];

export const businessAreaCards: InfoCardData[] = [
  { icon: "analytics", tone: "magenta", title: "Finanzas", description: "Menos validaciones manuales y mayor control." },
  { icon: "workflow", tone: "cyan", title: "Operaciones", description: "Procesos más rápidos y trazables." },
  { icon: "user", title: "RRHH", description: "Automatización administrativa y documental." },
  { icon: "briefcase", tone: "magenta", title: "Comercial", description: "Información integrada y seguimiento en tiempo real." },
  { icon: "shield", tone: "cyan", title: "Gerencia", description: "KPIs y decisiones basadas en datos." }
];

export const contactReasons: InfoCardData[] = [
  { title: "Soluciones adaptadas", description: "Tecnología diseñada según las necesidades reales de tu empresa." },
  { title: "Implementación ágil", description: "Resultados visibles desde etapas tempranas." },
  { title: "Tecnología escalable", description: "Soluciones preparadas para crecer junto a tu negocio." },
  { title: "Acompañamiento continuo", description: "Soporte y evolución constante de cada solución." },
  { title: "Resultados reales", description: "Priorizamos eficiencia, productividad y control operativo." }
];
