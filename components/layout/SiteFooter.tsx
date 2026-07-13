import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

/**
 * Contact + footer — the closing spread. Bookends the Hero: eyebrow
 * label, then the invitation as the page's final statement (h2 scale,
 * subordinate to the Hero). Contact channels (email / LinkedIn /
 * resume) are not defined in content.md yet:
 * // Content Placeholder: contact channels pending.
 * The small-print row carries only the name (chrome, not content).
 */
export function SiteFooter() {
  return (
    <footer id="contact" aria-labelledby="contact-heading" className="border-t border-border">
      <Container>
        <div className="pt-4xl pb-3xl">
          <Reveal>
            <SectionHeading id="contact-heading" index="07">
              Contact
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-xl max-w-[22ch] font-heading text-h2 font-bold uppercase">
            {/* Bind "digital experiences" — the phrase that bookends the
                Hero — so no viewport splits it across lines. */}
              {site.contact.replace("digital experiences", "digital\u00A0experiences")}
            </p>
          </Reveal>
          {/* Content Placeholder: contact channels (email / LinkedIn /
              resume) to be added to content.md, rendered here as quiet
              links in the established CTA voice. */}
        </div>
        <div className="flex items-center justify-between border-t border-border py-md">
          <p className="text-caption text-muted">Siddarth S</p>
          <p className="text-caption text-muted">© 2026</p>
        </div>
      </Container>
    </footer>
  );
}
