import Link from "next/link";
import { getDashboardStats, getRecentActivity } from "@/app/actions/dashboard";

export default async function DashboardPage() {
  const stats = await getDashboardStats();
  const activities = await getRecentActivity();

  const statItems = [
    { label: "Active Mandates", value: stats.activeJobs.toString() },
    { label: "Talents", value: stats.totalCandidates.toString() },
    { label: "Alignments", value: stats.totalMatches.toString() },
    { label: "New This Week", value: stats.newCandidatesThisWeek.toString() },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="font-display text-3xl text-ink-navy italic">Overview</h1>
        <div className="flex gap-4">
          <Link 
            href="/hunting/mandates/new" 
            className="px-6 py-3 bg-ink-navy text-paper-cream text-sm font-medium tracking-wide transition-all hover:bg-foil-gold hover:text-ink-navy"
          >
            New Mandate
          </Link>
          <Link 
            href="/hunting/talents" 
            className="px-6 py-3 border border-ink-navy/20 text-ink-navy text-sm font-medium tracking-wide transition-all hover:border-foil-gold hover:text-foil-gold"
          >
            Talent Pool
          </Link>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {statItems.map((stat) => (
          <div 
            key={stat.label} 
            className="bg-paper-white border border-ink-navy/10 p-6"
          >
            <div className="text-xs font-mono uppercase tracking-widest text-foil-bronze mb-3">
              {stat.label}
            </div>
            <div className="font-display text-4xl text-ink-navy">
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* RECENT ACTIVITY */}
      <div className="bg-paper-white border border-ink-navy/10 p-8">
        <h3 className="font-display text-xl text-ink-navy mb-6 italic">Recent Activity</h3>
        
        {activities.length === 0 ? (
          <p className="text-ink-light text-sm">No recent activity.</p>
        ) : (
          <div className="flex flex-col divide-y divide-ink-navy/5">
            {activities.map((activity) => (
              <div key={activity.id} className="py-4 first:pt-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-foil-gold" />
                  <span className="text-sm text-ink-navy">{activity.message}</span>
                </div>
                <div className="text-xs text-ink-light mt-1 ml-5">
                  {new Date(activity.created_at).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
