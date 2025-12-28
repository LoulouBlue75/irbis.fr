import Link from "next/link";

export default function ParisPage() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="bg-ivory min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-20">
        <span className="text-sm font-bold text-gold tracking-widest mb-6">PARIS</span>
        <h1 className="text-display mb-6">
          Know your profile.
        </h1>
        <p className="text-xl text-text-secondary font-medium mb-8">
          8 dimensions. One clarity.
        </p>
        <Link href="/paris/test" className="btn btn-primary">
          Enter Paris →
        </Link>
      </section>

      {/* BENEFITS */}
      <section className="bg-white py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Clarity", body: "Strengths. Gaps. Direction." },
              { title: "Guidance", body: "Recommendations based on you." },
              { title: "Confidence", body: "Know what makes you different." },
            ].map((card) => (
              <div key={card.title} className="card-clean hover:border-border-strong transition-colors">
                <h3 className="text-h3 mb-4">{card.title}</h3>
                <p className="text-text-secondary">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
