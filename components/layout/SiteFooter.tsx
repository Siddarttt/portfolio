import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

/**
 * Contact + footer — the closing spread. Bookends the Hero: eyebrow
 * label, then the invitation as the page's final statement (h2 scale,
 * subordinate to the Hero), then the direct channels (email / phone)
 * as quiet links in the established CTA voice. The small-print row
 * carries only the name (chrome, not content).
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
              {site.contact.invitation.replace(
                "digital experiences",
                "digital\u00A0experiences",
              )}
            </p>
          </Reveal>
          {/* Direct channels \u2014 quiet CTA-voice links (mailto: / tel:). */}
          <Reveal delay={0.3}>
            <dl className="mt-2xl grid grid-cols-1 gap-y-md sm:grid-cols-[auto_1fr] sm:gap-x-2xl sm:gap-y-sm">
              <dt className="eyebrow">Email</dt>
              <dd>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-body-lg text-accent underline-offset-4 transition-colors duration-(--duration-fast) ease-out-quiet hover:underline"
                >
                  {site.contact.email}
                </a>
              </dd>
              <dt className="eyebrow">Phone</dt>
              <dd>
                <a
                  href={`tel:${site.contact.phone.replace(/\s+/g, "")}`}
                  className="text-body-lg text-accent underline-offset-4 transition-colors duration-(--duration-fast) ease-out-quiet hover:underline"
                >
                  {site.contact.phone}
                </a>
              </dd>
            </dl>
          </Reveal>
        </div>
        <div className="flex items-center justify-between border-t border-border py-md">
          <p className="text-caption text-muted">Siddarth S</p>
          <p className="text-caption text-muted">© 2026</p>
        </div>
      </Container>
    </footer>
  );
}
