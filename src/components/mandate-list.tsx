'use client';

import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import { deleteJob } from '@/app/actions/jobs';
import { useRealtimeSubscription } from '@/hooks/use-realtime-subscription';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Plus, ArrowRight, MoreHorizontal } from 'lucide-react';

export interface Mandate {
  id: string;
  title: string;
  status: 'open' | 'closed' | 'pending';
  created_at: string;
}

interface MandateListProps {
  mandates: Mandate[];
}

export function MandateList({ mandates }: MandateListProps) {
  useRealtimeSubscription('jobs');

  const handleDelete = async (id: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce mandat ?')) {
      await deleteJob(id);
    }
  };

  const getStatusBadgeVariant = (status: string): 'success' | 'secondary' | 'warning' | 'outline' => {
    switch (status) {
      case 'open': return 'success';
      case 'closed': return 'secondary';
      case 'pending': return 'warning';
      default: return 'outline';
    }
  };

  const getStatusLabel = (status: string): string => {
    switch (status) {
      case 'open': return 'Actif';
      case 'closed': return 'Clôturé';
      case 'pending': return 'En attente';
      default: return status;
    }
  };

  if (mandates.length === 0) {
    return (
      <div className="mt-10 text-center py-16 bg-white rounded-xl border border-dashed border-gray-200">
        <h2 className="text-xl font-serif text-irbis-navy mb-2">Aucun mandat actif</h2>
        <p className="text-gray-500 mb-6">Lancez une nouvelle recherche pour activer l'algorithme.</p>
        <Link href="/hunting/mandates/create">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Nouveau Mandat
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-10 space-y-6">
      <div className="flex justify-between items-end border-b border-gray-100 pb-4">
        <div>
          <h2 className="text-2xl font-serif text-irbis-navy">Vos Mandats</h2>
          <p className="text-sm text-gray-500 mt-1">Gérez vos missions de chasse en cours.</p>
        </div>
        <Link href="/hunting/mandates/create">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Créer
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mandates.map((mandate) => (
          <Card key={mandate.id} className="group hover:border-irbis-gold/30 transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start gap-4">
                <CardTitle className="text-xl leading-snug group-hover:text-irbis-gold transition-colors">
                  <Link href={"/hunting/mandates/" + mandate.id}>
                    {mandate.title}
                  </Link>
                </CardTitle>
                <Badge variant={getStatusBadgeVariant(mandate.status)}>
                  {getStatusLabel(mandate.status)}
                </Badge>
              </div>
            </CardHeader>

            <CardContent>
              <div className="text-xs text-gray-400 font-mono">
                Démarré {formatDistanceToNow(new Date(mandate.created_at), { addSuffix: true, locale: fr })}
              </div>
            </CardContent>

            <CardFooter className="pt-4 border-t border-gray-50 flex justify-between items-center">
              <Link href={"/hunting/mandates/" + mandate.id}>
                 <Button variant="ghost" size="sm" className="pl-0 text-irbis-navy hover:text-irbis-gold hover:bg-transparent">
                   Voir le cockpit <ArrowRight className="ml-2 w-3 h-3" />
                 </Button>
              </Link>

              <div className="flex items-center gap-2">
                <Link href={"/hunting/mandates/" + mandate.id + "/edit"}>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-irbis-navy">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
