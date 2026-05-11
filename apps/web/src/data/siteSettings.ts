export interface EditableSiteSettings {
  brand: {
    name: string;
    websiteLabel: string;
    websiteUrl: string;
    socialHandle: string;
  };
  contact: {
    email: string;
    phoneLabel: string;
    phoneNumber: string;
    whatsappUrl: string;
    linkedinLabel: string;
    linkedinUrl: string;
    region: string;
  };
}

export const siteSettings: EditableSiteSettings = {
  brand: {
    name: "SMARTBOTS",
    websiteLabel: "www.smartbots.pe",
    websiteUrl: "https://www.smartbots.pe",
    socialHandle: "@smartbotsperu"
  },
  contact: {
    email: "contacto@smartbots.pe",
    phoneLabel: "WhatsApp empresarial",
    phoneNumber: "",
    whatsappUrl: "",
    linkedinLabel: "LinkedIn",
    linkedinUrl: "",
    region: "Perú - Atención LATAM"
  }
};
