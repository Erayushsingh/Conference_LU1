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
        <div className='mb-10'>
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


        {/* Organizing Committee Section */}
        <div className="bg-white  p-6 my-2 w-11/12 border-red-800 border-t-4 sm:w-4/5 mx-auto">
          <div className="flex flex-col mt-7  sm:flex-row justify-between space-y-6 sm:space-y-0 sm:space-x-4">
            <div className="bg-blue-50 rounded-lg shadow-lg p-6 pb-28 w-full sm:w-1/2 flex flex-col items-center">
              <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Treasurer</h4>
              <p className="text-lg sm:text-xl text-gray-700 text-center">Dr. Savya Sachi</p>
              <p className="text-lg sm:text-xl text-gray-700 text-center">Department of Applied Science and Humanities, University of Lucknow</p>
            </div>

            <div className="bg-green-50 mt-8 rounded-lg shadow-lg p-6 w-full sm:w-1/2 flex flex-col items-center">
              <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Co-Conveners</h4>
              <p className="text-lg sm:text-xl text-gray-700 text-center"> Dr. Anupam Kumar Tripathi,</p>
              <p className="text-lg sm:text-xl text-gray-700 text-center mb-4">Department of Applied Science and Humanities, University of Lucknow</p>
              <p className="text-lg sm:text-xl text-gray-700 text-center">Dr. Ranvijay Pratap Singh,</p>
              <p className="text-lg sm:text-xl text-gray-700 text-center">Department of Applied Science and Humanities, University of Lucknow</p>
            </div>
          </div>

          <div className="flex flex-col mt-7 sm:flex-row justify-between space-y-6 sm:space-y-0 sm:space-x-4">
            
            <div className="bg-green-50  rounded-lg shadow-lg p-6 w-full sm:w-1/2 flex flex-col items-center">
              <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Organizing Secretary</h4>
              <p className="text-lg sm:text-xl text-gray-700 text-center">Dr. Rachana Pathak</p>
              <p className="text-lg sm:text-xl text-gray-700 text-center mb-4">Department of Applied Science and Humanities, University of Lucknow</p>
              <p className="text-lg sm:text-xl text-gray-700 text-center">Dr. Khushboo Verma</p>
              <p className="text-lg sm:text-xl text-gray-700 text-center">Department of Applied Science and Humanities, University of Lucknow</p>
            </div>
            <div className="bg-blue-50 mb-8 rounded-lg shadow-lg p-6 w-full sm:w-1/2 flex flex-col items-center">
              <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Treasurer</h4>
              <p className="text-lg sm:text-xl text-gray-700 text-center">Dr. Savya Sachi</p>
              <p className="text-lg sm:text-xl text-gray-700 text-center">Department of Applied Science and Humanities, University of Lucknow</p>
            </div>
          </div>
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
              <p className="text-lg sm:text-xl text-gray-700">Prof. R. M. Naik, Department of Chemistry, University of Lucknow</p>
              <p className="text-lg sm:text-xl text-gray-700">Prof. Sheela Mishra, Dean-Faculty of Science, University of Lucknow</p>
              <p className="text-lg sm:text-xl text-gray-700">Prof. Arvind Mohan, Dean-Faculty of Arts, University of Lucknow</p>
              <p className="text-lg sm:text-xl text-gray-700">Prof. Sangeeta Sahu, Dean-Faculty of Management Studies, University of Lucknow </p>
              <p className="text-lg sm:text-xl text-gray-700">Prof. Vijay Prakash Singh, Department of English and Modern European Languages, University of Lucknow</p>
              <p className="text-lg sm:text-xl text-gray-700">Prof. Ranu Uniyal, Department of English and Modern European Languages, University of Lucknow</p>
              <p className="text-lg sm:text-xl text-gray-700">Prof. Sudhir Srivastava, HoD-Mathematics, Deen Dayal Upadhyay Gorakhpur University</p>
              <p className="text-lg sm:text-xl text-gray-700">Prof. Sanjay Kumar Pandey, HoD-Mathematics, Banaras Hindu University </p>
              <p className="text-lg sm:text-xl text-gray-700">Prof. I. V. S. Rathore, Kenyata University, Nairobi, Kenya </p>
              {/* Add other members similarly */}
            </div>
            <div className="bg-green-50 rounded-lg shadow-lg p-6 w-full sm:w-1/2 space-y-4">
              {/* List of Advisory Committee Members */}
              
              <p className="text-lg sm:text-xl text-gray-700">Prof. Biswajit Sarkar, Yonsei University, Seoul, Korea</p>
              <p className="text-lg sm:text-xl text-gray-700">Prof. Manju Agarwal, Department of Mathematics and Astronomy, University of Lucknow </p>
              <p className="text-lg sm:text-xl text-gray-700">Prof. Pankaj Mathur, Department of Mathematics, University of Lucknow</p>
              <p className="text-lg sm:text-xl text-gray-700">Prof. Vivek Sahai, Department of Mathematics, University of Lucknow</p>
              <p className="text-lg sm:text-xl text-gray-700">Prof. Anjana Solaki, Department of Mathematics, BIET, Jhansi </p>
              <p className="text-lg sm:text-xl text-gray-700">Prof. R. P. Singh, Department of English and Modern European Languages, University of Lucknow</p>
              <p className="text-lg sm:text-xl text-gray-700">Prof. O. P. Singh, Department of AS&H, IET, Lucknow</p>
              <p className="text-lg sm:text-xl text-gray-700">Prof. Praveen Sahu, Head-Department of Commerce, Central University of Rajasthan, Ajmer </p>
              <p className="text-lg sm:text-xl text-gray-700">Prof. Sanjay Kumar Srivastava, Department of AS&H, IET, Lucknow </p>
              <p className="text-lg sm:text-xl text-gray-700">Dr. Ashutosh Tiwari, Director-Institute of Advanced Materials, Sweden</p>
              <p className="text-lg sm:text-xl text-gray-700">Dr. Arvind Patel, IIT-Delhi </p>
              <p className="text-lg sm:text-xl text-gray-700">Dr. Ashish Pandey, National Research Council, Canada </p>
              {/* Add other members similarly */}
            </div>
          </div>
        </div>



        <h3 className="md:text-3xl pt-7 text-xl font-bold text-center border-t-4 border-red-600 text-gray-800 mb-8">STEERING COMMITTEE</h3>
        <div className="bg-white rounded-lg  shadow-lg p-6 my-8 w-full sm:w-4/5 lg:w-[80%]  mx-auto">
          
          <ul className="space-y-2 text-left">
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
            Prof. Pushpendra Tripathi, Director-IPS, Faculty of Engineering & Technology University of Lucknow
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
            Prof. K. M. Agarwal, Department of Mathematics, BBC, Jhansi 
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
            Dr. Kamlesh Tiwari, Department of Mechanical Engineering, University of Lucknow
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
            Dr. Siddharth Singh, Department of Electronics and Communication Engineering, University of Lucknow
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
            Dr. Zeeshan Ali Siddiqui, Department of Computer Science and Engineering, University of Lucknow
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
            Er. Nidhi Srivastava, Department of Civil Engineering, University of Lucknow
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
            Er. Wazid Ali, Department of Electrical Engineering, University of Lucknow 
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
            Dr. Himanshu Pandey, Incharge-Training and Placement Cell, FoET, University of Lucknow 
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
            Dr. Gaurav Gupta, Department of Electrical Engineering, University of Lucknow
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
            Dr. Neha Arora, Department of English, Central University of Rajasthan, Ajmer 
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
            Dr. Vijay Kumar, Department of English, Galgotia University, Noida 
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
            Dr. Jyoti Juyal, Department of Linguistics, Sharda University, Mathura
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
            Dr. Vimal Kumar Vishwakarma, Dharmashastra National Law University 
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
            Dr. Saroj Yadav, Department of English, Central University of South Bihar
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
            Dr. Saurabh Yadav, Department of Chemistry, U. P. State Institute of Forensic Science, Lucknow
            </li>
            
            
          </ul>
        </div>


      </div>
      
      


      <Footer />
    </>
  );
};

export default AboutUsPage;
