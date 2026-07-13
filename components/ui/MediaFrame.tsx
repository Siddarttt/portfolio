import Image from "next/image";

/**
 * MediaFrame — the single imagery treatment for the site (design.md
 * §13: large, documentary, curated). Renders next/image when a source
 * exists; otherwise a composed pending plate — hairline border, surface
 * fill, labeled in the eyebrow voice. The plate is a deliberate design
 * object (Content Placeholder, design.md §11), never invented imagery.
 *
 * When real screenshots arrive: add { src, alt } to the content layer
 * and this frame upgrades itself — no component changes.
 */
interface MediaFrameProps {
  src?: string;
  alt: string;
  /** Tailwind aspect utility, e.g. "aspect-video" | "aspect-standard". */
  aspectClass?: string;
  /** Label shown on the pending plate when no src exists. */
  pendingLabel: string;
  /** True when the image is above the fold / LCP-relevant. */
  priority?: boolean;
}

export function MediaFrame({
  src,
  alt,
  aspectClass = "aspect-video",
  pendingLabel,
  priority = false,
}: MediaFrameProps) {
  if (src) {
    return (
      <div
        className={`relative overflow-hidden rounded-sm border border-border bg-surface ${aspectClass}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 1184px, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      data-placeholder="project-imagery"
      className={`flex items-center justify-center rounded-sm border border-border bg-surface ${aspectClass}`}
    >
      {/* Content Placeholder — imagery to be supplied, never invented. */}
      <p className="eyebrow">{pendingLabel} — imagery pending</p>
    </div>
  );
}
