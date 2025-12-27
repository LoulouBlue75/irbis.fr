export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="bg-ivory min-h-[50vh] flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-display font-serif font-bold text-ink mb-4">
          Method-obsessed.<br />
          Human-led.
        </h1>
      </section>

      {/* QUOTE */}
      <section className="bg-white py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <blockquote className="text-h2 font-serif font-medium text-ink italic">
            "Technology amplifies the human. Never replaces."
          </blockquote>
        </div>
      </section>

      {/* AI PRINCIPLES */}
      <section className="bg-ivory py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-h2 font-serif font-semibold text-ink text-center mb-12">
            AI-augmented. Human-guided.
          </h2>
          <div className="flex flex-col gap-6">
            {[
              "AI proposes. Humans decide.",
              "Data stays here.",
              "Decisions are explainable.",
              "Every interaction teaches."
            ].map((principle, index) => (
              <div key={index} className="flex items-center gap-6 p-6 bg-white rounded-lg border border-gray-200">
                <span className="text-sm font-bold text-gold">0{index + 1}</span>
                <p className="text-lg text-ink font-medium">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { value: "8D", label: "Dimensions" },
              { value: "100%", label: "Commitment" },
              { value: "∞", label: "Potential" },
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
