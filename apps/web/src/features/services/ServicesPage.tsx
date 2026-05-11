import { InfoCard } from "../../components/ui/InfoCard";
import { SectionHead } from "../../components/ui/SectionHead";
import { ServiceAutomationVisual } from "../../components/visuals/ServiceAutomationVisual";
import { serviceCards } from "../../data/siteContent";

const clients = ["Logo cliente", "Logo cliente", "Logo cliente", "Logo cliente", "Logo cliente"];

export function ServicesPage() {
  return (
    <>
      {/* Hero de servicios: usa un visual propio para separar esta página del inicio y beneficios. */}
      <section className="hero hero-services">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Servicios</span>
            <h1>
              Impulsamos empresas mediante <span className="gradient-text">tecnología inteligente</span>
            </h1>
            <p className="lead">
              En SMARTBOTS desarrollamos soluciones tecnológicas adaptadas a las necesidades reales de cada empresa.
            </p>
            <p className="lead">
              Combinamos automatización, inteligencia artificial, desarrollo de software e infraestructura TI para
              construir operaciones más eficientes, conectadas y escalables.
            </p>
          </div>
          <ServiceAutomationVisual />
        </div>
      </section>

      {/* Grilla principal: las soluciones viven en siteContent.ts para poder ajustar copy sin tocar layout. */}
      <section className="services-solutions">
        <div className="container">
          <SectionHead centered kicker="Nuestras soluciones" title="Servicios separados por necesidad real" />
          <div className="cards">
            {serviceCards.map((card) => (
              <InfoCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder controlado para logos; reemplazar solo con marcas autorizadas por clientes. */}
      <section className="soft">
        <div className="container">
          <SectionHead
            centered
            kicker="Casos de éxito"
            title="Empresas que confían en SMARTBOTS"
            description="Espacio reservado para logos de clientes autorizados."
          />
          <div className="logos">
            {clients.map((client, index) => (
              <div className="logo-box" key={`${client}-${index}`}>
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
