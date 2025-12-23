import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold mb-8">Contactez-nous</h1>
          <p className="text-lg mb-8">
            Prenez contact avec l'équipe Irbis pour discuter de vos besoins en executive search.
          </p>
          <form className="space-y-4">
            <Input placeholder="Votre Nom" />
            <Input type="email" placeholder="Votre Email" />
            <Input placeholder="Sujet" />
            <Textarea placeholder="Votre Message" />
            <Button type="submit" className="w-full">Envoyer</Button>
          </form>
        </div>
        <div>
          <Card>
            <CardContent className="pt-6">
              {/* Interactive Map Placeholder */}
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <p>Carte Interactive (à intégrer, e.g., Google Maps)</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
