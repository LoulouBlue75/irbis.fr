import Link from "next/link";
import { Logo } from "./Logo";

const footerSections = [
  {
    title: "Services",
    links: [
      { href: "/executive-search", label: "Executive Search" },
      { href: "/tailor-shift", label: "Tailor Shift" },
      { href: "/paris", label: "Paris" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/approach", label: "Approach" },
      { href: "/references", label: "References" },
    ],
  },
  {
    title: "Connect",
    links: [
      { href: "/contact", label: "Contact" },
      {
        href: "https://linkedin.com",
        label: "LinkedIn",
        external: true,
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#0F1A2E] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo column */}
          <div>
            <Logo variant="light" className="mb-4" />
            <p className="text-sm text-[#CFC8BB]">
              Executive search with adaptive precision.
            </p>
          </div>

          {/* Navigation columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4 text-sm">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#CFC8BB] hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-[#CFC8BB] hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#CFC8BB]">
            © 2025 Irbis Partners. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-[#CFC8BB] hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-[#CFC8BB] hover:text-white transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
