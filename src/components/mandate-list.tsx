'use client';

import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { deleteJob } from '@/app/actions/jobs';
import { useRealtimeSubscription } from '@/hooks/use-realtime-subscription';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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
  // Subscribe to realtime updates for mandates
  useRealtimeSubscription('jobs');

  const handleDelete = async (id: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce mandat ?')) {
      await deleteJob(id);
    }
  };

  const getStatusBadgeVariant = (status: string): 'default' | 'secondary' | 'destructive' | 'outline' => {
    switch (status) {
      case 'open':
        return 'default';
      case 'closed':
        return 'secondary';
      case 'pending':
        return 'outline';
      default:
        return 'secondary';
    }
  };

  const getStatusLabel = (status: string): string => {
    switch (status) {
      case 'open':
        return 'Ouvert';
      case 'closed':
        return 'Fermé';
      case 'pending':
        return 'En attente';
      default:
        return status;
    }
  };

  if (mandates.length === 0) {
    return (
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-primary">Mandats actifs</h2>
          <Link href="/hunting/mandates/create">
            <Button>Nouveau mandat</Button>
          </Link>
        </div>
        <Card>
          <CardContent className="text-center text-tertiary py-8">
            Aucun mandat actif. Créez un nouveau mandat pour commencer l'alignement.
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-primary">Mandats actifs</h2>
        <Link href="/hunting/mandates/create">
          <Button>Nouveau mandat</Button>
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mandates.map((mandate) => (
          <Card key={mandate.id} className="hover:border-strong transition-colors">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">
                  <Link 
                    href={`/hunting/mandates/${mandate.id}`} 
                    className="hover:text-accent-primary transition-colors"
                  >
                    {mandate.title}
                  </Link>
                </CardTitle>
                <Badge variant={getStatusBadgeVariant(mandate.status)}>
                  {getStatusLabel(mandate.status)}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="text-sm text-tertiary">
                Ouvert {formatDistanceToNow(new Date(mandate.created_at), { addSuffix: true })}
              </div>
            </CardContent>

            <CardFooter className="flex justify-between items-center pt-4 border-t border-secondary">
              <Link 
                href={`/hunting/mandates/${mandate.id}/edit`} 
                className="text-sm text-secondary hover:text-primary transition-colors"
              >
                Modifier les détails
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleDelete(mandate.id)}
                className="text-accent-danger hover:text-red-700"
              >
                Supprimer
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
