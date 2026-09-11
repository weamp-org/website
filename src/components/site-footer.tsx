import Link from "next/link";
import {
  FaLinkedin,
  FaGithub,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/weamp/",
    Icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/weamp-org",
    Icon: FaGithub,
  },
  {
    label: "X",
    href: "https://x.com/weamp_org",
    Icon: FaXTwitter,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@weamp-org",
    Icon: FaYoutube,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/weamp_org",
    Icon: FaInstagram,
  },
];

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:px-6">
        <Link
          href="/"
          className="font-heading text-lg font-normal tracking-tight text-foreground"
        >
          WeAMP
        </Link>
        <nav aria-label="Footer">
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
        </nav>
        <ul className="flex items-center gap-5">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground">&copy; 2026 WeAMP</p>
      </div>
    </footer>
  );
}
