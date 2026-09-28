import type { CaseStudy } from "@/lib/types";
import { scanflow } from "./scanflow";
import { justBeLekker } from "./just-be-lekker";
import { lowry } from "./lowry";

/** Ordered as they appear in Selected Work (per content.md). */
export const projects: CaseStudy[] = [scanflow, justBeLekker, lowry];

export function getProject(slug: string): CaseStudy | undefined {
  return projects.find((p) => p.slug === slug);
}
