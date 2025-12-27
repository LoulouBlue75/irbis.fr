import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MandateDetailPage() {
  return (
    <div className="flex flex-col gap-8 h-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-ink">CTO Search</h1>
          <Badge variant="active">Active</Badge>
        </div>
        <Button variant="default" size="sm">Run Alignment</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
        {/* INFO (60% -> 7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <Card variant="default">
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-stone">
                Tech company seeking a visionary CTO to lead their engineering team through a Series B expansion.
              </p>
            </CardContent>
          </Card>

          <Card variant="default">
            <CardHeader>
              <CardTitle>Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-stone space-y-2">
                <li>10+ years of experience</li>
                <li>SaaS experience</li>
                <li>Leadership track record</li>
                <li>Strategic vision</li>
              </ul>
            </CardContent>
          </Card>
          
          <div className="text-sm text-stone">
            Created: Dec 15, 2024
          </div>
        </div>

        {/* PIPELINE (40% -> 5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <Card variant="default" className="h-full">
            <CardHeader>
              <CardTitle>Pipeline</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <div>
                <h4 className="text-sm font-medium text-ink mb-3 flex justify-between">
                  Identified <span className="text-stone">3</span>
                </h4>
                <div className="flex flex-col gap-2">
                  {["Marc D.", "Julie S.", "Paul R."].map((name) => (
                    <div key={name} className="p-3 bg-ivory rounded-md text-sm text-ink border border-gray-200">
                      {name}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-ink mb-3 flex justify-between">
                  Contacted <span className="text-stone">2</span>
                </h4>
                <div className="flex flex-col gap-2">
                  {["Anne M.", "Jean L."].map((name) => (
                    <div key={name} className="p-3 bg-ivory rounded-md text-sm text-ink border border-gray-200">
                      {name}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-ink mb-3 flex justify-between">
                  Interview <span className="text-stone">1</span>
                </h4>
                <div className="flex flex-col gap-2">
                  {["Marie D."].map((name) => (
                    <div key={name} className="p-3 bg-ivory rounded-md text-sm text-ink border border-gray-200">
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
