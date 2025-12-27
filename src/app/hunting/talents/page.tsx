import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TalentsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-ink">Talent Pool</h1>
        <Button variant="default" size="sm">Add Talent</Button>
      </div>

      {/* SEARCH & FILTERS */}
      <div className="flex gap-4">
        <Input placeholder="Search talents..." className="max-w-sm" />
        {/* Add filters here if needed */}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[
          { name: "Marc Dupont", title: "CTO", status: "available", initials: "MD" },
          { name: "Julie Smith", title: "VP Engineering", status: "in-process", initials: "JS" },
          { name: "Paul Richard", title: "Director", status: "placed", initials: "PR" },
          { name: "Anne Martin", title: "Head of Product", status: "available", initials: "AM" },
          { name: "Jean Leclerc", title: "Lead Dev", status: "available", initials: "JL" },
          { name: "Marie Dubois", title: "CPO", status: "in-process", initials: "MD" },
        ].map((talent, index) => (
          <Link key={index} href="/hunting/talents/1">
            <Card variant="default" className="h-full hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="flex flex-col items-center text-center gap-4 pt-6">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-ivory text-ink font-medium">{talent.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-ink">{talent.name}</h3>
                  <p className="text-sm text-stone">{talent.title}</p>
                </div>
                <Badge variant={talent.status === 'available' ? 'active' : talent.status === 'placed' ? 'closed' : 'progress'}>
                  {talent.status === 'in-process' ? 'In Process' : talent.status.charAt(0).toUpperCase() + talent.status.slice(1)}
                </Badge>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
