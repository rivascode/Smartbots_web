import { ArrowRight, CalendarCheck, Mail, MessageCircle, Sparkles } from "lucide-react";
import { siteSettings } from "../../data/siteSettings";

const channels = [
  { label: "Correo", value: siteSettings.contact.email, icon: Mail },
  { label: "WhatsApp", value: "Respuesta comercial", icon: MessageCircle },
  { label: "Reunión", value: "Diagnóstico guiado", icon: CalendarCheck }
];

const steps = ["Mensaje", "Diagnóstico", "Ruta clara"];

export function ContactChannelsVisual() {
  return (
    <div className="contact-channels-visual" aria-label="Canales de contacto SMARTBOTS">
      <div className="contact-orbit-card">
        <div className="contact-orbit-core">
          <Sparkles size={28} strokeWidth={1.8} />
          <strong>Diagnóstico</strong>
          <span>SMARTBOTS</span>
        </div>
        {steps.map((step, index) => (
          <span className={`contact-step step-${index + 1}`} key={step}>
            {step}
          </span>
        ))}
      </div>
      <div className="channel-stack">
        {channels.map(({ label, value, icon: Icon }) => (
          <article className="channel-card" key={label}>
            <Icon size={24} strokeWidth={1.8} />
            <div>
              <strong>{label}</strong>
              <span>{value}</span>
            </div>
          </article>
        ))}
        <div className="contact-flow-pill">
          <span>Respuesta</span>
          <ArrowRight size={16} />
          <span>Propuesta</span>
        </div>
      </div>
    </div>
  );
}
