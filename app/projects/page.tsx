"use client"; // Convert to Client Component

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { fetchProjects, ProjectGridItem } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

// Define container variants for staggering children
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Time delay between each child animation
      delayChildren: 0.2, // Delay before starting the first child animation
    },
  },
};

export default function ProjectsPage() {
  // State for projects and loading status
  const [projects, setProjects] = useState<ProjectGridItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch projects on component mount
  useEffect(() => {
    async function loadProjects() {
      try {
        setIsLoading(true);
        const fetchedProjects = await fetchProjects();
        setProjects(fetchedProjects);
        setError(null); // Clear any previous errors
      } catch (err) {
        console.error("Failed to load projects:", err);
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setIsLoading(false);
      }
    }

    loadProjects();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="text-4xl font-bold font-serif mb-8">Projects</h1>

      {isLoading ? (
        <p className="text-center text-foreground/60">Loading projects...</p>
      ) : error ? (
        <p className="text-center text-red-600">
          Error loading projects: {error}
        </p>
      ) : projects.length === 0 ? (
        <p className="text-center text-foreground/60">
          No projects found. Check back soon!
        </p>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Map over projects and render ProjectCard */}
          {projects.map((project) => (
            // ProjectCard already has its own variants,
            // containerVariants will handle the staggering
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      )}
    </div>
  );
}
