import { ArrowRight, BarChart3, Bot, CheckCircle2, ClipboardList, Clock3, Link2, TrendingUp } from "lucide-react";

const inputItems = ["Solicitudes", "Reportes", "Tareas manuales"];

const automationItems = [
  { icon: ClipboardList, label: "Ordena el trabajo" },
  { icon: Link2, label: "Conecta áreas" },
  { icon: Clock3, label: "Da seguimiento" }
];

const resultItems = [
  { value: "Menos errores", label: "Operación confiable" },
  { value: "Más tiempo", label: "Equipo enfocado" },
  { value: "Control real", label: "Vista para gerencia" }
];

export function OperationFlowVisual() {
  return (
    <div className="visual hero-dashboard operation-flow-visual" aria-label="Flujo operativo automatizado por SMARTBOTS">
      <div className="operation-screen">
        <div className="operation-header">
          <div>
            <span>SMARTBOTS en acción</span>
            <strong>De tareas sueltas a resultados visibles</strong>
          </div>
          <div className="operation-live">
            <span />
            En marcha
          </div>
        </div>

        <div className="operation-flow">
          <section className="operation-column input" aria-label="Trabajo que llega a la empresa">
            <div className="column-title">
              <ClipboardList size={18} />
              <span>Hoy llega así</span>
            </div>
            {inputItems.map((item) => (
              <div className="work-item" key={item}>
                <span />
                {item}
              </div>
            ))}
          </section>

          <div className="operation-connector" aria-hidden="true">
            <ArrowRight size={22} />
            <span className="data-pulse pulse-one" />
            <span className="data-pulse pulse-two" />
          </div>

          <section className="operation-core" aria-label="Automatización central de SmartBots">
            <div className="core-orbit" aria-hidden="true" />
            <div className="core-main">
              <Bot size={32} />
              <strong>SmartBots</strong>
              <span>automatiza el flujo</span>
            </div>
            <div className="core-actions">
              {automationItems.map(({ icon: Icon, label }) => (
                <div className="core-action" key={label}>
                  <Icon size={16} />
                  {label}
                </div>
              ))}
            </div>
          </section>

          <div className="operation-connector" aria-hidden="true">
            <ArrowRight size={22} />
            <span className="data-pulse pulse-one" />
            <span className="data-pulse pulse-two" />
          </div>

          <section className="operation-column output" aria-label="Resultados para gerencia">
            <div className="column-title">
              <TrendingUp size={18} />
              <span>Gerencia recibe</span>
            </div>
            {resultItems.map((item) => (
              <div className="result-item" key={item.value}>
                <CheckCircle2 size={18} />
                <div>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </section>
        </div>

        <div className="operation-bottom">
          <div>
            <BarChart3 size={20} />
            <span>Vista simple para decidir mejor</span>
          </div>
          <strong>Trabajo claro. Menos seguimiento manual. Más avance.</strong>
        </div>
      </div>
    </div>
  );
}
