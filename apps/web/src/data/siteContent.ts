import type { InfoCardData } from "../components/ui/InfoCard";

export const aboutCards: InfoCardData[] = [
  {
    icon: "target",
    tone: "magenta",
    title: "Innovación aplicada",
    description: "Implementamos soluciones prácticas enfocadas en resolver desafíos reales de negocio."
  },
  {
    icon: "zap",
    tone: "cyan",
    title: "Eficiencia operativa",
    description: "Automatizamos procesos y optimizamos flujos para mejorar productividad y control."
  },
  {
    icon: "brain",
    title: "Estrategia digital",
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
    title: "Tareas que se resuelven solas",
    description: "Automatizamos registros, validaciones y seguimiento para reducir trabajo manual.",
    icon: "automation",
    tone: "cyan"
  },
  {
    title: "Herramientas hechas para tu operación",
    description: "Creamos plataformas y sistemas que se adaptan a cómo trabaja tu empresa.",
    icon: "globe",
    tone: "default"
  },
  {
    title: "Sistemas que conversan entre sí",
    description: "Unimos tus plataformas para evitar doble registro, errores y reprocesos.",
    icon: "link",
    tone: "magenta"
  },
  {
    title: "Base segura para crecer",
    description: "Preparamos entornos estables, escalables y listos para acompañar el negocio.",
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
    description: "Entendemos procesos reales de negocio antes de proponer una solución."
  },
  {
    number: "02",
    title: "Implementación ágil",
    description: "Avances claros desde las primeras etapas, sin esperar meses para ver impacto."
  },
  {
    number: "03",
    title: "Soluciones personalizadas",
    description: "Herramientas adaptadas al tamaño, operación y madurez digital del cliente."
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
    title: "Automatización operativa",
    description:
      "Convertimos tareas repetitivas en flujos digitales que trabajan de forma constante, ordenada y con menos errores.",
    items: ["Facturación", "Validaciones", "Reportes", "Procesos administrativos", "Flujos documentarios"]
  },
  {
    icon: "brain",
    tone: "cyan",
    title: "Soluciones con inteligencia artificial",
    description: "Usamos asistentes digitales y lectura automática de información para ahorrar tiempo en tareas clave.",
    items: ["Lectura de documentos", "Extracción de datos", "Asistentes virtuales", "Soporte interno", "Clasificación automática"]
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
    title: "Sistemas conectados",
    description: "Conectamos sistemas y plataformas para centralizar información y eliminar reprocesos.",
    items: ["Sistemas administrativos", "Plataformas comerciales", "SUNAT", "WhatsApp", "Sistemas internos"]
  },
  {
    icon: "cloud",
    tone: "cyan",
    title: "Infraestructura y servidores",
    description: "Diseñamos entornos escalables, seguros y preparados para crecer.",
    items: ["Virtualización", "Servidores", "Entornos en la nube", "Redes", "Continuidad operativa"]
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
    description: "La solución acompaña el crecimiento de tu operación sin aumentar complejidad."
  }
];

export const businessAreaCards: InfoCardData[] = [
  { icon: "analytics", tone: "magenta", title: "Finanzas", description: "Menos validaciones manuales y mayor control." },
  { icon: "workflow", tone: "cyan", title: "Operaciones", description: "Procesos más rápidos y trazables." },
  { icon: "user", title: "RRHH", description: "Automatización administrativa y documental." },
  { icon: "briefcase", tone: "magenta", title: "Comercial", description: "Información integrada y seguimiento en tiempo real." },
  { icon: "shield", tone: "cyan", title: "Gerencia", description: "Indicadores claros para decidir con datos." }
];

export const contactReasons: InfoCardData[] = [
  {
    icon: "layers",
    tone: "magenta",
    title: "Soluciones adaptadas",
    description: "Propuestas diseñadas según las necesidades reales de tu empresa."
  },
  {
    icon: "rocket",
    tone: "cyan",
    title: "Implementación ágil",
    description: "Avances claros desde las primeras etapas."
  },
  {
    icon: "gauge",
    title: "Crecimiento ordenado",
    description: "Soluciones preparadas para crecer junto a tu negocio."
  },
  {
    icon: "handshake",
    tone: "magenta",
    title: "Acompañamiento continuo",
    description: "Soporte y evolución constante de cada solución."
  },
  {
    icon: "check",
    tone: "cyan",
    title: "Resultados reales",
    description: "Priorizamos eficiencia, productividad y control operativo."
  }
];
