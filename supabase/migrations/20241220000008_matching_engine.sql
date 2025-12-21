-- Add embedding column to candidates table
ALTER TABLE candidates ADD COLUMN IF NOT EXISTS embedding vector(1536);
CREATE INDEX IF NOT EXISTS idx_candidates_embedding ON candidates USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);

-- Create jobs table
CREATE TABLE IF NOT EXISTS jobs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    requirements TEXT[],
    embedding vector(1536), -- Embedding of the job description/requirements
    status TEXT DEFAULT 'open', -- open, closed, draft
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add indexes for jobs
CREATE INDEX IF NOT EXISTS idx_jobs_project ON jobs(project_id);
CREATE INDEX IF NOT EXISTS idx_jobs_embedding ON jobs USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);

-- Trigger for jobs updated_at
CREATE TRIGGER update_jobs_updated_at
    BEFORE UPDATE ON jobs
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Enable RLS for jobs
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;

-- Policy for jobs (dev mode - open access)
CREATE POLICY "Enable all access for authenticated users" ON jobs
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Create matches table
CREATE TABLE IF NOT EXISTS matches (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    job_id UUID NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
    candidate_id UUID NOT NULL REFERENCES candidates(id) ON DELETE CASCADE,
    score FLOAT, -- Similarity score
    status TEXT DEFAULT 'pending', -- pending, reviewed, accepted, rejected
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(job_id, candidate_id)
);

-- Add indexes for matches
CREATE INDEX IF NOT EXISTS idx_matches_job ON matches(job_id);
CREATE INDEX IF NOT EXISTS idx_matches_candidate ON matches(candidate_id);

-- Trigger for matches updated_at
CREATE TRIGGER update_matches_updated_at
    BEFORE UPDATE ON matches
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Enable RLS for matches
ALTER TABLE matches ENABLE ROW LEVEL SECURITY;

-- Policy for matches (dev mode - open access)
CREATE POLICY "Enable all access for authenticated users" ON matches
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- RPC function to match candidates for a job
CREATE OR REPLACE FUNCTION match_candidates(
    query_embedding vector(1536),
    match_threshold float,
    match_count int,
    p_project_id uuid
)
RETURNS TABLE (
    id uuid,
    name text,
    email text,
    skills text[],
    similarity float
)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT
        c.id,
        c.name,
        c.email,
        c.skills,
        1 - (c.embedding <=> query_embedding) as similarity
    FROM
        candidates c
    WHERE
        c.project_id = p_project_id
        AND 1 - (c.embedding <=> query_embedding) > match_threshold
    ORDER BY
        c.embedding <=> query_embedding
    LIMIT match_count;
END;
$$;
