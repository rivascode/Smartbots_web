import { CalendarCheck, Mail, MessageCircle, MousePointerClick } from "lucide-react";

const channels = [
  { label: "Correo", value: "contacto@smartbots.pe", icon: Mail },
  { label: "WhatsApp", value: "Respuesta comercial", icon: MessageCircle },
  { label: "Reunión", value: "Diagnóstico guiado", icon: CalendarCheck }
];

export function ContactChannelsVisual() {
  return (
    <div className="contact-channels-visual" aria-label="Canales de contacto SMARTBOTS">
      <div className="contact-beacon">
        <MousePointerClick size={38} strokeWidth={1.8} />
        <strong>Conversemos</strong>
        <span>Activamos el siguiente paso</span>
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
      </div>
    </div>
  );
}
