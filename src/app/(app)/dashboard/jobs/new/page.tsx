import { JobForm } from '@/components/job-form';

export default function NewJobPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-white mb-8">Create New Job</h1>
      <JobForm />
    </div>
  );
}
