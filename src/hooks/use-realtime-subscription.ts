'use client';

import { useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export function useRealtimeSubscription(
  table: string,
  event: 'INSERT' | 'UPDATE' | 'DELETE' | '*' = '*',
  filter?: string
) {
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const channel = supabase
      .channel(`realtime-${table}`)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - Supabase types are incorrect for postgres_changes
      .on(
        'postgres_changes',
        {
          event: event,
          schema: 'public',
          table: table,
          filter: filter,
        },
        (payload: unknown) => {
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
