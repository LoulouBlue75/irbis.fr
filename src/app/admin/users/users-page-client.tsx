"use client";

import { useState } from "react";
import { Users, UserPlus, Shield } from "lucide-react";
import { AdminUser } from "@/app/actions/admin";
import { UsersTable } from "@/components/admin/users-table";
import { InviteUserDialog } from "@/components/admin/invite-user-dialog";

interface UsersPageClientProps {
  users: AdminUser[];
  stats: {
    total: number;
    admins: number;
    recruiters: number;
  };
}

export function UsersPageClient({ users, stats }: UsersPageClientProps) {
  const [isInviteOpen, setIsInviteOpen] = useState(false);

  return (
    <div className="flex flex-col gap-8">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif text-white">Utilisateurs</h1>
          <p className="text-slate-400 mt-1">Gestion des acces a la plateforme</p>
        </div>
        <button
          onClick={() => setIsInviteOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-slate-900 text-sm font-medium rounded-lg hover:bg-amber-400 transition-colors"
        >
          <UserPlus className="h-4 w-4" />
          Inviter
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <Users className="h-5 w-5 text-slate-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500">
              Total utilisateurs
            </span>
          </div>
          <div className="text-4xl font-serif text-white">{stats.total}</div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="h-5 w-5 text-amber-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500">
              Admins
            </span>
          </div>
          <div className="text-4xl font-serif text-amber-500">{stats.admins}</div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <UserPlus className="h-5 w-5 text-blue-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500">
              Recruiters
            </span>
          </div>
          <div className="text-4xl font-serif text-blue-400">{stats.recruiters}</div>
        </div>
      </div>

      {/* USERS TABLE */}
      <UsersTable users={users} />

      {/* ROLE LEGEND */}
      <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
        <h3 className="text-sm font-medium text-white mb-4">Roles disponibles</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start gap-3">
            <span className="px-2 py-1 text-xs bg-amber-500/20 text-amber-500 rounded flex items-center gap-1">
              <Shield className="h-3 w-3" />
              admin
            </span>
            <p className="text-sm text-slate-400">
              Acces complet. Gestion utilisateurs, stats globales, configuration.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded">
              recruiter
            </span>
            <p className="text-sm text-slate-400">
              Acces Console Hunting. Gestion talents et mandats personnels.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="px-2 py-1 text-xs bg-slate-500/20 text-slate-400 rounded">
              viewer
            </span>
            <p className="text-sm text-slate-400">
              Lecture seule. Consultation des profils partages.
            </p>
          </div>
        </div>
      </div>

      {/* Invite Dialog */}
      <InviteUserDialog
        isOpen={isInviteOpen}
        onClose={() => setIsInviteOpen(false)}
      />
    </div>
  );
}
