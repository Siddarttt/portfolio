import type { CaseStudy } from "@/lib/types";

/**
 * Copy is taken from the Scanflow retail-navigation case study,
 * kept line for line. Imagery is the opening still, the task-flow
 * diagram, and the three solution clips from that page.
 */
export const scanflow: CaseStudy = {
  slug: "scanflow",
  title: "Scanflow",
  subtitle: "Retail Navigation Inside Stores",
  tags: ["Mobile Android & IOS"],
  summary:
    "Scanflow is a mobile-first retail system that connects navigation, product discovery, and checkout into a single continuous journey. By reducing the time spent searching and eliminating friction at key moments, it enables faster decisions, higher conversion, and a more efficient in-store experience.",
  role: "UX Strategy, Research, Interaction Design",
  responsibilities: [
    "UX Strategy",
    "Research",
    "Interaction Design",
  ],
  facts: [
    { label: "Role", value: "UX Strategy, Research, Interaction Design" },
    { label: "Platform", value: "Mobile Android & IOS" },
    { label: "Duration", value: "2 Months" },
    { label: "Team", value: "Sole contributor" },
  ],
  sections: [
    {
      id: "overview",
      title: "Overview",
      status: "complete",
      paragraphs: [
        "Scanflow is a mobile-first retail system that connects navigation, product discovery, and checkout into a single continuous journey. By reducing the time spent searching and eliminating friction at key moments, it enables faster decisions, higher conversion, and a more efficient in-store experience.",
      ],
    },
    {
      id: "problem-statement",
      title: "Problem Statement",
      status: "complete",
      paragraphs: [
        "In large retail environments, users struggle to translate intent into action. While discovering products digitally is effortless, locating them inside a store becomes time-consuming and mentally demanding.",
        "This disconnect leads to delayed decisions, reduced confidence at the shelf, and in many cases, purchase abandonment. From a business perspective, these inefficiencies reduce conversion rates, impact average order value, and increase operational dependency on staff.",
      ],
    },
    {
      id: "research-insights",
      title: "Research & Insights",
      status: "complete",
      paragraphs: [
        "The Approach",
        "I conducted a mixed-methods study involving 12 contextual inquiries (in-store observations) and 20 semi-structured interviews. I focused on the \"Path to Purchase\" for high-intent shoppers in big-box retail environments.",
        "Key Findings & Data Points",
      ],
      bullets: [
        "The Search Tax: 65% of users spent an average of 4.2 minutes searching for a single non-staple item. This \"search fatigue\" directly correlated with a 20% drop in planned secondary purchases.",
        "Comparison Gap: 8 out of 10 users exited the store's ecosystem to use Google or Amazon for price/ingredient comparisons, creating a \"moment of exit\" where they were susceptible to competitor ads.",
        "Checkout Friction: Observational data showed that when a queue exceeded 5 people, 15% of shoppers with fewer than 3 items abandoned their carts entirely.",
      ],
      closing: [
        "Insights",
        "Friction isn't just an annoyance, it’s a measurable leak in the conversion funnel. Every minute spent \"searching\" is a minute less spent \"discovering.\"",
      ],
    },
    {
      id: "user-flow",
      title: "User Flow",
      status: "complete",
      paragraphs: [
        "Search → Navigate → Scan → Decide → Checkout",
        "A single continuous journey that supports users from intent to purchase without interruption.",
      ],
      media: {
        type: "image",
        src: "/scanflow/user-flow.png",
        alt: "Task flow from the supermarket home page through navigation, barcode scan, cart, checkout, payment, and receipt",
        width: 2880,
        height: 1008,
      },
    },
    {
      id: "solution",
      title: "Solution",
      status: "complete",
      features: [
        {
          title: "Smart Indoor Navigation",
          paragraphs: [
            "INTRODUCED:",
            "A real-time indoor navigation system that guides users to products with aisle-level precision.",
            "HOW IT WORKS:",
            "Users search for a product and follow a continuously updated path within the store, supported by a persistent mini-map for orientation.",
            "DECISIONS:",
            "Focused on contextual directions instead of full maps to reduce cognitive load and simplify wayfinding.",
          ],
          media: {
            type: "video",
            src: "/scanflow/navigation.mp4",
            alt: "Map view of a store with aisle pins and a shopping list for flour tortilla, cheddar, sour cream, and vegetable oil",
          },
        },
        {
          title: "AR-Enabled Product Exploration",
          paragraphs: [
            "INTRODUCED:",
            "An AR-based layer that provides contextual product information directly at the shelf.",
            "HOW IT WORKS:",
            "Users scan products to view pricing, ingredients, ratings, and alternatives, enabling quick comparison and confident decisions.",
            "DECISIONS:",
            "Designed as an on-demand interaction to keep the interface minimal and ensure information appears only when needed.",
          ],
          media: {
            type: "video",
            src: "/scanflow/exploration.mp4",
            alt: "Camera view down a supermarket aisle with a Flour Tortilla label and a path on the floor",
          },
        },
        {
          title: "Autonomous Checkout",
          paragraphs: [
            "INTRODUCED:",
            "A seamless in-app checkout experience that eliminates physical queues.",
            "HOW IT WORKS:",
            "Users add items via scan or selection, review their cart, and complete payment within the app, receiving a digital receipt instantly.",
            "DECISIONS:",
            "Structured the flow into simple steps to maintain momentum and reduce drop-offs during checkout.",
          ],
          media: {
            type: "video",
            src: "/scanflow/checkout.mp4",
            alt: "Payment screen with a cart of cheddar, vegetable oil, sour cream, and flour tortilla, plus subtotal and grand total",
          },
        },
      ],
    },
    {
      id: "impact",
      title: "Impact & Sucess Metrics",
      status: "complete",
      paragraphs: [
        "Framework",
        "To evaluate Scanflow's effectiveness, I defined success through three core pillars: User Efficiency, Commercial Conversion, and Operational Scale.",
        "Projected Impact",
      ],
      bullets: [
        "Reduced Time-to-Task: Expected 35% reduction in the time taken to locate products, moving the average from 4.2 minutes to under 2.5 minutes per item.",
        "Increased Basket Size (AOV): By integrating contextual AR recommendations at the shelf, we aim for a 12% lift in Average Order Value via cross-selling (e.g., suggesting batteries when a user scans a toy).",
        "Lower Abandonment Rate: Implementing Autonomous Checkout is projected to decrease \"Queue Abandonment\" by 40%, capturing revenue that was previously lost to physical wait times.",
        "Operational Efficiency: Estimated 15% reduction in \"location-based\" staff inquiries, allowing floor associates to focus on high-value customer service and inventory management.",
      ],
    },
  ],
};
