import { Settings, Bell, Shield, Database, Palette, Save } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif text-white">Parametres</h1>
          <p className="text-slate-400 mt-1">Configuration globale de la plateforme</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-slate-900 text-sm font-medium rounded-lg hover:bg-amber-400 transition-colors">
          <Save className="h-4 w-4" />
          Sauvegarder
        </button>
      </div>

      {/* SETTINGS SECTIONS */}
      <div className="space-y-6">
        {/* General */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <Settings className="h-5 w-5 text-slate-400" />
            <h3 className="text-lg font-medium text-white">General</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-slate-800">
              <div>
                <div className="text-sm font-medium text-white">Nom de la plateforme</div>
                <div className="text-xs text-slate-500">Affiche dans l&apos;interface</div>
              </div>
              <input
                type="text"
                defaultValue="IRBIS Console"
                className="bg-slate-950 border border-slate-700 rounded px-3 py-2 text-sm text-white w-64 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="flex items-center justify-between py-3 border-b border-slate-800">
              <div>
                <div className="text-sm font-medium text-white">Timezone</div>
                <div className="text-xs text-slate-500">Fuseau horaire par defaut</div>
              </div>
              <select className="bg-slate-950 border border-slate-700 rounded px-3 py-2 text-sm text-white w-64 focus:outline-none focus:border-amber-500">
                <option value="Europe/Paris">Europe/Paris</option>
                <option value="UTC">UTC</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="h-5 w-5 text-slate-400" />
            <h3 className="text-lg font-medium text-white">Notifications</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-slate-800">
              <div>
                <div className="text-sm font-medium text-white">Emails systeme</div>
                <div className="text-xs text-slate-500">Notifications par email</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
              </label>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-slate-800">
              <div>
                <div className="text-sm font-medium text-white">Alertes nouveaux matches</div>
                <div className="text-xs text-slate-500">Notifier les recruteurs</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-5 w-5 text-slate-400" />
            <h3 className="text-lg font-medium text-white">Securite</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-slate-800">
              <div>
                <div className="text-sm font-medium text-white">2FA obligatoire</div>
                <div className="text-xs text-slate-500">Forcer l&apos;authentification a deux facteurs</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
              </label>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-slate-800">
              <div>
                <div className="text-sm font-medium text-white">Expiration session</div>
                <div className="text-xs text-slate-500">Duree de validite des sessions</div>
              </div>
              <select className="bg-slate-950 border border-slate-700 rounded px-3 py-2 text-sm text-white w-64 focus:outline-none focus:border-amber-500">
                <option value="24h">24 heures</option>
                <option value="7d">7 jours</option>
                <option value="30d">30 jours</option>
              </select>
            </div>
          </div>
        </div>

        {/* Data */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <Database className="h-5 w-5 text-slate-400" />
            <h3 className="text-lg font-medium text-white">Donnees</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-slate-800">
              <div>
                <div className="text-sm font-medium text-white">Export global</div>
                <div className="text-xs text-slate-500">Exporter toutes les donnees (RGPD)</div>
              </div>
              <button className="px-4 py-2 border border-slate-700 text-slate-400 text-sm font-medium rounded-lg hover:border-amber-500 hover:text-amber-500 transition-colors">
                Exporter
              </button>
            </div>

            <div className="flex items-center justify-between py-3">
              <div>
                <div className="text-sm font-medium text-red-400">Zone dangereuse</div>
                <div className="text-xs text-slate-500">Reinitialiser la plateforme</div>
              </div>
              <button className="px-4 py-2 border border-red-500/50 text-red-400 text-sm font-medium rounded-lg hover:bg-red-500/10 transition-colors">
                Reinitialiser
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
