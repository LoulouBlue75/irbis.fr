import { Card, CardTitle, CardDescription } from "@/components/ui/card";

export default function ApproachPage() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="bg-ivory min-h-[50vh] flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-display font-serif font-bold text-ink mb-4">
          Method. Heart.
        </h1>
        <p className="text-lg text-ink/80">
          Structure that respects complexity.
        </p>
      </section>

      {/* PILLARS */}
      <section className="bg-white py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              { num: "01", title: "Discipline", sub: "Rigour without rigidity." },
              { num: "02", title: "Presence", sub: "Nuance. Human reality." },
              { num: "03", title: "Illumination", sub: "Signal. Trade-offs. Clarity." },
              { num: "04", title: "Elevation", sub: "Standards pulled upward." },
            ].map((pillar) => (
              <div key={pillar.num} className="flex flex-col gap-4">
                <span className="text-sm font-bold text-gold">{pillar.num} {pillar.title}</span>
                <div className="h-px bg-gray-200 w-full" />
                <p className="text-xl font-serif text-ink">{pillar.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFIDENTIALITY */}
      <section className="bg-ivory py-20 px-6 text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-h2 font-serif font-semibold text-ink mb-6">
            Confidential by design.
          </h2>
          <p className="text-lg text-stone">
            Visibility on match only. Salaries masked. Identities protected.
          </p>
        </div>
      </section>
    </div>
  );
}
