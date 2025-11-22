import { ProjectsCardsProps } from "@/interfaces";
import Link from "next/link";
interface ProjectCard {
    projects:ProjectsCardsProps[]
}

const ProjectCards: React.FC<ProjectCard> = ({ projects }) => {
  return (
    <section className="mt-10 text-center w-full">
      <h2 className="font-semibold mb-10 text-xl md:text-3xl text-[#5648B7]">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="
              rounded-lg overflow-hidden
              shadow-lg shadow-purple-200 
              hover:shadow-xl hover:shadow-purple-300
              hover:-translate-y-2 transition-all duration-300
            "
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-44 object-cover"
            />

            <div className="p-5 text-left project-desc">
              <h3 className="font-bold text-lg text-gray-800">
                {project.title}
              </h3>

              <p className="text-gray-600 text-md mt-2 mb-4 ">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="
                      bg-purple-100 text-[#5648B7] 
                      text-xs px-3 py-1 rounded-full font-medium
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex justify-between text-sm font-medium">
                <Link
                  href={`/ProjectsDetails/${project.id}`}
                  className="text-teal-500 hover:text-[#5648B7] hover:underline"
                >
                  View Details
                </Link>

                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-500 hover:text-[#5648B7] hover:underline"
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCards;