import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { getCandidates } from "@/app/actions/candidates";
import { CandidateList } from "@/components/candidate-list";
import { CandidateSearch } from "@/components/candidate-search";
import { searchCandidates } from "@/app/actions/search";
import Link from "next/link";

export default async function CandidatesPage({
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

  let candidates = [];
  let total = 0;

  if (semanticQuery) {
    const result = await searchCandidates(semanticQuery);
    candidates = result.candidates;
    total = candidates.length; // Semantic search usually returns a fixed number of results
  } else {
    const result = await getCandidates({ page, search });
    candidates = result.candidates;
    total = result.total;
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-primary">Talent Pool</h1>
        <div className="flex gap-2">
          <Link
            href="/dashboard/talents/new"
            className="button-secondary"
          >
            Manual Entry
          </Link>
          <Link
            href="/upload"
            className="button-primary"
          >
            Profile Ingestion
          </Link>
        </div>
      </div>

      {/* Simple Search Input */}
      {!semanticQuery && (
        <form className="flex gap-2">
          <input
            type="text"
            name="search"
            defaultValue={search}
            placeholder="Filter by name or email..."
            className="input max-w-md"
          />
          <button
            type="submit"
            className="button-secondary"
          >
            Filter
          </button>
        </form>
      )}

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-primary">Precision Search</h2>
          {semanticQuery && (
            <Link href="/dashboard/talents" className="text-sm text-accent-primary hover:text-accent-primary-hover">
              Clear Search
            </Link>
          )}
        </div>
        <CandidateSearch onSearch={async (query) => {
          'use server';
          redirect(`/dashboard/talents?semantic=${encodeURIComponent(query)}`);
        }} />
      </div>

      <CandidateList candidates={candidates} />

      {/* Pagination Controls - Only show for standard search */}
      {!semanticQuery && (
        <div className="flex justify-between items-center mt-4">
          <div className="text-secondary text-sm">
            Showing {candidates.length} of {total} talents
          </div>
          <div className="flex gap-2">
            {page > 1 && (
              <Link
                href={`/dashboard/talents?page=${page - 1}&search=${search}`}
                className="button-secondary"
              >
                Previous
              </Link>
            )}
            {/* Check if we have more pages based on total count */}
            {page * 10 < total && (
              <Link
                href={`/dashboard/talents?page=${page + 1}&search=${search}`}
                className="button-secondary"
              >
                Next
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
