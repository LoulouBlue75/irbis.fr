export default function ReferencesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="bg-ivory min-h-[50vh] flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-display mb-6">
          Proof.
        </h1>
        <p className="text-xl text-text-secondary font-medium">
          Selected outcomes.
        </p>
      </section>

      {/* CASES */}
      <section className="bg-white py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { sector: "Tech", role: "CTO", result: "95% alignment.", time: "8 weeks." },
              { sector: "Luxury", role: "Ops Director", result: "Placed.", time: "Still there." },
              { sector: "Finance", role: "CFO", result: "Pre-IPO.", time: "Delivered." },
              { sector: "SaaS", role: "VP Sales", result: "Revenue +40%.", time: "6 weeks." },
              { sector: "Retail", role: "CEO", result: "Turnaround.", time: "Confidential." },
              { sector: "Health", role: "Head of R&D", result: "Expert fit.", time: "10 weeks." },
            ].map((item, index) => (
              <div key={index} className="card-clean flex flex-col justify-between h-full hover:border-border-strong transition-colors">
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    {item.sector} — {item.role}
                  </h3>
                  <p className="text-text-secondary">
                    {item.result} {item.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-ivory py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { value: "95%+", label: "Alignment rate" },
              { value: "8 wks", label: "Avg. placement" },
              { value: "90%", label: "Retention 2yr" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-4">
                <span className="text-display font-serif font-bold">{stat.value}</span>
                <span className="text-sm font-bold text-text-secondary uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
