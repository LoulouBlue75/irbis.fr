import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Assuming shadcn components are installed

export default function ApproachPage() {
  const dimensions = [
    { title: "Dimension 1: Compétences Techniques", description: "Évaluation des hard skills alignées avec le mandat." },
    { title: "Dimension 2: Soft Skills", description: "Analyse des compétences comportementales et relationnelles." },
    { title: "Dimension 3: Potentiel de Croissance", description: "Évaluation du potentiel d'évolution et d'adaptation." },
    { title: "Dimension 4: Valeurs et Culture", description: "Alignement avec les valeurs de l'entreprise." },
    { title: "Dimension 5: Motivation et Engagement", description: "Niveau de motivation et d'engagement envers le rôle." },
    { title: "Dimension 6: Expérience Pertinente", description: "Expériences passées pertinentes pour le poste." },
    { title: "Dimension 7: Réseau et Influence", description: "Réseau professionnel et capacité d'influence." },
    { title: "Dimension 8: Stabilité et Fiabilité", description: "Stabilité professionnelle et fiabilité." },
  ];

  const steps = [
    { step: "1. Définition du Mandat", description: "Collaboration pour définir les critères précis du rôle." },
    { step: "2. Recherche et Identification", description: "Utilisation de l'algorithme 8D pour identifier les talents." },
    { step: "3. Évaluation et Scoring", description: "Scoring contextuel basé sur les 8 dimensions." },
    { step: "4. Entretiens et Validation", description: "Entretiens structurés pour valider l'alignement." },
    { step: "5. Présentation et Décision", description: "Présentation des shortlists avec données transparentes." },
    { step: "6. Intégration et Suivi", description: "Support pour l'intégration et suivi post-recrutement." },
  ];

  const testimonials = [
    { quote: "Irbis a transformé notre processus de recrutement. Leur approche 8D est révolutionnaire.", author: "CEO, Entreprise Tech" },
    { quote: "Grâce à Irbis, nous avons trouvé le talent parfait en un temps record.", author: "HR Director, Luxe Brand" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Notre Approche : La Méthodologie 8D</h1>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Les 8 Dimensions d'Alignement</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dimensions.map((dim, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>{dim.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{dim.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Étapes du Processus</h2>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">{step.step}</div>
                <div>
                  <h3 className="text-xl font-medium">{step.description}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Preuves de Succès</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((test, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <p className="italic mb-4">"{test.quote}"</p>
                  <p className="text-right font-medium">- {test.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        <div className="text-center">
          <Link href="/contact" className="button-primary">
            Nous Confier un Mandat
          </Link>
        </div>
      </div>
    </div>
  );
}
