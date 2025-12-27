"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Briefcase, Users, Settings } from "lucide-react";

const navigation = [
  { name: "Overview", href: "/hunting/dashboard", icon: LayoutDashboard },
  { name: "Mandates", href: "/hunting/mandates", icon: Briefcase },
  { name: "Talents", href: "/hunting/talents", icon: Users },
  { name: "Settings", href: "/hunting/settings", icon: Settings },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 z-40">
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <Link href="/" className="text-xl font-bold font-serif tracking-tight text-ink">
          IRBIS
        </Link>
      </div>
      <div className="flex flex-col gap-1 p-4">
        {navigation.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive
                  ? "bg-ivory text-ink font-semibold"
                  : "text-stone hover:text-ink hover:bg-gray-50"
              )}
            >
              <item.icon className={cn("h-5 w-5", isActive ? "text-gold" : "text-stone")} />
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
