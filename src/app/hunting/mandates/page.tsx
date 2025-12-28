import Link from "next/link";

export default function MandatesPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="text-h2">Mandates</h1>
        <Link href="/hunting/mandates/new" className="btn btn-primary">
          New Mandate
        </Link>
      </div>

      {/* TABLE */}
      <div className="card-clean p-0 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-background-secondary border-b border-border-primary">
            <tr>
              <th className="p-4 text-sm font-medium text-text-secondary">Title</th>
              <th className="p-4 text-sm font-medium text-text-secondary">Status</th>
              <th className="p-4 text-sm font-medium text-text-secondary">Talents</th>
              <th className="p-4 text-sm font-medium text-text-secondary">Alignment</th>
              <th className="p-4 text-sm font-medium text-text-secondary">Created</th>
            </tr>
          </thead>
          <tbody>
            {/* Empty State */}
            <tr>
              <td colSpan={5} className="p-12 text-center">
                <p className="text-text-secondary mb-4">No mandates yet.</p>
                <Link href="/hunting/mandates/new" className="text-accent-primary font-medium hover:underline">
                  Create one →
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
