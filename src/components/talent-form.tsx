'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createTalent, TalentInput } from '@/app/actions/talents';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { X, Plus, Save, ArrowLeft, Loader2 } from 'lucide-react';

export function TalentForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data: TalentInput = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      skills: skills,
      experience_years: parseInt(formData.get('experience_years') as string) || 0,
      education: formData.get('education') as string,
      notes: formData.get('notes') as string,
    };

    try {
      const result = await createTalent(data);
      if (result.error) {
        setError(result.error);
      } else {
        router.push('/hunting/talents');
      }
    } catch (err) {
      setError('Une erreur inattendue est survenue.');
    } finally {
      setLoading(false);
    }
  };

  const addSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto py-8">
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-irbis-navy">
            Nom Complet
          </label>
          <Input
            name="name"
            id="name"
            required
            placeholder="Ex: Alexandre Dumas"
            className="bg-white"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-irbis-navy">
            Email Professionnel
          </label>
          <Input
            type="email"
            name="email"
            id="email"
            required
            placeholder="alexandre@example.com"
            className="bg-white"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="experience_years" className="text-sm font-medium text-irbis-navy">
            Expérience (Années)
          </label>
          <Input
            type="number"
            name="experience_years"
            id="experience_years"
            min="0"
            required
            placeholder="Ex: 8"
            className="bg-white"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="education" className="text-sm font-medium text-irbis-navy">
            Formation / École
          </label>
          <Input
            name="education"
            id="education"
            placeholder="Ex: HEC Paris, MBA"
            className="bg-white"
          />
        </div>
      </div>

      <div className="space-y-3">
        <label className="text-sm font-medium text-irbis-navy">Expertises & Compétences</label>
        <div className="flex gap-2">
          <Input
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addSkill();
              }
            }}
            placeholder="Ajouter une compétence (ex: Private Equity)..."
            className="bg-white max-w-md"
          />
          <Button
            type="button"
            onClick={addSkill}
            variant="secondary"
            size="icon"
            className="shrink-0"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-2 min-h-[40px] p-4 bg-irbis-cream rounded-md border border-gray-200/50">
          {skills.length === 0 && (
            <span className="text-sm text-gray-400 italic">Aucune compétence ajoutée</span>
          )}
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="bg-white text-irbis-navy border-gray-200 pl-3 pr-1 py-1">
              {skill}
              <button
                type="button"
                onClick={() => removeSkill(index)}
                className="ml-2 p-1 hover:text-red-600 rounded-full transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="notes" className="text-sm font-medium text-irbis-navy">
          Notes & Observations
        </label>
        <Textarea
          name="notes"
          id="notes"
          rows={5}
          placeholder="Contexte confidentiel, prétentions salariales, fit culturel..."
          className="bg-white resize-none"
        />
      </div>

      <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-100">
        <Button
          type="button"
          variant="ghost"
          onClick={() => router.back()}
          className="text-gray-500 hover:text-irbis-navy"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Annuler
        </Button>
        <Button
          type="submit"
          disabled={loading}
          className="min-w-[140px]"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Sauvegarde...
            </>
          ) : (
            <>
              <Save className="w-4 h-4 mr-2" />
              Créer Talent
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
