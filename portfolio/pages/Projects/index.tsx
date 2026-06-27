import { useState } from "react";
import Link from "next/link";

import { projects } from "../api/projects";
import ProjectCards from "@/Components/Projects/ProjectCards";

const ProjectsOverviewPage = () => {

  const [selectedType, setSelectedType] = useState<
    "all" | "personal" | "client"
  >("all");

  const filteredProjects =
    selectedType === "all"
      ? projects
      : projects.filter(
          (project) => project.type === selectedType
        );

  return (
    <div className="min-h-screen px-6 py-12 max-w-6xl mx-auto">

      {/* Back */}
      <Link
        href="/#services"
        className="
          inline-flex items-center gap-2
          mb-8
          text-[#41C9B9]
          font-medium
          hover:gap-3
          transition-all
        "
      >
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
          </svg>
       </span> 
       Back
      </Link>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#5648B7]">
          Projects i'm Proud of
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-gray-500">
          A collection of projects I've built while learning,
          experimenting with new technologies, and solving
          real-world problems.
        </p>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">

        <button
          onClick={() => setSelectedType("all")}
          className={`px-5 py-2 rounded-full transition cursor-pointer ${
            selectedType === "all"
              ? "bg-[#5648B7] text-white"
              : " hover:bg-gray-200 text-[#41C9B9]"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setSelectedType("personal")}
          className={`px-5 py-2 rounded-full transition cursor-pointer ${
            selectedType === "personal"
              ? "bg-[#5648B7] text-white"
              : "hover:bg-gray-200 text-[#41C9B9]"
          }`}
        >
          Personal
        </button>

        <button
          onClick={() => setSelectedType("client")}
          className={`px-5 py-2 rounded-full transition cursor-pointer${
            selectedType === "client"
              ? "bg-[#5648B7] text-white"
              : "hover:bg-gray-200 text-[#41C9B9]"
          }`}
        >
          Client
        </button>

      </div>

      {/* Projects */}
      <ProjectCards projects={filteredProjects} />

    </div>
  );
};

export default ProjectsOverviewPage;