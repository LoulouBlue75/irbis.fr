import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function Home() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="flex min-h-screen flex-col bg-primary text-primary">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center px-4 py-24 text-center bg-secondary border-b border-primary">
        <div className="mb-8">
          {/* Logo Placeholder */}
          <div className="text-4xl font-bold tracking-tighter text-primary">
            IRBIS <span className="text-accent-primary">.</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight text-primary">
          Excellence isn't found.<br />
          <span className="text-accent-primary">
            It's detected.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-secondary max-w-2xl mb-10 font-light">
          Executive Search with Adaptive Precision. The alliance of human intuition and algorithmic precision.
        </p>
        
        <div className="flex gap-4">
          {user ? (
            <Link
              href="/dashboard"
              className="button-primary shadow-lg shadow-blue-900/10"
            >
              Access Cockpit
            </Link>
          ) : (
            <Link
              href="/login"
              className="button-primary"
            >
              Discover the Approach
            </Link>
          )}
        </div>
      </header>

      {/* Value Props */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="card hover:border-strong transition-colors">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-accent-primary">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary">Adaptive Precision</h3>
            <p className="text-secondary leading-relaxed">
              8D Matching and Contextual Scoring. We don't just match keywords; we align structural fit across 8 dimensions.
            </p>
          </div>

          <div className="card hover:border-strong transition-colors">
            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-6 text-purple-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary">Absolute Confidentiality</h3>
            <p className="text-secondary leading-relaxed">
              Privacy by Design. Alignment without revelation. Salaries and identities are protected until mutual interest is confirmed.
            </p>
          </div>

          <div className="card hover:border-strong transition-colors">
            <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-6 text-accent-warning">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary">Enlightened Choices</h3>
            <p className="text-secondary leading-relaxed">
              We analyze. We reveal. You decide. Empowering decision-making through complete data transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-tertiary border-t border-secondary">
        <p>© 2025 Irbis Partners. All rights reserved.</p>
      </footer>
    </div>
  );
}
