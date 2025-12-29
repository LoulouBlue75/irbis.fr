"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, ExternalLink } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

const navItems: NavItem[] = [
  { label: "Talents", href: "/talents" },
  { label: "Clients", href: "/clients" },
  { label: "TailorShift", href: "https://tailorshift.co", external: true },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-[300]",
          "transition-all duration-300",
          isScrolled
            ? "bg-[rgba(250,248,245,0.95)] backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className={cn(
            "flex items-center justify-between transition-all duration-300",
            isScrolled ? "h-16" : "h-20 lg:h-24"
          )}>
            <Link href="/" className="flex items-center group">
              <img
                src="/images/Irbis_Logo_full.svg"
                alt="Irbis Partners"
                className={cn(
                  "transition-all duration-300",
                  isScrolled ? "h-10" : "h-12 lg:h-14"
                )}
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center gap-1.5 text-sm font-medium text-[#1A1F36] hover:text-[#C9A962] transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#C9A962] after:transition-all hover:after:w-full"
                  >
                    {item.label}
                    <ExternalLink className="w-3 h-3 opacity-50" />
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative text-sm font-medium text-[#1A1F36] hover:text-[#C9A962] transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#C9A962] after:transition-all hover:after:w-full"
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md text-[#1A1F36] hover:bg-[rgba(201,169,98,0.15)] transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div className={cn(
          "absolute bottom-0 left-0 right-0 h-px",
          "bg-gradient-to-r from-transparent via-[#C9A962]/30 to-transparent",
          "transition-opacity duration-300",
          isScrolled ? "opacity-100" : "opacity-0"
        )} />
      </header>

      <div className={cn(
        "fixed inset-0 z-[299] lg:hidden bg-[#FAF8F5]",
        "transition-all duration-500",
        isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <nav className="flex flex-col items-center justify-center h-full gap-8 pt-20">
          {navItems.map((item) => (
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center gap-2 text-3xl font-serif text-[#1A1F36] hover:text-[#C9A962] transition-colors"
              >
                {item.label}
                <ExternalLink className="w-5 h-5 opacity-50" />
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-serif text-[#1A1F36] hover:text-[#C9A962] transition-colors"
              >
                {item.label}
              </Link>
            )
          ))}
          <div className="w-16 h-px bg-gradient-to-r from-[#C9A962] to-transparent mt-8" />
        </nav>
      </div>
    </>
  );
}
