'use client';

import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import { UserPlus, CheckCircle, Briefcase, Sparkles } from 'lucide-react';
import { useRealtimeSubscription } from '@/hooks/use-realtime-subscription';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface Activity {
  id: string;
  type: string;
  message: string;
  created_at: string;
}

interface RecentActivityProps {
  activities: Activity[];
}

export function RecentActivity({ activities }: RecentActivityProps) {
  useRealtimeSubscription('candidates');
  useRealtimeSubscription('matches');

  const getIcon = (type: string) => {
    switch (type) {
      case 'candidate_added': return UserPlus;
      case 'match_created': return Sparkles;
      case 'job_created': return Briefcase;
      default: return CheckCircle;
    }
  };

  const getIconStyles = (type: string) => {
    switch (type) {
      case 'candidate_added': return 'bg-irbis-cream text-irbis-navy';
      case 'match_created': return 'bg-irbis-gold/10 text-irbis-gold';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  if (activities.length === 0) {
    return (
      <Card>
        <CardHeader>
          <h3 className="text-lg font-serif text-irbis-navy">Activité Récente</h3>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500 text-center py-4 italic">Aucune activité récente.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg font-serif text-irbis-navy">Activité Récente</h3>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = getIcon(activity.type);
            return (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className={"mt-0.5 p-2 rounded-lg " + getIconStyles(activity.type)}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-irbis-navy">{activity.message}</p>
                  <p className="text-xs text-gray-400 mt-1 font-mono">
                    {formatDistanceToNow(new Date(activity.created_at), { addSuffix: true, locale: fr })}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
