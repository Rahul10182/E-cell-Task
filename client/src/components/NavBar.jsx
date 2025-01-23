import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`${
        isMenuOpen ? "h-[168px]" : "h-[64px]"
      } flex flex-col bg-white shadow-md px-6 py-4 transition-all duration-300 md:flex-row md:items-center md:justify-between`}
    >
      {/* Mobile Menu Toggle Icon */}
      <div className="absolute right-6 top-4 md:hidden">
        {isMenuOpen ? (
          <RxCross1
            className="text-2xl cursor-pointer text-gray-300"
            onClick={toggleMenu}
          />
        ) : (
          <TiThMenu
            className="text-2xl cursor-pointer text-gray-300"
            onClick={toggleMenu}
          />
        )}
      </div>

      {/* Desktop & Tablet Links - Aligned Right */}
      <div className="hidden md:flex space-x-6 ml-auto">
        <Link to="/second" className="hover:text-blue-400 transition">
          Home
        </Link>
        <Link to="/" className="hover:text-blue-400 transition">
          Grid
        </Link>
        <a
          href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          LinkedIn
        </a>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="flex flex-col items-center justify-center mt-6 md:hidden">
          <Link
            to="/"
            className="hover:text-blue-400 transition text-lg"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/grid"
            className="hover:text-blue-400 transition text-lg"
            onClick={toggleMenu}
          >
            Grid
          </Link>
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition text-lg"
            onClick={toggleMenu}
          >
            LinkedIn
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
