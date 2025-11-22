import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#5648B7] text-gray-100 py-8 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-6">

        {/* Left Section */}
        <p className="text-sm text-center md:text-left font-semibold">
          © {new Date().getFullYear()} 
          <span className="font-semibold text-[#41C9B9]"> Misan Toghanro</span>.  
          All rights reserved.
        </p>

        {/* Socials */}
        <div className="flex flex-col items-center md:items-end font-semibold">
          <h3 className="font-semibold text-lg mb-2 text-[#41C9B9]">
            Socials
          </h3>

          <div className="flex flex-row gap-4">
            <Link
              href="https://www.linkedin.com/in/misan-toghanro/"
              className="hover:text-[#41C9B9] transition">
              LinkedIn
            </Link>

            <Link
              href="https://github.com/MisanToghanro"
              className="hover:text-[#41C9B9] transition">
              GitHub
            </Link>

            <Link
              href="https://x.com/MisanToghanro"
              className="hover:text-[#41C9B9] transition">
              Twitter
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;


