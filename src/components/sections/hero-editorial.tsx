import { ArrowRight } from "lucide-react";

export function HeroEditorial() {
  return (
    <section className="relative min-h-screen bg-paper-cream text-ink-navy pt-32 px-6 lg:px-12 overflow-hidden flex flex-col justify-between border-b border-ink-navy/10">

      {/* Background Grid Lines (Architectural) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-12 top-0 bottom-0 w-px bg-ink-navy/5"></div>
        <div className="absolute right-12 top-0 bottom-0 w-px bg-ink-navy/5"></div>
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-ink-navy/5"></div>
      </div>

      {/* Header Content */}
      <div className="relative z-10 grid grid-cols-12 gap-6 mb-24">
        {/* Date / Issue No (Style Magazine) */}
        <div className="col-span-12 lg:col-span-2 font-mono text-xs tracking-widest uppercase text-foil-bronze border-t border-ink-navy pt-4 mt-2">
          N° 01 — 2025
        </div>

        {/* Main Headline - Sculpturale */}
        <div className="col-span-12 lg:col-span-8 text-center">
          <h1 className="font-display text-7xl md:text-9xl leading-[0.85] tracking-tight text-ink-navy">
            <span className="block italic font-light ml-[-20%]">The</span>
            <span className="block font-medium">Alliance</span>
            <span className="block text-4xl md:text-5xl font-sans font-light tracking-wide mt-6 uppercase text-ink-light">
              Of Instinct & Precision
            </span>
          </h1>
        </div>

        {/* Manifesto column (New Yorker style) */}
        <div className="col-span-12 lg:col-span-2 flex flex-col justify-end border-t border-ink-navy pt-4 mt-2">
          <p className="font-sans text-xs leading-relaxed text-justify text-ink-light">
            <span className="font-bold text-ink-navy">IRBIS PARTNERS</span> is not a service provider. It is a house of perspective. We align ambition with reality through the rigor of the 8D methodology.
          </p>
        </div>
      </div>

      {/* Visual / Footer Area */}
      <div className="relative z-10 grid grid-cols-12 gap-6 pb-12 items-end">

        {/* Signature */}
        <div className="col-span-6 lg:col-span-4">
           <div className="w-16 h-px bg-foil-gold mb-6"></div>
           <span className="font-display italic text-2xl">Start the conversation</span>
        </div>

        {/* The "Seal" Button */}
        <div className="col-span-6 lg:col-span-4 flex justify-center">
          <button className="group relative w-32 h-32 rounded-full border border-ink-navy/10 flex items-center justify-center hover:scale-105 transition-transform duration-700 ease-out">
             <div className="absolute inset-2 rounded-full border border-foil-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             <ArrowRight className="w-8 h-8 text-ink-navy group-hover:text-foil-gold transition-colors" />
          </button>
        </div>

        {/* Abstract Data */}
        <div className="hidden lg:block col-span-4 text-right">
           <p className="font-mono text-xs text-foil-bronze">PARIS — 48.8566° N, 2.3522° E</p>
        </div>
      </div>
    </section>
  );
}
