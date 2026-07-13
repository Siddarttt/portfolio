import { Section } from "@/components/layout/Section";
import { site } from "@/content/site";

/**
 * Experience — the Timeline (design.md §11) as hairline editorial rows:
 * company + role left, period right. Paired with About as one spread
 * (About opens, Experience closes — no second section border).
 */
export function Experience() {
  return (
    <Section
      id="experience"
      label="Experience"
      index="03"
      space="close"
      bordered={false}
    >
      <ol>
        {site.experience.map((item) => (
          <li
            key={item.company}
            className="grid grid-cols-1 gap-y-xs border-t border-border py-lg md:grid-cols-[1fr_auto] md:gap-x-lg"
          >
            <div>
              <h3 className="text-h4">{item.company}</h3>
              <p className="mt-xs text-body text-muted">{item.title}</p>
            </div>
            <p className="text-caption text-muted tabular-nums md:pt-xs">
              {item.period}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
