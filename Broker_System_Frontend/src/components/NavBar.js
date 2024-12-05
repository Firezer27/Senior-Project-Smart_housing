"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-teal-400 via-emerald-500 to-teal-600 text-gray-100 shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">DirectLink</div>

        {/* Menu for larger screens */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <a
              href="#home"
              className="hover:text-emerald-300 transition duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-emerald-300 transition duration-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#properties"
              className="hover:text-emerald-300 transition duration-200"
            >
              Properties
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-emerald-300 transition duration-200"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex space-x-4">
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition duration-200">
            Sign In
          </button>
          <button className="bg-transparent border border-emerald-900 text-emerald-100 px-4 py-2 rounded-lg hover:bg-emerald-700 hover:text-white transition duration-200">
            Sign Up
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gradient-to-r from-teal-400 via-emerald-500 to-teal-600 text-gray-100 flex flex-col items-center space-y-4 py-6">
          <li>
            <a
              href="#home"
              className="hover:text-emerald-300 transition duration-200"
              onClick={toggleMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-emerald-300 transition duration-200"
              onClick={toggleMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#properties"
              className="hover:text-emerald-300 transition duration-200"
              onClick={toggleMenu}
            >
              Properties
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-emerald-300 transition duration-200"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>
          <li>
            <button
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition duration-200 w-full text-center"
              onClick={toggleMenu}
            >
              Sign In
            </button>
          </li>
          <li>
            <button
              className="bg-transparent border border-emerald-600 text-emerald-100 px-4 py-2 rounded-lg hover:bg-emerald-700 hover:text-white transition duration-200 w-full text-center"
              onClick={toggleMenu}
            >
              Sign Up
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
