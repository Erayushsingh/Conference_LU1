import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import 'animate.css'; 

const RegisterLink = () => {
  const [showOutlet, setShowOutlet] = useState(false);

  const handleRegisterClick = () => {
    setShowOutlet(true);
  };

  return (
    <div className="h-screen w-full">
      {!showOutlet && (
        <div className="flex h-screen">
         
          <div className="w-1/2 bg-gray-200 flex items-center justify-center">
            <div className="text-center animate__animated animate__fadeInLeft">
              <h1 className="text-3xl font-bold mb-4">Welcome to Our Website!</h1>
              <p className="text-lg">We are excited to have you join our community. Explore our features and get started!</p>
            </div>
          </div>

         
          <div className="w-1/2 bg-blue-600 flex items-center justify-center">
            <Link
              to="/auth/rashee2025register"
              className="px-6 py-3 text-white font-semibold text-xl bg-blue-700 hover:bg-blue-800 rounded-md animate__animated animate__fadeInRight animate__delay-1s"
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
