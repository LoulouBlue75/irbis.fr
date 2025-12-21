import { logout } from "@/app/auth/actions";
import Link from "next/link";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <aside className="w-full md:w-64 bg-gray-100 dark:bg-gray-900 border-r p-4">
        <div className="font-bold text-xl mb-8">
          <span className="text-blue-900 dark:text-white">IRBIS</span>
          <span className="text-yellow-500">APP</span>
        </div>
        <nav className="flex flex-col gap-2">
          <Link href="/dashboard" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800">
            Dashboard
          </Link>
          <Link href="/projects" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800">
            Projects
          </Link>
          <Link href="/dashboard/candidates" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800">
            Candidates
          </Link>
          <Link href="/dashboard/jobs" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800">
            Jobs
          </Link>
        </nav>
        <div className="mt-auto pt-8">
          <form action={logout}>
            <button className="w-full text-left p-2 rounded hover:bg-red-100 text-red-600">
              Logout
            </button>
          </form>
        </div>
      </aside>
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
