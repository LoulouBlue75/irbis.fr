import Link from "next/link";

export default function Homepage() {
  return (
    <main className="flex flex-col w-full min-h-screen pt-20">
      {/* HERO - Full viewport with stunning image */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-end pb-20 md:pb-32 px-6 lg:px-12 overflow-hidden group">
        <div
          className="absolute inset-0 w-full h-full z-0 transition-transform duration-[20s] ease-linear group-hover:scale-105 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 40%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,0.95) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC8tasP7mupglOaKmMnGil62wmQHm080VWa6jwcYJbVT88yvdWlt8DY7azjI4g-EMpVCxqokCUf3R2cqYzCH6FmyRxM0m7cC6VQChMUCmheVICi6qd0LB61ckwLBravSdDHglQVnAYHkmgtSApgJUBJlW6b9xZqVhOKaYUQX44UnQUTKGLlDz5hLgAvZZv-AB1xCMTdJ_egdO_o6l4Mcbz252AO26gNZLkf-w5Z6zub0pxYeXXDkeHWv4JsgIS7Kficc0qMPJ-RdfA")`
          }}
        />
        <div className="relative z-10 w-full max-w-[1440px] mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-ink text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-[-0.03em] mb-6 font-serif">
              High standards.<br />Shared ambition.
            </h1>
            <div className="flex flex-col md:flex-row md:items-end gap-8">
              <p className="text-ink text-lg md:text-2xl font-normal leading-relaxed max-w-xl border-l-4 border-gold pl-6">
                Executive search. Adaptive precision.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center rounded-lg h-14 px-8 bg-gold text-white hover:bg-gold/90 transition-colors text-base font-bold tracking-wide shadow-xl shadow-gold/20"
                >
                  Start a conversation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center">
          <div className="w-12 h-1 bg-gold mb-12 rounded-full"></div>
          <h2 className="text-ink text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-[-0.02em] max-w-5xl mx-auto mb-8 font-serif">
            "We don't fill seats. We shape futures."
          </h2>
          <p className="text-stone text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            In a landscape of constant change, leadership is the only constant. We find the rare blend of vision, grit, and expertise that defines exceptional executives.
          </p>
        </div>
      </section>

      {/* WHAT WE DO - 3 Cards */}
      <section className="py-20 px-6 lg:px-12 bg-ivory border-y border-stone/20">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-gold font-bold tracking-widest uppercase text-sm mb-2 block">What we do</span>
              <h3 className="text-ink text-3xl md:text-4xl font-bold tracking-tight">Three pillars. One standard.</h3>
            </div>
            <Link href="/executive-search" className="group flex items-center gap-2 text-ink font-bold hover:text-gold transition-colors">
              View all services
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Executive Search */}
            <div className="group bg-white p-8 md:p-10 rounded-xl border border-stone/20 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300">
              <div className="size-14 rounded-lg bg-gold/10 text-gold flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-ink mb-3">Executive Search</h4>
              <p className="text-stone leading-relaxed mb-6">Leadership roles. Rare specialists. End-to-end.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-ink font-medium">
                  <span className="size-1.5 rounded-full bg-gold"></span> C-Suite Recruitment
                </li>
                <li className="flex items-center gap-2 text-sm text-ink font-medium">
                  <span className="size-1.5 rounded-full bg-gold"></span> Board Director Search
                </li>
              </ul>
            </div>

            {/* Card 2 - Sparring Partner */}
            <div className="group bg-white p-8 md:p-10 rounded-xl border border-stone/20 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300">
              <div className="size-14 rounded-lg bg-gold/10 text-gold flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-ink mb-3">Sparring Partner</h4>
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

            {/* Card 3 - Ecosystem */}
            <div className="group bg-white p-8 md:p-10 rounded-xl border border-stone/20 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300">
              <div className="size-14 rounded-lg bg-gold/10 text-gold flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-ink mb-3">Ecosystem</h4>
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

      {/* METHOD SECTION - Image + Content */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image with testimonial overlay */}
          <div className="relative h-[600px] w-full rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-105 duration-700"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDf9NCFAalG-Z98plrKXAhmL0MW6c_vO2x6NhxAwRUyMPkhetF93h7o0cnLYeLTcoE9mSY9K2OciDrogCDicVj5EGQBYbHTht_vd4A7SUPxsdieR3GEDKEEUqF-j0evcm67Y5AuUe-cjqqwQQJboM2c4OXVIw2Gu7pH0IRp5e4B5IXUSLNgceUN9N6IB5XfTc0KgNOaFkj-Ywu7HtoZzTW3wyUQNAuA1ma2fhJ7S9v901tyQVCei4-CYSUu965nClohV2EENYol1K0")`
              }}
            />
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur p-6 rounded-lg border-l-4 border-gold shadow-lg">
              <p className="text-ink font-medium text-lg italic">"They challenged our brief in ways that made us uncomfortable. Then they delivered exactly what we needed."</p>
              <p className="text-stone text-sm mt-4 font-bold uppercase tracking-wide">— CEO, Private Equity Portfolio</p>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8">
            <span className="text-gold font-bold tracking-widest uppercase text-sm">Our Approach</span>
            <h2 className="text-4xl md:text-5xl font-bold text-ink leading-tight tracking-tight">Four steps. Full commitment.</h2>
            <p className="text-stone text-lg leading-relaxed">
              Traditional search firms rely on databases. We rely on dialogue. The perfect talent is rarely "looking." They are busy leading, innovating, and driving results.
            </p>
            <p className="text-stone text-lg leading-relaxed">
              Our method involves deep immersion into your culture, followed by a targeted, discreet outreach strategy that respects privacy while compelling with opportunity.
            </p>
            <div className="pt-4">
              <Link href="/approach" className="flex items-center gap-2 text-gold font-bold text-lg group hover:underline underline-offset-4">
                Learn about our process
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-8 border-t border-stone/20 pt-8">
              <div>
                <h3 className="text-4xl font-bold text-ink mb-1">95%</h3>
                <p className="text-stone text-sm">Retention after 24 months</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-ink mb-1">8</h3>
                <p className="text-stone text-sm">Weeks to signed offer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 lg:px-12 bg-ink text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(#CFC8BB 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">Let's talk.</h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            The first conversation is free. The value isn't.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="flex items-center justify-center rounded-lg h-12 px-8 bg-gold text-white hover:bg-gold/90 transition-colors text-base font-bold tracking-wide"
            >
              Start a conversation
            </Link>
            <Link
              href="/approach"
              className="flex items-center justify-center rounded-lg h-12 px-8 bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-colors text-base font-bold tracking-wide"
            >
              Discover the method
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
