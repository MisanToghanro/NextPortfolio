import ProjectCards from "@/Components/Projects/ProjectCards";
import Link from "next/link";
import { projects } from "../api/projects";
import Carousel from "@/Components/MotionCarousel";



const services = [
  {
    title: "React & Next.js Development",
    description:
      "Building modern, scalable and high-performance web applications tailored to your business needs.",
    features: [
      "Responsive Website Development",
      "SEO & Performance Optimization",
      "API Integration",
      "Tailwind CSS UI Development",
    ],
  },
  {
    title: "Responsive Web & UI Design",
    description:
      "Designing intuitive, accessible and mobile-first interfaces that create engaging user experiences.",
    features: [
      "Responsive Layouts",
      "Cross Browser Compatibility",
      "UI & UX Improvements",
      "Performance Optimization",
    ],
  },
];

const ServicesPage = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden px-6 py-28 max-w-6xl mx-auto"
    >
      {/* Background Blur */}
      <div className="absolute -top-20 -left-24 h-72 w-72 rounded-full bg-[#41C9B9]/15 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#5648B7]/15 blur-3xl"></div>

      {/* Hero */}
      <div className="relative text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#41C9B9]/30 bg-[#41C9B9]/10 px-5 py-2 text-sm font-medium text-[#41C9B9]">
          What I Offer
        </span>

        <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#5648B7]">
          Services Designed Around{" "}
          <span className="text-[#41C9B9] pt-5">
            Modern Web Development
          </span>
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-500">
          I help businesses, startups and individuals build responsive,
          accessible and high-performance web applications using modern
          frontend technologies.
        </p>
      </div>

      {/* Services */}
      <div className="grid lg:grid-cols-2 gap-8 mt-20">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-3xl border border-[#41C9B9]/20 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#41C9B9] hover:shadow-2xl hover:shadow-[#41C9B9]/10"
          >
            <h3 className="text-2xl font-bold text-[#5648B7]">
              {service.title}
            </h3>

            <p className="mt-4 leading-7 text-gray-500">
              {service.description}
            </p>

            <ul className="mt-8 space-y-4">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#41C9B9]/10 text-[#41C9B9] font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                   </svg>

                  </span>

                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
 
     <section className="mt-24">
      <Carousel/>
     </section>
      


      {/* Projects */}
      <section className="mt-32">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#41C9B9]/30 bg-[#41C9B9]/10 px-5 py-2 text-sm font-medium text-[#41C9B9]">
              Portfolio
            </span>

            <h2 className="mt-5 text-4xl font-bold text-[#5648B7]">
              Featured Projects
            </h2>

            <p className="mt-4 max-w-2xl text-gray-500">
              A selection of projects showcasing my experience with React,
              Next.js, TypeScript, Tailwind CSS and modern frontend
              development.
            </p>
          </div>

          <Link
            href="/Projects"
            className="inline-flex items-center gap-2 font-medium text-[#41C9B9] hover:gap-3 transition-all"
          >
            View All Projects

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </div>

        <ProjectCards projects={projects.slice(0, 3)} />
      </section>
    </section>
  );
};

export default ServicesPage;