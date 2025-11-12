import React, { useState } from "react";
import { useEffect } from "react";
const BlogPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
   
    await fetch("https://formspree.io/f/mgvrvwon", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setSubmitted(true);
  };

    useEffect(() => {
    if (submitted) {
      setTimeout(() => {
        window.open("/7-Step-Website-Checklist-by-Misan-Toghanro.pdf", "_blank");
      }, 1000); 
    }
  }, [submitted]);

  return (
    <div className="min-h-screen px-6 py-12 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Improve Your Website in 7 Steps</h1>
      <p className="mb-6 text-gray-600">
        This guide covers quick, actionable steps to make your site more engaging, professional, and user-friendly.
      </p>

      <ol className="space-y-4 list-decimal pl-6">
        <li><strong>Make Your Site Mobile-Friendly</strong> – Test layouts on phones and tablets.</li>
        <li><strong>Use Consistent Colors + Fonts</strong> – Stick to 2–3 colors and 1–2 fonts.</li>
        <li><strong>Add Clear Calls to Action</strong> – Use “Contact,” “Shop,” or “Book Now.”</li>
        <li><strong>Use High-Quality Images</strong> – From sites like Unsplash, compressed via TinyPNG.</li>
        <li><strong>Simplify Navigation</strong> – 5 pages or fewer is ideal.</li>
        <li><strong>Show Testimonials</strong> – Builds instant trust.</li>
        <li><strong>Speed It Up</strong> – Test with PageSpeed Insights.</li>
      </ol>

      <div className="mt-10 p-6 bg-blue-50 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-3">📘 Download the Full Guide</h2>
        <p className="text-gray-700 mb-4">
          Enter your email below to get the downloadable version (PDF) instantly.
        </p>

        {submitted ? (
          <p className="text-green-600 font-medium">
            ✅ Thanks! Your guide is opening in a new tab.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition cursor-pointer hover:scale-105">
              Download Guide
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BlogPage;

