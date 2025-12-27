import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";

export default function ExecutiveSearchPage() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="bg-ivory min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-display font-serif font-bold text-ink mb-4">
          Appointments that land.
        </h1>
        <p className="text-lg text-ink/80">
          End-to-end. High bar. Real cadence.
        </p>
      </section>

      {/* SPARRING */}
      <section className="bg-white py-20 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-h2 font-serif font-semibold text-ink mb-6">
              More than search.
            </h2>
            <p className="text-lg text-stone">
              We challenge the brief. Test assumptions. Sharpen criteria.
            </p>
          </div>
          <div className="bg-ivory h-64 rounded-lg flex items-center justify-center text-stone">
            [Visual: Abstract or photo]
          </div>
        </div>
      </section>

      {/* 8D */}
      <section className="bg-ivory py-20 px-6 text-center">
        <div className="container mx-auto">
          <h2 className="text-h2 font-serif font-semibold text-ink mb-12">
            Eight dimensions.
          </h2>
          <div className="max-w-2xl mx-auto bg-white rounded-lg p-8 aspect-square flex items-center justify-center border border-gray-200">
            {/* Placeholder for Radar Chart */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 border border-gray-100 rounded-full" />
              <div className="absolute inset-12 border border-gray-100 rounded-full" />
              <div className="absolute inset-24 border border-gray-100 rounded-full" />
              <span className="text-stone font-medium">RADAR CHART</span>
              {/* Labels */}
              <span className="absolute top-4 left-1/2 -translate-x-1/2 text-xs text-ink">Competencies</span>
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-ink">Potential</span>
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-ink">Values</span>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-ink">Vision</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + FORM */}
      <section className="bg-white py-20 px-6">
        <div className="container mx-auto max-w-xl">
          <h2 className="text-h2 font-serif font-semibold text-ink text-center mb-12">
            Discuss a mandate.
          </h2>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-ink">Name</label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-ink">Email</label>
              <Input id="email" type="email" placeholder="Your email" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="text-sm font-medium text-ink">Company</label>
              <Input id="company" placeholder="Your company" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-ink">Message</label>
              <textarea 
                id="message" 
                className="flex min-h-[120px] w-full rounded-md border border-gray-200 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-stone focus-visible:outline-none focus-visible:border-gold focus-visible:ring-2 focus-visible:ring-gold/20 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Tell us about your needs"
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Send
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
