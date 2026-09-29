import { Fragment } from "react";
import type { CaseStudy } from "@/lib/types";
import { Container } from "@/components/layout/Container";
import { ProcessStep } from "./ProcessStep";

/**
 * Case study opening — the publication's chapter title page.
 * Eyebrow subtitle, H1 title (56px scale), then the meta ledger and
 * optional process sequence hanging from the editorial spine.
 * Role and responsibilities live here (approved resolution: Role is
 * header metadata, not a body section). Summary is NOT shown here —
 * the Overview section opens the body; repeating it would duplicate.
 */
export function CaseStudyHeader({ study }: { study: CaseStudy }) {
  return (
    <header className="pt-3xl pb-2xl lg:pt-4xl">
      <Container>
        <p className="eyebrow">{study.subtitle}</p>
        <h1 className="mt-md max-w-[16ch] text-h1">{study.title}</h1>

        <div className="mt-2xl grid grid-cols-1 gap-y-md lg:grid-cols-12 lg:gap-x-md">
          <dl className="grid grid-cols-1 gap-y-xs md:grid-cols-[auto_1fr] md:gap-x-lg md:gap-y-sm lg:col-span-6 lg:col-start-7">
            {study.facts ? (
              study.facts.map((fact) => (
                <Fragment key={fact.label}>
                  <dt className="text-caption text-muted first:mt-0 mt-sm md:mt-0">
                    {fact.label}
                  </dt>
                  <dd className="text-body">{fact.value}</dd>
                </Fragment>
              ))
            ) : (
              <>
                <dt className="text-caption text-muted">Role</dt>
                <dd className="text-body">{study.role}</dd>
                <dt className="mt-sm text-caption text-muted md:mt-0">
                  Responsibilities
                </dt>
                <dd className="text-body text-muted">
                  {study.responsibilities.join(" · ")}
                </dd>
                <dt className="mt-sm text-caption text-muted md:mt-0">Domain</dt>
                <dd className="text-body text-muted">{study.tags.join(" · ")}</dd>
              </>
            )}
            {study.process ? (
              <>
                <dt className="mt-sm text-caption text-muted md:mt-0">
                  Process
                </dt>
                <dd>
                  <ProcessStep steps={study.process} />
                </dd>
              </>
            ) : null}
          </dl>
        </div>
      </Container>
    </header>
  );
}
