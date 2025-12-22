'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createJob, updateJob, JobInput } from '@/app/actions/jobs';

interface JobFormProps {
  initialData?: JobInput & { id: string };
}

export function JobForm({ initialData }: JobFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [requirements, setRequirements] = useState<string[]>(initialData?.requirements || []);
  const [newRequirement, setNewRequirement] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data: JobInput = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      requirements: requirements,
      status: formData.get('status') as 'open' | 'closed' | 'draft',
    };

    try {
      let result;
      if (initialData) {
        result = await updateJob(initialData.id, data);
      } else {
        result = await createJob(data);
      }

      if (result.error) {
        setError(result.error);
      } else {
        router.push('/dashboard/mandates');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const addRequirement = () => {
    if (newRequirement.trim()) {
      setRequirements([...requirements, newRequirement.trim()]);
      setNewRequirement('');
    }
  };

  const removeRequirement = (index: number) => {
    setRequirements(requirements.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      {error && (
        <div className="bg-red-900/50 border border-red-500 text-red-200 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-300">
          Job Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          required
          defaultValue={initialData?.title}
          className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-4 py-2"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-300">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          rows={4}
          required
          defaultValue={initialData?.description}
          className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-4 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Requirements
        </label>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            value={newRequirement}
            onChange={(e) => setNewRequirement(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addRequirement();
              }
            }}
            placeholder="Add a requirement..."
            className="block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-4 py-2"
          />
          <button
            type="button"
            onClick={addRequirement}
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {requirements.map((req, index) => (
            <li key={index} className="flex justify-between items-center bg-gray-800 px-3 py-2 rounded text-sm text-gray-300">
              <span>{req}</span>
              <button
                type="button"
                onClick={() => removeRequirement(index)}
                className="text-red-400 hover:text-red-300"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <label htmlFor="status" className="block text-sm font-medium text-gray-300">
          Status
        </label>
        <select
          name="status"
          id="status"
          defaultValue={initialData?.status || 'open'}
          className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-4 py-2"
        >
          <option value="open">Open</option>
          <option value="closed">Closed</option>
          <option value="draft">Draft</option>
        </select>
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={() => router.back()}
          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium disabled:opacity-50"
        >
          {loading ? 'Saving...' : initialData ? 'Update Job' : 'Create Job'}
        </button>
      </div>
    </form>
  );
}
