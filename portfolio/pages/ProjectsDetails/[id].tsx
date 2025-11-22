
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
    return(
        <div className="min-h-screen">
            <h1 className="text-center font-bold p-6 text-2xl text-[#5648B7]">Project details</h1>
            <Link href={`/Services`} className="font-medium text-md shadow-md shadow-[#9bf0e6] rounded-md px-4 py-2 m-4 hover:scale-105"> go back</Link>
            <ProjectDetails project={project}/>
        </div>
    )
}
export default DetailsPage