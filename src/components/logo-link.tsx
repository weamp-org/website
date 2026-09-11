"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function LogoLink({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      className={className}
      onClick={(event) => {
        if (pathname === "/") {
          event.preventDefault();
          const reduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
          ).matches;
          window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
          history.replaceState(null, "", "/");
        }
      }}
    >
      {children}
    </Link>
  );
}
