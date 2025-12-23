'use client';

import { formatDistanceToNow } from 'date-fns';
import { useRealtimeSubscription } from '@/hooks/use-realtime-subscription';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export interface Talent {
  id: string;
  name: string | null;
  email: string | null;
  skills: string[] | null;
  experience: any; // JSONB
  education: any; // JSONB
  created_at: string;
  alignment_score?: number; // Score d'alignement 8D
}

interface TalentListProps {
  talents: Talent[];
}

export function TalentList({ talents }: TalentListProps) {
  // Subscribe to realtime updates for talents
  useRealtimeSubscription('talents');

  if (talents.length === 0) {
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-primary">Réserve de talents</h2>
        <Card>
          <CardContent className="text-center text-tertiary py-8">
            Aucun talent trouvé. Ingestez un profil pour commencer.
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-primary">Réserve de talents</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-primary rounded-lg overflow-hidden border border-primary">
          <thead className="bg-secondary">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">Talent</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">Expertise</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">Expérience</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">Score 8D</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">Ajouté</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-secondary uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-secondary">
            {talents.map((talent) => (
              <tr key={talent.id} className="hover:bg-tertiary transition-colors group">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarFallback className="bg-blue-50 text-accent-primary font-bold">
                        {talent.name ? talent.name[0].toUpperCase() : '?'}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-medium text-primary">
                        {talent.name || 'Talent inconnu'}
                      </div>
                      <div className="text-sm text-secondary">
                        {talent.email || 'N/A'}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-secondary">
                  <div className="flex flex-wrap gap-1">
                    {talent.skills?.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="default">
                        {skill}
                      </Badge>
                    ))}
                    {talent.skills && talent.skills.length > 3 && (
                      <Badge variant="outline">
                        +{talent.skills.length - 3}
                      </Badge>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary">
                  {/* Placeholder for experience calculation */}
                  {talent.experience && Array.isArray(talent.experience) ? `${talent.experience.length} rôles` : 'N/A'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary">
                  {talent.alignment_score !== undefined ? (
                    <Badge variant={talent.alignment_score >= 80 ? 'default' : talent.alignment_score >= 60 ? 'secondary' : 'outline'}>
                      {talent.alignment_score}%
                    </Badge>
                  ) : 'N/A'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-tertiary">
                  {formatDistanceToNow(new Date(talent.created_at), { addSuffix: true })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Link href={`/hunting/talents/${talent.id}`} className="text-accent-primary hover:text-accent-primary-hover mr-4">
                    Voir
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
