import { Mail, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface Candidate {
  id: string;
  name: string;
  email: string;
  skills: string[];
  experience: any[];
  education: any[];
  created_at: string;
}

interface CandidateProfileProps {
  candidate: Candidate;
}

export function CandidateProfile({ candidate }: CandidateProfileProps) {
  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
      <div className="p-6 border-b border-gray-800">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-white">{candidate.name}</h2>
            <div className="flex items-center mt-2 text-gray-400">
              <Mail className="w-4 h-4 mr-2" />
              <a href={`mailto:${candidate.email}`} className="hover:text-blue-400 transition-colors">
                {candidate.email}
              </a>
            </div>
            <div className="flex items-center mt-1 text-gray-400">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Added {formatDistanceToNow(new Date(candidate.created_at), { addSuffix: true })}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Skills */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {candidate.skills?.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20"
              >
                {skill}
              </span>
            ))}
            {(!candidate.skills || candidate.skills.length === 0) && (
              <p className="text-gray-500 italic">No skills listed</p>
            )}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
            <Briefcase className="w-5 h-5 mr-2" />
            Experience
          </h3>
          <div className="space-y-4">
            {candidate.experience?.map((exp: any, index: number) => (
              <div key={index} className="border-l-2 border-gray-700 pl-4 ml-1">
                <h4 className="text-white font-medium">{exp.position || exp.title}</h4>
                <p className="text-blue-400 text-sm">{exp.company}</p>
                <p className="text-gray-500 text-xs mt-1">
                  {exp.startDate} - {exp.endDate || 'Present'}
                </p>
                {exp.description && (
                  <p className="text-gray-400 text-sm mt-2">{exp.description}</p>
                )}
              </div>
            ))}
            {(!candidate.experience || candidate.experience.length === 0) && (
              <p className="text-gray-500 italic">No experience listed</p>
            )}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
            <GraduationCap className="w-5 h-5 mr-2" />
            Education
          </h3>
          <div className="space-y-4">
            {candidate.education?.map((edu: any, index: number) => (
              <div key={index} className="border-l-2 border-gray-700 pl-4 ml-1">
                <h4 className="text-white font-medium">{edu.degree}</h4>
                <p className="text-blue-400 text-sm">{edu.institution}</p>
                <p className="text-gray-500 text-xs mt-1">
                  {edu.startDate} - {edu.endDate || 'Present'}
                </p>
              </div>
            ))}
            {(!candidate.education || candidate.education.length === 0) && (
              <p className="text-gray-500 italic">No education listed</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
