import React from 'react'
import Raashee from '/src/assets/Raashee.jpg'
import HeaderUpper from '../../Components/HeaderUpper'
import LowerHeader from '../../Components/LowerHeader'
import Footer from '../../Components/Footer'

const AlreadySubmitted = () => {
  return (
    <>
      <HeaderUpper />
      <LowerHeader />
      <div className="bg-gray-50 mt-4 mb-4 flex flex-col items-center justify-center  px-4">

        
          <img
            src={Raashee}
            alt="Abstract Submitted"
            className="w-[200px]  rounded-full shadow-lg mb-6 "
          />
       

        {/* Content Section */}
        <div className="max-w-lg text-center bg-white shadow-lg rounded-lg p-6 w-full animate-zoom-out-in">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">
            You have already submitted the abstract.
          </h2>
          <p className="text-lg text-gray-700">
            Please wait for further notifications. We will get back to you once the review process is completed.
          </p>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default AlreadySubmitted