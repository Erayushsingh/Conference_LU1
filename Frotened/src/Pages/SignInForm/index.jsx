import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSpinner, FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';
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
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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
      setLoading(true);
      setPopupMessage("Please wait...");
      setIsPopupVisible(true);
      try {
        const response = await fetch(`https://www.api.raashee.in/api/auth/signin`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        //if (response.ok === false) {
        //
        //  setLoading(false);
        //  setIsPopupVisible(false)
        //  console.log('Status')
        //  Swal.fire("Server Error", "Please try again later", "error");
        //}
        //
        const data = await response.json();
        const userId = data.id;
        if (data.success) {
          localStorage.setItem('token', data.accessToken);
          localStorage.setItem('role', data.role);
          Swal.fire({
            icon: 'success',
            title: 'Login Successful',
          })
          if (data.role === 'admin') {
            return navigate('/admin');
          }
          else {
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

            } catch (err) {
              Swal.fire({
                icon: 'error',
                title: 'Submission Failed',
                text: err.message,
              })
            }
          }

          setPopupMessage("Login successful! Redirecting...");
          setTimeout(() => {
            setIsPopupVisible(false);
          }, 3000);
        } else {
          setIsPopupVisible(false)
          setLoading(false)

          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Incorrect email or password',
          })
          setTimeout(() => {
            navigate('/');
          }, 2000)
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: error.message,
        })
        setLoading(false);
        setPopupMessage("Please try again...");
        setIsPopupVisible(false);
      } finally {
        setLoading(false);
        setIsModalOpen(false)
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

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
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
                <div className="relative">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full p-2 border-2 rounded-md ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    {isPasswordVisible ? (
                      <FaEyeSlash className="text-gray-500" />
                    ) : (
                      <FaEye className="text-gray-500" />
                    )}
                  </button>
                </div>
                {errors.password && <span className="text-red-500 text-sm">Password is required</span>}
              </div>

              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
                  disabled={loading}
                >
                  {loading ? (
                    ''
                  ) : (
                    'Login'
                  )}
                </button>
              </div>
            </form>

            <button
              className="absolute top-2 right-2 text-gray-600 font-bold text-xl border-2 border-gray-300 rounded-full px-2 py-1 hover:bg-gray-300 focus:outline-none"
              onClick={clearForm}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {isPopupVisible && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm mx-auto">
            <h3 className="text-lg font-semibold">{popupMessage}</h3>
            <div className="flex justify-center mt-3">
              <FaSpinner className="animate-spin text-blue-600 text-xl" />
            </div>
          </div>
        </div>
      )}

      {/* Toast Container */}
    </div>
  );
};

export default LoginForm;
