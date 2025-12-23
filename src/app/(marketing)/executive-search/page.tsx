import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ExecutiveSearchPage() {
  const sectors = [
    "Technologie",
    "Finance",
    "Luxe et Retail",
    "Santé",
    "Industrie",
  ];

  const whatYouCanExpect = [
    {
      title: "Précision Adaptative",
      description: "Notre méthodologie 8D assure un alignement parfait entre le talent et le mandat, avec un scoring contextuel pour une précision adaptative."
    },
    {
      title: "Confidentialité Absolue",
      description: "Les talents ne sont visibles que s'ils correspondent au mandat. Les budgets et identités sensibles sont masqués par conception."
    },
    {
      title: "Choix Éclairés",
      description: "Transparence des données et accès en temps réel aux informations pour les recruteurs comme pour les talents."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Executive Search par Irbis</h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Plus qu'une recherche — un partenariat de sparring
        </p>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Notre Expertise en Chasse de Têtes</h2>
          <p className="text-lg mb-6">
            Chez Irbis, nous excellons dans la chasse de têtes pour les postes C-level et exécutifs. Notre approche unique combine intuition humaine et précision algorithmique pour identifier les talents exceptionnels.
          </p>
          <h3 className="text-2xl font-medium mb-4">Secteurs Adressés</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {sectors.map((sector, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <p className="font-medium">{sector}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Plus qu'une recherche — un partenariat de sparring</h2>
          <p className="text-lg mb-8">
            Nous ne sommes pas des chasseurs de têtes traditionnels. Nous sommes des partenaires qui relèvent la barre — et restent responsables jusqu'à ce que la nomination aboutisse.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {whatYouCanExpect.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">La Différence Irbis</h2>
          <p className="text-lg mb-6">
            Contrairement aux approches traditionnelles, nous utilisons un scoring contextuel et une méthodologie 8D pour garantir que chaque alignement est basé sur une compréhension profonde des besoins et des aspirations.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Discipline</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nous appliquons une rigueur méthodique à chaque étape du processus, de la définition du mandat à l'intégration finale.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Présence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nous sommes engagés à chaque instant, disponibles pour répondre à vos questions et ajuster notre approche selon vos besoins.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Illumination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nous apportons une clarté nouvelle grâce à notre méthodologie 8D, révélant des insights que d'autres pourraient manquer.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Élévation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nous élevons les standards de l'Executive Search, transformant chaque mandat en une opportunité de croissance mutuelle.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Nous Confier un Mandat</h2>
          <p className="text-lg mb-6 text-center text-muted-foreground">
            Chaque mandat est unique — partagez vos attentes et nous construirons ensemble la solution adaptée.
          </p>
          <form className="max-w-md mx-auto space-y-4">
            <Input placeholder="Votre Nom" />
            <Input type="email" placeholder="Votre Email" />
            <Textarea placeholder="Description du Mandat" />
            <Button type="submit" className="w-full">Envoyer</Button>
          </form>
        </section>
        
        <div className="text-center">
          <Link href="/login" className="button-secondary">
            Accéder au Cockpit
          </Link>
        </div>
      </div>
    </div>
  );
}
