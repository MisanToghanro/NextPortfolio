
import Link from "next/link";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import ProjectCards from "@/Components/Projects/ProjectCards";
import { projects } from "../api/projects";

const AboutPage: React.FC = () => {

    return(
        <div className="min-h-screen flex flex-col items-center text-center px-6 py-12 max-w-4xl mx-auto space-y-10">

          <section className="max-w-2xl text-left space-y-2">
            <div >
          <p className="  text-gray-600">
           Through hands-on experience at <strong>ALX Africa’s Frontend Development</strong> and the 
          <strong> ProDev Frontend Program</strong>, I’ve built projects using modern web technologies.  
         These experiences strengthened my ability to create <strong>scalable, high-performance, and accessible</strong> digital products that deliver seamless user experiences.
          </p>
            </div>

            <div className="pt-4">
            <h3 className="font-semibold text-lg mb-2">🏆 Certification</h3>
            <div className=" flex flex-col md:flex-row items-center justify-between gap-2 bg-gray-50 p-3 rounded-lg shadow-sm shadow-blue-300 mb-2 text-sm md:text-md">
            <p >🎓 ALX Software Engineering Program — Front-End Track</p>
            <Link href="https://savanna.alxafrica.com/certificates/7YL6FTfz5p" target="blank" className="bg-blue-50 text-blue-500 rounded-full px-3 py-2 hover:bg-blue-100 hover:underline">View Certificate</Link>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-2  bg-gray-50 p-3 rounded-lg shadow-sm shadow-blue-300 text-sm md:text-md">
            <p> 🎓 ALX Software Engineering — Prodev Frontend Program:</p>
            <Link href="https://savanna.alxafrica.com/certificates/McZJF6s8BN" target="blank" className="bg-blue-50 text-blue-500 rounded-full px-3 py-2 hover:bg-blue-100 hover:underline">View Certificate</Link>
            </div>

            </div>
          </section>
            

          {/*tech stack*/}
          <section className="mt-10 text-center">
  <h2 className="text-2xl font-semibold mb-5">My TechStack</h2>

  <div className="grid grid-cols-1 md:grid-cols-2  gap-6 max-w-3xl mx-auto text-gray-700 text-lg">

    <div className="px-4 py-3 border rounded-xl hover:bg-blue-100 transition">
      <div className="flex items-center gap-2 mb-1">
        <FaHtml5 /> <span className="font-semibold">HTML</span>
      </div>
      <p className="text-sm text-gray-500">The foundation of every webpage — I use it to structure content clearly and semantically.</p>
    </div>

    <div className="px-4 py-3 border rounded-xl hover:bg-blue-100 transition">
      <div className="flex items-center gap-2 mb-1">
        <FaCss3Alt /> <span className="font-semibold">CSS</span>
      </div>
      <p className="text-sm text-gray-500">Used to style layouts, create responsive designs, and bring UI ideas to life.</p>
    </div>

    <div className="px-4 py-3 border rounded-xl hover:bg-blue-100 transition">
      <div className="flex items-center gap-2 mb-1">
        <FaJs /> <span className="font-semibold">JavaScript</span>
      </div>
      <p className="text-sm text-gray-500">Adds logic, interactivity, and dynamic behavior to the web apps I build.</p>
    </div>

    <div className="px-4 py-3 border rounded-xl hover:bg-blue-100 transition">
      <div className="flex items-center gap-2 mb-1">
        <FaReact /> <span className="font-semibold">React</span>
      </div>
      <p className="text-sm text-gray-500">My main UI library for building powerful, component-based applications.</p>
    </div>

    <div className="px-4 py-3 border rounded-xl hover:bg-blue-100 transition">
      <div className="flex items-center gap-2 mb-1">
        <SiNextdotjs /> <span className="font-semibold">Next.js</span>
      </div>
      <p className="text-sm text-gray-500">A React framework I use to build fast, optimized, and SEO-friendly web apps.</p>
    </div>

    <div className="px-4 py-3 border rounded-xl hover:bg-blue-100 transition">
      <div className="flex items-center gap-2 mb-1">
        <SiTailwindcss /> <span className="font-semibold">Tailwind CSS</span>
      </div>
      <p className="text-sm text-gray-500">My go-to styling tool for building clean, responsive designs quickly.</p>
    </div>

  </div>
</section>



         {/*Projects*/}
          <ProjectCards projects={projects}/>

         <section className="mt-16 text-left max-w-2xl">
          <h2 className="text-2xl font-semibold mb-4">My Approach to Projects</h2>
          <p className="text-gray-700 leading-relaxed">
                I like to begin every project by carefully analyzing the requirements and breaking them into clear, achievable milestones. 
    From there, I leverage AI tools - to brainstorm ideas, speed up development, and refine my results step by step - alongside modern development practices to tackle each milestone efficiently.
     This approach helps me stay focused, build efficiently, and deliver solutions that are both creative and functional.
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