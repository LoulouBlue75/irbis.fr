"use client";

import Link from "next/link";
import { Shield } from "lucide-react";
import { useEffect, useState } from "react";
import { createBrowserClient } from "@supabase/ssr";

export function AdminLink() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    async function checkAdmin() {
      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      );

      const { data: { user } } = await supabase.auth.getUser();

      if (user?.app_metadata?.role === "admin") {
        setIsAdmin(true);
      }
    }

    checkAdmin();
  }, []);

  if (!isAdmin) return null;

  return (
    <Link
      href="/admin/dashboard"
      className="group flex items-center gap-4 px-4 py-3.5 text-sm font-medium transition-all duration-300 rounded-lg text-amber-600 hover:text-amber-500 hover:bg-amber-50"
    >
      <Shield className="h-5 w-5 text-amber-500" />
      <span className="tracking-wide">Admin</span>
    </Link>
  );
}
