-- Enable RLS on all tables
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE pillars ENABLE ROW LEVEL SECURITY;
ALTER TABLE context_sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE source_chunks ENABLE ROW LEVEL SECURITY;
ALTER TABLE chunk_embeddings ENABLE ROW LEVEL SECURITY;
ALTER TABLE insights ENABLE ROW LEVEL SECURITY;
ALTER TABLE workflow_runs ENABLE ROW LEVEL SECURITY;
ALTER TABLE workflow_steps ENABLE ROW LEVEL SECURITY;

-- Create policies for authenticated users (development mode: allow all authenticated)
-- In production, you would restrict this based on project ownership (e.g., owner_id column or user_projects table)

-- Projects
CREATE POLICY "Enable all access for authenticated users" ON projects
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Pillars
CREATE POLICY "Enable all access for authenticated users" ON pillars
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Context Sources
CREATE POLICY "Enable all access for authenticated users" ON context_sources
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Source Chunks
CREATE POLICY "Enable all access for authenticated users" ON source_chunks
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Chunk Embeddings
CREATE POLICY "Enable all access for authenticated users" ON chunk_embeddings
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Insights
CREATE POLICY "Enable all access for authenticated users" ON insights
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Workflow Runs
CREATE POLICY "Enable all access for authenticated users" ON workflow_runs
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Workflow Steps
CREATE POLICY "Enable all access for authenticated users" ON workflow_steps
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);
