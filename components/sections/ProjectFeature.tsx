import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/lib/types";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { projectCovers } from "@/components/ui/ProjectCover";
import { Reveal } from "@/components/ui/Reveal";

/**
 * ProjectFeature — an editorial feature opening, not a card.
 *
 * Refinement pass: each feature carries an index ("01 — Computer
 * Vision Platform") in the whisper voice, a flagship title at h1
 * scale, ONE short summary paragraph, and a single quiet evidence
 * line (role · domain). The former Role/Domain/Challenge ledger was
 * removed — the Challenge duplicated the case study's Problem
 * section, and three labeled rows read as a spec table, not an
 * editorial spread. Copy is minimal so the title and plate carry
 * the feature.
 *
 * Two authored layouts preserve individual presence:
 *  - "spread": full-width plate, then title left / narrative hanging
 *    from column 7 (the editorial spine, continued from the Hero).
 *  - "offset": text column left (1–5), tall plate right (6–12) —
 *    a counter-composition against the spread.
 */

function EvidenceLine({ study }: { study: CaseStudy }) {
  return (
    <p className="mt-md text-caption text-muted">
      {[study.role, ...study.tags].join(" · ")}
    </p>
  );
}

function ReadCta({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group mt-lg inline-flex h-12 items-center gap-xs font-body text-body font-bold text-accent underline-offset-4 transition-colors duration-(--duration-fast) ease-out-quiet hover:underline"
    >
      Read case study
      <ArrowRight
        aria-hidden
        className="size-icon-sm transition-transform duration-(--duration-fast) ease-out-quiet group-hover:translate-x-0.5"
      />
      <span className="sr-only"> — {study.title}</span>
    </Link>
  );
}

function TitleBlock({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <div>
      <p className="eyebrow">
        {String(index + 1).padStart(2, "0")} — {study.subtitle}
      </p>
      {/* Theme: project titles are solid accent — the card's focal
          point, mirroring the display-highlight treatment. */}
      <h3 className="mt-sm text-h1 text-accent">
        <Link
          href={`/work/${study.slug}`}
          className="underline-offset-4 decoration-border transition-colors duration-(--duration-fast) ease-out-quiet hover:underline"
        >
          {study.title}
        </Link>
      </h3>
    </div>
  );
}

export function ProjectFeature({
  study,
  index,
  layout,
}: {
  study: CaseStudy;
  index: number;
  layout: "spread" | "offset";
}) {
  /* Theme: each feature sits in a bordered, rounded card plate —
     the theme's project treatment — while keeping the two authored
     internal compositions. */
  const cardClass =
    "rounded-md border border-border bg-surface p-md md:p-lg lg:p-xl";

  /* Registered animated cover wins; otherwise the pending plate. */
  const cover = projectCovers[study.slug];

  if (layout === "spread") {
    return (
      <article aria-label={study.title} className={cardClass}>
        <Reveal>
          {cover ?? (
            <MediaFrame
              alt={`${study.title} — ${study.subtitle}`}
              aspectClass="aspect-video"
              pendingLabel={study.title}
            />
          )}
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-xl grid grid-cols-1 gap-y-md lg:mt-2xl lg:grid-cols-12 lg:gap-x-md">
            <div className="lg:col-span-5">
              <TitleBlock study={study} index={index} />
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="measure text-body text-muted">{study.summary}</p>
              <EvidenceLine study={study} />
              <ReadCta study={study} />
            </div>
          </div>
        </Reveal>
      </article>
    );
  }

  return (
    <article aria-label={study.title} className={cardClass}>
      <div className="grid grid-cols-1 gap-y-lg lg:grid-cols-12 lg:gap-x-md">
        <Reveal className="lg:col-span-7 lg:col-start-6 lg:row-start-1">
          {cover ?? (
            <MediaFrame
              alt={`${study.title} — ${study.subtitle}`}
              aspectClass="aspect-standard"
              pendingLabel={study.title}
            />
          )}
        </Reveal>
        <Reveal
          delay={0.15}
          className="lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:self-center"
        >
          <TitleBlock study={study} index={index} />
          <p className="measure mt-md text-body text-muted">{study.summary}</p>
          <EvidenceLine study={study} />
          <ReadCta study={study} />
        </Reveal>
      </div>
    </article>
  );
}
