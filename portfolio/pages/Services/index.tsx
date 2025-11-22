
import Link from "next/link";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import ProjectCards from "@/Components/Projects/ProjectCards";
import { projects } from "../api/projects";

const ServicesPage: React.FC = () => {

    return(
        <div className="min-h-screen flex flex-col items-center text-center px-6 py-12 max-w-4xl mx-auto space-y-10 service-page">

          <section className="max-w-2xl text-left space-y-2">
            <div>
          <p className="  text-gray-600 intro">
           Through hands-on experience at <strong>ALX Africa’s Frontend Development</strong> and the 
          <strong> ProDev Frontend Program</strong>, I’ve built projects using modern web technologies.  
         These experiences strengthened my ability to create <strong>scalable, high-performance, and accessible</strong> digital products that deliver seamless user experiences.
          </p>
            </div>

            <div className="pt-4">
            <h3 className="font-semibold text-lg mb-2">🏆 Certification</h3>
            <div className=" flex flex-col md:flex-row items-center justify-between gap-2 bg-gray-50 p-3 rounded-lg shadow-sm shadow-blue-300 mb-2 text-sm md:text-md">
            <p className="certificate-p font-medium">🎓 ALX Software Engineering Program — Front-End Track</p>
            <Link href="https://savanna.alxafrica.com/certificates/7YL6FTfz5p" target="blank" 
             className="bg-[#41C9B9]/10 text-[#41C9B9] rounded-full px-3 py-2 hover:bg-[#41C9B9]/20 hover:underline certificate-link">
              View Certificate
             </Link>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-2  bg-gray-50 p-3 rounded-lg shadow-sm shadow-blue-300 text-sm md:text-md">
            <p className="certificate-p text-gray-600 font-medium"> 🎓 ALX Software Engineering — Prodev Frontend Program:</p>
            <Link href="https://savanna.alxafrica.com/certificates/McZJF6s8BN" target="blank" 
             className="bg-[#41C9B9]/10 text-[#41C9B9] rounded-full px-3 py-2 hover:bg-[#41C9B9]/20 hover:underline certificate-link">
              View Certificate</Link>
            </div>

            </div>
          </section>

       {/*Services*/}
        <section className="mt-16 max-w-4xl mx-auto ">
           <h2 className="text-3xl font-bold text-center mb-6 text-[#5648B7]">
             What I Can Do For You
           </h2>

        <div className="bg-white shadow-lg rounded-2xl p-8  border border-[#41C9B9]/30 text-left service">
          <h3 className="text-2xl font-semibold text-[#41C9B9] mb-4">
              React & Next.js Website Development
           </h3>
    
           <p className="text-gray-700 mb-6 font-medium ">
            I build fast, modern, and scalable websites using React and Next.js —
            designed to help you stand out and leave a lasting impression online.
            </p>

    
           <ul className="space-y-3 text-gray-700 font-medium">
             <li className="flex items-start gap-2">
             <span className="text-[#41C9B9] font-bold">1</span>
              Fully responsive website development
             </li>

             <li className="flex items-start gap-2">
             <span className="text-[#41C9B9] font-bold">2</span>
              SEO-friendly and optimized for performance
             </li>

              <li className="flex items-start gap-2">
              <span className="text-[#41C9B9] font-bold">3</span>
               Clean, modern UI built with Tailwind CSS
              </li>

              <li className="flex items-start gap-2">
              <span className="text-[#41C9B9] font-bold">4</span>
              API integration & dynamic content
              </li>
            </ul>
         </div>

        {/* Second service */}
       <div className="bg-white shadow-lg rounded-2xl p-8 border border-[#41C9B9]/30 mt-10 text-left service">
         <h3 className="text-2xl font-semibold text-[#41C9B9] mb-4">
           Responsive Web & UI/UX Design
         </h3>
    
          <p className="text-gray-700 mb-6 font-medium">
           Modern, mobile-first designs that look great on desktops, tablets, and smartphones — 
           perfect for small businesses, startups, and personal brands.
          </p>

          <ul className="space-y-3 text-gray-700 font-medium">

           <li className="flex items-start gap-2">
            <span className="text-[#41C9B9] font-bold">1</span>
             Mobile-optimized web design
           </li>

           <li className="flex items-start gap-2">
           <span className="text-[#41C9B9] font-bold">2</span>
            Cross-browser compatibility testing
           </li>

          <li className="flex items-start gap-2">
           <span className="text-[#41C9B9] font-bold">3</span>
           User experience (UX) and interface (UI) improvements
           </li>

          <li className="flex items-start gap-2">
           <span className="text-[#41C9B9] font-bold">5</span>
            Performance and speed tuning
           </li>
        </ul>

       </div>
      </section>

            

          {/*tech stack*/}
          <section className="mt-10 text-center tech-stack">
  <h2 className="text-3xl font-bold mb-6 text-[#5648B7]">Core Technologies</h2>

  <p className="text-gray-700 mb-6 text-lg">These are the technologies I work with to build modern, efficient, and scalable web applications. </p>

  <div className="grid grid-cols-1 md:grid-cols-2  gap-6 max-w-3xl mx-auto text-gray-700 text-lg">

    <div className="p-6 cursor-pointer  shadow-md shadow-[#9bf0e6] rounded-xl hover:scale-105 transition">
      <div className="flex items-center gap-2 mb-2 text-[#5648B7]">
        <FaHtml5 /> <span className="font-semibold ">HTML</span>
      </div>
      <p className="text-sm text-gray-600">The foundation of every webpage — I use it to structure content clearly and semantically.</p>
    </div>

    <div className="p-6 cursor-pointer  shadow-md shadow-[#9bf0e6] rounded-xl hover:scale-105 transition">
      <div className="flex items-center gap-2 mb-2 text-[#5648B7]">
        <FaCss3Alt /> <span className="font-semibold">CSS</span>
      </div>
      <p className="text-sm text-gray-600">Used to style layouts, create responsive designs, and bring UI ideas to life.</p>
    </div>

    <div className="p-6 cursor-pointer  shadow-md shadow-[#9bf0e6] rounded-xl hover:scale-105 transition">
      <div className="flex items-center gap-2 mb-2 text-[#5648B7]">
        <FaJs /> <span className="font-semibold">JavaScript</span>
      </div>
      <p className="text-sm text-gray-600">Adds logic, interactivity, and dynamic behavior to the web apps I build.</p>
    </div>

    <div className="p-6 cursor-pointer  shadow-md shadow-[#9bf0e6] rounded-xl hover:scale-105 transition">
      <div className="flex items-center gap-2 mb-2 text-[#5648B7]">
        <FaReact /> <span className="font-semibold">React</span>
      </div>
      <p className="text-sm text-gray-600">My main UI library for building powerful, component-based applications.</p>
    </div>

    <div className="p-6 cursor-pointer  shadow-md shadow-[#9bf0e6] rounded-xl hover:scale-105 transition">
      <div className="flex items-center gap-2 mb-2 text-[#5648B7]">
        <SiNextdotjs /> <span className="font-semibold">Next.js</span>
      </div>
      <p className="text-sm text-gray-600">A React framework I use to build fast, optimized, and SEO-friendly web apps.</p>
    </div>

    <div className="p-6 cursor-pointer  shadow-md shadow-[#9bf0e6] rounded-xl hover:scale-105 transition">
      <div className="flex items-center gap-2 mb-2 text-[#5648B7]">
        <SiTailwindcss /> <span className="font-semibold">Tailwind CSS</span>
      </div>
      <p className="text-sm text-gray-600">My go-to styling tool for building clean, responsive designs quickly.</p>
    </div>

  </div>
</section>



         {/*Projects*/}
          <ProjectCards projects={projects}/>

         <section className="mt-16 text-left max-w-2xl rounded-lg shadow-md p-6 shadow-[#7ee2d7]" >
          <h2 className="text-2xl font-semibold mb-4 text-[#5648B7]">My Approach to Projects</h2>
          <p className="text-gray-700 leading-relaxed">
                I like to begin every project by carefully analyzing the requirements and breaking them into clear, achievable milestones. 
    From there, I leverage AI tools - to brainstorm ideas, speed up development, and refine my results step by step - alongside modern development practices to tackle each milestone efficiently.
     This approach helps me stay focused, build efficiently, and deliver solutions that are both creative and functional.
          </p>
         </section>

         <section className="mt-5 text-center">
          <p className=" mb-4">Interested in collaborating or hiring me for your next project?</p>
         <Link href="/Contact"  className="bg-[#5648B7] text-white px-6 py-2 rounded-lg hover:bg-[#453aa2] transition view-work-btn">
         Let’s Work Together
          </Link>
         </section>

        </div>
    )
}

export default ServicesPage;