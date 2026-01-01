import { Link2, Linkedin, MessageCircle, Mail, ExternalLink } from "lucide-react";

const integrations = [
  {
    id: "linkedin",
    name: "LinkedIn",
    description: "Import de profils et messages InMail",
    icon: Linkedin,
    status: "coming_soon",
    statusLabel: "Bientot",
  },
  {
    id: "whatsapp",
    name: "WhatsApp Business",
    description: "Notifications et suivi candidats",
    icon: MessageCircle,
    status: "coming_soon",
    statusLabel: "Bientot",
  },
  {
    id: "email",
    name: "Email",
    description: "Synchronisation emails candidats",
    icon: Mail,
    status: "coming_soon",
    statusLabel: "Bientot",
  },
];

export default function AdminIntegrationsPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif text-white">Integrations</h1>
          <p className="text-slate-400 mt-1">
            Connectez vos outils pour automatiser votre workflow
          </p>
        </div>
      </div>

      {/* INTEGRATIONS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {integrations.map((integration) => {
          const Icon = integration.icon;
          return (
            <div
              key={integration.id}
              className="bg-slate-900 border border-slate-800 rounded-lg p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-lg bg-slate-800 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-slate-400" />
                </div>
                <span className="text-xs bg-slate-800 text-slate-500 px-2 py-1 rounded">
                  {integration.statusLabel}
                </span>
              </div>

              <h3 className="text-lg font-medium text-white mb-2">
                {integration.name}
              </h3>

              <p className="text-sm text-slate-400 flex-1">
                {integration.description}
              </p>

              <button
                disabled
                className="mt-4 w-full px-4 py-2 border border-slate-700 text-slate-500 text-sm font-medium rounded-lg cursor-not-allowed"
              >
                Configurer
              </button>
            </div>
          );
        })}
      </div>

      {/* WEBHOOK INFO */}
      <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Link2 className="h-5 w-5 text-amber-500" />
          <h3 className="text-lg font-medium text-white">Webhooks</h3>
        </div>

        <p className="text-sm text-slate-400 mb-4">
          Configurez des webhooks pour recevoir des notifications en temps reel
          sur les evenements de votre plateforme.
        </p>

        <div className="flex items-center gap-4">
          <code className="flex-1 bg-slate-950 text-slate-300 text-sm px-4 py-2 rounded font-mono">
            https://api.irbis.fr/webhooks/your-key
          </code>
          <button className="px-4 py-2 border border-slate-700 text-slate-400 text-sm font-medium rounded-lg hover:border-amber-500 hover:text-amber-500 transition-colors flex items-center gap-2">
            <ExternalLink className="h-4 w-4" />
            Documentation
          </button>
        </div>
      </div>
    </div>
  );
}
