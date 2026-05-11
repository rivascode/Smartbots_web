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
        <div>
          {siteSettings.brand.websiteLabel} - {siteSettings.contact.email} - {siteSettings.brand.socialHandle}
        </div>
      </div>
    </footer>
  );
}
