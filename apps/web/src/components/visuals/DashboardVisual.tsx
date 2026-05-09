import { AnimatedCounter } from "../ui/AnimatedCounter";

interface DashboardMetric {
  value: string;
  label: string;
  progress?: number;
}

interface DashboardVisualProps {
  title: string;
  metrics: DashboardMetric[];
  bullets?: string[];
  className?: string;
}

export function DashboardVisual({ title, metrics, bullets, className = "" }: DashboardVisualProps) {
  return (
    <div className={`visual ${className}`.trim()}>
      <div className="screen">
        <div className="panel">
          <strong>{title}</strong>
          <div className="dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>

        {metrics.length ? (
          <div className="metrics">
            {metrics.map((metric) => (
              <div className="metric" key={`${metric.value}-${metric.label}`}>
                <strong>
                  <AnimatedCounter value={metric.value} />
                </strong>
                <small>{metric.label}</small>
                {metric.progress ? (
                  <div className="bar">
                    <span style={{ width: `${metric.progress}%` }} />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        ) : null}

        {bullets?.length ? (
          <div className="flow">
            <ul>
              {bullets.map((bullet) => (
                <li key={bullet}>
                  <span className="check">✓</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
