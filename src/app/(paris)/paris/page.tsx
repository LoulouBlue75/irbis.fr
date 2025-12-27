import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";

export default function ParisPage() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="bg-ivory min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-display font-serif font-bold text-ink mb-4">
          Know your profile.
        </h1>
        <p className="text-lg text-ink/80">
          8 dimensions. One clarity.
        </p>
        <Button variant="default" size="lg" asChild className="mt-8">
          <Link href="/paris/enter">Enter Paris →</Link>
        </Button>
      </section>

      {/* CARDS */}
      <section className="bg-white py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Clarity", body: "Strengths. Gaps. Direction." },
              { title: "Guidance", body: "Recommendations based on you." },
              { title: "Confidence", body: "Know what makes you different." },
            ].map((item) => (
              <Card key={item.title} variant="default" className="h-full">
                <CardTitle className="text-xl font-semibold text-ink">{item.title}</CardTitle>
                <CardDescription className="text-base text-stone mt-4">
                  {item.body}
                </CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
