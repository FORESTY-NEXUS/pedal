import Link from "next/link";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Facilities", href: "#facilities" },
  { label: "Membership", href: "#membership" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="border-t border-line py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <span className="text-lg font-bold tracking-tight text-ink">
            Pedal&amp;Co
          </span>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ink-muted transition-colors hover:text-court"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            {SOCIALS.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-ink-muted transition-colors hover:text-court"
              >
                <social.icon className="h-5 w-5" strokeWidth={1.5} />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-line pt-8 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>Islamabad, Pakistan</p>
          <p>© {new Date().getFullYear()} Pedal&amp;Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
