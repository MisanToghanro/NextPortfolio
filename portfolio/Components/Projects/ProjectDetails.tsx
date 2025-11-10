

import { ProjectsCardsProps } from "@/interfaces"

interface ProjectDetailsProps{
    project:ProjectsCardsProps
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({project}) => {

    return(
       
        <main className="max-w-3xl mx-auto py-12 px-6">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-72 object-cover rounded-lg mb-6 shadow-md"
      />
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className=" mb-6">
        {project.description}
      </p>

      {project.details && (
        <div
          className="text-left space-y-3"
          dangerouslySetInnerHTML={{ __html: project.details }}
        />
      )}

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all"
      >
        View Project Live
      </a>
    </main>

        
    )
}
export default ProjectDetails