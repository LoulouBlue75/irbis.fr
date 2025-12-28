import Link from "next/link";

export default function Homepage() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-20 bg-background-primary">
        <h1 className="text-display mb-6">
          High standards.<br />
          Shared ambition.
        </h1>
        <p className="text-xl text-text-secondary mb-10 font-medium">
          Executive search. Adaptive precision.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link href="/contact" className="btn btn-primary">
            Start a conversation
          </Link>
          <Link href="/approach" className="btn btn-ghost">
            The approach →
          </Link>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-24 px-6 bg-background-primary border-t border-border-secondary">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="card-clean flex flex-col h-full justify-between group hover:border-border-strong transition-colors">
              <div>
                <h3 className="text-h3 mb-4">Executive Search</h3>
                <p className="text-text-secondary">
                  Leadership roles. Rare specialists. End-to-end.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/executive-search" className="text-sm font-medium text-text-primary hover:text-accent-primary transition-colors">
                  Explore →
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card-clean flex flex-col h-full justify-between group hover:border-border-strong transition-colors">
              <div>
                <h3 className="text-h3 mb-4">Sparring Partner</h3>
                <p className="text-text-secondary">
                  We challenge the brief. You own the decision.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card-clean flex flex-col h-full justify-between group hover:border-border-strong transition-colors">
              <div>
                <h3 className="text-h3 mb-4">Ecosystem</h3>
                <p className="text-text-secondary">
                  Specialised ventures. Same standard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE METHOD */}
      <section className="py-24 px-6 bg-background-secondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-h2 text-center mb-16">
            Four steps. Full commitment.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Align", sub: "Stakes. Success. Non-negotiables." },
              { num: "02", title: "Map", sub: "Research. Access. Reality." },
              { num: "03", title: "Understand", sub: "Trajectory. Judgement. Fit." },
              { num: "04", title: "Decide", sub: "Support. Control. Close." },
            ].map((step) => (
              <div key={step.num} className="bg-white p-8 rounded-lg border border-border-secondary hover:border-border-strong transition-all duration-300">
                <span className="text-xs font-bold text-gold block mb-4 tracking-wider">{step.num}</span>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IRBIS */}
      <section className="py-24 px-6 bg-background-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-h2 mb-16">
            Three commitments.
          </h2>
          <div className="flex flex-col gap-12 items-center">
            <p className="text-2xl font-medium text-text-primary">We share your ambition.</p>
            <div className="w-12 h-px bg-border-secondary"></div>
            <p className="text-2xl font-medium text-text-primary">We own the outcome.</p>
            <div className="w-12 h-px bg-border-secondary"></div>
            <p className="text-2xl font-medium text-text-primary">We respect people.</p>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="py-24 px-6 bg-ivory">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-h2 text-center mb-16">
            The ecosystem.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Executive Search", sub: "Flagship service.", cta: "Explore →", href: "/executive-search" },
              { title: "Tailor Shift", sub: "Luxury retail. Dedicated platform.", cta: "Visit →", href: "/tailor-shift" },
              { title: "Paris", sub: "Career clarity. 8D profile.", cta: "Visit →", href: "/paris" },
              { title: "Next", sub: "In development.", cta: "Contact →", href: "/contact" },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-lg border border-border-secondary flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:shadow-sm transition-all duration-300">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-text-secondary">{item.sub}</p>
                </div>
                <Link href={item.href} className="text-sm font-medium text-text-primary hover:text-accent-primary transition-colors whitespace-nowrap">
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 bg-ink text-center">
        <h2 className="text-display text-white mb-10">
          Let's talk.
        </h2>
        <Link href="/contact" className="btn btn-primary bg-white text-ink hover:bg-ivory border-none">
          Start a conversation
        </Link>
      </section>
    </div>
  );
}
