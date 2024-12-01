import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <>
      <div className='w-full items-center bg-gray-900 text-white flex flex-col xl:flex-row justify-between items-start p-6 '>

        {/* Rasee Section with Social Media Icons */}
        <div className='flex-shrink-0 w-full bg-gray-600 p-3 text-end lg:w-[300px] flex flex-col items-center relative mb-6 lg:mb-0'>
          <h1 className='text-3xl lg:text-5xl font-semibold text-center'>RAASHEE</h1>
          <div>
            <p className='text-xs text-center font-semibold'>Faculty of Engineering And Technology</p>
            <p className='text-xs text-center font-bold text-red-400'>University of Lucknow</p>
          </div>

        </div>

        {/* Navigation Links Section */}
        <div className='w-full lg:w-1/3 flex flex-col mt-4 md:flex-row justify-center items-center text-xl lg:text-2xl'>
          <a href="/" className='m-2 hover:opacity-60'>Home</a>
          <a href="/research" className='m-2 hover:opacity-60'>Research</a>
          <a href="/publications" className='m-2 hover:opacity-60'>Submission</a>
          <a href="/conference" className='m-2 hover:opacity-60'>Conference</a>
        </div>
        {/* Social Media Icons Row (positioned below the text) */}
          <div className=' flex justify-center space-x-6 py-4 '>
            <a href="https://www.facebook.com/share/1B8gU8jwpJ/?mibextid=LQQJ4d" target="_blank"><i className="fa-brands fa-facebook text-xl font-bold bg-gray-700 p-3 rounded-3xl hover:cursor-pointer hover:opacity-60"></i></a>            
            <a href="https://x.com/Raashee25" target="_blank"><i className="fa-brands fa-x-twitter text-xl font-bold bg-gray-700 p-3 rounded-3xl hover:cursor-pointer hover:opacity-60"></i></a>
            <a href="https://youtube.com/@raashee25?si=xCXHeb1spEYkAo5Y" target="_blank"><i className="fa-brands fa-youtube text-xl font-bold bg-gray-700 p-3 rounded-3xl hover:cursor-pointer hover:opacity-60"></i></a>           
            <i className="fa-regular fa-envelope text-xl font-bold bg-gray-700 p-3 rounded-3xl hover:cursor-pointer hover:opacity-60"></i>
            <a href="https://www.instagram.com/raashee_2025?igsh=MWN0NGU4Z2dtdDVlbw==" target="_blank"><i className="fa-brands fa-instagram text-xl font-bold bg-gray-700 p-3 rounded-3xl hover:cursor-pointer hover:opacity-60"></i></a>
            
          </div>
        

      </div>

      {/* Contact Details Section */}
      <div className='w-full md:flex-row lg:w-full border-t-2 border-t-gray-500 border-b-2 shadow-lg shadow-gray-300 border-b-gray-500 flex justify-center p-2 flex-col items-center bg-gray-900'>
          <div className='md:w-[30%] text-center'>
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 mt-4">CONTACT DETAILS</h3>
            <p className="text-lg text-gray-700 mb-2  md:mr-4 text-center">
              All queries and clarifications related to the conference and submission of abstract/paper should be emailed to:
              <a href="mailto:raashee.foet@gmail.com" className="text-blue-500">raashee.foet@gmail.com</a>
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:justify-around md:w-[70%] items-center">
            <div className='md:flex'>
              {/* Highlighted Contact 1 */}
              <p className="text-lg text-blue-500 md:p-2 hover:cursor-pointer font-bold mb-2">
                Dr. Khushboo Verma
                <div>(7991200535)</div> 
              </p>
            
              {/* Highlighted Contact 2 */}
              <p className="text-lg text-blue-500 md:p-2 hover:cursor-pointer font-bold mb-2">
                Dr. Rachana Pathak
                <div>(9044375304)</div>
              </p>

              {/* Highlighted Contact 3 */}
              <p className="text-lg text-blue-500 md:p-2 hover:cursor-pointer font-bold mb-2">
                Dr. Savya Sachi
                <div>(9811746901)</div>
              </p>

              {/* Highlighted Contact 4 */}
              <p className="text-lg text-blue-500 md:p-2 hover:cursor-pointer font-bold mb-2">
                Dr. R. P. Singh 
                <div>(8090196096)</div>
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

      <div className='h-6 bg-gray-700 text-end'>
      </div>
    </>
  );
}

export default Footer;

