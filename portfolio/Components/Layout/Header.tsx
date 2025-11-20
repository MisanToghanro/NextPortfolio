import Link from "next/link";
import { useState } from "react";

const Header: React.FC = () => {

    const [menu,setMenu] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-white/70">

      {/* Desktop Navigation */}
      <div className=" hidden md:flex justify-between p-6 shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 ">
        Misan Toghanro
      </h2>

      {/* Desktop Navigation Links*/}
      <nav className="space-x-6 hidden md:flex">
        <Link href="/" className="hover:text-blue-500">Home</Link>
        <Link href="/About" className="hover:text-blue-500">About</Link>
        <Link href="/Contact" className="hover:text-blue-500">Contact</Link>
        <Link href="/Blog" className="hover:text-blue-500">Blog</Link>
      </nav>
      </div>


       {/* Mobile Navigation */}
      <div className="md:hidden flex flex-col">

      <div className="flex justify-between p-4 shadow">
        
      <h2 className="text-2xl font-bold text-gray-900 ">
        Misan Toghanro
      </h2>

        <button
        onClick={() => setMenu(!menu)}
        >
        {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg" >
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
                d="M4 6h16M4 12h16M4 18h16"/>
            )}
          </svg>
        </button>
      </div>
            {/* Mobile Navigation Links*/}
        <div className="md:hidden shadow-md ">
             {menu && (
        <nav className="flex flex-col space-y-3 p-4 animate-slideDown">
         <Link href="/" className="py-2 hover:text-blue-500 border-b" onClick={() => setMenu(false)}>Home</Link>
          <Link href="/About" className="py-2 hover:text-blue-500 border-b" onClick={() => setMenu(false)}>About</Link>
          <Link href="/Contact" className="py-2 hover:text-blue-500 border-b" onClick={() => setMenu(false)}>Contact</Link>
          <Link href="/Blog" className="hover:text-blue-500 ">Blog</Link>
        </nav>
      )}
      </div>


      </div>

    </header>
  )
}

export default Header;
