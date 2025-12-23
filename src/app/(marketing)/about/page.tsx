import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      title: "Discipline",
      description: "Nous appliquons une rigueur méthodique à chaque étape du processus, de la définition du mandat à l'intégration finale. La discipline n'est pas une contrainte — c'est le fondement de l'excellence."
    },
    {
      title: "Présence",
      description: "Nous sommes engagés à chaque instant, disponibles pour répondre à vos questions et ajuster notre approche selon vos besoins. La présence signifie être là quand ça compte."
    },
    {
      title: "Illumination",
      description: "Nous apportons une clarté nouvelle grâce à notre méthodologie 8D, révélant des insights que d'autres pourraient manquer. L'illumination transforme l'incertitude en opportunité."
    },
    {
      title: "Élévation",
      description: "Nous élevons les standards de l'Executive Search, transformant chaque mandat en une opportunité de croissance mutuelle. L'élévation est notre ambition partagée."
    }
  ];

  const aiCapabilities = [
    {
      title: "Analyse Contextuelle",
      description: "Notre IA analyse chaque profil dans son contexte unique, au-delà des mots-clés et des compétences techniques."
    },
    {
      title: "Scoring 8D",
      description: "La matrice 8D évalue l'alignement sur huit dimensions clés : compétences, valeurs, potentiel, culture, et plus encore."
    },
    {
      title: "Matching Prédictif",
      description: "Nous identifions les candidats les plus susceptibles de réussir, avant même le premier entretien."
    },
    {
      title: "Apprentissage Continu",
      description: "Chaque placement enrichit notre compréhension, rendant nos recommandations plus précises au fil du temps."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <h1 className="text-5xl font-bold mb-6">Method-obsessed. Human-led.</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Irbis est né d'une conviction simple : l'excellence en recrutement ne se trouve pas, elle se détecte. 
            Nous combinons l'intuition humaine avec la précision algorithmique pour transformer l'Executive Search.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/executive-search">
              <Button size="lg">Découvrir nos Services</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">Nous Contacter</Button>
            </Link>
          </div>
        </section>

        {/* Founder Energy Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Une Vision, Une Méthode</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Irbis a été fondé avec une mission claire : réinventer l'Executive Search en plaçant l'alignement au cœur du processus.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Nous avons observé que les approches traditionnelles se concentrent trop souvent sur les compétences techniques au détriment des dimensions humaines qui font la différence entre un bon recrutement et un excellent.
              </p>
              <p className="text-lg text-muted-foreground">
                Notre méthodologie 8D est le fruit de cette réflexion : un cadre rigoureux qui capture l'essence de chaque talent et de chaque mandat.
              </p>
            </div>
            <div className="bg-muted/50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Notre Promesse</h3>
              <p className="text-lg italic">
                "Nous ne cherchons pas à remplacer l'humain par la technologie. Nous utilisons la technologie pour amplifier l'humain."
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Nos Valeurs Fondamentales</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-2xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* AI-Augmented Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center">Augmenté par l'IA, Guidé par l'Humain</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Notre technologie n'est pas une boîte noire. C'est un outil transparent qui nous aide à prendre des décisions plus éclairées, 
            tout en gardant l'humain au centre de chaque interaction.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {aiCapabilities.map((capability, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Method + Connection Section */}
        <section className="mb-20">
          <div className="bg-primary/5 rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Méthode + Connexion</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
              La meilleure méthodologie ne sert à rien sans une véritable connexion. Chez Irbis, nous investissons du temps 
              pour comprendre votre culture, vos défis et vos aspirations. C'est cette connexion qui transforme un processus 
              en partenariat.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">8D</div>
                <p className="text-muted-foreground">Dimensions d'alignement</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Engagement jusqu'à la nomination</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">∞</div>
                <p className="text-muted-foreground">Potentiel de croissance partagée</p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Agent Master Instructions Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center">Transparence Technologique</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
            Nous croyons en la transparence de nos processus. Voici les principes qui guident notre utilisation de l'IA :
          </p>
          <div className="space-y-4 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">1. L'IA est un assistant, pas un décideur</h3>
                <p className="text-muted-foreground">
                  Toutes les recommandations sont validées par des experts humains. L'IA propose, l'humain décide.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">2. Confidentialité par conception</h3>
                <p className="text-muted-foreground">
                  Les données sensibles ne sont jamais partagées avec des tiers. Notre infrastructure respecte les standards les plus élevés de sécurité.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">3. Explicabilité des décisions</h3>
                <p className="text-muted-foreground">
                  Nous pouvons expliquer pourquoi un profil est recommandé. La transparence est essentielle pour la confiance.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">4. Amélioration continue</h3>
                <p className="text-muted-foreground">
                  Chaque interaction nous apprend. Nous utilisons ces apprentissages pour améliorer constamment nos algorithmes et nos processus.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à Élever vos Standards ?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Découvrez comment Irbis peut transformer votre approche du recrutement exécutif.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/executive-search">
              <Button size="lg">Explorer nos Services</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">Démarrer une Conversation</Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
