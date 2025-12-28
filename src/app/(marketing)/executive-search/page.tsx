import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ExecutiveSearchPage() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="bg-ivory min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-display mb-6">
          Appointments that land.
        </h1>
        <p className="text-xl text-text-secondary font-medium">
          End-to-end. High bar. Real cadence.
        </p>
      </section>

      {/* SPARRING PARTNER */}
      <section className="bg-white py-24 px-6">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-h2 mb-6">
              More than search.
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              We challenge the brief. Test assumptions. Sharpen criteria. To protect the decision.
            </p>
          </div>
          <div className="bg-background-secondary aspect-video rounded-lg flex items-center justify-center border border-border-primary">
             {/* Visual placeholder */}
             <div className="text-text-tertiary text-sm">Visual: Sparring Session</div>
          </div>
        </div>
      </section>

      {/* 8D ALIGNMENT */}
      <section className="bg-ivory py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-h2 mb-6">
            Eight dimensions.
          </h2>
          <p className="text-lg text-text-secondary mb-12">
            Competencies. Style. Trajectory. Values. Potential. Culture. Adaptability. Vision.
          </p>
          
          <div className="max-w-xl mx-auto bg-white rounded-xl p-12 aspect-square flex items-center justify-center border border-border-primary shadow-sm">
            {/* Radar Chart SVG Placeholder */}
            <svg viewBox="0 0 100 100" className="w-full h-full text-border-strong">
              <polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <polygon points="50,20 80,50 50,80 20,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <polygon points="50,30 70,50 50,70 30,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" />
              <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.5" />
              
              {/* Data Shape */}
              <polygon points="50,15 85,50 50,75 25,50" fill="var(--accent-primary)" fillOpacity="0.1" stroke="var(--accent-primary)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 px-6">
        <div className="container mx-auto max-w-xl">
          <h2 className="text-h2 text-center mb-12">
            Discuss a mandate.
          </h2>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-text-primary">Name</label>
              <input id="name" className="input" placeholder="Your name" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-text-primary">Email</label>
              <input id="email" type="email" className="input" placeholder="Your email" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="text-sm font-medium text-text-primary">Company</label>
              <input id="company" className="input" placeholder="Your company" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-text-primary">Message</label>
              <textarea 
                id="message" 
                className="input min-h-[120px]"
                placeholder="Tell us about your needs"
              />
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
