import Link from "next/link";
import { getJobs } from "@/app/actions/jobs";

export default async function MandatesPage() {
  const mandates = await getJobs();

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'closed':
        return 'bg-ink-navy/5 text-ink-light border-ink-navy/10';
      case 'draft':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      default:
        return 'bg-paper-cream text-ink-light border-ink-navy/10';
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl text-ink-navy italic">Mandates</h1>
          <p className="text-ink-light text-sm mt-1">{mandates.length} active searches</p>
        </div>
        <Link 
          href="/hunting/mandates/new" 
          className="px-6 py-3 bg-ink-navy text-paper-cream text-sm font-medium tracking-wide transition-all hover:bg-foil-gold hover:text-ink-navy"
        >
          New Mandate
        </Link>
      </div>

      {/* TABLE or EMPTY STATE */}
      {mandates.length === 0 ? (
        <div className="bg-paper-white border border-ink-navy/10 p-12 text-center">
          <p className="text-ink-light mb-4">No mandates yet.</p>
          <Link 
            href="/hunting/mandates/new" 
            className="text-foil-gold font-medium hover:underline"
          >
            Create your first mandate
          </Link>
        </div>
      ) : (
        <div className="bg-paper-white border border-ink-navy/10 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-paper-cream border-b border-ink-navy/10">
              <tr>
                <th className="p-4 text-xs font-mono uppercase tracking-widest text-foil-bronze">Title</th>
                <th className="p-4 text-xs font-mono uppercase tracking-widest text-foil-bronze">Status</th>
                <th className="p-4 text-xs font-mono uppercase tracking-widest text-foil-bronze">Requirements</th>
                <th className="p-4 text-xs font-mono uppercase tracking-widest text-foil-bronze">Created</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-navy/5">
              {mandates.map((mandate: any) => (
                <tr key={mandate.id} className="hover:bg-paper-cream/50 transition-colors">
                  <td className="p-4">
                    <Link 
                      href={"/hunting/mandates/" + mandate.id}
                      className="text-ink-navy font-medium hover:text-foil-gold transition-colors"
                    >
                      {mandate.title}
                    </Link>
                    {mandate.description && (
                      <p className="text-ink-light text-sm mt-1 line-clamp-1">
                        {mandate.description}
                      </p>
                    )}
                  </td>
                  <td className="p-4">
                    <span className={"px-3 py-1 text-xs font-medium border " + getStatusStyle(mandate.status)}>
                      {mandate.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-wrap gap-1">
                      {(mandate.requirements || []).slice(0, 2).map((req: string, i: number) => (
                        <span 
                          key={i}
                          className="px-2 py-1 text-xs bg-paper-cream text-ink-navy border border-ink-navy/10"
                        >
                          {req}
                        </span>
                      ))}
                      {(mandate.requirements || []).length > 2 && (
                        <span className="px-2 py-1 text-xs text-ink-light">
                          +{mandate.requirements.length - 2}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="p-4 text-ink-light text-sm">
                    {new Date(mandate.created_at).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric'
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
