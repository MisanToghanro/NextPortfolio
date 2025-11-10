
import Link from "next/link";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import ProjectCards from "@/Components/Projects/ProjectCards";
import { projects } from "../api/projects";

const AboutPage: React.FC = () => {

    return(
        <div className="flex flex-col items-center text-center px-6 py-12 max-w-4xl mx-auto space-y-10">
            
        <p className="text-left max-w-2xl text-gray-600">
  Through hands-on experience at <strong>ALX Africa’s Frontend Development</strong> and the 
  <strong> ProDev Frontend Program</strong>, I’ve built projects using modern web technologies.  
  These experiences strengthened my ability to create <strong>scalable, high-performance, and accessible</strong> digital products that deliver seamless user experiences.
       </p>

          {/*tech stack*/}
            <section className="mt-10 text-center">
         <h2 className="text-2xl font-semibold mb-5">Tech Stack</h2>
           <div className="flex flex-wrap justify-center gap-6 text-gray-700 text-lg">
  <span className="flex items-center gap-2 px-3 py-1 border rounded-full hover:bg-blue-100 transition cursor-pointer"><FaHtml5 /> HTML</span>
  <span className="flex items-center gap-2 px-3 py-1 border rounded-full hover:bg-blue-100 transition cursor-pointer"><FaCss3Alt /> CSS</span>
  <span className="flex items-center gap-2 px-3 py-1 border rounded-full hover:bg-blue-100 transition cursor-pointer"><FaJs /> JavaScript</span>
  <span className="flex items-center gap-2 px-3 py-1 border rounded-full hover:bg-blue-100 transition cursor-pointer"><FaReact /> React</span>
  <span className="flex items-center gap-2 px-3 py-1 border rounded-full hover:bg-blue-100 transition cursor-pointer"><SiNextdotjs /> Next.js</span>
  <span className="flex items-center gap-2 px-3 py-1 border rounded-full hover:bg-blue-100 transition cursor-pointer"><SiTailwindcss /> Tailwind CSS</span>
         </div>

         </section>


         {/*Projects*/}
          <ProjectCards projects={projects}/>

         <section className="mt-16 text-left max-w-2xl">
          <h2 className="text-2xl font-semibold mb-4">My Approach to Projects</h2>
          <p className="text-gray-700 leading-relaxed">
     Every project starts with understanding the user’s needs and translating them into intuitive interfaces.
    I focus on accessibility, performance, and clean code architecture — ensuring each build not only looks great
    but also scales efficiently across devices.
          </p>
         </section>

         <section className="mt-5 text-center">
          <p className=" mb-4">Interested in collaborating or hiring me for your next project?</p>
         <Link href="/Contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
         Let’s Work Together
          </Link>
         </section>

        </div>
    )
}

export default AboutPage;