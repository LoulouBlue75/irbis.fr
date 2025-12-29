import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroEditorial } from "@/components/sections/hero-editorial";

export default function HomePage() {
  return (
    <>
      {/* ============================================
          HERO — "L'Édition Architecturale"
          New Yorker / Magazine style
          ============================================ */}
      <HeroEditorial />

      {/* ============================================
          VISION — Quote section
          Centered, monumental, breathing space
          ============================================ */}
      <section className="py-32 lg:py-40 px-6 lg:px-12 bg-paper-cream">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center text-center">
          {/* Architectural grid line */}
          <div className="w-full h-px bg-ink-navy/5 mb-16" />

          {/* Gold line */}
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-foil-gold to-transparent mb-12" />

          {/* Quote */}
          <blockquote className="mb-8">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-ink-navy leading-tight tracking-tight max-w-4xl italic">
              &ldquo;Technology amplifies the human. Never replaces.&rdquo;
            </p>
          </blockquote>

          {/* Description */}
          <p className="text-base lg:text-lg text-ink-light leading-relaxed max-w-2xl">
            In a landscape of constant change, leadership is the only constant.
            We specialize in finding the unfindable—the rare blend of vision,
            grit, and expertise that defines world-class executives.
          </p>

          {/* Architectural grid line */}
          <div className="w-full h-px bg-ink-navy/5 mt-16" />
        </div>
      </section>

      {/* ============================================
          PORTFOLIO — "Une pièce, une oeuvre"
          Paper card style
          ============================================ */}
      <section className="py-32 lg:py-40 px-6 lg:px-12 bg-paper-cream">
        <div className="max-w-[1280px] mx-auto">
          {/* Section header - Magazine style */}
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-2 border-t border-ink-navy pt-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-foil-bronze">
                Ventures
              </span>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-ink-navy tracking-tight">
                Ecosystem
              </h2>
            </div>
          </div>

          {/* Single product card — TailorShift (Paper style) */}
          <div className="max-w-2xl mx-auto relative group">
            {/* Paper shadow */}
            <div className="absolute inset-0 bg-ink-navy translate-x-3 translate-y-3 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

            <Link
              href="/tailor-shift"
              className="relative block bg-paper-white border border-ink-navy/10 overflow-hidden transition-transform duration-500 group-hover:-translate-y-1"
            >
              {/* Visual placeholder */}
              <div className="aspect-[16/9] bg-paper-cream flex items-center justify-center border-b border-ink-navy/10">
                <div className="text-center">
                  <span className="font-display text-3xl text-ink-navy italic">TailorShift</span>
                  <p className="font-mono text-xs text-foil-bronze mt-2 uppercase tracking-widest">Luxury Talent Platform</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10">
                {/* Stationery header */}
                <div className="border-b-2 border-ink-navy pb-1 border-double mb-6">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-foil-bronze">Featured Venture</span>
                </div>

                <h3 className="font-display text-2xl lg:text-3xl text-ink-navy mb-3 group-hover:text-foil-gold transition-colors italic">
                  TailorShift
                </h3>
                <p className="text-ink-light leading-relaxed mb-6">
                  A curated talent platform connecting exceptional professionals
                  with visionary brands in the luxury and retail space.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-foil-gold group-hover:gap-3 transition-all">
                  Discover
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>

          {/* Coming Soon — Paris */}
          <div className="max-w-md mx-auto mt-12 text-center">
            <p className="font-mono text-xs text-ink-light uppercase tracking-widest">
              <span className="text-foil-gold">Paris</span> — Coming Soon
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          CONTACT CTA — Final call (Ink Navy section)
          ============================================ */}
      <section className="relative py-32 lg:py-40 px-6 lg:px-12 bg-ink-navy overflow-hidden">
        {/* Grid lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/4 top-0 bottom-0 w-px bg-paper-white/5"></div>
          <div className="absolute right-1/4 top-0 bottom-0 w-px bg-paper-white/5"></div>
        </div>

        <div className="max-w-[1280px] mx-auto text-center relative z-10">
          {/* Gold line */}
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-foil-gold to-transparent mx-auto mb-12" />

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-paper-cream tracking-tight mb-6 italic">
            Let&apos;s talk.
          </h2>

          <p className="text-lg text-paper-cream/60 mb-10 max-w-lg mx-auto">
            The first conversation is free. The value isn&apos;t.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foil-gold text-ink-navy text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-foil-bronze hover:-translate-y-0.5"
            >
              Start a conversation
            </Link>
            <Link
              href="/approach"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-paper-cream text-sm font-semibold tracking-wide border border-paper-cream/20 transition-all duration-300 hover:bg-paper-cream/10"
            >
              Discover the method
            </Link>
          </div>
        </div>
      </section>

      {/* Signature */}
      <section className="py-12 bg-paper-cream text-center border-t border-ink-navy/10">
        <p className="font-mono text-xs text-ink-light italic tracking-wide">
          Irbis is a House of Perspective.
        </p>
      </section>
    </>
  );
}
