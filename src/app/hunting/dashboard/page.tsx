import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="text-h2">Overview</h1>
        <div className="flex gap-4">
          <Link href="/hunting/mandates/new" className="btn btn-primary">
            New Mandate
          </Link>
          <Link href="/hunting/talents" className="btn btn-secondary">
            Talent Pool
          </Link>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Active Mandates", value: "12" },
          { label: "Pipeline", value: "47" },
          { label: "Alignments", value: "156" },
          { label: "Placed YTD", value: "8" },
        ].map((stat) => (
          <div key={stat.label} className="card-stats">
            <div className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-2">
              {stat.label}
            </div>
            <div className="text-3xl font-bold text-text-primary">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* RECENT ACTIVITY */}
      <div className="card-clean">
        <h3 className="text-h3 mb-6">Recent Activity</h3>
        <div className="flex flex-col gap-4">
           <div className="text-text-secondary text-sm">Activity feed placeholder...</div>
        </div>
      </div>
    </div>
  );
}
