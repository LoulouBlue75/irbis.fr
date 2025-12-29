'use client';

import { Users, Briefcase, CheckCircle, Sparkles } from 'lucide-react';
import { useRealtimeSubscription } from '@/hooks/use-realtime-subscription';
import { Card, CardContent } from '@/components/ui/card';

interface DashboardStatsProps {
  stats: {
    totalCandidates: number;
    activeJobs: number;
    totalMatches: number;
    newCandidatesThisWeek: number;
  };
}

export function DashboardStats({ stats }: DashboardStatsProps) {
  useRealtimeSubscription('candidates');
  useRealtimeSubscription('jobs');
  useRealtimeSubscription('matches');

  const cards = [
    {
      label: 'Talents en réserve',
      value: stats.totalCandidates,
      icon: Users,
      description: 'Vivier global actif',
      highlight: false,
    },
    {
      label: 'Mandats ouverts',
      value: stats.activeJobs,
      icon: Briefcase,
      description: 'Chasses en cours',
      highlight: false,
    },
    {
      label: 'Alignements (Matchs)',
      value: stats.totalMatches,
      icon: CheckCircle,
      description: 'Scores > 75%',
      highlight: false,
    },
    {
      label: 'Nouveaux (Semaine)',
      value: stats.newCandidatesThisWeek,
      icon: Sparkles,
      description: 'Fraîchement sourcés',
      highlight: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {cards.map((card) => (
        <Card
          key={card.label}
          className={card.highlight
            ? 'border-none shadow-sm transition-all duration-300 hover:-translate-y-1 bg-irbis-navy text-white ring-1 ring-irbis-navy'
            : 'border-none shadow-sm transition-all duration-300 hover:-translate-y-1 bg-white'
          }
        >
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className={card.highlight ? 'text-sm font-medium text-gray-300' : 'text-sm font-medium text-gray-500'}>
                  {card.label}
                </p>
                <h3 className={card.highlight ? 'text-3xl font-serif font-medium mt-2 text-white' : 'text-3xl font-serif font-medium mt-2 text-irbis-navy'}>
                  {card.value > 0 ? card.value : '—'}
                </h3>
              </div>
              <div className={card.highlight ? 'p-2.5 rounded-lg bg-white/10 text-irbis-gold' : 'p-2.5 rounded-lg bg-irbis-cream text-irbis-navy'}>
                <card.icon className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-dashed border-opacity-20 border-gray-400">
              <p className="text-xs text-gray-400">
                {card.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
