"use client";

import Link from "next/link";
import { Menu, Bell, User } from "lucide-react";

export function AppHeader() {
  return (
    <header className="fixed top-0 right-0 left-0 md:left-64 h-14 bg-white border-b border-gray-200 z-30">
      <div className="flex items-center justify-between h-full px-4 md:px-6">
        {/* Mobile menu button */}
        <button className="md:hidden p-2 text-[#525252] hover:text-[#1A1F36]">
          <Menu className="h-5 w-5" />
        </button>

        {/* Mobile logo */}
        <Link href="/" className="md:hidden font-serif text-lg font-semibold text-[#1A1F36]">
          IRBIS
        </Link>

        {/* Spacer for desktop */}
        <div className="hidden md:block" />

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-[#525252] hover:text-[#1A1F36] transition-colors">
            <Bell className="h-5 w-5" />
          </button>
          <Link
            href="/hunting/settings"
            className="p-2 text-[#525252] hover:text-[#1A1F36] transition-colors"
          >
            <User className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
