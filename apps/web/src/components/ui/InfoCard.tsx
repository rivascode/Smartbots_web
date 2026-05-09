import type { IconName, IconTone } from "./IconBadge";
import { IconBadge } from "./IconBadge";

export interface InfoCardData {
  title: string;
  description: string;
  icon?: IconName;
  tone?: IconTone;
  items?: string[];
}

export function InfoCard({ title, description, icon, tone, items }: InfoCardData) {
  return (
    <article className="card">
      {icon ? <IconBadge name={icon} tone={tone} /> : null}
      <h3>{title}</h3>
      <p>{description}</p>
      {items?.length ? (
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
