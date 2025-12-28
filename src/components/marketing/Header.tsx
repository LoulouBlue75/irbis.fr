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
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#0F1A2E]/70 hover:text-[#0F1A2E] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex h-11 items-center justify-center rounded-md bg-[#0F1A2E] px-6 text-sm font-medium text-white transition-colors hover:bg-[#0F1A2E]/90"
        >
          Start a conversation
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
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

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-[#0F1A2E]/70 hover:text-[#0F1A2E] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-md bg-[#0F1A2E] px-6 text-sm font-medium text-white transition-colors hover:bg-[#0F1A2E]/90 mt-2"
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
