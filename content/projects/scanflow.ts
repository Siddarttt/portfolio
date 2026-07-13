import type { CaseStudy } from "@/lib/types";

/**
 * Wired from projects/scanflow.md, ordered per design.md §6.
 * Sections marked "pending" have no source content yet and render the
 * ContentPlaceholder — to be authored in the enrichment phase.
 * // Case Study Content Placeholder — do not invent details here.
 */
export const scanflow: CaseStudy = {
  slug: "scanflow",
  title: "Scanflow",
  subtitle: "Computer Vision Platform",
  tags: ["Enterprise UX", "Design Systems", "Industrial Workflows"],
  summary:
    "Enterprise computer vision platform for barcode scanning, OCR, serial number recognition, visual inspection, and traceability across manufacturing, logistics, retail, energy, and IT asset management.",
  role: "UX Designer",
  responsibilities: [
    "Product Design",
    "UX Research",
    "Design Systems",
    "Website Experience",
    "GTM Assets",
    "AI-assisted Visuals",
  ],
  /* Verbatim process line from scanflow.md, split on its own arrows. */
  process: ["Discover", "Define", "Wireframe", "Prototype", "Validate", "Iterate"],
  sections: [
    {
      id: "overview",
      title: "Overview",
      status: "complete",
      paragraphs: [
        "Enterprise computer vision platform for barcode scanning, OCR, serial number recognition, visual inspection, and traceability across manufacturing, logistics, retail, energy, and IT asset management.",
      ],
    },
    {
      id: "discovery",
      title: "Discovery",
      status: "complete",
      paragraphs: [
        "Worked with product owners, developers, and GTM teams to understand industrial workflows, user goals, and technical constraints.",
      ],
    },
    {
      id: "research",
      title: "Research",
      status: "complete",
      bullets: [
        "Customer workflows",
        "Competitor analysis",
        "Warehouse operations",
        "Manufacturing processes",
        "Stakeholder interviews",
      ],
    },
    {
      id: "problem",
      title: "Problem",
      status: "complete",
      paragraphs: [
        "Create a consistent experience across multiple products while simplifying complex industrial workflows.",
      ],
    },
    { id: "goals", title: "Goals", status: "pending" },
    {
      id: "information-architecture",
      title: "Information Architecture",
      status: "pending",
    },
    { id: "user-flow", title: "User Flow", status: "pending" },
    { id: "wireframes", title: "Wireframes", status: "pending" },
    { id: "iterations", title: "Iterations", status: "pending" },
    { id: "design-decisions", title: "Design Decisions", status: "pending" },
    {
      id: "design-system",
      title: "Design System",
      status: "complete",
      paragraphs: [
        "Reusable buttons, forms, cards, tables, navigation, typography, colors, spacing, icons, and status components.",
      ],
    },
    { id: "final-ui", title: "Final UI", status: "pending" },
    {
      id: "outcomes",
      title: "Outcomes",
      status: "complete",
      paragraphs: [
        "Delivered multiple enterprise applications, improved UI consistency, supported GTM initiatives, and established scalable design patterns.",
      ],
    },
    {
      id: "reflection",
      title: "Reflection",
      status: "complete",
      paragraphs: [
        "This project strengthened my ability to design enterprise products, collaborate across teams, and simplify complex operational workflows.",
      ],
    },
  ],
};
