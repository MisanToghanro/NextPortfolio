import { ProjectsCardsProps } from "@/interfaces";
import Link from "next/link";
interface ProjectCard {
    projects:ProjectsCardsProps[]
}

const ProjectCards: React.FC<ProjectCard> = ({projects}) => {

    return(
        <section className="mt-10 text-center  w-full">
           <h2 className="font-semibold mb-10">Heres a snapshot of my work in action</h2>

           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
                <div key={project.id} className="rounded-md overflow-hidden shadow-md shadow-blue-400 hover:shadow-blue-500 hover:scale-105 cursor-pointer transition">
                    <img src={project.image} alt={project.title} className="w-full h-40 object-cover"/>

                    <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2 text-gray-800">{project.title}</h3>
                        <p className="text-md mb-3 text-left text-gray-600">{project.description}</p>

                        <div className="flex mt-3 gap-4 justify-center text-center items-center text-sm">
                       <Link href={`/ProjectsDetails/${project.id}`} className="text-blue-500 font-medium hover:underline "> View Project Details </Link>

                        <Link 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 font-medium hover:underline"
                        >View Project Live</Link>

                        </div>

                    </div>

                    <div className="p-4 flex gap-2 justify-center">
                        {project.tags.map((tag, i) => (
                        <span key={i} className="inline-block bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
                           {tag}
                        </span>))}
                    </div>

                </div>))}

           </div>
           
         </section>
    )
}

export default ProjectCards;