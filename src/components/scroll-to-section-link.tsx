"use client";

import type { ReactNode } from "react";

export function ScrollToSectionLink({
  targetId,
  className,
  children,
}: {
  targetId: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={`#${targetId}`}
      className={className}
      onClick={(event) => {
        event.preventDefault();
        const reduced = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        document
          .getElementById(targetId)
          ?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
        history.replaceState(null, "", `#${targetId}`);
      }}
    >
      {children}
    </a>
  );
}
