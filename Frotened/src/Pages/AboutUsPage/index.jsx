import React from "react";
import HeaderUpper from "../../Components/HeaderUpper";
import LowerHeader from "../../Components/LowerHeader";
import Footer from "../../Components/Footer";

const AboutUsPage = () => {
  return (
    <>
      <HeaderUpper />
      <LowerHeader />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Organizing Committee Section */}
        <div className="bg-white  p-6 my-2 w-11/12 border-red-800 border-t-4 sm:w-4/5 mx-auto">
          <div className="flex flex-col mt-7  sm:flex-row justify-between space-y-6 sm:space-y-0 sm:space-x-4">
            <div className="bg-green-50 mt-8 rounded-lg shadow-lg p-6 w-full sm:w-1/2 flex flex-col items-center md:mx-auto">
              <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                Co-Conveners
              </h4>
              <p className="text-lg sm:text-xl text-gray-700 text-center">
                {" "}
                Dr. Anupam Kumar Tripathi,
              </p>
              <p className="text-lg sm:text-xl text-gray-700 text-center mb-4">
                Department of Applied Science and Humanities, University of
                Lucknow
              </p>
              <p className="text-lg sm:text-xl text-gray-700 text-center">
                Dr. Ranvijay Pratap Singh,
              </p>
              <p className="text-lg sm:text-xl text-gray-700 text-center">
                Department of Applied Science and Humanities, University of
                Lucknow
              </p>
            </div>
          </div>

          <div className="flex flex-col mt-7 sm:flex-row justify-between space-y-6 sm:space-y-0 sm:space-x-4">
            <div className="bg-green-50  rounded-lg shadow-lg p-6 w-full sm:w-1/2 flex flex-col items-center">
              <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                Organizing Secretary
              </h4>
              <p className="text-lg sm:text-xl text-gray-700 text-center">
                Dr. Rachana Pathak
              </p>
              <p className="text-lg sm:text-xl text-gray-700 text-center mb-4">
                Department of Applied Science and Humanities, University of
                Lucknow
              </p>
              <p className="text-lg sm:text-xl text-gray-700 text-center">
                Dr. Khushboo Verma
              </p>
              <p className="text-lg sm:text-xl text-gray-700 text-center">
                Department of Applied Science and Humanities, University of
                Lucknow
              </p>
            </div>
            <div className="bg-blue-50 mb-8 rounded-lg shadow-lg p-6 w-full sm:w-1/2 flex flex-col items-center">
              <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                Treasurer
              </h4>
              <p className="text-lg sm:text-xl text-gray-700 text-center">
                Dr. Savya Sachi
              </p>
              <p className="text-lg sm:text-xl text-gray-700 text-center">
                Department of Applied Science and Humanities, University of
                Lucknow
              </p>
            </div>
          </div>
        </div>

        {/* Advisory Committee Section */}
        <div className="bg-white p-6 my-8 w-11/12 sm:w-4/5 mx-auto border-t-4 border-red-700">
          <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4 text-center">
            Advisory Committee
          </h3>
          <div className="flex flex-col sm:flex-row justify-between space-y-6 sm:space-y-0 sm:space-x-8">
            <div className="bg-blue-50 rounded-lg shadow-lg p-6 w-full sm:w-1/2 space-y-4">
              {/* List of Advisory Committee Members */}
              <p className="text-lg sm:text-xl text-gray-700">
                Prof. Manuka Khanna, Pro Vice-Chancellor, University of Lucknow
              </p>
              <p className="text-lg sm:text-xl text-gray-700">
                Prof. V. K. Sharma, Dean Students’ Welfare, University of
                Lucknow
              </p>
              <p className="text-lg sm:text-xl text-gray-700">
                Prof. P. K. Rath, Department of Physics, University of Lucknow
              </p>
              <p className="text-lg sm:text-xl text-gray-700">
                Prof. R. M. Naik, Department of Chemistry, University of Lucknow
              </p>
              <p className="text-lg sm:text-xl text-gray-700">
                Prof. Sheela Mishra, Dean-Faculty of Science, University of
                Lucknow
              </p>
              <p className="text-lg sm:text-xl text-gray-700">
                Prof. Arvind Mohan, Dean-Faculty of Arts, University of Lucknow
              </p>
              <p className="text-lg sm:text-xl text-gray-700">
                Prof. Sangeeta Sahu, Dean-Faculty of Management Studies,
                University of Lucknow{" "}
              </p>
              <p className="text-lg sm:text-xl text-gray-700">
                Prof. Vijay Prakash Singh, Department of English and Modern
                European Languages, University of Lucknow
              </p>
              <p className="text-lg sm:text-xl text-gray-700">
                Prof. Ranu Uniyal, Department of English and Modern European
                Languages, University of Lucknow
              </p>
              <p className="text-lg sm:text-xl text-gray-700">
                Prof. Sudhir Srivastava,Mathematics, Deen Dayal Upadhyay
                Gorakhpur University
              </p>
              <p className="text-lg sm:text-xl text-gray-700">
                Prof. Sanjay Kumar Pandey, Mathematics, Banaras Hindu University{" "}
              </p>
              <p className="text-lg sm:text-xl text-gray-700">
                Prof. I. V. S. Rathore, Kenyata University, Nairobi, Kenya{" "}
              </p>
              <p className="text-lg sm:text-xl text-gray-700">
                Prof B M Dixit Shri Ramswaroop Memorial University Barabanki
              </p>
              <p className="text-lg sm:text-xl text-gray-700">
                Prof. N.K Pandey, Department of Physics, University of Lucknow
              </p>
              <p className="text-lg sm:text-xl text-gray-700">
                Prof. Onkar Prasad, Head, Department of Physics, University of
                Lucknow
              </p>
            </div>
            <div className="bg-green-50 rounded-lg shadow-lg p-6 w-full sm:w-1/2 space-y-4">
              {/* List of Advisory Committee Members */}

              <p className="text-lg sm:text-xl text-gray-700">
                Prof. Biswajit Sarkar, Yonsei University, Seoul, Korea
              </p>
              <p className="text-lg sm:text-xl text-gray-700">
                Prof. Manju Agarwal, Department of Mathematics and Astronomy,
                University of Lucknow{" "}
              </p>
              <p className="text-lg sm:text-xl text-gray-700">
                Prof. Vivek Sahai, Department of Mathematics and Astronomy,
                University of Lucknow
              </p>
              <p className="text-lg sm:text-xl text-gray-700">
                Prof. Pankaj Mathur, Department of Mathematics and Astronomy,
                University of Lucknow
              </p>
              <p className="text-lg sm:text-xl text-gray-700">
                Prof. Anjana Solaki, Department of Mathematics, BIET, Jhansi{" "}
              </p>
              <p className="text-lg sm:text-xl text-gray-700">
                Prof. R. P. Singh, Department of English and Modern European
                Languages, University of Lucknow
              </p>
              <p className="text-lg sm:text-xl text-gray-700">
                Prof. O. P. Singh, Department of AS&H, IET, Lucknow
              </p>
              <p className="text-lg sm:text-xl text-gray-700">
                Prof. Praveen Sahu, Head-Department of Commerce, Central
                University of Rajasthan, Ajmer{" "}
              </p>
              <p className="text-lg sm:text-xl text-gray-700">
                Prof. Sanjay Kumar Srivastava, Department of AS&H, IET, Lucknow{" "}
              </p>
              <p className="text-lg sm:text-xl text-gray-700">
                Prof. Anil Mishra, Head, Department of Chemistry,
                University of Lucknow
              </p>
              <p className="text-lg sm:text-xl text-gray-700">
                Prof. Maitraye Priyadarshini, Head, Department of English and
                Modern European Languages, University of Lucknow
              </p>
              <p className="text-lg sm:text-xl text-gray-700">
                Dr. Ashutosh Tiwari, Director-Institute of Advanced Materials,
                Sweden
              </p>
              <p className="text-lg sm:text-xl text-gray-700">
                Dr. Arvind Patel, IIT-Delhi{" "}
              </p>
              <p className="text-lg sm:text-xl text-gray-700">
                Dr. Ashish Pandey, National Research Council, Canada{" "}
              </p>
              
            </div>
          </div>
        </div>

        <h3 className="md:text-3xl pt-7 text-xl font-bold text-center border-t-4 border-red-600 text-gray-800 mb-8">
          STEERING COMMITTEE
        </h3>
        <div className="bg-white rounded-lg  shadow-lg p-6 my-8 w-full sm:w-4/5 lg:w-[80%]  mx-auto">
          <ul className="space-y-2 text-left">
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
              Prof. Pushpendra Tripathi, Director-IPS, Faculty of Engineering &
              Technology University of Lucknow
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
              Prof. K. M. Agarwal, Department of Mathematics, BBC, Jhansi
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
              Dr. Kamlesh Tiwari, Department of Mechanical Engineering,
              University of Lucknow
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
              Dr. Siddharth Singh, Department of Electronics and Communication
              Engineering, University of Lucknow
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
              Dr. Zeeshan Ali Siddiqui, Department of Computer Science and
              Engineering, University of Lucknow
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
              Er. Nidhi Srivastava, Department of Civil Engineering, University
              of Lucknow
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
              Er. Wazid Ali, Department of Electrical Engineering, University of
              Lucknow
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
              Dr. Himanshu Pandey, Incharge-Training and Placement Cell, FoET,
              University of Lucknow
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
              Dr. Gaurav Gupta, Department of Electrical Engineering, University
              of Lucknow
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
              Dr. Neha Arora, Department of English, Central University of
              Rajasthan, Ajmer
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
              Dr. Vijay Kumar, Department of English, Galgotia University, Noida
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
              Dr. Jyoti Juyal, Department of Linguistics, Sharda University,
              Mathura
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
              Dr. Vimal Kumar Vishwakarma, Dharmashastra National Law University
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
              Dr. Saroj Yadav, Department of English, Central University of
              South Bihar
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
              Dr. Saurabh Yadav, Department of Chemistry, U. P. State Institute
              of Forensic Science, Lucknow
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
              Dr Ramgopal Singh Shri Ramswaroop Memorial University Barabanki
            </li>
          </ul>
        </div>

        <h3 className="md:text-3xl pt-7 text-xl font-bold text-center border-t-4 border-red-600 text-gray-800 mb-8">
          ORGANIZING COMMITTEE
        </h3>
        <div className="flex flex-col mt-7 sm:flex-row justify-between space-y-6 sm:space-y-0 sm:space-x-4 mb-8">
          <div className="bg-green-50  rounded-lg shadow-lg p-6 w-full sm:w-1/2 flex flex-col items-center">
            <p className="text-lg sm:text-xl text-gray-700 text-center md:mb-1">
              Dr. Parul Singh
            </p>
            <p className="text-lg sm:text-xl text-gray-700 text-center md:mb-1">
              Dr. Arif Jamal
            </p>
            <p className="text-lg sm:text-xl text-gray-700 text-center md:mb-1">
              Dr. Sumedha Dwivedi
            </p>
            <p className="text-lg sm:text-xl text-gray-700 text-center md:mb-1">
              Dr. Pushpendra Verma
            </p>
            <p className="text-lg sm:text-xl text-gray-700 text-center md:mb-1">
              Dr. Amit Misra
            </p>
          </div>
          <div className="bg-blue-50 mb-8 rounded-lg shadow-lg p-6 w-full sm:w-1/2 flex flex-col items-center">
            <p className="text-lg sm:text-xl text-gray-700 text-center md:mb-1">
              Dr. Ankit Prajapati
            </p>
            <p className="text-lg sm:text-xl text-gray-700 text-center md:mb-1">
              Dr. Bhimsen Chaudhary
            </p>
            <p className="text-lg sm:text-xl text-gray-700 text-center md:mb-1">
              Dr. Vinay Kumar
            </p>
            <p className="text-lg sm:text-xl text-gray-700 text-center md:mb-1">
              Mr. Hrishabh Narayan
            </p>
            <p className="text-lg sm:text-xl text-gray-700 text-center md:mb-1">
              Dr. Swadha Jaiswal
            </p>
          </div>
        </div>

        <div className="flex flex-col border-t-4 border-red-400  mt-7 sm:flex-row justify-between space-y-6 sm:space-y-0 sm:space-x-4 mb-8">
          <div className=" bg-blue-50 mt-10 rounded-lg shadow-lg p-6 w-full sm:w-1/2 flex flex-col items-center">
            <h3 className="md:text-3xl text-xl font-bold text-center  text-gray-800 mb-2">
              Editor-in-Chief
            </h3>
            <div className="w-full h-full flex justify-center ">
              <p className="text-lg sm:text-xl text-gray-700 mt-3 mb-3 md:mt-5 text-center md:mb-1">
                Prof. Ashok Kumar Singh
              </p>
            </div>
          </div>
          <div className="bg-green-50 md:mt-10 mb-8 rounded-lg shadow-lg p-6 w-full sm:w-1/2 flex flex-col items-center">
            <h3 className="md:text-3xl text-xl font-bold text-center  text-gray-800 mb-2">
              Editors
            </h3>
            <p className="text-lg sm:text-xl text-gray-700 text-center md:mb-1">
              Dr. Deepak Gupta
            </p>
            <p className="text-lg sm:text-xl text-gray-700 text-center md:mb-1">
              Dr. Savya Sachi
            </p>
            <p className="text-lg sm:text-xl text-gray-700 text-center md:mb-1">
              Dr. Anupam Kumar Tripathi
            </p>
            <p className="text-lg sm:text-xl text-gray-700 text-center md:mb-1">
              Dr. Rachana Pathak
            </p>
            <p className="text-lg sm:text-xl text-gray-700 text-center md:mb-1">
              Dr. Ranvijay Pratap Singh
            </p>
            <p className="text-lg sm:text-xl text-gray-700 text-center md:mb-1">
              Dr. Khushboo Verma
            </p>
          </div>
        </div>

        <h3 className="md:text-4xl pt-7  text-xl font-bold text-center text-gray-800 mb-8">
          Editorial Board
        </h3>
        <div className="bg-white rounded-lg  shadow-lg p-6 my-8 w-full sm:w-4/5 lg:w-[80%]  mx-auto">
          <ul className="space-y-2 text-left">
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
              Prof. P. K. Rath, Professor, Department of Physics, University of
              Lucknow
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
              Prof. Vijay Prakash Singh, Professor, Department of English and
              Modern European Languages, University of Lucknow
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
              Prof. R. M. Naik, Professor, Department of Chemistry, University
              of Lucknow
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
              Prof. Biswajit Sarkar, Professor, Department of Industrial
              Management and Engineering, Yonsei University, South Korea
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
              Prof. Manju Agarwal, Professor, Department of Mathematics and
              Astronomy, University of Lucknow
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
              Prof. Athanase Papadopoulos, Department of Mathematics, University
              of Strasbourg, France
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
              Prof. Sangeeta Sahu, Professor, Department of Management,
              University of Lucknow
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
              Prof. Binod Mishra, Professor, Department of Humanities and Social
              Sciences, Indian Institute of Technology, Roorkee
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
              Prof. Jose Carlos Redondo Olmedilla, Department of English,
              University of Almeria, Spain
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
              Prof. Satendra Pal Singh, Professor, Department of Physics,
              University of Lucknow
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
              Prof. V. K. Sharma, Professor, Department of Chemistry, University
              of Lucknow
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
              Prof. Vivek Sahai, Department of Mathematics and Astronomy,
              University of Lucknow
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
              Prof. Pankaj Mathur, Department of Mathematics and Astronomy,
              University of Lucknow
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
              Prof. Praveen Sahu, Professor, Department of Commerce and
              Management, Central University of Rajasthan
            </li>
            <li className="text-gray-600 md:mb-3  md:text-xl md:leading-8">
              Dr. Ashish Pandey, Associate Research Officer (AcRO), Conseil
              National de Recherches Canada, Gouvernement dvu Canada, Ottawa,
              Ontario, Canada, K1A 0R6
            </li>
          </ul>
        </div>

        <h3 className="md:text-3xl pt-7 text-xl font-bold text-center border-t-4 border-red-600 text-gray-800 mb-8">
          STUDENT COORDINATORS
        </h3>
        <div className="flex flex-col mt-7 sm:flex-row justify-between space-y-6 sm:space-y-0 sm:space-x-4">
          <div className="  rounded-lg shadow-lg p-6 w-full sm:w-1/2 flex flex-col items-center">
            <h3 className="md:text-xl pt-7 text-xl font-bold text-center  text-gray-800 mb-8">
              Student Coordinators
            </h3>

            <p className="text-lg sm:text-xl text-gray-700 text-center md:mb-1">
              Rushdiya
            </p>
            <p className="text-lg sm:text-xl text-gray-700 text-center md:mb-1">
              Shakti Ishan
            </p>
            <p className="text-lg sm:text-xl text-gray-700 text-center md:mb-1">
              Aditya Yadav
            </p>
          </div>

          <div className=" mb-8 rounded-lg shadow-lg p-6 w-full sm:w-1/2 flex flex-col items-center">
            <h3 className="md:text-xl pt-7 text-xl font-bold text-center  text-gray-800 mb-8">
              Student Co-coordinators
            </h3>
            <p className="text-lg sm:text-xl text-gray-700 text-center md:mb-1">
              Archana Kushwaha
            </p>
            <p className="text-lg sm:text-xl text-gray-700 text-center md:mb-1">
              Anurag Semwal
            </p>
            <p className="text-lg sm:text-xl text-gray-700 text-center md:mb-1">
              Pallavi Singh
            </p>
            <p className="text-lg sm:text-xl text-gray-700 text-center md:mb-1">
              Mohd. Abid Khan
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
