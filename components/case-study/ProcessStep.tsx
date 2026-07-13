import { ArrowRight } from "lucide-react";

/**
 * ProcessStep — design.md §11. The project's design process as a
 * quiet horizontal sequence in the heading voice, separated by muted
 * arrows (the site's truthful-arrow language). Semantically an ordered
 * list; wraps gracefully on narrow viewports.
 */
export function ProcessStep({ steps }: { steps: string[] }) {
  return (
    <ol aria-label="Design process" className="flex flex-wrap items-center gap-x-sm gap-y-xs">
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-x-sm">
          {/* Metadata voice — Lato bold; Arvo stays display-only. */}
          <span className="font-body text-body font-bold">{step}</span>
          {index < steps.length - 1 ? (
            <ArrowRight aria-hidden className="size-icon-sm text-muted" />
          ) : null}
        </li>
      ))}
    </ol>
  );
}
