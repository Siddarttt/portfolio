import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

/**
 * Typographic binding: below lg the headline reflows fluidly, and the
 * browser may break "…experiences for / enterprise…", splitting the
 * prepositional phrase mid-thought. A no-break space binds "for
 * enterprise" so the phrase always travels together. The copy remains
 * verbatim content.md — this is line-break control, not a rewrite.
 */
function bindPhrases(line: string): string {
  return line.replace("for enterprise", "for\u00A0enterprise");
}

/**
 * Hero — refined pass. Goal: authored, not assembled.
 *
 * SIGNATURE — "the editorial spine": statements live in the left half
 * of the grid, narrative hangs from column 7 in the right half. The
 * resulting channel of negative space recurs section after section and
 * becomes the portfolio's compositional identity. It starts here.
 *
 * Authored typography: the headline's three lines are art-directed in
 * the content layer (identity / object / domain — natural spoken
 * rhythm, no widows) and activate at lg; below lg, fluid type +
 * text-wrap: balance keep the block composed at any width.
 *
 * Optical balance: the block sits slightly ABOVE geometric center
 * (a typographic-center lift via the aria-hidden spacer) so the
 * composition reads as placed, not distributed.
 *
 * CTAs: emphasis through scarcity — the primary is the page's only
 * accent element, with a down arrow that tells the truth about the
 * interaction (it scrolls down to Selected Work). 2px icon nudge on
 * hover is a sanctioned slight translate (design.md §12).
 */
export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      {/* Dithered portrait plate — the photograph pre-baked into a
          pixel-dither texture (scripts: scratchpad/dither.js; source
          asset from the owner). Decorative: the hero's voice is the
          headline, so the image is aria-hidden with empty alt.
          Gradient scrims melt the plate's edges into the canvas so
          type keeps AA contrast; image-rendering: pixelated keeps the
          blocks crisp at any scale. */}
      <div aria-hidden className="absolute inset-y-0 right-0 w-full md:w-3/5 lg:w-1/2">
        <Image
          src="/hero-portrait-dither.png"
          alt=""
          fill
          priority
          sizes="(min-width: 768px) 60vw, 100vw"
          className="object-cover object-top opacity-40 md:opacity-90 [image-rendering:pixelated]"
        />
        <div
          className="absolute inset-0"
          style={{
            background: [
              "linear-gradient(90deg, var(--color-background) 0%, rgb(14 14 14 / 0.55) 35%, transparent 70%)",
              "linear-gradient(180deg, var(--color-background) 0%, transparent 30%)",
              "linear-gradient(0deg, var(--color-background) 0%, transparent 45%)",
            ].join(", "),
          }}
        />
      </div>

      <Container className="relative">
        <div className="flex min-h-[calc(100svh-var(--spacing-header))] flex-col justify-center py-3xl lg:py-4xl">
          <div>
            {/* Editorial refinement: the eyebrow name was removed — the
                brand sits directly above in the header, and repeating it
                was the hero's only redundant element. The headline now
                opens the page alone; the whisper voice debuts at
                Selected Work, where it starts meaning "section". */}
            <h1
              id="hero-heading"
              className="animate-rise max-w-[24ch] text-hero lg:max-w-none"
            >
              {/* Theme treatment: the middle authored line carries the
                  accent — solid mint against off-white neighbors (the
                  theme's two-tone display move). Content is verbatim;
                  only color is art-directed. */}
              {site.hero.headlineLines.map((line, index) => (
                <span
                  key={line}
                  className={index === 1 ? "text-accent lg:block" : "lg:block"}
                >
                  {bindPhrases(line)}
                  {index < site.hero.headlineLines.length - 1 ? " " : ""}
                </span>
              ))}
            </h1>

            {/* The pause between statement and narrative is the hero's
                second compositional element — one full 3xl/4xl interval
                of bare canvas. */}
            <div className="mt-3xl grid grid-cols-1 lg:mt-4xl lg:grid-cols-12">
              <div className="lg:col-span-5 lg:col-start-7">
                <p className="animate-rise rise-2 measure-wide text-body-lg text-muted">
                  {site.hero.supporting}
                </p>
                <div className="animate-rise rise-3 mt-lg flex flex-wrap items-center gap-lg">
                  <Button href="/#work">
                    {site.hero.ctaLabel}
                    <ArrowDown
                      aria-hidden
                      className="size-icon-sm transition-transform duration-(--duration-fast) ease-out-quiet group-hover:translate-y-0.5"
                    />
                  </Button>
                  <Button href="/#contact" variant="quiet">
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Optical lift: raises the composition slightly above
              geometric center — typographic center (lg only). */}
          <div aria-hidden className="hidden lg:block lg:h-2xl" />
        </div>
      </Container>
    </section>
  );
}
