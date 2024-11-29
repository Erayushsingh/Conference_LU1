import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <>
      <div className='w-full bg-gray-900 text-white flex flex-col lg:flex-row justify-between items-start p-6 '>

        {/* Rasee Section with Social Media Icons */}
        <div className='flex-shrink-0 w-full lg:w-1/3 flex flex-col items-center relative mb-6 lg:mb-0'>
          <h1 className='text-3xl lg:text-5xl font-semibold text-center'>RAASHEE</h1>
          <p className='text-xs text-center'>ARCHITECTURE MEDIA POLICIES</p>
          <p className='text-xs text-center'>Society</p>

          {/* Social Media Icons Row (positioned below the text) */}
          {/* <div className='absolute top-16 left-0 right-0 flex justify-center space-x-6 py-4'>
            <i className="fa-brands fa-facebook text-xl font-bold bg-gray-700 p-4 hover:cursor-pointer hover:opacity-60"></i>
            <i className="fa-brands fa-twitter text-xl font-bold bg-gray-700 p-4 hover:cursor-pointer hover:opacity-60"></i>
            <i className="fa-brands fa-youtube text-xl font-bold bg-gray-700 p-4 hover:cursor-pointer hover:opacity-60"></i>
            <i className="fa-regular fa-envelope text-xl font-bold bg-gray-700 p-4 hover:cursor-pointer hover:opacity-60"></i>
            <i className="fa-brands fa-instagram text-xl font-bold bg-gray-700 p-4 hover:cursor-pointer hover:opacity-60"></i>
          </div> */}
        </div>

        {/* Navigation Links Section */}
        <div className='w-full lg:w-1/3 flex flex-col items-center text-xl lg:text-2xl'>
          <a href="/" className='m-2 hover:opacity-60'>Home</a>
          <a href="/research" className='m-2 hover:opacity-60'>Research</a>
          <a href="/publications" className='m-2 hover:opacity-60'>Publication</a>
          <a href="/conference" className='m-2 hover:opacity-60'>Conference</a>
        </div>

        {/* Contact Details Section */}
        <div className='w-full lg:w-1/3 flex flex-col items-center'>
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 mt-4">CONTACT DETAILS</h3>
          <p className="text-lg text-gray-700 mb-2 text-center">
            All queries and clarifications related to the conference and submission of abstract/paper should be emailed to:
            <a href="mailto:ash.foet2017@gmail.com" className="text-blue-500">ash.foet2017@gmail.com</a>
          </p>
          <div className="flex flex-col items-center">
            {/* Highlighted Contact 1 */}
            <p className="text-lg text-blue-500 font-bold mb-2">
              Dr. Khushboo Verma (7991200535)
            </p>
           
            {/* Highlighted Contact 2 */}
            <p className="text-lg text-blue-500 font-bold mb-2">
              Dr. Rachana Pathak(9044375304)
            </p>

            {/* Highlighted Contact 3 */}
            <p className="text-lg text-blue-500 font-bold mb-2">
              Dr. Savya Sachi(9811746901)
            </p>

            {/* Highlighted Contact 4 */}
            <p className="text-lg text-blue-500 font-bold mb-2">
              Dr. R. P. Singh(8090196096)
            </p>
          </div>
        </div>

      </div>

      {/* Copyright Section */}
      <div className='h-10 bg-gray-800 text-center text-white flex items-center justify-center'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()} Department of Applied Science & Humanities, FOET, University of Lucknow. All rights reserved.
        </p>
      </div>

      <div className='h-6 bg-gray-700'></div>
    </>
  );
}

export default Footer;

