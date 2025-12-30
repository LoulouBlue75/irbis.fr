"use client";

import Link from "next/link";
import { Menu, Bell, LogOut } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { logout } from "@/app/auth/actions";

export function AppHeader() {
  return (
    <header className="fixed top-0 right-0 left-0 md:left-72 h-20 bg-paper-cream/80 backdrop-blur-md border-b border-ink-navy/5 z-30 transition-all duration-300">
      <div className="flex items-center justify-between h-full px-6 md:px-12">
        {/* Mobile menu button */}
        <button className="md:hidden p-2 text-ink-navy hover:bg-white/50 rounded-md transition-colors">
          <Menu className="h-5 w-5" />
        </button>

        {/* Mobile logo */}
        <Link href="/" className="md:hidden font-display text-2xl text-ink-navy italic">
          Irbis
        </Link>

        {/* Spacer for desktop */}
        <div className="hidden md:block" />

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <button className="p-3 text-ink-light hover:text-ink-navy hover:bg-white/50 rounded-lg transition-all duration-300">
            <Bell className="h-5 w-5" />
          </button>

          <Link
            href="/hunting/settings"
            className="flex items-center gap-3 p-2 hover:bg-white/50 rounded-lg transition-all duration-300"
          >
            <Avatar className="h-9 w-9 border-2 border-foil-gold/20">
              <AvatarFallback className="bg-ink-navy text-foil-gold text-sm font-medium">
                IP
              </AvatarFallback>
            </Avatar>
          </Link>

          <form action={logout}>
            <button 
              type="submit"
              className="p-3 text-ink-light hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-300"
              title="Logout"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
