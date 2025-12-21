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
        <h1 className="text-3xl font-bold text-white">Talent Pool</h1>
        <div className="flex gap-2">
          <Link
            href="/dashboard/candidates/new"
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded border border-gray-700"
          >
            Manual Entry
          </Link>
          <Link
            href="/upload"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
            className="bg-gray-900 border border-gray-700 text-white rounded px-4 py-2 w-full max-w-md focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded border border-gray-700"
          >
            Filter
          </button>
        </form>
      )}

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">Precision Search</h2>
          {semanticQuery && (
            <Link href="/dashboard/candidates" className="text-sm text-blue-400 hover:text-blue-300">
              Clear Search
            </Link>
          )}
        </div>
        <CandidateSearch onSearch={async (query) => {
          'use server';
          redirect(`/dashboard/candidates?semantic=${encodeURIComponent(query)}`);
        }} />
      </div>

      <CandidateList candidates={candidates} />

      {/* Pagination Controls - Only show for standard search */}
      {!semanticQuery && (
        <div className="flex justify-between items-center mt-4">
          <div className="text-gray-400 text-sm">
            Showing {candidates.length} of {total} talents
          </div>
          <div className="flex gap-2">
            {page > 1 && (
              <Link
                href={`/dashboard/candidates?page=${page - 1}&search=${search}`}
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded border border-gray-700"
              >
                Previous
              </Link>
            )}
            {/* Check if we have more pages based on total count */}
            {page * 10 < total && (
              <Link
                href={`/dashboard/candidates?page=${page + 1}&search=${search}`}
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded border border-gray-700"
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
