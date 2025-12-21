# PATTERNS & BEST PRACTICES

## 🧠 Context Engineering Pattern

### Concept
Ne jamais envoyer de données brutes à un LLM. Toujours passer par un pipeline de structuration.

### Workflow
```typescript
export const aiWorkflow = inngest.createFunction(
  { id: 'ai-process' },
  { event: 'ai/request' },
  async ({ event, step }) => {
    // 1. GATHER
    const rawData = await step.run('gather', () => fetchSources(event.data.ids));
    
    // 2. AUGMENT
    const context = await step.run('augment', () => structureContext(rawData));
    
    // 3. EXECUTE
    const result = await step.run('execute', () => queryLLM(context));
    
    return result;
  }
);
```

## ⏳ Temporal Context Pattern (Abyss Strategy)

### Concept
La donnée a une "demi-vie". Une info de 2021 vaut moins qu'une info de 2024.

### Implémentation
1. **Timestamping** : Chaque fait extrait doit avoir une `source_date`.
2. **Decay Function** : `Score = Relevance * (1 / (1 + AgeInYears))`.
3. **Re-validation** : Si Score < Seuil, déclencher un workflow de mise à jour (ex: enrichissement LinkedIn).
