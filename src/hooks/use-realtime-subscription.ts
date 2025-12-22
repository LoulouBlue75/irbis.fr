'use client';

import { useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import type {
  RealtimePostgresChangesPayload,
  SupabaseClient,
} from '@supabase/supabase-js';
import type { Database } from '@/types/database.types';

type PostgresEvent = 'INSERT' | 'UPDATE' | 'DELETE' | '*';

type PostgresChangesChannel = ReturnType<SupabaseClient<Database>['channel']> & {
  on: (
    type: 'postgres_changes',
    filter: {
      event: PostgresEvent;
      schema: 'public';
      table?: string;
      filter?: string;
    },
    callback: (
      payload: RealtimePostgresChangesPayload<Record<string, unknown>>
    ) => void
  ) => PostgresChangesChannel;
};

export function useRealtimeSubscription(
  table: string,
  event: 'INSERT' | 'UPDATE' | 'DELETE' | '*' = '*',
  filter?: string
) {
  const router = useRouter();
  const supabase = createClient() as SupabaseClient<Database>;

  useEffect(() => {
    const channel = (supabase.channel(`realtime-${table}`) as PostgresChangesChannel)
      .on(
        'postgres_changes',
        {
          event: event,
          schema: 'public',
          table: table,
          filter: filter,
        },
        (payload) => {
          console.log('Realtime update:', payload);
          router.refresh();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, router, table, event, filter]);
}
