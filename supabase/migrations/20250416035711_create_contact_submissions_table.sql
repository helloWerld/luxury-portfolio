-- Create the contact_submissions table
CREATE TABLE contact_submissions (
    id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    created_at timestamptz DEFAULT now() NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    message text NOT NULL,
    is_read boolean DEFAULT false NOT NULL
);

-- Add comments
COMMENT ON TABLE contact_submissions IS 'Stores submissions from the website contact form.';
COMMENT ON COLUMN contact_submissions.is_read IS 'Flag to mark if the submission has been reviewed.';

-- Enable Row Level Security (RLS) - Important for security!
-- By default, this denies all access. We'll rely on Supabase service roles (via Server Actions) for inserts.
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Optionally, create a policy allowing service_role full access (good practice)
-- This ensures server-side operations using the service key can manage the table.
CREATE POLICY "Allow service_role full access"
ON contact_submissions
FOR ALL
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');
