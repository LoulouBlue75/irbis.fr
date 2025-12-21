import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { getCandidate, getMatchesForCandidate } from "@/app/actions/candidates";
import { getActivities } from "@/app/actions/crm";
import { CandidateProfile } from "@/components/candidate-profile";
import { ActivityTimeline } from "@/components/crm/activity-timeline";
import { AddActivityForm } from "@/components/crm/add-activity-form";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function CandidateDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const [candidate, matches, activities] = await Promise.all([
    getCandidate(params.id),
    getMatchesForCandidate(params.id),
    getActivities(params.id),
  ]);

  if (!candidate) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-white mb-4">Talent Not Found</h2>
        <Link href="/dashboard/candidates" className="text-blue-400 hover:underline">
          Back to Talent Pool
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <Link
          href="/dashboard/candidates"
          className="inline-flex items-center text-gray-400 hover:text-white mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Talent Pool
        </Link>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Professional Footprint</h1>
          <Link
            href={`/dashboard/candidates/${params.id}/edit`}
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded border border-gray-700"
          >
            Edit Profile
          </Link>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <CandidateProfile candidate={candidate} />
          
          {/* Matches Section */}
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h2 className="text-xl font-bold text-white mb-4">Mandate Alignments</h2>
            {matches.length === 0 ? (
              <p className="text-gray-400">No alignments found for this talent.</p>
            ) : (
              <div className="space-y-4">
                {matches.map((match: any) => (
                  <div key={match.id} className="bg-gray-800 p-4 rounded-lg border border-gray-700 flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-medium text-white">
                        <Link href={`/dashboard/jobs/${match.job.id}`} className="hover:underline">
                          {match.job.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-400">Status: {match.job.status}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-400">
                        {(match.score * 100).toFixed(0)}%
                      </div>
                      <div className="text-xs text-gray-500">Compatibility Index</div>
                      <div className={`text-sm font-medium mt-1 ${
                        match.status === 'accepted' ? 'text-green-400' :
                        match.status === 'rejected' ? 'text-red-400' :
                        'text-yellow-400'
                      }`}>
                        {match.status.charAt(0).toUpperCase() + match.status.slice(1)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          {/* CRM / Activity Section */}
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">History & Follow-up</h3>
            <div className="mb-6">
              <AddActivityForm candidateId={candidate.id} />
            </div>
            <ActivityTimeline activities={activities} />
          </div>

          {/* Actions */}
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Actions</h3>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-3 transition-colors">
              Initiate Approach
            </button>
            <button className="w-full bg-red-900/20 hover:bg-red-900/40 text-red-400 border border-red-900/50 font-bold py-2 px-4 rounded transition-colors">
              Delete Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
