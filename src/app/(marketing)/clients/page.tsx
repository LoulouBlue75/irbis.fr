import Link from "next/link";
import { ArrowRight, Target, Shield, Zap } from "lucide-react";

const commitments = [
  {
    icon: Zap,
    title: "Responsiveness",
    description: "Qualified shortlist in 3 weeks. We commit to precise deadlines and deliver.",
  },
  {
    icon: Shield,
    title: "Discretion",
    description: "Absolute confidentiality. Board-level process. Your reputation is our priority.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Adaptive Precision: our method calibrated to each mandate, each context, each culture.",
  },
];

const services = [
  {
    title: "Executive Search",
    description: "Identification and approach of leaders who will transform your organization.",
  },
  {
    title: "Leadership Assessment",
    description: "In-depth evaluation of your candidates' skills and potential.",
  },
  {
    title: "Market Intelligence",
    description: "Talent mapping and sector watch to inform your decisions.",
  },
];

const sectors = ["Tech", "Industry", "Luxury", "Services", "Finance", "Retail"];

export default function ClientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-12 bg-paper-cream">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <p className="font-mono text-xs uppercase tracking-widest text-foil-bronze mb-8">
              Clients
            </p>

            {/* Headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-ink-navy tracking-tight mb-6 italic">
              Find the leader who will transform your organization.
            </h1>

            {/* Gold line */}
            <div className="w-24 h-px bg-gradient-to-r from-foil-gold to-transparent mb-8" />

            {/* Description */}
            <p className="text-lg text-ink-light leading-relaxed mb-10 max-w-2xl">
              Every mandate is unique. Our Adaptive Precision method adjusts
              to your context, your culture, and your specific stakes.
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-ink-navy text-paper-cream text-sm font-medium tracking-wide transition-all duration-300 hover:bg-foil-gold hover:text-ink-navy"
            >
              Discuss your challenge
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Commitment / SLA */}
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
                High-level SLA
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitments.map((item) => (
              <div key={item.title} className="p-8 bg-paper-cream border border-ink-navy/5">
                <item.icon className="w-6 h-6 text-foil-gold mb-6" />
                <h3 className="font-display text-xl text-ink-navy mb-3">{item.title}</h3>
                <p className="text-sm text-ink-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-paper-cream">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-2 border-t border-ink-navy pt-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-foil-bronze">
                Services
              </span>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-display text-3xl md:text-4xl font-light text-ink-navy tracking-tight">
                Our offering
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="group">
                <h3 className="font-display text-2xl text-ink-navy mb-4 group-hover:text-foil-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-ink-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-ink-navy">
        <div className="max-w-[1280px] mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-foil-gold mb-8">
            Sectors
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light text-paper-cream tracking-tight mb-12 italic">
            Multi-sector expertise
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="px-6 py-3 text-sm font-medium text-paper-cream/80 border border-paper-cream/20 transition-colors hover:border-foil-gold hover:text-foil-gold"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-paper-cream">
        <div className="max-w-[1280px] mx-auto text-center">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-foil-gold to-transparent mx-auto mb-12" />
          <h2 className="font-display text-3xl md:text-4xl font-light text-ink-navy tracking-tight mb-6 italic">
            Ready to find your next leader?
          </h2>
          <p className="text-lg text-ink-light mb-10 max-w-lg mx-auto">
            The first conversation is free. The value isn&apos;t.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-foil-gold text-ink-navy text-sm font-medium tracking-wide transition-all duration-300 hover:bg-foil-bronze hover:-translate-y-0.5"
          >
            Discuss your challenge
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
