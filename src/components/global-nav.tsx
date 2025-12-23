import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export async function GlobalNav() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const isLoggedIn = !!user;

  return (
    <nav className="bg-background-secondary p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Link href="/" className="font-bold text-primary">Irbis</Link>
        <Link href="/approach">Approach</Link>
        <Link href="/executive-search">Executive Search</Link>
        <Link href="/references">References</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/taylor-shift">Taylor Shift</Link>
        <Link href="/paris">Paris</Link>
        {isLoggedIn && (
          <>
            <Link href="/hunting/dashboard">Hunting Dashboard</Link>
            <Link href="/admin/dashboard">Admin</Link>
          </>
        )}
      </div>
      <div>
        {isLoggedIn ? (
          <form action="/auth/signout" method="post">
            <button type="submit">Logout</button>
          </form>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}