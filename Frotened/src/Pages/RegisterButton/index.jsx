import React, { useState, useEffect } from 'react';
import Logo from '/src/assets/Lu-old.webp';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';

const RegisterButton = ({ className }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    place: '',
    address: '',
    password: ''
  });

  const navigate = useNavigate();

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
      const response = await fetch(`${process.env.REACT_APP_API_HOSTNAME}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('You have registered successfully! Redirecting to home...');

        setFormData({
          name: '',
          email: '',
          phone: '',
          organization: '',
          place: '',
          address: '',
          password: '',
        });

        setTimeout(() => {
          navigate('/');
        }, 3000);
      } else {
        toast.error(data.message || 'Registration failed');
      }
    } catch (err) {
      toast.error('An error occurred. Please try again.');
    }
  };

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate__fadeIn');
      }, index * 500);
    });
  }, []);

  return (
    <div className='h-screen w-full flex'>
      <div className="bg-white p-0 z-50 transition-opacity duration-500 ease-in-out opacity-100 flex">

        <div className="w-1/2 bg-gray-100 fade-in animate__animated animate__fadeInLeft">
          <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
        </div>


        <div className="w-1/2 p-10 fade-in animate__animated animate__fadeInRight">
          <h2 className="text-xl font-bold mb-4">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border-2 border-gray-300 rounded-md"
                placeholder="Enter your name"
              />
            </div>


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
              className="w-full bg-blue-600 text-white py-3 rounded-md fade-in animate__animated animate__zoomIn"
            >
              Register
            </button>
          </form>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default RegisterButton;
