"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  Settings,
  Link2,
  ArrowLeft,
  Shield
} from "lucide-react";

const adminNavigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Utilisateurs", href: "/admin/users", icon: Users },
  { name: "Integrations", href: "/admin/integrations", icon: Link2 },
  { name: "Parametres", href: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-72 bg-slate-900 h-screen fixed left-0 top-0 z-40">
      {/* Header : Admin Badge */}
      <div className="h-24 flex items-center px-8 border-b border-slate-800">
        <Link href="/admin/dashboard" className="group flex items-center gap-3">
          <div className="h-8 w-8 bg-amber-500 text-slate-900 flex items-center justify-center rounded-sm shadow-sm transition-transform group-hover:scale-105 duration-500">
            <Shield className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-serif font-medium text-white tracking-tight">
              IRBIS
            </span>
            <span className="text-xs text-amber-500 uppercase tracking-widest font-mono">
              Admin
            </span>
          </div>
        </Link>
      </div>

      {/* Back to Console */}
      <div className="px-4 py-4 border-b border-slate-800">
        <Link
          href="/hunting/dashboard"
          className="flex items-center gap-2 px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour Console
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-1 px-4 py-6">
        {adminNavigation.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center gap-4 px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg relative overflow-hidden",
                isActive
                  ? "text-white bg-slate-800"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              )}
            >
              {/* Active Indicator Line (Amber) */}
              <div className={cn(
                "absolute left-0 top-0 bottom-0 w-1 bg-amber-500 transition-transform duration-300",
                isActive ? "scale-y-100" : "scale-y-0"
              )} />

              <item.icon
                className={cn(
                  "h-5 w-5 transition-colors duration-300",
                  isActive ? "text-amber-500" : "text-slate-500 group-hover:text-white"
                )}
              />
              <span className="tracking-wide">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-8 border-t border-slate-800">
        <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
          <div className="h-2 w-2 rounded-full bg-amber-500"></div>
          <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">
            Admin Panel v1.0
          </span>
        </div>
      </div>
    </aside>
  );
}
