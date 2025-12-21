import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { getDashboardStats, getRecentActivity } from "@/app/actions/dashboard";
import { DashboardStats } from "@/components/dashboard-stats";
import { RecentActivity } from "@/components/recent-activity";
import Link from "next/link";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const [stats, activities] = await Promise.all([
    getDashboardStats(),
    getRecentActivity(),
  ]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Overview</h1>
        <div className="flex gap-4">
          <Link
            href="/dashboard/candidates"
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded border border-gray-700"
          >
            Talent Pool
          </Link>
          <Link
            href="/dashboard/jobs/new"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            New Mandate
          </Link>
        </div>
      </div>

      <DashboardStats stats={stats} />

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <RecentActivity activities={activities} />
        </div>
        <div className="space-y-6">
          <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
            <h2 className="text-xl font-semibold mb-2 text-white">System Status</h2>
            <div className="flex items-center gap-2 text-green-400">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm">Matching Engine: Active</span>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              Logged in as {user.email}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
