-- Enable pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- Create source_chunks table
CREATE TABLE IF NOT EXISTS source_chunks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source_id UUID NOT NULL REFERENCES context_sources(id) ON DELETE CASCADE,
    chunk_index INT NOT NULL,
    content TEXT NOT NULL,
    token_count INT DEFAULT 0,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create chunk_embeddings table
CREATE TABLE IF NOT EXISTS chunk_embeddings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    chunk_id UUID NOT NULL REFERENCES source_chunks(id) ON DELETE CASCADE,
    embedding vector(1536), -- OpenAI ada-002 dimension
    model TEXT DEFAULT 'text-embedding-ada-002',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add indexes
CREATE INDEX IF NOT EXISTS idx_chunks_source ON source_chunks(source_id);

-- Add vector index for similarity search
-- Note: IVFFlat index requires some data to be effective, but we create it here for schema completeness.
-- In production, you might want to create this after loading some data or use HNSW.
CREATE INDEX IF NOT EXISTS idx_embeddings_vector ON chunk_embeddings 
USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);
