import Link from "next/link";

const AboutPage = () => {
  return (
    <section
      id="about"
      className="min-h-screen max-w-6xl mx-auto px-6 py-24"
    >
      {/* Heading */}
      <div className="text-center mb-20">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#41C9B9]/30 bg-[#41C9B9]/10 px-5 py-2 text-sm font-medium text-[#41C9B9] shadow-[0_0_30px_rgba(65,201,185,0.15)]">
          About Me
        </span>

        <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#5648B7]">
          My Journey Into Web Development
        </h2>
      </div>

      {/* About Content */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div className="flex flex-col items-center">

          <img
            src="/PortfolioPic.jpg"
            alt="Misan Toghanro"
            className="w-72 h-72 rounded-3xl object-cover shadow-xl"
          />

          <Link
            href="https://drive.google.com/file/d/1QurSm5JfXjNRetZPewsM_zWGw70JJTMe/view?usp=sharing"
            target="_blank"
            className="mt-8 rounded-full border border-[#5648B7] px-6 py-3 text-[#5648B7] hover:bg-[#5648B7] hover:text-white transition"
          >
            📄 View Resume
          </Link>

        </div>

        {/* Right */}
        <div className="space-y-6 text-gray-500 text-lg leading-8">

          <p>
            Hi, I'm{" "}
            <span className="font-semibold text-[#5648B7]">
              Misan Toghanro
            </span>
            , a Frontend Developer and Software Engineering student with a
            passion for building modern web experiences.
          </p>

          <p>
            My journey into web development began in 2024 while exploring what
            I wanted to study at university. A family member introduced me to
            web development, and I was immediately drawn to the idea of creating
            websites and applications that people could interact with every day.
          </p>

          <p>
            That curiosity led me to enroll in the ALX Africa Frontend
            Development Program, where I developed a strong foundation in
            modern frontend technologies. Around the same time, I chose
            Software Engineering as my major at the Federal University of
            Petroleum Resources, where I'm continuing to grow as a developer.
          </p>

          <p>
            Today, I'm constantly learning, building projects, and exploring
            new technologies. My goal is to create digital experiences that are
            fast, accessible, and enjoyable to use while continuously improving
            my skills as a software engineer.
          </p>

        </div>
      </div>


      {/* Journey Timeline */}
<section className="mt-18">

  <div className="text-center mb-14">
    <span className="inline-flex items-center gap-2 rounded-full border border-[#41C9B9]/30 bg-[#41C9B9]/10 px-5 py-2 text-sm font-medium text-[#41C9B9]">
      My Journey
    </span>
  </div>

  <div className="relative border-l-2 border-[#41C9B9]/30 ml-4 space-y-14">

    {/* 2024 */}
    <div className="relative pl-10">

      <div className="absolute -left-2.75 top-2 h-5 w-5 rounded-full bg-[#41C9B9]"></div>

      <h3 className="text-2xl font-bold text-[#5648B7]">
        2024
      </h3>

      <p className="mt-3 text-lg font-medium text-gray-500">
        Started My Web Development Journey
      </p>

      <p className="mt-3 leading-8 text-gray-500">
        My interest in web development began while deciding what I wanted to
        study at university. After being introduced to frontend development, I
        enrolled in the <strong>ALX Africa Frontend Development Program</strong>,
        where I learned HTML, CSS, JavaScript, React, and built my first
        responsive web applications.
      </p>

   <Link
  href="https://savanna.alxafrica.com/certificates/7YL6FTfz5p"
  target="_blank"
  className="group inline-flex items-center gap-2 mt-5 font-medium text-[#41C9B9] transition-colors hover:text-[#5648B7]"
>
  <span>View Certificate</span>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
    />
  </svg>
</Link>

    </div>

    {/* 2025 */}
    <div className="relative pl-10">

      <div className="absolute -left-2.75 top-2 h-5 w-5 rounded-full bg-[#41C9B9]"></div>

      <h3 className="text-2xl font-bold text-[#5648B7]">
        2025
      </h3>

      <p className="mt-3 text-lg font-medium text-gray-500">
        Strengthening My Skills
      </p>

      <p className="mt-3 leading-8 text-gray-500">
        Continued my frontend journey through the
        <strong> ALX ProDev Frontend Program</strong> while studying
        <strong> Software Engineering</strong> at the Federal University of
        Petroleum Resources. During this period, I built projects with
        React, Next.js, TypeScript and Tailwind CSS, gaining experience in
        creating scalable, accessible and high-performance web applications.
      </p>

      <Link
  
href="https://savanna.alxafrica.com/certificates/McZJF6s8BN"
  target="_blank"
  className="group inline-flex items-center gap-2 mt-5 font-medium text-[#41C9B9] transition-colors hover:text-[#5648B7]"
>
  <span>View Certificate</span>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
    />
  </svg>
</Link>

    </div>

    {/* 2026 */}
    <div className="relative pl-10">

      <div className="absolute -left-2.75 top-2 h-5 w-5 rounded-full bg-[#41C9B9] animate-pulse"></div>

      <h3 className="text-2xl font-bold text-[#5648B7]">
        2026 — Present
      </h3>

      <p className="mt-3 text-lg font-medium text-gray-500">
        Building Real-World Solutions
      </p>

      <p className="mt-3 leading-8 text-gray-500">
        Today, I'm focused on building production-ready frontend applications,
        collaborating on real-world projects, continuously learning modern web
        technologies, and expanding my skills beyond the frontend. My goal is
        to create products that are fast, intuitive, and make a meaningful
        impact for users and businesses.
      </p>

    </div>

  </div>

</section>


    </section>
  );
};

export default AboutPage;