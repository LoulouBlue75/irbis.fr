'use client';

import { useState, useEffect } from 'react';
import { updateMatchStatus } from '@/app/actions/jobs';
import { useRealtimeSubscription } from '@/hooks/use-realtime-subscription';

interface Match {
  id: string;
  candidate: {
    id: string;
    name: string | null;
    email: string | null;
    skills: string[] | null;
  };
  score: number;
  status: string;
  notes: string | null;
}

interface MatchListProps {
  matches: Match[];
}

export function MatchList({ matches: initialMatches }: MatchListProps) {
  const [matches, setMatches] = useState(initialMatches);

  // Sync state with props when they change (e.g. after realtime refresh)
  useEffect(() => {
    setMatches(initialMatches);
  }, [initialMatches]);

  // Subscribe to realtime updates
  useRealtimeSubscription('matches');

  const handleStatusUpdate = async (matchId: string, status: string) => {
    // Optimistic update
    setMatches(matches.map(m => 
      m.id === matchId ? { ...m, status } : m
    ));

    const result = await updateMatchStatus(matchId, status);
    if (result.error) {
      // Revert on error
      setMatches(initialMatches);
      alert('Failed to update status');
    }
  };

  if (matches.length === 0) {
    return (
      <div className="text-center text-gray-400 py-8 bg-gray-900 rounded-lg">
        No matches found yet.
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-white">Candidate Matches</h2>
      <div className="grid gap-4">
        {matches.map((match) => (
          <div key={match.id} className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-white">
                  {match.candidate.name || 'Unknown Candidate'}
                </h3>
                <p className="text-sm text-gray-400">{match.candidate.email}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {match.candidate.skills?.map((skill, i) => (
                    <span key={i} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-900 text-blue-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-400">
                  {(match.score * 100).toFixed(0)}%
                </div>
                <div className="text-xs text-gray-500">Match Score</div>
              </div>
            </div>
            
            <div className="mt-4 flex justify-between items-center border-t border-gray-800 pt-4">
              <div className="text-sm">
                <span className={`font-medium ${
                  match.status === 'accepted' ? 'text-green-400' :
                  match.status === 'rejected' ? 'text-red-400' :
                  'text-yellow-400'
                }`}>
                  Status: {match.status.charAt(0).toUpperCase() + match.status.slice(1)}
                </span>
              </div>
              <div className="flex gap-2">
                {match.status !== 'accepted' && (
                  <button
                    onClick={() => handleStatusUpdate(match.id, 'accepted')}
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
                  >
                    Accept
                  </button>
                )}
                {match.status !== 'rejected' && (
                  <button
                    onClick={() => handleStatusUpdate(match.id, 'rejected')}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                  >
                    Reject
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
