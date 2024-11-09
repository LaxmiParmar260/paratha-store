import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import logosvg from "../assets/restaurant-plate-svgrepo-com.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../features/theme/ThemeSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.darkMode);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { products } = useSelector((state) => state.cart);

  const cartItemCount = products.length;

  return (
    <nav
      className={`${
        mode ? "bg-gray-700" : "bg-sky-900"
      } text-white w-full font-title sticky top-0 z-50 h-15`}
    >
      <div className="xl:px-10 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img className="h-12" src={logosvg} alt="Logo" />
          <span className="text-2xl font-bold ml-3">VEG-PARATHAS</span>
        </div>

        {/* Desktop Menu - Hidden on screens smaller than 768px */}
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
        <div className="flex items-center space-x-5">
          <button
            onClick={() => dispatch(toggleDarkMode())}
            className="flex items-center justify-center p-3 rounded-full bg-gray-500 hover:bg-gray-400 transition duration-300 w-12 h-12"
          >
            {mode ? (
              <FaMoon className="h-6 w-6 text-yellow-400" />
            ) : (
              <FaSun className="h-6 w-6 text-yellow-400" />
            )}
          </button>

          <Link className="hover:text-gray-200 relative" to="/cart">
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
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-2 py-1">
                {cartItemCount}
              </span>
            )}
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

      {/* Mobile Menu - Only Visible When Toggled */}
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
