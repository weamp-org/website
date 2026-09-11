import Link from "next/link";
import { LogoLink } from "@/components/logo-link";
import { ModeToggle } from "@/components/mode-toggle";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <LogoLink
          className="font-heading text-xl font-normal tracking-tight text-foreground"
        >
          WeAMP
        </LogoLink>
        <nav className="flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
