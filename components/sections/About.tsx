import { Section } from "@/components/layout/Section";
import { site } from "@/content/site";

/**
 * About — an editorial profile, not a bio block. Opens with the
 * confident statement in the display voice (h3 scale — subordinate to
 * the hero and project titles, senior to body), then one short
 * supporting paragraph in the reading voice. Paired with Experience
 * as a single spread (About opens, Experience closes).
 */
export function About() {
  return (
    <Section id="about" label="About" index="02" space="open">
      <p className="max-w-[28ch] font-heading text-h3 font-bold">
        {site.about.statement}
      </p>
      <p className="measure-wide mt-lg text-body-lg text-muted">
        {site.about.body}
      </p>
    </Section>
  );
}
