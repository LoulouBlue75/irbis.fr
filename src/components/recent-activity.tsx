'use client';

import { formatDistanceToNow } from 'date-fns';
import { UserPlus, CheckCircle } from 'lucide-react';
import { useRealtimeSubscription } from '@/hooks/use-realtime-subscription';

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
  // Subscribe to changes in relevant tables to refresh activity
  useRealtimeSubscription('candidates');
  useRealtimeSubscription('matches');

  if (activities.length === 0) {
    return (
      <div className="card">
        <h3 className="text-lg font-semibold text-primary mb-4">Recent Activity</h3>
        <p className="text-tertiary text-center py-4">No recent activity.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-primary mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className={`mt-1 p-1.5 rounded-full ${
              activity.type === 'candidate_added' ? 'bg-blue-50 text-accent-primary' : 'bg-purple-50 text-purple-600'
            }`}>
              {activity.type === 'candidate_added' ? (
                <UserPlus className="w-4 h-4" />
              ) : (
                <CheckCircle className="w-4 h-4" />
              )}
            </div>
            <div className="flex-1">
              <p className="text-sm text-secondary">{activity.message}</p>
              <p className="text-xs text-tertiary mt-1">
                {formatDistanceToNow(new Date(activity.created_at), { addSuffix: true })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
