'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createCandidate, CandidateInput } from '@/app/actions/candidates';

export function CandidateForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data: CandidateInput = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      skills: skills,
      experience_years: parseInt(formData.get('experience_years') as string) || 0,
      education: formData.get('education') as string,
      notes: formData.get('notes') as string,
    };

    try {
      const result = await createCandidate(data);

      if (result.error) {
        setError(result.error);
      } else {
        router.push('/dashboard/talents');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const addSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      {error && (
        <div className="bg-red-900/50 border border-red-500 text-red-200 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-4 py-2"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-4 py-2"
        />
      </div>

      <div>
        <label htmlFor="experience_years" className="block text-sm font-medium text-gray-300">
          Experience (Years)
        </label>
        <input
          type="number"
          name="experience_years"
          id="experience_years"
          min="0"
          required
          className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-4 py-2"
        />
      </div>

      <div>
        <label htmlFor="education" className="block text-sm font-medium text-gray-300">
          Education (Degree/University)
        </label>
        <input
          type="text"
          name="education"
          id="education"
          className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-4 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Skills
        </label>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addSkill();
              }
            }}
            placeholder="Add a skill..."
            className="block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-4 py-2"
          />
          <button
            type="button"
            onClick={addSkill}
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="flex items-center bg-blue-900/50 text-blue-200 px-3 py-1 rounded-full text-sm">
              {skill}
              <button
                type="button"
                onClick={() => removeSkill(index)}
                className="ml-2 text-blue-400 hover:text-blue-300"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-300">
          Notes
        </label>
        <textarea
          name="notes"
          id="notes"
          rows={3}
          className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-4 py-2"
        />
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
          {loading ? 'Saving...' : 'Create Candidate'}
        </button>
      </div>
    </form>
  );
}
