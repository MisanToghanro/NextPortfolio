
import ProjectTypeCards from "@/Components/Projects/ProjectTypeCards";
import TechStackCard from "@/Components/TechStack/TechStackCard";
import { techStack } from "@/data/techstack";




const WorkPage = () => {

    return(
        <section>
{/*tech stack*/}
<section className="mt-10 text-center tech-stack">
  <h2 className="text-3xl font-bold mb-6 text-[#5648B7]">Core Technologies</h2>
  <p className="text-gray-700 mb-6 text-lg">
    These are the technologies I work with to build modern, efficient, and scalable web applications.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
    {techStack.map((tech, index) => (
      <TechStackCard key={index} techStack={tech} />
    ))}
  </div>
</section>

        <ProjectTypeCards/>
        </section>


    )
}
export default WorkPage