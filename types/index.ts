// TODO: Define the actual ProjectType based on your database schema
export interface ProjectType {
  id: string;
  name: string;
  description: string;
  github_url: string | null;
  live_url: string | null;
  // Add other fields like imageUrl, repoUrl, liveUrl, tags, etc.
}
