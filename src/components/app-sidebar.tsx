"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Briefcase, Users, Settings } from "lucide-react";
import { AdminLink } from "./admin-link";

const navigation = [
  { name: "Vue d'ensemble", href: "/hunting/dashboard", icon: LayoutDashboard },
  { name: "Mandats", href: "/hunting/mandates", icon: Briefcase },
  { name: "Talents", href: "/hunting/talents", icon: Users },
  { name: "Paramètres", href: "/hunting/settings", icon: Settings },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-72 bg-irbis-cream border-r border-irbis-cream-dark h-screen fixed left-0 top-0 z-40 shadow-[1px_0_20px_rgba(0,0,0,0.02)]">
      {/* Header : Marque */}
      <div className="h-24 flex items-center px-8">
        <Link href="/" className="group flex items-center gap-3">
           <div className="h-8 w-8 bg-irbis-navy text-irbis-gold flex items-center justify-center rounded-sm shadow-sm transition-transform group-hover:scale-105 duration-500">
             <span className="font-serif font-bold text-xl">I</span>
           </div>
           <span className="text-2xl font-serif font-medium text-irbis-navy tracking-tight group-hover:text-irbis-gold transition-colors duration-300">
            IRBIS
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-2 px-4 py-8">
        {/* Admin Link - Only visible for admins */}
        <AdminLink />

        {navigation.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center gap-4 px-4 py-3.5 text-sm font-medium transition-all duration-300 rounded-lg relative overflow-hidden",
                isActive
                  ? "text-irbis-navy bg-white shadow-sm"
                  : "text-gray-500 hover:text-irbis-navy hover:bg-white/50"
              )}
            >
              {/* Active Indicator Line (Gold) */}
              <div className={cn(
                "absolute left-0 top-0 bottom-0 w-1 bg-irbis-gold transition-transform duration-300",
                isActive ? "scale-y-100" : "scale-y-0"
              )} />

              <item.icon
                className={cn(
                  "h-5 w-5 transition-colors duration-300",
                  isActive ? "text-irbis-gold" : "text-gray-400 group-hover:text-irbis-navy"
                )}
              />
              <span className="tracking-wide">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer Sidebar */}
      <div className="p-8 border-t border-irbis-cream-dark">
        <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
          <span className="text-xs text-irbis-navy font-mono uppercase tracking-wider">Sanctuaire v1.0</span>
        </div>
      </div>
    </aside>
  );
}
