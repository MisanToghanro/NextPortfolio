
import Link from "next/link";
const AboutPage = () => {

    return (
             <section className="min-h-screen flex flex-col items-center text-center px-6 py-12 max-w-4xl mx-auto space-y-10 service-page">
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


                     <section className="mt-16 text-left max-w-2xl rounded-lg shadow-md p-6 shadow-[#7ee2d7]" >
          <h2 className="text-2xl font-semibold mb-4 text-[#5648B7]">My Approach to Projects</h2>
          <p className="text-gray-700 leading-relaxed">
                I like to begin every project by carefully analyzing the requirements and breaking them into clear, achievable milestones. 
    From there, I leverage AI tools - to brainstorm ideas, speed up development, and refine my results step by step - alongside modern development practices to tackle each milestone efficiently.
     This approach helps me stay focused, build efficiently, and deliver solutions that are both creative and functional.
          </p>
         </section>

          </section>
    )
}

export default AboutPage;