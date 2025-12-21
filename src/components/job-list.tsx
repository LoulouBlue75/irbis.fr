'use client';

import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { deleteJob } from '@/app/actions/jobs';
import { useRealtimeSubscription } from '@/hooks/use-realtime-subscription';

export interface Job {
  id: string;
  title: string;
  status: string;
  created_at: string;
}

interface JobListProps {
  jobs: Job[];
}

export function JobList({ jobs }: JobListProps) {
  // Subscribe to realtime updates for jobs
  useRealtimeSubscription('jobs');

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this mandate?')) {
      await deleteJob(id);
    }
  };

  if (jobs.length === 0) {
    return (
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">Active Mandates</h2>
          <Link
            href="/dashboard/jobs/new"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            New Mandate
          </Link>
        </div>
        <div className="text-center text-gray-400 py-8 bg-gray-900 rounded-lg border border-gray-800">
          No active mandates. Create a new mandate to start matching.
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white">Active Mandates</h2>
        <Link
          href="/dashboard/jobs/new"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          New Mandate
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <div key={job.id} className="bg-gray-900 rounded-lg border border-gray-800 p-6 hover:border-gray-700 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-white">
                <Link href={`/dashboard/jobs/${job.id}`} className="hover:text-blue-400 transition-colors">
                  {job.title}
                </Link>
              </h3>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                job.status === 'open' ? 'bg-green-900/30 text-green-400 border border-green-900/50' : 
                job.status === 'closed' ? 'bg-red-900/30 text-red-400 border border-red-900/50' : 
                'bg-gray-800 text-gray-400 border border-gray-700'
              }`}>
                {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
              </span>
            </div>
            
            <div className="text-sm text-gray-500 mb-6">
              Opened {formatDistanceToNow(new Date(job.created_at), { addSuffix: true })}
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-800">
              <Link href={`/dashboard/jobs/${job.id}/edit`} className="text-sm text-gray-400 hover:text-white transition-colors">
                Edit Details
              </Link>
              <button
                onClick={() => handleDelete(job.id)}
                className="text-sm text-red-400 hover:text-red-300 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
