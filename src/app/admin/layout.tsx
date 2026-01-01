import { AdminSidebar } from "@/components/admin-sidebar";
import { requireAdmin } from "@/lib/auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Protect all admin routes - redirects to /hunting/dashboard if not admin
  await requireAdmin();

  return (
    <div className="flex min-h-screen bg-slate-950 font-sans text-white">
      <AdminSidebar />

      <div className="flex-1 flex flex-col md:pl-72 transition-all duration-300">
        {/* Admin Header */}
        <header className="h-20 bg-slate-900 border-b border-slate-800 flex items-center px-8 fixed top-0 left-0 md:left-72 right-0 z-30">
          <div className="flex items-center gap-2">
            <span className="text-xs bg-amber-500/20 text-amber-500 px-2 py-1 rounded font-mono uppercase">
              Admin
            </span>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 px-6 py-8 md:px-12 md:py-12 mt-20 max-w-[1600px] w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
