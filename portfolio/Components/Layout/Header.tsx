import Link from "next/link";
import { useState } from "react";

const Header: React.FC = () => {

    const [menu,setMenu] = useState(false);

  return (
    <header className="w-full flex justify-between items-center py-4 px-6 shadow-md ">
      <div className="text-2xl font-bold text-gray-900 ">
        Misan Toghanro
      </div>

      {/* Desktop Navigation */}
      <nav className="space-x-6 hidden md:flex">
        <Link href="/" className="hover:text-blue-500">Home</Link>
        <Link href="/About" className="hover:text-blue-500">About</Link>
        <Link href="/Contact" className="hover:text-blue-500">Contact</Link>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
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

    {menu && (
        <nav className="md:hidden absolute top-1/6  left-0 w-full bg-white flex flex-col items-center py-4 shadow-md">
         <Link href="/" className="py-2 hover:text-blue-500" onClick={() => setMenu(false)}>Home</Link>
          <Link href="/About" className="py-2 hover:text-blue-500" onClick={() => setMenu(false)}>About</Link>
          <Link href="/Contact" className="py-2 hover:text-blue-500" onClick={() => setMenu(false)}>Contact</Link>
        </nav>
      )}


    </header>
  )
}

export default Header;
