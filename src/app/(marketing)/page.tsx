import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* ============================================
          HERO — "Le Seuil"
          Sanctuaire Sculptural: huge ceiling, text left
          ============================================ */}
      <section className="relative min-h-[90vh] flex flex-col justify-end pb-16 lg:pb-24 bg-[#FAF8F5]">
        {/* Huge ceiling space */}
        <div className="flex-1 min-h-[25vh]" />

        <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            {/* Overline */}
            <span className="block text-xs font-semibold text-[#C9A962] uppercase tracking-[0.2em] mb-6">
              Irbis Partners
            </span>

            {/* Gold line */}
            <div className="w-16 h-px bg-gradient-to-r from-[#C9A962] to-transparent mb-8" />

            {/* Headline — Monumental */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-[#1A1F36] leading-[1.1] tracking-tight mb-8">
              Executive Search with Adaptive Precision.
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-[#525252] leading-relaxed max-w-xl mb-10">
              The alliance of human intuition and algorithmic precision.
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A962] text-[#1A1F36] text-sm font-semibold tracking-wide rounded-md transition-all duration-300 hover:bg-[#A8893E] hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(201,169,98,0.15)]"
            >
              Start a conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          VISION — Quote section
          Centered, monumental, breathing space
          ============================================ */}
      <section className="py-32 lg:py-40 px-6 lg:px-12 bg-[#FAF8F5]">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center text-center">
          {/* Gold line */}
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A962] to-transparent mb-12" />

          {/* Quote */}
          <blockquote className="mb-8">
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-[#1A1F36] leading-tight tracking-tight max-w-4xl">
              &ldquo;Technology amplifies the human. Never replaces.&rdquo;
            </p>
          </blockquote>

          {/* Description */}
          <p className="text-base lg:text-lg text-[#525252] leading-relaxed max-w-2xl">
            In a landscape of constant change, leadership is the only constant. 
            We specialize in finding the unfindable—the rare blend of vision, 
            grit, and expertise that defines world-class executives.
          </p>
        </div>
      </section>

      {/* ============================================
          PORTFOLIO — "Une pièce, une œuvre"
          ONE product card, centered, monumental
          ============================================ */}
      <section className="py-32 lg:py-40 px-6 lg:px-12 bg-[#FAF8F5]">
        <div className="max-w-[1280px] mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="block text-xs font-semibold text-[#C9A962] uppercase tracking-[0.2em] mb-4">
              Ecosystem
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#1A1F36] tracking-tight">
              Ventures
            </h2>
          </div>

          {/* Single product card — TailorShift */}
          <div className="max-w-2xl mx-auto">
            <Link
              href="/tailor-shift"
              className="group block bg-white rounded-lg overflow-hidden shadow-[0_50px_100px_-20px_rgba(26,31,54,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_60px_120px_-20px_rgba(26,31,54,0.12)]"
            >
              {/* Visual placeholder */}
              <div className="aspect-[16/9] bg-[#F0EDE8] flex items-center justify-center">
                <div className="text-center">
                  <span className="font-serif text-2xl text-[#1A1F36]">TailorShift</span>
                  <p className="text-sm text-[#737373] mt-2">Luxury Talent Platform</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10">
                <h3 className="font-serif text-2xl lg:text-3xl text-[#1A1F36] mb-3 group-hover:text-[#C9A962] transition-colors">
                  TailorShift
                </h3>
                <p className="text-[#525252] leading-relaxed mb-6">
                  A curated talent platform connecting exceptional professionals 
                  with visionary brands in the luxury and retail space.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#C9A962] group-hover:gap-3 transition-all">
                  Discover
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>

          {/* Coming Soon — Paris */}
          <div className="max-w-md mx-auto mt-12 text-center">
            <p className="text-sm text-[#737373]">
              <span className="text-[#C9A962]">Paris</span> — Coming Soon
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          CONTACT CTA — Final call
          Minimal, powerful
          ============================================ */}
      <section className="py-32 lg:py-40 px-6 lg:px-12 bg-[#1A1F36]">
        <div className="max-w-[1280px] mx-auto text-center">
          {/* Gold line */}
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A962] to-transparent mx-auto mb-12" />

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#FAF8F5] tracking-tight mb-6">
            Let&apos;s talk.
          </h2>

          <p className="text-lg text-[#FAF8F5]/60 mb-10 max-w-lg mx-auto">
            The first conversation is free. The value isn&apos;t.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C9A962] text-[#1A1F36] text-sm font-semibold tracking-wide rounded-md transition-all duration-300 hover:bg-[#D4BC82] hover:-translate-y-0.5"
            >
              Start a conversation
            </Link>
            <Link
              href="/approach"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-[#FAF8F5] text-sm font-semibold tracking-wide rounded-md border border-[#FAF8F5]/20 transition-all duration-300 hover:bg-[#FAF8F5]/10"
            >
              Discover the method
            </Link>
          </div>
        </div>
      </section>

      {/* Signature */}
      <section className="py-12 bg-[#FAF8F5] text-center">
        <p className="text-xs text-[#A3A3A3] italic tracking-wide">
          Irbis is a House of Perspective.
        </p>
      </section>
    </>
  );
}
