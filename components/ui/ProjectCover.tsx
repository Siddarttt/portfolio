import Image from "next/image";
import type { ReactNode } from "react";

/**
 * ProjectCover — animated cover plates for projects that have real
 * media, registered by slug. ProjectFeature and the case study page
 * consult `projectCovers`; slugs without an entry keep the MediaFrame
 * pending plate. Adding a cover = one entry here, no layout changes.
 *
 * Shared anatomy (LayeredCover): a darkened backdrop with a very slow
 * ken-burns pan, a main product card drifting gently, a phone card
 * drifting in counter-phase (so the two never sync), and an edge
 * scrim that seats the plate into the dark canvas. Pure CSS keyframes
 * (globals.css), zero JS, all motion disabled under
 * prefers-reduced-motion.
 *
 * Assets are the owner-supplied packs (Scanflow Assets.zip /
 * Just be lekker assets.zip), processed to webp in /public.
 */

function LayeredCover({
  label,
  backdrop,
  card,
  cardAspect,
  phone,
  phoneAspect,
  children,
}: {
  label: string;
  backdrop: string;
  card: string;
  /**
   * aspect-ratio class matching the card asset's true proportions
   * (e.g. "aspect-[1440/941]"). When set, the full screen renders
   * inside the plate; when omitted, the card is pinned top-to-bottom
   * and crops like a window (the Scanflow bleed treatment).
   */
  cardAspect?: string;
  phone: string;
  /** aspect-ratio class for the phone card, e.g. "aspect-[393/852]". */
  phoneAspect: string;
  /** Extra plate-specific layers (e.g. the Scanflow scan beam). */
  children?: ReactNode;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className="relative aspect-video overflow-hidden rounded-sm border border-border bg-surface"
    >
      <Image
        src={backdrop}
        alt=""
        fill
        sizes="(min-width: 1280px) 1184px, 100vw"
        className="animate-cover-pan object-cover"
      />

      <div
        className={`animate-cover-drift absolute left-[5%] w-[62%] overflow-hidden rounded-sm border border-border shadow-hover ${
          cardAspect ? `top-[14%] ${cardAspect}` : "top-[16%] bottom-[-6%]"
        }`}
      >
        <Image
          src={card}
          alt=""
          fill
          sizes="(min-width: 1280px) 740px, 62vw"
          className="object-cover object-top"
        />
      </div>

      <div
        className={`animate-cover-drift-counter absolute top-[10%] right-[6%] bottom-[8%] ${phoneAspect} overflow-hidden rounded-md border border-border shadow-hover`}
      >
        <Image
          src={phone}
          alt=""
          fill
          sizes="(min-width: 1280px) 340px, 30vw"
          className="object-cover object-top"
        />
      </div>

      {children}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgb(14 14 14 / 0.35) 0%, transparent 22%)",
        }}
      />
    </div>
  );
}

/* Scanflow — factory scene backdrop, scanflow.ai hero, Cargo
   Reception app, plus the mint scan beam: the one literal motion,
   because scanning is what the product does. */
function ScanflowCover() {
  return (
    <LayeredCover
      label="Scanflow — product website and mobile app over a factory scene"
      backdrop="/scanflow/cover-bg.webp"
      card="/scanflow/site-home.webp"
      phone="/scanflow/app-screen.webp"
      phoneAspect="aspect-[393/852]"
    >
      <div
        aria-hidden
        className="animate-cover-scan absolute inset-x-0 h-px bg-accent opacity-40"
        style={{ boxShadow: "0 0 24px 4px rgb(195 255 252 / 0.35)" }}
      />
    </LayeredCover>
  );
}

/* Just Be Lekker — a JBL screen abstracted (blur + darken) as the
   field, the Super Admin analytics dashboard as the main card, the
   Booking Verification form as the phone. No beam — the scan motion
   belongs to Scanflow. */
function JustBeLekkerCover() {
  return (
    <LayeredCover
      label="Just Be Lekker — claims dashboard and booking verification app"
      backdrop="/jbl/cover-bg.webp"
      card="/jbl/dashboard.webp"
      cardAspect="aspect-[1440/941]"
      phone="/jbl/app-form.webp"
      phoneAspect="aspect-[360/800]"
    />
  );
}

export const projectCovers: Record<string, ReactNode> = {
  scanflow: <ScanflowCover />,
  "just-be-lekker": <JustBeLekkerCover />,
};
