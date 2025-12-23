import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { getTalents } from "@/app/actions/talents";
import { TalentList } from "@/components/talent-list";
import { TalentSearch } from "@/components/talent-search";
import { searchTalents } from "@/app/actions/search";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default async function TalentsPage({
  searchParams,
}: {
  searchParams: { page?: string; search?: string; semantic?: string };
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const page = Number(searchParams.page) || 1;
  const search = searchParams.search || '';
  const semanticQuery = searchParams.semantic || '';

  let talents = [];
  let total = 0;

  if (semanticQuery) {
    const result = await searchTalents(semanticQuery);
    talents = result.talents;
    total = talents.length; // Semantic search usually returns a fixed number of results
  } else {
    const result = await getTalents({ page, search });
    talents = result.talents;
    total = result.total;
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-primary">Réserve de talents</h1>
        <div className="flex gap-2">
          <Link href="/hunting/talents/create">
            <Button variant="outline">
              Saisie manuelle
            </Button>
          </Link>
          <Link href="/hunting/ingestion">
            <Button>
              Ingestion de profils
            </Button>
          </Link>
        </div>
      </div>

      {/* Simple Search Input */}
      {!semanticQuery && (
        <form className="flex gap-2">
          <Input
            type="text"
            name="search"
            defaultValue={search}
            placeholder="Filtrer par nom ou email..."
            className="max-w-md"
          />
          <Button type="submit" variant="outline">
            Filtrer
          </Button>
        </form>
      )}

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-primary">Recherche de précision</h2>
          {semanticQuery && (
            <Link href="/hunting/talents" className="text-sm text-accent-primary hover:text-accent-primary-hover">
              Effacer la recherche
            </Link>
          )}
        </div>
        <TalentSearch onSearch={async (query) => {
          'use server';
          redirect(`/hunting/talents?semantic=${encodeURIComponent(query)}`);
        }} />
      </div>

      <TalentList talents={candidates} />

      {/* Pagination Controls - Only show for standard search */}
      {!semanticQuery && (
        <div className="flex justify-between items-center mt-4">
          <div className="text-secondary text-sm">
            Affichage de {candidates.length} sur {total} talents
          </div>
          <div className="flex gap-2">
            {page > 1 && (
              <Link href={`/hunting/talents?page=${page - 1}&search=${search}`}>
                <Button variant="outline">
                  Précédent
                </Button>
              </Link>
            )}
            {/* Check if we have more pages based on total count */}
            {page * 10 < total && (
              <Link href={`/hunting/talents?page=${page + 1}&search=${search}`}>
                <Button variant="outline">
                  Suivant
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
