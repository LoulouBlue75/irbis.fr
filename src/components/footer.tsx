import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-ink border-t border-white/10 pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 text-white">
              {/* Snow Leopard Icon */}
              <div className="size-6 text-gold">
                <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24 8C21 8 18 11 17 14C16 17 16 20 17 23C18 26 21 29 24 32C27 29 30 26 31 23C32 20 32 17 31 14C30 11 27 8 24 8Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-white text-lg font-bold tracking-tight">IRBIS</span>
                <span className="text-gold text-lg font-light tracking-tight">PARTNERS</span>
              </div>
            </Link>
            <p className="text-stone text-sm leading-relaxed">
              Connecting ambitious organizations with rare executive talent. High standards. Shared ambition.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/irbis-partners"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone hover:text-gold transition-colors"
              >
                <span className="bg-white/10 p-2 rounded-full flex items-center justify-center w-8 h-8 hover:bg-white/20 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Services column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Services</h3>
            <Link href="/executive-search" className="text-stone hover:text-gold text-sm transition-colors">
              Executive Search
            </Link>
            <Link href="/tailor-shift" className="text-stone hover:text-gold text-sm transition-colors">
              Tailor Shift
            </Link>
            <Link href="/paris" className="text-stone hover:text-gold text-sm transition-colors">
              Paris
            </Link>
          </div>

          {/* Company column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Company</h3>
            <Link href="/about" className="text-stone hover:text-gold text-sm transition-colors">
              About
            </Link>
            <Link href="/approach" className="text-stone hover:text-gold text-sm transition-colors">
              Approach
            </Link>
            <Link href="/references" className="text-stone hover:text-gold text-sm transition-colors">
              References
            </Link>
          </div>

          {/* Contact column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Contact</h3>
            <p className="text-stone text-sm">Have a critical role to fill?</p>
            <Link href="/contact" className="text-gold font-semibold text-lg hover:underline decoration-2 underline-offset-4 transition-colors">
              Let's talk
            </Link>
            <div className="flex items-start gap-3 mt-2">
              <svg className="w-5 h-5 text-gold mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div className="flex flex-col">
                <span className="text-white text-sm font-medium">Paris</span>
                <span className="text-stone text-xs">France</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone text-xs">© 2025 Irbis Partners. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-stone hover:text-white text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-stone hover:text-white text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
