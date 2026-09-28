import type { CaseStudyTabSection } from "@/lib/types";
import { EditorialCarousel } from "@/components/ui/EditorialCarousel";

/**
 * One chapter of a Product/GTM editorial view: number, title, short
 * paragraph, then its carousel — the section's hero — and optional
 * notes. Sections with no `slides` (e.g. Outcomes) speak in the same
 * evidence voice as the legacy CaseStudySection: one step up in scale,
 * text only.
 */
export function EditorialSection({
  section,
  tabLabel,
}: {
  section: CaseStudyTabSection;
  tabLabel: string;
}) {
  const isEvidence = !section.slides || section.slides.length === 0;

  return (
    <section aria-labelledby={`${section.id}-heading`} className="flex flex-col">
      <p className="eyebrow tabular-nums">{section.number}</p>
      <h3 id={`${section.id}-heading`} className="mt-xs max-w-[20ch] text-h2">
        {section.title}
      </h3>
      <p
        className={`mt-sm ${
          isEvidence ? "measure-wide text-body-lg" : "measure text-body text-muted"
        }`}
      >
        {section.paragraph}
      </p>

      {section.slides && section.slides.length > 0 ? (
        <div className="mt-xl lg:mt-2xl">
          <EditorialCarousel
            slides={section.slides}
            ariaLabel={`${section.title} carousel`}
            categoryLabel={`${tabLabel} · ${section.title}`}
          />
        </div>
      ) : null}

      {section.notes && section.notes.length > 0 ? (
        <p className="mt-md text-caption text-muted">
          {section.notes.join(" · ")}
        </p>
      ) : null}
    </section>
  );
}
