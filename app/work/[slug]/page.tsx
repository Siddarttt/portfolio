import { Fragment } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { CaseStudy } from "@/lib/types";
import { projects, getProject } from "@/content/projects";
import { CaseStudyHeader } from "@/components/case-study/CaseStudyHeader";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { CaseStudyViews } from "@/components/case-study/CaseStudyViews";
import { CaseStudyNav } from "@/components/case-study/CaseStudyNav";
import { Container } from "@/components/layout/Container";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { projectCovers } from "@/components/ui/ProjectCover";
import { Reveal } from "@/components/ui/Reveal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getProject(slug);
  if (!study) return {};
  return {
    title: `${study.title} — ${study.subtitle}`,
    description: study.summary,
  };
}

/**
 * Editorial narrative flow: consecutive pending sections are grouped
 * into ONE quiet forthcoming note instead of a run of placeholder
 * plates. Six identical "content pending" boxes in a row interrupted
 * the read; a single note keeps the publication's pace while staying
 * honest about what is not yet authored. Purely presentational — the
 * content layer is untouched, and each section reappears in place the
 * moment its status flips to "complete".
 */
type Block =
  | { kind: "section"; section: CaseStudy["sections"][number] }
  | { kind: "forthcoming"; titles: string[] };

function toBlocks(sections: CaseStudy["sections"]): Block[] {
  const blocks: Block[] = [];
  for (const section of sections) {
    const last = blocks[blocks.length - 1];
    if (section.status === "pending") {
      if (last?.kind === "forthcoming") last.titles.push(section.title);
      else blocks.push({ kind: "forthcoming", titles: [section.title] });
    } else {
      blocks.push({ kind: "section", section });
    }
  }
  return blocks;
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getProject(slug);
  if (!study) notFound();

  const blocks = toBlocks(study.sections);

  return (
    <article>
      <CaseStudyHeader study={study} />
      <Container>
        {/* Cover plate — registered animated cover, else pending. */}
        <Reveal>
          {projectCovers[study.slug] ?? (
            <MediaFrame
              alt={`${study.title} — ${study.subtitle}`}
              aspectClass="aspect-video"
              pendingLabel={study.title}
            />
          )}
        </Reveal>
        {/* Chapter rhythm: the largest reading intervals on the site. */}
        <div className="mt-3xl flex flex-col gap-y-3xl lg:mt-4xl lg:gap-y-4xl">
          {blocks.map((block, i) => (
            <Fragment key={block.kind === "section" ? block.section.id : block.titles.join("-")}>
              {block.kind === "section" ? (
                <Reveal>
                  <CaseStudySection section={block.section} />
                </Reveal>
              ) : (
                <Reveal>
                  <aside
                    aria-label="Forthcoming sections"
                    className="grid grid-cols-1 gap-y-sm lg:grid-cols-12 lg:gap-x-md"
                  >
                    {/* Case Study Content Placeholder (grouped) — sections
                        exist in the canonical order but await authoring. */}
                    <p className="eyebrow lg:col-span-4">Forthcoming</p>
                    <p className="measure text-body text-muted lg:col-span-6 lg:col-start-7">
                      {block.titles.join(" · ")} — to be authored from project
                      source material during the enrichment phase.
                    </p>
                  </aside>
                </Reveal>
              )}
              {/* Product/GTM editorial views (when defined) slot in
                  immediately after Overview — always the first block. */}
              {i === 0 && study.tabs ? (
                <Reveal>
                  <CaseStudyViews tabs={study.tabs} />
                </Reveal>
              ) : null}
            </Fragment>
          ))}
        </div>
      </Container>
      <CaseStudyNav current={study} />
    </article>
  );
}
