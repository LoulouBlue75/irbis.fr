import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { OfficeHeroAnimated } from "@/components/office-hero-animated";

export default async function Home() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="flex min-h-screen flex-col bg-primary text-primary">
      {/* NEW: Office Hero with Animation Structure */}
      <OfficeHeroAnimated />
      
      {/* What We Do Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            We help ambitious organisations make decisive appointments.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {/* Executive Search */}
            <div className="card hover:border-strong transition-colors">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-accent-primary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Executive Search</h3>
              <p className="text-secondary leading-relaxed">
                Leadership appointments and rare specialists — end-to-end, high bar, real cadence.
              </p>
              <Link href="/executive-search" className="text-accent-primary hover:text-accent-primary-hover mt-4 inline-block">
                Explore Executive Search
              </Link>
            </div>
            
            {/* Decision Partnership */}
            <div className="card hover:border-strong transition-colors">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-6 text-purple-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2 2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Decision Partnership</h3>
              <p className="text-secondary leading-relaxed">
                We spar with you: we challenge the brief, sharpen criteria, and make trade-offs explicit.
              </p>
            </div>
            
            {/* Ecosystem */}
            <div className="card hover:border-strong transition-colors">
              <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-6 text-accent-warning">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Ecosystem</h3>
              <p className="text-secondary leading-relaxed">
                Specialised ventures and tools — dedicated sites, aligned with Irbis standard.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How We Work Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            A disciplined process — fully engaged.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-primary">Align</h3>
              <p className="text-secondary leading-relaxed">
                Define success, stakes, and non-negotiables.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-primary">Map</h3>
              <p className="text-secondary leading-relaxed">
                Research reality and approach the right people.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-primary">Understand</h3>
              <p className="text-secondary leading-relaxed">
                Assess trajectory, judgement, and fit with nuance.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-primary">Decide</h3>
              <p className="text-secondary leading-relaxed">
                Support the decision and close with control.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Irbis Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Demanding, benevolent, accountable.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-primary">We share ambition.</h3>
              <p className="text-secondary leading-relaxed">
                We help pull standards upward.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-primary">We don't hide behind a process.</h3>
              <p className="text-secondary leading-relaxed">
                We take responsibility for the outcome.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-primary">We respect people.</h3>
              <p className="text-secondary leading-relaxed">
                Candidates and clients — always.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ecosystem Gateway Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            An ecosystem built around decisive appointments.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-primary">Executive Search</h3>
              <p className="text-secondary leading-relaxed">
                The flagship service for critical leadership hires.
              </p>
              <Link href="/executive-search" className="text-accent-primary hover:text-accent-primary-hover mt-4 inline-block">
                Explore Executive Search
              </Link>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-primary">Tailor Shift — by Irbis</h3>
              <p className="text-secondary leading-relaxed">
                Luxury retail recruitment on a dedicated platform.
              </p>
              <Link href="/tailor-shift" className="text-accent-primary hover:text-accent-primary-hover mt-4 inline-block">
                Visit Tailor Shift
              </Link>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-primary">Paris — by Irbis</h3>
              <p className="text-secondary leading-relaxed">
                Career perspective and guidance on a dedicated platform.
              </p>
              <Link href="/paris" className="text-accent-primary hover:text-accent-primary-hover mt-4 inline-block">
                Visit Paris
              </Link>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-primary">Coming next</h3>
              <p className="text-secondary leading-relaxed">
                New specialised services in development.
              </p>
              <Link href="/contact" className="text-accent-primary hover:text-accent-primary-hover mt-4 inline-block">
                Discuss your context
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Band */}
      <section className="py-20 px-4 bg-primary text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Let's step into the arena together.
          </h2>
          <p className="text-lg text-tertiary mb-8">
            Share your role and stakes — we'll bring structure, clarity, and a high bar from brief to appointment.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/contact" className="button-primary">
              Discuss a Search
            </Link>
            <Link href="/executive-search" className="button-primary">
              Executive Search
            </Link>
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
