"use server";

import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireAdmin } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export interface AdminStats {
  totalUsers: number;
  totalCandidates: number;
  totalJobs: number;
  totalMatches: number;
  candidatesThisMonth: number;
  placementsThisMonth: number;
}

export interface AdminUser {
  id: string;
  email: string;
  role: string;
  fullName: string | null;
  avatarUrl: string | null;
  createdAt: string;
  lastSignIn: string | null;
  candidatesCount: number;
  jobsCount: number;
}

/**
 * Get global admin statistics
 */
export async function getAdminStats(): Promise<AdminStats> {
  await requireAdmin();

  const supabase = await createClient();

  // Get counts from all tables
  const [usersResult, candidatesResult, jobsResult, matchesResult] = await Promise.all([
    supabase.from("profiles").select("id", { count: "exact", head: true }),
    supabase.from("candidates").select("id", { count: "exact", head: true }),
    supabase.from("jobs").select("id", { count: "exact", head: true }),
    supabase.from("matches").select("id", { count: "exact", head: true }),
  ]);

  // Get this month's stats
  const startOfMonth = new Date();
  startOfMonth.setDate(1);
  startOfMonth.setHours(0, 0, 0, 0);

  const [candidatesMonthResult, placementsResult] = await Promise.all([
    supabase
      .from("candidates")
      .select("id", { count: "exact", head: true })
      .gte("created_at", startOfMonth.toISOString()),
    supabase
      .from("matches")
      .select("id", { count: "exact", head: true })
      .eq("status", "accepted")
      .gte("created_at", startOfMonth.toISOString()),
  ]);

  return {
    totalUsers: usersResult.count || 0,
    totalCandidates: candidatesResult.count || 0,
    totalJobs: jobsResult.count || 0,
    totalMatches: matchesResult.count || 0,
    candidatesThisMonth: candidatesMonthResult.count || 0,
    placementsThisMonth: placementsResult.count || 0,
  };
}

/**
 * Get list of all users with their stats
 */
export async function getAdminUsers(): Promise<AdminUser[]> {
  await requireAdmin();

  const supabase = await createClient();

  // Get all profiles
  const { data: profiles, error } = await supabase
    .from("profiles")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching profiles:", error);
    return [];
  }

  if (!profiles || profiles.length === 0) {
    return [];
  }

  // Get stats for each user
  const usersWithStats = await Promise.all(
    profiles.map(async (profile) => {
      const { data: stats } = await supabase.rpc("get_user_stats", {
        user_id: profile.id,
      });

      return {
        id: profile.id,
        email: profile.email,
        role: profile.role,
        fullName: profile.full_name,
        avatarUrl: profile.avatar_url,
        createdAt: profile.created_at,
        lastSignIn: profile.last_sign_in,
        candidatesCount: stats?.[0]?.candidates_count || 0,
        jobsCount: stats?.[0]?.jobs_count || 0,
      };
    })
  );

  return usersWithStats;
}

/**
 * Get recent activity across all users
 */
export async function getGlobalActivity(limit: number = 20) {
  await requireAdmin();

  const supabase = await createClient();

  const { data, error } = await supabase
    .from("activities")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Error fetching global activity:", error);
    return [];
  }

  return data || [];
}

/**
 * Update user role
 */
export async function updateUserRole(
  userId: string,
  newRole: "admin" | "recruiter" | "viewer"
): Promise<{ success: boolean; error?: string }> {
  await requireAdmin();

  try {
    const adminClient = createAdminClient();

    // Update role in auth.users app_metadata
    const { error: authError } = await adminClient.auth.admin.updateUserById(
      userId,
      {
        app_metadata: { role: newRole },
      }
    );

    if (authError) {
      console.error("Error updating auth user:", authError);
      return { success: false, error: authError.message };
    }

    // Also update in profiles table
    const supabase = await createClient();
    const { error: profileError } = await supabase
      .from("profiles")
      .update({ role: newRole })
      .eq("id", userId);

    if (profileError) {
      console.error("Error updating profile:", profileError);
      return { success: false, error: profileError.message };
    }

    revalidatePath("/admin/users");
    return { success: true };
  } catch (error) {
    console.error("Error in updateUserRole:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Invite a new user
 */
export async function inviteUser(
  email: string,
  role: "admin" | "recruiter" | "viewer" = "recruiter",
  fullName?: string
): Promise<{ success: boolean; error?: string }> {
  await requireAdmin();

  try {
    const adminClient = createAdminClient();

    // Create user with invite
    const { data, error } = await adminClient.auth.admin.inviteUserByEmail(
      email,
      {
        data: {
          full_name: fullName,
        },
      }
    );

    if (error) {
      console.error("Error inviting user:", error);
      return { success: false, error: error.message };
    }

    // Set role in app_metadata
    if (data.user) {
      await adminClient.auth.admin.updateUserById(data.user.id, {
        app_metadata: { role },
      });
    }

    revalidatePath("/admin/users");
    return { success: true };
  } catch (error) {
    console.error("Error in inviteUser:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Delete a user
 */
export async function deleteUser(
  userId: string
): Promise<{ success: boolean; error?: string }> {
  await requireAdmin();

  try {
    const adminClient = createAdminClient();

    const { error } = await adminClient.auth.admin.deleteUser(userId);

    if (error) {
      console.error("Error deleting user:", error);
      return { success: false, error: error.message };
    }

    revalidatePath("/admin/users");
    return { success: true };
  } catch (error) {
    console.error("Error in deleteUser:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
