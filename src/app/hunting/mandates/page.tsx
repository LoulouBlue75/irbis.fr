import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { getJobs } from "@/app/actions/jobs";
import { MandateList } from "@/components/mandate-list";
import Link from "next/link";

export default async function MandatesPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const jobs = await getJobs();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-primary">Mandats</h1>
        <Link href="/hunting/mandates/create">
          Nouveau mandat
        </Link>
      </div>

      <MandateList mandates={jobs} />
    </div>
  );
}