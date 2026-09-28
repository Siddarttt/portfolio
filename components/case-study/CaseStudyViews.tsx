"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { CaseStudyTab } from "@/lib/types";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { EditorialSection } from "./EditorialSection";

/**
 * CaseStudyViews — the Product/GTM editorial split. One segmented
 * control, client-side only (no navigation, no page reload); the
 * active tab's sections crossfade in on the site's one motion voice.
 * Product is the default per the approved direction.
 */
export function CaseStudyViews({ tabs }: { tabs: CaseStudyTab[] }) {
  const [activeId, setActiveId] = useState(tabs[0]?.id);
  const reduceMotion = useReducedMotion();
  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  if (!active) return null;

  return (
    <div>
      <SegmentedControl
        label="Case study view"
        options={tabs.map((tab) => ({ id: tab.id, label: tab.label }))}
        value={active.id}
        onChange={setActiveId}
      />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active.id}
          role="tabpanel"
          initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.25, 0.6, 0.3, 1] }}
          className="mt-2xl flex flex-col gap-y-3xl lg:mt-3xl lg:gap-y-4xl"
        >
          {active.sections.map((section) => (
            <EditorialSection
              key={section.id}
              section={section}
              tabLabel={active.label}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
