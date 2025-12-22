'use client';

import { formatDistanceToNow } from 'date-fns';
import { useRealtimeSubscription } from '@/hooks/use-realtime-subscription';
import Link from 'next/link';

export interface Candidate {
  id: string;
  name: string | null;
  email: string | null;
  skills: string[] | null;
  experience: any; // JSONB
  education: any; // JSONB
  created_at: string;
}

interface CandidateListProps {
  candidates: Candidate[];
}

export function CandidateList({ candidates }: CandidateListProps) {
  // Subscribe to realtime updates for candidates
  useRealtimeSubscription('candidates');

  if (candidates.length === 0) {
    return (
      <div className="text-center text-tertiary py-8 bg-secondary rounded-lg border border-primary">
        No talents found. Ingest a profile to get started.
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-primary">Talent Pool</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-primary rounded-lg overflow-hidden border border-primary">
          <thead className="bg-secondary">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">Talent</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">Expertise</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">Experience</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">Added</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-secondary uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-secondary">
            {candidates.map((candidate) => (
              <tr key={candidate.id} className="hover:bg-tertiary transition-colors group">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-accent-primary font-bold mr-3">
                      {candidate.name ? candidate.name[0].toUpperCase() : '?'}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-primary">
                        {candidate.name || 'Unknown Talent'}
                      </div>
                      <div className="text-sm text-secondary">
                        {candidate.email || 'N/A'}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-secondary">
                  <div className="flex flex-wrap gap-1">
                    {candidate.skills?.slice(0, 3).map((skill, index) => (
                      <span key={index} className="badge badge-active">
                        {skill}
                      </span>
                    ))}
                    {candidate.skills && candidate.skills.length > 3 && (
                      <span className="badge badge-inactive">
                        +{candidate.skills.length - 3}
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary">
                  {/* Placeholder for experience calculation */}
                  {candidate.experience && Array.isArray(candidate.experience) ? `${candidate.experience.length} roles` : 'N/A'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-tertiary">
                  {formatDistanceToNow(new Date(candidate.created_at), { addSuffix: true })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Link href={`/dashboard/candidates/${candidate.id}`} className="text-accent-primary hover:text-accent-primary-hover mr-4">
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
