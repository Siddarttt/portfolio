/**
 * Case Study Content Placeholder — design.md §11 names this component.
 *
 * Rendered wherever a section exists in the canonical editorial
 * structure but has no authored content in the source markdown.
 * Deliberately visible and unambiguous — the same plate voice as the
 * pending imagery frames. Never lorem ipsum, never invented details.
 * Disappears automatically when the section's status flips to
 * "complete" in the content layer.
 */
export function ContentPlaceholder({ sectionTitle }: { sectionTitle: string }) {
  return (
    <div
      role="note"
      data-placeholder="case-study-content"
      className="rounded-sm border border-border bg-surface px-md py-md"
    >
      <p className="text-caption text-muted">
        {sectionTitle} — content pending. To be authored from project
        source material during the enrichment phase.
      </p>
    </div>
  );
}
