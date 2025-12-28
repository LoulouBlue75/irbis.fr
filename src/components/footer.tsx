import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#e7ebf3] pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 text-[#0d121b]">
              <div className="size-6 text-gold">
                <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_6_331)">
                    <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd" />
                  </g>
                  <defs>
                    <clipPath id="clip0_6_331"><rect fill="white" height="48" width="48" /></clipPath>
                  </defs>
                </svg>
              </div>
              <h2 className="text-lg font-bold tracking-tight">Irbis Partners</h2>
            </Link>
            <p className="text-[#6b7280] text-sm leading-relaxed">
              Connecting ambitious organizations with rare executive talent. High standards. Shared ambition.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com/company/irbis-partners" target="_blank" rel="noopener noreferrer" className="text-[#6b7280] hover:text-gold transition-colors">
                <i className="bg-gray-100 p-2 rounded-full flex items-center justify-center w-8 h-8">
                  <span className="material-symbols-outlined !text-[18px]">public</span>
                </i>
              </a>
              <a href="#" className="text-[#6b7280] hover:text-gold transition-colors">
                <i className="bg-gray-100 p-2 rounded-full flex items-center justify-center w-8 h-8">
                  <span className="material-symbols-outlined !text-[18px]">share</span>
                </i>
              </a>
            </div>
          </div>

          {/* Company column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#0d121b] font-bold text-sm uppercase tracking-wider">Company</h3>
            <Link href="/approach" className="text-[#6b7280] hover:text-gold text-sm transition-colors">
              Our Approach
            </Link>
            <Link href="/executive-search" className="text-[#6b7280] hover:text-gold text-sm transition-colors">
              Executive Search
            </Link>
            <Link href="/references" className="text-[#6b7280] hover:text-gold text-sm transition-colors">
              References
            </Link>
            <Link href="/tailor-shift" className="text-[#6b7280] hover:text-gold text-sm transition-colors">
              Tailor Shift
            </Link>
            <Link href="/paris" className="text-[#6b7280] hover:text-gold text-sm transition-colors">
              Paris
            </Link>
          </div>

          {/* Locations column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#0d121b] font-bold text-sm uppercase tracking-wider">Location</h3>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-gold !text-[20px] mt-0.5">location_on</span>
              <div className="flex flex-col">
                <span className="text-[#0d121b] text-sm font-semibold">Paris</span>
                <span className="text-[#6b7280] text-xs">France</span>
              </div>
            </div>
          </div>

          {/* Contact column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#0d121b] font-bold text-sm uppercase tracking-wider">Contact</h3>
            <p className="text-[#6b7280] text-sm">Have a critical role to fill?</p>
            <Link href="/contact" className="text-gold font-bold text-lg hover:underline decoration-2 underline-offset-4">
              Let's talk
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#e7ebf3] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#6b7280] text-xs">© 2025 Irbis Partners. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[#6b7280] hover:text-[#0d121b] text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#6b7280] hover:text-[#0d121b] text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
