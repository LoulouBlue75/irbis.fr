import { createClient } from '@/lib/supabase/server';
import { JobList } from '@/components/job-list';

export default async function JobsPage() {
  const supabase = await createClient();
  
  const { data: jobs } = await supabase
    .from('jobs')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <JobList jobs={jobs || []} />
    </div>
  );
}
