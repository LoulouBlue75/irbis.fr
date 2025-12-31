import Link from "next/link";
import { Activity, Users, Target, TrendingUp } from "lucide-react";
import { getDashboardStats, getRecentActivity } from "@/app/actions/dashboard";
import { DashboardNudges } from "@/components/dashboard-nudges";
import { EmptyState } from "@/components/ui/empty-state";

export default async function DashboardPage() {
  const stats = await getDashboardStats();
  const activities = await getRecentActivity();

  const statItems = [
    { label: "Active Mandates", value: stats.activeJobs.toString(), icon: Target },
    { label: "Talents", value: stats.totalCandidates.toString(), icon: Users },
    { label: "Alignments", value: stats.totalMatches.toString(), icon: TrendingUp },
    { label: "New This Week", value: stats.newCandidatesThisWeek.toString(), icon: Activity },
  ];

  // Check if dashboard is empty (new user)
  const isDashboardEmpty = stats.totalCandidates === 0 && stats.activeJobs === 0;

  return (
    <div className="flex flex-col gap-8">
      {/* NUDGES */}
      <DashboardNudges stats={stats} />

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

      {/* EMPTY STATE FOR NEW USERS */}
      {isDashboardEmpty && (
        <div className="bg-paper-white border border-ink-navy/10">
          <EmptyState
            icon={Target}
            title="Bienvenue dans votre Console Hunting"
            message="Commencez par ajouter un talent ou creer votre premier mandat pour structurer votre recherche."
            actions={[
              { label: "Ajouter un talent", href: "/hunting/talents/new" },
              { label: "Creer un mandat", href: "/hunting/mandates/new", variant: "outline" },
            ]}
          />
        </div>
      )}

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {statItems.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-paper-white border border-ink-navy/10 p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-mono uppercase tracking-widest text-foil-bronze">
                  {stat.label}
                </div>
                <Icon className="h-4 w-4 text-ink-light" />
              </div>
              <div className="font-display text-4xl text-ink-navy">
                {stat.value}
              </div>
            </div>
          );
        })}
      </div>

      {/* RECENT ACTIVITY */}
      <div className="bg-paper-white border border-ink-navy/10 p-8">
        <h3 className="font-display text-xl text-ink-navy mb-6 italic">Recent Activity</h3>

        {activities.length === 0 ? (
          <EmptyState
            icon={Activity}
            title="Aucune activite recente"
            message="L'activite de votre pipeline apparaitra ici une fois que vous aurez commence a travailler."
            className="py-8"
          />
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
