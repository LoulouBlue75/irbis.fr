import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ReferencesPage() {
  const caseStudies = [
    { title: "Placement C-Level Tech", description: "Succès dans le placement d'un CTO pour une startup en croissance, avec 95% d'alignement 8D.", successRate: "98%" },
    { title: "Recrutement Luxe Retail", description: "Identification d'un Directeur des Opérations pour une marque de luxe, temps réduit de 40%.", successRate: "100%" },
    // Add more
  ];

  const testimonials = [
    { quote: "Irbis a dépassé nos attentes avec leur approche précise.", author: "Client Finance" },
    { quote: "Une expérience de recrutement sans égal.", author: "Client Industrie" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Références et Études de Cas</h1>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Études de Cas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((caseStudy, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{caseStudy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">{caseStudy.description}</p>
                  <p className="font-bold">Taux de Succès: {caseStudy.successRate}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Témoignages Clients</h2>
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
      </div>
    </div>
  );
}
