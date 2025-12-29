import Link from "next/link";
import { Linkedin } from "lucide-react";

const footerLinks = {
  company: [
    { label: "Approach", href: "/approach" },
    { label: "Executive Search", href: "/executive-search" },
    { label: "References", href: "/references" },
  ],
  products: [
    { label: "TailorShift", href: "/tailor-shift" },
    { label: "Paris", href: "/paris" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-[#FAF8F5] pt-24 pb-8 overflow-hidden">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A962]/40 to-transparent" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Column - Takes more space */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 text-[#1A1F36] group-hover:text-[#C9A962] transition-colors duration-300">
                <svg className="w-full h-full" fill="none" viewBox="0 0 48 48">
                  <path
                    clipRule="evenodd"
                    d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <span className="font-serif text-2xl font-medium text-[#1A1F36] tracking-tight group-hover:text-[#C9A962] transition-colors duration-300">
                Irbis Partners
              </span>
            </Link>

            <p className="text-[#525252] text-base leading-relaxed max-w-sm">
              Executive Search with Adaptive Precision. The alliance of human intuition and algorithmic precision.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-2">
              <a
                href="https://linkedin.com/company/irbis-partners"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F0EDE8] text-[#1A1F36] hover:bg-[#C9A962] hover:text-[#1A1F36] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="text-xs font-semibold text-[#C9A962] uppercase tracking-widest">
              Company
            </h3>
            <div className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#525252] hover:text-[#1A1F36] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Products Links */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="text-xs font-semibold text-[#C9A962] uppercase tracking-widest">
              Products
            </h3>
            <div className="flex flex-col gap-3">
              {footerLinks.products.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#525252] hover:text-[#1A1F36] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-xs font-semibold text-[#C9A962] uppercase tracking-widest">
              Contact
            </h3>
            <p className="text-sm text-[#525252]">
              Ready to find exceptional talent?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[#1A1F36] font-serif text-xl hover:text-[#C9A962] transition-colors duration-300 group"
            >
              Start a conversation
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            {/* Location */}
            <div className="mt-4 pt-4 border-t border-[#E5E5E5]">
              <p className="text-xs text-[#737373] uppercase tracking-wider mb-1">Location</p>
              <p className="text-sm text-[#1A1F36]">Paris, France</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E5E5E5] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#737373]">
            © {new Date().getFullYear()} Irbis Partners. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-[#737373] hover:text-[#1A1F36] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Signature */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#A3A3A3] italic">
            Irbis is a House of Perspective.
          </p>
        </div>
      </div>
    </footer>
  );
}
