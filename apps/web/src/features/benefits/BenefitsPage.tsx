import { ExternalButton, LinkButton } from "../../components/ui/Button";
import { InfoCard } from "../../components/ui/InfoCard";
import { AnimatedCounter } from "../../components/ui/AnimatedCounter";
import { SectionHead } from "../../components/ui/SectionHead";
import { BenefitsImpactVisual } from "../../components/visuals/BenefitsImpactVisual";
import { HeroMotionBackground } from "../../components/visuals/HeroMotionBackground";
import { benefitCards, businessAreaCards } from "../../data/siteContent";
import { siteSettings } from "../../data/siteSettings";

const kpis = [
  { value: "-50%", label: "Hasta 50% menos costos operativos." },
  { value: "-70%", label: "Hasta 70% menos tiempo en tareas repetitivas." },
  { value: "100%", label: "Procesos clave visibles para tomar decisiones a tiempo." },
  { value: "24/7", label: "Mayor capacidad operativa sin aumentar personal." }
];

export function BenefitsPage() {
  return (
    <>
      <section className="hero hero-benefits">
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
            <span className="eyebrow">Beneficios medibles</span>
            <h1>
              Mejoras concretas para empresas que quieren <span className="gradient-text">crecer con control</span>
            </h1>
            <p className="lead">
              Ayudamos a las empresas a optimizar operaciones, reducir costos y acelerar resultados mediante
              automatización, inteligencia artificial y soluciones digitales.
            </p>
            <div className="actions">
              <ExternalButton href={siteSettings.contact.appointmentUrl}>Solicitar diagnóstico</ExternalButton>
              <LinkButton page="servicios" variant="secondary">
                Ver soluciones
              </LinkButton>
            </div>
          </div>
          <BenefitsImpactVisual />
        </div>
      </section>

      <section className="benefits-results">
        <div className="container">
          <SectionHead
            centered
            kicker="Impacto en la operación"
            title="Mejoras que se notan en el día a día"
            description="Automatizar procesos clave mejora la productividad, el control y la capacidad de crecimiento."
          />
          <div className="cards">
            {benefitCards.map((card) => (
              <InfoCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-kpi-section">
        <div className="impact-ambient" aria-hidden="true">
          <HeroMotionBackground />
          <span className="impact-orbit one" />
          <span className="impact-orbit two" />
        </div>
        <div className="container">
          <SectionHead kicker="Indicadores claros" title="Empresas más eficientes, ágiles y escalables" />
          <div className="kpi-grid">
            {kpis.map((kpi) => (
              <article className="kpi" key={kpi.value}>
                <strong>
                  <AnimatedCounter value={kpi.value} />
                </strong>
                <span>{kpi.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-areas">
        <div className="container">
          <SectionHead centered kicker="Áreas de negocio" title="Beneficios para distintas áreas de negocio" />
          <div className="cards">
            {businessAreaCards.map((card) => (
              <InfoCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
