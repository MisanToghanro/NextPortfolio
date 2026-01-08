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

const TechStackCard: React.FC<TechStackCards> = ({ techStack }) => {
  const Icon = techStack.icon;

  return (
    <div className="p-6 shadow-md shadow-[#9bf0e6] rounded-xl hover:scale-105 transition cursor-pointer text-left">
      <div className="flex items-center gap-2 mb-2" style={{ color: techStack.color || "#5648B7" }}>
        {Icon && <Icon size={24} />} 
        <span className="font-semibold text-lg">{techStack.name}</span>
      </div>
      <p className="text-sm text-gray-600 font-medium">{techStack.description}</p>
    </div>
  );
};

export default TechStackCard;
