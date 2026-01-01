"use client";

import { useState } from "react";
import { ChevronDown, Shield, User, Eye, Loader2 } from "lucide-react";
import { updateUserRole } from "@/app/actions/admin";

interface UserRoleSelectProps {
  userId: string;
  currentRole: string;
}

const roles = [
  { value: "admin", label: "Admin", icon: Shield, color: "text-amber-500" },
  { value: "recruiter", label: "Recruiter", icon: User, color: "text-blue-400" },
  { value: "viewer", label: "Viewer", icon: Eye, color: "text-slate-400" },
] as const;

export function UserRoleSelect({ userId, currentRole }: UserRoleSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState(currentRole);

  const currentRoleConfig = roles.find((r) => r.value === selectedRole) || roles[1];
  const Icon = currentRoleConfig.icon;

  const handleRoleChange = async (newRole: "admin" | "recruiter" | "viewer") => {
    if (newRole === selectedRole) {
      setIsOpen(false);
      return;
    }

    setIsLoading(true);
    const result = await updateUserRole(userId, newRole);
    setIsLoading(false);

    if (result.success) {
      setSelectedRole(newRole);
    } else {
      console.error("Failed to update role:", result.error);
    }

    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isLoading}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-lg border transition-colors ${
          selectedRole === "admin"
            ? "bg-amber-500/20 border-amber-500/30 text-amber-500"
            : selectedRole === "recruiter"
            ? "bg-blue-500/20 border-blue-500/30 text-blue-400"
            : "bg-slate-500/20 border-slate-500/30 text-slate-400"
        }`}
      >
        {isLoading ? (
          <Loader2 className="h-3 w-3 animate-spin" />
        ) : (
          <Icon className="h-3 w-3" />
        )}
        {currentRoleConfig.label}
        <ChevronDown className="h-3 w-3" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-1 w-40 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-20 overflow-hidden">
            {roles.map((role) => {
              const RoleIcon = role.icon;
              return (
                <button
                  key={role.value}
                  onClick={() => handleRoleChange(role.value)}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors ${
                    selectedRole === role.value
                      ? "bg-slate-700 text-white"
                      : "text-slate-300 hover:bg-slate-700/50"
                  }`}
                >
                  <RoleIcon className={`h-4 w-4 ${role.color}`} />
                  {role.label}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
