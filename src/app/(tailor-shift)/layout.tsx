import Link from "next/link";

export default function TailorShiftLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full bg-[#0F1A2E] text-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <Link href="/tailor-shift" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-white">TAILOR</span>
            <span className="text-[#BF9E59]">SHIFT</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              ← Back to Irbis
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      {/* FOOTER */}
      <footer className="bg-[#0F1A2E] text-white py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#CFC8BB]">
            © 2025 Tailor Shift — by Irbis Partners
          </p>
          <Link
            href="/"
            className="text-sm text-[#CFC8BB] hover:text-white transition-colors"
          >
            irbis.fr
          </Link>
        </div>
      </footer>
    </div>
  );
}
