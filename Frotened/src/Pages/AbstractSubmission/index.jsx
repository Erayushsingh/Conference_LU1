import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import 'react-toastify/dist/ReactToastify.css';

const AbstractSubmission = ({ className }) => {
  const navigate = useNavigate(); // Initialize navigate for redirection

  const createAbstractFormModel = () => ({
    title: '',
    authors: '',
    abstract: '',
    keywords: '',
    preferredPresentation: '',
    conferenceTheme: '',
    conflictOfInterest: 'no',
  });

  const [formData, setFormData] = useState(createAbstractFormModel());
  const [errors, setErrors] = useState({
    title: false,
    authors: false,
    abstract: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(true); // Modal is open by default

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
    if (!formData.title) newErrors.title = true;
    if (!formData.authors) newErrors.authors = true;
    if (!formData.abstract) newErrors.abstract = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        // Send abstract data to the backend
        const response = await fetch('http://localhost:3000/api/abstracts/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Show success toast
        toast.success(data.message || 'Abstract submitted successfully!');
        setIsModalOpen(false); // Close the modal after submission

        // Redirect to home page after successful submission
        navigate('/'); // You can replace this with any page you'd like to navigate to

      } catch (error) {
        // Show error toast
        toast.error('Error submitting abstract. Please try again.');
        console.error('Error submitting abstract:', error);
      }
    }
  };

  const clearForm = () => {
    // Clear the form data and close the modal
    setFormData(createAbstractFormModel());
    setErrors({
      title: false,
      authors: false,
      abstract: false,
    });
    setIsModalOpen(false);

    // Optionally navigate elsewhere if needed (can remove if not necessary)
    navigate('/'); // This will navigate to the home page (or anywhere else)
  };

  return (
    <div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 w-4/5 sm:w-3/4 lg:w-1/2 rounded-lg shadow-lg relative">
            <h2 className="text-xl font-semibold mb-4">Abstract Submission for [LU_Conference]</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="block text-lg font-medium">Paper Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`w-full p-2 border-2 rounded-md ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.title && <span className="text-red-500 text-sm">Title is required</span>}
              </div>

              <div className="mb-4">
                <label htmlFor="authors" className="block text-lg font-medium">Authors</label>
                <input
                  type="text"
                  id="authors"
                  name="authors"
                  value={formData.authors}
                  onChange={handleChange}
                  className={`w-full p-2 border-2 rounded-md ${errors.authors ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.authors && <span className="text-red-500 text-sm">Authors are required</span>}
              </div>

              <div className="mb-4">
                <label htmlFor="abstract" className="block text-lg font-medium">Abstract</label>
                <textarea
                  id="abstract"
                  name="abstract"
                  value={formData.abstract}
                  onChange={handleChange}
                  className={`w-full p-2 border-2 rounded-md ${errors.abstract ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.abstract && <span className="text-red-500 text-sm">Abstract is required</span>}
              </div>

              <div className="mb-4">
                <label htmlFor="keywords" className="block text-lg font-medium">Keywords</label>
                <input
                  type="text"
                  id="keywords"
                  name="keywords"
                  value={formData.keywords}
                  onChange={handleChange}
                  className="w-full p-2 border-2 rounded-md border-gray-300"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="preferredPresentation" className="block text-lg font-medium">Preferred Presentation Type</label>
                <select
                  name="preferredPresentation"
                  value={formData.preferredPresentation}
                  onChange={handleChange}
                  className="w-full p-2 border-2 rounded-md border-gray-300"
                >
                  <option value="">Select Presentation Type</option>
                  <option value="oral">Oral Presentation</option>
                  <option value="poster">Poster Presentation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="conferenceTheme" className="block text-lg font-medium">Conference Theme(s) Relevance</label>
                <input
                  type="text"
                  name="conferenceTheme"
                  value={formData.conferenceTheme}
                  onChange={handleChange}
                  className="w-full p-2 border-2 rounded-md border-gray-300"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="conflictOfInterest" className="block text-lg font-medium">Conflict of Interest</label>
                <select
                  name="conflictOfInterest"
                  value={formData.conflictOfInterest}
                  onChange={handleChange}
                  className="w-full p-2 border-2 rounded-md border-gray-300"
                >
                  <option value="no">No Conflict</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
                >
                  Submit Abstract
                </button>
              </div>
            </form>

            {/* Close Button for Modal */}
            <button
              className="absolute top-2 right-2 text-gray-600 font-bold text-xl"
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

export default AbstractSubmission;
