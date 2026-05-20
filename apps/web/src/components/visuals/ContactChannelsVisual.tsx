import { CalendarCheck, Mail, MessageCircle } from "lucide-react";
import { assetPath } from "../../utils/assets";

const signals = [
  { label: "Correo", icon: Mail, className: "signal-mail" },
  { label: "WhatsApp", icon: MessageCircle, className: "signal-whatsapp" },
  { label: "Reunión", icon: CalendarCheck, className: "signal-meeting" }
];

export function ContactChannelsVisual() {
  return (
    <div className="contact-channels-visual contact-android-visual" aria-label="Asistente androide conectando canales de contacto SMARTBOTS">
      <div className="contact-android-aura" aria-hidden="true">
        <span className="contact-ring ring-a" />
        <span className="contact-ring ring-b" />
        <span className="contact-wave wave-a" />
        <span className="contact-wave wave-b" />
        <span className="contact-dot dot-a" />
        <span className="contact-dot dot-b" />
        <span className="contact-dot dot-c" />
      </div>

      <img
        className="contact-android-image"
        src={assetPath("assets/contact-biorobot-assistant.png")}
        alt="Asistente androide conectando canales de contacto"
      />

      <div className="contact-signal-field">
        {signals.map(({ label, icon: Icon, className }) => (
          <span className={`contact-signal ${className}`} aria-label={label} key={label}>
            <Icon size={18} strokeWidth={1.9} />
          </span>
        ))}
      </div>

      <div className="contact-route-orbit" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
