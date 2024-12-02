import React from 'react';
import HeaderUpper from '../../Components/HeaderUpper';
import LowerHeader from '../../Components/LowerHeader';
import Footer from '../../Components/Footer';

const AboutUsPage = () => {
  return (
    <>
      <HeaderUpper />
      <LowerHeader />

      <div class="max-w-4xl mx-auto px-4 py-8">


        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-blue-600">BGP Best Paper and Presentation Prize</h1>
          <p class="text-lg mt-2">Encouraging young mathematicians with a prize of Rs. 2000 for the best paper and its presentation in the areas of pure mathematics and applied mathematics.</p>
        </div>


        <div class="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 class="text-2xl font-semibold text-blue-600 mb-4">Eligibility Criteria</h2>
          <ul class="space-y-3 text-lg text-gray-700">
            <li>Maximum age limit is 40 years by November 14, 2024.</li>
            <li>Papers by joint authors will not be considered.</li>
            <li>Only original and unpublished work will be considered. The papers will be reviewed by experts and must be presented personally at the conference.</li>
            <li>Selection will be based on both review and presentation. The decision of the experts will be final.</li>
          </ul>
        </div>


        <div class="bg-white shadow-md rounded-lg p-6">
          <h2 class="text-2xl font-semibold text-blue-600 mb-4">Submission Details</h2>
          <p class="text-lg text-gray-700 mb-4">A PDF file of the paper, along with the completed registration form, should reach the Secretary, Bharata Ganita Parisad, Department of Mathematics & Astronomy, University of Lucknow, Lucknow, latest by October 30, 2024.</p>
          <p class="text-lg text-gray-700">Email submissions to: <span class="font-semibold">generalsecretarybgp@gmail.com</span></p>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default AboutUsPage;