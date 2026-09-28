import type { CaseStudy, CarouselSlide } from "@/lib/types";

/**
 * Wired from projects/scanflow.md, ordered per design.md §6.
 * Sections marked "pending" have no source content yet and render the
 * ContentPlaceholder — to be authored in the enrichment phase.
 * // Case Study Content Placeholder — do not invent details here.
 *
 * Discovery/Research/Problem/Goals…Final UI were folded into the
 * Product/GTM editorial views below (approved content-review
 * decision) — Overview opens the body, the tabs carry the breadth of
 * the work, Reflection closes it.
 */

/** Slides that already have an exported frame. */
function slides(
  motif: CarouselSlide["motif"],
  items: { label: string; src: string; alt: string }[],
): CarouselSlide[] {
  return items.map((item, i) => ({
    id: `${motif}-${i}`,
    label: item.label,
    alt: item.alt,
    motif,
    src: item.src,
  }));
}

/** Boards still waiting on a frame. */
function pending(
  motif: CarouselSlide["motif"],
  labels: string[],
): CarouselSlide[] {
  return labels.map((label, i) => ({
    id: `${motif}-${i}`,
    label,
    alt: `${label} — imagery pending`,
    motif,
  }));
}

/* Draft copy — the short paragraph under each tab section number is
   authored here (not sourced from scanflow.md) and is expected to be
   reviewed/edited alongside the real assets. */
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
      id: "reflection",
      title: "Reflection",
      status: "complete",
      paragraphs: [
        "This project strengthened my ability to design enterprise products, collaborate across teams, and simplify complex operational workflows.",
      ],
    },
  ],
  tabs: [
    {
      id: "product",
      label: "Product",
      sections: [
        {
          id: "product-design-system",
          number: "01",
          title: "Design System",
          paragraph:
            "A unified visual language — color, type, and component foundations built to hold together across every Scanflow surface.",
          slides: pending("grid", [
            "Colors",
            "Typography",
            "Components",
            "Buttons",
            "Inputs",
            "Tables",
            "Icons",
            "Spacing",
          ]),
        },
        {
          id: "product-sdk-applications",
          number: "02",
          title: "SDK Applications",
          paragraph:
            "Floor work in the hand, and the line on a desktop — receiving cargo, picking orders, and setting up a furnace conveyor.",
          slides: slides("device", [
            {
              label: "Cargo Reception",
              src: "/scanflow/cargo.png",
              alt: "Cargo reception tasks with cold-chain batches ready to start",
            },
            {
              label: "Pick & Pack",
              src: "/scanflow/pick.png",
              alt: "Pick and pack orders with due time, location, and start picking",
            },
            {
              label: "Conveyor Settings",
              src: "/scanflow/settings.png",
              alt: "Furnace conveyor settings for address, frames, and threshold",
            },
          ]),
        },
        {
          id: "product-architecture-diagrams",
          number: "03",
          title: "Architecture Diagrams",
          paragraph:
            "How the platform fits together — solution, system, and integration diagrams mapping Scanflow's technical backbone.",
          slides: pending("flow", [
            "Solution Architecture",
            "System Workflow",
            "SDK Integration",
            "Enterprise Flow",
            "API Architecture",
            "Technical Diagrams",
          ]),
        },
        {
          id: "product-final-ui",
          number: "04",
          title: "Final UI",
          paragraph:
            "The shipped product across desktop, tablet, and mobile — dashboard, inspection, and analytics surfaces in production.",
          slides: pending("device", [
            "Desktop",
            "Tablet",
            "Mobile",
            "Dashboard",
            "Inspection",
            "Analytics",
          ]),
        },
        {
          id: "product-outcomes",
          number: "05",
          title: "Outcomes",
          paragraph:
            "Delivered multiple enterprise applications, improved UI consistency, supported GTM initiatives, and established scalable design patterns.",
        },
      ],
    },
    {
      id: "gtm",
      label: "GTM",
      sections: [
        {
          id: "gtm-website-redesign",
          number: "01",
          title: "Website Redesign",
          paragraph:
            "The site, one page at a time — homepage, visual inspection, asset identification, barcode and QR, tire sidewall, and manufacturing.",
          slides: slides("window", [
            {
              label: "Homepage",
              src: "/scanflow/home.png",
              alt: "Homepage with the site navigation and the Visual Inspection Automated hero",
            },
            {
              label: "Visual Inspection",
              src: "/scanflow/visual.png",
              alt: "Visual inspection page, with the site navigation, a bottling-line still, and success stories",
            },
            {
              label: "Asset Identification",
              src: "/scanflow/asset.png",
              alt: "Asset identification page, with the site navigation and a yard worker scanning a tire",
            },
            {
              label: "Barcode & QR",
              src: "/scanflow/barcode.png",
              alt: "Barcode and QR page, with the site navigation and a warehouse scan at the rack",
            },
            {
              label: "Tire Sidewall",
              src: "/scanflow/tyre.png",
              alt: "Tire sidewall page, with the site navigation, about automating TIN, DOT, size, and serial capture",
            },
            {
              label: "Manufacturing",
              src: "/scanflow/manufacturing.png",
              alt: "Manufacturing page, with the site navigation, an automotive line, and instant asset identification",
            },
          ]),
        },
        {
          id: "gtm-linkedin-campaigns",
          number: "02",
          title: "LinkedIn Campaigns",
          paragraph:
            "Eight campaigns built for LinkedIn — carrying the Scanflow voice into a founder-led, enterprise audience.",
          slides: pending(
            "social",
            Array.from({ length: 8 }, (_, i) => `Campaign ${String(i + 1).padStart(2, "0")}`),
          ),
        },
        {
          id: "gtm-brand-guidelines",
          number: "03",
          title: "Brand Guidelines",
          paragraph:
            "Logo, type, color, components, icons, and usage rules — the guardrails that keep every asset on-brand.",
          slides: pending("grid", [
            "Logo",
            "Typography",
            "Colors",
            "Components",
            "Icons",
            "Usage",
          ]),
        },
        {
          id: "gtm-whitepapers",
          number: "04",
          title: "Whitepapers",
          paragraph:
            "Long-form technical storytelling — cover to closing spread, with charts and illustrations built to explain, not decorate.",
          slides: pending("document", [
            "Cover",
            "Inside Spread",
            "Charts",
            "Illustrations",
            "Closing",
          ]),
        },
        {
          id: "gtm-ai-video-creation",
          number: "05",
          title: "AI Video Creation",
          paragraph:
            "A furnace-line storyboard — the line in operation, then a close view of parts moving on the conveyor.",
          slides: slides("frame", [
            {
              label: "Establishing Shot",
              src: "/scanflow/ai-establishing.png",
              alt: "Shot 1, the curing furnace conveyor running with an operator beside it",
            },
            {
              label: "Process Close-up",
              src: "/scanflow/ai-closeup.png",
              alt: "Shot 2, screws and anomalies moving on the conveyor",
            },
          ]),
        },
        {
          id: "gtm-wordpress-development",
          number: "06",
          title: "WordPress Development",
          paragraph:
            "From Figma to a live, responsive, SEO-ready site — built and shipped on WordPress.",
          slides: pending("window", [
            "Figma",
            "Development",
            "Responsive",
            "CMS",
            "SEO",
            "Live Website",
          ]),
        },
      ],
    },
  ],
};
