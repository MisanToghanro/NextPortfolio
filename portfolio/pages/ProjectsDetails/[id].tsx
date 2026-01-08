
import ProjectDetails from "@/Components/Projects/ProjectDetails"
import { useRouter } from "next/router"
import { projects } from "../api/projects"
import Link from "next/link";

const DetailsPage = () => {

    const router = useRouter();
    const {id} = router.query;


    const project = projects.find((project) => project.id === Number(id))

    if (!project){
          return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-semibold">Project not found</h1>
      </div>)
    }

     const backLink = `/Projects?type=${project.type}`;

    return(
        <div className="min-h-screen">
            <Link
  href={backLink}
  className="
    inline-flex items-center gap-2
    m-6 mt-10 px-4 py-2
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

  Back to Projects
</Link>

            <h1 className="text-center font-bold p-6 text-2xl text-[#5648B7]">Project details</h1>
             
            <ProjectDetails project={project}/>
        </div>
    )
}
export default DetailsPage