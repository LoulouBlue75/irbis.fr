import { CVUpload } from '@/components/cv-upload';
import { CandidateList } from '@/components/candidate-list';
import { createClient } from '@/lib/supabase/server';

export default async function UploadPage() {
  const supabase = await createClient();

  // Get project ID (same logic as upload action)
  const { data: projects } = await supabase.from('projects').select('id').limit(1);
  const projectId = projects?.[0]?.id;

  let candidates: any[] = [];

  if (projectId) {
    const { data } = await supabase
      .from('candidates')
      .select('*')
      .eq('project_id', projectId)
      .order('created_at', { ascending: false });
    
    if (data) {
      candidates = data;
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">
          <span className="text-yellow-500">Upload CV</span>
        </h1>
        <p className="text-center text-gray-400 mb-12">
          Upload a candidate's CV to start the analysis process.
        </p>
        
        <CVUpload />

        <CandidateList candidates={candidates} />
      </div>
    </div>
  );
}
