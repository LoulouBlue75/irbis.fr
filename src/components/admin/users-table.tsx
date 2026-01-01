"use client";

import { useState } from "react";
import { Mail, MoreHorizontal, Trash2, Users as UsersIcon } from "lucide-react";
import { AdminUser, deleteUser } from "@/app/actions/admin";
import { UserRoleSelect } from "./user-role-select";
import { EmptyState } from "@/components/ui/empty-state";

interface UsersTableProps {
  users: AdminUser[];
}

export function UsersTable({ users }: UsersTableProps) {
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (userId: string, email: string) => {
    if (!confirm(`Supprimer l'utilisateur ${email} ? Cette action est irreversible.`)) {
      return;
    }

    setDeletingId(userId);
    const result = await deleteUser(userId);
    setDeletingId(null);

    if (!result.success) {
      alert(`Erreur: ${result.error}`);
    }
  };

  if (users.length === 0) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-lg">
        <EmptyState
          icon={UsersIcon}
          title="Aucun utilisateur"
          message="Invitez votre premier utilisateur pour commencer."
          className="py-16 text-slate-400"
        />
      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-800">
            <th className="text-left px-6 py-4 text-xs font-mono uppercase tracking-widest text-slate-500">
              Utilisateur
            </th>
            <th className="text-left px-6 py-4 text-xs font-mono uppercase tracking-widest text-slate-500">
              Role
            </th>
            <th className="text-left px-6 py-4 text-xs font-mono uppercase tracking-widest text-slate-500">
              Talents
            </th>
            <th className="text-left px-6 py-4 text-xs font-mono uppercase tracking-widest text-slate-500">
              Mandats
            </th>
            <th className="text-left px-6 py-4 text-xs font-mono uppercase tracking-widest text-slate-500">
              Derniere connexion
            </th>
            <th className="text-right px-6 py-4 text-xs font-mono uppercase tracking-widest text-slate-500">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800">
          {users.map((user) => (
            <tr
              key={user.id}
              className={`hover:bg-slate-800/50 transition-colors ${
                deletingId === user.id ? "opacity-50" : ""
              }`}
            >
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
                    {user.avatarUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={user.avatarUrl}
                        alt={user.fullName || user.email}
                        className="h-9 w-9 rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-sm font-medium text-white">
                        {(user.fullName || user.email)[0].toUpperCase()}
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">
                      {user.fullName || "—"}
                    </div>
                    <div className="text-xs text-slate-500 flex items-center gap-1">
                      <Mail className="h-3 w-3" />
                      {user.email}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <UserRoleSelect userId={user.id} currentRole={user.role} />
              </td>
              <td className="px-6 py-4 text-sm text-slate-300">
                {user.candidatesCount}
              </td>
              <td className="px-6 py-4 text-sm text-slate-300">
                {user.jobsCount}
              </td>
              <td className="px-6 py-4 text-sm text-slate-400">
                {user.lastSignIn
                  ? new Date(user.lastSignIn).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "short",
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : "Jamais"}
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-end gap-2">
                  <button
                    onClick={() => handleDelete(user.id, user.email)}
                    disabled={deletingId === user.id}
                    className="p-2 text-slate-500 hover:text-red-400 transition-colors rounded-lg hover:bg-slate-800"
                    title="Supprimer"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-slate-500 hover:text-white transition-colors rounded-lg hover:bg-slate-800">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
