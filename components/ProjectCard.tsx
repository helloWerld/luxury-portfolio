"use client"; // Needed for Framer Motion

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import type { ProjectGridItem } from "@/lib/data"; // Import the type

interface ProjectCardProps {
  project: ProjectGridItem;
}

// Define animation variants for the card item
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      variants={cardVariants} // Apply item variants
      whileHover={{
        y: -5,
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      }}
      transition={{ duration: 0.2 }}
      className="border border-secondary/20 rounded-lg overflow-hidden h-full flex flex-col"
    >
      <Link href={`/projects/${project.slug}`} className="block group h-full">
        <div className="relative w-full h-48 bg-muted">
          {project.thumbnail_url ? (
            <Image
              src={project.thumbnail_url}
              alt={`${project.title} thumbnail`}
              fill // Use fill for responsive images within relative parent
              style={{ objectFit: "cover" }} // Cover the area
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-foreground/50">
              <span>No Image</span>
            </div>
          )}
        </div>
        <div className="p-4 flex-grow flex flex-col">
          <h2 className="text-xl font-semibold font-serif mb-2 group-hover:text-primary transition-colors duration-200">
            {project.title}
          </h2>
          <p className="text-sm text-foreground/80 mb-4 line-clamp-3 flex-grow">
            {project.description || "No description available."}
          </p>
          <span className="text-sm font-medium text-primary mt-auto self-start group-hover:underline">
            View Case Study
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
