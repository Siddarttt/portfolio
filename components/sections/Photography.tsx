import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhotoGallery } from "@/components/ui/PhotoGallery";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

/**
 * Photography — one window, no more: the indexed title and the small
 * intro share a compact head row, then the automatic bento collage
 * drifts full-bleed beneath. The strip height is budgeted inside
 * PhotoGallery (--strip-h) so title + intro + collage never exceed
 * a viewport.
 */
export function Photography() {
  return (
    <section
      id="photography"
      aria-labelledby="photography-heading"
      className="border-t border-border py-2xl"
    >
      <Container>
        <div className="grid grid-cols-1 gap-y-sm lg:grid-cols-12 lg:items-end lg:gap-x-md">
          <Reveal className="lg:col-span-5">
            <SectionHeading id="photography-heading" index="06">
              Photography
            </SectionHeading>
          </Reveal>
          <Reveal
            delay={0.15}
            className="lg:col-span-6 lg:col-start-7"
          >
            <p className="measure-wide text-body text-muted">
              {site.photography.intro}
            </p>
          </Reveal>
        </div>
      </Container>
      {/* Full-bleed marquee — the collage runs edge to edge, masked
          softly at both ends. */}
      <Reveal delay={0.2} className="mt-xl">
        <PhotoGallery images={site.photography.gallery} />
      </Reveal>
    </section>
  );
}
