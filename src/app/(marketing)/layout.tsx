import Link from "next/link";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-[#0F1A2E]">IRBIS</span>
            <span className="text-[#BF9E59]">PARTNERS</span>
          </Link>

          {/* Navigation - 4 links only */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/approach"
              className="text-sm font-medium text-[#0F1A2E]/70 hover:text-[#0F1A2E] transition-colors"
            >
              Approach
            </Link>
            <Link
              href="/executive-search"
              className="text-sm font-medium text-[#0F1A2E]/70 hover:text-[#0F1A2E] transition-colors"
            >
              Executive Search
            </Link>
            <Link
              href="/references"
              className="text-sm font-medium text-[#0F1A2E]/70 hover:text-[#0F1A2E] transition-colors"
            >
              References
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-[#0F1A2E]/70 hover:text-[#0F1A2E] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex h-10 items-center justify-center rounded-md bg-[#BF9E59] px-6 text-sm font-medium text-white transition-colors hover:bg-[#A8894D]"
          >
            Start a conversation
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* FOOTER */}
      <footer className="bg-[#0F1A2E] text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Logo */}
            <div>
              <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
                <span className="text-white">IRBIS</span>
                <span className="text-[#BF9E59]">PARTNERS</span>
              </Link>
              <p className="text-sm text-[#CFC8BB]">
                Executive search with adaptive precision.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4 text-sm">Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/executive-search" className="text-sm text-[#CFC8BB] hover:text-white transition-colors">
                    Executive Search
                  </Link>
                </li>
                <li>
                  <Link href="/tailor-shift" className="text-sm text-[#CFC8BB] hover:text-white transition-colors">
                    Tailor Shift
                  </Link>
                </li>
                <li>
                  <Link href="/paris" className="text-sm text-[#CFC8BB] hover:text-white transition-colors">
                    Paris
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4 text-sm">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-sm text-[#CFC8BB] hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/approach" className="text-sm text-[#CFC8BB] hover:text-white transition-colors">
                    Approach
                  </Link>
                </li>
                <li>
                  <Link href="/references" className="text-sm text-[#CFC8BB] hover:text-white transition-colors">
                    References
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold mb-4 text-sm">Connect</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/contact" className="text-sm text-[#CFC8BB] hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#CFC8BB] hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#CFC8BB]">
              © 2025 Irbis Partners. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-[#CFC8BB] hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-[#CFC8BB] hover:text-white transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
