import type { SiteContent } from "@/lib/types";

/**
 * Wired 1:1 from content.md. Do not edit copy here without updating
 * content.md first — the markdown files are the single source of truth.
 */
export const site: SiteContent = {
  hero: {
    name: "Siddarth S",
    headline:
      "UX Designer crafting thoughtful digital experiences for enterprise products.",
    /**
     * Authored line rhythm for the hero headline (desktop). The words are
     * verbatim content.md — only the break points are art-directed:
     * identity / object / domain. Guarded by the invariant check below.
     */
    headlineLines: [
      "UX Designer crafting",
      "thoughtful digital experiences",
      "for enterprise products.",
    ],
    supporting:
      "I simplify complex workflows through research, systems thinking, and intuitive interfaces.",
    ctaLabel: "View My Work",
  },
  /**
   * The content.md about paragraph, split at its sentence boundary for
   * the editorial-profile treatment (statement + supporting line).
   * Words are verbatim; only the presentation is art-directed.
   */
  about: {
    statement:
      "I'm a UX Designer with 3+ years of experience designing enterprise products across industrial automation and property management.",
    body: "I enjoy turning complexity into intuitive experiences through research, systems thinking, and thoughtful interfaces.",
  },
  experience: [
    {
      company: "Scanflow",
      title: "Product Designer",
      period: "2025–Present",
    },
    {
      company: "Optisol Business Solutions",
      title: "UX Engineer",
      period: "2024–2025",
    },
    {
      company: "Shrewd Business Solutions",
      title: "UX/UI Designer",
      period: "2022–2024",
    },
  ],
  skills: [
    "UX Design",
    "Product Design",
    "UX Research",
    "Information Architecture",
    "Wireframing",
    "Prototyping",
    "Design Systems",
  ],
  /**
   * Toolkit cards. Logos are mapped by `name` inside the Toolkit
   * component — adding an item here is all that's needed.
   */
  toolkit: [
    { name: "Figma", role: "Design" },
    { name: "Framer", role: "Prototyping" },
    { name: "Claude", role: "AI Development" },
    { name: "Antigravity", role: "Agentic Coding" },
    { name: "Cursor", role: "AI Code Editor" },
    { name: "After Effects", role: "Motion Design" },
    { name: "Photoshop", role: "Image Editing" },
  ],
  photography: {
    intro:
      "Beyond product work, I tell stories through photo and video — an ongoing study of light, composition, and the human moments that hold a frame together.",
    /**
     * Curated frames (owner-supplied, Images Carousel.zip → optimized
     * webp in /public/photography). Order is the bento rhythm the
     * marquee reads: portrait anchors, stacked landscape pairs, wide
     * cinematic singles. Reordering or adding items here is all
     * that's needed — the collage adapts.
     */
    gallery: [
      { src: "/photography/p01.webp", alt: "Photography by Siddarth S", orientation: "portrait" },
      { src: "/photography/p02.webp", alt: "Photography by Siddarth S", orientation: "landscape" },
      { src: "/photography/p03.webp", alt: "Photography by Siddarth S", orientation: "landscape" },
      { src: "/photography/p04.webp", alt: "Photography by Siddarth S", orientation: "portrait" },
      { src: "/photography/p05.webp", alt: "Photography by Siddarth S", orientation: "landscape" },
      { src: "/photography/p06.webp", alt: "Photography by Siddarth S", orientation: "portrait" },
      { src: "/photography/p07.webp", alt: "Photography by Siddarth S", orientation: "landscape" },
      { src: "/photography/p08.webp", alt: "Photography by Siddarth S", orientation: "landscape" },
      { src: "/photography/p09.webp", alt: "Photography by Siddarth S", orientation: "portrait" },
      { src: "/photography/p10.webp", alt: "Photography by Siddarth S", orientation: "landscape" },
      { src: "/photography/p11.webp", alt: "Photography by Siddarth S", orientation: "portrait" },
      { src: "/photography/p12.webp", alt: "Photography by Siddarth S", orientation: "landscape" },
      { src: "/photography/p13.webp", alt: "Photography by Siddarth S", orientation: "landscape" },
      { src: "/photography/p14.webp", alt: "Photography by Siddarth S", orientation: "portrait" },
      { src: "/photography/p15.webp", alt: "Photography by Siddarth S", orientation: "portrait" },
      { src: "/photography/p16.webp", alt: "Photography by Siddarth S", orientation: "landscape" },
      { src: "/photography/p17.webp", alt: "Photography by Siddarth S", orientation: "portrait" },
      { src: "/photography/p18.webp", alt: "Photography by Siddarth S", orientation: "portrait" },
    ],
  },
  contact: {
    invitation: "Let's build meaningful digital experiences together.",
    email: "sid.artt02@gmail.com",
    phone: "+91 77082 23822",
  },
};

/* Invariant: authored line breaks must never drift from the verbatim
   content.md headline. Fails the build if they do. */
if (site.hero.headlineLines.join(" ") !== site.hero.headline) {
  throw new Error(
    "content/site.ts: hero.headlineLines no longer matches hero.headline (content.md).",
  );
}
