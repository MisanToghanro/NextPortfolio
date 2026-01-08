
import Link from "next/link";

const ProjectTypeCards = () => {
  return (
    <section className="mt-16 w-full text-center">
      <h2 className="text-3xl font-bold mb-8 text-[#5648B7]">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Personal Projects */}
        <Link
          href="/Projects?type=personal"
          className="group p-8 rounded-2xl shadow-lg border border-[#41C9B9]/30 hover:-translate-y-2 transition bg-white service"
        >
          <h3 className="text-2xl font-semibold text-[#41C9B9] mb-3">
            Personal Projects
          </h3>
          <p className="text-gray-700 ">
            Hands-on projects built during my learning journey to strengthen
            frontend skills and explore modern technologies.
          </p>
          <span className="block mt-4 font-medium text-[#5648B7] group-hover:underline">
            View Projects →
          </span>
        </Link>

        {/* Client Projects */}
        <Link
          href="/Projects?type=client"
          className="group p-8 rounded-2xl shadow-lg border border-[#41C9B9]/30 hover:-translate-y-2 transition bg-white service"
        >
          <h3 className="text-2xl font-semibold text-[#41C9B9] mb-3">
            Client Projects
          </h3>
          <p className="text-gray-700 service">
            Real-world client work focused on solving business problems and
            delivering professional, polished solutions.
          </p>
          <span className="block mt-4 font-medium text-[#5648B7] group-hover:underline">
            View Projects →
          </span>
        </Link>
      </div>
    </section>
  );
};

export default ProjectTypeCards;
