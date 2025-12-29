'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createJob, updateJob, JobInput } from '@/app/actions/jobs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Plus, X, ArrowLeft, Save } from 'lucide-react';

interface JobFormProps {
  initialData?: JobInput & { id: string };
}

export function JobForm({ initialData }: JobFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [requirements, setRequirements] = useState<string[]>(initialData?.requirements || []);
  const [newRequirement, setNewRequirement] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data: JobInput = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      requirements: requirements,
      status: formData.get('status') as 'open' | 'closed' | 'draft',
    };

    try {
      let result;
      if (initialData) {
        result = await updateJob(initialData.id, data);
      } else {
        result = await createJob(data);
      }

      if (result.error) {
        setError(result.error);
      } else {
        router.push('/hunting/mandates');
      }
    } catch (err) {
      setError('Une erreur inattendue est survenue.');
    } finally {
      setLoading(false);
    }
  };

  const addRequirement = () => {
    if (newRequirement.trim()) {
      setRequirements([...requirements, newRequirement.trim()]);
      setNewRequirement('');
    }
  };

  const removeRequirement = (index: number) => {
    setRequirements(requirements.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto py-8">
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <label htmlFor="title" className="text-sm font-medium text-irbis-navy">
          Titre du Mandat
        </label>
        <Input
          name="title"
          id="title"
          required
          defaultValue={initialData?.title}
          placeholder="Ex: Directeur Commercial Retail Luxe"
          className="bg-white"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="description" className="text-sm font-medium text-irbis-navy">
          Description du Poste
        </label>
        <Textarea
          name="description"
          id="description"
          rows={5}
          required
          defaultValue={initialData?.description}
          placeholder="Décrivez le contexte, les responsabilités, l'environnement..."
          className="bg-white resize-none"
        />
      </div>

      <div className="space-y-3">
        <label className="text-sm font-medium text-irbis-navy">Critères & Compétences Requises</label>
        <div className="flex gap-2">
          <Input
            value={newRequirement}
            onChange={(e) => setNewRequirement(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addRequirement();
              }
            }}
            placeholder="Ajouter un critère (ex: MBA, 10+ ans expérience)..."
            className="bg-white max-w-md"
          />
          <Button type="button" onClick={addRequirement} variant="secondary" size="icon">
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 min-h-[40px] p-4 bg-irbis-cream rounded-md border border-gray-200/50">
          {requirements.length === 0 && (
            <span className="text-sm text-gray-400 italic">Aucun critère ajouté</span>
          )}
          {requirements.map((req, index) => (
            <Badge key={index} variant="secondary" className="bg-white text-irbis-navy border-gray-200 pl-3 pr-1 py-1">
              {req}
              <button
                type="button"
                onClick={() => removeRequirement(index)}
                className="ml-2 p-1 hover:text-red-600 rounded-full transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="status" className="text-sm font-medium text-irbis-navy">
          Statut
        </label>
        <select
          name="status"
          id="status"
          defaultValue={initialData?.status || 'open'}
          className="w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-sm text-irbis-navy focus:border-irbis-gold focus:ring-irbis-gold"
        >
          <option value="open">Actif</option>
          <option value="closed">Clôturé</option>
          <option value="draft">Brouillon</option>
        </select>
      </div>

      <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-100">
        <Button type="button" variant="ghost" onClick={() => router.back()} className="text-gray-500 hover:text-irbis-navy">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Annuler
        </Button>
        <Button type="submit" disabled={loading} className="min-w-[140px]">
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Sauvegarde...
            </>
          ) : (
            <>
              <Save className="w-4 h-4 mr-2" />
              {initialData ? 'Mettre à jour' : 'Créer Mandat'}
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
