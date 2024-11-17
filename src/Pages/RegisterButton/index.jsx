import React, { useState } from 'react';
import Logo from '/src/assets/Lu-old.webp'; 

const RegisterButton = () => {
    const [showSignup, setShowSignup] = useState(false);

    const handleButtonClick = () => {
        setShowSignup(true);
    };

    return (
        <div>
            <button
                className="p-3 pl-9 border-2 border-black mr-7 pr-9 bg-white"
                onClick={handleButtonClick}
            >
                Register
            </button>

            {/* Signup Form - Initially hidden */}
            {showSignup && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-white p-0 z-50 transition-opacity duration-500 ease-in-out opacity-100 flex">
                    {/* Left Side - Image */}
                    <div className="w-1/2 bg-gray-100">
                        <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
                    </div>

                    {/* Right Side - Signup Form */}
                    <div className="w-1/2 p-10">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Sign Up</h2>
                            <button
                                className="text-xl text-red-600"
                                onClick={() => setShowSignup(false)}
                            >
                                &times;
                            </button>
                        </div>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full p-3 border-2 border-gray-300 rounded-md"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold">Email</label>
                                <input
                                    type="email"
                                    className="w-full p-3 border-2 border-gray-300 rounded-md"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold">Password</label>
                                <input
                                    type="password"
                                    className="w-full p-3 border-2 border-gray-300 rounded-md"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-md"
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RegisterButton;
