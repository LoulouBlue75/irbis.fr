import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function MandatesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-ink">Mandates</h1>
        <Button variant="default" size="sm">New Mandate</Button>
      </div>

      {/* TABS (Simple implementation for now) */}
      <div className="flex gap-6 border-b border-gray-200">
        <button className="pb-3 border-b-2 border-ink font-medium text-ink text-sm">All</button>
        <button className="pb-3 border-b-2 border-transparent font-medium text-stone hover:text-ink text-sm">Active</button>
        <button className="pb-3 border-b-2 border-transparent font-medium text-stone hover:text-ink text-sm">Closed</button>
        <button className="pb-3 border-b-2 border-transparent font-medium text-stone hover:text-ink text-sm">Draft</button>
      </div>

      {/* TABLE */}
      <Card variant="default" className="p-0 overflow-hidden">
        <Table>
          <TableHeader className="bg-ivory">
            <TableRow>
              <TableHead className="text-stone font-medium">Title</TableHead>
              <TableHead className="text-stone font-medium">Status</TableHead>
              <TableHead className="text-stone font-medium">Talents</TableHead>
              <TableHead className="text-stone font-medium">Align</TableHead>
              <TableHead className="text-stone font-medium text-right">Created</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { title: "CTO Search", status: "active", talents: 8, align: "92%", created: "2d ago" },
              { title: "Ops Director", status: "active", talents: 5, align: "87%", created: "5d ago" },
              { title: "CFO Pre-IPO", status: "closed", talents: 12, align: "95%", created: "2w ago" },
              { title: "Marketing Lead", status: "draft", talents: 0, align: "—", created: "1d ago" },
            ].map((mandate) => (
              <TableRow key={mandate.title} className="hover:bg-gray-50 cursor-pointer">
                <TableCell className="font-medium text-ink">
                  <Link href="/hunting/mandates/1" className="hover:underline">{mandate.title}</Link>
                </TableCell>
                <TableCell>
                  <Badge variant={mandate.status === 'active' ? 'active' : mandate.status === 'closed' ? 'closed' : 'progress'}>
                    {mandate.status.charAt(0).toUpperCase() + mandate.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell className="text-ink">{mandate.talents}</TableCell>
                <TableCell className="text-ink font-medium">{mandate.align}</TableCell>
                <TableCell className="text-stone text-right">{mandate.created}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
