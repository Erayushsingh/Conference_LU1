import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { FaSpinner } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const AbstractSubmission = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const createAbstractFormModel = () => ({
    title: '',
    authors: '',
    drivelink: '',
    keywords: '',
    preferredPresentation: 'oral',
    conferenceTheme: '',
    conflictOfInterest: 'no',
  });

  const [formData, setFormData] = useState(createAbstractFormModel());
  const [errors, setErrors] = useState({
    title: false,
    authors: false,
    drivelink: false,
    keywords: false,
    conferenceTheme: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);

  useEffect(() => {
    if (location.pathname === '/abstract-submission') {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [location.pathname]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Drive link validation
  const validatedrivelink = (url) => {
    const linkpattern = /^https:\/\/drive\.google\.com\/.*\/d\/[a-zA-Z0-9_-]+(\/.*)?$/;

    return linkpattern.test(url);
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!formData.title) newErrors.title = true;
    if (!formData.authors) newErrors.authors = true;
    if (!formData.drivelink || !validatedrivelink(formData.drivelink)) {
      newErrors.drivelink = true;
    }
    if (!formData.keywords) newErrors.keywords = true;
    if (!formData.conferenceTheme) newErrors.conferenceTheme = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('You must be logged in to submit an abstract');
        navigate('/login');
        return;
      }

      setLoading(true);
      setShowModal(true);

      try {
        // POST request to submit the abstract with token for authorization
        const response = await fetch(`https://www.api.raashee.in/api/abstracts/submit`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        setLoading(false);
        setShowModal(false);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Display success toast
        toast.success(data.message || 'Abstract submitted successfully!', {
          onClose: () => {
            setIsToastOpen(false);
            navigate('/');
          },
        });

        setIsToastOpen(true);
      } catch (error) {
        setLoading(false);
        setShowModal(false);
        toast.error('Error submitting abstract. Please try again.');

      }
    }
  };

  // Clear form and close modal
  const clearForm = () => {
    setFormData(createAbstractFormModel());
    setErrors({ title: false, authors: false, drivelink: false, keywords: false, conferenceTheme: false });
    if (!isToastOpen) {
      setIsModalOpen(false);
    }
    navigate('/');
  };

  return (
    <div className="flex h-full">
      {isModalOpen && (
        <div className="flex w-full md:h-full items-center bg-blue-200">
          {/* Left side content */}
          <div className="flex-1 md:w-[50%] md:h-[100%]  p-8  md:block flex justify-center items-center">
            <div className="text-center md:h-full  items-center justify-center flex-col">
              <h2 className="text-3xl font-bold mb-4">Submit Your Abstract</h2>
              <p className="text-lg mb-8">
                Welcome to the abstract submission page for the RAASHEE-25. Please fill out the form  to submit your abstract. We look forward to your participations!
              </p>
            </div>
          </div>

          {/* Right side form */}
          <div className="flex-1 bg-white p-8">
            <div className="w-full sm:w-3/4 lg:w-2/3 mx-auto bg-white rounded-lg ">
              <h2 className="text-xl text-center font-semibold mb-4">Abstract Submission for<br /> Raashee-25</h2>
              <form onSubmit={handleSubmit}>
                {/* Paper Title */}
                <div className="mb-4">
                  <label htmlFor="title" className="block text-lg font-medium">Paper Title <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Enter your paper title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className={`w-full p-2 border-2 rounded-md ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.title && <span className="text-red-500 text-sm">Title is required</span>}
                </div>

                {/* Authors */}
                <div className="mb-4">
                  <label htmlFor="authors" className="block text-lg font-medium">Authors <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="authors"
                    name="authors"
                    value={formData.authors}
                    onChange={handleChange}
                    placeholder="Enter author's name"
                    required
                    className={`w-full p-2 border-2 rounded-md ${errors.authors ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.authors && <span className="text-red-500 text-sm">Authors are required</span>}
                </div>

                {/* Abstract Drive link*/}
                <div className="mb-4">
                  <label htmlFor="drivelink" className="block text-lg font-medium">Abstract Drive Link<span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="drivelink"
                    name="drivelink"
                    placeholder="Please attach your drive link here"
                    value={formData.drivelink}
                    onChange={handleChange}
                    required
                    className={`w-full p-2 border-2 rounded-md ${errors.drivelink ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.drivelink && <span className="text-red-500 text-sm">Please upload a valid drive link.</span>}
                </div>

                {/* Keywords */}
                <div className="mb-4">
                  <label htmlFor="keywords" className="block text-lg font-medium">Keywords <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="keywords"
                    name="keywords"
                    value={formData.keywords}
                    onChange={handleChange}
                    placeholder="Enter keywords "
                    required
                    className={`w-full p-2 border-2 rounded-md ${errors.keywords ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.keywords && <span className="text-red-500 text-sm">Keywords are required</span>}
                </div>

                {/* Preferred Presentation */}
                <div className="mb-4">
                  <label htmlFor="preferredPresentation" className="block text-lg font-medium">Preferred Presentation</label>
                  <select
                    id="preferredPresentation"
                    name="preferredPresentation"
                    value={formData.preferredPresentation}
                    onChange={handleChange}
                    className="w-full p-2 border-2 rounded-md"
                  >
                    <option value="oral">Oral</option>
                    <option value="poster">Poster</option>
                  </select>
                </div>

                {/* Conference Theme */}
                <div className="mb-4">
                  <label htmlFor="conferenceTheme" className="block text-lg font-medium">Conference Theme <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="conferenceTheme"
                    name="conferenceTheme"
                    value={formData.conferenceTheme}
                    onChange={handleChange}
                    placeholder="Enter your conference theme"
                    required
                    className={`w-full p-2 border-2 rounded-md ${errors.conferenceTheme ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.conferenceTheme && <span className="text-red-500 text-sm">Conference Theme is required</span>}
                </div>

                {/* Conflict of Interest */}
                <div className="mb-4">
                  <label htmlFor="conflictOfInterest" className="block text-lg font-medium">Are you interested in full paper submission ?</label>
                  <select
                    id="conflictOfInterest"
                    name="conflictOfInterest"
                    value={formData.conflictOfInterest}
                    onChange={handleChange}
                    className="w-full p-2 border-2 rounded-md"
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>

                {/* Action Buttons */}
                <div className="mb-4 flex justify-end space-x-2">
                  <button
                    type="button"
                    className="bg-gray-500 text-white px-4 py-2 rounded-md"
                    onClick={clearForm}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 font-bold text-white py-2 rounded-md px-4"
                  >
                    {loading ? 'Please wait...' : 'Submit'}
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className=" flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg">
            <FaSpinner className="animate-spin text-blue-600 text-3xl" />
            <p className="text-lg mt-4">Please wait...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AbstractSubmission;
