import React, { useState } from 'react';

const AbstractSubmission = () => {

  const createAbstractFormModel = () => ({
    title: '',
    authors: '',
    abstract: '',
    keywords: '',
    preferredPresentation: '',
    conferenceTheme: '',
    conflictOfInterest: 'no'
  });

  // Initialize state using the form model
  const [formData, setFormData] = useState(createAbstractFormModel());
  const [errors, setErrors] = useState({
    title: false,
    authors: false,
    abstract: false
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    let newErrors = {};
    if (!formData.title) newErrors.title = true;
    if (!formData.authors) newErrors.authors = true;
    if (!formData.abstract) newErrors.abstract = true;

    setErrors(newErrors);

    // If no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      alert('Abstract Submitted Successfully!');
      setIsModalOpen(false); // Close the modal after submission
    }
  };

  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Clear the form and close the modal
  const clearForm = () => {
    setFormData(createAbstractFormModel()); // Reset form data
    setErrors({
      title: false,
      authors: false,
      abstract: false
    }); // Reset errors state
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div>
      {/* Button to open modal */}
      <button
        className="p-3 pl-9 border-2 border-black mr-7 pr-9 bg-white"
        onClick={toggleModal}
      >
        Abstracts
      </button>

      {/* Modal */}
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
    </div>
  );
};

export default AbstractSubmission;
