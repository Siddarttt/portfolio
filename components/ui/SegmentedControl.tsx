"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * SegmentedControl — a native-feeling view switch (e.g. Product / GTM).
 * Hairline pill, quiet ink-invert on the active label; the fill slides
 * between options via a shared layoutId instead of crossfading, tuned
 * to a plain tween so it never springs or bounces.
 */
export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  label,
}: {
  options: { id: T; label: string }[];
  value: T;
  onChange: (id: T) => void;
  label: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      role="tablist"
      aria-label={label}
      className="inline-flex items-center gap-xs rounded-full border border-border p-xs"
    >
      {options.map((option) => {
        const active = option.id === value;
        return (
          <button
            key={option.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(option.id)}
            className="relative rounded-full px-md py-xs text-caption uppercase tracking-eyebrow"
          >
            {active ? (
              <motion.span
                layoutId="segmented-active"
                className="absolute inset-0 rounded-full bg-foreground"
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { duration: 0.25, ease: [0.25, 0.6, 0.3, 1] }
                }
              />
            ) : null}
            <span
              className={`relative z-10 transition-colors duration-(--duration-fast) ease-out-quiet ${
                active ? "text-background" : "text-muted hover:text-foreground"
              }`}
            >
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
