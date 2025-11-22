import Link from "next/link";
import { useState } from "react";
import DarkMode from "./DarkMode";

const Header: React.FC = () => {

    const [menu,setMenu] = useState(false);

  return (
<header className="w-full sticky top-0 z-50 backdrop-blur-md bg-[#5648B7]/70 shadow-md">
  
  {/* Desktop Navigation */}
  <div className="hidden md:flex justify-between items-center px-8 py-5 max-w-6xl mx-auto">

    {/* Logo */}
    <h2 className="text-2xl font-bold text-white">
      Misan <span className="text-[#41C9B9]">Toghanro</span>
    </h2>

    {/* Desktop Nav Links */}
    <nav className="space-x-8 text-gray-100 font-medium">
      <Link href="/" className="hover:text-[#41C9B9] transition">Home</Link>
      <Link href="/Services" className="hover:text-[#41C9B9] transition">Skills & Services</Link>
      <Link href="/Contact" className="hover:text-[#41C9B9] transition">Contact</Link>
      <Link href="/Blog" className="hover:text-[#41C9B9] transition">Blog</Link>
    </nav>

    <DarkMode/>
  </div>



  {/* Mobile Navigation */}
  <div className="md:hidden flex flex-col">
    
    {/* Mobile Top Bar */}
    <div className="flex justify-between items-center px-5 py-4">
      <h2 className="text-xl font-bold text-white">
        Misan <span className="text-[#41C9B9]">Toghanro</span>
      </h2>

       <DarkMode/>
      <button onClick={() => setMenu(!menu)} className="text-white">
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          {menu ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"/>
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
    </div>

    {/* Mobile Menu */}
    {menu && (
      <nav className="flex flex-col space-y-3 px-5 py-4 bg-[#5648B7] text-gray-100 animate-slideDown shadow-lg">
        <Link href="/" className="py-2 border-b border-[#41C9B9]/30 hover:text-[#41C9B9]">
          Home
        </Link>
        <Link href="/Services" className="py-2 border-b border-[#41C9B9]/30 hover:text-[#41C9B9]">
          Skills & Services
        </Link>
        <Link href="/Contact" className="py-2 border-b border-[#41C9B9]/30 hover:text-[#41C9B9]">
          Contact
        </Link>
        <Link href="/Blog" className="py-2 hover:text-[#41C9B9]">
          Blog
        </Link>
      </nav>
    )}
  </div>

</header>

  )
}

export default Header;
