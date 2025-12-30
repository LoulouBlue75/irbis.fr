import Link from "next/link";
import { ArrowRight, Shield, Compass, Handshake, Sparkles } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Absolute discretion",
    description: "Your approach stays confidential. We protect your current position and reputation.",
  },
  {
    icon: Compass,
    title: "Trajectory guidance",
    description: "Not just a placement. A reflection on your next step and long-term evolution.",
  },
  {
    icon: Handshake,
    title: "Shared ambition",
    description: "We only present opportunities aligned with your deep aspirations.",
  },
];

const profiles = [
  "Executives & C-Level",
  "Business Unit Directors",
  "Sector experts",
  "Transformation leaders",
  "International profiles",
];

export default function TalentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-12 bg-paper-cream">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <p className="font-mono text-xs uppercase tracking-widest text-foil-bronze mb-8">
              Talents
            </p>

            {/* Headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-ink-navy tracking-tight mb-6 italic">
              Your next step deserves the right encounter.
            </h1>

            {/* Gold line */}
            <div className="w-24 h-px bg-gradient-to-r from-foil-gold to-transparent mb-8" />

            {/* Description */}
            <p className="text-lg text-ink-light leading-relaxed mb-10 max-w-2xl">
              You&apos;re an accomplished leader. You&apos;re looking for an opportunity
              that matches your ambitions. We&apos;re here to create that encounter.
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-ink-navy text-paper-cream text-sm font-medium tracking-wide transition-all duration-300 hover:bg-foil-gold hover:text-ink-navy"
            >
              Share your trajectory
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our commitment */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-paper-white border-t border-ink-navy/5">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-2 border-t border-ink-navy pt-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-foil-bronze">
                Commitment
              </span>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-display text-3xl md:text-4xl font-light text-ink-navy tracking-tight">
                What we offer you
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="p-8 bg-paper-cream border border-ink-navy/5">
                <value.icon className="w-6 h-6 text-foil-gold mb-6" />
                <h3 className="font-display text-xl text-ink-navy mb-3">{value.title}</h3>
                <p className="text-sm text-ink-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profiles we seek */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-paper-cream">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-2 border-t border-ink-navy pt-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-foil-bronze">
                Profiles
              </span>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-display text-3xl md:text-4xl font-light text-ink-navy tracking-tight">
                We&apos;re looking for
              </h2>
            </div>
          </div>

          <div className="max-w-2xl">
            <div className="space-y-4">
              {profiles.map((profile) => (
                <div
                  key={profile}
                  className="flex items-center gap-4 p-6 bg-paper-white border border-ink-navy/5 transition-all duration-300 hover:border-foil-gold/30 hover:shadow-sm"
                >
                  <Sparkles className="w-5 h-5 text-foil-gold flex-shrink-0" />
                  <span className="text-ink-navy font-medium">{profile}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-ink-light">
              All industries: Tech, Industry, Luxury, Services, Finance, Retail.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-ink-navy">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-foil-gold mb-8 text-center">
            Process
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light text-paper-cream tracking-tight mb-16 text-center italic">
            How it works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border border-foil-gold text-foil-gold flex items-center justify-center mx-auto mb-6 font-display text-xl">
                1
              </div>
              <h3 className="font-display text-xl text-paper-cream mb-3">Confidential exchange</h3>
              <p className="text-sm text-paper-cream/60">
                First contact to understand your aspirations and context.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border border-foil-gold text-foil-gold flex items-center justify-center mx-auto mb-6 font-display text-xl">
                2
              </div>
              <h3 className="font-display text-xl text-paper-cream mb-3">Targeted opportunities</h3>
              <p className="text-sm text-paper-cream/60">
                We only present positions aligned with your trajectory.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border border-foil-gold text-foil-gold flex items-center justify-center mx-auto mb-6 font-display text-xl">
                3
              </div>
              <h3 className="font-display text-xl text-paper-cream mb-3">Complete support</h3>
              <p className="text-sm text-paper-cream/60">
                From first interview to onboarding and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-paper-cream">
        <div className="max-w-[1280px] mx-auto text-center">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-foil-gold to-transparent mx-auto mb-12" />
          <h2 className="font-display text-3xl md:text-4xl font-light text-ink-navy tracking-tight mb-6 italic">
            Ready for your next step?
          </h2>
          <p className="text-lg text-ink-light mb-10 max-w-lg mx-auto">
            The conversation is confidential. The opportunity can be transformative.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-foil-gold text-ink-navy text-sm font-medium tracking-wide transition-all duration-300 hover:bg-foil-bronze hover:-translate-y-0.5"
          >
            Share your trajectory
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
