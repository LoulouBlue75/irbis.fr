'use client';

import { useState } from 'react';
import { createActivity, ActivityInput } from '@/app/actions/crm';

interface AddActivityFormProps {
  candidateId: string;
}

export function AddActivityForm({ candidateId }: AddActivityFormProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState<ActivityInput['type']>('note');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setLoading(true);
    try {
      await createActivity({
        candidate_id: candidateId,
        type,
        content,
      });
      setContent('');
      setIsExpanded(false);
    } catch (error) {
      console.error('Failed to add activity', error);
    } finally {
      setLoading(false);
    }
  };

  if (!isExpanded) {
    return (
      <button
        onClick={() => setIsExpanded(true)}
        className="w-full py-3 px-4 border-2 border-dashed border-gray-700 rounded-lg text-gray-400 hover:border-gray-600 hover:text-gray-300 transition-colors text-sm font-medium"
      >
        + Add Note or Activity
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
      <div className="flex gap-2 mb-3">
        {(['note', 'call', 'email', 'meeting'] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setType(t)}
            className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
              type === t
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={`Add a ${type}...`}
        className="w-full bg-gray-900 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px] text-sm"
        autoFocus
      />

      <div className="flex justify-end gap-2 mt-3">
        <button
          type="button"
          onClick={() => setIsExpanded(false)}
          className="px-3 py-1.5 text-sm text-gray-400 hover:text-white"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading || !content.trim()}
          className="px-4 py-1.5 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Saving...' : 'Save'}
        </button>
      </div>
    </form>
  );
}
