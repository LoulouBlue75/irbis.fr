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
          <h2 className="text-2xl font-bold text-primary">Active Mandates</h2>
          <Link
            href="/dashboard/mandates/new"
            className="button-primary"
          >
            New Mandate
          </Link>
        </div>
        <div className="text-center text-tertiary py-8 bg-secondary rounded-lg border border-primary">
          No active mandates. Create a new mandate to start matching.
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-primary">Active Mandates</h2>
        <Link
          href="/dashboard/mandates/new"
          className="button-primary"
        >
          New Mandate
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <div key={job.id} className="card hover:border-strong transition-colors">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-primary">
                <Link href={`/dashboard/mandates/${job.id}`} className="hover:text-accent-primary transition-colors">
                  {job.title}
                </Link>
              </h3>
              <span className={`badge ${
                job.status === 'open' ? 'badge-active' :
                job.status === 'closed' ? 'badge-inactive' :
                'badge-pending'
              }`}>
                {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
              </span>
            </div>
            
            <div className="text-sm text-tertiary mb-6">
              Opened {formatDistanceToNow(new Date(job.created_at), { addSuffix: true })}
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-secondary">
              <Link href={`/dashboard/mandates/${job.id}/edit`} className="text-sm text-secondary hover:text-primary transition-colors">
                Edit Details
              </Link>
              <button
                onClick={() => handleDelete(job.id)}
                className="text-sm text-accent-danger hover:text-red-700 transition-colors"
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
