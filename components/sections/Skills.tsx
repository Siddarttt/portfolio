import type { LucideIcon } from "lucide-react";
import {
  Box,
  Layers,
  LayoutTemplate,
  MousePointerClick,
  Network,
  PenTool,
  Search,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

/**
 * Skills — competency rows: a tracked label, then one full-width row
 * per skill (accent outline icon + heavy uppercase title), separated
 * by DASHED hairlines — the only dashed stroke on the site, reserved
 * for this section. Icons are presentational (aria-hidden) and mapped
 * here in the component; the content layer stays plain strings.
 */

const skillIcons: Record<string, LucideIcon> = {
  "UX Design": PenTool,
  "Product Design": Box,
  "UX Research": Search,
  "Information Architecture": Network,
  Wireframing: LayoutTemplate,
  Prototyping: MousePointerClick,
  "Design Systems": Layers,
};

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t border-border py-2xl"
    >
      <Container>
        <Reveal>
          <h2 id="skills-heading" className="eyebrow text-accent">
            04 — Skills
          </h2>
        </Reveal>
        <ul className="mt-md">
          {site.skills.map((skill, index) => {
            const Icon = skillIcons[skill];
            return (
              <li key={skill}>
                {/* Rows fade in with a light cascade, capped so late
                    rows never feel laggy. */}
                <Reveal delay={Math.min(index * 0.06, 0.3)}>
                  <div className="flex items-center gap-lg border-b border-dashed border-border py-lg">
                    {Icon ? (
                      <Icon
                        aria-hidden
                        strokeWidth={1.5}
                        className="size-8 shrink-0 text-accent"
                      />
                    ) : null}
                    <span className="font-heading text-h2 font-extrabold uppercase">
                      {skill}
                    </span>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
