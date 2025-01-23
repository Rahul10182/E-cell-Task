import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Detect current route

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isSquidGamePage = location.pathname === "/second";

  return (
    <nav
      className={`${
        isMenuOpen ? "h-[168px]" : "h-[64px]"
      } flex flex-col px-6 py-4 transition-all duration-300 md:flex-row md:items-center md:justify-between 
      ${isSquidGamePage ? "bg-black text-pink-500 border-b-4 border-pink-500" : "bg-white shadow-md"}`}
    >
      {/* Mobile Menu Toggle Icon */}
      <div className="absolute right-6 top-4 md:hidden">
        {isMenuOpen ? (
          <RxCross1
            className={`text-2xl cursor-pointer ${isSquidGamePage ? "text-pink-500" : "text-gray-300"}`}
            onClick={toggleMenu}
          />
        ) : (
          <TiThMenu
            className={`text-2xl cursor-pointer ${isSquidGamePage ? "text-pink-500" : "text-gray-300"}`}
            onClick={toggleMenu}
          />
        )}
      </div>

      {/* Squid Game Guard Symbols (Only for Squid Game Page) */}
      {isSquidGamePage && (
        <div className="hidden md:flex text-2xl font-bold absolute left-10 text-pink-500">
          🔺 ◼️ ⭕
        </div>
      )}

      {/* Desktop & Tablet Links - Aligned Right */}
      <div className="hidden md:flex space-x-6 ml-auto">
        <Link to="/second" className={`hover:text-pink-500 transition ${isSquidGamePage ? "text-white" : "text-black"}`}>
          Home
        </Link>
        <Link to="/" className={`hover:text-pink-500 transition ${isSquidGamePage ? "text-white" : "text-black"}`}>
          Grid
        </Link>
        <a
          href="https://www.linkedin.com/in/rahul-singh-3054862a6/"
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:text-pink-500 transition ${isSquidGamePage ? "text-white" : "text-black"}`}
        >
          LinkedIn
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
