import type { CaseStudy, CaseStudyMedia } from "@/lib/types";

/**
 * Same narrative shape as Scanflow: overview, then each part of the
 * product with the frames already exported from the Lowry file.
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

export const lowry: CaseStudy = {
  slug: "lowry",
  title: "Lowry",
  subtitle: "Asset Management Platform",
  tags: ["Enterprise UX", "Dashboard Design", "Design Systems"],
  summary:
    "Enterprise asset management platform for Lowry Solutions — inventory, audits, maintenance, locations, and work orders in one operational system.",
  role: "UX Designer",
  responsibilities: [
    "Product Design",
    "Information Architecture",
    "Dashboard Design",
    "Design System",
    "Responsive Design",
  ],
  /* Stage labels from the file cover: Exploration through Live. */
  process: [
    "Exploration",
    "Research",
    "Wireframe",
    "Design",
    "Testing",
    "Dev",
    "QA",
    "Live",
  ],
  sections: [
    {
      id: "overview",
      title: "Overview",
      status: "complete",
      paragraphs: [
        "Enterprise asset management platform for Lowry Solutions — inventory, audits, maintenance, locations, and work orders in one operational system.",
      ],
    },
    {
      id: "solution",
      title: "Solution",
      status: "complete",
      features: [
        {
          title: "Dashboard",
          paragraphs: [
            "The operational home — asset value, condition, audit status, utilization, maintenance, and work orders read from one surface.",
          ],
          media: [
            frame(
              "/lowry/dashboard.png",
              "Lowry analytics dashboard with asset totals, type, and condition",
              1024,
              729,
            ),
            frame(
              "/lowry/dashboard-filtered.png",
              "Audit dashboard filtered from January to August 2023",
              1024,
              729,
            ),
            frame(
              "/lowry/maintenance-calendar.png",
              "Scheduled maintenance calendar for September 2023",
              1024,
              751,
            ),
          ],
        },
        {
          title: "Assets",
          paragraphs: [
            "Every asset, from list to record — general information, purchase, funding, attachments, and depreciation, plus the actions that move it.",
          ],
          bullets: [
            "Straight line",
            "Double declining",
            "150% declining",
            "Sum of years",
            "Unit production",
          ],
          media: [
            frame(
              "/lowry/asset-list.png",
              "Assets list with status, condition, and location",
              1024,
              730,
            ),
            frame(
              "/lowry/asset-detail.png",
              "Asset detail for a camera, with identity, barcode, and status",
              1024,
              835,
            ),
            frame(
              "/lowry/purchase.png",
              "Purchase details tab with vendor, order, warranty, and cost",
              1024,
              728,
            ),
            frame(
              "/lowry/funding.png",
              "Funding tab with current fund and funding history",
              1024,
              750,
            ),
            frame(
              "/lowry/depreciation.png",
              "Straight-line depreciation form for a new asset",
              1024,
              729,
            ),
            frame(
              "/lowry/check-in.png",
              "Check-in dialog with condition, comments, and signature",
              753,
              1024,
            ),
            frame(
              "/lowry/check-out.png",
              "Check-out dialog for several selected assets",
              753,
              1024,
            ),
            frame(
              "/lowry/dispose.png",
              "Dispose asset dialog with date, reason, and condition",
              753,
              1024,
            ),
          ],
        },
        {
          title: "Audit & Maintenance",
          paragraphs: [
            "Audits and upkeep on a shared rhythm — list, calendar, condition updates, and recurring schedules.",
          ],
          media: [
            frame(
              "/lowry/audit-assets.png",
              "Audit assets list with pending and scheduled statuses",
              1024,
              729,
            ),
            frame(
              "/lowry/audit-calendar.png",
              "Monthly audit calendar with status colors",
              1024,
              726,
            ),
            frame(
              "/lowry/condition.png",
              "Condition update dialog for a laptop, with photo upload",
              751,
              1024,
            ),
            frame(
              "/lowry/maintenance-details.png",
              "Maintenance details tab with warranty, schedule, and assignee",
              1024,
              728,
            ),
          ],
        },
        {
          title: "Locations & Reporting",
          paragraphs: [
            "Where assets sit, who holds them, and what the operation needs to see — map, people, notifications, and reports.",
          ],
          media: [
            frame(
              "/lowry/locations.png",
              "Location hierarchy with a floor plan for Floor 1",
              1024,
              730,
            ),
            frame(
              "/lowry/map.png",
              "United States map of asset counts with location filters",
              1024,
              729,
            ),
            frame(
              "/lowry/users.png",
              "User permissions for check-in, maintenance, and locations",
              1024,
              842,
            ),
            frame(
              "/lowry/notifications.png",
              "Notification history grouped by critical, warning, and information",
              1024,
              700,
            ),
            frame(
              "/lowry/asset-report.png",
              "Asset report table with condition, status, and expiry",
              1024,
              729,
            ),
            frame(
              "/lowry/schedule-report.png",
              "Scheduled reports list with repeat cadence and recipients",
              1024,
              729,
            ),
          ],
        },
        {
          title: "Foundations",
          paragraphs: [
            "A shared icon library and status color — the marks and signals used across every Lowry surface.",
          ],
          media: [
            frame(
              "/lowry/banners.png",
              "Status banners in primary, success, warning, and danger",
              1024,
              237,
            ),
            frame(
              "/lowry/alerts.png",
              "Alert components across informational, success, warning, and danger",
              1024,
              310,
            ),
          ],
        },
        {
          title: "Components",
          paragraphs: [
            "Buttons, inputs, and feedback — the controls the product is built from, in every size and state.",
          ],
          media: [
            frame(
              "/lowry/buttons.png",
              "Button sizes and states for primary, secondary, and tertiary",
              1024,
              656,
            ),
            frame(
              "/lowry/datepicker.png",
              "Date picker variants for a single day and a range",
              1024,
              341,
            ),
            frame(
              "/lowry/toasts.png",
              "Toast messages for primary, info, success, warning, and danger",
              1024,
              210,
            ),
          ],
        },
        {
          title: "Patterns",
          paragraphs: [
            "Navigation and the quiet states — sidebar, breadcrumbs, dialogs, and what the screen says when there is nothing to show.",
          ],
          media: [
            frame(
              "/lowry/sidebar.png",
              "Collapsed and expanded sidebar, with Asset selected",
              1024,
              760,
            ),
            frame(
              "/lowry/empty.png",
              "Empty states for no content, no internet, and no search results",
              1024,
              349,
            ),
          ],
        },
        {
          title: "Responsive",
          paragraphs: [
            "The same system at the sizes specified in the file, plus a dedicated mobile UI.",
          ],
          media: [
            frame(
              "/lowry/bp-1440.png",
              "Asset detail laid out at desktop width",
              1024,
              819,
            ),
            frame(
              "/lowry/bp-1280.png",
              "The same asset detail tightened for a 1280-wide screen",
              1024,
              921,
            ),
            frame(
              "/lowry/bp-960.png",
              "Asset detail reflowed for a 960-wide screen",
              658,
              1024,
            ),
            frame(
              "/lowry/bp-600.png",
              "Asset detail stacked for a 600-wide screen",
              413,
              1024,
            ),
            frame(
              "/lowry/phone.png",
              "Mobile location list with a bottom navigation bar",
              360,
              801,
            ),
          ],
        },
      ],
    },
    {
      id: "outcomes",
      title: "Outcomes",
      status: "complete",
      paragraphs: [
        "Designed the system end to end: dashboard, asset lifecycle, audits, maintenance, locations, users, reporting, and the component library behind web and mobile.",
      ],
    },
  ],
};
