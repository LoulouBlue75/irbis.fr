# 🤖 Mode: Inngest Context

> **Philosophy**: Always consider available MCP tools before answering - use them when relevant, not systematically.

## 🧭 Guidance

Before answering any task, pause and assess which MCP tools could help:

### Available MCP Tools (Global)

| Tool | Use When | Status |
|------|----------|--------|
| **`playwright`** | Interact with web pages, UI testing | ✅ Ready |
| **`exa`** | Web search, code documentation | ✅ Ready |
| **`context7`** | Official library docs (version-specific) | ✅ Ready |
| **`supabase`** | Database queries, schema inspection | ✅ Ready |
| **`memory`** | Knowledge graph storage | ✅ Ready |
| **`github`** | Repository management, issues, PRs | 🔑 Token needed |
| **`slack`** | Team communication, channels | 🔑 Token needed |
| **`notion`** | Documentation, databases | 🔑 Token needed |
| **`gdrive`** | Files, spreadsheets, docs | 🔑 Token needed |
| **`postgres`** | Direct PostgreSQL queries | 🔑 Token needed |
| **`filesystem`** | Advanced file operations | 🔑 Config needed |
| **`sentry`** | Error tracking, performance | 🔑 Token needed |
| **`linear`** | Project management, tickets | 🔑 Token needed |
| **`stripe`** | Payment, billing APIs | 🔑 Token needed |
| **`aws`** | Cloud infrastructure | 🔑 Token needed |

### Decision Framework

For each task, ask:

1. **Does this involve a website/UI?** → Use `playwright`
2. **Does this require external knowledge?** → Use `exa`
3. **Does this need official library docs?** → Use `context7`
4. **Does this involve a database?** → Use `supabase` or `postgres`
5. **Should I remember this for later?** → Use `memory`
6. **Does this involve GitHub?** → Use `github` (needs token)
7. **Does this involve team communication?** → Use `slack` (needs token)
8. **Does this involve documentation?** → Use `notion` (needs token)

## 📋 Custom Instructions

When working in this mode:

1. **Context First**: Before answering, identify which data sources are relevant
2. **Tool Selection**: Explicitly state which MCP tool(s) you're using and why
3. **Fallback**: If no MCP tool fits, proceed with standard code/file tools
4. **Compound**: Store useful discoveries in memory for future context

## 🔗 MCP Tool Reference

### Exa (Web Search & Code Docs)
```typescript
// Web search
mcp_exa_web_search_exa({ query: "React 19 new features", numResults: 5 })

// Code context (libraries, APIs)
mcp_exa_get_code_context_exa({ query: "Next.js partial prerendering", tokensNum: 5000 })
```

### Context7 (Official Library Docs)
```typescript
// Find library ID
mcp_context7_resolve_library_id({ libraryName: "Next.js" })

// Get docs with code examples
mcp_context7_get_library_docs({
  context7CompatibleLibraryID: "/vercel/next.js",
  topic: "server-actions",
  mode: "code"
})
```

### Supabase (Database & Project)
```typescript
// List tables
mcp_supabase_list_tables({ project_id: "xxx", schemas: ["public"] })

// Execute SQL
mcp_supabase_execute_sql({ project_id: "xxx", query: "SELECT * FROM users" })

// Search docs
mcp_supabase_search_docs({ graphql_query: "..." })
```

### Memory (Knowledge Graph)
```typescript
// Store entity
mcp_memory_create_entities({ entities: [{ name: "ProjectX", entityType: "project", observations: ["..."] }] })

// Search
mcp_memory_search_nodes({ query: "previous project decisions" })

// Read all
mcp_memory_read_graph({})
```

### Playwright (Browser) ✅
```typescript
// Navigate
mcp_playwright_browser_navigate({ url: "https://example.com" })

// Screenshot
mcp_playwright_browser_take_screenshot({ type: "png" })

// Fill form
mcp_playwright_browser_fill_form({ fields: [...] })
```

### GitHub (Repository Management) 🔑
```typescript
// Search repositories
mcp_github_search_repositories({ query: "nextjs react", perPage: 10 })

// Get file contents
mcp_github_get_file_contents({ owner: "vercel", repo: "next.js", path: "README.md", branch: "main" })

// List issues
mcp_github_list_issues({ owner: "vercel", repo: "next.js", state: "open", per_page: 5 })

// Create PR
mcp_github_create_pull_request({ owner: "vercel", repo: "next.js", title: "Fix bug", head: "feature-branch", base: "main", body: "...", draft: false, maintainer_can_modify: true })
```

### Slack (Team Communication) 🔑
```typescript
// List channels
mcp_slack_slack_list_channels({ limit: 100, cursor: null })

// Get channel history
mcp_slack_slack_get_channel_history({ channel_id: "C0123", limit: 10 })

// Post message
mcp_slack_slack_post_message({ channel_id: "C0123", text: "Hello team!" })
```

### Notion (Documentation) 🔑
```typescript
// Search pages
mcp_notion_search({ query: "project specs", limit: 10 })

// Get page content
mcp_notion_retrieve_page({ page_id: "page_id" })

// Query database
mcp_notion_query_database({ database_id: "db_id", filter: {...} })
```

### Google Drive (Files) 🔑
```typescript
// List files
mcp_gdrive_list_files({ folder_id: "folder_id", limit: 20 })

// Get file content
mcp_gdrive_get_file_content({ file_id: "file_id" })

// Search files
mcp_gdrive_search_files({ query: "budget", limit: 10 })
```

### PostgreSQL (Database) 🔑
```typescript
// Execute query
mcp_postgres_execute_sql({ query: "SELECT * FROM users LIMIT 10", parameters: [] })

// List tables
mcp_postgres_list_tables({ schema: "public" })

// Describe table
mcp_postgres_describe_table({ table: "users" })
```

### Filesystem (File Operations) 🔑
```typescript
// Read file
mcp_filesystem_read_file({ path: "/path/to/file.md" })

// Write file
mcp_filesystem_write_file({ path: "/path/to/new.md", content: "..." })

// List directory
mcp_filesystem_list_directory({ path: "/path/to/dir" })
```

### Sentry (Error Tracking) 🔑
```typescript
// List projects
mcp_sentry_list_projects({ organization: "my-org" })

// Get issues
mcp_sentry_list_issues({ project: "my-project", limit: 10 })

// Get event details
mcp_sentry_get_event({ event_id: "event_id" })
```

### Linear (Project Management) 🔑
```typescript
// List issues
mcp_linear_list_issues({ filter: { state: { name: { neq: "Done" } } }, first: 20 })

// Create issue
mcp_linear_create_issue({ title: "New feature", description: "...", team_id: "team_id" })

// Update issue
mcp_linear_update_issue({ id: "issue_id", state_id: "done_id" })
```

### Stripe (Payments) 🔑
```typescript
// List customers
mcp_stripe_list_customers({ limit: 10 })

// Get payment intent
mcp_stripe_get_payment_intent({ id: "pi_123" })

// Create checkout session
mcp_stripe_create_checkout_session({ mode: "payment", line_items: [...] })
```

### AWS (Cloud Infrastructure) 🔑
```typescript
// List S3 buckets
mcp_aws_list_s3_buckets({})

// List Lambda functions
mcp_aws_list_lambda_functions({ region: "us-east-1" })

// Get EC2 instances
mcp_aws_describe_ec2_instances({ region: "us-east-1" })
```

## ⚠️ Anti-Patterns

| ❌ Don't | ✅ Do |
|----------|-------|
| Ignore available MCP tools | Check if MCP tools fit before answering |
| Use tools unnecessarily | Only use when genuinely helpful |
| Forget to store insights | Use memory to compound knowledge |
| Hardcode tool usage | Assess relevance per task |

## 📁 Related Files

- [`knowledge/mcp_servers_planification.md`](../../knowledge/mcp_servers_planification.md) - Full MCP servers plan
- [`knowledge/context_engineering.md`](../../knowledge/context_engineering.md)
- [`knowledge/patterns.md`](../../knowledge/patterns.md)
