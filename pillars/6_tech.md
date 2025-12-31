# P6 : TECH & STACK

> **Version** : 2.0 (31/12/2025)
> **Reference** : Matrice v4.1 - Chantier 6
> **Complexity** : L1 (MVP/Solo)

---

## 6.A - STACK TECHNIQUE

### Vue Ensemble

| Couche | Technologie | Version |
|--------|-------------|---------|
| Framework | Next.js | 16.1.0 |
| Runtime | React | 19.2.3 |
| Styling | Tailwind CSS | v4 |
| Components | shadcn/ui (Radix) | latest |
| Database | Supabase PostgreSQL | - |
| Auth | Supabase Auth | 2.89.0 |
| Vector DB | pgvector | 1536 dims |
| Async Jobs | Inngest | 3.48.1 |
| AI/LLM | Vercel AI SDK + OpenAI | 5.0.116 |
| Animations | GSAP | 3.14.2 |
| Monitoring | Sentry | @sentry/react |

### 6.1 Frontend

| Element | Choix | Justification |
|---------|-------|---------------|
| Framework | Next.js 16.1.0 | App Router, RSC, SSR |
| UI Runtime | React 19.2.3 | Concurrent features |
| CSS | Tailwind v4 | Utility-first, JIT |
| Components | shadcn/ui | Radix primitives |
| Icons | Lucide React | Tree-shakeable |

### 6.2 Backend

| Element | Choix | Justification |
|---------|-------|---------------|
| API | Next.js API Routes | Colocation |
| BaaS | Supabase | Auth + DB + Storage |
| Jobs | Inngest | Durable workflows |

### 6.3 Database

| Element | Choix |
|---------|-------|
| SGBD | PostgreSQL (Supabase) |
| Vectors | pgvector 1536 dims |
| Migrations | 10 fichiers SQL |

### 6.4 Auth

| Element | Choix |
|---------|-------|
| Provider | Supabase Auth |
| Strategy | JWT (httpOnly) |
| Middleware | middleware.ts |
| Roles | guest/recruiter/admin |

### 6.5 Hosting

| Element | Choix |
|---------|-------|
| Frontend | Vercel |
| Database | Supabase Cloud |
| Storage | Supabase Storage |

---

## 6.B - OUTILLAGE

### 6.6 Package Manager

- Manager : npm
- Lockfile : package-lock.json
- Node : >= 18

### 6.7 Linter/Formatter

- ESLint : eslint-config-next
- Prettier : .prettierrc
- Tailwind plugin : active

### 6.8 Bundler

- Bundler : Turbopack (Next.js)
- Build : next build

---

## 6.C - TESTS

### 6.9 Unit Tests (Vitest)

| Config | Valeur |
|--------|--------|
| Framework | Vitest 4.0.16 |
| Environment | jsdom |
| Setup | vitest.setup.ts |
| Config | vitest.config.ts |

**Fichiers** :
- vitest.config.ts - Configuration avec React plugin, alias @
- vitest.setup.ts - Setup testing-library/jest-dom
- tests/unit/ - Tests unitaires

**Scripts** :

| Commande | Description |
|----------|-------------|
| npm test | Watch mode |
| npm run test:run | Single run |
| npm run test:coverage | Avec coverage |

### 6.10 E2E Tests (Playwright)

| Config | Valeur |
|--------|--------|
| Framework | Playwright 1.57.0 |
| Browsers | Chromium, Firefox, WebKit |
| Config | playwright.config.ts |

**Fichiers** :
- playwright.config.ts - Configuration multi-browser
- tests/e2e/ - Tests E2E

**Scripts** :

| Commande | Description |
|----------|-------------|
| npm run test:e2e | Headless |
| npm run test:e2e:ui | UI mode |

### 6.11 Couverture Cible

| Type | Framework | Cible | Actuel |
|------|-----------|-------|--------|
| Unit | Vitest | 60% | Configure |
| Integration | Vitest + MSW | 40% | Pending |
| E2E | Playwright | 5 scenarios | Configure |

---

## 6.D - CI/CD

### 6.13 Pipeline

| Etape | Status |
|-------|--------|
| Lint | A configurer |
| Type-check | A configurer |
| Test | Configure (local) |
| Build | Active (Vercel) |

### 6.14-6.15 Deploy

- Provider : Vercel
- Prod : main branch
- Preview : PR branches

**Variables env requises** :
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY
- OPENAI_API_KEY
- INNGEST_EVENT_KEY
- INNGEST_SIGNING_KEY
- NEXT_PUBLIC_SENTRY_DSN

---

## 6.E - MONITORING

| Element | Solution | Status |
|---------|----------|--------|
| Erreurs client | @sentry/react | Active |
| Error boundary | global-error.tsx | Active |
| Session Replay | Sentry Replay | Active |
| Logs | Vercel logs | Active |
| Metrics | Vercel Analytics | Disponible |

### Configuration Sentry

| Fichier | Role |
|---------|------|
| src/components/sentry-provider.tsx | Init client-side |
| src/app/global-error.tsx | Error boundary |

**Env** : NEXT_PUBLIC_SENTRY_DSN

---

## 6.F - SECURITE

| Mesure | Status |
|--------|--------|
| HTTPS | Active (Vercel) |
| RLS | Active (mode dev) |
| Middleware auth | Active |
| Input validation | Partiel (Zod) |
| CSP Headers | Active |

### CSP Headers (next.config.ts)

| Header | Valeur |
|--------|--------|
| Content-Security-Policy | Politique complete |
| X-Content-Type-Options | nosniff |
| X-Frame-Options | DENY |
| X-XSS-Protection | 1; mode=block |
| Referrer-Policy | strict-origin-when-cross-origin |
| Permissions-Policy | camera=(), microphone=(), geolocation=() |

### CSP Directives

| Directive | Sources |
|-----------|---------|
| default-src | self |
| script-src | self, Vercel, Sentry |
| style-src | self, Google Fonts |
| img-src | self, blob, data, Supabase |
| font-src | self, Google Fonts |
| connect-src | self, Supabase, OpenAI, Sentry, Inngest |
| frame-ancestors | none |

### Rollback

- Code : Vercel instant rollback
- DB : Supabase PITR
- Temps cible : < 5min

---

## 6.G - DEPENDANCES

### Production

| Package | Version |
|---------|---------|
| next | 16.1.0 |
| react | 19.2.3 |
| @supabase/ssr | 0.8.0 |
| @supabase/supabase-js | 2.89.0 |
| ai | 5.0.116 |
| inngest | 3.48.1 |
| gsap | 3.14.2 |
| zod | 4.2.1 |
| lucide-react | 0.562.0 |
| pdf-parse | 2.4.5 |
| @sentry/react | latest |

### Dev

| Package | Version |
|---------|---------|
| typescript | ^5 |
| tailwindcss | ^4 |
| eslint | ^9 |
| prettier | 3.7.4 |
| vitest | 4.0.16 |
| @vitejs/plugin-react | 5.1.2 |
| @playwright/test | 1.57.0 |
| @testing-library/react | 16.3.1 |
| @testing-library/jest-dom | 6.9.1 |
| jsdom | 27.4.0 |

---

## 6.H - STRUCTURE

    src/
      app/
        (marketing)/   # Pages publiques
        hunting/       # Console
          dashboard/
          talents/
          mandates/
        login/
        api/
        global-error.tsx  # Sentry error boundary
      components/
        layout/        # Navbar, Footer
        ui/            # shadcn
        sentry-provider.tsx  # Sentry init
      contexts/
      hooks/
      inngest/         # Workflows
      lib/
      types/
    tests/
      unit/            # Vitest
      e2e/             # Playwright
    vitest.config.ts
    vitest.setup.ts
    playwright.config.ts
    next.config.ts     # CSP headers

---

## 6.I - VALIDATION

### Compatibilite L1

- [x] Next.js + Supabase
- [x] Pas de monorepo
- [x] Deploy Vercel simple

### Coherence

- [x] Frontend <-> Backend
- [x] Auth <-> DB
- [x] AI <-> Vectors
- [x] Tests configures
- [x] Monitoring active
- [x] Security headers

---

## 6.J - ACTIONS RESTANTES

| Prio | Action | Status |
|:----:|--------|:------:|
| ~~P1~~ | ~~Configurer Vitest~~ | Done |
| ~~P1~~ | ~~Configurer Playwright~~ | Done |
| ~~P1~~ | ~~Installer Sentry~~ | Done |
| ~~P2~~ | ~~Ajouter CSP headers~~ | Done |
| P2 | CI pipeline complet | Pending |
| P2 | RLS mode production | Pending |

---

*P6 Tech - Irbis v2.0 - 31/12/2025*
