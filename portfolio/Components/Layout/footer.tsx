

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10 text-center border-t border-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
        
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="font-semibold text-white">Misan Toghanro</span>. All rights reserved.
        </p>

        <a href="#top" className="text-sm hover:text-white transition">
          ↑ Back to Top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
