import { createClient } from "@/lib/supabase/server";
import { Navbar } from "./navbar";

export async function NavbarWrapper() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const isLoggedIn = !!user;

  return <Navbar isLoggedIn={isLoggedIn} />;
}
