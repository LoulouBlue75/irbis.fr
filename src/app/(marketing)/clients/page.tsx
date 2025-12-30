import Link from "next/link";
import { ArrowRight, Target, Shield, Globe, Zap } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Executive Search",
    description: "Identification et approche des leaders qui transformeront votre organisation.",
  },
  {
    icon: Shield,
    title: "Leadership Assessment",
    description: "Évaluation approfondie des compétences et du potentiel de vos candidats.",
  },
  {
    icon: Globe,
    title: "Market Intelligence",
    description: "Cartographie des talents et veille sectorielle pour éclairer vos décisions.",
  },
];

const sectors = ["Tech", "Industrie", "Luxe", "Services", "Finance", "Retail"];

export default function ClientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-12 bg-paper-cream">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <p className="font-mono text-xs uppercase tracking-widest text-foil-bronze mb-8">
              Clients
            </p>

            {/* Headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-ink-navy tracking-tight mb-6 italic">
              Trouvez le leader qui transformera votre organisation.
            </h1>

            {/* Gold line */}
            <div className="w-24 h-px bg-gradient-to-r from-foil-gold to-transparent mb-8" />

            {/* Description */}
            <p className="text-lg text-ink-light leading-relaxed mb-10 max-w-2xl">
              Chaque mandat est unique. Notre méthode Adaptive Precision s&apos;ajuste
              à votre contexte, votre culture et vos enjeux spécifiques.
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-ink-navy text-paper-cream text-sm font-medium tracking-wide transition-all duration-300 hover:bg-foil-gold hover:text-ink-navy"
            >
              Discutons de votre enjeu
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
                SLA de haut niveau
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-paper-cream border border-ink-navy/5">
              <Zap className="w-6 h-6 text-foil-gold mb-6" />
              <h3 className="font-display text-xl text-ink-navy mb-3">Réactivité</h3>
              <p className="text-sm text-ink-light leading-relaxed">
                Shortlist qualifiée en 3 semaines. Nous nous engageons sur des délais
                précis et les respectons.
              </p>
            </div>
            <div className="p-8 bg-paper-cream border border-ink-navy/5">
              <Shield className="w-6 h-6 text-foil-gold mb-6" />
              <h3 className="font-display text-xl text-ink-navy mb-3">Discrétion</h3>
              <p className="text-sm text-ink-light leading-relaxed">
                Confidentialité absolue. Processus board-level. Votre réputation
                est notre priorité.
              </p>
            </div>
            <div className="p-8 bg-paper-cream border border-ink-navy/5">
              <Target className="w-6 h-6 text-foil-gold mb-6" />
              <h3 className="font-display text-xl text-ink-navy mb-3">Précision</h3>
              <p className="text-sm text-ink-light leading-relaxed">
                Adaptive Precision : notre méthode calibrée à chaque mandat,
                chaque contexte, chaque culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-paper-cream">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-2 border-t border-ink-navy pt-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-foil-bronze">
                Services
              </span>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-display text-3xl md:text-4xl font-light text-ink-navy tracking-tight">
                Notre offre
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="group">
                <service.icon className="w-8 h-8 text-foil-gold mb-6 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-display text-2xl text-ink-navy mb-4 group-hover:text-foil-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-ink-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-ink-navy">
        <div className="max-w-[1280px] mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-foil-gold mb-8">
            Secteurs
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light text-paper-cream tracking-tight mb-12 italic">
            Expertise multisectorielle
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="px-6 py-3 text-sm font-medium text-paper-cream/80 border border-paper-cream/20 transition-colors hover:border-foil-gold hover:text-foil-gold"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-paper-cream">
        <div className="max-w-[1280px] mx-auto text-center">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-foil-gold to-transparent mx-auto mb-12" />
          <h2 className="font-display text-3xl md:text-4xl font-light text-ink-navy tracking-tight mb-6 italic">
            Prêt à trouver votre prochain leader ?
          </h2>
          <p className="text-lg text-ink-light mb-10 max-w-lg mx-auto">
            La première conversation est gratuite. La valeur ne l&apos;est pas.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-foil-gold text-ink-navy text-sm font-medium tracking-wide transition-all duration-300 hover:bg-foil-bronze hover:-translate-y-0.5"
          >
            Discutons de votre enjeu
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
