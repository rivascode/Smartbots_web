import { LinkButton } from "../../components/ui/Button";
import { InfoCard } from "../../components/ui/InfoCard";
import { AnimatedCounter } from "../../components/ui/AnimatedCounter";
import { SectionHead } from "../../components/ui/SectionHead";
import { BenefitsImpactVisual } from "../../components/visuals/BenefitsImpactVisual";
import { benefitCards, businessAreaCards } from "../../data/siteContent";

const kpis = [
  { value: "50%", label: "Hasta 50% menos costos operativos." },
  { value: "70%", label: "Hasta 70% menos tiempo en tareas repetitivas." },
  { value: "KPIs", label: "Informacion y metricas en tiempo real." },
  { value: "24/7", label: "Mayor capacidad operativa sin aumentar personal." }
];

export function BenefitsPage() {
  return (
    <>
      <section className="hero hero-benefits">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Beneficios</span>
            <h1>
              Tecnologia que genera <span className="gradient-text">impacto real</span>
            </h1>
            <p className="lead">
              Ayudamos a las empresas a optimizar operaciones, reducir costos y acelerar resultados mediante
              automatizacion, inteligencia artificial y soluciones digitales.
            </p>
          </div>
          <BenefitsImpactVisual />
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHead
            centered
            kicker="Resultados visibles"
            title="Resultados visibles para operaciones modernas"
            description="Implementar tecnologia inteligente transforma la productividad, el control y la capacidad de crecimiento."
          />
          <div className="cards">
            {benefitCards.map((card) => (
              <InfoCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section">
        <div className="container">
          <SectionHead kicker="KPIs" title="Empresas mas eficientes, agiles y escalables" />
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

      <section className="soft">
        <div className="container">
          <SectionHead centered kicker="Areas de negocio" title="Beneficios para distintas areas de negocio" />
          <div className="cards">
            {businessAreaCards.map((card) => (
              <InfoCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>La tecnologia correcta puede transformar tu operacion.</h2>
          <p>
            Descubre como SMARTBOTS puede ayudarte a optimizar procesos, integrar sistemas y acelerar resultados.
          </p>
          <LinkButton page="contacto">Agenda una reunion</LinkButton>
        </div>
      </section>
    </>
  );
}
