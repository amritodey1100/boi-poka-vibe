import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkClass = ({ isActive }) =>
    `transition-colors text-sm xl:text-base font-medium ${
      isActive
        ? "text-green-600 border-2 border-green-600 rounded-lg px-3 py-2 xl:px-4 hover:bg-green-50"
        : "text-gray-600 hover:text-gray-800"
    }`;

  return (
    <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <NavLink to="/" className="text-xl sm:text-2xl font-bold text-black">
          Book Vibe
        </NavLink>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/listedBooks" className={navLinkClass}>
            Listed Books
          </NavLink>
          <NavLink to="/read" className={navLinkClass}>
            Pages to Read
          </NavLink>
        </div>

        {/* Desktop Sign In / Sign Up Buttons */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
          <button className="px-4 py-2 lg:px-6 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors text-sm lg:text-base">
            Sign In
          </button>
          <button className="px-4 py-2 lg:px-6 bg-cyan-400 text-white rounded-lg font-medium hover:bg-cyan-500 transition-colors text-sm lg:text-base">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-600 hover:text-gray-800 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
          <div className="flex flex-col space-y-3 pt-4">
            {/* Mobile Navigation Links */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 text-center font-medium transition-colors ${
                  isActive
                    ? "text-green-600 border-2 border-green-600 rounded-lg hover:bg-green-50"
                    : "text-gray-600 hover:text-gray-800"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/listedBooks"
              className={({ isActive }) =>
                `px-4 py-2 text-center font-medium transition-colors ${
                  isActive
                    ? "text-green-600 border-2 border-green-600 rounded-lg hover:bg-green-50"
                    : "text-gray-600 hover:text-gray-800"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Listed Books
            </NavLink>
            <NavLink
              to="/read"
              className={({ isActive }) =>
                `px-4 py-2 text-center font-medium transition-colors ${
                  isActive
                    ? "text-green-600 border-2 border-green-600 rounded-lg hover:bg-green-50"
                    : "text-gray-600 hover:text-gray-800"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Pages to Read
            </NavLink>

            {/* Mobile Sign In / Sign Up Buttons */}
            <div className="flex flex-col space-y-2 pt-2">
              <button className="px-6 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors">
                Sign In
              </button>
              <button className="px-6 py-2 bg-cyan-400 text-white rounded-lg font-medium hover:bg-cyan-500 transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
