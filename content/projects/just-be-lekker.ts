import type { CaseStudy, CarouselSlide } from "@/lib/types";

/**
 * Wired from projects/just-be-lekker.md, ordered per design.md §6.
 * Sections marked "pending" have no source content yet and render the
 * ContentPlaceholder — to be authored in the enrichment phase.
 * // Case Study Content Placeholder — do not invent details here.
 *
 * Product/Mobile slides are exports from the JBL Figma file (Final Screens).
 */

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
  tabs: [
    {
      id: "product",
      label: "Product",
      sections: [
        {
          id: "jbl-dashboards",
          number: "01",
          title: "Dashboards",
          paragraph:
            "Super Admin, host, and guest each get a home — claims and fees for the admin, properties and bookings for the host, stays for the guest.",
          slides: slides("window", [
            {
              label: "Super Admin",
              src: "/jbl/super-admin.png",
              alt: "Super Admin analytics with claims, disputes, and fee breakdown",
            },
            {
              label: "Guest",
              src: "/jbl/guest-dash.png",
              alt: "Guest dashboard with rating, upcoming stay, and reviews",
            },
            {
              label: "Properties",
              src: "/jbl/properties.png",
              alt: "Host properties table with beds, guests, and documents",
            },
            {
              label: "Bookings",
              src: "/jbl/bookings.png",
              alt: "Current bookings with guest rating and protection status",
            },
          ]),
        },
        {
          id: "jbl-verification",
          number: "02",
          title: "Verification",
          paragraph:
            "Getting in, and proving who is arriving — host or guest login, then the booking's identity check.",
          slides: slides("window", [
            {
              label: "Log In",
              src: "/jbl/login.png",
              alt: "Guest login with identification number and password",
            },
            {
              label: "Booking Verification",
              src: "/jbl/verify.png",
              alt: "Booking verification dialog to upload a passport or driver's license",
            },
          ]),
        },
        {
          id: "jbl-claims",
          number: "03",
          title: "Claims",
          paragraph:
            "From the incident walkthrough to the dispute and the final bill — damages, fines, waiver cover, and what is left to pay.",
          slides: slides("window", [
            {
              label: "Incident Report",
              src: "/jbl/incident.png",
              alt: "Incident report walkthrough for a damage-waiver claim",
            },
            {
              label: "Dispute Report",
              src: "/jbl/dispute-dw.png",
              alt: "Host dispute report comparing original and disputed claim amounts",
            },
            {
              label: "Final Report",
              src: "/jbl/security-deposit.png",
              alt: "Guest final report with bill summary and pay or decline",
            },
            {
              label: "Report Finalised",
              src: "/jbl/dispute.png",
              alt: "Confirmation that the dispute report is finalised",
            },
          ]),
        },
        {
          id: "jbl-hosts",
          number: "04",
          title: "Hosts",
          paragraph:
            "Who is on the platform — host records, the approval file, and how they hear about bookings and disputes.",
          slides: slides("window", [
            {
              label: "Manage Hosts",
              src: "/jbl/manage-hosts.png",
              alt: "Super Admin host list with dispute percentage and documents",
            },
            {
              label: "Approvals",
              src: "/jbl/host-approval.png",
              alt: "Host approval file with identity, bank, and card details",
            },
            {
              label: "Notifications",
              src: "/jbl/notifications.png",
              alt: "Notification settings for bookings, payments, and disputes",
            },
          ]),
        },
      ],
    },
    {
      id: "mobile",
      label: "Mobile",
      sections: [
        {
          id: "jbl-guest-app",
          number: "01",
          title: "Guest App",
          paragraph:
            "The same stay, in the hand — rating, current and past stays, and the booking with its payment.",
          slides: slides("device", [
            {
              label: "Dashboard",
              src: "/jbl/phone-dash.png",
              alt: "Mobile guest dashboard with rating and upcoming stay",
            },
            {
              label: "Stays",
              src: "/jbl/phone-stays.png",
              alt: "Mobile stays list filtered to current bookings",
            },
            {
              label: "Booking Details",
              src: "/jbl/phone-details.png",
              alt: "Mobile booking details with payment card and rental terms",
            },
          ]),
        },
      ],
    },
  ],
};
