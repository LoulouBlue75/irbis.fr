import Link from "next/link";

export default function ParisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white text-black">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Link href="/paris" className="flex items-center gap-2">
              <span className="text-black">PARIS</span>
              <span className="text-blue-500">CAREER</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="/paris" className="hover:text-gray-600">Home</Link>
            <Link href="/paris/assessment" className="hover:text-gray-600">Assessment</Link>
            <Link href="/paris/coaching" className="hover:text-gray-600">Coaching</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:text-gray-600">
              Login
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-white text-black py-6 border-t">
        <div className="container flex justify-center">
          <p className="text-sm text-gray-500">© 2024 Paris Career. Perspective for your path.</p>
        </div>
      </footer>
    </div>
  );
}
