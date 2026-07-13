import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

/**
 * Toolkit — the tool-card grid: tracked label, then rounded bordered
 * cards, each with a centered brand mark, the tool name in heavy
 * uppercase, and a tracked category caption. Cards are static (no
 * links) — this is an inventory, not navigation.
 *
 * Brand marks are hand-authored inline SVGs (24×24), simplified to
 * each tool's recognizable silhouette and brand color — no external
 * assets, nothing fetched. Monochrome marks inherit the ink color.
 * All are aria-hidden; the card's name is the accessible text.
 */

const markClass = "size-10";

const marks: Record<string, ReactNode> = {
  Figma: (
    <svg viewBox="0 0 24 24" aria-hidden className={markClass}>
      <path d="M12 2H8.5a3.5 3.5 0 0 0 0 7H12Z" fill="#f24e1e" />
      <path d="M12 2h3.5a3.5 3.5 0 0 1 0 7H12Z" fill="#ff7262" />
      <path d="M12 9H8.5a3.5 3.5 0 0 0 0 7H12Z" fill="#a259ff" />
      <circle cx="15.5" cy="12.5" r="3.5" fill="#1abcfe" />
      <path d="M12 16H8.5A3.5 3.5 0 1 0 12 19.5Z" fill="#0acf83" />
    </svg>
  ),
  Framer: (
    <svg viewBox="0 0 24 24" aria-hidden className={markClass}>
      <path
        d="M5 2h14v7h-7zM5 9h7l7 7H5zM5 16h7v6z"
        fill="currentColor"
      />
    </svg>
  ),
  Claude: (
    <svg viewBox="0 0 24 24" aria-hidden className={markClass}>
      <g stroke="#d97757" strokeWidth="2.4" strokeLinecap="round">
        <path d="M12 2.5v5M12 16.5v5M2.5 12h5M16.5 12h5M5.3 5.3l3.5 3.5M15.2 15.2l3.5 3.5M18.7 5.3l-3.5 3.5M8.8 15.2l-3.5 3.5" />
      </g>
    </svg>
  ),
  Antigravity: (
    <svg viewBox="0 0 24 24" aria-hidden className={markClass}>
      <defs>
        <linearGradient id="tk-ag" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#4285f4" />
          <stop offset="0.55" stopColor="#a142f4" />
          <stop offset="1" stopColor="#f49542" />
        </linearGradient>
      </defs>
      <path
        d="M3 20 10.8 4.6a1.35 1.35 0 0 1 2.4 0L21 20"
        fill="none"
        stroke="url(#tk-ag)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Cursor: (
    <svg viewBox="0 0 24 24" aria-hidden className={markClass}>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      >
        <path d="M12 2l9 5v10l-9 5-9-5V7Z" />
        <path d="M3 7l9 5 9-5M12 12v10" opacity="0.55" />
      </g>
    </svg>
  ),
  "After Effects": (
    <svg viewBox="0 0 24 24" aria-hidden className={markClass}>
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#1f1147" />
      <text
        x="12"
        y="15.5"
        textAnchor="middle"
        fontFamily="inherit"
        fontWeight="700"
        fontSize="9.5"
        fill="#9f9ff6"
      >
        Ae
      </text>
    </svg>
  ),
  Photoshop: (
    <svg viewBox="0 0 24 24" aria-hidden className={markClass}>
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#001e36" />
      <text
        x="12"
        y="15.5"
        textAnchor="middle"
        fontFamily="inherit"
        fontWeight="700"
        fontSize="9.5"
        fill="#31a8ff"
      >
        Ps
      </text>
    </svg>
  ),
};

export function Toolkit() {
  return (
    <section
      id="toolkit"
      aria-labelledby="toolkit-heading"
      className="border-t border-border py-2xl"
    >
      <Container>
        <Reveal>
          <h2 id="toolkit-heading" className="eyebrow text-accent">
            05 — My Toolkit
          </h2>
        </Reveal>
        <ul className="mt-lg grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-4">
          {site.toolkit.map((tool, index) => (
            <li key={tool.name}>
              {/* Cards cascade in reading order, capped stagger. */}
              <Reveal delay={Math.min(index * 0.06, 0.3)} className="h-full">
                <div className="flex h-full flex-col items-center gap-sm rounded-md border border-border bg-surface px-md py-xl text-center">
                  {marks[tool.name] ?? null}
                  <p className="mt-xs font-heading text-body-lg font-extrabold uppercase">
                    {tool.name}
                  </p>
                  <p className="eyebrow">{tool.role}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
