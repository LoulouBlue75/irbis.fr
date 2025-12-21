-- Create the 'cvs' bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('cvs', 'cvs', false)
ON CONFLICT (id) DO NOTHING;

-- Set up access policies for the 'cvs' bucket
CREATE POLICY "Authenticated users can upload CVs"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'cvs');

CREATE POLICY "Authenticated users can read CVs"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'cvs');

CREATE POLICY "Authenticated users can update their own CVs"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'cvs' AND owner = auth.uid());

CREATE POLICY "Authenticated users can delete their own CVs"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'cvs' AND owner = auth.uid());
