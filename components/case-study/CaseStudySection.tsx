import type { CaseStudySection as SectionData } from "@/lib/types";
import { ContentPlaceholder } from "./ContentPlaceholder";

/**
 * One editorial chapter of a case study, on the spine: chapter
 * heading in the left columns (h3 scale — fourteen 40px headings
 * would shout; the h1 and section content carry the page), body
 * hanging from column 7 at the reading measure.
 */
export function CaseStudySection({ section }: { section: SectionData }) {
  /* Outcomes speak in the evidence voice: one step up in scale so the
     results land as the story's proof, without a decorated stat block. */
  const isEvidence = section.id === "outcomes";

  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className="grid grid-cols-1 gap-y-sm lg:grid-cols-12 lg:gap-x-md"
    >
      <div className="lg:col-span-4">
        <h2 id={`${section.id}-heading`} className="text-h3">
          {section.title}
        </h2>
      </div>
      <div className="flex flex-col gap-y-sm lg:col-span-6 lg:col-start-7">
        {section.status === "pending" ? (
          <ContentPlaceholder sectionTitle={section.title} />
        ) : (
          <>
            {section.paragraphs?.map((paragraph) => (
              <p
                key={paragraph}
                className={
                  isEvidence
                    ? "measure-wide text-body-lg"
                    : "measure text-body"
                }
              >
                {paragraph}
              </p>
            ))}
            {section.bullets ? (
              <ul className="flex list-disc flex-col gap-y-xs pl-md text-body marker:text-muted">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </>
        )}
      </div>
    </section>
  );
}
