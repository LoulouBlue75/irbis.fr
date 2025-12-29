'use client';

import { useState, useEffect } from 'react';
import { updateMatchStatus } from '@/app/actions/jobs';
import { useRealtimeSubscription } from '@/hooks/use-realtime-subscription';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Check, X as XIcon } from 'lucide-react';

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

  useEffect(() => {
    setMatches(initialMatches);
  }, [initialMatches]);

  useRealtimeSubscription('matches');

  const handleStatusUpdate = async (matchId: string, status: string) => {
    setMatches(matches.map(m => m.id === matchId ? { ...m, status } : m));
    const result = await updateMatchStatus(matchId, status);
    if (result.error) {
      setMatches(initialMatches);
      alert('Erreur');
    }
  };

  if (matches.length === 0) {
    return (
      <Card className="border-dashed">
        <CardContent className="text-center py-12">
          <p className="text-gray-500">Aucun match trouvé.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="mt-8 space-y-4">
      <h2 className="text-2xl font-serif text-irbis-navy">Alignements Talents</h2>
      <div className="grid gap-4">
        {matches.map((match) => (
          <Card key={match.id} className="hover:border-irbis-gold/30 transition-all">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border border-gray-100">
                    <AvatarFallback className="bg-irbis-cream text-irbis-navy font-medium">
                      {match.candidate.name ? match.candidate.name[0].toUpperCase() : '?'}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-medium text-irbis-navy">{match.candidate.name || 'Candidat'}</h3>
                    <p className="text-sm text-gray-500">{match.candidate.email}</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {match.candidate.skills?.slice(0, 3).map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="gold" className="text-lg px-3 py-1">{(match.score * 100).toFixed(0)}%</Badge>
                  <div className="text-xs text-gray-400 mt-1">Score</div>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center border-t border-gray-50 pt-4">
                <Badge variant={match.status === 'accepted' ? 'success' : match.status === 'rejected' ? 'destructive' : 'outline'}>
                  {match.status === 'accepted' ? 'Accepté' : match.status === 'rejected' ? 'Refusé' : 'En attente'}
                </Badge>
                <div className="flex gap-2">
                  {match.status !== 'accepted' && (
                    <Button size="sm" onClick={() => handleStatusUpdate(match.id, 'accepted')} className="bg-green-600 hover:bg-green-700">
                      <Check className="w-4 h-4 mr-1" /> Accepter
                    </Button>
                  )}
                  {match.status !== 'rejected' && (
                    <Button size="sm" variant="outline" onClick={() => handleStatusUpdate(match.id, 'rejected')} className="text-red-600 border-red-200 hover:bg-red-50">
                      <XIcon className="w-4 h-4 mr-1" /> Refuser
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
