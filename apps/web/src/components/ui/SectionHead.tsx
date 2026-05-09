interface SectionHeadProps {
  kicker: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHead({ kicker, title, description, centered = false }: SectionHeadProps) {
  return (
    <div className={`section-head ${centered ? "center" : ""}`.trim()}>
      <div className="kicker">{kicker}</div>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
