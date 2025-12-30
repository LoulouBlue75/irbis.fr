import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { HeroCinematic } from "@/components/sections/hero-cinematic";
import { LionReveal } from "@/components/sections/lion-reveal";
import { SplitSection } from "@/components/sections/split-section";

export default function HomePage() {
  return (
    <>
      {/* ============================================
          HERO — Cinematic GSAP Zoom
          Rio office → Panther logo reveal → CTAs
          ============================================ */}
      <HeroCinematic />

      {/* ============================================
          VISION — Split Screen
          Relentless pursuit, scientific rigor, impact
          ============================================ */}
      <SplitSection
        layout="image-left"
        image={{
          src: "/images/idea_2.png",
          alt: "Cabinet de réflexion stratégique",
        }}
        content={{
          label: "Vision",
          title: "Relentless. Like the pioneers who shaped history.",
          description: (
            <p>
              We pursue impact with scientific rigor. Every placement is a story
              we're proud to tell—a contribution that aligns interests and changes
              trajectories. No shortcuts. Only convictions.
            </p>
          ),
        }}
        background="cream"
      />

      {/* ============================================
          METHOD — Split Screen (inverse)
          Process, notes, methodology
          "Adaptive Precision"
          ============================================ */}
      <SplitSection
        layout="image-right"
        image={{
          src: "/images/idea_1.png",
          alt: "Methodologie Adaptive Precision",
        }}
        content={{
          label: "Method",
          title: "Adaptive Precision",
          description: (
            <p>
              No compromise on what matters. A mastery of what does.
              We adapt to your context, choose our battles wisely,
              and deliver with unwavering commitment.
            </p>
          ),
          cta: {
            label: "Discover our approach",
            href: "/approach",
          },
        }}
        background="white"
      />

      {/* ============================================
          ECOSYSTEM — Ventures Portfolio
          TailorShift + Paris (coming soon)
          ============================================ */}
      <section className="py-32 lg:py-40 px-6 lg:px-12 bg-paper-cream">
        <div className="max-w-[1440px] mx-auto">
          {/* Section header */}
          <div className="grid grid-cols-12 gap-6 mb-20">
            <div className="col-span-12 lg:col-span-2 border-t border-ink-navy pt-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foil-bronze">
                Ventures
              </span>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-ink-navy tracking-tight italic leading-[1.1]">
                Ecosystem
              </h2>
            </div>
          </div>

          {/* Ventures Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* TailorShift Card */}
            <a
              href="https://tailorshift.co"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              {/* Paper shadow */}
              <div className="absolute inset-0 bg-ink-navy translate-x-3 translate-y-3 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

              <div className="relative bg-paper-white border border-ink-navy/10 overflow-hidden transition-transform duration-500 group-hover:-translate-y-1">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/idea3.png"
                    alt="TailorShift - Atelier"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono uppercase tracking-widest bg-green-50 text-green-700 border border-green-200">
                      Live
                    </span>
                  </div>

                  <h3 className="font-display text-2xl lg:text-3xl text-ink-navy mb-3 group-hover:text-foil-gold transition-colors italic">
                    TailorShift
                  </h3>
                  <p className="text-ink-light leading-relaxed mb-6">
                    A curated talent platform connecting exceptional professionals
                    with visionary brands in the luxury and retail space.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-foil-gold group-hover:gap-3 transition-all">
                    Visit
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </a>

            {/* Paris Card - Coming Soon */}
            <div className="relative">
              <div className="relative bg-paper-white border border-ink-navy/10 overflow-hidden h-full flex flex-col">
                {/* Placeholder visual */}
                <div className="aspect-[4/3] bg-gradient-to-br from-paper-cream to-paper-white flex items-center justify-center border-b border-ink-navy/5">
                  <div className="text-center">
                    <span className="font-display text-4xl lg:text-5xl text-ink-navy/20 italic">
                      Paris
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10 flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono uppercase tracking-widest bg-paper-cream text-ink-light border border-ink-navy/10">
                      Coming Soon
                    </span>
                  </div>

                  <h3 className="font-display text-2xl lg:text-3xl text-ink-navy/40 mb-3 italic">
                    Paris
                  </h3>
                  <p className="text-ink-light/60 leading-relaxed">
                    A new bet in the making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          LION REVEAL + CTAs — Closing statement
          ============================================ */}
      <LionReveal />
    </>
  );
}
