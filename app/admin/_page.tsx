"use client";

import { useState, useEffect } from "react";
import ProjectForm from "@/components/admin/ProjectForm";
import {
  fetchProjectsForAdmin,
  createProject,
  updateProject,
  deleteProject,
  type ProjectDetails,
  type ProjectInput,
  updateProjectOrder,
} from "@/lib/data";

export default function AdminPage() {
  const [projects, setProjects] = useState<ProjectDetails[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProject, setEditingProject] = useState<ProjectDetails | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const moveProject = async (index: number, direction: "up" | "down") => {
    if (
      (direction === "up" && index === 0) ||
      (direction === "down" && index === projects.length - 1)
    )
      return;

    const newIndex = direction === "up" ? index - 1 : index + 1;
    const newProjects = [...projects];
    [newProjects[index], newProjects[newIndex]] = [
      newProjects[newIndex],
      newProjects[index],
    ];
    setProjects(newProjects);

    try {
      await updateProjectOrder(newProjects);
      console.log("Project order updated successfully");
    } catch (err) {
      console.error("Failed to update project order:", err);
      // Revert the order if the update fails
      setProjects(projects);
    }
  };

  // Fetch projects on component mount
  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    try {
      const data = await fetchProjectsForAdmin();
      // Sort projects by order
      const sortedProjects = [...data].sort(
        (a, b) => (a.order ?? 0) - (b.order ?? 0)
      );
      setProjects(sortedProjects);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load projects");
      console.error("Error loading projects:", err);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleAddProject(data: ProjectInput) {
    try {
      setIsLoading(true);
      const newProject = await createProject(data);
      setProjects((prev) => [newProject, ...prev]);
      setShowAddForm(false);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create project");
      console.error("Error creating project:", err);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleUpdateProject(id: number, data: Partial<ProjectInput>) {
    try {
      setIsLoading(true);
      const updatedProject = await updateProject(id, data);
      setProjects((prev) =>
        prev.map((p) => (p.id === id ? updatedProject : p))
      );
      setEditingProject(null);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update project");
      console.error("Error updating project:", err);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDeleteProject(id: number) {
    if (!window.confirm("Are you sure you want to delete this project?")) {
      return;
    }

    try {
      setIsLoading(true);
      await deleteProject(id);
      setProjects((prev) => prev.filter((p) => p.id !== id));
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete project");
      console.error("Error deleting project:", err);
    } finally {
      setIsLoading(false);
    }
  }

  const handleFormSubmit = async (data: ProjectInput & { id?: number }) => {
    if (editingProject) {
      // Only pass fields that have changed
      const changedFields: Record<string, string | number | string[] | null> =
        {};
      Object.keys(data).forEach((key) => {
        const k = key as keyof ProjectInput;
        if (k === "tech_stack") {
          if (JSON.stringify(data[k]) !== JSON.stringify(editingProject[k])) {
            changedFields[k] = data[k];
          }
        } else if (data[k] !== editingProject[k]) {
          changedFields[k] = data[k];
        }
      });
      await handleUpdateProject(
        editingProject.id,
        changedFields as Partial<ProjectInput>
      );
    } else {
      await handleAddProject(data);
    }
  };

  const handleCancel = () => {
    setShowAddForm(false);
    setEditingProject(null);
  };

  if (error) {
    return (
      <div className="p-4 text-red-500">
        Error: {error}
        <button onClick={loadProjects} className="ml-4 text-blue-500 underline">
          Try again
        </button>
      </div>
    );
  }

  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-semibold mb-8">Admin - Manage Projects</h1>

      {/* Loading state */}
      {isLoading && <div className="text-center py-4">Loading...</div>}

      {/* Section for adding/editing projects */}
      <section className="mb-12">
        {!showAddForm && !editingProject && (
          <button
            onClick={() => setShowAddForm(true)}
            className="mb-4 px-4 py-2 border border-transparent rounded shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            disabled={isLoading}
          >
            Add New Project
          </button>
        )}

        {(showAddForm || editingProject) && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              {editingProject ? "Edit Project" : "Add New Project"}
            </h2>
            <ProjectForm
              project={editingProject ?? undefined}
              onSubmit={handleFormSubmit}
              onCancel={handleCancel}
            />
          </div>
        )}
      </section>

      {/* Section for listing existing projects */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Existing Projects</h2>
        {!isLoading && projects.length === 0 ? (
          <p className="text-gray-500">No projects found.</p>
        ) : (
          <ul className="space-y-3">
            {projects.map((project, index) => (
              <li
                key={project.id}
                className="flex justify-between items-center p-4 border rounded shadow-sm bg-white"
              >
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <button
                      onClick={() => moveProject(index, "up")}
                      disabled={index === 0}
                      className="p-1 text-gray-500 hover:text-gray-700 disabled:opacity-50"
                    >
                      ↑
                    </button>
                    <button
                      onClick={() => moveProject(index, "down")}
                      disabled={index === projects.length - 1}
                      className="p-1 text-gray-500 hover:text-gray-700 disabled:opacity-50"
                    >
                      ↓
                    </button>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{project.title}</h3>
                    <p className="text-sm text-gray-600">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="space-x-2 flex-shrink-0">
                  <button
                    onClick={() => setEditingProject(project)}
                    className="px-3 py-1 text-sm border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
                    disabled={isLoading}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProject(project.id)}
                    className="px-3 py-1 text-sm border border-transparent rounded text-white bg-red-600 hover:bg-red-700"
                    disabled={isLoading}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
