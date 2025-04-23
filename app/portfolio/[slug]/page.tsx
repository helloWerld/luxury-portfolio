import { fetchProjectBySlug } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next"; // Import Metadata type

// Define the expected Promise types based on Next.js 15
type ParamsPromise = Promise<{ slug: string }>;
type SearchParamsPromise = Promise<{
  [key: string]: string | string[] | undefined;
}>;

// Optional: Generate dynamic metadata for the page title
export async function generateMetadata({
  params,
}: {
  params: ParamsPromise;
  searchParams: SearchParamsPromise; // Keep structure consistent
}): Promise<Metadata> {
  const resolvedParams = await params; // Await the promise
  const slug = resolvedParams.slug;

  if (!slug) {
    return { title: "Project Not Found" };
  }
  const project = await fetchProjectBySlug(slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }
  return {
    title: `${project.title} | Portfolio`, // Set dynamic page title
  };
}

// Restore original async function definition
export default async function ProjectDetailPage(props: {
  params: ParamsPromise;
  searchParams: SearchParamsPromise;
}) {
  const params = await props.params; // Await the promise
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _searchParams = await props.searchParams; // Await even if unused for consistency

  const { slug } = params;
  const project = await fetchProjectBySlug(slug);

  // If project data is null (not found), render 404 page
  if (!project) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Project Title */}
      <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
        {project.title}
      </h1>

      {/* Optional: Project creation date or other meta */}
      <p className="text-sm text-foreground/60 mb-8">
        Published: {new Date(project.created_at).toLocaleDateString()}
      </p>

      {/* Project Thumbnail/Hero Image */}
      {project.thumbnail_url && (
        <div className="relative w-full h-64 md:h-96 mb-8 bg-muted rounded-lg overflow-hidden">
          <Image
            src={project.thumbnail_url}
            alt={`${project.title} main image`}
            fill
            style={{ objectFit: "cover" }}
            priority // Prioritize loading hero image
          />
        </div>
      )}

      {/* Main Content Area */}
      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
        {/* TODO: Render the project body content. 
            If 'body' is markdown, use a markdown renderer library. 
            If it's plain text, wrap in paragraphs or use dangerouslySetInnerHTML carefully if it contains HTML. 
            For now, just displaying as text. */}
        <p>{project.body || "No content available."}</p>
      </div>

      {/* Project Details Section */}
      <div className="mt-12 border-t border-secondary/20 pt-8">
        <h2 className="text-2xl font-semibold font-serif mb-4">
          Project Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <h3 className="font-semibold mb-1">Role</h3>
            <p className="text-foreground/80">{project.role || "-"}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Tech Stack</h3>
            {project.tech_stack && project.tech_stack.length > 0 ? (
              <ul className="list-disc list-inside text-foreground/80">
                {project.tech_stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            ) : (
              <p className="text-foreground/80">-</p>
            )}
          </div>
          <div>
            <h3 className="font-semibold mb-1">Outcomes</h3>
            <p className="text-foreground/80">{project.outcomes || "-"}</p>
          </div>
        </div>

        {/* Project Links */}
        <div className="mt-8 flex flex-wrap gap-4">
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              View on GitHub
            </a>
          )}
          {project.live_url && (
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-[#111111] text-sm font-medium rounded-md bg-white text-[#111111] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Preview
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
