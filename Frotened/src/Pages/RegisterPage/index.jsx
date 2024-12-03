import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import 'animate.css';
import Raashee from '/src/assets/Raashee.jpg'

const RegisterLink = () => {
  const [showOutlet, setShowOutlet] = useState(false);

  const handleRegisterClick = () => {
    setShowOutlet(true);
  };

  return (
    <div className="h-screen w-full">
      {!showOutlet && (
        <div className="flex h-screen flex-col sm:flex-row">
          <div className="w-full h-screen sm:w-1/2 bg-gray-200 flex items-center justify-center py-10 my-auto">
            <div className="text-center animate__animated animate__fadeInLeft">
              <img src={Raashee} alt="Logo" className='md:w-[400px] w-[300px] mx-auto rounded-full mb-4'/>
              <h1 className="text-2xl sm:text-3xl font-bold mb-4 animate-zoom-out-in">Welcome to RAASHEE 2025</h1>
              <p className="text-lg sm:text-lg md:text-2xl ">"We're thrilled to have you with us! Dive into our features, engage in groundbreaking discussions, and start your journey today!"

</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 bg-blue-600 flex items-center justify-center p-4">
            <Link
              to="/auth/rashee2025register"
              className="px-6 py-3 text-white font-semibold text-lg sm:text-xl bg-blue-700 hover:bg-blue-800 rounded-md animate__animated animate__fadeInRight animate__delay-1s"
              onClick={handleRegisterClick}
            >
              Register
            </Link>
          </div>
        </div>
      )}

      {showOutlet && (
        <div
          className="fixed top-0 left-0 w-full h-full z-50 bg-white transition-opacity duration-500 ease-in-out opacity-100 animate__animated animate__fadeIn"
        >
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default RegisterLink;
