import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <>
      <div className='h-64 bg-gray-900 text-white flex  justify-between items-center'>
        <div className='p-4 flex flex-col items-end bg-gray-700'>
          <h1 className='text-5xl font-semibold'>RAASHEE</h1>
          <p className='text-xs'>ARCHITECTURE MEDIA POLICIES </p>
          <p className='text-xs'>Society</p>
        </div>
        <div className='text-lg font-bold'>
          <a href="/" className='m-4 hover:opacity-60'>Home</a>
          <a href="/research" className='m-4 hover:opacity-60'>Research</a>
          <a href="/publications" className='m-4 hover:opacity-60'>Publication</a>
          <a href="/conference" className='m-4 hover:opacity-60'>Conference</a>
        </div>
        <div className=''>
          <i className="fa-brands fa-facebook text-xl font-bold m-4 bg-gray-700 p-4 pt-3 pb-3 hover:cursor-pointer hover:opacity-60"></i>
          <i className="fa-brands fa-x-twitter text-xl font-bold m-4 bg-gray-700 p-4 pt-3 pb-3 hover:cursor-pointer hover:opacity-60"></i>
          <i className="fa-brands fa-youtube text-xl font-bold m-4 bg-gray-700 p-4 pt-3 pb-3 hover:cursor-pointer hover:opacity-60"></i>
          <i className="fa-regular fa-envelope text-xl font-bold m-4 bg-gray-700 p-4 pt-3 pb-3 hover:cursor-pointer hover:opacity-60"></i>
          <i className="fa-brands fa-instagram text-xl font-bold m-4 bg-gray-700 p-4 pt-3 pb-3 hover:cursor-pointer hover:opacity-60"></i>
        </div>
      </div>
      <div className='h-6 bg-gray-700'></div>
    </>
  )
}

export default Footer