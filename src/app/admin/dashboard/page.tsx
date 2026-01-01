import { Activity, Users, Briefcase, TrendingUp, UserPlus, Target } from "lucide-react";
import { getAdminStats, getGlobalActivity } from "@/app/actions/admin";
import { EmptyState } from "@/components/ui/empty-state";

export default async function AdminDashboardPage() {
  const stats = await getAdminStats();
  const activities = await getGlobalActivity();

  const statItems = [
    {
      label: "Total Talents",
      value: stats.totalCandidates.toString(),
      icon: Users,
      color: "text-blue-400",
    },
    {
      label: "Mandats Actifs",
      value: stats.totalJobs.toString(),
      icon: Briefcase,
      color: "text-emerald-400",
    },
    {
      label: "Alignements",
      value: stats.totalMatches.toString(),
      icon: TrendingUp,
      color: "text-amber-400",
    },
    {
      label: "Talents ce mois",
      value: stats.candidatesThisMonth.toString(),
      icon: UserPlus,
      color: "text-purple-400",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif text-white">Dashboard Admin</h1>
          <p className="text-slate-400 mt-1">Vue globale de la plateforme</p>
        </div>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {statItems.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-slate-900 border border-slate-800 rounded-lg p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-mono uppercase tracking-widest text-slate-500">
                  {stat.label}
                </div>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </div>
              <div className="text-4xl font-serif text-white">
                {stat.value}
              </div>
            </div>
          );
        })}
      </div>

      {/* PLACEMENTS THIS MONTH */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Target className="h-5 w-5 text-amber-500" />
            <h3 className="text-lg font-medium text-white">Placements ce mois</h3>
          </div>
          <div className="text-5xl font-serif text-amber-500">
            {stats.placementsThisMonth}
          </div>
          <p className="text-sm text-slate-500 mt-2">
            Candidats places avec succes
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="h-5 w-5 text-emerald-500" />
            <h3 className="text-lg font-medium text-white">Taux de conversion</h3>
          </div>
          <div className="text-5xl font-serif text-emerald-500">
            {stats.totalMatches > 0
              ? Math.round((stats.placementsThisMonth / stats.totalMatches) * 100)
              : 0}
            %
          </div>
          <p className="text-sm text-slate-500 mt-2">
            Matches → Placements
          </p>
        </div>
      </div>

      {/* RECENT ACTIVITY */}
      <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <Activity className="h-5 w-5 text-slate-400" />
          <h3 className="text-lg font-medium text-white">Activite Globale</h3>
        </div>

        {activities.length === 0 ? (
          <EmptyState
            icon={Activity}
            title="Aucune activite"
            message="L'activite de la plateforme apparaitra ici."
            className="py-8 text-slate-400"
          />
        ) : (
          <div className="flex flex-col divide-y divide-slate-800">
            {activities.map((activity: { id: string; message?: string; content?: string; created_at: string }) => (
              <div key={activity.id} className="py-4 first:pt-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="text-sm text-slate-300">
                    {activity.message || activity.content || "Activite"}
                  </span>
                </div>
                <div className="text-xs text-slate-500 mt-1 ml-5">
                  {new Date(activity.created_at).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "short",
                    hour: "2-digit",
                    minute: "2-digit",
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
