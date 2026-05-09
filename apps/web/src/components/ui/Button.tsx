import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import type { PageSlug } from "@smartbots/shared";
import { pageHref } from "../../app/navigation";

type ButtonVariant = "primary" | "secondary";

interface LinkButtonProps {
  page: PageSlug;
  variant?: ButtonVariant;
}

export function LinkButton({ page, variant = "primary", children }: PropsWithChildren<LinkButtonProps>) {
  return (
    <a className={`btn btn-${variant}`} href={pageHref(page)}>
      {children}
    </a>
  );
}

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function ActionButton({ variant = "primary", className = "", children, ...props }: PropsWithChildren<ActionButtonProps>) {
  return (
    <button className={`btn btn-${variant} ${className}`.trim()} type="button" {...props}>
      {children}
    </button>
  );
}
