import { InfoCard } from "../../components/ui/InfoCard";
import { SectionHead } from "../../components/ui/SectionHead";
import { ServiceAutomationVisual } from "../../components/visuals/ServiceAutomationVisual";
import { serviceCards } from "../../data/siteContent";
import { assetPath } from "../../utils/assets";

const clients = [
  {
    name: "Chavimochic Despachos Aduaneros",
    logo: "assets/client-logo-chavimochic.png",
    className: "client-logo-chavimochic"
  },
  {
    name: "Mission",
    logo: "assets/client-logo-mission.png",
    className: "client-logo-mission"
  },
  {
    name: "PI-EM Cargo",
    logo: "assets/client-logo-piem-cargo.png",
    className: "client-logo-piem"
  }
];

export function ServicesPage() {
  return (
    <>
      {/* Hero de servicios: usa un visual propio para separar esta página del inicio y beneficios. */}
      <section className="hero hero-services">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Servicios</span>
            <h1>
              Impulsamos empresas con <span className="gradient-text">procesos automatizados y software a medida</span>
            </h1>
            <p className="lead">
              En SMARTBOTS creamos soluciones digitales pensadas para la forma real en que trabaja cada empresa.
            </p>
            <p className="lead">
              Ordenamos tareas, conectamos sistemas y desarrollamos herramientas a medida para que tu operación sea más
              eficiente, clara y preparada para crecer.
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

      {/* Logos autorizados por clientes. */}
      <section className="soft">
        <div className="container">
          <SectionHead
            centered
            kicker="Casos de éxito"
            title="Empresas que confían en SMARTBOTS"
            description="Marcas que ya nos han permitido acompañar procesos reales con soluciones digitales."
          />
          <div className="logos">
            {clients.map((client) => (
              <div className="logo-box" key={client.name}>
                <img className={client.className} src={assetPath(client.logo)} alt={client.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
