import React, { useState } from 'react';

const LowerHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  return (
    <>
      <div className="bg-blue-300 flex items-center p-2 border-t-4 text-lg border-b-4 border-red-400 w-full">

        {/* Mobile Menu Toggle Button (Hamburger) - Aligned to the left */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links - Desktop View */}
        <div className="hidden md:flex justify-between w-full items-center space-x-6 px-10">
          <div className="flex justify-between items-center gap-6 w-full">
            <a href="/" className="hover:text-red-500">Home</a>
            <a href="/conference" className="hover:text-red-500">Tracks</a>{/* Initially it was Conference */}
            <a href="/publications" className="hover:text-red-500">Submission</a>
            <a href="/awards" className="hover:text-red-500">Awards</a>
            <a href="/about-us" className="hover:text-red-500">About Us</a>

             {/* Login Button - Desktop View */}
          <a
            href="/lko"
            className="px-6 py-2 bg-blue-500 hover:bg-green-600 text-white rounded-md"
          >
            Login
          </a>
          </div>

        </div>
      </div>

      {/* Mobile Menu - This section is shown when `isMenuOpen` is true */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-300 flex flex-col items-start p-4">
          {/* Menu Heading */}
          <h2 className="text-xl font-semibold text-white mb-4">Menu</h2>

          <a href="/" className="py-2 hover:text-blue-700">Home</a>
          <a href="/conference" className="py-2 hover:text-blue-700">Conference</a>
          <a href="/publications" className="py-2 hover:text-blue-700">Submission</a>
          <a href="/research" className="py-2 hover:text-blue-700">Research</a>
          <a href="/awards" className="py-2 hover:text-blue-700">Awards</a>
          <a href="/about-us" className="py-2 hover:text-blue-700">About Us</a>

          {/* Mobile Login Button */}
          <a
            href="/lko"
            className="mt-4 px-6 py-2 bg-blue-500 hover:bg-green-600 text-white rounded-md w-1/2 text-center "
          >
            Login
          </a>
        </div>
      )}
    </>
  );
};

export default LowerHeader;
