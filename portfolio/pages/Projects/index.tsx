import { projects } from "../api/projects";
import ProjectCards from "@/Components/Projects/ProjectCards";
import { useRouter } from "next/router";
import Link from "next/link";

const ProjectsOverviewPage = () => {
  const router = useRouter();
  const { type } = router.query;

  const filteredProjects = projects.filter((project) => project.type === type);

  const title = type === "client" ? "Client Projects" : "Personal Projects";

  return (
    <div className="min-h-screen px-6 py-12 max-w-5xl mx-auto">
      
      {/* Back to Services */}
      <Link
        href="/Services"
        className="
          inline-flex items-center gap-2
          mb-8 px-4 py-2
          rounded-lg
          font-medium text-sm
          text-[#5648B7]
          bg-[#41C9B9]/80
          border border-[#41C9B9]/30
          shadow-sm shadow-[#9bf0e6]
          hover:bg-[#41C9B9]/65
          hover:-translate-y-0.5
          hover:shadow-md
          transition-all duration-200
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
          />
        </svg>
        Back to Services
      </Link>

      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#5648B7]">
        {title}
      </h1>

      {/* Project Cards */}
      {filteredProjects.length > 0 ? (
        <ProjectCards projects={filteredProjects} />
      ) : (
        <p className="text-center text-gray-600">No projects found.</p>
      )}
    </div>
  );
};

export default ProjectsOverviewPage;
