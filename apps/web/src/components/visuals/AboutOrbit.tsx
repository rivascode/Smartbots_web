import { assetPath } from "../../utils/assets";

const nodes = [
  { className: "n1", title: "Procesos", text: "Mapeo real de la operación" },
  { className: "n2", title: "Automatización", text: "Tareas repetitivas bajo control" },
  { className: "n3", title: "Datos", text: "Indicadores para decidir mejor" },
  { className: "n4", title: "Escala", text: "Sistemas listos para crecer" }
];

export function AboutOrbit() {
  return (
    <div className="visual about-visual">
      <div className="orbit-system">
        <div className="orbit-ring" />
        <div className="orbit-ring two" />
        <div className="orbit-core">
          <img src={assetPath("assets/logo-smartbots-mark.webp")} alt="SMARTBOTS Logo" />
        </div>
        {nodes.map((node) => (
          <div className={`orbit-node ${node.className}`} key={node.title}>
            <strong>{node.title}</strong>
            <span>{node.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
