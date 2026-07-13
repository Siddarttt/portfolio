import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Button — design.md §11.
 *
 * Refinement decision: the filled primary was dropped. Emphasis now
 * comes from typography and color scarcity — the primary CTA is the
 * ONLY accent element on the canvas, set in Lato 700 at large-body
 * size. This keeps the work, not the chrome, as the focal point while
 * remaining unmistakably the page's action (accent is reserved for
 * links & CTAs, design.md §7). Link identity is not color-alone:
 * primary carries a directional icon and hover underline; quiet
 * carries a persistent hairline underline (WCAG 1.4.1).
 *
 *  - primary: accent editorial link. 48px hit area.
 *  - quiet: muted text link, hairline underline.
 */

type ButtonVariant = "primary" | "quiet";

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    "group inline-flex h-12 items-center gap-xs",
    "font-body text-body font-bold uppercase tracking-eyebrow text-accent",
    "underline-offset-4 decoration-accent",
    "transition-colors duration-(--duration-fast) ease-out-quiet",
    "hover:underline",
  ].join(" "),
  quiet: [
    "inline-flex items-center py-xs text-caption uppercase tracking-eyebrow text-muted",
    "underline decoration-border underline-offset-4",
    "transition-colors duration-(--duration-fast) ease-out-quiet",
    "hover:text-foreground hover:decoration-foreground",
  ].join(" "),
};

export function Button({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={variantClasses[variant]}>
      {children}
    </Link>
  );
}
