"use client";

import Link from "next/link";
import { Menu, Bell, User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function AppHeader() {
  return (
    <header className="fixed top-0 right-0 left-0 md:left-72 h-20 bg-irbis-cream/80 backdrop-blur-md border-b border-irbis-cream-dark z-30 transition-all duration-300">
      <div className="flex items-center justify-between h-full px-6 md:px-12">
        {/* Mobile menu button */}
        <button className="md:hidden p-2 text-irbis-navy hover:bg-white/50 rounded-md transition-colors">
          <Menu className="h-5 w-5" />
        </button>

        {/* Mobile logo */}
        <Link href="/" className="md:hidden font-serif text-2xl font-medium text-irbis-navy">
          IRBIS
        </Link>

        {/* Spacer for desktop */}
        <div className="hidden md:block">
          {/* Breadcrumb ou titre de page pourrait aller ici */}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <button className="p-3 text-gray-500 hover:text-irbis-navy hover:bg-white/50 rounded-lg transition-all duration-300">
            <Bell className="h-5 w-5" />
          </button>

          <Link
            href="/hunting/settings"
            className="flex items-center gap-3 p-2 hover:bg-white/50 rounded-lg transition-all duration-300"
          >
            <Avatar className="h-9 w-9 border-2 border-irbis-gold/20">
              <AvatarFallback className="bg-irbis-navy text-irbis-gold text-sm font-medium">
                IP
              </AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </header>
  );
}
