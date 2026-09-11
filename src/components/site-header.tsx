"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { LogoLink } from "@/components/logo-link";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Links close the menu via onClick below — no pathname effect needed.

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open ]);

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <LogoLink className="font-heading text-xl font-normal tracking-tight text-foreground">
          WeAMP
        </LogoLink>
        <div className="flex items-center gap-1 sm:gap-2">
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "inline-flex min-h-11 items-center py-2 text-sm transition-colors hover:text-foreground",
                        active
                          ? "text-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon-lg"
            className="md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t bg-background md:hidden"
        >
          <ul className="mx-auto flex w-full max-w-6xl flex-col px-4 py-2 sm:px-6">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex min-h-12 items-center border-b px-2 text-base transition-colors last:border-b-0 hover:text-foreground",
                      active
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
