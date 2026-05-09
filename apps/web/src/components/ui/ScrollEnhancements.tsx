import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import type { PageSlug } from "@smartbots/shared";

const revealSelector = [
  "section > .container > *",
  ".section-head",
  ".hero-grid > *",
  ".solution-feature",
  ".solution-feature-panel",
  ".solution-chip",
  ".solution-row",
  ".service-automation-visual",
  ".benefits-impact-visual",
  ".contact-channels-visual",
  ".impact-copy",
  ".impact-bar-item",
  ".industry",
  ".reason-item",
  ".card",
  ".kpi",
  ".logo-box",
  ".vision-card",
  ".vision-illustration",
  ".cta-steps article",
  ".cta-route-step",
  ".cta-copy",
  ".form-grid"
].join(",");

export function ScrollReveal({ page }: { page: PageSlug }) {
  useEffect(() => {
    let observer: IntersectionObserver | undefined;
    let animationFrame = 0;

    const run = window.setTimeout(() => {
      // Cada cambio de página vuelve a registrar los elementos para que las animaciones se repitan por sección.
      const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));

      if (typeof IntersectionObserver === "undefined") {
        elements.forEach((element) => element.classList.add("scroll-reveal", "is-visible"));
        return;
      }

      // IntersectionObserver evita escuchar scroll manualmente y mantiene transiciones suaves al entrar en viewport.
      const currentObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              currentObserver.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
      );
      observer = currentObserver;

      elements.forEach((element) => {
        const section = element.closest("section");
        const sectionElements = section
          ? Array.from(section.querySelectorAll<HTMLElement>(revealSelector))
          : elements;
        const sectionIndex = Math.max(sectionElements.indexOf(element), 0);

        element.classList.remove("is-visible");
        element.classList.add("scroll-reveal");
        element.style.setProperty("--reveal-delay", `${Math.min(sectionIndex, 5) * 90}ms`);
        element.style.setProperty("--reveal-x", "0px");
      });

      animationFrame = window.requestAnimationFrame(() => {
        elements.forEach((element) => currentObserver.observe(element));
      });
    }, 80);

    return () => {
      window.clearTimeout(run);
      window.cancelAnimationFrame(animationFrame);
      observer?.disconnect();
    };
  }, [page]);

  return null;
}

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 520);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <button
      className={`back-to-top ${isVisible ? "is-visible" : ""}`}
      type="button"
      aria-label="Volver al inicio"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp size={22} strokeWidth={2.4} />
    </button>
  );
}
