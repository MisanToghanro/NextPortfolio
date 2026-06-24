import Link from "next/link";
import { useState } from "react";
import DarkMode from "./DarkMode";

const Header: React.FC = () => {

    const [menu,setMenu] = useState(false);

  return (
<header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 ">

<div className="backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 rounded-2xl shadow-lg ">

  {/* Desktop Navigation */}
  <div className="hidden md:flex justify-between items-center px-8 py-5 max-w-6xl mx-auto">

    {/* Logo */}
    <h2 className="text-2xl font-bold text-white">
      Misan <span className="text-[#41C9B9]">Toghanro</span>
    </h2>

    {/* Desktop Nav Links */}
   <nav className="flex items-center gap-8 text-white font-medium">
      <Link href="/" className="hover:text-[#41C9B9] transition">Home</Link>
      <Link href="/Services" className="hover:text-[#41C9B9] transition">Skills & Services</Link>
      <Link href="/Contact" className="hover:text-[#41C9B9] transition">Connect</Link>
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
      <nav className="flex flex-col space-y-3 px-5 py-4 bg-white/10 backdrop-blur-xl text-gray-100 animate-slideDown">
        <Link href="/" className="py-2 border-b border-[#41C9B9]/30 hover:text-[#41C9B9]" onClick={() => setMenu(false)}>
          Home
        </Link>
        <Link href="/Services" className="py-2 border-b border-[#41C9B9]/30 hover:text-[#41C9B9]" onClick={() => setMenu(false)}>
          Skills & Services
        </Link>
        <Link href="/Contact" className="py-2 border-b border-[#41C9B9]/30 hover:text-[#41C9B9]" onClick={() => setMenu(false)}>
          Connect
        </Link>
        <Link href="/Blog" className="py-2 hover:text-[#41C9B9]" onClick={() => setMenu(false)}>
          Blog
        </Link>
      </nav>
    )}
  </div>
 
</div>
  


</header>

  )
}

export default Header;
