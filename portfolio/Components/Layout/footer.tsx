import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10 text-center border-t border-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 p-4 text-center">
        
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="font-semibold text-white">Misan Toghanro</span>. All rights reserved.
        </p>

       {/*socials*/}
        <div className="flex flex-col ">
          <h3 className="font-semibold text-lg">Socials</h3>

          <div className="flex flex-row space-x-2">
          <Link href="https://www.linkedin.com/in/misan-toghanro/">LinkedIn</Link>
          <Link href="https://github.com/MisanToghanro">Github</Link>
          <Link href="https://x.com/MisanToghanro">Twitter</Link>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
