import { Clock3, DollarSign, TrendingDown, TrendingUp, UsersRound } from "lucide-react";
import { AnimatedCounter } from "../ui/AnimatedCounter";

const bars = [
  { label: "Costos", value: "-50%", height: "46%", icon: DollarSign, direction: "down" },
  { label: "Tiempo", value: "-70%", height: "68%", icon: Clock3, direction: "down" },
  { label: "Recursos", value: "+35%", height: "58%", icon: UsersRound, direction: "up" }
];

export function BenefitsImpactVisual() {
  return (
    <div className="benefits-impact-visual" aria-label="Beneficios económicos, tiempo y recursos">
      <div className="impact-summary">
        <div className="impact-signal down">
          <TrendingDown size={28} strokeWidth={1.9} />
        </div>
        <div>
          <strong>Impacto operativo</strong>
          <span>Menos costo. Más capacidad.</span>
        </div>
        <div className="impact-signal up">
          <TrendingUp size={28} strokeWidth={1.9} />
        </div>
      </div>
      <div className="impact-chart" aria-hidden="true">
        {bars.map(({ label, value, height, icon: Icon, direction }) => (
          <div className={`impact-column ${direction}`} key={label}>
            <strong>
              <AnimatedCounter value={value} />
            </strong>
            <div className="impact-track">
              <span style={{ height }} />
            </div>
            <div className="impact-label">
              <Icon size={18} />
              {label}
            </div>
          </div>
        ))}
      </div>
      <div className="impact-cards">
        <span>KPIs en tiempo real</span>
        <span>Decisiones más rápidas</span>
      </div>
    </div>
  );
}
