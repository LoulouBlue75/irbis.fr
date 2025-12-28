import Link from "next/link";

export default function TalentsPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="text-h2">Talent Pool</h1>
        <Link href="/hunting/talents/new" className="btn btn-primary">
          Add Talent
        </Link>
      </div>

      {/* SEARCH */}
      <div className="w-full max-w-md">
        <input 
          type="text" 
          placeholder="Search..." 
          className="input"
        />
      </div>

      {/* EMPTY STATE */}
      <div className="card-clean p-12 text-center">
        <p className="text-text-secondary mb-4">No talents yet.</p>
        <Link href="/hunting/talents/new" className="text-accent-primary font-medium hover:underline">
          Add one →
        </Link>
      </div>
    </div>
  );
}
