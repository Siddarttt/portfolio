"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { CarouselSlide } from "@/lib/types";
import { EditorialPlaceholder } from "./EditorialPlaceholder";

/**
 * EditorialCarousel — the one reusable carousel for the site. Every
 * case-study section passes its own slide data; this component owns
 * autoplay, gesture, keyboard and motion behavior so nothing is
 * reimplemented per section.
 *
 * Only the active slide is ever mounted (AnimatePresence, keyed by
 * index) — that's the lazy-loading story for real assets later, and
 * the fixed aspect-video frame means swapping slides never shifts
 * layout. Motion mirrors the site's one sanctioned effect (fade +
 * translate, quiet ease) and is fully disabled under
 * prefers-reduced-motion, where autoplay also stops.
 */
const AUTOPLAY_MS = 3000;
const SWIPE_THRESHOLD = 40;

export function EditorialCarousel({
  slides,
  ariaLabel,
  categoryLabel,
}: {
  slides: CarouselSlide[];
  ariaLabel: string;
  categoryLabel: string;
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const touchStartX = useRef<number | null>(null);
  const count = slides.length;

  const go = useCallback(
    (delta: number) => {
      setDirection(delta);
      setIndex((i) => (i + delta + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (paused || reduceMotion || count <= 1) return;
    const id = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, reduceMotion, count, go]);

  if (count === 0) return null;
  const slide = slides[index];

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      tabIndex={0}
      className="group/carousel relative outline-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          go(1);
        } else if (event.key === "ArrowLeft") {
          event.preventDefault();
          go(-1);
        }
      }}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0].clientX;
      }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null) return;
        const delta = event.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(delta) > SWIPE_THRESHOLD) go(delta < 0 ? 1 : -1);
        touchStartX.current = null;
      }}
    >
      <div className="relative aspect-video overflow-hidden rounded-sm border border-border bg-surface">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={slide.id}
            custom={direction}
            initial={
              reduceMotion
                ? undefined
                : { opacity: 0, x: 24 * direction }
            }
            animate={{ opacity: 1, x: 0 }}
            exit={
              reduceMotion ? undefined : { opacity: 0, x: -24 * direction }
            }
            transition={{ duration: 0.25, ease: [0.25, 0.6, 0.3, 1] }}
            className="absolute inset-0"
          >
            {slide.src ? (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1280px) 1184px, 100vw"
                className="object-contain"
              />
            ) : (
              <EditorialPlaceholder
                label={slide.label}
                index={index}
                category={categoryLabel}
                motif={slide.motif}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {count > 1 ? (
          <>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => go(-1)}
              className="absolute top-1/2 left-sm flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground opacity-100 transition-opacity duration-(--duration-fast) ease-out-quiet md:opacity-0 md:group-hover/carousel:opacity-100"
            >
              <ChevronLeft aria-hidden className="size-icon-md" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => go(1)}
              className="absolute top-1/2 right-sm flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground opacity-100 transition-opacity duration-(--duration-fast) ease-out-quiet md:opacity-0 md:group-hover/carousel:opacity-100"
            >
              <ChevronRight aria-hidden className="size-icon-md" />
            </button>
          </>
        ) : null}
      </div>

      <p className="eyebrow mt-sm tabular-nums">
        {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
      </p>
    </div>
  );
}
