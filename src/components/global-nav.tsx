import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";

export async function GlobalNav() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const isLoggedIn = !!user;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[64px] bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-6 lg:px-8">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-xl font-bold font-serif tracking-tight text-ink">
          IRBIS
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link href="/executive-search" className="text-sm font-medium text-ink hover:text-stone transition-colors">
            Executive Search
          </Link>
          <Link href="/approach" className="text-sm font-medium text-ink hover:text-stone transition-colors">
            Approach
          </Link>
          <Link href="/about" className="text-sm font-medium text-ink hover:text-stone transition-colors">
            About
          </Link>
          <Link href="/references" className="text-sm font-medium text-ink hover:text-stone transition-colors">
            References
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden lg:flex items-center gap-4">
           <Link href="/tailor-shift" className="text-sm font-medium text-stone hover:text-ink transition-colors">
            Tailor Shift
          </Link>
           <Link href="/paris" className="text-sm font-medium text-stone hover:text-ink transition-colors">
            Paris
          </Link>
        </div>
        
        {isLoggedIn ? (
          <Button variant="secondary" size="sm" asChild>
            <Link href="/hunting/dashboard">Console</Link>
          </Button>
        ) : (
          <Button variant="default" size="sm" asChild>
            <Link href="/contact">Let's talk</Link>
          </Button>
        )}
      </div>
    </nav>
  );
}
