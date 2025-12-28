import Link from "next/link";

export default function Homepage() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO - avec image de fond */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-end pb-20 md:pb-32 px-6 lg:px-12 overflow-hidden group">
        <div
          className="absolute inset-0 w-full h-full z-0 transition-transform duration-[20s] ease-linear group-hover:scale-105 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 40%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,0.95) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC8tasP7mupglOaKmMnGil62wmQHm080VWa6jwcYJbVT88yvdWlt8DY7azjI4g-EMpVCxqokCUf3R2cqYzCH6FmyRxM0m7cC6VQChMUCmheVICi6qd0LB61ckwLBravSdDHglQVnAYHkmgtSApgJUBJlW6b9xZqVhOKaYUQX44UnQUTKGLlDz5hLgAvZZv-AB1xCMTdJ_egdO_o6l4Mcbz252AO26gNZLkf-w5Z6zub0pxYeXXDkeHWv4JsgIS7Kficc0qMPJ-RdfA")`
          }}
        />
        <div className="relative z-10 w-full max-w-[1440px] mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-[#0d121b] text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-[-0.03em] mb-6">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center">
          <div className="w-12 h-1 bg-[#1152d4] mb-12 rounded-full"></div>
          <h2 className="text-[#0d121b] text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-[-0.02em] max-w-5xl mx-auto mb-8">
            "We share your ambition. We own the outcome. We respect people."
          </h2>
          <p className="text-[#4c669a] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            In a landscape of constant change, leadership is the only constant. We specialize in finding the rare blend of vision, grit, and expertise that defines world-class executives.
          </p>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section className="py-20 px-6 lg:px-12 bg-[#f8f9fc] border-y border-[#e7ebf3]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-[#1152d4] font-bold tracking-widest uppercase text-sm mb-2 block">What we do</span>
              <h3 className="text-[#0d121b] text-3xl md:text-4xl font-bold tracking-tight">Three pillars. One standard.</h3>
            </div>
            <Link href="/approach" className="group flex items-center gap-2 text-[#0d121b] font-bold hover:text-[#1152d4] transition-colors">
              The approach
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Executive Search */}
            <div className="group bg-white p-8 md:p-10 rounded-xl border border-[#e7ebf3] hover:border-[#1152d4]/30 hover:shadow-xl hover:shadow-[#1152d4]/5 transition-all duration-300">
              <div className="size-14 rounded-lg bg-[#1152d4]/5 text-[#1152d4] flex items-center justify-center mb-8 group-hover:bg-[#1152d4] group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-[#0d121b] mb-3">Executive Search</h4>
              <p className="text-[#4c669a] leading-relaxed mb-6">Leadership roles. Rare specialists. End-to-end.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-[#0d121b] font-medium">
                  <span className="size-1.5 rounded-full bg-[#1152d4]"></span> C-Suite Recruitment
                </li>
                <li className="flex items-center gap-2 text-sm text-[#0d121b] font-medium">
                  <span className="size-1.5 rounded-full bg-[#1152d4]"></span> Board Director Search
                </li>
              </ul>
            </div>

            {/* Sparring Partner */}
            <div className="group bg-white p-8 md:p-10 rounded-xl border border-[#e7ebf3] hover:border-[#1152d4]/30 hover:shadow-xl hover:shadow-[#1152d4]/5 transition-all duration-300">
              <div className="size-14 rounded-lg bg-[#1152d4]/5 text-[#1152d4] flex items-center justify-center mb-8 group-hover:bg-[#1152d4] group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-[#0d121b] mb-3">Sparring Partner</h4>
              <p className="text-[#4c669a] leading-relaxed mb-6">We challenge the brief. You own the decision.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-[#0d121b] font-medium">
                  <span className="size-1.5 rounded-full bg-[#1152d4]"></span> Brief Challenge
                </li>
                <li className="flex items-center gap-2 text-sm text-[#0d121b] font-medium">
                  <span className="size-1.5 rounded-full bg-[#1152d4]"></span> Criteria Sharpening
                </li>
              </ul>
            </div>

            {/* Ecosystem */}
            <div className="group bg-white p-8 md:p-10 rounded-xl border border-[#e7ebf3] hover:border-[#1152d4]/30 hover:shadow-xl hover:shadow-[#1152d4]/5 transition-all duration-300">
              <div className="size-14 rounded-lg bg-[#1152d4]/5 text-[#1152d4] flex items-center justify-center mb-8 group-hover:bg-[#1152d4] group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-[#0d121b] mb-3">Ecosystem</h4>
              <p className="text-[#4c669a] leading-relaxed mb-6">Specialised ventures. Same standard.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-[#0d121b] font-medium">
                  <span className="size-1.5 rounded-full bg-[#1152d4]"></span> Tailor Shift (Luxury)
                </li>
                <li className="flex items-center gap-2 text-sm text-[#0d121b] font-medium">
                  <span className="size-1.5 rounded-full bg-[#1152d4]"></span> Paris (Careers)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH SECTION - Two columns with image */}
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
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur p-6 rounded-lg border-l-4 border-[#1152d4] shadow-lg">
              <p className="text-[#0d121b] font-medium text-lg italic">
                "Irbis Partners understood our culture from day one. Their precision is unmatched."
              </p>
              <p className="text-[#4c669a] text-sm mt-4 font-bold uppercase tracking-wide">— CEO, Global Tech</p>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8">
            <span className="text-[#1152d4] font-bold tracking-widest uppercase text-sm">Our Method</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0d121b] leading-tight tracking-tight">Four steps. Full commitment.</h2>
            <div className="space-y-4">
              {[
                { num: "01", title: "Align", desc: "Stakes. Success. Non-negotiables." },
                { num: "02", title: "Map", desc: "Research. Access. Reality." },
                { num: "03", title: "Understand", desc: "Trajectory. Judgement. Fit." },
                { num: "04", title: "Decide", desc: "Support. Control. Close." },
              ].map((step) => (
                <div key={step.num} className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#f8f9fc] transition-colors">
                  <span className="text-[#1152d4] font-bold text-sm">{step.num}</span>
                  <div>
                    <h4 className="font-bold text-[#0d121b]">{step.title}</h4>
                    <p className="text-[#4c669a] text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <Link href="/approach" className="flex items-center gap-2 text-[#1152d4] font-bold text-lg group hover:underline underline-offset-4">
                Learn about our process
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-8 border-t border-[#e7ebf3] pt-8">
              <div>
                <h3 className="text-4xl font-bold text-[#0d121b] mb-1">95%</h3>
                <p className="text-[#4c669a] text-sm">Alignment rate</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-[#0d121b] mb-1">8 wks</h3>
                <p className="text-[#4c669a] text-sm">Avg. placement</p>
              </div>
            </div>
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
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Ready to shape your future leadership? Let's discuss how we can help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="flex items-center justify-center rounded-lg h-12 px-8 bg-[#1152d4] text-white hover:bg-[#0d3da0] transition-colors text-base font-bold tracking-wide"
            >
              Start a conversation
            </Link>
            <Link
              href="/references"
              className="flex items-center justify-center rounded-lg h-12 px-8 bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-colors text-base font-bold tracking-wide"
            >
              View references
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
