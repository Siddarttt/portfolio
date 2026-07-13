import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { CaseStudy } from "@/lib/types";
import { Container } from "@/components/layout/Container";
import { projects } from "@/content/projects";

/**
 * Case study closing navigation: quiet return to Selected Work,
 * accent-voiced continuation to the next project. Arrows keep the
 * site's truthful direction language (left = back, right = onward).
 */
export function CaseStudyNav({ current }: { current: CaseStudy }) {
  const index = projects.findIndex((p) => p.slug === current.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <nav aria-label="Case study navigation" className="mt-3xl border-t border-border">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-md py-2xl">
          <Link
            href="/#work"
            className="group inline-flex h-12 items-center gap-xs text-body text-muted transition-colors duration-(--duration-fast) ease-out-quiet hover:text-foreground"
          >
            <ArrowLeft
              aria-hidden
              className="size-icon-sm transition-transform duration-(--duration-fast) ease-out-quiet group-hover:-translate-x-0.5"
            />
            All work
          </Link>
          {next && next.slug !== current.slug ? (
            <Link
              href={`/work/${next.slug}`}
              className="group inline-flex h-12 items-center gap-xs font-body text-body font-bold text-accent underline-offset-4 transition-colors duration-(--duration-fast) ease-out-quiet hover:underline"
            >
              Next: {next.title}
              <ArrowRight
                aria-hidden
                className="size-icon-sm transition-transform duration-(--duration-fast) ease-out-quiet group-hover:translate-x-0.5"
              />
            </Link>
          ) : null}
        </div>
      </Container>
    </nav>
  );
}
