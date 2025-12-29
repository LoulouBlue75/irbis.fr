import { Mail, Calendar, Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface Talent {
  id: string;
  name: string;
  email: string;
  skills: string[];
  experience: any[];
  education: any[];
  created_at: string;
  location?: string;
}

interface TalentProfileProps {
  talent: Talent;
}

export function TalentProfile({ talent }: TalentProfileProps) {
  return (
    <div className="space-y-8">
      {/* Header Profile */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <Avatar className="w-24 h-24 text-2xl border-4 border-white shadow-lg bg-irbis-navy text-irbis-gold">
          <AvatarFallback>
            {talent.name ? talent.name.substring(0, 2).toUpperCase() : '??'}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 space-y-2">
          <h1 className="text-4xl font-serif text-irbis-navy font-medium">
            {talent.name}
          </h1>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-irbis-gold" />
              <a href={"/mailto:" + talent.email} className="hover:text-irbis-navy transition-colors">
                {talent.email}
              </a>
            </div>
            {talent.location && (
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-irbis-gold" />
                <span>{talent.location}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-irbis-gold" />
              <span>Ajouté {formatDistanceToNow(new Date(talent.created_at), { addSuffix: true, locale: fr })}</span>
            </div>
          </div>

          <div className="pt-4 flex gap-3">
            <Button>Contacter</Button>
            <Button variant="outline">Télécharger CV</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-irbis-cream rounded-md text-irbis-navy">
                <Briefcase className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-serif text-irbis-navy">Parcours Professionnel</h2>
            </div>

            <div className="space-y-6 relative border-l border-gray-100 ml-4 pl-8 py-2">
              {talent.experience?.map((exp: any, index: number) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full border-2 border-white bg-irbis-gold shadow-sm" />
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <h3 className="text-lg font-medium text-irbis-navy">{exp.position || exp.title}</h3>
                    <span className="text-xs font-mono text-gray-400 bg-gray-50 px-2 py-1 rounded">
                      {exp.startDate} — {exp.endDate || 'Présent'}
                    </span>
                  </div>
                  <p className="text-irbis-gold-dark font-medium text-sm mb-2">{exp.company}</p>
                  {exp.description && (
                    <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">{exp.description}</p>
                  )}
                </div>
              ))}
              {(!talent.experience || talent.experience.length === 0) && (
                <p className="text-gray-400 italic text-sm">Aucune expérience renseignée.</p>
              )}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-irbis-cream rounded-md text-irbis-navy">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-serif text-irbis-navy">Formation</h2>
            </div>

            <div className="space-y-4 ml-4">
              {talent.education?.map((edu: any, index: number) => (
                <Card key={index} className="border-none bg-irbis-cream/30">
                  <CardContent className="p-4 flex flex-col sm:flex-row sm:justify-between gap-2">
                    <div>
                      <h4 className="font-medium text-irbis-navy">{edu.degree}</h4>
                      <p className="text-sm text-gray-500">{edu.institution}</p>
                    </div>
                    <div className="text-xs font-mono text-gray-400 whitespace-nowrap">
                      {edu.startDate} - {edu.endDate || 'Présent'}
                    </div>
                  </CardContent>
                </Card>
              ))}
              {(!talent.education || talent.education.length === 0) && (
                <p className="text-gray-400 italic text-sm ml-4">Aucune formation renseignée.</p>
              )}
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-serif text-irbis-navy">Expertises</h3>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {talent.skills?.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1.5 text-sm bg-irbis-cream text-irbis-navy">
                    {skill}
                  </Badge>
                ))}
                {(!talent.skills || talent.skills.length === 0) && (
                  <p className="text-gray-400 text-sm italic">Aucune compétence listée</p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-irbis-navy text-white border-none">
            <CardContent className="p-6">
              <h3 className="text-lg font-serif text-irbis-gold mb-4">Note Irbis</h3>
              <p className="text-sm text-gray-300 leading-relaxed italic">
                "Profil à haut potentiel identifié pour des rôles de leadership."
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                <span className="text-xs uppercase tracking-widest text-irbis-gold">Score 8D</span>
                <span className="text-2xl font-bold">—</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
