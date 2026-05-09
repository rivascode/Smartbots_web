import { LinkButton } from "../../components/ui/Button";
import { AnimatedCounter } from "../../components/ui/AnimatedCounter";
import { IconBadge } from "../../components/ui/IconBadge";
import { InfoCard } from "../../components/ui/InfoCard";
import { SectionHead } from "../../components/ui/SectionHead";
import { DashboardVisual } from "../../components/visuals/DashboardVisual";
import { HeroMotionBackground } from "../../components/visuals/HeroMotionBackground";
import { homeSolutions, industries, reasons } from "../../data/siteContent";

const reasonIcons = ["target", "zap", "workflow", "shield"] as const;

const ctaSteps = [
  {
    number: "01",
    title: "Exploramos",
    description: "Entendemos la operación real, cuellos de botella y tareas que consumen tiempo."
  },
  {
    number: "02",
    title: "Priorizamos",
    description: "Definimos qué automatizar primero para generar impacto visible rápido."
  },
  {
    number: "03",
    title: "Conectamos",
    description: "Integramos sistemas, datos y flujos para evitar reprocesos."
  },
  {
    number: "04",
    title: "Medimos y escalamos",
    description: "Activamos automatización, indicadores y mejora continua para crecer."
  }
];

export function HomePage() {
  return (
    <>
      {/* Hero principal: primera impresión de marca con fondo canvas y panel operativo animado. */}
      <section className="hero hero-home">
        <div className="hero-ambient" aria-hidden="true">
          <HeroMotionBackground />
          <span className="hero-orb orb-one" />
          <span className="hero-orb orb-two" />
          <span className="hero-orb orb-three" />
          <span className="data-node node-one" />
          <span className="data-node node-two" />
          <span className="data-node node-three" />
          <span className="data-line line-one" />
          <span className="data-line line-two" />
          <span className="data-line line-three" />
        </div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Tecnología que impulsa tu negocio</span>
            <h1>
              Tecnología disruptiva para empresas que quieren <span className="gradient-text">evolucionar</span>
            </h1>
            <p className="lead">
              Automatización, Inteligencia Artificial, desarrollo de software y soluciones TI orientadas a productividad,
              eficiencia y crecimiento.
            </p>
            <div className="actions">
              <LinkButton page="contacto">Solicitar diagnóstico</LinkButton>
              <LinkButton page="servicios" variant="secondary">
                Conoce nuestras soluciones
              </LinkButton>
            </div>
          </div>

          <DashboardVisual
            className="hero-dashboard"
            title="Centro de mando inteligente"
            metrics={[
              { value: "24/7", label: "Bots en acción", progress: 92 },
              { value: "API", label: "Ecosistema unido", progress: 84 },
              { value: "IA", label: "Decisiones asistidas", progress: 76 },
              { value: "KPIs", label: "Pulso del negocio", progress: 88 }
            ]}
            bullets={[
              "Cada proceso visible en una sola vista",
              "Flujos que avanzan sin perseguir tareas",
              "Datos listos para decidir y crecer"
            ]}
          />
        </div>
      </section>

      {/* Qué hacemos: bloque comercial que resume las capacidades principales de SMARTBOTS. */}
      <section>
        <div className="container">
          <SectionHead
            centered
            kicker="Qué hacemos"
            title="Soluciones tecnológicas para empresas modernas"
            description="Ayudamos a organizaciones a optimizar procesos, integrar sistemas y acelerar resultados mediante tecnología diseñada para necesidades reales de negocio."
          />
          <div className="solution-showcase">
            <article className="solution-feature">
              <div>
                <IconBadge name="automation" tone="white" />
                <h3>Automatización inteligente como motor operativo</h3>
                <p>Bots, RPA, flujos digitales e IA para reducir trabajo manual, errores y tiempos muertos.</p>
              </div>
              <div className="solution-feature-panel" aria-hidden="true">
                <div className="solution-chip">
                  <strong>24/7</strong>
                  <span>Bots activos</span>
                </div>
                <div className="solution-chip">
                  <strong>API</strong>
                  <span>Sistemas conectados</span>
                </div>
                <div className="solution-chip">
                  <strong>IA</strong>
                  <span>Decisiones asistidas</span>
                </div>
                <div className="solution-mini-flow">
                  <span>Entrada</span>
                  <span>Bot</span>
                  <span>Resultados</span>
                </div>
              </div>
              <LinkButton page="servicios">Ver soluciones</LinkButton>
            </article>
            <div className="solution-list">
              {homeSolutions.map((solution) => (
                <article className="solution-row" key={solution.title}>
                  <IconBadge name={solution.icon} tone={solution.tone} />
                  <div>
                    <h3>{solution.title}</h3>
                    <p>{solution.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impacto: sección oscura con métricas para reforzar resultados medibles. */}
      <section className="dark-section">
        <div className="impact-ambient" aria-hidden="true">
          <HeroMotionBackground />
          <span className="impact-orbit one" />
          <span className="impact-orbit two" />
        </div>
        <div className="container">
          <SectionHead
            kicker="Impacto"
            title="Tecnología enfocada en resultados reales"
            description="Digitalizar es reducir costos, errores y tiempos con flujos medibles."
          />
          <div className="impact-board">
            <div className="impact-copy">
              <h3>
                Menos fricción operativa.
                <span>Más control.</span>
              </h3>
              <p>Transformamos procesos repetitivos en flujos automatizados, conectados y listos para escalar.</p>
            </div>
            <div className="impact-bars">
              <ImpactBar title="Reducción de tareas manuales" value="70%" progress={70} />
              <ImpactBar title="Disponibilidad operativa" value="24/7" progress={95} />
              <ImpactBar title="Control y trazabilidad" value="KPIs" progress={88} />
            </div>
          </div>
        </div>
      </section>

      <section className="soft">
        <div className="container">
          <SectionHead centered kicker="Industrias" title="Industrias donde impulsamos transformación digital" />
          <div className="industries">
            {industries.map((industry, index) => (
              <article className="industry" key={industry.title}>
                <IconBadge name={industry.icon} tone={index % 2 === 0 ? "magenta" : "cyan"} className="industry-icon" />
                <span>{industry.title}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Razones de elección: cards centradas para explicar el enfoque diferencial. */}
      <section className="home-reasons">
        <div className="container reason-layout">
          <SectionHead
            kicker="Por qué SMARTBOTS"
            title="Más que tecnología. Resultados."
            description="Entendemos procesos, no solo sistemas. Diseñamos soluciones personalizadas, implementamos rápido y acompañamos la evolución de cada operación."
          />
          <div className="reason-timeline">
            {reasons.map((reason, index) => (
              <article className="reason-item" key={reason.title}>
                <div className="reason-content">
                  <IconBadge name={reasonIcons[index]} tone={index % 2 === 0 ? "magenta" : "cyan"} />
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Siguiente paso: ruta visual de trabajo, evita cards apiladas y muestra una progresión clara. */}
      <section className="cta">
        <div className="container cta-grid">
          <div className="cta-copy">
            <span className="kicker">Siguiente paso</span>
            <h2>Tu empresa puede operar mejor.</h2>
            <p>
              Agenda un diagnóstico y revisamos dónde automatizar, qué sistemas integrar y cómo convertir tus procesos
              en una operación más eficiente, medible y escalable.
            </p>
            <div className="actions">
              <LinkButton page="contacto">Solicitar diagnóstico</LinkButton>
              <LinkButton page="servicios" variant="secondary">
                Ver soluciones
              </LinkButton>
            </div>
          </div>
          <div className="cta-route" aria-label="Ruta de trabajo SMARTBOTS">
            <svg className="cta-route-line" viewBox="0 0 640 360" aria-hidden="true">
              <path d="M92 274 C148 116 266 112 316 174 S454 278 548 92" />
            </svg>
            {ctaSteps.map((step) => (
              <article className="cta-route-step" key={step.number}>
                <strong>{step.number}</strong>
                <span>{step.title}</span>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ImpactBar({ title, value, progress }: { title: string; value: string; progress: number }) {
  return (
    <div className="impact-bar-item">
      <div className="impact-bar-head">
        <span>{title}</span>
        <strong>
          <AnimatedCounter value={value} />
        </strong>
      </div>
      <div className="impact-bar-track">
        <span style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
