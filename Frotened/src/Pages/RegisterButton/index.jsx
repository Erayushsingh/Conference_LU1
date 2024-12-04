import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaSpinner, FaTimes } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";

const RegisterButton = ({ className }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    place: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  {/*Payment Model */ }
  const openPaymentModal = () => {
    setShowPaymentModal(true);
  };

  const closePaymentModal = () => {
    setShowPaymentModal(false);
  };

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "phone") {
      if (/[^\d]/.test(value)) {
        setPhoneError("Please enter a valid mobile number with only numbers");
      } else if (value.length > 10) {
        setPhoneError("Please input a valid mobile number");
      } else {
        setPhoneError("");
      }
    }
  };

  const isPasswordTooShort =
    formData.password.length > 0 && formData.password.length < 6;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (phoneError) {
      toast.error("Please enter valid mobile number!");
      return;
    }

    setLoading(true);
    setShowModal(true);

    try {
      const response = await fetch(
        `https://www.api.raashee.in/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      setLoading(false);
      setShowModal(false);

      if (response.ok) {
        toast.success(
          "You have registered successfully! Redirecting to home..."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          place: "",
          address: "",
          password: "",
          confirmPassword: "",
          screenshot: "",
        });

        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        toast.error(data.message || "Registration failed");
      }
    } catch (err) {
      setLoading(false);
      setShowModal(false);
      toast.error("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("animate__fadeIn");
      }, index * 500);
    });
  }, []);


  {/*Image Base 64 Convert */ }
  const imageBase64 = (e) => {
    const { name, files } = e.target;

    if (files && files[0]) {
      const file = files[0];

      if (file.type === "image/jpeg" || file.type === "image/jpg") {
        const reader = new FileReader();

        reader.onloadend = () => {
          setFormData((prevState) => ({
            ...prevState,
            [name]: reader.result,
          }));
        };

        reader.readAsDataURL(file); // Convert image to Base64
      } else {
        alert("Please upload a .jpg or .jpeg file.");
      }
    }
  };


  return (

    <div className="h-full w-full overflow-y-scroll ">
      <div className="flex items-center justify-center bg-gray-200 min-h-screen w-full">
        <div className="w-full max-w-xl bg-white shadow-md rounded-lg p-4 sm:p-6 md:p-8 mx-auto ">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 md:text-3xl">
            Register
          </h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 "
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Left Column */}
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold md:text-lg">
                    Name <span className="text-red-500">*</span>
                  </label>
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
                  <label className="block text-sm font-semibold md:text-lg">
                    Email <span className="text-red-500">*</span>
                  </label>
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
                  <label className="block text-sm font-semibold md:text-lg">
                    Postal Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-gray-300 rounded-md"
                    placeholder="Enter your postal address"
                  ></textarea>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold md:text-lg">
                    Place (City/Town) <span className="text-red-500">*</span>
                  </label>
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
                  <label className="block text-sm font-semibold md:text-lg">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-gray-300 rounded-md"
                    placeholder="Enter your phone number"
                    pattern="[0-9]{10}"
                    required
                  />
                  {phoneError && (
                    <span className="text-red-500 text-sm mt-2">
                      {phoneError}
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-semibold md:text-lg">
                    Affiliating Orgnization
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-gray-300 rounded-md"
                    placeholder="Enter your affiliating organization"
                    required
                  ></input>
                </div>
              </div>
            </div>

            {/* Password Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold md:text-lg">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-gray-300 rounded-md"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-lg"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                  {isPasswordTooShort && (
                    <span className="text-red-500 text-sm mt-2">
                      Password must be at least 6 characters long.
                    </span>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold md:text-lg">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-gray-300 rounded-md"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-lg"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
            </div>


            <div className="mb-4">
              <label className="block text-sm font-semibold md:text-lg">
                Screenshot of Payment<span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="screenshot"
                onChange={imageBase64}
                className="w-full p-3 border-2 border-gray-300 rounded-md"
                placeholder="Attach the screenshot of registration payment"
                required
                accept=".jpg, .jpeg"
              />
              <p className="text-sm text-gray-500 mt-2">
                Only .jpg and .jpeg images are accepted.
              </p>

              <strong>
                <button type="button" className="text-red-600 "
                  onClick={openPaymentModal}>
                  <u>Pay registration fees</u>
                </button>
              </strong>

              {/* Preview the image*/}
              {formData.screenshot && (
                <div className="mt-4">
                  <h3 className="text-blue-900"><strong>Preview:</strong></h3>
                  <img
                    src={formData.screenshot}
                    alt="Screenshot preview"
                    className="w-32 h-32 object-cover mt-2"
                  />
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white font-bold py-3 px-6 rounded-md w-full sm:w-auto sm:px-8"
              >
                {loading ? "Please wait..." : "Register"}
              </button>
            </div>
          </form>
        </div>



        {/* Toast container */}
        <ToastContainer />

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <FaSpinner className="animate-spin text-blue-600 text-3xl" />
              <p className="text-lg mt-4">Please wait...</p>
            </div>
          </div>
        )}


        {/* Payment Modal */}
{showPaymentModal && (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50 flex-col px-4">
    <button
      onClick={closePaymentModal}
      className="absolute top-4 right-4 md:top-6 md:right-6 text-2xl hover:text-black text-red-700"
    >
      <FaTimes />
    </button>
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 my-8 w-full sm:w-[90%] lg:w-[70%] mx-auto">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-black mb-6">Registration Fee</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-indigo-600 text-white text-xs sm:text-sm md:text-base">
              <th className="px-2 sm:px-4 py-3 text-left">Category</th>
              <th className="px-2 sm:px-4 py-3 text-left">Paper Presentation (INR/USD)</th>
              <th className="px-2 sm:px-4 py-3 text-left">Attendee (INR/USD)</th>
              <th className="px-2 sm:px-4 py-3 text-left">On-the-Spot Registration (INR/USD)</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-xs sm:text-sm md:text-base">
            {/* Students Row */}
            <tr className="odd:bg-gray-50 even:bg-gray-100">
              <td className="px-2 sm:px-4 py-2 sm:py-4 font-semibold">Students (UG/PG/Research)</td>
              <td className="px-2 sm:px-4 py-2 sm:py-4">1000 INR / 100 USD</td>
              <td className="px-2 sm:px-4 py-2 sm:py-4">1000 INR / 100 USD</td>
              <td className="px-2 sm:px-4 py-2 sm:py-4">1500 INR / 110 USD</td>
            </tr>

            {/* Academician/Industry Row */}
            <tr className="odd:bg-gray-50 even:bg-gray-100">
              <td className="px-2 sm:px-4 py-2 sm:py-4 font-semibold">Academician/Industry</td>
              <td className="px-2 sm:px-4 py-2 sm:py-4">2000 INR / 150 USD</td>
              <td className="px-2 sm:px-4 py-2 sm:py-4">2000 INR / 150 USD</td>
              <td className="px-2 sm:px-4 py-2 sm:py-4">2500 INR / 160 USD</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/*Payment Details*/}
    <div className="p-4 sm:p-6 max-w-lg w-full mx-auto bg-gray-50 border border-gray-300 rounded-lg shadow-lg mb-4">
      <h3 className="text-xl sm:text-2xl font-semibold text-center text-gray-800 mb-4">Payment Details</h3>
      <div className="space-y-2 text-sm sm:text-base md:text-lg">
        <p><strong>Beneficiary Name: </strong>RAASHEE 25</p>
        <p><strong>Bank Name:</strong> Punjab National Bank</p>
        <p><strong>Account Number:</strong> 6950002100002537</p>
        <p><strong>Branch:</strong> JANKIPURAM VISTAR (DALIBAGH GANNA SANSTHAN-6216)</p>
        <p><strong>IFSC Code:</strong> PUNB0695000</p>
      </div>
    </div>
  </div>
)}

      </div>
    </div>
  );
};

export default RegisterButton;
