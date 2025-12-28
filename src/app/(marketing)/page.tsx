import Link from "next/link";

export default function Homepage() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO - Full viewport with gradient overlay */}
      <section className="relative w-full min-h-[90vh] flex items-end pb-20 md:pb-32 px-6 lg:px-12 overflow-hidden group">
        {/* Background with snow leopard imagery */}
        <div
          className="absolute inset-0 w-full h-full z-0 transition-transform duration-[20s] ease-linear group-hover:scale-105 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(246,241,231,0) 40%, rgba(246,241,231,0.7) 70%, rgba(246,241,231,0.98) 100%), url('/images/hero-leopard.jpg')`,
            backgroundColor: '#F6F1E7'
          }}
        />
        <div className="relative z-10 w-full max-w-[1440px] mx-auto">
          <div className="max-w-4xl">
            <h1 className="font-serif text-ink text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-6">
              High standards.<br />Shared ambition.
            </h1>
            <div className="flex flex-col md:flex-row md:items-end gap-8">
              <p className="text-ink/80 text-lg md:text-2xl font-normal leading-relaxed max-w-xl border-l-4 border-gold pl-6">
                Executive search. Adaptive precision.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center rounded-md h-14 px-8 bg-gold text-white hover:bg-gold/90 transition-colors text-base font-semibold tracking-wide shadow-lg shadow-gold/20"
                >
                  Start a conversation
                </Link>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/approach" className="inline-flex items-center gap-2 text-ink font-medium hover:text-gold transition-colors group/link">
                The approach
                <span className="transition-transform group-hover/link:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center">
          <div className="w-12 h-1 bg-gold mb-12 rounded-full"></div>
          <h2 className="font-serif text-ink text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight max-w-5xl mx-auto mb-8">
            "We don't fill seats. We shape futures."
          </h2>
          <p className="text-stone text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            In a world of constant change, leadership is the constant. We find the rare blend of vision, grit, and expertise that defines exceptional executives.
          </p>
        </div>
      </section>

      {/* WHAT WE DO - 3 Cards with icons */}
      <section className="py-20 px-6 lg:px-12 bg-ivory border-y border-stone/20">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-gold font-semibold tracking-widest uppercase text-sm mb-2 block">What we do</span>
              <h3 className="font-serif text-ink text-3xl md:text-4xl font-semibold tracking-tight">Three pillars. One standard.</h3>
            </div>
            <Link href="/executive-search" className="group flex items-center gap-2 text-ink font-semibold hover:text-gold transition-colors">
              Explore services
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-white p-8 md:p-10 rounded-xl border border-stone/20 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300">
              <div className="size-14 rounded-lg bg-gold/10 text-gold flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-white transition-colors">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h4 className="text-xl md:text-2xl font-semibold text-ink mb-3">Executive Search</h4>
              <p className="text-stone leading-relaxed mb-6">Leadership roles. Rare specialists. End-to-end.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-ink font-medium">
                  <span className="size-1.5 rounded-full bg-gold"></span> C-Level Recruitment
                </li>
                <li className="flex items-center gap-2 text-sm text-ink font-medium">
                  <span className="size-1.5 rounded-full bg-gold"></span> Board Search
                </li>
              </ul>
              <Link href="/executive-search" className="text-sm font-medium text-ink hover:text-gold transition-colors">
                Explore →
              </Link>
            </div>

            {/* Card 2 */}
            <div className="group bg-white p-8 md:p-10 rounded-xl border border-stone/20 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300">
              <div className="size-14 rounded-lg bg-gold/10 text-gold flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-white transition-colors">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl md:text-2xl font-semibold text-ink mb-3">Sparring Partner</h4>
              <p className="text-stone leading-relaxed mb-6">We challenge the brief. You own the decision.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-ink font-medium">
                  <span className="size-1.5 rounded-full bg-gold"></span> Brief Challenge
                </li>
                <li className="flex items-center gap-2 text-sm text-ink font-medium">
                  <span className="size-1.5 rounded-full bg-gold"></span> Decision Support
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="group bg-white p-8 md:p-10 rounded-xl border border-stone/20 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300">
              <div className="size-14 rounded-lg bg-gold/10 text-gold flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-white transition-colors">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h4 className="text-xl md:text-2xl font-semibold text-ink mb-3">Ecosystem</h4>
              <p className="text-stone leading-relaxed mb-6">Specialised ventures. Same standard.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-ink font-medium">
                  <span className="size-1.5 rounded-full bg-gold"></span> Tailor Shift
                </li>
                <li className="flex items-center gap-2 text-sm text-ink font-medium">
                  <span className="size-1.5 rounded-full bg-gold"></span> Paris
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THE METHOD - With image */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side with testimonial overlay */}
          <div className="relative h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden bg-ivory">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-105 duration-700"
              style={{
                backgroundImage: `url('/images/approach-visual.jpg')`,
                backgroundColor: '#F6F1E7'
              }}
            />
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur p-6 rounded-lg border-l-4 border-gold shadow-lg">
              <p className="text-ink font-medium text-lg italic">"They challenged our brief in ways that made us uncomfortable. Then they delivered exactly what we needed."</p>
              <p className="text-stone text-sm mt-4 font-semibold uppercase tracking-wide">— CEO, Private Equity Portfolio</p>
            </div>
          </div>

          {/* Content side */}
          <div className="flex flex-col gap-8">
            <span className="text-gold font-semibold tracking-widest uppercase text-sm">Our Method</span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-ink leading-tight tracking-tight">Four steps. Full commitment.</h2>
            <p className="text-stone text-lg leading-relaxed">
              We don't rely on databases. We rely on dialogue. The perfect talent is rarely "looking." They're busy leading, innovating, and driving results.
            </p>

            {/* Method steps */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {[
                { num: "01", title: "Align", sub: "Stakes. Success. Non-negotiables." },
                { num: "02", title: "Map", sub: "Research. Access. Reality." },
                { num: "03", title: "Understand", sub: "Trajectory. Judgement. Fit." },
                { num: "04", title: "Decide", sub: "Support. Control. Close." },
              ].map((step) => (
                <div key={step.num} className="bg-ivory p-5 rounded-lg">
                  <span className="text-xs font-bold text-gold block mb-2 tracking-wider">{step.num}</span>
                  <h4 className="text-lg font-semibold text-ink mb-1">{step.title}</h4>
                  <p className="text-sm text-stone">{step.sub}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link href="/approach" className="inline-flex items-center gap-2 text-gold font-semibold text-lg group hover:underline underline-offset-4">
                Learn about our process
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-8 border-t border-stone/20 pt-8">
              <div>
                <h3 className="text-4xl font-bold text-ink mb-1">95%</h3>
                <p className="text-stone text-sm">Retention after 24 months</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-ink mb-1">8 weeks</h3>
                <p className="text-stone text-sm">Average time to offer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IRBIS - Three commitments */}
      <section className="py-24 px-6 lg:px-12 bg-ivory">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-gold font-semibold tracking-widest uppercase text-sm mb-4 block">Why Irbis</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-16">
            Three commitments.
          </h2>
          <div className="flex flex-col gap-8 items-center">
            <div className="bg-white rounded-xl p-8 w-full max-w-lg border border-stone/20 hover:border-gold/30 hover:shadow-lg transition-all duration-300">
              <span className="text-gold font-bold text-sm mb-2 block">01</span>
              <p className="text-2xl font-medium text-ink">We share your ambition.</p>
            </div>
            <div className="bg-white rounded-xl p-8 w-full max-w-lg border border-stone/20 hover:border-gold/30 hover:shadow-lg transition-all duration-300">
              <span className="text-gold font-bold text-sm mb-2 block">02</span>
              <p className="text-2xl font-medium text-ink">We own the outcome.</p>
            </div>
            <div className="bg-white rounded-xl p-8 w-full max-w-lg border border-stone/20 hover:border-gold/30 hover:shadow-lg transition-all duration-300">
              <span className="text-gold font-bold text-sm mb-2 block">03</span>
              <p className="text-2xl font-medium text-ink">We respect people.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM - 2x2 Grid */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-semibold tracking-widest uppercase text-sm mb-4 block">Ventures</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink">
              The ecosystem.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Executive Search", sub: "Flagship service.", cta: "Explore →", href: "/executive-search", icon: "🎯" },
              { title: "Tailor Shift", sub: "Luxury retail.", cta: "Visit →", href: "/tailor-shift", icon: "✨" },
              { title: "Paris", sub: "Career clarity.", cta: "Visit →", href: "/paris", icon: "🗼" },
              { title: "Next", sub: "In development.", cta: "Contact →", href: "/contact", icon: "🚀" },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group bg-ivory p-8 rounded-xl border border-stone/20 flex items-center justify-between gap-6 hover:border-gold/30 hover:shadow-lg hover:bg-white transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-ink mb-1">{item.title}</h3>
                    <p className="text-stone">{item.sub}</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-ink group-hover:text-gold transition-colors whitespace-nowrap">
                  {item.cta}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 lg:px-12 bg-ink text-white relative overflow-hidden">
        {/* Subtle pattern background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(#CFC8BB 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6">Let's talk.</h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            The first conversation is free. The value isn't.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="flex items-center justify-center rounded-md h-12 px-8 bg-gold text-white hover:bg-gold/90 transition-colors text-base font-semibold tracking-wide"
            >
              Start a conversation
            </Link>
            <Link
              href="/approach"
              className="flex items-center justify-center rounded-md h-12 px-8 bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-colors text-base font-semibold tracking-wide"
            >
              Discover the method
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
