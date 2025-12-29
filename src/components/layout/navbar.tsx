"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Approach", href: "/approach" },
  { label: "Executive Search", href: "/executive-search" },
  { label: "Contact", href: "/contact" },
];

interface NavbarProps {
  isLoggedIn?: boolean;
}

export function Navbar({ isLoggedIn = false }: NavbarProps) {
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
            <Link href="/" className="flex items-center gap-3 group">
              <div className={cn(
                "text-[#1A1F36] transition-all duration-300",
                isScrolled ? "w-8 h-8" : "w-10 h-10"
              )}>
                <svg className="w-full h-full" fill="none" viewBox="0 0 48 48">
                  <path
                    clipRule="evenodd"
                    d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <span className={cn(
                "font-serif font-medium text-[#1A1F36] tracking-tight",
                "transition-all duration-300 group-hover:text-[#C9A962]",
                isScrolled ? "text-lg" : "text-xl lg:text-2xl",
                "hidden sm:block"
              )}>
                Irbis Partners
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-sm font-medium text-[#1A1F36] hover:text-[#C9A962] transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#C9A962] after:transition-all hover:after:w-full"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              {isLoggedIn ? (
                <Link
                  href="/hunting/dashboard"
                  className="hidden sm:flex items-center justify-center px-5 h-10 bg-[#1A1F36] text-[#FAF8F5] text-sm font-semibold tracking-wide rounded-md transition-all duration-300 hover:bg-[#2A3152] hover:-translate-y-0.5"
                >
                  Console
                </Link>
              ) : (
                <Link
                  href="/contact"
                  className="hidden sm:flex items-center justify-center px-5 h-10 bg-[#C9A962] text-[#1A1F36] text-sm font-semibold tracking-wide rounded-md transition-all duration-300 hover:bg-[#A8893E] hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(201,169,98,0.12)]"
                >
                  Get in Touch
                </Link>
              )}

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md text-[#1A1F36] hover:bg-[rgba(201,169,98,0.15)] transition-colors"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
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
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-serif text-[#1A1F36] hover:text-[#C9A962] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-8">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center justify-center px-6 py-3 bg-[#C9A962] text-[#1A1F36] text-sm font-semibold rounded-md hover:bg-[#A8893E] transition-colors"
            >
              Get in Touch
            </Link>
          </div>
          <div className="w-16 h-px bg-gradient-to-r from-[#C9A962] to-transparent mt-8" />
        </nav>
      </div>
    </>
  );
}
