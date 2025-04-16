import { supabase } from "./supabase";

// Define a type for the project data needed for the grid
// Adjust this based on the exact fields you need later
export type ProjectGridItem = {
  id: number;
  title: string;
  slug: string;
  thumbnail_url: string | null;
  description: string | null;
};

// Define a type for the full project details
// Add all columns from your projects table schema
export type ProjectDetails = {
  id: number;
  created_at: string;
  title: string;
  slug: string;
  thumbnail_url: string | null;
  description: string | null;
  body: string | null;
  tech_stack: string[] | null;
  role: string | null;
  outcomes: string | null;
};

/**
 * Fetches projects for the grid display.
 * Selects only the necessary fields for performance.
 */
export async function fetchProjects(): Promise<ProjectGridItem[]> {
  console.log("Fetching projects for grid...");
  const { data, error } = await supabase
    .from("projects")
    .select("id, title, slug, thumbnail_url, description") // Select specific columns
    .order("created_at", { ascending: false }); // Order by creation date, newest first

  if (error) {
    console.error("Error fetching projects:", error);
    // In a real app, you might want to throw the error or return a specific error state
    throw new Error(`Failed to fetch projects: ${error.message}`);
  }

  console.log(`Fetched ${data?.length || 0} projects.`);
  // Ensure data is not null, default to empty array if it is
  return data || [];
}

// TODO: Add fetchProjectBySlug function later

/**
 * Fetches full details for a single project by its slug.
 */
export async function fetchProjectBySlug(
  slug: string
): Promise<ProjectDetails | null> {
  if (!slug) {
    console.error("fetchProjectBySlug requires a slug.");
    return null;
  }

  console.log(`Fetching project details for slug: ${slug}...`);
  const { data, error } = await supabase
    .from("projects")
    .select("*") // Select all columns for the detail page
    .eq("slug", slug) // Filter by the provided slug
    .single(); // Expect only one row

  if (error) {
    if (error.code === "PGRST116") {
      // PGRST116 means no rows found, which is not necessarily an error here
      console.log(`Project with slug "${slug}" not found.`);
      return null;
    } else {
      // For other errors, log and throw
      console.error(`Error fetching project by slug (${slug}):`, error);
      throw new Error(`Failed to fetch project ${slug}: ${error.message}`);
    }
  }

  if (!data) {
    console.log(`No data returned for project with slug "${slug}".`);
    return null;
  }

  console.log(`Fetched details for project: ${data.title}`);
  return data;
}
