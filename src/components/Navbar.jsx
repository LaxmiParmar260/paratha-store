import React, { useState } from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import logosvg from "../assets/restaurant-plate-svgrepo-com.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../features/theme/ThemeSlice";

const Navbar = () => {
  const dispatch = useDispatch(); // Fix dispatch
  const { mode } = useSelector((state) => state.darkMode); // Get the current dark mode state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={
        mode
          ? "bg-gray-700 text-white w-full font-title sticky top-0 z-50"
          : "bg-sky-900 text-white w-full font-title sticky top-0 z-50"
      }
    >
      <div className="px-5 xl:px-12 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <img className="h-12" src={logosvg} alt="Logo" />
          <span className="text-2xl font-bold ml-3">VEG-PARATHAS</span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex px-4 mx-auto font-heading space-x-12">
          <li>
            <Link className="hover:text-yellow-300 text-[18px]" to="/home">
              Home
            </Link>
          </li>
          <li>
            <a className="hover:text-yellow-300 text-[18px]" href="#About">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-yellow-300 text-[18px]" href="#menu">
              Services
            </a>
          </li>
          <li>
            <a className="hover:text-yellow-300 text-[18px]" href="#contact">
              Contact
            </a>
          </li>
        </ul>

        {/* Icons & Links */}
        <div className="hidden xl:flex items-center space-x-5">
          {/* Dark mode toggle */}
          <button
            onClick={() => dispatch(toggleDarkMode())} // Dispatch toggle action
            className="flex items-center justify-center p-3 rounded-full bg-gray-500 hover:bg-gray-400 transition duration-300 w-12 h-12"
          >
            <div className="flex items-center justify-center">
              {mode ? (
                <FaMoon className="h-6 w-6 text-yellow-400" /> // Moon icon for dark mode
              ) : (
                <FaSun className="h-6 w-6 text-yellow-400" /> // Sun icon for light mode
              )}
            </div>
          </button>

          <Link className="hover:text-gray-200" to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="xl:hidden flex items-center focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 hover:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="flex flex-col items-center xl:hidden bg-gray-900 text-white py-4 space-y-4">
          <li>
            <Link className="hover:text-yellow-300 text-[18px]" to="/home">
              Home
            </Link>
          </li>
          <li>
            <a className="hover:text-yellow-300 text-[18px]" href="#About">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-yellow-300 text-[18px]" href="#menu">
              Services
            </a>
          </li>
          <li>
            <a className="hover:text-yellow-300 text-[18px]" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
