'use client';

interface TalentCardPaperProps {
  name: string;
  role: string;
  matchScore?: number;
  onClick?: () => void;
}

export function TalentCardPaper({ name, role, matchScore = 0, onClick }: TalentCardPaperProps) {
  return (
    <div className="relative group cursor-pointer" onClick={onClick}>
      {/* Effet d'ombre portée "Papier posé" */}
      <div className="absolute inset-0 bg-ink-navy translate-x-2 translate-y-2 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

      {/* Le Carton */}
      <div className="relative bg-paper-white p-8 border border-ink-navy/10 flex flex-col gap-6 transition-transform duration-500 group-hover:-translate-y-1">

        {/* Header : Filet double "Stationery" */}
        <div className="border-b-2 border-ink-navy pb-1 border-double mb-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-foil-bronze">Confidential Profile</span>
        </div>

        {/* Contenu Typographique */}
        <div>
          <h3 className="font-display text-4xl text-ink-navy italic">{name}</h3>
          <p className="font-sans text-sm mt-2 text-ink-light tracking-wide uppercase">{role}</p>
        </div>

        {/* Le "Sceau" 8D */}
        <div className="mt-auto pt-8 flex justify-between items-end">
           <div className="flex flex-col">
             <span className="font-mono text-[10px] text-foil-bronze">MATCH SCORE</span>
             <span className="font-display text-5xl text-ink-navy">{matchScore}<span className="text-2xl">%</span></span>
           </div>

           <div className="w-8 h-8 border border-foil-gold rounded-full flex items-center justify-center">
             <div className="w-1 h-1 bg-ink-navy rounded-full"></div>
           </div>
        </div>
      </div>
    </div>
  );
}
