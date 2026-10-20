"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";

/** Hero portrait plate — drifts down at ~30% of scroll speed so the
 * copy slides over it. Static under prefers-reduced-motion. */
export function HeroPlate({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 240]);

  return (
    <motion.div
      aria-hidden
      style={reduceMotion ? undefined : { y }}
      className="absolute inset-y-0 right-0 w-full md:w-3/5 lg:w-1/2"
    >
      {children}
    </motion.div>
  );
}
