/**
 * Content schema for the portfolio.
 *
 * Source of truth: the project markdown files (content.md, projects/*.md).
 * These types mirror that content so that enriching a case study later is
 * a data edit, not a component rewrite.
 *
 * A section with status "pending" has no authored content yet and MUST
 * render as a clearly marked placeholder — never invented copy.
 */

export type SectionStatus = "complete" | "pending";

export interface CaseStudySection {
  /** Stable id, used for anchors and keys. */
  id: string;
  /** Section heading as it will appear on the page. */
  title: string;
  status: SectionStatus;
  /** Paragraphs of authored content. Only present when status is "complete". */
  paragraphs?: string[];
  /** Bullet list content. Only present when status is "complete". */
  bullets?: string[];
}

/** Placeholder board motif shown until a slide's real asset exists. */
export type CarouselMotif =
  | "grid"
  | "flow"
  | "device"
  | "window"
  | "document"
  | "frame"
  | "code"
  | "social";

/**
 * One frame of an EditorialCarousel. `src` is optional until real
 * artwork arrives — a slide with no src renders a premium presentation
 * board (motif icon + label) instead of an empty grey box.
 */
export interface CarouselSlide {
  id: string;
  label: string;
  alt: string;
  motif: CarouselMotif;
  src?: string;
}

/**
 * One chapter within a case study's Product/GTM editorial view:
 * numbered heading, short paragraph, then its carousel (the section's
 * hero) and optional supporting notes. `slides` is omitted for
 * evidence-voice sections (e.g. Outcomes) that carry text only.
 */
export interface CaseStudyTabSection {
  id: string;
  number: string;
  title: string;
  paragraph: string;
  slides?: CarouselSlide[];
  notes?: string[];
}

export interface CaseStudyTab {
  id: string;
  label: string;
  sections: CaseStudyTabSection[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  /** One-line descriptor, e.g. "Computer Vision Platform". */
  subtitle: string;
  /** Discipline tags shown on cards and the case study header. */
  tags: string[];
  /** Short overview used for cards / metadata. */
  summary: string;
  role: string;
  responsibilities: string[];
  /**
   * Design process steps (verbatim from the project markdown), rendered
   * by the ProcessStep component in the case study header. Optional —
   * only present when the source markdown defines a process line.
   */
  process?: string[];
  /**
   * Long-form sections in the canonical editorial order from
   * design.md §6 (highest-priority document):
   * Overview → Discovery → Research → Problem → Goals →
   * Information Architecture → User Flow → Wireframes → Iterations →
   * Design Decisions → Design System → Final UI → Outcomes → Reflection.
   * Role lives in the case study header; Process renders via the
   * ProcessStep component (approved Design Review resolution).
   */
  sections: CaseStudySection[];
  /**
   * Optional Product/GTM editorial views, rendered immediately after
   * the Overview section via CaseStudyViews. Omitted entirely for case
   * studies still on the flat `sections` narrative (e.g. Just Be Lekker).
   */
  tabs?: CaseStudyTab[];
}

export interface ExperienceItem {
  company: string;
  title: string;
  period: string;
}

/** Natural orientation of a frame — art-direction hint, not a layout rule. */
export type PhotoOrientation = "portrait" | "landscape" | "square";

/**
 * A single gallery frame. The collage is data-driven: drop new items into
 * `SiteContent.photography.gallery` and the layout adapts — no component
 * changes. `src` is optional until real assets arrive; a frame with no src
 * renders a calm pending plate (Content Placeholder), never invented imagery.
 */
export interface PhotoItem {
  /** Public path to the image (e.g. "/photography/frame-01.jpg"). */
  src?: string;
  /** Descriptive alt text; required for accessibility even while pending. */
  alt: string;
  /** Orientation hint — drives the mobile card aspect and loading order. */
  orientation: PhotoOrientation;
}

/** One tool card in the Toolkit grid. Logos are mapped by `name` in the
 * Toolkit component; adding an item here is all that's needed. */
export interface ToolkitItem {
  name: string;
  /** Short category caption shown under the name. */
  role: string;
}

export interface SiteContent {
  hero: {
    name: string;
    headline: string;
    /** Art-directed line breaks; concatenation must equal `headline`. */
    headlineLines: string[];
    supporting: string;
    ctaLabel: string;
  };
  about: {
    /** Opening statement — the profile's confident first line. */
    statement: string;
    /** Short supporting paragraph. */
    body: string;
  };
  experience: ExperienceItem[];
  skills: string[];
  toolkit: ToolkitItem[];
  photography: {
    /** Small introductory paragraph shown before the gallery. */
    intro: string;
    /** Curated frames rendered by the editorial collage / carousel. */
    gallery: PhotoItem[];
  };
  contact: {
    /** The closing invitation statement (bookends the Hero). */
    invitation: string;
    /** Direct channels, rendered as quiet CTA-voice links. */
    email: string;
    phone: string;
  };
}
