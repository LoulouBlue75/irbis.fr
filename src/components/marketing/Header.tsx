"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";

const navLinks = [
  { href: "/approach", label: "Approach" },
  { href: "/executive-search", label: "Executive Search" },
  { href: "/references", label: "References" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e7ebf3] transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#0d121b]/80 hover:text-[#1152d4] text-sm font-semibold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:flex items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-[#1152d4] hover:bg-[#0d3da0] transition-colors text-white text-sm font-bold tracking-wide shadow-lg shadow-[#1152d4]/20"
          >
            Start a conversation
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden flex size-10 items-center justify-center rounded-lg text-[#0d121b] hover:bg-[#f8f9fc]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#e7ebf3]">
          <nav className="max-w-[1440px] mx-auto px-6 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#0d121b]/80 hover:text-[#1152d4] text-base font-semibold transition-colors py-3 border-b border-[#e7ebf3] last:border-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="flex items-center justify-center rounded-lg h-12 px-6 bg-[#1152d4] hover:bg-[#0d3da0] text-white text-sm font-bold tracking-wide mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start a conversation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
