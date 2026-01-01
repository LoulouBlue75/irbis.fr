import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export type UserRole = "admin" | "recruiter" | "viewer";

export interface AuthUser {
  id: string;
  email: string;
  role: UserRole;
  fullName?: string;
}

/**
 * Get the current authenticated user with role
 */
export async function getAuthUser(): Promise<AuthUser | null> {
  const supabase = await createClient();

  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    return null;
  }

  // Get role from user metadata or default to recruiter
  const role = (user.app_metadata?.role as UserRole) || "recruiter";

  return {
    id: user.id,
    email: user.email || "",
    role,
    fullName: user.user_metadata?.full_name,
  };
}

/**
 * Check if current user is admin
 */
export async function isAdmin(): Promise<boolean> {
  const user = await getAuthUser();
  return user?.role === "admin";
}

/**
 * Require admin role, redirect to dashboard if not
 */
export async function requireAdmin(): Promise<AuthUser> {
  const user = await getAuthUser();

  if (!user) {
    redirect("/login");
  }

  if (user.role !== "admin") {
    redirect("/hunting/dashboard");
  }

  return user;
}

/**
 * Require authentication, redirect to login if not
 */
export async function requireAuth(): Promise<AuthUser> {
  const user = await getAuthUser();

  if (!user) {
    redirect("/login");
  }

  return user;
}
