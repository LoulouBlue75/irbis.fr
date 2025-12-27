import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-ink text-white py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <Link href="/" className="text-2xl font-bold font-serif tracking-tight">
              IRBIS
            </Link>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-stone">Services</h4>
            <Link href="/executive-search" className="text-sm text-gray-300 hover:text-white transition-colors">Executive Search</Link>
            <Link href="/tailor-shift" className="text-sm text-gray-300 hover:text-white transition-colors">Tailor Shift</Link>
            <Link href="/paris" className="text-sm text-gray-300 hover:text-white transition-colors">Paris</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-stone">Company</h4>
            <Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">About</Link>
            <Link href="/approach" className="text-sm text-gray-300 hover:text-white transition-colors">Approach</Link>
            <Link href="/references" className="text-sm text-gray-300 hover:text-white transition-colors">References</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-stone">Connect</h4>
            <Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</Link>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2025 Irbis Partners</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
