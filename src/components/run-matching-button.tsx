'use client';

import { useState } from 'react';
import { triggerMatching } from '@/app/actions/jobs';
import { RefreshCw } from 'lucide-react';

interface RunMatchingButtonProps {
  jobId: string;
}

export function RunMatchingButton({ jobId }: RunMatchingButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleRunMatching = async () => {
    setLoading(true);
    try {
      await triggerMatching(jobId);
      // We don't need to do much here as realtime updates will handle the UI refresh
      // But we can show a toast or something
    } catch (error) {
      console.error('Failed to trigger matching', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleRunMatching}
      disabled={loading}
      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium disabled:opacity-50 transition-colors"
    >
      <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
      {loading ? 'Running...' : 'Run Matching'}
    </button>
  );
}
