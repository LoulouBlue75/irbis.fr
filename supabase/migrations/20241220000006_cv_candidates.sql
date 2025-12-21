-- Create candidates table
CREATE TABLE IF NOT EXISTS candidates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source_id UUID REFERENCES context_sources(id) ON DELETE SET NULL, -- Link to the source document (CV)
    project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    name TEXT,
    email TEXT,
    skills TEXT[], -- Array of strings for skills
    experience JSONB DEFAULT '[]'::jsonb, -- Structured experience data
    education JSONB DEFAULT '[]'::jsonb, -- Structured education data
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add indexes
CREATE INDEX IF NOT EXISTS idx_candidates_source ON candidates(source_id);
CREATE INDEX IF NOT EXISTS idx_candidates_project ON candidates(project_id);
CREATE INDEX IF NOT EXISTS idx_candidates_email ON candidates(email);

-- Add trigger for updated_at
CREATE TRIGGER update_candidates_updated_at
    BEFORE UPDATE ON candidates
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- RLS Policies
ALTER TABLE candidates ENABLE ROW LEVEL SECURITY;

-- Policy: Enable all access for authenticated users (Development mode)
CREATE POLICY "Enable all access for authenticated users" ON candidates
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);
