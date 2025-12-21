import Link from "next/link";
import Image from "next/image";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-black/95 dark:supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Link href="/" className="flex items-center gap-2">
              {/* Placeholder for Logo */}
              <span className="text-blue-900 dark:text-white">IRBIS</span>
              <span className="text-yellow-500">PARTNERS</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground/60">Home</Link>
            <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</Link>
            <Link href="/services" className="transition-colors hover:text-foreground/80 text-foreground/60">Services</Link>
            <Link href="/references" className="transition-colors hover:text-foreground/80 text-foreground/60">References</Link>
            <Link href="/use-cases" className="transition-colors hover:text-foreground/80 text-foreground/60">Use Cases</Link>
            <Link href="/clients" className="transition-colors hover:text-foreground/80 text-foreground/60">Clients</Link>
            <Link href="/candidates" className="transition-colors hover:text-foreground/80 text-foreground/60">Candidates</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60">
              Login
            </Link>
            <Link
              href="/contact"
              className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-blue-900 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Discuss a mandate
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Irbis Partners. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
