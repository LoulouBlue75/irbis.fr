# 📋 MCP Servers Planification - Irbis Project Resumption

> Planification pour reprendre le projet Irbis avec les serveurs MCP disponibles
> Dernière mise à jour: 2024-12-24

---

## ✅ Serveurs MCP Disponibles

### Installés dans le projet (`.kilocode/mcp.json`)

| Server | Status | Use Case |
|--------|--------|----------|
| [`memory`](mcp_servers_planification.md) | ✓ | Knowledge graph pour le contexte persistant |
| [`supabase`](mcp_servers_planification.md) | ✓ | Database, migrations, project management |
| [`exa`](mcp_servers_planification.md) | ✓ | Web search, code context, documentation |
| [`context7`](mcp_servers_planification.md) | ✓ | Official library docs (Next.js, Tailwind, etc.) |

### Connectés globallement (VSCode Kilo Code)

| Server | Status | Use Case |
|--------|--------|----------|
| `playwright` | ✓ | Browser automation, UI testing |
| `github` | ✓ | Repository management, issues, PRs |
| `slack` | ✓ | Team communication, channels |

---

## 🎯 Stratégie de Reprise du Projet Irbis

### Phase 1: Analyse de l'État Actuel (Contexte Gathering)

```typescript
// Workflow Inngest pour collecter le contexte de reprise
export const resumeProjectContext = inngest.createFunction(
  { id: 'resume-context', retries: 3 },
  { event: 'project/resume.requested' },
  async ({ event, step }) => {
    const { projectId } = event.data;
    
    // 1. Lire le knowledge graph pour le contexte persistant
    const projectMemory = await step.run('memory-fetch', async () => {
      return await mcp_memory_read_graph();
    });
    
    // 2. Lister les tables Supabase pour comprendre le schéma
    const dbSchema = await step.run('db-inspect', async () => {
      return await mcp_supabase_list_tables({
        project_id: 'irbis-project-id',
        schemas: ['public', 'storage', 'auth']
      });
    });
    
    // 3. Rechercher les docs Irbis sur le web
    const webContext = await step.run('web-search', async () => {
      return await mcp_exa_web_search_exa({
        query: 'Irbis executive search platform Next.js recruitment',
        numResults: 5
      });
    });
    
    // 4. Récupérer les последние commits GitHub
    const recentCommits = await step.run('github-history', async () => {
      return await mcp_github_list_commits({
        owner: 'irbis-org',
        repo: 'irbis-project',
        sha: 'main',
        page: 1,
        perPage: 10
      });
    });
    
    return {
      memory: projectMemory,
      schema: dbSchema,
      webContext,
      recentCommits,
      projectId
    };
  }
);
```

### Phase 2: Compréhension de l'Architecture (P6 Tech)

```typescript
// Analyser l'état technique du projet
export const analyzeArchitecture = inngest.createFunction(
  { id: 'analyze-arch' },
  { event: 'context/augmented' },
  async ({ event, step }) => {
    const { projectId, structuredContext } = event.data;
    
    // Lire les fichiers clés du projet
    const packageJson = await step.run('read-package', async () => {
      return await mcp_filesystem_read_text_file({ path: 'package.json' });
    });
    
    const nextConfig = await step.run('read-next-config', async () => {
      return await mcp_filesystem_read_text_file({ path: 'next.config.ts' });
    });
    
    // Lire les pillars Matrice
    const pillars = await step.run('load-pillars', async () => {
      return {
        vision: await readFile('pillars/1_vision.md'),
        acteurs: await readFile('pillars/2_acteurs.md'),
        donnees: await readFile('pillars/3_donnees.md'),
        interfaces: await readFile('pillars/4_interfaces.md'),
        logique: await readFile('pillars/5_logique.md'),
        tech: await readFile('pillars/6_tech.md'),
      };
    });
    
    return { packageJson, nextConfig, pillars };
  }
);
```

---

## 📊 Matrice Phase → MCP Tools Mapping

| Phase Matrice | MCP Tools Prioritaires | Objectif |
|---------------|----------------------|----------|
| **P6 Tech** | `github`, `supabase`, `memory`, `filesystem` | Analyser l'architecture, comprendre le code |
| **P3 Données** | `supabase`, `filesystem` | Valider le schéma DB, migrations |
| **P4 Interfaces** | `playwright`, `filesystem`, `context7` | Tester l'UI, vérifier les composants |
| **P5 Logique** | `memory`, `filesystem`, `exa` | Comprendre les règles métier |
| **P2 Acteurs** | `memory`, `slack`, `exa` | Revue des personas, feedback |
| **P1 Vision** | `github`, `exa`, `web-search` | Stratégie, roadmap |

---

## 🚀 Workflows de Reprise Recommandés

### 1. **Audit Rapide du Projet**

```typescript
//收集er en 5 min l'état du projet
async function quickAudit() {
  const context = await inngest.send({
    name: 'project/audit.requested',
    data: {
      projectId: 'irbis',
      sources: [
        { type: 'github', id: 'recent-commits' },
        { type: 'supabase', id: 'schema' },
        { type: 'filesystem', id: 'package.json' },
        { type: 'memory', id: 'project-context' },
      ],
    },
  });
  
  return context;
}
```

### 2. **Analyse des Tâches en Cours**

```typescript
// Identifier les tickets/issues ouverts
async function analyzeOpenTasks() {
  const issues = await mcp_github_list_issues({
    owner: 'irbis-org',
    repo: 'irbis-project',
    state: 'open',
    labels: ['bug', 'feature', 'enhancement'],
    page: 1,
    per_page: 20,
  });
  
  // Grouper par priorité
  return categorizeIssues(issues);
}
```

### 3. **Test de l'Application**

```typescript
// Vérifier que l'app tourne correctement
async function testApplication() {
  await mcp_playwright_browser_navigate({
    url: 'http://localhost:3000'
  });
  
  const snapshot = await mcp_playwright_browser_snapshot();
  
  return {
    status: 'running',
    pageTitle: snapshot.title,
    elements: snapshot.elements?.length || 0,
  };
}
```

---

## 📋 Checklist de Reprise

### Prérequis
- [ ] Vérifier que le serveur de dev tourne (`npm run dev`)
- [ ] Vérifier la connexion Supabase (variables d'environnement)
- [ ] Lister les migrations non appliquées

### Analyse Technique (P6)
- [ ] Lire [`pillars/6_tech.md`](pillars/6_tech.md)
- [ ] Vérifier les dépendances (`npm outdated`)
- [ ] Analyser les errors recent Supabase logs
- [ ] Vérifier les branch Git actives

### Données (P3)
- [ ] Lire [`pillars/3_donnees.md`](pillars/3_donnees.md)
- [ ] Valider le schéma DB avec Supabase
- [ ] Vérifier les RLS policies
- [ ] Tester les edge functions

### Interfaces (P4)
- [ ] Lire [`pillars/4_interfaces.md`](pillars/4_interfaces.md)
- [ ] Vérifier les screen contracts YAML
- [ ] Tester les pages principales avec Playwright
- [ ] Valider le design system

---

## 🔧 Commandes Utiles

```bash
# Démarrer le projet
npm run dev

# Vérifier les dépendances
npm outdated

# Lister les migrations Supabase
npx supabase migration list

# Tester l'UI
npx playwright install chromium
npx playwright test

# Vérifier les logs Supabase
npx supabase logs --project-ref <project-ref>
```

---

## 📁 Fichiers de Référence Clés

| Fichier | Rôle |
|---------|------|
| [`pillars/6_tech.md`](pillars/6_tech.md) | Architecture technique |
| [`pillars/3_donnees.md`](pillars/3_donnees.md) | Schéma de données |
| [`pillars/4_interfaces.md`](pillars/4_interfaces.md) | Design & interfaces |
| [`conductor/plan.md`](conductor/plan.md) | Plan de développement |
| [`conductor/tracks/`](conductor/tracks/) | Tracks de features |
| [`screen_contracts/`](screen_contracts/) | Contrats d'écran YAML |
| [`src/app/`](src/app/) | Routes Next.js |

---

## 🔄 Prochaines Étapes

1. **Immédiat**: Lancer un audit rapide avec les MCPs disponibles
2. **Court terme**: Installer `github` et `slack` si pas déjà dispo
3. ** Moyen terme**: Créer des workflows Inngest pour automatiser la reprise
4. **Long terme**: Mettre en place le monitoring avec Sentry MCP

---

*Document généré pour la méthodologie Matrice v4.2 + Context Engineering*
