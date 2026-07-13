/**
 * Section Heading — the theme's display title: an index row in the
 * technical label voice ("02 — SECTION"), then the title at display
 * scale with the theme's signature glyph treatment — first word solid
 * accent, remaining words outlined (transparent fill, accent stroke).
 * Semantically still one h2; the split spans are presentation only
 * and screen readers hear the plain title.
 */
export function SectionHeading({
  id,
  index,
  children,
}: {
  id: string;
  /** Two-digit section index, e.g. "01". */
  index?: string;
  /** The section title (plain string — it is split for the treatment). */
  children: string;
}) {
  const words = children.split(" ");
  const solid = words[0];
  const outlined = words.slice(1).join(" ");

  return (
    <div>
      {index ? (
        <p aria-hidden className="eyebrow">
          {index} — {children}
        </p>
      ) : null}
      <h2 id={id} className={`text-h1 ${index ? "mt-sm" : ""}`.trim()}>
        <span className="text-accent">{solid}</span>
        {outlined ? <span className="text-outline"> {outlined}</span> : null}
      </h2>
    </div>
  );
}
