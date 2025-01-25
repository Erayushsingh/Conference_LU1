import React from 'react'
import HeaderUpper from '../../Components/HeaderUpper'
import Footer from '../../Components/Footer'
import LowerHeader from '../../Components/LowerHeader'

const AboutFoet = () => {
  return (
    <>
     <HeaderUpper/>
     <LowerHeader/>
     
      {/* Faculty of Engineering & Technology Section */}

      <div className='p-4 '>
      <div className="mb-12">
          <h2 className="text-xl sm:text-4xl font-semibold text-black mb-4 text-center">Faculty of Engineering & Technology</h2>
          <p className="text-lg sm:text-2xl text-gray-700 mb-4">The Faculty of Engineering & Technology was re-established in 2017, as one of the faculties of the University of Lucknow. The vision of the Faculty is to be globally renowned for imparting quality engineering education in pioneering interdisciplinary technology.</p>
          <p className="text-lg sm:text-2xl text-gray-700">The mission of the Faculty is to produce morally aware, dynamic, competent engineering professionals and leaders who shall steer the nation to a better future.</p>
          <p className="text-lg sm:text-2xl text-gray-700 mt-4">The Faculty offers B.Tech. programmes in five branches of Engineering:</p>
          <ul className="list-disc pl-6 text-lg sm:text-2xl text-gray-700 mt-2">
            <li>Civil Engineering</li>
            <li>Computer Science & Engineering</li>
            <li>Electrical Engineering</li>
            <li>Electronics & Communication Engineering</li>
            <li>Mechanical Engineering</li>
          </ul>
        </div>

        {/* Department of Applied Science & Humanities Section */}
        <div className="bg-white  rounded-lg  mb-12">
          <h2 className="text-2xl sm:text-4xl font-semibold text-black mb-4 text-center">Department of Applied Science & Humanities</h2>
          <p className="text-lg sm:text-2xl text-gray-700 mb-4">The Department of Applied Sciences and Humanities functions with the mission of expanding human knowledge and benefiting society through education and research on fundamental and applied aspects of science and humanities in a collegial, interdisciplinary atmosphere.</p>
          <p className="text-lg sm:text-2xl text-gray-700 mb-4">The Department comprises multi-disciplinary faculty members mainly related to Physics, Chemistry, Mathematics, and English literature to cater to the needs of multi-disciplinary students in the Faculty. The department provides state-of-the-art educational/research laboratories and central library facilities for both basic/applied and engineering research.</p>
          <p className="text-lg sm:text-2xl text-gray-700">The Applied Sciences & Humanities Department (ASH) is the second largest department of the Faculty of Engineering & Technology. It participates in B.Tech, BCA, and MCA programmes by offering courses in:</p>
          <ul className="list-disc pl-6 text-lg sm:text-2xl text-gray-700 mt-2">
            <li>Applied Chemistry</li>
            <li>Applied Mathematics</li>
            <li>Applied Physics</li>
            <li>Professional Communication & Humanities</li>
          </ul>
          <p className="text-lg sm:text-2xl text-gray-700 mt-4">The Department has well-qualified faculty and supporting staff, with all laboratories equipped with modern equipment.</p>
        </div>

        {/* Department Objectives Section */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-4xl font-semibold text-black mb-4 text-center">Department Objectives</h2>
          <ul className="list-decimal pl-6 text-lg sm:text-2xl text-gray-700">
            <li>Strengthen the fundamentals in Applied Sciences (Chemistry, Physics & Mathematics).</li>
            <li>Develop the ability to communicate effectively as technical professionals and appraise learning.</li>
            <li>Provide an environment for working effectively in groups.</li>
            <li>Sensitize students to environmental and ethical issues.</li>
          </ul>
        </div>

        {/* Courses Offered Section */}
        <div className="bg-white flex flex-col items-center  rounded-lg  mb-12">
          <h2 className="text-2xl sm:text-4xl font-semibold text-black mb-2 md:mr-28 text-center">Courses Offered</h2>
          <div>
            <ul className="list-disc pl-6 text-lg sm:text-2xl text-gray-700 flex flex-col ">
              <li>Engineering Chemistry</li>
              <li>Engineering Physics</li>
              <li>Engineering Mathematics</li>
              <li>English (Professional Communication)</li>
              <li>Environment & Ecology</li>
              <li>Human Values & Ethics</li>
              <li>Essence of Indian Knowledge System</li>
              <li>Critical thinking</li>
              <li>Nanotechnology</li>
            </ul>
          </div>
        </div>

        {/* Consultancy Areas Section */}
        <div className='bg-white flex flex-col items-center  rounded-lg  mb-12 md:ml-12'>
          <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-2 text-center">Consultancy Areas in Applied Science & Humanities</h2>
          <div>
            <ul className="list-disc pl-6 text-lg sm:text-2xl text-gray-700 flex flex-col ">
              <li>Waste Water Treatment</li>
              <li>Solid Waste Management</li>
              <li>Rain Water Harvesting</li>
              <li>Corporate Communication</li>
              <li>Corporate Training</li>
              <li>Life Skill Training</li>
              <li>Voice & Accent Training</li>
              <li>Behavioral Training</li>
              <li>Leadership Training</li>
              <li>Building Corporate Negotiation Framework</li>
            </ul>
          </div>
        </div>
        
      </div> 
     <Footer/>
    </>
  )
}

export default AboutFoet