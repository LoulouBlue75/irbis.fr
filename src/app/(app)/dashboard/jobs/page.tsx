import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { getJobs } from "@/app/actions/jobs";
import { JobList } from "@/components/job-list";
import Link from "next/link";

export default async function JobsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const jobs = await getJobs();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Mandates</h1>
        <Link
          href="/dashboard/jobs/new"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          New Mandate
        </Link>
      </div>

      <JobList jobs={jobs} />
    </div>
  );
}
