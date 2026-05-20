import { solutionOptions, type ContactRequest } from "@smartbots/shared";
import type { FormEvent } from "react";
import { useState } from "react";
import { ActionButton, ExternalButton } from "../../components/ui/Button";
import { IconBadge } from "../../components/ui/IconBadge";
import { SectionHead } from "../../components/ui/SectionHead";
import { ContactChannelsVisual } from "../../components/visuals/ContactChannelsVisual";
import { contactReasons } from "../../data/siteContent";
import { siteSettings } from "../../data/siteSettings";
import { submitContactRequest } from "../../services/contactApi";

const initialForm: ContactRequest = {
  name: "",
  company: "",
  email: "",
  phone: "",
  solution: "",
  message: ""
};

const directContacts = [
  { label: "Correo", value: siteSettings.contact.email, href: `mailto:${siteSettings.contact.email}` },
  { label: "WhatsApp", value: siteSettings.contact.phoneLabel, href: siteSettings.contact.whatsappUrl, featured: true },
  { label: "RR.SS", value: siteSettings.contact.linkedinLabel, href: siteSettings.contact.linkedinUrl }
] as const;

export function ContactPage() {
  const showQuickEditor =
    typeof window !== "undefined" &&
    (new URLSearchParams(window.location.search).get("editor") === "1" || window.location.hash.includes("editor"));
  const [form, setForm] = useState<ContactRequest>(initialForm);
  const [settingsForm, setSettingsForm] = useState({
    websiteLabel: siteSettings.brand.websiteLabel,
    websiteUrl: siteSettings.brand.websiteUrl,
    socialHandle: siteSettings.brand.socialHandle,
    email: siteSettings.contact.email,
    phoneLabel: siteSettings.contact.phoneLabel,
    phoneNumber: siteSettings.contact.phoneNumber,
    whatsappUrl: siteSettings.contact.whatsappUrl,
    linkedinLabel: siteSettings.contact.linkedinLabel,
    linkedinUrl: siteSettings.contact.linkedinUrl,
    region: siteSettings.contact.region
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const [settingsFeedback, setSettingsFeedback] = useState("");

  const settingsOutput = `brand: ${JSON.stringify(
    {
      websiteLabel: settingsForm.websiteLabel,
      websiteUrl: settingsForm.websiteUrl,
      socialHandle: settingsForm.socialHandle
    },
    null,
    2
  )}\ncontact: ${JSON.stringify(
    {
      email: settingsForm.email,
      phoneLabel: settingsForm.phoneLabel,
      phoneNumber: settingsForm.phoneNumber,
      whatsappUrl: settingsForm.whatsappUrl,
      linkedinLabel: settingsForm.linkedinLabel,
      linkedinUrl: settingsForm.linkedinUrl,
      region: settingsForm.region
    },
    null,
    2
  )}`;

  const updateField = <Field extends keyof ContactRequest>(field: Field, value: ContactRequest[Field]) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const updateSettingsField = <Field extends keyof typeof settingsForm>(field: Field, value: (typeof settingsForm)[Field]) => {
    setSettingsForm((current) => ({ ...current, [field]: value }));
  };

  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const copySettings = async () => {
    try {
      await navigator.clipboard.writeText(settingsOutput);
      setSettingsFeedback("Configuración copiada.");
    } catch {
      setSettingsFeedback("No se pudo copiar automáticamente.");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    try {
      await submitContactRequest(form);
      setStatus("success");
      setFeedback("Solicitud enviada. Te contactaremos pronto para coordinar el diagnóstico.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "No pudimos enviar la solicitud.");
    }
  };

  return (
    <>
      <section className="hero hero-contact">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Contacto</span>
            <h1>
              Hablemos sobre cómo transformar <span className="gradient-text">tu operación</span>
            </h1>
            <p className="lead">
              Nuestro equipo está listo para ayudarte a optimizar procesos, integrar sistemas y acelerar resultados.
            </p>
            <div className="actions">
              <ExternalButton href={siteSettings.contact.appointmentUrl}>Agenda una reunión</ExternalButton>
              <ActionButton variant="secondary" onClick={scrollToForm}>
                Completar formulario
              </ActionButton>
            </div>
          </div>
          <ContactChannelsVisual />
        </div>
      </section>

      <section id="formulario">
        <div className="container split">
          <div>
            <SectionHead
              kicker="Cuéntanos"
              title="Cuéntanos qué necesita tu empresa"
              description="Queremos entender tus procesos, desafíos y objetivos para ayudarte a construir una solución tecnológica alineada a tu operación."
            />
            <div className="contact-direct">
              <article className="contact-direct-panel">
                <span className="contact-direct-kicker">Contacto directo</span>
                <h3>También puedes escribirnos directamente</h3>
                <div className="contact-direct-list">
                  {directContacts.map((item) => (
                    <div className="contact-direct-item" key={item.label}>
                      <span>{item.label}</span>
                      <a
                        className={"featured" in item && item.featured ? "contact-action-link" : undefined}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      >
                        {item.value}
                      </a>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>

          <form className="card form-grid" onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre" value={form.name} onChange={(event) => updateField("name", event.target.value)} required />
            <input type="text" placeholder="Empresa" value={form.company} onChange={(event) => updateField("company", event.target.value)} required />
            <input
              type="text"
              inputMode="email"
              placeholder="Correo electrónico"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              required
            />
            <input type="tel" placeholder="Teléfono" value={form.phone} onChange={(event) => updateField("phone", event.target.value)} required />
            <select
              className="full"
              value={form.solution}
              onChange={(event) => updateField("solution", event.target.value as ContactRequest["solution"])}
              required
            >
              <option value="">Tipo de solución requerida</option>
              {solutionOptions.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
            <textarea
              className="full"
              placeholder="Mensaje"
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              required
            />
            {feedback ? <p className={`form-feedback ${status}`}>{feedback}</p> : null}
            <button className="btn btn-primary full" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Enviando..." : "Enviar solicitud"}
            </button>
          </form>
        </div>
      </section>

      {showQuickEditor ? (
        <section className="contact-editor-section">
          <div className="container split">
            <div>
              <SectionHead
                kicker="Edición rápida"
                title="Actualiza datos públicos sin buscar por todo el código"
                description="Este panel concentra los datos que suelen cambiar: correo, WhatsApp, redes, web y zona de atención."
              />
              <div className="settings-preview">
                <strong>Vista actual</strong>
                <span>{settingsForm.websiteLabel}</span>
                <span>{settingsForm.email}</span>
                <span>{settingsForm.phoneLabel || "WhatsApp empresarial"}</span>
                <span>{settingsForm.region}</span>
              </div>
            </div>

            <form className="card form-grid quick-edit-form" onSubmit={(event) => event.preventDefault()}>
              <input
                type="text"
                placeholder="Web visible"
                value={settingsForm.websiteLabel}
                onChange={(event) => updateSettingsField("websiteLabel", event.target.value)}
              />
              <input
                type="url"
                placeholder="URL web"
                value={settingsForm.websiteUrl}
                onChange={(event) => updateSettingsField("websiteUrl", event.target.value)}
              />
              <input
                type="text"
                placeholder="Correo"
                value={settingsForm.email}
                onChange={(event) => updateSettingsField("email", event.target.value)}
              />
              <input
                type="text"
                placeholder="Red social visible"
                value={settingsForm.socialHandle}
                onChange={(event) => updateSettingsField("socialHandle", event.target.value)}
              />
              <input
                type="tel"
                placeholder="Teléfono / WhatsApp"
                value={settingsForm.phoneNumber}
                onChange={(event) => updateSettingsField("phoneNumber", event.target.value)}
              />
              <input
                type="text"
                placeholder="Texto WhatsApp"
                value={settingsForm.phoneLabel}
                onChange={(event) => updateSettingsField("phoneLabel", event.target.value)}
              />
              <input
                type="url"
                placeholder="Link WhatsApp"
                value={settingsForm.whatsappUrl}
                onChange={(event) => updateSettingsField("whatsappUrl", event.target.value)}
              />
              <input
                type="text"
                placeholder="Texto LinkedIn"
                value={settingsForm.linkedinLabel}
                onChange={(event) => updateSettingsField("linkedinLabel", event.target.value)}
              />
              <input
                type="url"
                placeholder="Link LinkedIn"
                value={settingsForm.linkedinUrl}
                onChange={(event) => updateSettingsField("linkedinUrl", event.target.value)}
              />
              <input
                className="full"
                type="text"
                placeholder="Región / atención"
                value={settingsForm.region}
                onChange={(event) => updateSettingsField("region", event.target.value)}
              />
              <textarea className="full settings-output" readOnly value={settingsOutput} />
              {settingsFeedback ? <p className="form-feedback success">{settingsFeedback}</p> : null}
              <button className="btn btn-primary full" type="button" onClick={copySettings}>
                Copiar configuración
              </button>
            </form>
          </div>
        </section>
      ) : null}

      <section className="contact-reasons-section">
        <div className="container">
          <SectionHead centered kicker="Diferencial" title="¿Por qué trabajar con SMARTBOTS?" />
          <div className="contact-reasons-list">
            {contactReasons.map((card, index) => (
              <article className="contact-reason-row" key={card.title}>
                <span className="contact-reason-number">{String(index + 1).padStart(2, "0")}</span>
                <IconBadge name={card.icon ?? "target"} tone={card.tone} />
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
