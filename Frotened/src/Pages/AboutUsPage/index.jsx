import React from 'react';
import HeaderUpper from '../../Components/HeaderUpper';
import LowerHeader from '../../Components/LowerHeader';
import Footer from '../../Components/Footer';

const AboutUsPage = () => {
  return (
    <>
      <HeaderUpper />
      <LowerHeader />

      {/* Advisory Committee Section */}
      <div className="bg-white p-6 my-8 w-11/12 sm:w-4/5 mx-auto border-t-4 border-red-700">
        <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4 text-center">Advisory Committee</h3>

        {/* Flex container for two sections */}
        <div className="flex flex-col sm:flex-row justify-between space-y-6 sm:space-y-0 sm:space-x-8">

          {/* First container for the first set of members */}
          <div className="bg-blue-50 rounded-lg shadow-lg p-6 w-full sm:w-1/2 space-y-4">
            <p className="text-lg sm:text-xl text-gray-700 mb-4">Prof. Manuka Khanna, Pro Vice-Chancellor, University of Lucknow</p>
            <p className="text-lg sm:text-xl text-gray-700 mb-4">Prof. V. K. Sharma, Dean Students’ Welfare, University of Lucknow</p>
            <p className="text-lg sm:text-xl text-gray-700 mb-4">Prof. P. K. Rath, Department of Physics, University of Lucknow</p>
            <p className="text-lg sm:text-xl text-gray-700 mb-4">Prof. R. M. Naik, Department of Chemistry, University of Lucknow</p>
            <p className="text-lg sm:text-xl text-gray-700 mb-4">Prof. Sheela Mishra, Dean-Faculty of Science, University of Lucknow</p>
            <p className="text-lg sm:text-xl text-gray-700 mb-4">Prof. Arvind Mohan, Dean-Faculty of Arts, University of Lucknow</p>
            <p className="text-lg sm:text-xl text-gray-700 mb-4">Prof. Sangeeta Sahu, Dean-Faculty of Management Studies, University of Lucknow</p>
            <p className="text-lg sm:text-xl text-gray-700 mb-4">Prof. Vijay Prakash Singh, Department of English and Modern European Languages, University of Lucknow</p>
            <p className="text-lg sm:text-xl text-gray-700 mb-4">Prof. Ranu Uniyal, Department of English and Modern European Languages, University of Lucknow</p>
            <p className="text-lg sm:text-xl text-gray-700 mb-4">Prof. Praveen Sahu, Head-Department of Commerce, Central University of Rajasthan</p>
            <p className="text-lg sm:text-xl text-gray-700 mb-4">Prof. Sanjay Kumar Srivastava, Department of AS&H, IET, Lucknow</p>
          </div>

          {/* Second container for the second set of members */}
          <div className="bg-green-50 rounded-lg shadow-lg p-6 w-full sm:w-1/2 space-y-4">
            <p className="text-lg sm:text-xl text-gray-700 mb-4">Prof. Sudhir Srivastava, HoD-Mathematics, Deen Dayal Upadhyay Gorakhpur University</p>
            <p className="text-lg sm:text-xl text-gray-700 mb-4">Prof. Sanjay Kumar Pandey, HoD-Mathematics, Banaras Hindu University</p>
            <p className="text-lg sm:text-xl text-gray-700 mb-4">Prof. I. V. S. Rathore, Kenyata University, Nairobi, Kenya</p>
            <p className="text-lg sm:text-xl text-gray-700 mb-4">Prof. Biswajit Sarkar, Yonsei University, Seoul, Korea</p>
            <p className="text-lg sm:text-xl text-gray-700 mb-4">Prof. Manju Agarwal, Department of Mathematics and Astronomy, University of Lucknow</p>
            <p className="text-lg sm:text-xl text-gray-700 mb-4">Prof. Pankaj Mathur, Department of Mathematics, University of Lucknow</p>
            <p className="text-lg sm:text-xl text-gray-700 mb-4">Prof. Vivek Sahai, Department of Mathematics, University of Lucknow</p>
            <p className="text-lg sm:text-xl text-gray-700 mb-4">Prof. Anjana Solaki, Department of Mathematics, BIET, Jhansi</p>
            <p className="text-lg sm:text-xl text-gray-700 mb-4">Prof. R. P. Singh, Department of English and Modern European Languages, University of Lucknow</p>
            <p className="text-lg sm:text-xl text-gray-700 mb-4">Prof. O. P. Singh, Department of AS&H, IET, Lucknow</p>
            <p className="text-lg sm:text-xl text-gray-700 mb-4">Dr. Ashutosh Tiwari, Director-Institute of Advanced Materials, Sweden</p>
            <p className="text-lg sm:text-xl text-gray-700 mb-4">Dr. Arvind Patel, IIT-Delhi</p>
            <p className="text-lg sm:text-xl text-gray-700 mb-4">Dr. Ashish Pandey, National Research Council, Canada</p>
          </div>
        </div>
      </div>

      {/* Organizing Committee Section */}
      <div className="bg-white p-6 my-2 w-11/12 sm:w-4/5 mx-auto">
        <div className="flex flex-col sm:flex-row justify-between space-y-6 sm:space-y-0 sm:space-x-4">
          {/* Treasurer Container */}
          <div className="bg-blue-50 rounded-lg shadow-lg p-6 w-full sm:w-1/2 flex flex-col items-center">
            <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Treasurer</h4>
            <p className="text-lg sm:text-xl text-gray-700 text-center">Dr. Savya Sachi</p>
            <p className="text-lg sm:text-xl text-gray-700 text-center">Department of Applied Science and Humanities, University of Lucknow</p>
          </div>

          {/* Organizing Secretary Container */}
          <div className="bg-green-50 rounded-lg shadow-lg p-6 w-full sm:w-1/2 flex flex-col items-center">
            <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Organizing Secretary</h4>
            <p className="text-lg sm:text-xl text-gray-700 text-center">Dr. Rachana Pathak</p>
            <p className="text-lg sm:text-xl text-gray-700 text-center mb-4">Department of Applied Science and Humanities, University of Lucknow</p>
            <p className="text-lg sm:text-xl text-gray-700 text-center">Dr. Khushboo Verma</p>
            <p className="text-lg sm:text-xl text-gray-700 text-center">Department of Applied Science and Humanities, University of Lucknow</p>
          </div>
        </div>
      </div>

      {/* Steering Committee Section */}
      <div className="bg-white p-6 my-8 w-11/12 sm:w-4/5 mx-auto border-t-4 border-red-700">
        <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4 text-center">Steering Committee</h3>

        {/* Flex container for the two sections */}
        <div className="flex flex-col sm:flex-row justify-between space-y-6 sm:space-y-0 sm:space-x-4">
          {/* First container for the first set of members */}
          <div className="bg-blue-50 rounded-lg shadow-lg p-6 w-full sm:w-1/2 flex flex-col items-center space-y-4">
            <p className="text-lg sm:text-xl text-gray-700 text-center">Prof. Pushpendra Tripathi, Director-IPS, Faculty of Engineering & Technology University of Lucknow</p>
            <p className="text-lg sm:text-xl text-gray-700 text-center">Prof. K. M. Agarwal, Department of Mathematics, BBC, Jhansi </p>
            <p className="text-lg sm:text-xl text-gray-700 text-center">Dr. Kamlesh Tiwari, Department of Mechanical Engineering, University of Lucknow</p>
            <p className="text-lg sm:text-xl text-gray-700 text-center">Dr. Siddharth Singh, Department of Electronics and Communication Engineering, University of Lucknow</p>
            <p className="text-lg sm:text-xl text-gray-700 text-center">Dr. Zeeshan Ali Siddiqui, Department of Computer Science and Engineering, University of Lucknow </p>
            <p className="text-lg sm:text-xl text-gray-700 text-center">Er. Nidhi Srivastava, Department of Civil Engineering, University of Lucknow </p>
            <p className="text-lg sm:text-xl text-gray-700 text-center">Dr. Vimal Kumar Vishwakarma, Dharmashastra National Law University </p>
            <p className="text-lg sm:text-xl text-gray-700 text-center">Dr. Saroj Yadav, Department of English, Central University of South Bihar </p>
          </div>

          {/* Second container for the second set of members */}
          <div className="bg-green-50 rounded-lg shadow-lg p-6 w-full sm:w-1/2 flex flex-col items-center space-y-4">
            <p className="text-lg sm:text-xl text-gray-700 text-center">Er. Wazid Ali, Department of Electrical Engineering, University of Lucknow </p>
            <p className="text-lg sm:text-xl text-gray-700 text-center">Dr. Himanshu Pandey, Incharge-Training and Placement Cell, FoET, University of Lucknow</p>
            <p className="text-lg sm:text-xl text-gray-700 text-center">Dr. Gaurav Gupta, Department of Electrical Engineering, University of Lucknow </p>
            <p className="text-lg sm:text-xl text-gray-700 text-center">Dr. Neha Arora, Department of English, Central University of Rajasthan, Ajmer </p>
            <p className="text-lg sm:text-xl text-gray-700 text-center">Dr. Vijay Kumar, Department of English, Galgotia University, Noida</p>
            <p className="text-lg sm:text-xl text-gray-700 text-center">Dr. Jyoti Juyal, Department of Linguistics, Sharda University, Mathura</p>
            <p className="text-lg sm:text-xl text-gray-700 text-center">Dr. Saurabh Yadav, Department of Chemistry, U. P. State Institute of Forensic Science, Lucknow</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AboutUsPage;
