import type { CaseStudy, CarouselSlide } from "@/lib/types";

/**
 * Wired from the Lowry Solutions web-app design file.
 * Overview opens the body, the Product/System views carry the work,
 * and Reflection stays pending until a reflection is authored.
 * // Case Study Content Placeholder — do not invent details here.
 *
 * Slide images are exports of the frames they name.
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
    { id: "reflection", title: "Reflection", status: "pending" },
  ],
  tabs: [
    {
      id: "product",
      label: "Product",
      sections: [
        {
          id: "product-dashboard",
          number: "01",
          title: "Dashboard",
          paragraph:
            "The operational home — asset value, condition, audit status, utilization, maintenance, and work orders read from one surface.",
          slides: slides("window", [
            {
              label: "Dashboard",
              src: "/lowry/dashboard.png",
              alt: "Lowry analytics dashboard with asset totals, type, and condition",
            },
            {
              label: "Audit Dashboard",
              src: "/lowry/dashboard-filtered.png",
              alt: "Audit dashboard filtered from January to August 2023",
            },
            {
              label: "Maintenance Calendar",
              src: "/lowry/maintenance-calendar.png",
              alt: "Scheduled maintenance calendar for September 2023",
            },
          ]),
        },
        {
          id: "product-assets",
          number: "02",
          title: "Assets",
          paragraph:
            "Every asset, from list to record — general information, purchase, funding, attachments, and depreciation, plus the actions that move it.",
          slides: slides("window", [
            {
              label: "Asset List",
              src: "/lowry/asset-list.png",
              alt: "Assets list with status, condition, and location",
            },
            {
              label: "Asset Detail",
              src: "/lowry/asset-detail.png",
              alt: "Asset detail for a camera, with identity, barcode, and status",
            },
            {
              label: "Purchase Details",
              src: "/lowry/purchase.png",
              alt: "Purchase details tab with vendor, order, warranty, and cost",
            },
            {
              label: "Funding",
              src: "/lowry/funding.png",
              alt: "Funding tab with current fund and funding history",
            },
            {
              label: "Depreciation",
              src: "/lowry/depreciation.png",
              alt: "Straight-line depreciation form for a new asset",
            },
            {
              label: "Check In",
              src: "/lowry/check-in.png",
              alt: "Check-in dialog with condition, comments, and signature",
            },
            {
              label: "Check Out",
              src: "/lowry/check-out.png",
              alt: "Check-out dialog for several selected assets",
            },
            {
              label: "Dispose",
              src: "/lowry/dispose.png",
              alt: "Dispose asset dialog with date, reason, and condition",
            },
          ]),
          notes: [
            "Straight line",
            "Double declining",
            "150% declining",
            "Sum of years",
            "Unit production",
          ],
        },
        {
          id: "product-audit-maintenance",
          number: "03",
          title: "Audit & Maintenance",
          paragraph:
            "Audits and upkeep on a shared rhythm — list, calendar, condition updates, and recurring schedules.",
          slides: slides("window", [
            {
              label: "Audit List",
              src: "/lowry/audit-assets.png",
              alt: "Audit assets list with pending and scheduled statuses",
            },
            {
              label: "Audit Calendar",
              src: "/lowry/audit-calendar.png",
              alt: "Monthly audit calendar with status colors",
            },
            {
              label: "Condition Update",
              src: "/lowry/condition.png",
              alt: "Condition update dialog for a laptop, with photo upload",
            },
            {
              label: "Maintenance Details",
              src: "/lowry/maintenance-details.png",
              alt: "Maintenance details tab with warranty, schedule, and assignee",
            },
          ]),
        },
        {
          id: "product-locations-reporting",
          number: "04",
          title: "Locations & Reporting",
          paragraph:
            "Where assets sit, who holds them, and what the operation needs to see — map, people, notifications, and reports.",
          slides: slides("window", [
            {
              label: "Locations",
              src: "/lowry/locations.png",
              alt: "Location hierarchy with a floor plan for Floor 1",
            },
            {
              label: "Map View",
              src: "/lowry/map.png",
              alt: "United States map of asset counts with location filters",
            },
            {
              label: "Users",
              src: "/lowry/users.png",
              alt: "User permissions for check-in, maintenance, and locations",
            },
            {
              label: "Notifications",
              src: "/lowry/notifications.png",
              alt: "Notification history grouped by critical, warning, and information",
            },
            {
              label: "Asset Report",
              src: "/lowry/asset-report.png",
              alt: "Asset report table with condition, status, and expiry",
            },
            {
              label: "Scheduled Reports",
              src: "/lowry/schedule-report.png",
              alt: "Scheduled reports list with repeat cadence and recipients",
            },
          ]),
        },
        {
          id: "product-outcomes",
          number: "05",
          title: "Outcomes",
          paragraph:
            "Designed the system end to end: dashboard, asset lifecycle, audits, maintenance, locations, users, reporting, and the component library behind web and mobile.",
        },
      ],
    },
    {
      id: "system",
      label: "System",
      sections: [
        {
          id: "system-foundations",
          number: "01",
          title: "Foundations",
          paragraph:
            "A shared icon library and status color — the marks and signals used across every Lowry surface.",
          slides: slides("grid", [
            {
              label: "Banners",
              src: "/lowry/banners.png",
              alt: "Status banners in primary, success, warning, and danger",
            },
            {
              label: "Alerts",
              src: "/lowry/alerts.png",
              alt: "Alert components across informational, success, warning, and danger",
            },
          ]),
        },
        {
          id: "system-components",
          number: "02",
          title: "Components",
          paragraph:
            "Buttons, inputs, and feedback — the controls the product is built from, in every size and state.",
          slides: slides("grid", [
            {
              label: "Buttons",
              src: "/lowry/buttons.png",
              alt: "Button sizes and states for primary, secondary, and tertiary",
            },
            {
              label: "Date Picker",
              src: "/lowry/datepicker.png",
              alt: "Date picker variants for a single day and a range",
            },
            {
              label: "Toasts",
              src: "/lowry/toasts.png",
              alt: "Toast messages for primary, info, success, warning, and danger",
            },
          ]),
        },
        {
          id: "system-patterns",
          number: "03",
          title: "Patterns",
          paragraph:
            "Navigation and the quiet states — sidebar, breadcrumbs, dialogs, and what the screen says when there is nothing to show.",
          slides: slides("frame", [
            {
              label: "Sidebar",
              src: "/lowry/sidebar.png",
              alt: "Collapsed and expanded sidebar, with Asset selected",
            },
            {
              label: "Empty States",
              src: "/lowry/empty.png",
              alt: "Empty states for no content, no internet, and no search results",
            },
          ]),
        },
        {
          id: "system-responsive",
          number: "04",
          title: "Responsive",
          paragraph:
            "The same system at the sizes specified in the file, plus a dedicated mobile UI.",
          slides: slides("device", [
            {
              label: "Desktop 1440",
              src: "/lowry/bp-1440.png",
              alt: "Asset detail laid out at desktop width",
            },
            {
              label: "Desktop 1280",
              src: "/lowry/bp-1280.png",
              alt: "The same asset detail tightened for a 1280-wide screen",
            },
            {
              label: "Tablet 960",
              src: "/lowry/bp-960.png",
              alt: "Asset detail reflowed for a 960-wide screen",
            },
            {
              label: "Compact 600",
              src: "/lowry/bp-600.png",
              alt: "Asset detail stacked for a 600-wide screen",
            },
            {
              label: "Mobile",
              src: "/lowry/phone.png",
              alt: "Mobile location list with a bottom navigation bar",
            },
          ]),
        },
      ],
    },
  ],
};
