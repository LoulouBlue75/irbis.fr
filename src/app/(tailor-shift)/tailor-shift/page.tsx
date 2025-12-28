import Link from "next/link";

export default function TailorShiftPage() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="bg-ivory min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-20">
        <span className="text-sm font-bold text-gold tracking-widest mb-6">TAILOR SHIFT</span>
        <h1 className="text-display mb-8">
          Luxury retail.<br />
          Adaptive precision.
        </h1>
        <Link href="/tailor-shift/upload" className="btn btn-primary">
          Enter Tailor Shift →
        </Link>
      </section>

      {/* MISSION */}
      <section className="bg-white py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Service", body: "The art of client experience." },
              { title: "Expertise", body: "Luxury codes. International standards." },
              { title: "Alignment", body: "8D methodology. Precise matching." },
            ].map((card) => (
              <div key={card.title} className="card-clean hover:border-border-strong transition-colors">
                <h3 className="text-h3 mb-4">{card.title}</h3>
                <p className="text-text-secondary">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section className="bg-ivory py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              { maison: "Fashion", role: "Boutique Directors" },
              { maison: "Watches & Jewellery", role: "Department Managers" },
              { maison: "Perfume & Beauty", role: "Sales Advisors" },
              { maison: "Leather & Craft", role: "Regional Managers" },
            ].map((item) => (
              <div key={item.maison} className="flex justify-between items-center border-b border-border-secondary pb-4">
                <span className="font-medium text-text-primary">{item.maison}</span>
                <span className="text-text-secondary">{item.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
