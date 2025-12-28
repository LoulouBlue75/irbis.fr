export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="bg-ivory min-h-[50vh] flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-display mb-6">
          Method-obsessed.<br />
          Human-led.
        </h1>
      </section>

      {/* VISION */}
      <section className="bg-white py-32 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <blockquote className="text-h2 font-serif font-medium italic leading-relaxed">
            "Technology amplifies the human. Never replaces."
          </blockquote>
        </div>
      </section>

      {/* AI TRANSPARENCY */}
      <section className="bg-ivory py-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-h2 text-center mb-16">
            AI-augmented. Human-guided.
          </h2>
          <div className="flex flex-col gap-4">
            {[
              "AI proposes. Humans decide.",
              "Data stays here.",
              "Decisions are explainable.",
              "Every interaction teaches."
            ].map((principle, index) => (
              <div key={index} className="flex items-center gap-8 p-8 bg-white rounded-lg border border-border-secondary hover:border-border-strong transition-colors">
                <span className="text-sm font-bold text-gold tracking-wider">0{index + 1}</span>
                <p className="text-xl font-medium">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { value: "8D", label: "Dimensions" },
              { value: "100%", label: "Commitment" },
              { value: "∞", label: "Potential" },
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
