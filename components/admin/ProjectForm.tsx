import React, { useState, useRef } from "react";
import {
  type ProjectDetails,
  type ProjectInput,
  uploadProjectImage,
} from "@/lib/data";
import Image from "next/image";

interface ProjectFormProps {
  project?: ProjectDetails;
  onSubmit: (data: ProjectInput) => void;
  onCancel: () => void;
}

export default function ProjectForm({
  project,
  onSubmit,
  onCancel,
}: ProjectFormProps) {
  const [formData, setFormData] = useState<ProjectInput>(
    project || {
      title: "",
      slug: "",
      description: "",
      thumbnail_url: null,
      body: null,
      tech_stack: null,
      role: null,
      outcomes: null,
    }
  );
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.description) {
      console.error("Missing required fields");
      return;
    }
    onSubmit(formData);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);
      setUploadError(null);
      const imageUrl = await uploadProjectImage(file);
      setFormData((prev) => ({ ...prev, thumbnail_url: imageUrl }));
    } catch (err) {
      setUploadError(
        err instanceof Error ? err.message : "Failed to upload image"
      );
      console.error("Error uploading image:", err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Project Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label
          htmlFor="slug"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Slug
        </label>
        <input
          type="text"
          id="slug"
          name="slug"
          value={formData.slug}
          onChange={handleChange}
          placeholder="project-url-slug"
          className="w-full p-2 border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
        <p className="mt-1 text-sm text-gray-500">
          URL-friendly name (optional - will be generated from title if empty)
        </p>
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description || ""}
          onChange={handleChange}
          rows={4}
          required
          className="w-full p-2 border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Project Thumbnail
        </label>
        <div className="mt-1 flex items-center space-x-4">
          <div
            onClick={handleImageClick}
            className={`relative w-32 h-32 border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer hover:border-gray-400 transition-colors ${
              isUploading ? "opacity-50" : ""
            }`}
          >
            {formData.thumbnail_url ? (
              <Image
                src={formData.thumbnail_url}
                alt="Project thumbnail"
                fill
                className="object-cover rounded-lg"
              />
            ) : (
              <div className="text-center p-4">
                <svg
                  className="mx-auto h-8 w-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span className="mt-2 block text-xs font-medium text-gray-600">
                  {isUploading ? "Uploading..." : "Click to upload"}
                </span>
              </div>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            disabled={isUploading}
          />
          {uploadError && <p className="text-sm text-red-600">{uploadError}</p>}
        </div>
        <p className="mt-1 text-sm text-gray-500">
          Click to upload a project thumbnail image
        </p>
      </div>

      <div>
        <label
          htmlFor="body"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Project Details
        </label>
        <textarea
          id="body"
          name="body"
          value={formData.body || ""}
          onChange={handleChange}
          rows={6}
          className="w-full p-2 border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="github_url"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            GitHub URL
          </label>
          <input
            type="url"
            id="github_url"
            name="github_url"
            value={formData.github_url || ""}
            onChange={handleChange}
            placeholder="https://github.com/username/repo"
            className="w-full p-2 border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="live_url"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Live Preview URL
          </label>
          <input
            type="url"
            id="live_url"
            name="live_url"
            value={formData.live_url || ""}
            onChange={handleChange}
            placeholder="https://your-project.com"
            className="w-full p-2 border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="role"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Your Role
        </label>
        <input
          type="text"
          id="role"
          name="role"
          value={formData.role || ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label
          htmlFor="outcomes"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Project Outcomes
        </label>
        <textarea
          id="outcomes"
          name="outcomes"
          value={formData.outcomes || ""}
          onChange={handleChange}
          rows={4}
          className="w-full p-2 border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={isUploading}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={isUploading}
        >
          {project ? "Update Project" : "Create Project"}
        </button>
      </div>
    </form>
  );
}
