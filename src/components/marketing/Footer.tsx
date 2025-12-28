import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#e7ebf3] pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="text-[#4c669a] text-sm leading-relaxed">
              Executive search with adaptive precision. Connecting ambitious organizations with rare talent.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4c669a] hover:text-[#1152d4] transition-colors"
              >
                <span className="bg-[#f8f9fc] p-2 rounded-full flex items-center justify-center w-8 h-8">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#0d121b] font-bold text-sm uppercase tracking-wider">Company</h3>
            <Link href="/about" className="text-[#4c669a] hover:text-[#1152d4] text-sm transition-colors">
              About
            </Link>
            <Link href="/approach" className="text-[#4c669a] hover:text-[#1152d4] text-sm transition-colors">
              Approach
            </Link>
            <Link href="/references" className="text-[#4c669a] hover:text-[#1152d4] text-sm transition-colors">
              References
            </Link>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#0d121b] font-bold text-sm uppercase tracking-wider">Services</h3>
            <Link href="/executive-search" className="text-[#4c669a] hover:text-[#1152d4] text-sm transition-colors">
              Executive Search
            </Link>
            <Link href="/tailor-shift" className="text-[#4c669a] hover:text-[#1152d4] text-sm transition-colors">
              Tailor Shift
            </Link>
            <Link href="/paris" className="text-[#4c669a] hover:text-[#1152d4] text-sm transition-colors">
              Paris
            </Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#0d121b] font-bold text-sm uppercase tracking-wider">Contact</h3>
            <p className="text-[#4c669a] text-sm">Have a critical role to fill?</p>
            <a
              href="mailto:contact@irbis-partners.com"
              className="text-[#1152d4] font-bold text-lg hover:underline decoration-2 underline-offset-4"
            >
              contact@irbis-partners.com
            </a>
            <div className="flex items-start gap-3 mt-2">
              <svg className="w-5 h-5 text-[#1152d4] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div className="flex flex-col">
                <span className="text-[#0d121b] text-sm font-semibold">Paris</span>
                <span className="text-[#4c669a] text-xs">France</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#e7ebf3] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#4c669a] text-xs">© 2025 Irbis Partners. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[#4c669a] hover:text-[#0d121b] text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#4c669a] hover:text-[#0d121b] text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
