import Link from "next/link";

export default function TaylorShiftLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-black text-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Link href="/taylor-shift" className="flex items-center gap-2">
              <span className="text-white">TAYLOR</span>
              <span className="text-yellow-500">SHIFT</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="/taylor-shift" className="hover:text-gray-300">Home</Link>
            <Link href="/taylor-shift/opportunities" className="hover:text-gray-300">Opportunities</Link>
            <Link href="/taylor-shift/candidates" className="hover:text-gray-300">Candidates</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:text-gray-300">
              Login
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-black text-white py-6">
        <div className="container flex justify-center">
          <p className="text-sm text-gray-400">© 2024 Taylor Shift. Luxury Retail Recruitment.</p>
        </div>
      </footer>
    </div>
  );
}
