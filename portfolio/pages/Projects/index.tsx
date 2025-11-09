
import Link from "next/link";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const ProjectsPage: React.FC = () => {

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
         <section className="mt-10 text-center">
           <h2 className="font-semibold mb-10">Heres a snapshot of my work in action</h2>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className=" rounded-md overflow-hidden shadow-md shadow-blue-400 hover:shadow-blue-500 hover:scale-105 cursor-pointer transition">
              <img src="jobharbor.png" alt="Job Harbor Project" className="w-full h-40 object-cover" />
              <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Job Harbor Application</h3>
              <p className="text-md mb-3 text-left text-gray-600">
                An interactive job board platform that connects talent with opportunities using Next.js and Tailwind CSS.
                </p>
              <a href="https://job-harbor-platform.vercel.app/" target="blank" className="text-blue-500 font-medium hover:underline m-2">View Project</a>
              </div>

              <div className="p-4 flex gap-2 justify-center">
              <span className="inline-block bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
                Next.js
              </span>

              <span className="inline-block bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full">
                 API Integration
              </span>
              </div>

            </div>

            <div className=" rounded-md overflow-hidden shadow-md shadow-blue-400 hover:shadow-blue-500 hover:scale-105 cursor-pointer transition">
              <img  src="whereintheworldapp.png" alt="Where in the World App" className="w-full h-40 object-cover"/>

              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2  text-gray-800">Where in the World</h3>
              <p className="text-md mb-3 text-left text-gray-600">
                 A Next.js + TypeScript app using the <a href="https://restcountries.com" className="font-semibold underline">REST Countries API</a> to display countries and their details.
              </p>
              <a href="https://where-in-the-world-five-roan.vercel.app/" target="blank" className="text-blue-500  hover:underline m-2 font-medium">View Project</a>
              </div>

              <div className="p-4 flex gap-2 justify-center">
              <span className="inline-block bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
                Next.js
              </span>

              <span className="inline-block bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full">
                 API Integration
              </span>
              </div>

            </div>

            <div className=" rounded-md overflow-hidden shadow-md shadow-blue-400 hover:shadow-blue-500 hover:scale-105 cursor-pointer transition">
              <img src="dictionaryapp.png" alt="Dictionary web app" className="w-full h-40 object-cover"/>

              <div className="p-4">
              <h3 className="font-semibold text-lg mb-2  text-gray-800">Dictionary web app</h3>
              <p className="text-md mb-3 text-left text-gray-600">
                A React(JavaScript) app using the <a href="https://dictionaryapi.dev/" className="font-semibold underline">Dictionary API </a> to search for words and
               see the free Dictionary API's response for the searched word.
              </p>
              <a href="https://dictionary-app-wine-mu.vercel.app/" target="blank" className="text-blue-500  hover:underline m-2 font-medium">View Project</a>
              </div>

                <div className="p-4 flex gap-2 justify-center">
              <span className="inline-block bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
                React
              </span>

              <span className="inline-block bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full">
                 API Integration
              </span>
              </div>

            </div>

            <div className=" rounded-md overflow-hidden shadow-md shadow-blue-400 hover:shadow-blue-500 hover:scale-105 cursor-pointer transition">
              <img src="/weatherapp.png" alt="Weather web app" className="w-full h-40 object-cover"/>

              <div className="p-4">
              <h3 className="font-semibold text-lg mb-2  text-gray-800">Weather App</h3>
              <p className="text-md mb-3 text-left text-gray-600">
                The Weather App allows users to search for current weather conditions in various cities using a public weather API.
              </p>
              <a href="https://open-weather-app-lovat.vercel.app/" target="blank" className="text-blue-500  hover:underline m-2 font-medium">View Project</a>
              </div>

               <div className="p-4 flex gap-2 justify-center">
              <span className="inline-block bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
                React
              </span>

              <span className="inline-block bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full">
                 API Integration
              </span>
              </div>

            </div>

           </div>
         </section>

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

export default ProjectsPage;