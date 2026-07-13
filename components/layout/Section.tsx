import type { ReactNode } from "react";
import { Container } from "./Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Section shell — the publication's recurring spread:
 * whispered label in the left columns, content hanging from the
 * editorial spine (column 7). Rhythm varies deliberately per section
 * (design direction: "different spacing creates hierarchy"):
 *
 *   regular  py-96          bordered
 *   open     pt-96 pb-64    bordered   (leads a paired spread)
 *   close    pt-64 pb-96    unbordered (answers a paired spread)
 *   compact  py-64          bordered   (single-line sections)
 *   roomy    py-128         bordered   (sections that must breathe)
 */

type SectionSpace = "regular" | "open" | "close" | "compact" | "roomy";

const spaceClasses: Record<SectionSpace, string> = {
  regular: "py-3xl",
  open: "pt-3xl pb-2xl",
  close: "pt-2xl pb-3xl",
  compact: "py-2xl",
  roomy: "py-4xl",
};

export function Section({
  id,
  label,
  index,
  space = "regular",
  bordered = true,
  children,
}: {
  id: string;
  label: string;
  /** Two-digit section index for the theme's indexed title rows. */
  index?: string;
  space?: SectionSpace;
  bordered?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`${spaceClasses[space]} ${bordered ? "border-t border-border" : ""}`.trim()}
    >
      <Container>
        {/* Dark-theme revision: the display title owns a full-width row
            (it is now a headline, not a whisper); content keeps hanging
            from the editorial spine below it. */}
        {/* Section-wide fade-in: title first, content a beat later. */}
        <Reveal>
          <SectionHeading id={`${id}-heading`} index={index}>
            {label}
          </SectionHeading>
        </Reveal>
        <div className="mt-xl grid grid-cols-1 lg:mt-2xl lg:grid-cols-12 lg:gap-x-md">
          <Reveal delay={0.15} className="lg:col-span-6 lg:col-start-7">
            {children}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
