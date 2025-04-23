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
  github_url: string | null;
  live_url: string | null;
};

// Type for creating/updating projects
export type ProjectInput = Omit<ProjectDetails, "id" | "created_at">;

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

/**
 * Creates a new project in the database.
 */
export async function createProject(
  project: ProjectInput
): Promise<ProjectDetails> {
  console.log("Creating new project:", project.title);

  // Generate a slug from the title if not provided
  const slug = project.slug || project.title.toLowerCase().replace(/\s+/g, "-");

  const { data, error } = await supabase
    .from("projects")
    .insert([{ ...project, slug }])
    .select()
    .single();

  if (error) {
    console.error("Error creating project:", error);
    throw new Error(`Failed to create project: ${error.message}`);
  }

  console.log("Created project:", data.title);
  return data;
}

/**
 * Updates an existing project in the database.
 */
export async function updateProject(
  id: number,
  project: Partial<ProjectInput>
): Promise<ProjectDetails> {
  console.log(`Updating project ${id}:`, project);

  const { data, error } = await supabase
    .from("projects")
    .update(project)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Error updating project:", error);
    throw new Error(`Failed to update project: ${error.message}`);
  }

  console.log("Updated project:", data.title);
  return data;
}

/**
 * Deletes a project from the database.
 */
export async function deleteProject(id: number): Promise<void> {
  console.log("Deleting project:", id);

  const { error } = await supabase.from("projects").delete().eq("id", id);

  if (error) {
    console.error("Error deleting project:", error);
    throw new Error(`Failed to delete project: ${error.message}`);
  }

  console.log("Project deleted successfully");
}

/**
 * Fetches all projects for admin view (includes all fields).
 */
export async function fetchProjectsForAdmin(): Promise<ProjectDetails[]> {
  console.log("Fetching all projects for admin...");

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching projects for admin:", error);
    throw new Error(`Failed to fetch projects: ${error.message}`);
  }

  console.log(`Fetched ${data?.length || 0} projects for admin.`);
  return data || [];
}

/**
 * Uploads an image to Supabase Storage and returns the public URL.
 */
export async function uploadProjectImage(
  file: File,
  path?: string
): Promise<string> {
  if (!file) throw new Error("No file provided");

  // Validate file type
  if (!file.type.startsWith("image/")) {
    throw new Error("File must be an image");
  }

  // Generate a unique file path if none provided
  const filePath =
    path ||
    `${crypto.randomUUID()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "")}`;
  console.log(`Uploading image: ${filePath}`);

  const { data, error } = await supabase.storage
    .from("project-images")
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: true, // Allow overwriting files
    });

  if (error) {
    console.error("Error uploading image:", error);
    throw new Error(`Failed to upload image: ${error.message}`);
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from("project-images").getPublicUrl(data.path);

  console.log("Image uploaded successfully:", publicUrl);
  return publicUrl;
}

/**
 * Deletes an image from Supabase Storage.
 * @param url The public URL of the image to delete
 */
export async function deleteProjectImage(url: string): Promise<void> {
  // Extract the file path from the URL
  const urlObj = new URL(url);
  const pathMatch = urlObj.pathname.match(/project-images\/(.+)$/);
  if (!pathMatch) {
    throw new Error("Invalid image URL");
  }

  const filePath = pathMatch[1];
  console.log(`Deleting image: ${filePath}`);

  const { error } = await supabase.storage
    .from("project-images")
    .remove([filePath]);

  if (error) {
    console.error("Error deleting image:", error);
    throw new Error(`Failed to delete image: ${error.message}`);
  }

  console.log("Image deleted successfully");
}
