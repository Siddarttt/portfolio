"use client";

import { useEffect, useState } from "react";
import { Container } from "./Container";

/**
 * StatusBar — the theme's fixed bottom chrome: scroll progress in the
 * technical label voice, plus the theme swatch. Purely presentational
 * chrome (no content), aria-hidden so it stays out of the reading
 * order. rAF-throttled scroll listener; renders nothing beyond one
 * hairline row.
 */
export function StatusBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-x-0 bottom-0 z-(--z-header) border-t border-border bg-background"
    >
      <Container>
        <div className="flex h-10 items-center justify-between">
          <p className="eyebrow">
            Scrl <span className="text-foreground">{progress.toFixed(2)}</span>
          </p>
          <p className="eyebrow flex items-center gap-xs">
            Theme
            <span className="inline-block size-2 bg-accent" />
            <span className="text-accent">#C3FFFC</span>
          </p>
        </div>
      </Container>
    </div>
  );
}
