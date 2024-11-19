import React, { useState } from 'react';
import Logo from '/src/assets/Lu-old.webp';
import { ToastContainer, toast } from 'react-toastify'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import 'react-toastify/dist/ReactToastify.css';  

const RegisterButton = ({ className }) => {
    const [showSignup, setShowSignup] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        organization: '',
        place: '',
        address: '',
        password: ''
    });
    
    const navigate = useNavigate(); // Initialize the navigate function

    const handleButtonClick = () => {
        setShowSignup(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make API call to register user
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                // Success toast
                toast.success('Registration successful!');

                // Clear form after successful registration
                setFormData({
                    email: '',
                    phone: '',
                    organization: '',
                    place: '',
                    address: '',
                    password: '',
                });

                // Navigate to the login page after successful registration
                navigate('/login'); // Adjust the path to your actual login route
            } else {
                // Error toast
                toast.error(data.message || 'Registration failed');
            }
        } catch (err) {
            // General error toast
            toast.error('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <button
                className={`p-3 pl-9 border-2 ${className} mr-7 pr-9 bg-white`}
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
                            <h2 className="text-xl font-bold">Register</h2>
                            <button
                                className="text-xl text-red-600"
                                onClick={() => setShowSignup(false)}
                            >
                                &times;
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            {/* Email Input */}
                            <div className="mb-4">
                                <label className="block text-sm font-semibold">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border-2 border-gray-300 rounded-md"
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* Phone Number Input */}
                            <div className="mb-4">
                                <label className="block text-sm font-semibold">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border-2 border-gray-300 rounded-md"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            {/* Affiliation Organization Input */}
                            <div className="mb-4">
                                <label className="block text-sm font-semibold">Affiliating Organization</label>
                                <input
                                    type="text"
                                    name="organization"
                                    value={formData.organization}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border-2 border-gray-300 rounded-md"
                                    placeholder="Enter your organization"
                                />
                            </div>

                            {/* Place (City/Town) Input */}
                            <div className="mb-4">
                                <label className="block text-sm font-semibold">Place (City/Town)</label>
                                <input
                                    type="text"
                                    name="place"
                                    value={formData.place}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border-2 border-gray-300 rounded-md"
                                    placeholder="Enter your place"
                                />
                            </div>

                            {/* Postal Address Input */}
                            <div className="mb-4">
                                <label className="block text-sm font-semibold">Postal Address</label>
                                <textarea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border-2 border-gray-300 rounded-md"
                                    placeholder="Enter your postal address"
                                ></textarea>
                            </div>

                            {/* Password Input */}
                            <div className="mb-4">
                                <label className="block text-sm font-semibold">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border-2 border-gray-300 rounded-md"
                                    placeholder="Enter your password"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-md"
                            >
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Toast container */}
            <ToastContainer />
        </div>
    );
};

export default RegisterButton;
