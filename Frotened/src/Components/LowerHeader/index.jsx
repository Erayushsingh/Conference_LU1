// // import React from 'react'

// // const LowerHeader = () => {
// //   return (
// //     <>
// //         <div className='bg-blue-300 flex justify-around p-2 text-lg border-b-4 border-red-400 items-center'>
// //           <a href="/">Home</a>
// //           <a href="/conference">Conference</a>
// //           <a href="/publications">Submission</a>
// //           <a href="/research">Research</a>
// //           <a href="/awards">Awards</a>
// //           <a href="/about-us">About Us</a>
          
// //           {/* Login Button */}
// //           <a 
// //             href="/lko"
// //             className="px-6 py-2 bg-blue-500 hover:bg-green-600 text-white rounded-md"
// //           >
// //             Login
// //           </a>
// //         </div>
// //     </>
// //   )
// // }

// // export default LowerHeader;

// import React, { useState } from 'react'

// const LowerHeader = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
//   };

//   return (
//     <>
//       <div className='bg-blue-300 flex  items-center p-2 text-lg border-b-4 border-red-400'>

//         {/* Mobile Menu Toggle Button (Hamburger) - Aligned to the left */}
//         <div className="md:hidden flex items-center">
//           <button onClick={toggleMenu} className="text-white">
//             {isMenuOpen ? (
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* Navigation Links - Desktop View */}
//         <div className='flex justify-around'>
//             <div className="hidden  md:flex md:justify-around  gap-4 md:gap-6 w-auto">
//           <a href="/" className="hover:text-blue-700">Home</a>
//           <a href="/conference" className="hover:text-blue-700">Conference</a>
//           <a href="/publications" className="hover:text-blue-700">Submission</a>
//           <a href="/research" className="hover:text-blue-700">Research</a>
//           <a href="/awards" className="hover:text-blue-700">Awards</a>
//           <a href="/about-us" className="hover:text-blue-700">About Us</a>
//            {/* Login Button - Desktop View */}
//         <a 
//           href="/lko"
//           className="hidden md:block px-6 py-2 bg-blue-500 hover:bg-green-600 text-white rounded-md"
//         >
//           Login
//         </a>
//         </div>
//         </div>
        
//       </div>

//       {/* Mobile Menu - This section is shown when `isMenuOpen` is true */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-blue-300 flex flex-col items-start p-4 ">
//           {/* Menu Heading */}
//           <h2 className="text-xl font-semibold text-white mb-4">Menu</h2>

//           <a href="/" className="py-2 hover:text-blue-700">Home</a>
//           <a href="/conference" className="py-2 hover:text-blue-700">Conference</a>
//           <a href="/publications" className="py-2 hover:text-blue-700">Submission</a>
//           <a href="/research" className="py-2 hover:text-blue-700">Research</a>
//           <a href="/awards" className="py-2 hover:text-blue-700">Awards</a>
//           <a href="/about-us" className="py-2 hover:text-blue-700">About Us</a>

//           {/* Mobile Login Button */}
//           <a 
//             href="/lko"
//             className="mt-4 px-6 py-2 bg-blue-500 hover:bg-green-600 text-white rounded-md w-full text-center w-[50%]"
//           >
//             Login
//           </a>
//         </div>
//       )}
//     </>
//   );
// }

// export default LowerHeader;


import React, { useState } from 'react';

const LowerHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  return (
    <>
      <div className="bg-blue-300 flex items-center p-2 text-lg border-b-4 border-red-400 w-full">

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
            <a href="/" className="hover:text-blue-700">Home</a>
            <a href="/conference" className="hover:text-blue-700">Conference</a>
            <a href="/publications" className="hover:text-blue-700">Submission</a>
            <a href="/research" className="hover:text-blue-700">Research</a>
            <a href="/awards" className="hover:text-blue-700">Awards</a>
            <a href="/about-us" className="hover:text-blue-700">About Us</a>

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
