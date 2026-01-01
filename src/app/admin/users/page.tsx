import { Users, UserPlus, Shield } from "lucide-react";
import { getAdminUsers } from "@/app/actions/admin";
import { UsersPageClient } from "./users-page-client";

export default async function AdminUsersPage() {
  const users = await getAdminUsers();

  const stats = {
    total: users.length,
    admins: users.filter((u) => u.role === "admin").length,
    recruiters: users.filter((u) => u.role === "recruiter").length,
  };

  return <UsersPageClient users={users} stats={stats} />;
}
