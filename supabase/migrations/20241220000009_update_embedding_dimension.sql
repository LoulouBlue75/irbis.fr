-- Change vector dimension from 1536 (OpenAI) to 768 (Google Gemini)

-- Drop indexes first
DROP INDEX IF EXISTS idx_embeddings_vector;
DROP INDEX IF EXISTS idx_candidates_embedding;
DROP INDEX IF EXISTS idx_jobs_embedding;

-- Alter columns
ALTER TABLE chunk_embeddings ALTER COLUMN embedding TYPE vector(768);
ALTER TABLE candidates ALTER COLUMN embedding TYPE vector(768);
ALTER TABLE jobs ALTER COLUMN embedding TYPE vector(768);

-- Re-create indexes
CREATE INDEX idx_embeddings_vector ON chunk_embeddings USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);
CREATE INDEX idx_candidates_embedding ON candidates USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);
CREATE INDEX idx_jobs_embedding ON jobs USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);

-- Update functions
CREATE OR REPLACE FUNCTION match_chunks (
  query_embedding vector(768),
  match_threshold float,
  match_count int,
  filter_project_id uuid DEFAULT NULL
)
RETURNS TABLE (
  id uuid,
  source_id uuid,
  content text,
  metadata jsonb,
  similarity float
)
LANGUAGE plpgsql
STABLE
AS $$
BEGIN
  RETURN QUERY
  SELECT
    sc.id,
    sc.source_id,
    sc.content,
    sc.metadata,
    1 - (ce.embedding <=> query_embedding) AS similarity
  FROM source_chunks sc
  JOIN chunk_embeddings ce ON sc.id = ce.chunk_id
  JOIN context_sources cs ON sc.source_id = cs.id
  WHERE 1 - (ce.embedding <=> query_embedding) > match_threshold
  AND (filter_project_id IS NULL OR cs.project_id = filter_project_id)
  ORDER BY similarity DESC
  LIMIT match_count;
END;
$$;

CREATE OR REPLACE FUNCTION match_candidates(
    query_embedding vector(768),
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