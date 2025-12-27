import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";

export default function Homepage() {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 2: HERO */}
      <section className="bg-ivory min-h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-display font-serif font-bold text-ink mb-4">
          High standards.<br />
          Shared ambition.
        </h1>
        <p className="text-lg text-ink/80 mb-8">
          Executive search. Adaptive precision.
        </p>
        <div className="flex flex-col gap-4 items-center">
          <Button variant="default" size="lg" asChild>
            <Link href="/contact">Start a conversation</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/approach">The approach →</Link>
          </Button>
        </div>
      </section>

      {/* SECTION 3: WHAT WE DO */}
      <section className="bg-white py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="default" className="h-full">
              <CardTitle>Executive Search</CardTitle>
              <CardDescription className="text-base text-stone mt-4">
                Leadership roles. Rare specialists. End-to-end.
              </CardDescription>
              <div className="mt-auto pt-6">
                <Link href="/executive-search" className="text-sm font-medium text-ink hover:underline">
                  Explore →
                </Link>
              </div>
            </Card>
            <Card variant="default" className="h-full">
              <CardTitle>Sparring Partner</CardTitle>
              <CardDescription className="text-base text-stone mt-4">
                We challenge the brief. You own the decision.
              </CardDescription>
            </Card>
            <Card variant="default" className="h-full">
              <CardTitle>Ecosystem</CardTitle>
              <CardDescription className="text-base text-stone mt-4">
                Specialised ventures. Same standard.
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 4: METHOD */}
      <section className="bg-ivory py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-h2 font-serif font-semibold text-ink text-center mb-12">
            Four steps. Full commitment.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Align", sub: "Stakes. Success. Non-negotiables." },
              { num: "02", title: "Map", sub: "Research. Access. Reality." },
              { num: "03", title: "Understand", sub: "Trajectory. Judgement. Fit." },
              { num: "04", title: "Decide", sub: "Support. Control. Close." },
            ].map((step) => (
              <div key={step.num} className="bg-white rounded-lg p-6 border border-gray-200">
                <span className="text-sm font-bold text-gold block mb-2">{step.num}</span>
                <h3 className="text-xl font-semibold text-ink mb-2">{step.title}</h3>
                <p className="text-sm text-stone">{step.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY IRBIS */}
      <section className="bg-white py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-h2 font-serif font-semibold text-ink mb-12">
            Three commitments.
          </h2>
          <div className="flex flex-col gap-10 items-center">
            <p className="text-xl font-medium text-ink">1. We share your ambition.</p>
            <p className="text-xl font-medium text-ink">2. We own the outcome.</p>
            <p className="text-xl font-medium text-ink">3. We respect people.</p>
          </div>
        </div>
      </section>

      {/* SECTION 6: ECOSYSTEM */}
      <section className="bg-ivory py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-h2 font-serif font-semibold text-ink text-center mb-12">
            The ecosystem.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Executive Search", sub: "Flagship service.", cta: "Explore →", href: "/executive-search" },
              { title: "Tailor Shift", sub: "Luxury retail.", cta: "Visit →", href: "/tailor-shift" },
              { title: "Paris", sub: "Career clarity.", cta: "Visit →", href: "/paris" },
              { title: "Next", sub: "In development.", cta: "Contact →", href: "/contact" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-8 border border-gray-200 flex flex-col h-40 justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="text-stone mt-1">{item.sub}</p>
                </div>
                <Link href={item.href} className="text-sm font-medium text-ink hover:underline self-start">
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA */}
      <section className="bg-ink py-20 px-6 text-center">
        <h2 className="text-h1 font-serif font-semibold text-white mb-8">
          Let's talk.
        </h2>
        <Button variant="default" size="lg" asChild>
          <Link href="/contact">Start a conversation</Link>
        </Button>
      </section>
    </div>
  );
}
