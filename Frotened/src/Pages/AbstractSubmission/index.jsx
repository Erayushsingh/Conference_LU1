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
    abstract: '',
    keywords: '',
    preferredPresentation: 'oral',
    conferenceTheme: '',
    conflictOfInterest: 'no',
  });

  const [formData, setFormData] = useState(createAbstractFormModel());
  const [errors, setErrors] = useState({
    title: false,
    authors: false,
    abstract: false,
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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!formData.title) newErrors.title = true;
    if (!formData.authors) newErrors.authors = true;
    if (!formData.abstract) newErrors.abstract = true;
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
    setErrors({ title: false, authors: false, abstract: false, keywords: false, conferenceTheme: false });
    if (!isToastOpen) {
      setIsModalOpen(false);
    }
    navigate('/');
  };

  return (
    <div className="flex h-screen">
      {isModalOpen && (
        <div className="flex w-full">
          {/* Left side content */}
          <div className="flex-1 bg-blue-200 p-8 flex justify-center items-center">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Submit Your Abstract</h2>
              <p className="text-lg mb-8">
                Welcome to the abstract submission page for the LU Conference. Please fill out the form on the right to submit your abstract. We look forward to your contributions!
              </p>
            </div>
          </div>

          {/* Right side form */}
          <div className="flex-1 bg-white p-8">
            <div className="w-full sm:w-3/4 lg:w-2/3 mx-auto bg-white rounded-lg ">
              <h2 className="text-xl font-semibold mb-4">Abstract Submission for [LU_Conference]</h2>
              <form onSubmit={handleSubmit}>
                {/* Paper Title */}
                <div className="mb-4">
                  <label htmlFor="title" className="block text-lg font-medium">Paper Title <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="title"
                    name="title"
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
                    required
                    className={`w-full p-2 border-2 rounded-md ${errors.authors ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.authors && <span className="text-red-500 text-sm">Authors are required</span>}
                </div>

                {/* Abstract */}
                <div className="mb-4">
                  <label htmlFor="abstract" className="block text-lg font-medium">Abstract <span className="text-red-500">*</span></label>
                  <textarea
                    id="abstract"
                    name="abstract"
                    value={formData.abstract}
                    onChange={handleChange}
                    required
                    className={`w-full p-2 border-2 rounded-md ${errors.abstract ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.abstract && <span className="text-red-500 text-sm">Abstract is required</span>}
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
                    required
                    className={`w-full p-2 border-2 rounded-md ${errors.conferenceTheme ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.conferenceTheme && <span className="text-red-500 text-sm">Conference Theme is required</span>}
                </div>

                {/* Conflict of Interest */}
                <div className="mb-4">
                  <label htmlFor="conflictOfInterest" className="block text-lg font-medium">Conflict of Interest</label>
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
                <div className="mb-4 flex flex-end">
                  <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={clearForm}>
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 font-bold text-white py-2 rounded-md fade-in animate__animated animate__zoomIn  mx-auto px-4"
                  >
                    {loading ? (
                      'Please wait...'
                    ) : (
                      'Submit'
                    )}
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
