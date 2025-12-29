'use client';

import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import { useRealtimeSubscription } from '@/hooks/use-realtime-subscription';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ArrowRight, UserPlus } from 'lucide-react';

export interface Talent {
  id: string;
  name: string | null;
  email: string | null;
  skills: string[] | null;
  experience: any;
  education: any;
  created_at: string;
  alignment_score?: number;
}

interface TalentListProps {
  talents: Talent[];
}

export function TalentList({ talents }: TalentListProps) {
  useRealtimeSubscription('talents');

  if (talents.length === 0) {
    return (
      <div className="mt-8 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-serif font-medium text-irbis-navy">Réserve de talents</h2>
          <Link href="/hunting/talents/new">
            <Button variant="default" size="sm">
              <UserPlus className="w-4 h-4 mr-2" />
              Nouveau Talent
            </Button>
          </Link>
        </div>
        <Card className="border-dashed">
          <CardContent className="text-center py-16">
            <p className="text-gray-500">Aucun talent trouvé. Ingestez un profil pour commencer.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-serif font-medium text-irbis-navy">Réserve de talents</h2>
        <Link href="/hunting/talents/new">
          <Button variant="default" size="sm">
            <UserPlus className="w-4 h-4 mr-2" />
            Nouveau Talent
          </Button>
        </Link>
      </div>

      <div className="rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-100">
          <thead className="bg-irbis-cream/50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Talent</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Expertise</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Score 8D</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Ajouté</th>
              <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-50">
            {talents.map((talent) => (
              <tr key={talent.id} className="hover:bg-irbis-cream/30 transition-colors group">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4 border border-gray-100">
                      <AvatarFallback className="bg-irbis-cream text-irbis-navy font-medium">
                        {talent.name ? talent.name[0].toUpperCase() : '?'}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-medium text-irbis-navy">
                        {talent.name || 'Talent inconnu'}
                      </div>
                      <div className="text-xs text-gray-500">
                        {talent.email || 'N/A'}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {talent.skills?.slice(0, 2).map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {talent.skills && talent.skills.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{talent.skills.length - 2}
                      </Badge>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {talent.alignment_score !== undefined ? (
                    <Badge variant={talent.alignment_score >= 80 ? 'gold' : talent.alignment_score >= 60 ? 'secondary' : 'outline'}>
                      {talent.alignment_score}%
                    </Badge>
                  ) : (
                    <span className="text-sm text-gray-400">—</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatDistanceToNow(new Date(talent.created_at), { addSuffix: true, locale: fr })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <Link href={"/hunting/talents/" + talent.id}>
                    <Button variant="ghost" size="sm" className="text-irbis-gold hover:text-irbis-navy">
                      <span className="mr-2">Détail</span>
                      <ArrowRight className="w-3 h-3" />
                    </Button>
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
