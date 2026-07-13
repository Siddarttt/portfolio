import type { ReactNode } from "react";

/**
 * Layout container — design.md §10.
 * 1280px max content width, gutters from the §9 spacing set
 * (24px mobile → 48px desktop). Desktop-first, collapses naturally.
 */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      data-slot="container"
      className={`mx-auto w-full max-w-(--container-content) px-md lg:px-xl ${className}`.trim()}
    >
      {children}
    </div>
  );
}
