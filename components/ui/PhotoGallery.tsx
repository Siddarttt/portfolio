import Image from "next/image";
import type { PhotoItem } from "@/lib/types";

/**
 * PhotoGallery — an automatic horizontal bento collage.
 *
 * The images array (content layer) is read as a rhythm and grouped
 * into bento columns:
 *   - a portrait        → one full-height anchor tile (3/4)
 *   - two landscapes    → a stacked pair (16/10 each)
 *   - a lone landscape  → one full-height cinematic wide tile
 * The column strip is duplicated and drifts continuously left
 * (CSS marquee, 90s loop, zero JS). Hover pauses the drift; under
 * prefers-reduced-motion the strip is a manually scrollable row.
 *
 * Height discipline: the strip is clamped via --strip-h so heading +
 * intro + collage always fit inside one viewport (the section must
 * never cross a window). All tile sizes derive from --strip-h.
 *
 * Reusable: drop images into `SiteContent.photography.gallery` —
 * order defines the rhythm; no layout logic changes.
 */

type Column =
  | { kind: "anchor"; items: [PhotoItem] }
  | { kind: "stack"; items: [PhotoItem, PhotoItem] }
  | { kind: "wide"; items: [PhotoItem] };

function buildColumns(images: PhotoItem[]): Column[] {
  const columns: Column[] = [];
  let i = 0;
  while (i < images.length) {
    const current = images[i];
    if (current.orientation === "portrait" || current.orientation === "square") {
      columns.push({ kind: "anchor", items: [current] });
      i += 1;
    } else if (images[i + 1] && images[i + 1].orientation === "landscape") {
      columns.push({ kind: "stack", items: [current, images[i + 1]] });
      i += 2;
    } else {
      columns.push({ kind: "wide", items: [current] });
      i += 1;
    }
  }
  return columns;
}

function Tile({
  item,
  style,
  sizes,
}: {
  item: PhotoItem;
  style: React.CSSProperties;
  sizes: string;
}) {
  return (
    <div
      className="relative overflow-hidden rounded-sm bg-surface"
      style={style}
    >
      {item.src ? (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes={sizes}
          className="object-cover"
        />
      ) : (
        <span className="eyebrow absolute inset-0 flex items-center justify-center border border-border">
          Pending
        </span>
      )}
    </div>
  );
}

function ColumnView({ column }: { column: Column }) {
  switch (column.kind) {
    case "anchor":
      return (
        <Tile
          item={column.items[0]}
          sizes="420px"
          style={{ height: "var(--strip-h)", aspectRatio: "3 / 4" }}
        />
      );
    case "stack":
      return (
        <div className="flex h-(--strip-h) flex-col gap-sm">
          {column.items.map((item, k) => (
            <Tile
              key={k}
              item={item}
              sizes="560px"
              style={{
                height: "calc((var(--strip-h) - var(--spacing-sm)) / 2)",
                aspectRatio: "16 / 10",
              }}
            />
          ))}
        </div>
      );
    case "wide":
      return (
        <Tile
          item={column.items[0]}
          sizes="800px"
          style={{ height: "var(--strip-h)", aspectRatio: "16 / 10" }}
        />
      );
  }
}

function Strip({ columns, hidden }: { columns: Column[]; hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden}
      className="flex shrink-0 gap-sm pr-sm"
    >
      {columns.map((column, i) => (
        <ColumnView key={i} column={column} />
      ))}
    </div>
  );
}

export function PhotoGallery({ images }: { images: PhotoItem[] }) {
  if (images.length === 0) return null;
  const columns = buildColumns(images);

  return (
    <div
      className="marquee-viewport overflow-hidden"
      style={
        {
          /* One-window budget: viewport minus header, section heading,
             intro and paddings. Clamped for sane floors/ceilings. */
          "--strip-h": "clamp(260px, calc(100svh - 430px), 540px)",
          maskImage:
            "linear-gradient(90deg, transparent, black 5%, black 95%, transparent)",
        } as React.CSSProperties
      }
      role="region"
      aria-label="Photography collage"
    >
      <div className="animate-marquee flex w-max">
        <Strip columns={columns} />
        {/* Second copy completes the -50% loop; hidden from AT. */}
        <Strip columns={columns} hidden />
      </div>
    </div>
  );
}
