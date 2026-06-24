

import { ProjectsCardsProps } from "@/interfaces";

import { NextApiRequest, NextApiResponse } from "next";

export const projects:ProjectsCardsProps[] = [
 {
    id: 0,
    title: "Job Harbor Application",
    type: "personal",
    description:
      "An interactive job board platform that connects talent with opportunities using Next.js and Tailwind CSS.",
    image: "/jobharbor.png",
    link: "https://job-harbor-platform.vercel.app/",
    tags: ["Next.js", "API Integration"],
    details: `
      <h2 class="text-xl font-semibold mb-2">🌐 Job Harbor Application</h2>
      <p>Building an Interactive Job Board Platform (Web) - ProDev FE</p>

      <p class="mt-3">
        This project is a real-world case study focused on building an interactive job board platform.
        It provides hands-on experience in developing responsive, feature-rich applications with modern frontend technologies,
        while emphasizing state management, accessibility, and usability.
      </p>

      <h3 class="text-lg font-semibold mt-4">📖 Overview</h3>
      <ul class="list-disc ml-5 space-y-1">
        <li>Explore and filter job postings.</li>
        <li>View detailed job descriptions.</li>
        <li>Apply directly through accessible application forms.</li>
      </ul>

      <p class="mt-3">
        The platform highlights API integration for dynamic job data, advanced filtering techniques, and responsive design that works seamlessly on all devices.
      </p>

      <h3 class="text-lg font-semibold mt-4">🎯 Project Goals</h3>

      <h4 class="font-semibold mt-2">🔗 API Integration</h4>
      <ul class="list-disc ml-5 space-y-1">
        <li>Dynamically fetch and display job postings from a backend API.</li>
        <li>Handle loading states and errors gracefully.</li>
      </ul>

      <h4 class="font-semibold mt-3">🔍 Advanced Filtering</h4>
      <ul class="list-disc ml-5 space-y-1">
        <li>Category</li>
        <li>Location</li>
        <li>Experience Level (Entry-Level, Mid-Level, Senior-Level)</li>
      </ul>

      <h4 class="font-semibold mt-3">📱 Responsive & Accessible Design</h4>
      <p>Provide a smooth experience across desktop, tablet, and mobile devices.</p>

      <h3 class="text-lg font-semibold mt-4">🛠️ Technologies Used</h3>
      <ul class="list-disc ml-5 space-y-1">
        <li><strong>Next.js & TypeScript</strong> – For dynamic UI and reusable components.</li>
        <li><strong>Context API</strong> – For managing state efficiently in a scalable way.</li>
        <li><strong>Tailwind CSS</strong> – For modern, utility-first, responsive design.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4">🚀 Key Features</h3>
      <ol class="list-decimal ml-5 space-y-2">
        <li>
          <strong>API Data Integration:</strong> Fetches job postings dynamically from a backend API with proper loading and error handling.
        </li>
        <li>
          <strong>Filtering Options:</strong> Filter by Category, Location, and Experience.
        </li>
        <li>
          <strong>Responsive Design:</strong> Fully responsive and accessible.
        </li>
        <li>
          <strong>Job Application Forms:</strong> Accessible, user-friendly forms with input validation.
        </li>
      </ol>
    `,
  },

  {
    id: 1,
    title: "Where in the World",
    type: "personal",
    description:
      "A Next.js + TypeScript app using the REST Countries API to display countries and their details.",
    image: "/whereintheworldapp.png",
    link: "https://where-in-the-world-five-roan.vercel.app/",
    tags: ["Next.js", "API Integration"],
    details: `
      <h2 class="text-xl font-semibold mb-2">🌍 Where in the World</h2>
      <p>
        A responsive Next.js + TypeScript application that allows users to explore countries around the world using the REST Countries API.
        Built with Tailwind CSS, this project includes dark/light mode support and dynamic routing for detailed country pages.
      </p>

      <h3 class="text-lg font-semibold mt-4">🚀 Features</h3>
      <ul class="list-disc ml-5 space-y-1">
        <li>🔍 Search countries by name</li>
        <li>🌎 View detailed country information</li>
        <li>🌓 Toggle between light and dark themes</li>
        <li>🗺️ Filter countries by region</li>
        <li>⚡ Fast and responsive UI built with Next.js and Tailwind CSS</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4">🧩 Components Overview</h3>
      <ul class="list-disc ml-5 space-y-1">
        <li><strong>SearchBar:</strong> Handles country search functionality.</li>
        <li><strong>CountryCard:</strong> Displays flag, population, and region.</li>
        <li><strong>CountryList:</strong> Maps and renders multiple CountryCard components.</li>
        <li><strong>Layout:</strong> Wrapper component containing header, footer, and theme toggle.</li>
      </ul>
    `,
  },
    {
    id: 2,
    title: "Wizzy Graphics Portfolio",
    type: "client",
    description:
      "A professional portfolio website for Wizzy’s Graphics, a creative studio specializing in branding and visual identity design.",
    image: "/wizzygraphics.png",
    link: "https://wize-creation.vercel.app/",
    tags: ["Client Project", "Branding", "Portfolio"],
    details: `
      <h2 class="text-xl font-semibold mb-2">🎨 Wizzy’s Graphics</h2>
      <p>
        Wizzy’s Graphics is a creative studio led by Matthew Wisdom Efe, a Visual Identity Designer based in Warri, Nigeria.
        The brand focuses on clarity, consistency, and purpose in visual communication.
      </p>

      <h3 class="text-lg font-semibold mt-4">🧠 Project Overview</h3>
      <p>
        This project involved designing and presenting Wizzy’s services through a clean, professional portfolio website
        that reflects the studio’s design philosophy.
      </p>

      <h3 class="text-lg font-semibold mt-4">🛠️ Services Highlighted</h3>
      <ul class="list-disc ml-5 space-y-1">
        <li><strong>Visual Identity Design</strong> – Complete brand systems.</li>
        <li><strong>Logo Design</strong> – Research-driven, strategic logos.</li>
        <li><strong>Brand Strategy & Concept Development</strong></li>
        <li><strong>Brand Guidelines</strong> – Usage consistency.</li>
        <li><strong>Marketing & Promotional Design</strong></li>
        <li><strong>Social Media Design</strong></li>
        <li><strong>Print Design</strong> – Business cards, brochures, letterheads.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4">🎯 Outcome</h3>
      <p>
        A polished, client-focused portfolio that clearly communicates services, strengthens brand identity,
        and positions Wizzy’s Graphics as a professional creative studio.
      </p>
    `,
  },
  {
  id: 3,
  title: "Space Tourism Website",
  type: "personal",
  description:
    "A multi-page responsive space tourism website built with HTML, CSS, and JavaScript, using dynamic content rendering from a local JSON file.",
  image: "/spacetourism.png",
  link: "https://space-tourism-multi-page-website-theta.vercel.app/",
  tags: ["HTML", "CSS", "JavaScript", "JSON", "Responsive Design"],
  details: `
    <h2 class="text-xl font-semibold mb-2">🚀 Space Tourism Website</h2>

    <p>
      A Frontend Mentor challenge focused on building a fully responsive multi-page space tourism website.
      The project simulates a real-world production workflow using semantic HTML, modular CSS, and vanilla JavaScript.
    </p>

    <h3 class="text-lg font-semibold mt-4">🌍 Overview</h3>
    <p>
      Users can navigate between Home, Destination, Crew, and Technology pages, each dynamically populated
      using a local <code>data.json</code> file instead of multiple static HTML pages.
    </p>

    <h3 class="text-lg font-semibold mt-4">⚙️ Key Features</h3>
    <ul class="list-disc ml-5 space-y-1">
      <li>Responsive design across mobile, tablet, and desktop</li>
      <li>Dynamic content rendering using JavaScript and JSON</li>
      <li>Interactive navigation with tab-based switching</li>
      <li>Mobile-friendly hamburger menu with toggle animation</li>
      <li>Reusable UI structure across all pages</li>
    </ul>

    <h3 class="text-lg font-semibold mt-4">🧠 What I Learned</h3>
    <ul class="list-disc ml-5 space-y-1">
      <li>Working with fetch API and local JSON data</li>
      <li>Dynamic DOM updates based on user interaction</li>
      <li>Improved responsive layout strategy (mobile-first workflow)</li>
      <li>Better project architecture by replacing multiple HTML pages with a data-driven approach</li>
    </ul>

    <h3 class="text-lg font-semibold mt-4">🛠️ Technologies Used</h3>
    <ul class="list-disc ml-5 space-y-1">
      <li>HTML5</li>
      <li>CSS3 (Flexbox, Media Queries)</li>
      <li>Vanilla JavaScript</li>
      <li>JSON data handling</li>
    </ul>
  `,
},
{
  id: 4,
  title: "Product List with Cart",
  type: "personal",
  description:
    "A fully interactive ecommerce-style product list built with React and Tailwind CSS, featuring cart management, quantity controls, and order confirmation modal.",
  image: "/productlistcart.png",
  link: "https://product-list-with-cart-lovat-chi.vercel.app/",
  tags: ["React", "Tailwind CSS", "State Management", "Frontend Mentor"],

  details: `
    <h2 class="text-xl font-semibold mb-2">🛒 Product List with Cart</h2>

    <p>
      A Frontend Mentor challenge rebuilt using React and Tailwind CSS, focusing on real-world ecommerce cart interactions.
      Users can add products to a cart, adjust quantities, remove items, and complete an order through a confirmation modal.
    </p>

    <h3 class="text-lg font-semibold mt-4">🌍 Overview</h3>
    <p>
      This project demonstrates a complete frontend cart system, including dynamic state updates,
      conditional rendering, and responsive UI design.
    </p>

    <h3 class="text-lg font-semibold mt-4">⚙️ Key Features</h3>
    <ul class="list-disc ml-5 space-y-1">
      <li>Add products to cart dynamically</li>
      <li>Increase and decrease item quantities</li>
      <li>Remove items from cart</li>
      <li>Live cart total calculation using reduce()</li>
      <li>Order confirmation modal with full summary</li>
      <li>Reset cart after order completion</li>
      <li>Responsive design across all devices</li>
    </ul>

    <h3 class="text-lg font-semibold mt-4">🧠 What I Learned</h3>
    <ul class="list-disc ml-5 space-y-1">
      <li>Advanced React state management patterns</li>
      <li>Working with arrays (map, filter, reduce, find)</li>
      <li>Conditional rendering for UI states</li>
      <li>Component composition and reusable UI logic</li>
      <li>Building modal dialogs and overlay UX patterns</li>
      <li>Improved accessibility awareness (ARIA roles, button labels)</li>
    </ul>

    <h3 class="text-lg font-semibold mt-4">🛠️ Technologies Used</h3>
    <ul class="list-disc ml-5 space-y-1">
      <li>React (Hooks: useState)</li>
      <li>Tailwind CSS</li>
      <li>JavaScript (ES6+)</li>
      <li>Frontend Mentor API-free data handling</li>
    </ul>

    <h3 class="text-lg font-semibold mt-4">🎯 Outcome</h3>
    <p>
      A fully functional ecommerce-style frontend application demonstrating strong understanding of React fundamentals,
      UI state management, and modern frontend architecture.
    </p>
  `,
}
];
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(projects);
}
