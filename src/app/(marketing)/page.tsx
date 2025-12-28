import Link from "next/link";

export default function Homepage() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="relative w-full min-h-[90vh] flex items-end pb-20 md:pb-32 px-6 lg:px-12 overflow-hidden">
        {/* Background with gradient overlay */}
        <div
          className="absolute inset-0 w-full h-full z-0 bg-cover bg-center transition-transform duration-[20s] ease-linear hover:scale-105"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 40%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,0.95) 100%), url('/hero-bg.jpg')`,
            backgroundColor: '#f8f9fc'
          }}
        />
        <div className="relative z-10 w-full max-w-[1440px] mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-[#0d121b] text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-[-0.03em] mb-6 font-serif">
              High standards.<br />Shared ambition.
            </h1>
            <div className="flex flex-col md:flex-row md:items-end gap-8">
              <p className="text-[#0d121b] text-lg md:text-2xl font-normal leading-relaxed max-w-xl border-l-4 border-[#1152d4] pl-6">
                Executive search. Adaptive precision.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center rounded-lg h-14 px-8 bg-[#1152d4] text-white hover:bg-[#0d3da0] transition-colors text-base font-bold tracking-wide shadow-xl shadow-[#1152d4]/20"
                >
                  Start a conversation
                </Link>
                <Link
                  href="/approach"
                  className="flex items-center justify-center rounded-lg h-14 px-8 bg-white/80 text-[#0d121b] hover:bg-white border border-[#e7ebf3] transition-colors text-base font-bold tracking-wide"
                >
                  The approach →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO - Services Cards */}
      <section className="py-20 px-6 lg:px-12 bg-[#f8f9fc] border-y border-[#e7ebf3]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-[#1152d4] font-bold tracking-widest uppercase text-sm mb-2 block">What we do</span>
              <h2 className="text-[#0d121b] text-3xl md:text-4xl font-bold tracking-tight">Three pillars. One standard.</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Executive Search */}
            <div className="group bg-white p-8 md:p-10 rounded-xl border border-[#e7ebf3] hover:border-[#1152d4]/30 hover:shadow-xl hover:shadow-[#1152d4]/5 transition-all duration-300">
              <div className="size-14 rounded-lg bg-[#1152d4]/5 text-[#1152d4] flex items-center justify-center mb-8 group-hover:bg-[#1152d4] group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0d121b] mb-3">Executive Search</h3>
              <p className="text-[#4c669a] leading-relaxed mb-6">Leadership roles. Rare specialists. End-to-end.</p>
              <Link href="/executive-search" className="text-[#1152d4] font-bold hover:underline underline-offset-4">
                Explore →
              </Link>
            </div>

            {/* Sparring Partner */}
            <div className="group bg-white p-8 md:p-10 rounded-xl border border-[#e7ebf3] hover:border-[#1152d4]/30 hover:shadow-xl hover:shadow-[#1152d4]/5 transition-all duration-300">
              <div className="size-14 rounded-lg bg-[#1152d4]/5 text-[#1152d4] flex items-center justify-center mb-8 group-hover:bg-[#1152d4] group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0d121b] mb-3">Sparring Partner</h3>
              <p className="text-[#4c669a] leading-relaxed">We challenge the brief. You own the decision.</p>
            </div>

            {/* Ecosystem */}
            <div className="group bg-white p-8 md:p-10 rounded-xl border border-[#e7ebf3] hover:border-[#1152d4]/30 hover:shadow-xl hover:shadow-[#1152d4]/5 transition-all duration-300">
              <div className="size-14 rounded-lg bg-[#1152d4]/5 text-[#1152d4] flex items-center justify-center mb-8 group-hover:bg-[#1152d4] group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0d121b] mb-3">Ecosystem</h3>
              <p className="text-[#4c669a] leading-relaxed">Specialised ventures. Same standard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE METHOD */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="w-12 h-1 bg-[#1152d4] mb-8 rounded-full"></div>
            <h2 className="text-[#0d121b] text-3xl md:text-5xl font-bold tracking-tight">Four steps. Full commitment.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Align", sub: "Stakes. Success. Non-negotiables." },
              { num: "02", title: "Map", sub: "Research. Access. Reality." },
              { num: "03", title: "Understand", sub: "Trajectory. Judgement. Fit." },
              { num: "04", title: "Decide", sub: "Support. Control. Close." },
            ].map((step) => (
              <div key={step.num} className="bg-[#f8f9fc] p-8 rounded-xl border border-[#e7ebf3] hover:border-[#1152d4]/30 hover:shadow-lg transition-all duration-300">
                <span className="text-xs font-bold text-[#1152d4] block mb-4 tracking-widest">{step.num}</span>
                <h3 className="text-xl font-bold text-[#0d121b] mb-3">{step.title}</h3>
                <p className="text-sm text-[#4c669a] leading-relaxed">{step.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IRBIS - Three Commitments */}
      <section className="py-24 px-6 lg:px-12 bg-[#f8f9fc] border-y border-[#e7ebf3]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#1152d4] font-bold tracking-widest uppercase text-sm mb-4 block">Why Irbis</span>
          <h2 className="text-[#0d121b] text-3xl md:text-5xl font-bold tracking-tight mb-16">Three commitments.</h2>
          <div className="flex flex-col gap-8">
            <p className="text-2xl md:text-3xl font-medium text-[#0d121b]">We share your ambition.</p>
            <div className="w-16 h-px bg-[#1152d4]/30 mx-auto"></div>
            <p className="text-2xl md:text-3xl font-medium text-[#0d121b]">We own the outcome.</p>
            <div className="w-16 h-px bg-[#1152d4]/30 mx-auto"></div>
            <p className="text-2xl md:text-3xl font-medium text-[#0d121b]">We respect people.</p>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-[#1152d4] font-bold tracking-widest uppercase text-sm mb-2 block">Ecosystem</span>
              <h2 className="text-[#0d121b] text-3xl md:text-4xl font-bold tracking-tight">The ecosystem.</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Executive Search", sub: "Flagship service.", cta: "Explore →", href: "/executive-search" },
              { title: "Tailor Shift", sub: "Luxury retail. Dedicated platform.", cta: "Visit →", href: "/tailor-shift" },
              { title: "Paris", sub: "Career clarity. 8D profile.", cta: "Visit →", href: "/paris" },
              { title: "Next", sub: "In development.", cta: "Contact →", href: "/contact" },
            ].map((item) => (
              <div key={item.title} className="bg-[#f8f9fc] p-8 rounded-xl border border-[#e7ebf3] flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-[#1152d4]/30 hover:shadow-lg transition-all duration-300">
                <div>
                  <h3 className="text-xl font-bold text-[#0d121b] mb-2">{item.title}</h3>
                  <p className="text-[#4c669a]">{item.sub}</p>
                </div>
                <Link href={item.href} className="text-[#1152d4] font-bold hover:underline underline-offset-4 whitespace-nowrap">
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 lg:px-12 bg-[#101622] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(#4c669a 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's talk.</h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">Ready to shape your future leadership?</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg h-12 px-8 bg-[#1152d4] text-white hover:bg-[#0d3da0] transition-colors text-base font-bold tracking-wide"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
