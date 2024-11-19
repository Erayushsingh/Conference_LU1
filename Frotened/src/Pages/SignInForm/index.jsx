import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = ({ className }) => {
  const createLoginFormModel = () => ({
    email: '',
    password: '',
  });

  const [formData, setFormData] = useState(createLoginFormModel());
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();  // Initialize navigate for redirection

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!formData.email) newErrors.email = true;
    if (!formData.password) newErrors.password = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        // Send a POST request to the backend to authenticate the user
        const response = await fetch('http://localhost:3000/api/auth/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Check for success based on the backend response
        if (data.success) {  // Check if success is true
          // If login is successful, store the JWT token (if using JWT)
          localStorage.setItem('token', data.token);

          // Show success toast
          toast.success(data.message || 'Login successful!');
          
          // Redirect to the abstract submission page before closing the modal
          navigate('/abstract-submission');  // Navigate to abstract submission page

          setIsModalOpen(false); // Close the modal after redirect

        } else {
          // Show error toast if login fails
          toast.error(data.message || 'Login failed. Please try again.');
        }
      } catch (error) {
        // Show general error toast if there's an issue with the request
        toast.error('Error during login. Please try again.');
        console.error('Error during login:', error);
      }
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const clearForm = () => {
    setFormData(createLoginFormModel());
    setErrors({
      email: false,
      password: false,
    });
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        className={`p-3 pl-9 border-2 ${className} mr-7 pr-9 bg-white`}
        onClick={toggleModal} // Open modal when button is clicked
      >
        Sign In
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          {/* Full-page overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Modal content */}
          <div className="bg-white p-8 w-full sm:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto rounded-lg shadow-lg z-10 relative">
            <h2 className="text-xl font-semibold mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 border-2 rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-lg font-medium">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full p-2 border-2 rounded-md ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.password && <span className="text-red-500 text-sm">Password is required</span>}
              </div>

              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
                >
                  Login
                </button>
              </div>
            </form>

            {/* Close Button for Modal */}
            <button
              className="absolute top-2 right-2 text-gray-600 font-bold text-xl border-2 border-gray-300 rounded-full px-2 py-1 hover:bg-gray-300 focus:outline-none"
              onClick={clearForm} // Clear the form and close the modal
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
