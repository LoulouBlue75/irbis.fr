import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function Home() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="flex min-h-screen flex-col bg-gray-950 text-white">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center px-4 py-24 text-center bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="mb-8">
          {/* Logo Placeholder */}
          <div className="text-4xl font-bold tracking-tighter text-white">
            IRBIS <span className="text-yellow-500">.</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
          Excellence isn't found.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            It's detected.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10 font-light">
          Executive Search with Adaptive Precision. The alliance of human intuition and algorithmic precision.
        </p>
        
        <div className="flex gap-4">
          {user ? (
            <Link 
              href="/dashboard"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-900/20"
            >
              Access Cockpit
            </Link>
          ) : (
            <Link 
              href="/login"
              className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-gray-900 rounded-lg font-bold transition-all"
            >
              Discover the Approach
            </Link>
          )}
        </div>
      </header>

      {/* Value Props */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 text-blue-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Adaptive Precision</h3>
            <p className="text-gray-400 leading-relaxed">
              8D Matching and Contextual Scoring. We don't just match keywords; we align structural fit across 8 dimensions.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-6 text-purple-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Absolute Confidentiality</h3>
            <p className="text-gray-400 leading-relaxed">
              Privacy by Design. Alignment without revelation. Salaries and identities are protected until mutual interest is confirmed.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="w-12 h-12 bg-yellow-900/30 rounded-lg flex items-center justify-center mb-6 text-yellow-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Enlightened Choices</h3>
            <p className="text-gray-400 leading-relaxed">
              We analyze. We reveal. You decide. Empowering decision-making through complete data transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-600 border-t border-gray-900">
        <p>© 2025 Irbis Partners. All rights reserved.</p>
      </footer>
    </div>
  );
}
