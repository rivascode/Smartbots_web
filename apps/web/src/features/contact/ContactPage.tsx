import { solutionOptions, type ContactRequest } from "@smartbots/shared";
import type { FormEvent } from "react";
import { useState } from "react";
import { ActionButton } from "../../components/ui/Button";
import { InfoCard } from "../../components/ui/InfoCard";
import { SectionHead } from "../../components/ui/SectionHead";
import { ContactChannelsVisual } from "../../components/visuals/ContactChannelsVisual";
import { contactReasons } from "../../data/siteContent";
import { submitContactRequest } from "../../services/contactApi";

const initialForm: ContactRequest = {
  name: "",
  company: "",
  email: "",
  phone: "",
  solution: "",
  message: ""
};

export function ContactPage() {
  const [form, setForm] = useState<ContactRequest>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const updateField = <Field extends keyof ContactRequest>(field: Field, value: ContactRequest[Field]) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    try {
      await submitContactRequest(form);
      setStatus("success");
      setFeedback("Solicitud enviada. Te contactaremos pronto para coordinar el diagnostico.");
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
              Hablemos sobre como transformar <span className="gradient-text">tu operacion</span>
            </h1>
            <p className="lead">
              Nuestro equipo esta listo para ayudarte a optimizar procesos, integrar sistemas y acelerar resultados.
            </p>
            <div className="actions">
              <ActionButton onClick={scrollToForm}>Agenda una reunion</ActionButton>
              <ActionButton variant="secondary" onClick={scrollToForm}>
                Solicita un diagnostico
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
              kicker="Cuentanos"
              title="Cuentanos que necesita tu empresa"
              description="Queremos entender tus procesos, desafios y objetivos para ayudarte a construir una solucion tecnologica alineada a tu operacion."
            />
            <div className="cards contact-direct">
              <article className="card">
                <h3>Tambien puedes escribirnos directamente</h3>
                <p>contacto@smartbots.pe</p>
                <p>WhatsApp empresarial</p>
                <p>LinkedIn</p>
                <p>Peru - Atencion LATAM</p>
              </article>
            </div>
          </div>

          <form className="card form-grid" onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre" value={form.name} onChange={(event) => updateField("name", event.target.value)} required />
            <input type="text" placeholder="Empresa" value={form.company} onChange={(event) => updateField("company", event.target.value)} required />
            <input
              type="text"
              inputMode="email"
              placeholder="Correo electronico"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              required
            />
            <input type="tel" placeholder="Telefono" value={form.phone} onChange={(event) => updateField("phone", event.target.value)} required />
            <select
              className="full"
              value={form.solution}
              onChange={(event) => updateField("solution", event.target.value as ContactRequest["solution"])}
              required
            >
              <option value="">Tipo de solucion requerida</option>
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

      <section className="soft">
        <div className="container">
          <SectionHead centered kicker="Diferencial" title="Por que trabajar con SMARTBOTS?" />
          <div className="cards">
            {contactReasons.map((card) => (
              <InfoCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
