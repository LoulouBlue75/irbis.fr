import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-ink">Overview</h1>
        {/* New Mandate button could go here */}
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Active", value: "12" },
          { label: "Pipeline", value: "47" },
          { label: "Alignments", value: "156" },
          { label: "Placed", value: "8" },
        ].map((stat) => (
          <Card key={stat.label} variant="default">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-stone uppercase tracking-wider">
                {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-ink">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ACTIVITY */}
      <Card variant="default" className="flex-1">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            {[
              { action: "New talent added", subject: "Marie D.", time: "2h ago" },
              { action: "Alignment completed", subject: "CTO mandate", time: "1d ago" },
              { action: "Mandate created", subject: "Ops Director", time: "3d ago" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-ink">{item.action}</span>
                  <span className="text-sm text-stone">{item.subject}</span>
                </div>
                <span className="text-xs text-stone">{item.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
