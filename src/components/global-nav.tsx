import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export async function GlobalNav() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const isLoggedIn = !!user;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border-light transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 text-text-main cursor-pointer hover:opacity-80 transition-opacity">
          <div className="size-8 text-primary">
            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_330)">
                <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd" />
              </g>
              <defs>
                <clipPath id="clip0_6_330"><rect fill="white" height="48" width="48" /></clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="text-text-main text-xl font-bold leading-tight tracking-tight hidden sm:block">Irbis Partners</h2>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          <Link href="/approach" className="text-text-main/80 hover:text-primary text-sm font-semibold transition-colors">
            Approach
          </Link>
          <Link href="/executive-search" className="text-text-main/80 hover:text-primary text-sm font-semibold transition-colors">
            Executive Search
          </Link>
          <Link href="/references" className="text-text-main/80 hover:text-primary text-sm font-semibold transition-colors">
            References
          </Link>
          <Link href="/contact" className="text-text-main/80 hover:text-primary text-sm font-semibold transition-colors">
            Contact
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button aria-label="Search" className="hidden md:flex size-10 items-center justify-center rounded-lg bg-background-alt text-text-main hover:bg-gray-200 transition-colors">
            <span className="material-symbols-outlined !text-[20px]">search</span>
          </button>
          {isLoggedIn ? (
            <Link
              href="/hunting/dashboard"
              className="flex items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-background-dark hover:bg-background-dark/90 transition-colors text-white text-sm font-bold tracking-wide"
            >
              <span className="truncate">Console</span>
            </Link>
          ) : (
            <Link
              href="/contact"
              className="flex items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary hover:bg-primary-dark transition-colors text-white text-sm font-bold tracking-wide shadow-lg shadow-primary/20"
            >
              <span className="truncate">Start a conversation</span>
            </Link>
          )}
          <button className="lg:hidden flex size-10 items-center justify-center rounded-lg text-text-main hover:bg-background-alt">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
