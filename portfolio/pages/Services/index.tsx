
import ProjectTypeCards from "@/Components/Projects/ProjectTypeCards";
import TechStackCard from "@/Components/TechStack/TechStackCard";
import { techStack } from "@/data/techstack";
import Link from "next/link";


const ServicesPage: React.FC = () => {

    return(
        <div className="min-h-screen flex flex-col items-center text-center px-6 py-12 max-w-4xl mx-auto space-y-10 service-page">
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




            


        </div>
    )
}

export default ServicesPage;