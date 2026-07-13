import type { CaseStudy } from "@/lib/types";

/**
 * Wired from projects/just-be-lekker.md, ordered per design.md §6.
 * Sections marked "pending" have no source content yet and render the
 * ContentPlaceholder — to be authored in the enrichment phase.
 * // Case Study Content Placeholder — do not invent details here.
 */
export const justBeLekker: CaseStudy = {
  slug: "just-be-lekker",
  title: "Just Be Lekker",
  subtitle: "Claims Management Platform",
  tags: ["Dashboard Design", "UX Strategy", "Information Architecture"],
  summary:
    "A property protection and claims management platform for vacation rental businesses that streamlines booking protection, guest verification, claims management, dispute resolution, and reporting.",
  role: "UX Designer",
  responsibilities: [
    "Product Design",
    "UX Strategy",
    "Information Architecture",
    "Dashboard Design",
    "Design System",
    "Responsive Design",
  ],
  sections: [
    {
      id: "overview",
      title: "Overview",
      status: "complete",
      paragraphs: [
        "A property protection and claims management platform for vacation rental businesses that streamlines booking protection, guest verification, claims management, dispute resolution, and reporting.",
      ],
    },
    {
      id: "discovery",
      title: "Discovery",
      status: "complete",
      paragraphs: [
        "Mapped the damage claims journey and identified opportunities to replace fragmented manual processes with a unified digital experience.",
      ],
    },
    {
      id: "research",
      title: "Research",
      status: "complete",
      paragraphs: [
        "Studied property management workflows, claims handling, user roles, and operational requirements.",
      ],
    },
    {
      id: "problem",
      title: "Problem",
      status: "complete",
      paragraphs: [
        "Design a scalable platform supporting Super Admins, Hosts, and Guests while simplifying complex business logic.",
      ],
    },
    { id: "goals", title: "Goals", status: "pending" },
    {
      id: "information-architecture",
      title: "Information Architecture",
      status: "complete",
      paragraphs: ["Role-based navigation for:"],
      bullets: ["Super Admin", "Host", "Guest"],
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
        "Reusable components including tables, forms, cards, notifications, billing summaries, charts, status tags, and modals.",
      ],
    },
    { id: "final-ui", title: "Final UI", status: "pending" },
    {
      id: "outcomes",
      title: "Outcomes",
      status: "complete",
      paragraphs: [
        "Designed 100+ high-fidelity screens that improved transparency, operational efficiency, and consistency across the platform.",
      ],
    },
    {
      id: "reflection",
      title: "Reflection",
      status: "complete",
      paragraphs: [
        "This project deepened my understanding of enterprise dashboards, multi-role experiences, and designing for operational clarity.",
      ],
    },
  ],
};
