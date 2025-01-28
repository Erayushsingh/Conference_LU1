import React, { useState } from 'react';

const LowerHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isPopupHovered, setIsPopupHovered] = useState(false);
  const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleHomeMenu = () => {
    setIsHomeMenuOpen(!isHomeMenuOpen); 
  };

  return (
    <>
      <div className="bg-blue-300 flex items-center p-2 border-t-4 text-lg border-b-4 border-red-400 w-full">

        {/* Mobile Menu Toggle Button */}
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
            <div
              className="relative"
              onMouseEnter={() => setIsHomeHovered(true)}
              onMouseLeave={() => setIsHomeHovered(false)}
            >
              <a href="/" className="hover:text-red-500">Home</a>

              {/* Pop-up on hover */}
              {(isHomeHovered || isPopupHovered) && (
                <div
                  className="absolute left-0  bg-white text-black p-2 rounded-md shadow-lg w-52 z-50"
                  onMouseEnter={() => setIsPopupHovered(true)}
                  onMouseLeave={() => setIsPopupHovered(false)}
                >
                  <p><a href="/home/aboutfoet" className="hover:text-blue-500">About FOET</a></p>
                  <p><a href="/home/aboutconference" className="hover:text-blue-500">About Conference</a></p>
                </div>
              )}
            </div>

            <a href="/conference" className="hover:text-red-500">Publications</a>
            <a href="/publications" className="hover:text-red-500">Submission</a>
            <a href="/awards" className="hover:text-red-500">Awards</a>
            <a href="/about-us" className="hover:text-red-500">Committee</a>
            <a href="/raasheegallery2025" className="hover:text-red-500">Gallery</a>

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

      {/* Mobile Menu  */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-300 flex flex-col items-start p-4">
          {/* Menu Heading */}
          <h2 className="text-xl font-semibold text-white mb-4">Menu</h2>

          {/* Home link with down arrow for mobile */}
          <div className="relative">
            <a 
              href="/"
              className="py-2 flex items-center justify-between hover:text-blue-700"
              onClick={(e) => {
                e.preventDefault(); // Prevent default link behavior
                toggleHomeMenu(); 
              }}
            >
              <span>Home</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`w-5 h-5 ${isHomeMenuOpen ? 'transform rotate-180' : ''}`}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            {/* Pop-up for mobile */}
            {isHomeMenuOpen && (
              <div
                className="absolute left-0 bg-white text-black p-2 rounded-md shadow-lg w-52 z-50"
                onClick={(e) => e.stopPropagation()} // Prevent the pop-up from closing when clicking inside
              >
                <p><a href="/home/aboutfoet" className="hover:text-blue-500">About FOET</a></p>
                <p><a href="/home/aboutconference" className="hover:text-blue-500">About Conference</a></p>
              </div>
            )}
          </div>

          <a href="/conference" className="py-2 hover:text-blue-700">Publications</a>
          <a href="/publications" className="py-2 hover:text-blue-700">Submission</a>
          <a href="/awards" className="py-2 hover:text-blue-700">Awards</a>
          <a href="/about-us" className="py-2 hover:text-blue-700">Committee</a>
          <a href="/raasheegallery2025" className="py-2 hover:text-red-500">Gallery</a>


          {/* Mobile Login Button */}
          <a
            href="/lko"
            className="mt-4 px-6 py-2 bg-blue-500 hover:bg-green-600 text-white rounded-md w-1/2 text-center"
          >
            Login
          </a>
        </div>
      )}
    </>
  );
};

export default LowerHeader;

