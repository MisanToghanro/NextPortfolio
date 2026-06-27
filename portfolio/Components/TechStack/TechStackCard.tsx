import React from "react";

interface TechStackCardProps {
  name: string;
  description: string;
  icon: React.ElementType; 
  color?: string; 
}


interface TechStackCards {
  techStack: TechStackCardProps;
}

const TechStackCard = ({ techStack }: TechStackCards) => {
  const Icon = techStack.icon;

  return (
    <div className="group relative rounded-3xl border border-[#41C9B9]/20 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#41C9B9] hover:shadow-xl hover:shadow-[#41C9B9]/10">

      <div
        className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundColor: `${techStack.color}15`,
          color: techStack.color,
        }}
      >
        <Icon size={28} />
      </div>

      <h3 className="text-xl font-bold text-[#5648B7]">
        {techStack.name}
      </h3>

      <span className="mt-2 inline-block rounded-full bg-[#41C9B9]/10 px-3 py-1 text-xs font-medium text-[#41C9B9]">
        Core Technology
      </span>

      <p className="mt-5 leading-7 text-gray-500">
        {techStack.description}
      </p>

      <div className="mt-6 flex justify-end opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5 text-[#41C9B9]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
};

export default TechStackCard;
