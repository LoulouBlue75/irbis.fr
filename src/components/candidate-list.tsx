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
      <div className="text-center text-gray-400 py-8 bg-gray-900 rounded-lg border border-gray-800">
        No talents found. Ingest a profile to get started.
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-white">Talent Pool</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
          <thead className="bg-gray-950">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Talent</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Expertise</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Experience</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Added</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {candidates.map((candidate) => (
              <tr key={candidate.id} className="hover:bg-gray-800 transition-colors group">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 font-bold mr-3">
                      {candidate.name ? candidate.name[0].toUpperCase() : '?'}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">
                        {candidate.name || 'Unknown Talent'}
                      </div>
                      <div className="text-sm text-gray-500">
                        {candidate.email || 'N/A'}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-300">
                  <div className="flex flex-wrap gap-1">
                    {candidate.skills?.slice(0, 3).map((skill, index) => (
                      <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900/20 text-blue-300 border border-blue-900/30">
                        {skill}
                      </span>
                    ))}
                    {candidate.skills && candidate.skills.length > 3 && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-800 text-gray-400">
                        +{candidate.skills.length - 3}
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {/* Placeholder for experience calculation */}
                  {candidate.experience && Array.isArray(candidate.experience) ? `${candidate.experience.length} roles` : 'N/A'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatDistanceToNow(new Date(candidate.created_at), { addSuffix: true })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Link href={`/dashboard/candidates/${candidate.id}`} className="text-blue-400 hover:text-blue-300 mr-4">
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
