import Link from "next/link";

const HomePage = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

        {/* Small Badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-[#41C9B9]/30 bg-[#41C9B9]/10 px-5 py-2 text-sm font-medium text-[#41C9B9] shadow-[0_0_30px_rgba(65,201,185,0.15)]">
          <span className="h-2 w-2 rounded-full bg-[#41C9B9] animate-pulse"></span>
            Learn • Build • Deploy
          </span>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#5648B7]">
          Building
          <br />
          <span className="text-[#41C9B9]">
            Modern Web Experiences
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-lg md:text-xl leading-8 text-gray-600">
          Frontend Developer specializing in{" "}
          <span className="font-semibold text-[#5648B7]">
            React, Next.js, TypeScript
          </span>{" "}
          and{" "}
          <span className="font-semibold text-[#5648B7]">
            Tailwind CSS
          </span>
          .
          <br />
          I build fast, responsive and accessible web applications that help
          businesses create meaningful digital experiences.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">

          <Link
            href="#services"
            className="rounded-full bg-[#5648B7] px-8 py-4 text-white font-medium transition hover:scale-105 hover:bg-[#473aa3]"
          >
            View My Work
          </Link>

          <Link
            href="#contact"
            className="rounded-full border border-[#5648B7] px-8 py-4 font-medium text-[#5648B7] transition hover:bg-[#5648B7] hover:text-white"
          >
            Let's Connect
          </Link>

        </div>

        {/* Resume Link */}
        <Link
          href="https://drive.google.com/file/d/1QurSm5JfXjNRetZPewsM_zWGw70JJTMe/view?usp=sharing"
          target="_blank"
          className="mt-8 text-gray-500 hover:text-[#41C9B9] transition"
        >
          📄 View Resume
        </Link>

      </div>
    </section>
  );
};

export default HomePage;
