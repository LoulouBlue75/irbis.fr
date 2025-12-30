import Link from "next/link";
import { getTalents } from "@/app/actions/talents";

export default async function TalentsPage() {
  const { talents, total } = await getTalents({ page: 1, limit: 50 });

  return (
    <div className="flex flex-col gap-8">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl text-ink-navy italic">Talent Pool</h1>
          <p className="text-ink-light text-sm mt-1">{total} talents in database</p>
        </div>
        <Link 
          href="/hunting/talents/new" 
          className="px-6 py-3 bg-ink-navy text-paper-cream text-sm font-medium tracking-wide transition-all hover:bg-foil-gold hover:text-ink-navy"
        >
          Add Talent
        </Link>
      </div>

      {/* SEARCH - placeholder for now */}
      <div className="w-full max-w-md">
        <input 
          type="text" 
          placeholder="Search talents..." 
          className="w-full px-4 py-3 bg-paper-white border border-ink-navy/10 text-ink-navy placeholder:text-ink-light/50 focus:border-foil-gold focus:outline-none transition-colors"
        />
      </div>

      {/* TABLE or EMPTY STATE */}
      {talents.length === 0 ? (
        <div className="bg-paper-white border border-ink-navy/10 p-12 text-center">
          <p className="text-ink-light mb-4">No talents yet.</p>
          <Link 
            href="/hunting/talents/new" 
            className="text-foil-gold font-medium hover:underline"
          >
            Add one to get started
          </Link>
        </div>
      ) : (
        <div className="bg-paper-white border border-ink-navy/10 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-paper-cream border-b border-ink-navy/10">
              <tr>
                <th className="p-4 text-xs font-mono uppercase tracking-widest text-foil-bronze">Name</th>
                <th className="p-4 text-xs font-mono uppercase tracking-widest text-foil-bronze">Email</th>
                <th className="p-4 text-xs font-mono uppercase tracking-widest text-foil-bronze">Skills</th>
                <th className="p-4 text-xs font-mono uppercase tracking-widest text-foil-bronze">Added</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-navy/5">
              {talents.map((talent: any) => (
                <tr key={talent.id} className="hover:bg-paper-cream/50 transition-colors">
                  <td className="p-4">
                    <Link 
                      href={"/hunting/talents/" + talent.id}
                      className="text-ink-navy font-medium hover:text-foil-gold transition-colors"
                    >
                      {talent.name || "Unknown"}
                    </Link>
                  </td>
                  <td className="p-4 text-ink-light text-sm">{talent.email || "-"}</td>
                  <td className="p-4">
                    <div className="flex flex-wrap gap-1">
                      {(talent.skills || []).slice(0, 3).map((skill: string, i: number) => (
                        <span 
                          key={i}
                          className="px-2 py-1 text-xs bg-paper-cream text-ink-navy border border-ink-navy/10"
                        >
                          {skill}
                        </span>
                      ))}
                      {(talent.skills || []).length > 3 && (
                        <span className="px-2 py-1 text-xs text-ink-light">
                          +{talent.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="p-4 text-ink-light text-sm">
                    {new Date(talent.created_at).toLocaleDateString('en-US', {
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
