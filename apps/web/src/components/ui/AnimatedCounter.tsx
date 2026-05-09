import { useEffect, useMemo, useState } from "react";
import { useInViewOnce } from "../../hooks/useInViewOnce";

type ParsedValue =
  | { kind: "static"; text: string }
  | { kind: "numeric"; target: number; suffix: string; decimals: number };

function prefersReducedMotion() {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function parseCounterValue(value: string | number): ParsedValue {
  if (typeof value === "number") {
    const decimals = Number.isInteger(value) ? 0 : String(value).split(".")[1]?.length ?? 0;
    return { kind: "numeric", target: value, suffix: "", decimals };
  }

  const text = value.trim();

  // Don't try to animate values like "24/7", "API", "KPIs", etc.
  if (text.includes("/")) return { kind: "static", text };

  const match = /^([+-])?(\d+(?:\.\d+)?)(.*)$/.exec(text);
  if (!match) return { kind: "static", text };

  const [, sign, rawNumber, rawSuffix] = match;
  const number = Number(rawNumber);
  if (!Number.isFinite(number)) return { kind: "static", text };

  // Avoid animating things like "01" used as labels.
  if (/^0\d+$/.test(rawNumber)) return { kind: "static", text };

  const decimals = rawNumber.includes(".") ? rawNumber.split(".")[1]!.length : 0;
  const suffix = (rawSuffix ?? "").trim();
  const signed = sign === "-" ? -number : number;

  // If suffix contains letters (e.g. "k", "M"), keep static to avoid odd formatting.
  if (/[a-zA-Z]/.test(suffix)) return { kind: "static", text };

  return { kind: "numeric", target: signed, suffix: suffix ? suffix : "" , decimals };
}

function formatNumber(value: number, decimals: number) {
  return value.toLocaleString("es-PE", {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals
  });
}

interface AnimatedCounterProps {
  value: string | number;
  durationMs?: number;
  className?: string;
  startOnView?: boolean;
  rootMargin?: string;
}

export function AnimatedCounter({
  value,
  durationMs = 900,
  className = "",
  startOnView = true,
  rootMargin
}: AnimatedCounterProps) {
  const parsed = useMemo(() => parseCounterValue(value), [value]);
  const { ref, hasEnteredView } = useInViewOnce<HTMLSpanElement>({ rootMargin });
  const [displayValue, setDisplayValue] = useState(() => (parsed.kind === "numeric" ? 0 : parsed.text));

  useEffect(() => {
    if (parsed.kind === "static") {
      setDisplayValue(parsed.text);
      return;
    }

    const shouldStart = !startOnView || hasEnteredView;
    if (!shouldStart) return;

    if (prefersReducedMotion() || durationMs <= 0) {
      setDisplayValue(`${formatNumber(parsed.target, parsed.decimals)}${parsed.suffix}`);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const from = 0;
    const to = parsed.target;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      const current = from + (to - from) * eased;
      const rounded = parsed.decimals === 0 ? Math.round(current) : Number(current.toFixed(parsed.decimals));
      setDisplayValue(`${formatNumber(rounded, parsed.decimals)}${parsed.suffix}`);
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [durationMs, hasEnteredView, parsed, startOnView]);

  if (parsed.kind === "static") {
    return <span className={className}>{parsed.text}</span>;
  }

  return (
    <span ref={startOnView ? ref : undefined} className={className}>
      {typeof displayValue === "string" ? displayValue : String(displayValue)}
    </span>
  );
}

