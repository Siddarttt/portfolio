import type { CaseStudy, CaseStudyMedia } from "@/lib/types";

/**
 * Same narrative shape as Scanflow: overview, problem, research,
 * then each solution with the frames already exported from the JBL file.
 * Copy is the existing case-study text. No new claims.
 */

function frame(
  src: string,
  alt: string,
  width: number,
  height: number,
): CaseStudyMedia {
  return { type: "image", src, alt, width, height };
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
      id: "problem-statement",
      title: "Problem Statement",
      status: "complete",
      paragraphs: [
        "Design a scalable platform supporting Super Admins, Hosts, and Guests while simplifying complex business logic.",
      ],
    },
    {
      id: "research-insights",
      title: "Research & Insights",
      status: "complete",
      paragraphs: [
        "Mapped the damage claims journey and identified opportunities to replace fragmented manual processes with a unified digital experience.",
        "Studied property management workflows, claims handling, user roles, and operational requirements.",
        "Role-based navigation for:",
      ],
      bullets: ["Super Admin", "Host", "Guest"],
    },
    {
      id: "solution",
      title: "Solution",
      status: "complete",
      features: [
        {
          title: "Dashboards",
          paragraphs: [
            "Super Admin, host, and guest each get a home — claims and fees for the admin, properties and bookings for the host, stays for the guest.",
          ],
          media: [
            frame(
              "/jbl/super-admin.png",
              "Super Admin analytics with claims, disputes, and fee breakdown",
              1024,
              670,
            ),
            frame(
              "/jbl/guest-dash.png",
              "Guest dashboard with rating, upcoming stay, and reviews",
              1024,
              641,
            ),
            frame(
              "/jbl/properties.png",
              "Host properties table with beds, guests, and documents",
              1024,
              729,
            ),
            frame(
              "/jbl/bookings.png",
              "Current bookings with guest rating and protection status",
              1024,
              729,
            ),
          ],
        },
        {
          title: "Verification",
          paragraphs: [
            "Getting in, and proving who is arriving — host or guest login, then the booking's identity check.",
          ],
          media: [
            frame(
              "/jbl/login.png",
              "Guest login with identification number and password",
              1024,
              641,
            ),
            frame(
              "/jbl/verify.png",
              "Booking verification dialog to upload a passport or driver's license",
              1024,
              641,
            ),
          ],
        },
        {
          title: "Claims",
          paragraphs: [
            "From the incident walkthrough to the dispute and the final bill — damages, fines, waiver cover, and what is left to pay.",
          ],
          media: [
            frame(
              "/jbl/incident.png",
              "Incident report walkthrough for a damage-waiver claim",
              1024,
              729,
            ),
            frame(
              "/jbl/dispute-dw.png",
              "Host dispute report comparing original and disputed claim amounts",
              1024,
              729,
            ),
            frame(
              "/jbl/security-deposit.png",
              "Guest final report with bill summary and pay or decline",
              1024,
              640,
            ),
            frame(
              "/jbl/dispute.png",
              "Confirmation that the dispute report is finalised",
              1024,
              729,
            ),
          ],
        },
        {
          title: "Hosts",
          paragraphs: [
            "Who is on the platform — host records, the approval file, and how they hear about bookings and disputes.",
          ],
          media: [
            frame(
              "/jbl/manage-hosts.png",
              "Super Admin host list with dispute percentage and documents",
              1024,
              670,
            ),
            frame(
              "/jbl/host-approval.png",
              "Host approval file with identity, bank, and card details",
              1024,
              670,
            ),
            frame(
              "/jbl/notifications.png",
              "Notification settings for bookings, payments, and disputes",
              1024,
              670,
            ),
          ],
        },
        {
          title: "Guest App",
          paragraphs: [
            "The same stay, in the hand — rating, current and past stays, and the booking with its payment.",
          ],
          media: [
            frame(
              "/jbl/phone-dash.png",
              "Mobile guest dashboard with rating and upcoming stay",
              360,
              800,
            ),
            frame(
              "/jbl/phone-stays.png",
              "Mobile stays list filtered to current bookings",
              360,
              800,
            ),
            frame(
              "/jbl/phone-details.png",
              "Mobile booking details with payment card and rental terms",
              360,
              800,
            ),
          ],
        },
        {
          title: "Design System",
          paragraphs: [
            "Reusable components including tables, forms, cards, notifications, billing summaries, charts, status tags, and modals.",
          ],
        },
      ],
    },
    {
      id: "outcomes",
      title: "Outcomes",
      status: "complete",
      paragraphs: [
        "Designed 100+ high-fidelity screens that improved transparency, operational efficiency, and consistency across the platform.",
      ],
      closing: [
        "This project deepened my understanding of enterprise dashboards, multi-role experiences, and designing for operational clarity.",
      ],
    },
  ],
};
