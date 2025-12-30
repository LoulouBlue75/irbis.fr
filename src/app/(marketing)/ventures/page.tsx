import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

const ventures = [
  {
    name: "TailorShift",
    tagline: "The Luxury Talent Platform",
    description: "A curated platform connecting exceptional professionals with visionary luxury and retail brands.",
    status: "live",
    href: "https://tailorshift.co",
    external: true,
  },
  {
    name: "Paris",
    tagline: "Coming Soon",
    description: "A new bet in the making.",
    status: "coming",
    href: "/paris",
    external: false,
  },
];

export default function VenturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-12 bg-paper-cream">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <p className="font-mono text-xs uppercase tracking-widest text-foil-bronze mb-8">
              Ventures
            </p>

            {/* Headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-ink-navy tracking-tight mb-6 italic">
              Ecosystem
            </h1>

            {/* Gold line */}
            <div className="w-24 h-px bg-gradient-to-r from-foil-gold to-transparent mb-8" />

            {/* Description */}
            <p className="text-lg text-ink-light leading-relaxed max-w-2xl">
              Beyond consulting, we build. Products, platforms, solutions
              shaping the future of recruitment and luxury.
            </p>
          </div>
        </div>
      </section>

      {/* Ventures Grid */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-paper-white border-t border-ink-navy/5">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ventures.map((venture) => (
              <div key={venture.name} className="group relative">
                {/* Paper shadow */}
                <div className="absolute inset-0 bg-ink-navy translate-x-3 translate-y-3 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                {venture.external ? (
                  <a
                    href={venture.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block bg-paper-cream border border-ink-navy/10 overflow-hidden transition-transform duration-500 group-hover:-translate-y-1"
                  >
                    <VentureContent venture={venture} />
                  </a>
                ) : (
                  <Link
                    href={venture.href}
                    className="relative block bg-paper-cream border border-ink-navy/10 overflow-hidden transition-transform duration-500 group-hover:-translate-y-1"
                  >
                    <VentureContent venture={venture} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-ink-navy">
        <div className="max-w-[1280px] mx-auto text-center">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-foil-gold to-transparent mx-auto mb-12" />
          <blockquote className="max-w-3xl mx-auto">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-paper-cream leading-tight tracking-tight italic">
              &ldquo;We don&apos;t just advise. We build.&rdquo;
            </p>
          </blockquote>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-foil-gold to-transparent mx-auto mt-12" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-paper-cream">
        <div className="max-w-[1280px] mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-foil-bronze mb-8">
            Collaboration
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light text-ink-navy tracking-tight mb-6 italic">
            Have a project?
          </h2>
          <p className="text-lg text-ink-light mb-10 max-w-lg mx-auto">
            We&apos;re always listening to bold ideas and strategic partnerships.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-foil-gold text-ink-navy text-sm font-medium tracking-wide transition-all duration-300 hover:bg-foil-bronze hover:-translate-y-0.5"
          >
            Let&apos;s talk
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function VentureContent({ venture }: { venture: typeof ventures[0] }) {
  return (
    <>
      {/* Visual placeholder */}
      <div className="aspect-[16/9] bg-paper-white flex items-center justify-center border-b border-ink-navy/10">
        <div className="text-center">
          <span className="font-display text-4xl text-ink-navy italic">{venture.name}</span>
          <p className="font-mono text-xs text-foil-bronze mt-2 uppercase tracking-widest">
            {venture.tagline}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 lg:p-10">
        {/* Status badge */}
        <div className="mb-6">
          <span className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-mono uppercase tracking-widest ${
            venture.status === 'live'
              ? 'bg-green-50 text-green-700 border border-green-200'
              : 'bg-paper-cream text-ink-light border border-ink-navy/10'
          }`}>
            {venture.status === 'live' ? 'Live' : 'Coming Soon'}
          </span>
        </div>

        <h3 className="font-display text-2xl lg:text-3xl text-ink-navy mb-3 group-hover:text-foil-gold transition-colors italic">
          {venture.name}
        </h3>
        <p className="text-ink-light leading-relaxed mb-6">
          {venture.description}
        </p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-foil-gold group-hover:gap-3 transition-all">
          {venture.external ? 'Visit' : 'Explore'}
          {venture.external ? (
            <ExternalLink className="w-4 h-4" />
          ) : (
            <ArrowRight className="w-4 h-4" />
          )}
        </span>
      </div>
    </>
  );
}
