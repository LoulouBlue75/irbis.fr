import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ParisPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Paris
          </h1>
          <p className="text-2xl md:text-3xl text-secondary mb-4 font-light">
            L'outil de carrière par excellence
          </p>
          <p className="text-lg text-tertiary max-w-3xl mx-auto mb-8">
            Découvrez votre profil unique grâce à notre méthodologie exclusive d'alignement en 8 dimensions.
            Comprenez vos forces, identifiez vos opportunités et construisez votre avenir professionnel.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="https://paris.irbis.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Accéder au site Paris
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 8D Test Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Le Test 8D : Découvrez Votre Profil Unique
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-blue-700">8 Dimensions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary mb-4">
                  Notre méthodologie exclusive évalue votre profil selon 8 dimensions clés :
                </p>
                <ul className="space-y-2 text-left text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary">1. Compétences</span>
                    <span>— Expertise technique et savoir-faire</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary">2. Valeurs</span>
                    <span>— Principes et éthique professionnelle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary">3. Potentiel</span>
                    <span>— Capacité d'évolution et leadership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary">4. Culture</span>
                    <span>— Affinité avec l'environnement et l'équipe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary">5. Soft Skills</span>
                    <span>— Intelligence relationnelle et émotionnelle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary">6. Adaptabilité</span>
                    <span>— Flexibilité face aux exigences changeantes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary">7. Engagement</span>
                    <span>— Passion et dévouement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary">8. Vision</span>
                    <span>— Compréhension des enjeux stratégiques</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-blue-700">Résultat Personnalisé</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary mb-4">
                  Recevez un rapport détaillé de votre profil avec :
                </p>
                <ul className="space-y-2 text-left text-secondary">
                  <li>• Votre score d'alignement global</li>
                  <li>• Vos forces dominantes</li>
                  <li>• Vos axes de développement</li>
                  <li>• Des recommandations de carrière personnalisées</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 md:px-8 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Les Bénéfices pour les Talents
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Clarté de Carrière</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary">
                  Identifiez vos forces et vos axes d'amélioration pour construire une trajectoire professionnelle cohérente.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Orientation Précise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary">
                  Bénéficiez de recommandations personnalisées basées sur votre profil unique 8D.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Confiance en Soi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary">
                  Comprenez ce qui vous rend unique et valorisez vos atouts différenciants.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coaching Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Offres de Coaching
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Coaching Individuel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary mb-4">
                  Un accompagnement personnalisé pour atteindre vos objectifs professionnels.
                </p>
                <ul className="space-y-2 text-secondary">
                  <li>• Sessions de coaching en face-à-face</li>
                  <li>• Plan d'action personnalisé</li>
                  <li>• Suivi de progression</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Coaching de Groupe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary mb-4">
                  Des ateliers collectifs pour développer vos compétences avec d'autres professionnels.
                </p>
                <ul className="space-y-2 text-secondary">
                  <li>• Workshops thématiques</li>
                  <li>• Exercices pratiques</li>
                  <li>• Networking entre pairs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Synergy with Irbis Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            La Synergie Paris × Irbis
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Paris et Irbis travaillent ensemble pour vous offrir une expérience complète de développement de carrière.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white text-primary">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-blue-700 mb-4">Pour les Talents</h3>
                <p className="text-secondary">
                  Utilisez Paris pour découvrir votre profil et bénéficier de nos offres de coaching personnalisées.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white text-primary">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-blue-700 mb-4">Pour les Entreprises</h3>
                <p className="text-secondary">
                  Irbis identifie les talents alignés avec vos mandats grâce à notre méthodologie 8D exclusive.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Prêt à Découvrir Votre Potentiel ?
          </h2>
          <p className="text-lg text-tertiary mb-8">
            Commencez votre parcours d'excellence dès aujourd'hui.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="https://paris.irbis.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Accéder au site Paris
              </Button>
            </Link>
            <Link href="/" className="text-accent-primary hover:text-accent-primary-hover">
              <Button size="lg" variant="outline">
                Retour à Irbis Corporate
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
