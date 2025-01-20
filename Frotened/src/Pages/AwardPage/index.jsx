import React from 'react';
import HeaderUpper from '../../Components/HeaderUpper';
import LowerHeader from '../../Components/LowerHeader';
import Footer from '../../Components/Footer';

const AboutUsPage = () => {
  return (
    <>
      <HeaderUpper />
      <LowerHeader />

      <div className="max-w-4xl mx-auto px-4 py-8">


        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black">Best Paper and Presentation Prize</h1>
          <p className="text-lg mt-2">Encouraging young Researcher with a prize for the best paper and its presentation in the areas of Applied Sciences and Humanities.</p>
        </div>


        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-black mb-4">Eligibility Criteria</h2>
          <ul className="space-y-3 text-lg text-gray-700">
            <li>Maximum age limit is 40 years by January 1, 2025.</li>
            <li>Papers by joint authors will not be considered.</li>
            <li>Only original and unpublished work will be considered. The papers will be reviewed by experts and must be presented personally at the conference.</li>
            <li>Selection will be based on both review and presentation. The decision of the experts will be final.</li>
          </ul>
        </div>


        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-black mb-4">Submission Details</h2>
          <p className="text-lg text-gray-700 mb-4">A PDF file of the paper, along with the completed registration form, should reach the Convener, Department of Applied Sciences And Humanities, Faculty of Engineering And Technology, University of Lucknow, Lucknow, latest by January 5, 2025.</p>
          <p className="text-lg text-gray-700">Email submissions to: <span className="font-semibold text-blue-700">raashee.foet@gmail.com</span></p>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default AboutUsPage;