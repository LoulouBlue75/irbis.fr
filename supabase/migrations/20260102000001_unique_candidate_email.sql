-- =====================================================
-- FIX-003: UNIQUE EMAIL PER PROJECT
-- Migration: 20260102000001_unique_candidate_email.sql
-- Reference: P5 Logique - BR-006
-- =====================================================

-- Add unique constraint on (project_id, email) for candidates
-- Only applies when email is NOT NULL (partial unique index)

-- First, check for and handle any existing duplicates
-- This CTE identifies duplicates and keeps the most recent one
DO $$
DECLARE
    duplicate_count INTEGER;
BEGIN
    -- Count duplicates
    SELECT COUNT(*) INTO duplicate_count
    FROM (
        SELECT project_id, email, COUNT(*) as cnt
        FROM candidates
        WHERE email IS NOT NULL
        GROUP BY project_id, email
        HAVING COUNT(*) > 1
    ) duplicates;

    IF duplicate_count > 0 THEN
        RAISE NOTICE 'Found % duplicate email(s) per project. Keeping most recent entries.', duplicate_count;

        -- Delete older duplicates, keep the most recent
        DELETE FROM candidates c1
        USING candidates c2
        WHERE c1.project_id = c2.project_id
          AND c1.email = c2.email
          AND c1.email IS NOT NULL
          AND c1.created_at < c2.created_at;
    END IF;
END $$;

-- Create partial unique index (only for non-null emails)
CREATE UNIQUE INDEX IF NOT EXISTS idx_candidates_unique_email_per_project
ON candidates(project_id, email)
WHERE email IS NOT NULL;

-- Add comment for documentation
COMMENT ON INDEX idx_candidates_unique_email_per_project IS
'P5 BR-006: Email candidat unique par projet. Partial index - only applies when email is not null.';
