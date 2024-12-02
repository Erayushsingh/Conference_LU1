import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa'; // Importing the spinner
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
  const [loading, setLoading] = useState(false); // Added loading state
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isPopupVisible, setIsPopupVisible] = useState(false); // State for popup visibility
  const [popupMessage, setPopupMessage] = useState(""); // Popup message content

  const navigate = useNavigate();

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
      setLoading(true); // Set loading to true when the login request starts

      try {
        const response = await fetch(`https://www.api.raashee.in/api/auth/signin`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.ok === false) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const userId = data.id;
        console.log(data.id);
        if (data.success) {
          localStorage.setItem('token', data.accessToken);
          toast.success(data.message || 'Login successful!');
          if (data.role === 'admin') {
            navigate('/admin');
          }

          try {
            const submissionsResponse = await fetch(
              `https://www.api.raashee.in/api/abstracts/submissions/${userId}`,
              {
                method: "GET",
                headers: {
                  'Authorization': `Bearer ${data.accessToken}`,
                  'Content-Type': 'application/json',
                },
              }
            );
            const submissionsData = await submissionsResponse.json();
            if (submissionsData.length > 0) {
              navigate('/allreadySubmitted');
            } else {
              navigate('/abstract-submission');
            }
            console.log(submissionsData);
          } catch (err) {
            console.error('Error:', err);
          }

          setIsModalOpen(false); // Close the modal after success

          // Show popup after successful login
          setPopupMessage("Login successful! Redirecting...");
          setIsPopupVisible(true);
          
          // Hide the popup after a few seconds (optional)
          setTimeout(() => {
            setIsPopupVisible(false);
          }, 3000);
        } else {
          toast.error(data.message || 'Login failed. Please try again.');
        }
      } catch (error) {
        toast.error('Error during login. Please try again.');
        console.error('Error during login:', error);
      } finally {
        setLoading(false); // Set loading to false when the request finishes (success or error)
      }
    }
  };

  const clearForm = () => {
    setFormData(createLoginFormModel());
    setErrors({
      email: false,
      password: false,
    });
    setIsModalOpen(false);
    navigate('/');
  };

  return (
    <div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
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
                  disabled={loading} // Disable the button while loading
                >
                  {loading ? (
                    <div className="flex justify-center items-center">
                      <FaSpinner className="animate-spin mr-2" /> Loading...
                    </div>
                  ) : (
                    'Login'
                  )}
                </button>
              </div>
            </form>

            {/* Close Button for Modal */}
            <button
              className="absolute top-2 right-2 text-gray-600 font-bold text-xl border-2 border-gray-300 rounded-full px-2 py-1 hover:bg-gray-300 focus:outline-none"
              onClick={clearForm}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Popup for login success */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm mx-auto">
            <h3 className="text-lg font-semibold">{popupMessage}</h3>
          </div>
        </div>
      )}

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
