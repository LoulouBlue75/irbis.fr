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
  { label: "Ventures", href: "/ventures" },
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
          "transition-all duration-500 ease-out",
          isScrolled
            ? "bg-[rgba(249,247,241,0.7)] backdrop-blur-[20px] backdrop-saturate-[180%] shadow-[0_4px_30px_rgba(11,17,33,0.03)]"
            : "bg-transparent"
        )}
        style={{
          borderBottom: isScrolled ? '1px solid rgba(198, 168, 124, 0.1)' : 'none',
        }}
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className={cn(
            "flex items-center justify-between transition-all duration-300",
            isScrolled ? "h-18" : "h-22 lg:h-28"
          )}>
            <Link href="/" className="flex items-center gap-2 md:gap-3 lg:gap-4 group">
              <img
                src="/images/Irbis_Logo_full.svg"
                alt="Irbis Partners"
                className={cn(
                  "transition-all duration-300",
                  isScrolled ? "h-12" : "h-14 lg:h-16"
                )}
              />
              <span className={cn(
                "font-serif italic text-ink-light transition-all duration-300",
                "text-xs md:text-sm lg:text-base",
                isScrolled ? "opacity-60" : "opacity-100"
              )}>
                House of Perspective
              </span>
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
              {/* Login button - gold outline */}
              <Link
                href="/login"
                className="px-6 py-2.5 text-sm font-medium text-[#C9A962] border border-[#C9A962] transition-all duration-300 hover:bg-[#C9A962] hover:text-[#1A1F36]"
              >
                Login
              </Link>
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
          {/* Login button mobile */}
          <Link
            href="/login"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 px-8 py-3 text-lg font-medium text-[#C9A962] border border-[#C9A962] transition-all duration-300 hover:bg-[#C9A962] hover:text-[#1A1F36]"
          >
            Login
          </Link>
        </nav>
      </div>
    </>
  );
}
