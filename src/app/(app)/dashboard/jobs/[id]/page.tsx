import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MatchList } from '@/components/match-list';
import { RunMatchingButton } from '@/components/run-matching-button';
import { formatDistanceToNow } from 'date-fns';

interface JobDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function JobDetailsPage({ params }: JobDetailsPageProps) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: job } = await supabase
    .from('jobs')
    .select('*')
    .eq('id', id)
    .single();

  if (!job) {
    notFound();
  }

  const { data: matches } = await supabase
    .from('matches')
    .select(`
      *,
      candidate:candidates (
        id,
        name,
        email,
        skills
      )
    `)
    .eq('job_id', id)
    .order('score', { ascending: false });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <Link href="/dashboard/jobs" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
          &larr; Back to Jobs
        </Link>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{job.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className={`px-2 py-0.5 rounded-full ${
                job.status === 'open' ? 'bg-green-900 text-green-200' :
                job.status === 'closed' ? 'bg-red-900 text-red-200' :
                'bg-gray-700 text-gray-200'
              }`}>
                {job.status.toUpperCase()}
              </span>
              <span>Created {formatDistanceToNow(new Date(job.created_at), { addSuffix: true })}</span>
            </div>
          </div>
          <div className="flex gap-3">
            <RunMatchingButton jobId={id} />
            <Link
              href={`/dashboard/jobs/${id}/edit`}
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center"
            >
              Edit Job
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-gray-900 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Description</h2>
            <p className="text-gray-300 whitespace-pre-wrap">{job.description}</p>
            
            {job.requirements && job.requirements.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-white mb-3">Requirements</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {job.requirements.map((req: string, i: number) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <MatchList matches={matches || []} />
        </div>

        <div className="lg:col-span-1">
          <div className="bg-gray-900 rounded-lg p-6 sticky top-8">
            <h2 className="text-xl font-bold text-white mb-4">Stats</h2>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-400">Total Matches</div>
                <div className="text-2xl font-bold text-white">{matches?.length || 0}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Accepted</div>
                <div className="text-2xl font-bold text-green-400">
                  {matches?.filter((m: any) => m.status === 'accepted').length || 0}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Rejected</div>
                <div className="text-2xl font-bold text-red-400">
                  {matches?.filter((m: any) => m.status === 'rejected').length || 0}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
