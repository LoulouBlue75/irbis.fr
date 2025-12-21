'use client';

import { formatDistanceToNow } from 'date-fns';

interface Activity {
  id: string;
  type: 'note' | 'call' | 'email' | 'meeting' | 'status_change';
  content: string;
  created_at: string;
}

interface ActivityTimelineProps {
  activities: Activity[];
}

export function ActivityTimeline({ activities }: ActivityTimelineProps) {
  if (activities.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No activities recorded yet.
      </div>
    );
  }

  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {activities.map((activity, activityIdx) => (
          <li key={activity.id}>
            <div className="relative pb-8">
              {activityIdx !== activities.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-700"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-gray-900 ${
                      activity.type === 'note'
                        ? 'bg-blue-500'
                        : activity.type === 'call'
                        ? 'bg-green-500'
                        : activity.type === 'email'
                        ? 'bg-yellow-500'
                        : activity.type === 'meeting'
                        ? 'bg-purple-500'
                        : 'bg-gray-500'
                    }`}
                  >
                    {/* Icons could be added here based on type */}
                    <span className="text-white text-xs font-bold uppercase">
                      {activity.type[0]}
                    </span>
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                  <div>
                    <p className="text-sm text-gray-300">
                      <span className="font-medium text-white capitalize">
                        {activity.type}
                      </span>{' '}
                      {activity.content}
                    </p>
                  </div>
                  <div className="text-right text-sm whitespace-nowrap text-gray-500">
                    <time dateTime={activity.created_at}>
                      {formatDistanceToNow(new Date(activity.created_at), {
                        addSuffix: true,
                      })}
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
