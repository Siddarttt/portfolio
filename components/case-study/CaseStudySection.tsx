import Image from "next/image";
import type {
  CaseStudyMedia,
  CaseStudySection as SectionData,
} from "@/lib/types";
import { ContentPlaceholder } from "./ContentPlaceholder";

function SectionMedia({ media }: { media: CaseStudyMedia }) {
  if (media.type === "video") {
    return (
      <video
        src={media.src}
        aria-label={media.alt}
        autoPlay
        muted
        loop
        playsInline
        className="mt-xl w-full rounded-sm border border-border bg-surface lg:mt-2xl"
      />
    );
  }

  return (
    <div className="mt-xl overflow-hidden rounded-sm border border-border bg-surface lg:mt-2xl">
      <Image
        src={media.src}
        alt={media.alt}
        width={media.width ?? 1600}
        height={media.height ?? 900}
        className="h-auto w-full"
      />
    </div>
  );
}

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
    >
      <div className="grid grid-cols-1 gap-y-sm lg:grid-cols-12 lg:gap-x-md">
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
            {section.closing?.map((paragraph) => (
              <p key={paragraph} className="measure text-body">
                {paragraph}
              </p>
            ))}
          </>
        )}
      </div>
    </div>

    {section.media ? <SectionMedia media={section.media} /> : null}

    {section.features?.map((feature) => (
      <div key={feature.title} className="mt-3xl lg:mt-4xl">
        <div className="grid grid-cols-1 gap-y-sm lg:grid-cols-12 lg:gap-x-md">
          <h3 className="text-h3 lg:col-span-4">{feature.title}</h3>
          <div className="flex flex-col gap-y-sm lg:col-span-6 lg:col-start-7">
            {feature.paragraphs.map((paragraph) => (
              <p key={paragraph} className="measure text-body">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        {feature.media ? <SectionMedia media={feature.media} /> : null}
      </div>
    ))}
    </section>
  );
}
