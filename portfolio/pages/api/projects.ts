

import { ProjectsCardsProps } from "@/interfaces";

import { NextApiRequest, NextApiResponse } from "next";

export const projects:ProjectsCardsProps[] = [
 {
    id: 0,
    title: "Job Harbor Application",
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
    title: "Dictionary Web App",
    description:
      "A React app using the Dictionary API to search for words and view detailed results.",
    image: "/dictionaryapp.png",
    link: "https://dictionary-app-wine-mu.vercel.app/",
    tags: ["React", "API Integration"],
    details: `
      <h2 class="text-xl font-semibold mb-2">📖 Dictionary App</h2>
      <p>
        A React-based web application that allows users to search for word definitions using the Free Dictionary API.
      </p>

      <h3 class="text-lg font-semibold mt-4">🔧 Features</h3>
      <ul class="list-disc ml-5 space-y-1">
        <li>🔍 <strong>Search for Words:</strong> Lookup definitions and details for any word.</li>
        <li>📘 <strong>API Integration:</strong> Displays results returned by the Free Dictionary API.</li>
        <li>⚠️ <strong>Form Validation:</strong> Prevents submission of empty input fields.</li>
        <li>🔊 <strong>Audio Playback:</strong> Play pronunciation audio when available.</li>
        <li>🌗 <strong>Theme Toggle:</strong> Switch between light and dark themes.</li>
        <li>📱 <strong>Responsive Layout:</strong> Optimized for mobile, tablet, and desktop.</li>
        <li>🖱️ <strong>Accessible Interactions:</strong> Includes hover and focus states for usability.</li>
      </ul>
    `,
  },

  {
    id: 3,
    title: "Weather App",
    description:
      "A weather app that allows users to search for current weather conditions in various cities.",
    image: "/weatherapp.png",
    link: "https://open-weather-app-lovat.vercel.app/",
    tags: ["React", "API Integration"],
    details: `
      <h2 class="text-xl font-semibold mb-2">🌤️ Weather App</h2>
      <p>
        The Weather App allows users to search for current weather conditions in various cities using a public weather API.
      </p>

      <h3 class="text-lg font-semibold mt-4">🔍 Features</h3>
      <ul class="list-disc ml-5 space-y-1">
        <li><strong>Search by City:</strong> Get real-time weather information.</li>
        <li><strong>🌡️ Temperature:</strong> Displays temperature in Celsius or Fahrenheit.</li>
        <li><strong>💧 Humidity:</strong> Shows humidity percentage.</li>
        <li><strong>💨 Wind Speed:</strong> Displays wind speed in km/h or mph.</li>
        <li><strong>🌦️ Weather Condition Icon:</strong> Visual icons for weather types.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4">📡 API Integration</h3>
      <p>
        Utilizes a public weather API to fetch up-to-date weather data based on user input.
      </p>
    `,
  },
];
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(projects);
}
