'use client';

import { Users, Briefcase, CheckCircle, UserPlus } from 'lucide-react';
import { useRealtimeSubscription } from '@/hooks/use-realtime-subscription';

interface DashboardStatsProps {
  stats: {
    totalCandidates: number;
    activeJobs: number;
    totalMatches: number;
    newCandidatesThisWeek: number;
  };
}

export function DashboardStats({ stats }: DashboardStatsProps) {
  // Subscribe to changes in relevant tables to refresh stats
  useRealtimeSubscription('candidates');
  useRealtimeSubscription('jobs');
  useRealtimeSubscription('matches');

  const cards = [
    {
      label: 'Total Candidates',
      value: stats.totalCandidates,
      icon: Users,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      label: 'Active Jobs',
      value: stats.activeJobs,
      icon: Briefcase,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      label: 'Total Matches',
      value: stats.totalMatches,
      icon: CheckCircle,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      label: 'New Candidates (Week)',
      value: stats.newCandidatesThisWeek,
      icon: UserPlus,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card) => (
        <div key={card.label} className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">{card.label}</p>
              <p className="text-3xl font-bold text-white mt-2">{card.value}</p>
            </div>
            <div className={`p-3 rounded-full ${card.bgColor}`}>
              <card.icon className={`w-6 h-6 ${card.color}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
