import { MessageCircle } from "lucide-react";
import { siteSettings } from "../../data/siteSettings";
import { assetPath } from "../../utils/assets";

export function FloatingWhatsApp() {
  return (
    <a
      className="whatsapp-widget"
      href={siteSettings.contact.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir WhatsApp de SMARTBOTS"
      title="Abrir WhatsApp"
    >
      <span className="whatsapp-widget-rings" aria-hidden="true" />
      <span className="whatsapp-widget-robot">
        <img src={assetPath("assets/logo-smartbots-mark.webp")} alt="" />
      </span>
      <span className="whatsapp-widget-badge" aria-hidden="true">
        <MessageCircle size={18} strokeWidth={2.4} />
      </span>
    </a>
  );
}
