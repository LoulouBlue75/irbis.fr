-- =====================================================
-- RLS PRODUCTION POLICIES
-- Migration: 20250101000001_rls_production.sql
-- Reference: P5 Logique - RBAC
-- =====================================================

-- -----------------------------------------------------
-- 1. ADD CREATED_BY COLUMNS WHERE MISSING
-- -----------------------------------------------------

ALTER TABLE candidates ADD COLUMN IF NOT EXISTS created_by UUID REFERENCES auth.users(id);
ALTER TABLE jobs ADD COLUMN IF NOT EXISTS created_by UUID REFERENCES auth.users(id);
ALTER TABLE context_sources ADD COLUMN IF NOT EXISTS created_by UUID REFERENCES auth.users(id);
ALTER TABLE projects ADD COLUMN IF NOT EXISTS created_by UUID REFERENCES auth.users(id);

-- -----------------------------------------------------
-- 2. HELPER FUNCTION: CHECK IF USER IS ADMIN
-- -----------------------------------------------------

CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
    RETURN COALESCE(
        (auth.jwt() -> 'app_metadata' ->> 'role')::text = 'admin',
        FALSE
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- -----------------------------------------------------
-- 3. DROP ALL EXISTING DEV POLICIES
-- -----------------------------------------------------

DROP POLICY IF EXISTS "Enable all access for authenticated users" ON projects;
DROP POLICY IF EXISTS "Enable all access for authenticated users" ON pillars;
DROP POLICY IF EXISTS "Enable all access for authenticated users" ON context_sources;
DROP POLICY IF EXISTS "Enable all access for authenticated users" ON source_chunks;
DROP POLICY IF EXISTS "Enable all access for authenticated users" ON chunk_embeddings;
DROP POLICY IF EXISTS "Enable all access for authenticated users" ON insights;
DROP POLICY IF EXISTS "Enable all access for authenticated users" ON workflow_runs;
DROP POLICY IF EXISTS "Enable all access for authenticated users" ON workflow_steps;
DROP POLICY IF EXISTS "Enable all access for authenticated users" ON candidates;
DROP POLICY IF EXISTS "Enable all access for authenticated users" ON jobs;
DROP POLICY IF EXISTS "Enable all access for authenticated users" ON matches;
DROP POLICY IF EXISTS "Enable all access for authenticated users" ON activities;

-- -----------------------------------------------------
-- 4. CREATE PRODUCTION POLICIES
-- -----------------------------------------------------

-- ===== PROJECTS =====
CREATE POLICY "projects_select" ON projects FOR SELECT TO authenticated
    USING (is_admin() OR created_by = auth.uid());

CREATE POLICY "projects_insert" ON projects FOR INSERT TO authenticated
    WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "projects_update" ON projects FOR UPDATE TO authenticated
    USING (is_admin() OR created_by = auth.uid());

CREATE POLICY "projects_delete" ON projects FOR DELETE TO authenticated
    USING (is_admin());

-- ===== CANDIDATES =====
CREATE POLICY "candidates_select" ON candidates FOR SELECT TO authenticated
    USING (
        is_admin()
        OR created_by = auth.uid()
        OR EXISTS (SELECT 1 FROM projects p WHERE p.id = project_id AND p.created_by = auth.uid())
    );

CREATE POLICY "candidates_insert" ON candidates FOR INSERT TO authenticated
    WITH CHECK (
        is_admin()
        OR EXISTS (SELECT 1 FROM projects p WHERE p.id = project_id AND p.created_by = auth.uid())
    );

CREATE POLICY "candidates_update" ON candidates FOR UPDATE TO authenticated
    USING (
        is_admin()
        OR created_by = auth.uid()
        OR EXISTS (SELECT 1 FROM projects p WHERE p.id = project_id AND p.created_by = auth.uid())
    );

CREATE POLICY "candidates_delete" ON candidates FOR DELETE TO authenticated
    USING (is_admin());

-- ===== JOBS =====
CREATE POLICY "jobs_select" ON jobs FOR SELECT TO authenticated
    USING (
        is_admin()
        OR created_by = auth.uid()
        OR EXISTS (SELECT 1 FROM projects p WHERE p.id = project_id AND p.created_by = auth.uid())
    );

CREATE POLICY "jobs_insert" ON jobs FOR INSERT TO authenticated
    WITH CHECK (
        is_admin()
        OR EXISTS (SELECT 1 FROM projects p WHERE p.id = project_id AND p.created_by = auth.uid())
    );

CREATE POLICY "jobs_update" ON jobs FOR UPDATE TO authenticated
    USING (
        is_admin()
        OR created_by = auth.uid()
        OR EXISTS (SELECT 1 FROM projects p WHERE p.id = project_id AND p.created_by = auth.uid())
    );

CREATE POLICY "jobs_delete" ON jobs FOR DELETE TO authenticated
    USING (is_admin());

-- ===== MATCHES =====
CREATE POLICY "matches_select" ON matches FOR SELECT TO authenticated
    USING (
        is_admin()
        OR EXISTS (
            SELECT 1 FROM jobs j
            WHERE j.id = job_id
            AND (j.created_by = auth.uid() OR EXISTS (
                SELECT 1 FROM projects p WHERE p.id = j.project_id AND p.created_by = auth.uid()
            ))
        )
    );

CREATE POLICY "matches_insert" ON matches FOR INSERT TO authenticated
    WITH CHECK (
        is_admin()
        OR EXISTS (
            SELECT 1 FROM jobs j
            WHERE j.id = job_id
            AND (j.created_by = auth.uid() OR EXISTS (
                SELECT 1 FROM projects p WHERE p.id = j.project_id AND p.created_by = auth.uid()
            ))
        )
    );

CREATE POLICY "matches_update" ON matches FOR UPDATE TO authenticated
    USING (
        is_admin()
        OR EXISTS (
            SELECT 1 FROM jobs j
            WHERE j.id = job_id
            AND (j.created_by = auth.uid() OR EXISTS (
                SELECT 1 FROM projects p WHERE p.id = j.project_id AND p.created_by = auth.uid()
            ))
        )
    );

CREATE POLICY "matches_delete" ON matches FOR DELETE TO authenticated
    USING (
        is_admin()
        OR EXISTS (
            SELECT 1 FROM jobs j
            WHERE j.id = job_id
            AND (j.created_by = auth.uid() OR EXISTS (
                SELECT 1 FROM projects p WHERE p.id = j.project_id AND p.created_by = auth.uid()
            ))
        )
    );

-- ===== ACTIVITIES =====
CREATE POLICY "activities_select" ON activities FOR SELECT TO authenticated
    USING (
        is_admin()
        OR created_by = auth.uid()
        OR EXISTS (SELECT 1 FROM projects p WHERE p.id = project_id AND p.created_by = auth.uid())
    );

CREATE POLICY "activities_insert" ON activities FOR INSERT TO authenticated
    WITH CHECK (
        is_admin()
        OR EXISTS (SELECT 1 FROM projects p WHERE p.id = project_id AND p.created_by = auth.uid())
    );

CREATE POLICY "activities_update" ON activities FOR UPDATE TO authenticated
    USING (is_admin() OR created_by = auth.uid());

CREATE POLICY "activities_delete" ON activities FOR DELETE TO authenticated
    USING (is_admin() OR created_by = auth.uid());

-- ===== CONTEXT SOURCES =====
CREATE POLICY "context_sources_select" ON context_sources FOR SELECT TO authenticated
    USING (
        is_admin()
        OR created_by = auth.uid()
        OR EXISTS (SELECT 1 FROM projects p WHERE p.id = project_id AND p.created_by = auth.uid())
    );

CREATE POLICY "context_sources_insert" ON context_sources FOR INSERT TO authenticated
    WITH CHECK (
        is_admin()
        OR EXISTS (SELECT 1 FROM projects p WHERE p.id = project_id AND p.created_by = auth.uid())
    );

CREATE POLICY "context_sources_update" ON context_sources FOR UPDATE TO authenticated
    USING (
        is_admin()
        OR created_by = auth.uid()
        OR EXISTS (SELECT 1 FROM projects p WHERE p.id = project_id AND p.created_by = auth.uid())
    );

CREATE POLICY "context_sources_delete" ON context_sources FOR DELETE TO authenticated
    USING (is_admin());

-- ===== PILLARS =====
CREATE POLICY "pillars_select" ON pillars FOR SELECT TO authenticated
    USING (
        is_admin()
        OR EXISTS (SELECT 1 FROM projects p WHERE p.id = project_id AND p.created_by = auth.uid())
    );

CREATE POLICY "pillars_insert" ON pillars FOR INSERT TO authenticated
    WITH CHECK (
        is_admin()
        OR EXISTS (SELECT 1 FROM projects p WHERE p.id = project_id AND p.created_by = auth.uid())
    );

CREATE POLICY "pillars_update" ON pillars FOR UPDATE TO authenticated
    USING (
        is_admin()
        OR EXISTS (SELECT 1 FROM projects p WHERE p.id = project_id AND p.created_by = auth.uid())
    );

CREATE POLICY "pillars_delete" ON pillars FOR DELETE TO authenticated
    USING (is_admin());

-- ===== SOURCE CHUNKS =====
CREATE POLICY "source_chunks_select" ON source_chunks FOR SELECT TO authenticated
    USING (
        is_admin()
        OR EXISTS (
            SELECT 1 FROM context_sources cs
            WHERE cs.id = source_id
            AND (cs.created_by = auth.uid() OR EXISTS (
                SELECT 1 FROM projects p WHERE p.id = cs.project_id AND p.created_by = auth.uid()
            ))
        )
    );

CREATE POLICY "source_chunks_insert" ON source_chunks FOR INSERT TO authenticated
    WITH CHECK (is_admin() OR auth.uid() IS NOT NULL);

CREATE POLICY "source_chunks_update" ON source_chunks FOR UPDATE TO authenticated
    USING (is_admin());

CREATE POLICY "source_chunks_delete" ON source_chunks FOR DELETE TO authenticated
    USING (is_admin());

-- ===== CHUNK EMBEDDINGS =====
CREATE POLICY "chunk_embeddings_select" ON chunk_embeddings FOR SELECT TO authenticated
    USING (is_admin() OR auth.uid() IS NOT NULL);

CREATE POLICY "chunk_embeddings_insert" ON chunk_embeddings FOR INSERT TO authenticated
    WITH CHECK (is_admin() OR auth.uid() IS NOT NULL);

CREATE POLICY "chunk_embeddings_update" ON chunk_embeddings FOR UPDATE TO authenticated
    USING (is_admin());

CREATE POLICY "chunk_embeddings_delete" ON chunk_embeddings FOR DELETE TO authenticated
    USING (is_admin());

-- ===== INSIGHTS =====
CREATE POLICY "insights_select" ON insights FOR SELECT TO authenticated
    USING (
        is_admin()
        OR EXISTS (SELECT 1 FROM projects p WHERE p.id = project_id AND p.created_by = auth.uid())
    );

CREATE POLICY "insights_insert" ON insights FOR INSERT TO authenticated
    WITH CHECK (is_admin() OR auth.uid() IS NOT NULL);

CREATE POLICY "insights_update" ON insights FOR UPDATE TO authenticated
    USING (is_admin());

CREATE POLICY "insights_delete" ON insights FOR DELETE TO authenticated
    USING (is_admin());

-- ===== WORKFLOW RUNS =====
CREATE POLICY "workflow_runs_select" ON workflow_runs FOR SELECT TO authenticated
    USING (
        is_admin()
        OR EXISTS (SELECT 1 FROM projects p WHERE p.id = project_id AND p.created_by = auth.uid())
    );

CREATE POLICY "workflow_runs_insert" ON workflow_runs FOR INSERT TO authenticated
    WITH CHECK (is_admin() OR auth.uid() IS NOT NULL);

CREATE POLICY "workflow_runs_update" ON workflow_runs FOR UPDATE TO authenticated
    USING (is_admin());

CREATE POLICY "workflow_runs_delete" ON workflow_runs FOR DELETE TO authenticated
    USING (is_admin());

-- ===== WORKFLOW STEPS =====
CREATE POLICY "workflow_steps_select" ON workflow_steps FOR SELECT TO authenticated
    USING (is_admin() OR auth.uid() IS NOT NULL);

CREATE POLICY "workflow_steps_insert" ON workflow_steps FOR INSERT TO authenticated
    WITH CHECK (is_admin() OR auth.uid() IS NOT NULL);

CREATE POLICY "workflow_steps_update" ON workflow_steps FOR UPDATE TO authenticated
    USING (is_admin());

CREATE POLICY "workflow_steps_delete" ON workflow_steps FOR DELETE TO authenticated
    USING (is_admin());

-- -----------------------------------------------------
-- 5. STORAGE BUCKET POLICIES
-- -----------------------------------------------------

DROP POLICY IF EXISTS "Allow authenticated uploads" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated reads" ON storage.objects;

CREATE POLICY "cvs_insert" ON storage.objects FOR INSERT TO authenticated
    WITH CHECK (bucket_id = 'cvs' AND auth.uid() IS NOT NULL);

CREATE POLICY "cvs_select" ON storage.objects FOR SELECT TO authenticated
    USING (bucket_id = 'cvs');

CREATE POLICY "cvs_delete" ON storage.objects FOR DELETE TO authenticated
    USING (bucket_id = 'cvs' AND is_admin());
