"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Reveal — the site's one scroll-entrance: fade + 8px rise, 400ms,
 * quiet ease, played once. Values mirror the CSS tokens
 * (--duration-slow, --ease-out-quiet, --spacing-xs); Framer Motion
 * cannot read CSS custom properties for spring-free tweens, so they
 * are restated here — change tokens and this file together.
 * Under prefers-reduced-motion the wrapper renders static content.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  /** Seconds; use 0.15 steps (mirrors --duration-fast). */
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.4, ease: [0.25, 0.6, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
