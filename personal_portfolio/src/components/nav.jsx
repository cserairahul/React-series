import React, { useState, useEffect } from "react";

const Nav = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);



  return (
    <nav className="bg-blue-600 dark:bg-gray-800 text-white fixed top-0 left-0 w-full shadow-md z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Custom Signature Logo */}
        <div className="flex items-center">
          <span className="text-white text-2xl font-handwritten">{`<`}</span>
          <h1 className="text-white text-2xl font-handwritten mx-2">Rahul Kumar Ray</h1>
          <span className="text-white text-2xl font-handwritten">{`/>`}</span>
        </div>

        {/* Hamburger Menu (for smaller screens) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden block text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <div
          className={`md:flex items-center space-x-6 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <li>
              <a href="#home" className="block py-2 px-4 hover:bg-blue-700 rounded">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block py-2 px-4 hover:bg-blue-700 rounded">
                About
              </a>
            </li>
            <li>
              <a href="#blog" className="block py-2 px-4 hover:bg-blue-700 rounded">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="block py-2 px-4 hover:bg-blue-700 rounded">
                Contact
              </a>
            </li>
          </ul>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center justify-center p-2 bg-gray-200 dark:bg-gray-600 rounded-full focus:outline-none ml-4"
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v2m0 14v2m9-9h-2m-14 0H3m16.364-7.364l-1.414 1.414m-11.314 0L4.636 4.636m0 14.728l1.414-1.414m11.314 0l1.414 1.414M12 5a7 7 0 100 14 7 7 0 000-14z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-800 dark:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3.1A8.9 8.9 0 003.1 12c0 4.9 3.9 8.9 8.9 8.9A8.9 8.9 0 1012 3.1z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
