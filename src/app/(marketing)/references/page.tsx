import { Card, CardTitle, CardDescription } from "@/components/ui/card";

export default function ReferencesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="bg-ivory min-h-[50vh] flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-display font-serif font-bold text-ink mb-4">
          Proof.
        </h1>
        <p className="text-lg text-ink/80">
          Selected outcomes.
        </p>
      </section>

      {/* CASES */}
      <section className="bg-white py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { sector: "Tech", role: "CTO", result: "95% alignment.", time: "8 weeks." },
              { sector: "Luxury", role: "Ops Director", result: "Placed.", time: "Still there." },
              { sector: "Finance", role: "CFO", result: "Pre-IPO.", time: "Delivered." },
              { sector: "SaaS", role: "VP Sales", result: "Revenue +40%.", time: "6 weeks." },
              { sector: "Retail", role: "CEO", result: "Turnaround.", time: "Confidential." },
              { sector: "Health", role: "Head of R&D", result: "Expert fit.", time: "10 weeks." },
            ].map((item, index) => (
              <Card key={index} variant="default" className="h-full">
                <CardTitle className="text-lg font-semibold text-ink">
                  {item.sector} — {item.role}
                </CardTitle>
                <CardDescription className="text-base text-stone mt-4">
                  {item.result} {item.time}
                </CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-ivory py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { value: "95%+", label: "Alignment" },
              { value: "8 wks", label: "Avg. time" },
              { value: "90%", label: "2yr retention" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <span className="text-display font-serif font-bold text-ink">{stat.value}</span>
                <span className="text-sm font-medium text-stone uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
