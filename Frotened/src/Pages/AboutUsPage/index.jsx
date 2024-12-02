import React from 'react';
import HeaderUpper from '../../Components/HeaderUpper';
import LowerHeader from '../../Components/LowerHeader';
import Footer from '../../Components/Footer';

const AboutUsPage = () => {
  return (
    <>
      <HeaderUpper />
      <LowerHeader />

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Faculty of Engineering & Technology Section */}
        <div className="mb-12">
          <h2 className=" text-xl sm:text-4xl font-semibold text-black mb-4">Faculty of Engineering & Technology</h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-4">The Faculty of Engineering & Technology was re-established in 2017, as one of the faculties of the University of Lucknow. The vision of the Faculty is to be globally renowned for imparting quality engineering education in pioneering interdisciplinary technology.</p>
          <p className="text-lg sm:text-xl text-gray-700">The mission of the Faculty is to produce morally aware, dynamic, competent engineering professionals and leaders who shall steer the nation to a better future.</p>
          <p className="text-lg sm:text-xl text-gray-700 mt-4">The Faculty offers B.Tech. programmes in five branches of Engineering:</p>
          <ul className="list-disc pl-6 text-lg sm:text-xl text-gray-700 mt-2">
            <li>Civil Engineering</li>
            <li>Computer Science & Engineering</li>
            <li>Electrical Engineering</li>
            <li>Electronics & Communication Engineering</li>
            <li>Mechanical Engineering</li>
          </ul>
        </div>

        {/* Department of Applied Science & Humanities Section */}
        <div className="bg-white  rounded-lg  mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">Department of Applied Science & Humanities</h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-4">The Department of Applied Sciences and Humanities functions with the mission of expanding human knowledge and benefiting society through education and research on fundamental and applied aspects of science and humanities in a collegial, interdisciplinary atmosphere.</p>
          <p className="text-lg sm:text-xl text-gray-700 mb-4">The Department comprises multi-disciplinary faculty members mainly related to Physics, Chemistry, Mathematics, and English literature to cater to the needs of multi-disciplinary students in the Faculty. The department provides state-of-the-art educational/research laboratories and central library facilities for both basic/applied and engineering research.</p>
          <p className="text-lg sm:text-xl text-gray-700">The Applied Sciences & Humanities Department (ASH) is the second largest department of the Faculty of Engineering & Technology. It participates in B.Tech, BCA, and MCA programmes by offering courses in:</p>
          <ul className="list-disc pl-6 text-lg sm:text-xl text-gray-700 mt-2">
            <li>Applied Chemistry</li>
            <li>Applied Mathematics</li>
            <li>Applied Physics</li>
            <li>Professional Communication & Humanities</li>
          </ul>
          <p className="text-lg sm:text-xl text-gray-700 mt-4">The Department has well-qualified faculty and supporting staff, with all laboratories equipped with modern equipment.</p>
        </div>

        {/* Department Objectives Section */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">Department Objectives</h2>
          <ul className="list-decimal pl-6 text-lg sm:text-xl text-gray-700">
            <li>Strengthen the fundamentals in Applied Sciences (Chemistry, Physics & Mathematics).</li>
            <li>Develop the ability to communicate effectively as technical professionals and appraise learning.</li>
            <li>Provide an environment for working effectively in groups.</li>
            <li>Sensitize students to environmental and ethical issues.</li>
          </ul>
        </div>

        {/* Courses Offered Section */}
        <div className="bg-white  rounded-lg  mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-2">Courses Offered</h2>
          <ul className="list-disc pl-6 text-lg sm:text-xl text-gray-700">
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

        {/* Consultancy Areas Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-2">Consultancy Areas in Applied Science & Humanities</h2>
          <ul className="list-decimal pl-6 text-lg sm:text-xl text-gray-700">
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

        {/* Advisory Committee Section */}
        <div className="bg-white p-6 my-8 w-11/12 sm:w-4/5 mx-auto border-t-4 border-red-700">
          <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4 text-center">Advisory Committee</h3>
          <div className="flex flex-col sm:flex-row justify-between space-y-6 sm:space-y-0 sm:space-x-8">
            <div className="bg-blue-50 rounded-lg shadow-lg p-6 w-full sm:w-1/2 space-y-4">
              {/* List of Advisory Committee Members */}
              <p className="text-lg sm:text-xl text-gray-700">Prof. Manuka Khanna, Pro Vice-Chancellor, University of Lucknow</p>
              <p className="text-lg sm:text-xl text-gray-700">Prof. V. K. Sharma, Dean Students’ Welfare, University of Lucknow</p>
              <p className="text-lg sm:text-xl text-gray-700">Prof. P. K. Rath, Department of Physics, University of Lucknow</p>
              {/* Add other members similarly */}
            </div>
            <div className="bg-green-50 rounded-lg shadow-lg p-6 w-full sm:w-1/2 space-y-4">
              {/* List of Advisory Committee Members */}
              <p className="text-lg sm:text-xl text-gray-700">Prof. Sudhir Srivastava, Mathematics, Deen Dayal Upadhyay Gorakhpur University</p>
              <p className="text-lg sm:text-xl text-gray-700">Prof. Sanjay Kumar Pandey, HoD-Mathematics, Banaras Hindu University</p>
              <p className="text-lg sm:text-xl text-gray-700">Prof. I. V. S. Rathore, Kenyata University, Nairobi, Kenya</p>
              {/* Add other members similarly */}
            </div>
          </div>
        </div>

        {/* Organizing Committee Section */}
        <div className="bg-white p-6 my-2 w-11/12 sm:w-4/5 mx-auto">
          <div className="flex flex-col sm:flex-row justify-between space-y-6 sm:space-y-0 sm:space-x-4">
            <div className="bg-blue-50 rounded-lg shadow-lg p-6 w-full sm:w-1/2 flex flex-col items-center">
              <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Treasurer</h4>
              <p className="text-lg sm:text-xl text-gray-700 text-center">Dr. Savya Sachi</p>
              <p className="text-lg sm:text-xl text-gray-700 text-center">Department of Applied Science and Humanities, University of Lucknow</p>
            </div>

            <div className="bg-green-50 rounded-lg shadow-lg p-6 w-full sm:w-1/2 flex flex-col items-center">
              <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Organizing Secretary</h4>
              <p className="text-lg sm:text-xl text-gray-700 text-center">Dr. Rachana Pathak</p>
              <p className="text-lg sm:text-xl text-gray-700 text-center mb-4">Department of Applied Science and Humanities, University of Lucknow</p>
              <p className="text-lg sm:text-xl text-gray-700 text-center">Dr. Khushboo Verma</p>
              <p className="text-lg sm:text-xl text-gray-700 text-center">Department of Applied Science and Humanities, University of Lucknow</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUsPage;
