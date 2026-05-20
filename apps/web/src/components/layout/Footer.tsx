import { siteSettings } from "../../data/siteSettings";
import { assetPath } from "../../utils/assets";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-brand">
          <img
            src={assetPath("assets/logo-smartbots-official-light.webp")}
            alt="SMARTBOTS - Automatiza tus procesos, simplifica el éxito"
          />
        </div>
        <div className="footer-links">
          <a href={siteSettings.brand.websiteUrl} target="_blank" rel="noreferrer">
            {siteSettings.brand.websiteLabel}
          </a>
          <span>-</span>
          <a href={`mailto:${siteSettings.contact.email}`}>{siteSettings.contact.email}</a>
          <span>-</span>
          <a href={siteSettings.contact.linkedinUrl} target="_blank" rel="noreferrer">
            {siteSettings.brand.socialHandle}
          </a>
        </div>
      </div>
    </footer>
  );
}
