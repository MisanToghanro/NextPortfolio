
import { NextApiRequest, NextApiResponse } from "next";

export interface Technology {
  id: number;
  name: string;
  icon: string; 
  color: string;
  description: string;
}

const technologies: Technology[] = [
  {
    id: 1,
    name: "HTML",
    icon: "FaHtml5",
    color: "#E34F26",
    description:
      "The foundation of every webpage — I use it to structure content clearly and semantically.",
  },
  {
    id: 2,
    name: "CSS",
    icon: "FaCss3Alt",
    color: "#1572B6",
    description:
      "Used to style layouts, create responsive designs, and bring UI ideas to life.",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: "FaJs",
    color: "#F7DF1E",
    description:
      "Adds logic, interactivity, and dynamic behavior to the web apps I build.",
  },
  {
    id: 4,
    name: "React",
    icon: "FaReact",
    color: "#61DAFB",
    description:
      "My main UI library for building powerful, component-based applications.",
  },
  {
    id: 5,
    name: "Next.js",
    icon: "SiNextdotjs",
    color: "#000000",
    description:
      "A React framework I use to build fast, optimized, and SEO-friendly web apps.",
  },
  {
    id: 6,
    name: "Tailwind CSS",
    icon: "SiTailwindcss",
    color: "#06B6D4",
    description:
      "My go-to styling tool for building clean, responsive designs quickly.",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(technologies);
}
