import React, { useState } from "react";
import { Link } from "gatsby";
import linkedin from "../assets/linkedin.svg";

const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuClassName = isMenuOpen ? "block" : "hidden";
  const reverseMenuClassName = isMenuOpen ? "hidden" : "block";

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-gray-800">
      <div className="max-w-3xl mr-auto ml-auto mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${reverseMenuClassName} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className={`${menuClassName} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  activeClassName="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Anasayfa
                </Link>
                <Link
                  to="/about"
                  activeClassName="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Hakkımda
                </Link>
                <Link
                  to="/contact"
                  activeClassName="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  İletişim
                </Link>
              </div>
            </div>
          </div>
          <div className="justify-self-end">
            <a
              href="https://www.linkedin.com/in/cankucukyilmaz/"
              className="h-3"
            >
              <img src={linkedin} className=" mb-0" alt="Linkedin" />
            </a>
          </div>
        </div>
      </div>

      <div className={`${menuClassName} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            activeClassName="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
            className="text-gray-300 hover:bg-gray-700 block hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Anasayfa
          </Link>
          <Link
            to="/about"
            activeClassName="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
            className="text-gray-300 hover:bg-gray-700 block hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Hakkımda
          </Link>
          <Link
            to="/contact"
            activeClassName="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
            className="text-gray-300 hover:bg-gray-700 block hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            İletişim
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
