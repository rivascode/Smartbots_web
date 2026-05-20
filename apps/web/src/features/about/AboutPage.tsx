import { AboutOrbit } from "../../components/visuals/AboutOrbit";
import { IconBadge, type IconName, type IconTone } from "../../components/ui/IconBadge";
import { InfoCard } from "../../components/ui/InfoCard";
import { ExternalButton } from "../../components/ui/Button";
import { SectionHead } from "../../components/ui/SectionHead";
import { aboutCards } from "../../data/siteContent";
import { siteSettings } from "../../data/siteSettings";
import { useInViewOnce } from "../../hooks/useInViewOnce";
import { assetPath } from "../../utils/assets";

const visionPillars: Array<{
  number: string;
  title: string;
  description: string;
  icon: IconName;
  tone: IconTone;
}> = [
  {
    number: "01",
    title: "Automatizamos procesos clave",
    description: "Reducimos tareas repetitivas, errores y tiempos operativos con bots, IA y flujos digitales.",
    icon: "automation",
    tone: "magenta"
  },
  {
    number: "02",
    title: "Integramos sistemas y datos",
    description: "Conectamos plataformas, ERPs, CRMs y fuentes de información para eliminar reprocesos.",
    icon: "link",
    tone: "cyan"
  },
  {
    number: "03",
    title: "Escalamos con control",
    description: "Preparamos la operación para crecer con trazabilidad, indicadores claros y sistemas fáciles de evolucionar.",
    icon: "cloud",
    tone: "default"
  }
];

export function AboutPage() {
  const approachReveal = useInViewOnce<HTMLDivElement>();
  const visionReveal = useInViewOnce<HTMLDivElement>();

  return (
    <>
      <section className="hero hero-about">
        <div className="container hero-grid">
          <div className="about-hero-copy">
            <span className="eyebrow">Nosotros</span>
            <h1>
              Hacemos que tu operación trabaje mejor con <span className="gradient-text">soluciones digitales</span>
            </h1>
            <p className="lead">
              En SMARTBOTS ayudamos a empresas a optimizar procesos, integrar sistemas y acelerar resultados mediante
              herramientas digitales claras, medibles y adaptadas a su operación.
            </p>
            <p className="lead">
              Combinamos automatización, análisis de datos, desarrollo de software e infraestructura TI para
              construir operaciones más eficientes, escalables y conectadas.
            </p>
            <ExternalButton href={siteSettings.contact.appointmentUrl}>Agenda una reunión</ExternalButton>
          </div>
          <AboutOrbit />
        </div>
      </section>

      <section className="about-approach">
        <div className="container">
          <SectionHead
            centered
            kicker="Nuestro enfoque"
            title="Soluciones con propósito operativo"
            description="Nuestro enfoque está orientado a generar impacto real en productividad, control operativo y crecimiento empresarial."
          />
          <div ref={approachReveal.ref} className={`cards reveal-stagger ${approachReveal.hasEnteredView ? "is-visible" : ""}`}>
            {aboutCards.map((card) => (
              <InfoCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="vision-section transformation-section">
        <div className="container">
          <SectionHead
            centered
            kicker="Cómo transformamos una operación"
            title="De procesos manuales a una operación conectada y medible."
            description="Partimos de la realidad de cada empresa, automatizamos lo repetitivo, conectamos los sistemas y dejamos una base preparada para crecer."
          />
          <div ref={visionReveal.ref} className={`vision-board reveal-vision ${visionReveal.hasEnteredView ? "is-visible" : ""}`}>
            <div className="vision-illustration transform-orchestration" aria-hidden="true">
              <div className="transform-stage stage-one">
                <strong>Diagnóstico</strong>
                <span>Procesos, tareas y fricciones</span>
              </div>
              <div className="transform-stage stage-two">
                <strong>Automatización</strong>
                <span>Bots, IA y flujos digitales</span>
              </div>
              <div className="vision-core">
                <img src={assetPath("assets/logo-smartbots-mark.webp")} alt="" />
                <strong>Operación inteligente</strong>
                <span>SMARTBOTS</span>
              </div>
              <div className="transform-stage stage-three">
                <strong>Integración</strong>
                <span>Sistemas y datos conectados</span>
              </div>
              <div className="transform-stage stage-four">
                <strong>Control</strong>
                <span>Indicadores para escalar</span>
              </div>
            </div>
            <div className="vision-pillars">
              {visionPillars.map((pillar) => (
                <article className="vision-card" key={pillar.title}>
                  <span className="vision-number">{pillar.number}</span>
                  <IconBadge name={pillar.icon} tone={pillar.tone} />
                  <div>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
