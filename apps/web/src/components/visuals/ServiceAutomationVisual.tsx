import { Bot, Braces, BrainCircuit, Cloud, Database } from "lucide-react";
import { assetPath } from "../../utils/assets";

const nodes = [
  { label: "Bots", icon: Bot, className: "service-node bot" },
  { label: "APIs", icon: Braces, className: "service-node api" },
  { label: "Datos", icon: Database, className: "service-node data" },
  { label: "Cloud", icon: Cloud, className: "service-node cloud" },
  { label: "IA", icon: BrainCircuit, className: "service-node ai" }
];

export function ServiceAutomationVisual() {
  return (
    <div className="service-automation-visual" aria-label="Arquitectura de automatización y desarrollo">
      <div className="code-panel" aria-hidden="true">
        <span>workflow.deploy()</span>
        <span>bot.run("24/7")</span>
        <span>api.sync(data)</span>
      </div>
      <div className="automation-core">
        <div className="core-chip">
          <img src={assetPath("assets/logo-smartbots-mark.webp")} alt="" />
        </div>
        <div className="core-modules" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <strong>Arquitectura inteligente</strong>
        <small>Bots + IA + APIs</small>
      </div>
      <div className="automation-ring" aria-hidden="true" />
      {nodes.map(({ label, icon: Icon, className }) => (
        <div className={className} key={label}>
          <Icon size={24} strokeWidth={1.8} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
