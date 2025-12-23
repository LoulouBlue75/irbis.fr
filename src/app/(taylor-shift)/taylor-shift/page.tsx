import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function TaylorShiftPage() {
  const dimensions = [
    { title: 'Competences', desc: 'Expertise technique et savoir-faire metier' },
    { title: 'Valeurs', desc: 'Adhesion aux codes et a l\'ethique du luxe' },
    { title: 'Potentiel', desc: 'Capacite d\'evolution et leadership' },
    { title: 'Culture', desc: 'Affinite avec l\'univers de la marque' },
    { title: 'Soft Skills', desc: 'Intelligence relationnelle et emotionnelle' },
    { title: 'Adaptabilite', desc: 'Flexibilite face aux exigences du retail' },
    { title: 'Engagement', desc: 'Passion pour l\'excellence du service' },
    { title: 'Vision', desc: 'Comprehension des enjeux strategiques' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Taylor Shift
          </h1>
          <p className="text-2xl md:text-3xl text-secondary mb-4 font-light">
            Le recrutement de luxe avec precision adaptative
          </p>
          <p className="text-lg text-tertiary max-w-3xl mx-auto mb-8">
            Une expertise exclusive dediee aux maisons de luxe, aux enseignes de prestige et aux marques iconiques.
            Nous identifions les talents qui incarnent l\'excellence du retail haut de gamme.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="https://taylor-shift.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                Acceder au site Taylor Shift
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Notre Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-700">Excellence du Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary">
                  Nous recrutons des professionnels qui comprennent l\'art du service client dans l\'univers du luxe.
                  Chaque interaction doit etre une experience memorable.
                </p>
              </CardContent>
            </Card>
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-700">Expertise Retail</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary">
                  Une connaissance approfondie des codes du luxe, des maisons de prestige et des attentes
                  d\'une cliente exigeante et internationale.
                </p>
              </CardContent>
            </Card>
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-700">Alignement 8D</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary">
                  Notre methodologie exclusive d\'alignement en 8 dimensions garantit un matching
                  precis entre les exigences des maisons et le potentiel des talents.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Expertise Section */}
      <section className="py-16 px-4 md:px-8 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Notre Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Maisons de Luxe</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-secondary">
                  <li>• Marques de mode et accessoires</li>
                  <li>• Haute horlogerie et joaillerie</li>
                  <li>• Parfumerie et cosmetiques de prestige</li>
                  <li>• Maroquinerie et maroquinerie d\'art</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Postes Cles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-secondary">
                  <li>• Directeurs de boutique</li>
                  <li>• Chefs de rayon et responsables</li>
                  <li>• Conseillers de vente experts</li>
                  <li>• Managers regionaux</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* 8D Approach Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            L\'Approche 8D Appliquee au Luxe
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {dimensions.map((dimension, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg text-amber-700">{dimension.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-secondary">{dimension.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* References Section */}
      <section className="py-16 px-4 md:px-8 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">References</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-amber-600 mb-2">95%</div>
                <p className="text-secondary">Taux de reussite des placements</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-amber-600 mb-2">50+</div>
                <p className="text-secondary">Maisons de luxe accompagnees</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-amber-600 mb-2">200+</div>
                <p className="text-secondary">Talents places en C-level</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Pret a trouver l\'excellence ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Decouvrez comment Taylor Shift peut transformer votre recrutement dans l\'univers du luxe.
          </p>
          <Link href="https://taylor-shift.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="bg-white text-amber-700 hover:bg-amber-50">
              Acceder au site Taylor Shift
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Back to Irbis */}
      <section className="py-8 px-4 md:px-8 bg-white text-center">
        <Link href="/" className="text-accent-primary hover:text-accent-primary-hover">
          ← Retour a Irbis Corporate
        </Link>
      </section>
    </div>
  );
}
