import Link from "next/link";
import { ArrowRight, Shield, Compass, Handshake, Sparkles } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Discrétion absolue",
    description: "Votre démarche reste confidentielle. Nous protégeons votre position actuelle et votre réputation.",
  },
  {
    icon: Compass,
    title: "Accompagnement de trajectoire",
    description: "Pas juste un placement. Une réflexion sur votre prochaine étape et votre évolution à long terme.",
  },
  {
    icon: Handshake,
    title: "Ambition partagée",
    description: "Nous ne proposons que des opportunités alignées avec vos aspirations profondes.",
  },
];

const profiles = [
  "Dirigeants & C-Level",
  "Directeurs de Business Units",
  "Experts sectoriels",
  "Leaders en transformation",
  "Profils internationaux",
];

export default function TalentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-12 bg-paper-cream">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <p className="font-mono text-xs uppercase tracking-widest text-foil-bronze mb-8">
              Talents
            </p>

            {/* Headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-ink-navy tracking-tight mb-6 italic">
              Votre prochaine étape mérite la bonne rencontre.
            </h1>

            {/* Gold line */}
            <div className="w-24 h-px bg-gradient-to-r from-foil-gold to-transparent mb-8" />

            {/* Description */}
            <p className="text-lg text-ink-light leading-relaxed mb-10 max-w-2xl">
              Vous êtes un leader accompli. Vous cherchez une opportunité à la hauteur
              de vos ambitions. Nous sommes là pour créer cette rencontre.
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-ink-navy text-paper-cream text-sm font-medium tracking-wide transition-all duration-300 hover:bg-foil-gold hover:text-ink-navy"
            >
              Partagez votre trajectoire
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Notre engagement */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-paper-white border-t border-ink-navy/5">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-2 border-t border-ink-navy pt-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-foil-bronze">
                Engagement
              </span>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-display text-3xl md:text-4xl font-light text-ink-navy tracking-tight">
                Ce que nous vous offrons
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="p-8 bg-paper-cream border border-ink-navy/5">
                <value.icon className="w-6 h-6 text-foil-gold mb-6" />
                <h3 className="font-display text-xl text-ink-navy mb-3">{value.title}</h3>
                <p className="text-sm text-ink-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profils recherchés */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-paper-cream">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-2 border-t border-ink-navy pt-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-foil-bronze">
                Profils
              </span>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-display text-3xl md:text-4xl font-light text-ink-navy tracking-tight">
                Nous recherchons
              </h2>
            </div>
          </div>

          <div className="max-w-2xl">
            <div className="space-y-4">
              {profiles.map((profile, index) => (
                <div
                  key={profile}
                  className="flex items-center gap-4 p-6 bg-paper-white border border-ink-navy/5 transition-all duration-300 hover:border-foil-gold/30 hover:shadow-sm"
                >
                  <Sparkles className="w-5 h-5 text-foil-gold flex-shrink-0" />
                  <span className="text-ink-navy font-medium">{profile}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-ink-light">
              Toutes industries : Tech, Industrie, Luxe, Services, Finance, Retail.
            </p>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-ink-navy">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-foil-gold mb-8 text-center">
            Processus
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light text-paper-cream tracking-tight mb-16 text-center italic">
            Comment ça fonctionne
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border border-foil-gold text-foil-gold flex items-center justify-center mx-auto mb-6 font-display text-xl">
                1
              </div>
              <h3 className="font-display text-xl text-paper-cream mb-3">Échange confidentiel</h3>
              <p className="text-sm text-paper-cream/60">
                Premier contact pour comprendre vos aspirations et votre contexte.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border border-foil-gold text-foil-gold flex items-center justify-center mx-auto mb-6 font-display text-xl">
                2
              </div>
              <h3 className="font-display text-xl text-paper-cream mb-3">Opportunités ciblées</h3>
              <p className="text-sm text-paper-cream/60">
                Nous vous présentons uniquement des postes alignés avec votre trajectoire.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border border-foil-gold text-foil-gold flex items-center justify-center mx-auto mb-6 font-display text-xl">
                3
              </div>
              <h3 className="font-display text-xl text-paper-cream mb-3">Accompagnement complet</h3>
              <p className="text-sm text-paper-cream/60">
                Du premier entretien jusqu&apos;à la prise de poste et au-delà.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-paper-cream">
        <div className="max-w-[1280px] mx-auto text-center">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-foil-gold to-transparent mx-auto mb-12" />
          <h2 className="font-display text-3xl md:text-4xl font-light text-ink-navy tracking-tight mb-6 italic">
            Prêt pour votre prochaine étape ?
          </h2>
          <p className="text-lg text-ink-light mb-10 max-w-lg mx-auto">
            La conversation est confidentielle. L&apos;opportunité peut être transformante.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-foil-gold text-ink-navy text-sm font-medium tracking-wide transition-all duration-300 hover:bg-foil-bronze hover:-translate-y-0.5"
          >
            Partagez votre trajectoire
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
