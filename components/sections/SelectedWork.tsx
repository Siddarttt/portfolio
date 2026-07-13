import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectFeature } from "@/components/sections/ProjectFeature";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/content/projects";

/**
 * Selected Work — the opening spread after the Hero.
 *
 * Transition: whitespace only. No divider, no oversized header — the
 * 128px pause plus a whispered section label is the page-turn. The
 * label sits at the spine's left edge where the Hero's eyebrow sat,
 * so the voice that introduced the person now introduces the work.
 *
 * Rhythm: the two features alternate composition (spread / offset)
 * and are separated by the largest interval on the page (128 → up),
 * giving each flagship its own room.
 */
export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-heading" className="pt-4xl pb-4xl">
      <Container>
        <Reveal>
          <SectionHeading id="work-heading" index="01">
            Selected Work
          </SectionHeading>
        </Reveal>
        <div className="mt-2xl flex flex-col gap-3xl lg:mt-3xl lg:gap-4xl">
          {projects.map((project, index) => (
            <ProjectFeature
              key={project.slug}
              study={project}
              index={index}
              layout={index % 2 === 0 ? "spread" : "offset"}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
