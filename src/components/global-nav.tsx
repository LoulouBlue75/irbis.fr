import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export async function GlobalNav() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const isLoggedIn = !!user;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone/10 transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 text-ink cursor-pointer hover:opacity-80 transition-opacity">
          {/* Snow Leopard Icon */}
          <div className="size-8 text-ink">
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24 4C20 4 16 8 14 12C12 16 12 20 14 24C16 28 20 32 24 36C28 32 32 28 34 24C36 20 36 16 34 12C32 8 28 4 24 4Z"
                fill="currentColor"
                fillOpacity="0.1"
              />
              <path
                d="M24 8C21 8 18 11 17 14C16 17 16 20 17 23C18 26 21 29 24 32C27 29 30 26 31 23C32 20 32 17 31 14C30 11 27 8 24 8Z"
                fill="currentColor"
              />
              <circle cx="21" cy="16" r="2" fill="white"/>
              <circle cx="27" cy="16" r="2" fill="white"/>
              <path d="M22 20L24 22L26 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="hidden sm:flex items-baseline gap-1">
            <span className="text-ink text-xl font-bold leading-tight tracking-tight">IRBIS</span>
            <span className="text-gold text-xl font-light leading-tight tracking-tight">PARTNERS</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          <Link href="/approach" className="text-ink/80 hover:text-gold text-sm font-semibold transition-colors">
            Approach
          </Link>
          <Link href="/executive-search" className="text-ink/80 hover:text-gold text-sm font-semibold transition-colors">
            Executive Search
          </Link>
          <Link href="/references" className="text-ink/80 hover:text-gold text-sm font-semibold transition-colors">
            References
          </Link>
          <Link href="/contact" className="text-ink/80 hover:text-gold text-sm font-semibold transition-colors">
            Contact
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Secondary links */}
          <div className="hidden xl:flex items-center gap-4 pr-4 border-r border-stone/20">
            <Link href="/tailor-shift" className="text-stone hover:text-ink text-sm font-medium transition-colors">
              Tailor Shift
            </Link>
            <Link href="/paris" className="text-stone hover:text-ink text-sm font-medium transition-colors">
              Paris
            </Link>
          </div>

          {/* CTA */}
          {isLoggedIn ? (
            <Link
              href="/hunting/dashboard"
              className="flex items-center justify-center overflow-hidden rounded-md h-10 px-5 bg-ink hover:bg-ink/90 transition-colors text-white text-sm font-semibold tracking-wide"
            >
              Console
            </Link>
          ) : (
            <Link
              href="/contact"
              className="flex items-center justify-center overflow-hidden rounded-md h-10 px-5 bg-gold hover:bg-gold/90 transition-colors text-white text-sm font-semibold tracking-wide shadow-lg shadow-gold/20"
            >
              Start a conversation
            </Link>
          )}

          {/* Mobile menu button */}
          <button className="lg:hidden flex size-10 items-center justify-center rounded-lg text-ink hover:bg-ivory transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
