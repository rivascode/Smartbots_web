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
    appointmentUrl: string;
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
    email: "hola@smartbots.pe",
    phoneLabel: "Abrir WhatsApp",
    phoneNumber: "+51953771234",
    whatsappUrl: "https://wa.me/51953771234",
    appointmentUrl: "https://calendar.app.google/rdKBQfcK2ZanAWSo7",
    linkedinLabel: "LinkedIn",
    linkedinUrl: "https://www.linkedin.com/company/smartbotsperu/posts/?feedView=all",
    region: "Perú - Atención LATAM"
  }
};
