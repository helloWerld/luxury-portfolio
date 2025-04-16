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
      </div>
    </article>
  );
}

// Optional: Generate static paths if you know all slugs beforehand (improves build time)
// export async function generateStaticParams() {
//   const projects = await fetchProjects(); // Fetch basic data
//   return projects.map((project) => ({
//     slug: project.slug,
//   }));
// }
