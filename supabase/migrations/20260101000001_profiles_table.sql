-- =====================================================
-- PROFILES TABLE
-- Migration: 20260101000001_profiles_table.sql
-- Syncs with auth.users for user management
-- =====================================================

-- -----------------------------------------------------
-- 1. CREATE PROFILES TABLE
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    full_name TEXT,
    avatar_url TEXT,
    role TEXT NOT NULL DEFAULT 'recruiter' CHECK (role IN ('admin', 'recruiter', 'viewer')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_sign_in TIMESTAMPTZ
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- -----------------------------------------------------
-- 2. RLS POLICIES FOR PROFILES
-- -----------------------------------------------------

-- Everyone can read profiles (for displaying user info)
CREATE POLICY "profiles_select" ON profiles FOR SELECT TO authenticated
    USING (true);

-- Only admin can insert (user creation is handled by trigger)
CREATE POLICY "profiles_insert" ON profiles FOR INSERT TO authenticated
    WITH CHECK (is_admin() OR auth.uid() = id);

-- Users can update their own profile, admins can update any
CREATE POLICY "profiles_update" ON profiles FOR UPDATE TO authenticated
    USING (is_admin() OR auth.uid() = id);

-- Only admin can delete profiles
CREATE POLICY "profiles_delete" ON profiles FOR DELETE TO authenticated
    USING (is_admin());

-- -----------------------------------------------------
-- 3. TRIGGER: AUTO-CREATE PROFILE ON USER SIGNUP
-- -----------------------------------------------------

CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, full_name, role)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data ->> 'full_name', NEW.email),
        COALESCE(NEW.raw_app_meta_data ->> 'role', 'recruiter')
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop if exists and recreate
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- -----------------------------------------------------
-- 4. TRIGGER: UPDATE LAST SIGN IN
-- -----------------------------------------------------

CREATE OR REPLACE FUNCTION handle_user_sign_in()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE public.profiles
    SET last_sign_in = NOW()
    WHERE id = NEW.id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_sign_in ON auth.users;
CREATE TRIGGER on_auth_user_sign_in
    AFTER UPDATE OF last_sign_in_at ON auth.users
    FOR EACH ROW EXECUTE FUNCTION handle_user_sign_in();

-- -----------------------------------------------------
-- 5. FUNCTION: UPDATE PROFILE UPDATED_AT
-- -----------------------------------------------------

CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON profiles
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- -----------------------------------------------------
-- 6. INDEXES
-- -----------------------------------------------------

CREATE INDEX IF NOT EXISTS idx_profiles_role ON profiles(role);
CREATE INDEX IF NOT EXISTS idx_profiles_email ON profiles(email);

-- -----------------------------------------------------
-- 7. SYNC FUNCTION: Get user stats
-- -----------------------------------------------------

CREATE OR REPLACE FUNCTION get_user_stats(user_id UUID)
RETURNS TABLE (
    candidates_count BIGINT,
    jobs_count BIGINT,
    matches_count BIGINT
) AS $$
BEGIN
    RETURN QUERY
    SELECT
        (SELECT COUNT(*) FROM candidates WHERE created_by = user_id) AS candidates_count,
        (SELECT COUNT(*) FROM jobs WHERE created_by = user_id) AS jobs_count,
        (SELECT COUNT(*) FROM matches m
         JOIN jobs j ON j.id = m.job_id
         WHERE j.created_by = user_id) AS matches_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
