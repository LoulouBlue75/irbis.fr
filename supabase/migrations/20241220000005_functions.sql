-- Function to match chunks based on embedding similarity
CREATE OR REPLACE FUNCTION match_chunks (
  query_embedding vector(1536),
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
