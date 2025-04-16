-- Create the projects table
CREATE TABLE projects (
    id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    created_at timestamptz DEFAULT now() NOT NULL,
    title text NOT NULL,
    slug text UNIQUE NOT NULL,
    thumbnail_url text,
    description text,
    body text,
    tech_stack text[],
    role text,
    outcomes text
);

-- Add comments to columns for clarity (optional but helpful)
COMMENT ON COLUMN projects.id IS 'Unique identifier for each project';
COMMENT ON COLUMN projects.created_at IS 'Timestamp when the project was added';
COMMENT ON COLUMN projects.title IS 'The main title of the project';
COMMENT ON COLUMN projects.slug IS 'URL-friendly identifier for the project';
COMMENT ON COLUMN projects.thumbnail_url IS 'URL of the project''s thumbnail image';
COMMENT ON COLUMN projects.description IS 'Short summary for project cards';
COMMENT ON COLUMN projects.body IS 'Main content/case study details for the project page';
COMMENT ON COLUMN projects.tech_stack IS 'Array of technologies used in the project';
COMMENT ON COLUMN projects.role IS 'The developer''s role in the project';
COMMENT ON COLUMN projects.outcomes IS 'Results or achievements of the project';

-- Initially disable Row Level Security (RLS) for easy development access
-- RLS should be enabled and configured properly before production.
ALTER TABLE projects DISABLE ROW LEVEL SECURITY;
