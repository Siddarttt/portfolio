import {
  AppWindow,
  Clapperboard,
  Code2,
  FileText,
  LayoutGrid,
  Share2,
  Smartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { CarouselMotif } from "@/lib/types";

/**
 * EditorialPlaceholder — a presentation-board stand-in for a carousel
 * slide whose real asset isn't ready yet. Same restrained materials as
 * the rest of the theme (surface fill, hairline border, the
 * text-outline signature glyph) — never a grey box, never invented
 * imagery. Swapped for a real image the moment a slide gets a `src`.
 */
const motifIcon: Record<CarouselMotif, LucideIcon> = {
  grid: LayoutGrid,
  flow: Workflow,
  device: Smartphone,
  window: AppWindow,
  document: FileText,
  frame: Clapperboard,
  code: Code2,
  social: Share2,
};

export function EditorialPlaceholder({
  label,
  index,
  category,
  motif,
}: {
  label: string;
  /** Zero-based position within the carousel. */
  index: number;
  /** e.g. "Product · Design System". */
  category: string;
  motif: CarouselMotif;
}) {
  const Icon = motifIcon[motif];

  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-surface p-lg">
      <span
        aria-hidden
        className="text-outline pointer-events-none absolute -top-6 -right-3 select-none font-heading text-[7rem] leading-none font-black md:text-[9rem]"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative flex items-center gap-xs">
        <Icon aria-hidden className="size-icon-md text-muted" />
        <p className="eyebrow">{category}</p>
      </div>

      <p className="relative max-w-[18ch] font-heading text-h4 font-bold uppercase">
        {label}
      </p>
    </div>
  );
}
