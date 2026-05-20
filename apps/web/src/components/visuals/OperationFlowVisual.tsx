import { assetPath } from "../../utils/assets";

export function OperationFlowVisual() {
  return (
    <div className="operation-flow-visual biorobot-automation" aria-label="Biorobot automatizando procesos empresariales">
      <div className="biorobot-aura" aria-hidden="true">
        <span className="aura-ring ring-one" />
        <span className="aura-ring ring-two" />
        <span className="aura-ring ring-three" />
        <span className="energy-thread thread-one" />
        <span className="energy-thread thread-two" />
        <span className="energy-thread thread-three" />
        <span className="energy-particle particle-one" />
        <span className="energy-particle particle-two" />
        <span className="energy-particle particle-three" />
      </div>

      <img
        className="biorobot-image"
        src={assetPath("assets/hero-biorobot-automation.png")}
        alt="Biorobot controlando flujos de automatización"
      />

      <div className="process-orbit" aria-hidden="true">
        <span className="process-node node-a" />
        <span className="process-node node-b" />
        <span className="process-node node-c" />
        <span className="process-node node-d" />
        <span className="process-link link-a" />
        <span className="process-link link-b" />
        <span className="process-link link-c" />
      </div>

      <div className="automation-signal" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
