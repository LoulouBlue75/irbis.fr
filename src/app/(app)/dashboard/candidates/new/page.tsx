import { CandidateForm } from '@/components/candidate-form';

export default function NewCandidatePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Add New Candidate</h1>
        <p className="text-gray-400 mt-2">
          Manually add a candidate to the talent pool without uploading a CV.
        </p>
      </div>
      
      <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
        <CandidateForm />
      </div>
    </div>
  );
}
