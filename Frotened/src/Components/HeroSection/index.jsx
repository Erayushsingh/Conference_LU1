import React from "react";
import gatePhoto from "/src/assets/Lu-main.jpg";
import gatePhoto1 from "/src/assets/Lu-gate.jpg";
import LuPhoto01 from "/src/assets/LuPhoto01.jpg";
import LuPhoto02 from "/src/assets/LuPhoto02.jpg";
import LuPhoto03 from "/src/assets/LuPhoto03.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const HeroSection = () => {
  const handleRegisterClick = () => {
    window.open('/auth', '_blank');
  };

  return (
    <>
      {/* Banner Section */}
      <div className="bg-red-900 text-white py-2 text-center w-full">
        <div className="flex justify-center items-center flex-col md:flex-row  animate-zoom-out-in">
          <p className="text-2xl font-bold mb-2 md:mb-0 ">
            Registration Opened for RAASHEE-2025 | Registration Close 25 Dec 2024
          </p>
          <button
            onClick={handleRegisterClick}
            className="md:mt-0 md:ml-5 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 md:text-lg font-bold"
          >
            Register Now
          </button>
        </div>
      </div>

      {/* Image Section with Carousel */}
      <div className="relative mt-1">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide w-full"
          data-bs-ride="carousel"
          data-bs-interval="2000"
        >
          <div className="carousel-inner">
          <div className="carousel-item">
              <img
                src={gatePhoto}
                className="d-block w-full object-cover h-[400px] sm:h-[500px] lg:h-[600px]"
                alt="Gate 2"
              />
            </div>
            <div className="carousel-item active">
              <img
                src={LuPhoto02}
                className="d-block w-full object-cover h-[400px] sm:h-[500px] lg:h-[600px]"
                alt="Gate"
              />
            </div>
            <div className="carousel-item active">
              <img
                src={gatePhoto1}
                className="d-block w-full object-cover h-[400px] sm:h-[500px] lg:h-[600px]"
                alt="Gate"
              />
            </div>
            <div className="carousel-item">
              <img
                src={LuPhoto03}
                className="d-block w-full object-cover h-[400px] sm:h-[500px] lg:h-[600px]"
                alt="Lucknow University"
              />
            </div>
            
            <div className="carousel-item active">
                <img
                  src={LuPhoto01}
                  className="d-block w-full object-cover h-[400px] sm:h-[500px] lg:h-[600px]"
                  alt="Gate"
                />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="bg-black p-4">
        <div className="flex flex-col justify-center items-center  ">
          <p className="md:text-3xl text-[15px] font-extrabold text-white text-center">
            Department of Applied Science & Humanities
          </p>
          <p className="text-white md:text-4xl text-xl font-bold ">University of Lucknow</p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="md:py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
              Introduction
            </h2>
            <p className="text-lg text-gray-700 mb-6 md:text-3xl md:leading-8">
              Basic sciences like Mathematics, Physics, and Chemistry serve as
              the foundation for any form of structure—whether it's a design
              structure, a physical structure, a data structure, or even a logic
              structure. These sciences are often referred to as the pillars of
              nature. They reinforce the very concept of engineering as the
              evolution of the world, emphasizing that engineering is the
              application of knowledge to solve problems created by nature. In
              essence, basic sciences not only provide solutions to natural
              phenomena but also evolve with time, paving the way for
              engineering to thrive.
            </p>
            <p className="text-lg text-gray-700 mb-6  md:text-3xl md:leading-8">
              Just as the basic sciences have evolved, so too has human society.
              The development of human social behavior, linguistic capabilities,
              imagination, psychological traits, and sociological understanding
              manifests the core values that enable humans to persist in the
              evolutionary process. Humans have exhibited remarkable strength in
              acknowledging their shortcomings, modifying approaches, and diving
              deeper into nature's mysteries to discover solutions. This
              exploration becomes the bedrock for the evolution of engineering.
            </p>
            <p className="text-lg text-gray-700 mb-6  md:text-3xl md:leading-8">
              Thus, the combination of basic sciences and human traits is
              collectively known as{" "}
              <strong>Applied Sciences and Humanities in Engineering</strong>.
              These disciplines work hand-in-hand, addressing challenges and
              facilitating the continuous growth of modern engineering.
            </p>
            <p className="text-lg text-gray-700 mb-6  md:text-3xl md:leading-8">
              The central question that drives this discourse is whether recent
              trends in applied sciences and humanities are sufficiently
              prepared to support and advance modern engineering as they have
              done in the past. If the answer is yes, we need to identify the
              specific trends and explore how they contribute to this
              development. On the other hand, if the answer is no, the
              course-correction required must be examined.
            </p>
            <p className="text-lg text-gray-700 md:text-3xl md:leading-8 ">
              Louis D. Brandeis once said, “There are no shortcuts in
              evolution.” At the Department of Applied Sciences and Humanities,
              we believe that students must be ready to ask tough questions and
              be prepared with bold solutions. We neither take shortcuts nor
              promote any. We support them in becoming better human beings than
              yesterday. As Franklin Foer wisely stated, “[Humans] have been
              merging with tools since the beginning of human evolution, and
              arguably, that’s one of the things that makes us human beings.”
            </p>
          </div>
        </div>
      </div>

      {/* Our Objective Section */}
      <div className="md:pb-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
              Our Objective
            </h2>
            <p className="text-lg text-gray-700 mb-6  md:text-3xl md:leading-8">
              The conference is an attempt at promoting basic sciences and
              humanistic studies through scholarly research. It aims at
              providing a platform to hold scholastic deliberations and
              engagements to appropriate concurrent ideas. It will provide an
              opportunity to delegates from all fields of applied sciences and
              humanities to forward their ideas, which would help in the growth
              of society through discussions, deliberations, and innovations. It
              also aims at:
            </p>

            <ul className="list-inside space-y-4 text-lg text-gray-800  md:text-3xl md:leading-8">
              <li className="flex items-center">
                <span className="w-3 h-3 mr-4 bg-indigo-500 rounded-full  md:text-3xl md:leading-8"></span>
                Encouraging scholarly discussions on the ongoing researches in
                the field of applied sciences and humanities.
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 mr-4 bg-indigo-500 rounded-full  md:text-3xl md:leading-8"></span>
                Contributing towards the sustainable development of the nation.
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 mr-4 bg-indigo-500 rounded-full  md:text-3xl md:leading-8"></span>
                Providing a comprehensive overview of the current state of
                research and exploring new avenues for future growth.
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 mr-4 bg-indigo-500 rounded-full  md:text-3xl md:leading-8"></span>
                Establishing coherence between core subjects and allowing the
                fraternization of different ideas.
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 mr-4 bg-indigo-500 rounded-full  md:text-3xl md:leading-8"></span>
                Publishing a high-quality special issue research periodical with
                international reach.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex items-center flex-col-reverse md:pl-40 md:flex-row">
        <div className="bg-white rounded-lg  shadow-lg p-6 my-8 w-full sm:w-4/5 lg:w-[80%] xl:w-1/2 mx-auto">
          <h3 className="md:text-4xl text-3xl font-extrabold text-center text-gray-800 mb-8">
            Keynote and Invited Talks
          </h3>
          <ul className="list-inside space-y-2 text-lg sm:text-xl w-full text-gray-700 text-center">
            <li className="font-semibold text-red-600 md:mb-3  md:text-3xl md:leading-8">
              Prof. V. P. Singh, Department of EML, University of Lucknow
            </li>
            <li className="font-semibold text-indigo-600 md:mb-3  md:text-3xl md:leading-8">
              Prof. B. K. Mohanty, IIM-Lucknow 
            </li>
            <li className="font-semibold text-red-600 md:mb-3  md:text-3xl md:leading-8">
              Prof. Binod Mishra, IIT-Roorkee 
            </li>
            <li className="font-semibold text-indigo-600 md:mb-3  md:text-3xl md:leading-8">
            Prof. Rajinder Singh Chandel, Punjabi University, Patiala 
            </li>
            
            <li className="font-semibold text-red-600 md:mb-3  md:text-3xl md:leading-8">
            Prof. Rajeev Sijaria, Head- ABVSM&E, JNU 
            </li>
            
            <li className="font-semibold text-indigo-600 md:mb-3  md:text-3xl md:leading-8">
            Prof. R. P. Singh, University of Lucknow 
            </li>
            <li className="font-semibold text-red-600 md:mb-3  md:text-3xl md:leading-8">
            Prof. Ajit Srivastava, Institute of Physics, Bhubaneshwar 
            </li>
            <li className="font-semibold text-indigo-600 md:mb-3  md:text-3xl md:leading-8">
            Prof. Sikha Varma, Institute of Physics, Bhubaneshwar 
            </li>
            <li className="font-semibold text-red-600 md:mb-3  md:text-3xl md:leading-8">
            Prof. Praveen Sahu, Head-Department of Commerce, Central University of Rajasthan, Ajmer
            </li>
            
            <li className="font-semibold text-indigo-600 md:mb-3  md:text-3xl md:leading-8">
            Prof. Pankaj Srivastava, MNNIT, Prayagraj 
            </li>
            <li className="font-semibold text-red-600 md:mb-3  md:text-3xl md:leading-8">
            Dr. Neha Arora, Department of English, Central University of Rajasthan, Ajmer
            </li>
            <li className="font-semibold text-indigo-600 md:mb-3  md:text-3xl md:leading-8">
            Dr. Prabhanshu Tripathi, Principal Scientist, CSIR-IITR, Lucknow 
            </li>
            <li className="font-semibold text-red-600 md:mb-3  md:text-3xl md:leading-8">
            Dr. Saurabh Yadav, U. P. State Institute of Forensic Science, Lucknow 
            </li>
            <li className="font-semibold text-indigo-600 md:mb-3  md:text-3xl md:leading-8">
            Dr. Gopal Krishna Dixit, Grenoble, France 
            </li>
            <li className="font-semibold text-red-600 md:mb-3  md:text-3xl md:leading-8">
            Dr. Ashish Pandey, National Research Council, Canada 
            </li>
            <li className="font-semibold text-indigo-600 md:mb-3 md:text-3xl md:leading-8">
            Dr. Rituraj Mishra, National P. G. College, Lucknow  
            </li>
            <li className="font-semibold text-red-600 md:mb-3 md:text-3xl md:leading-8">
            Ms. Supriya Yadav, GM-HR, Magnet Technology, Noida   
            </li>
            <li className="font-semibold text-indigo-600 md:mb-3 md:text-3xl md:leading-8">
            Dr. Sapna Sharma, Assistant Professor, U. P. State Institute of Forensic Science, Lucknow  
            </li>
            <li className="font-semibold text-red-600 md:mb-3 md:text-3xl md:leading-8">
            Dr. Vijay Kumar, Associate Professor, Department of English, Galgotia University   
            </li>
          </ul>
        </div>

        <div className="p-6 my-8 w-full sm:w-[30%] mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-6">
            Venue of Conference
          </h2>

          <p className="text-lg text-gray-700 text-center">
            The conference will be held at:
          </p>

          <a href="https://maps.app.goo.gl/8coD5FYR6acGvP8d7" target="blank" className="text-xl font-semibold flex justify-center text-red-900 mb-4 text-center animate-zoom-out-in md:text-xl md:leading-8">
            Faculty of Engineering and Technology,
            <br />
            University of Lucknow,
            <br />
            Second Campus, Jankipuram Extension,
            <br />
            Lucknow-226031, Uttar Pradesh.
          </a>
        </div>


      </div>
      <div className="bg-white rounded-lg p-6 my-8 w-full sm:w-4/5 mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-6">
          Accommodation
        </h2>

        <p className="text-lg text-gray-700 mb-4 md:mb-0 md:text-xl md:leading-8">
          Accommodation will be provided to the candidates on an actual payment
          basis with prior information. Participants are requested to intimate
          their preference for accommodation at the earliest possible so that
          organizers can reserve the accommodation based on availability.
        </p>

        <p className="text-lg text-gray-700 mb-4 md:mb-0  md:text-xl md:leading-8">
          There are limited rooms available in the University Guest House. Once
          the Guest House is full, participants will be accommodated in hotels
          nearby the campus.
        </p>

        <p className="text-lg text-gray-700 mb-6 md:mb-0 md:text-xl md:leading-8">
          Please bring a valid ID for verification at the reception.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 my-8 w-full sm:w-4/5 mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 text-center md:mb-0">
          Program Schedule
        </h2>

        <div className="bg-white rounded-lg shadow-lg p-6 my-8 w-full">
          <h3 className="text-2xl font-bold text-black mb-4">
            Day 1: 07 February 2025, Friday
          </h3>
          <table className="min-w-full table-auto border-collapse bg-blue-50">
            <thead>
              <tr>
                <th className="border-b px-4 py-2 text-left text-lg font-semibold text-gray-700 md:text-xl md:leading-8">
                  Time
                </th>
                <th className="border-b px-4 py-2 text-left text-lg font-semibold text-gray-700 md:text-xl md:leading-8">
                  Event
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700 md:text-xl md:leading-8">
              <tr>
                <td className="border px-4 py-2">09:30 am – 10:00 am</td>
                <td className="border px-4 py-2">Inauguration</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">10:00 am – 10:30 am</td>
                <td className="border px-4 py-2">Keynote Address-I</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">10:30 am – 11:00 am</td>
                <td className="border px-4 py-2">Invited Talk</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">11:00 am – 11:30 am</td>
                <td className="border px-4 py-2">Tea Break</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">11:30 am – 01:30 pm</td>
                <td className="border px-4 py-2">Track: Paper Presentation</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">01:30 pm – 02:30 pm</td>
                <td className="border px-4 py-2">Lunch Break</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">02:30 pm – 03:00 pm</td>
                <td className="border px-4 py-2">Keynote Address-II</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">03:00 pm – 03:30 pm</td>
                <td className="border px-4 py-2">Invited Talk</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">03:30 pm – 05:00 pm</td>
                <td className="border px-4 py-2">Track: Paper Presentation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 my-8 w-full">
          <h3 className="text-2xl font-bold text-black mb-4">
            Day 2: 08 February 2025, Saturday
          </h3>
          <table className="min-w-full table-auto border-collapse bg-green-50 md:text-xl md:leading-8">
            <thead>
              <tr>
                <th className="border-b px-4 py-2 text-left text-lg font-semibold text-gray-700">
                  Time
                </th>
                <th className="border-b px-4 py-2 text-left text-lg font-semibold text-gray-700">
                  Event
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="border px-4 py-2">09:00 am – 09:30 am</td>
                <td className="border px-4 py-2">Keynote Address-III</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">09:30 am – 10:00 am</td>
                <td className="border px-4 py-2">Invited Talk</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">10:00 am – 10:30 am</td>
                <td className="border px-4 py-2">Tea Break</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">10:30 am – 01:00 pm</td>
                <td className="border px-4 py-2">Track: Paper Presentation</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">01:00 pm – 02:00 pm</td>
                <td className="border px-4 py-2">Lunch Break</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">02:00 pm – 02:30 pm</td>
                <td className="border px-4 py-2">Keynote Address-IV</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">02:30 pm – 03:00 pm</td>
                <td className="border px-4 py-2">Invited Talk</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">03:00 pm – 04:30 pm</td>
                <td className="border px-4 py-2">Track: Paper Presentation</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">04:30 pm – 04:50 pm</td>
                <td className="border px-4 py-2">Tea Break</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Organizing Committee Section */}
      <div className="bg-white p-6 my-8 w-full sm:w-4/5 mx-auto border-t-4 border-red-700">
        {/* Flex container for individual sections */}
        <div className="flex flex-col sm:flex-row justify-between space-x-4 space-y-4 sm:space-y-0">
          {/* Chief Patron Container */}
          <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg w-full sm:w-1/3">
            <h4 className="text-xl font-semibold text-blue-700 md:text-xl md:leading-8">
              CHIEF-PATRON:
            </h4>
            <p className="text-lg text-gray-700 text-center md:text-xl md:leading-8">
              Prof. Alok Kumar Rai, Hon’ble Vice-Chancellor, University of
              Lucknow
            </p>
          </div>

          {/* Chief Guest Container */}
          <div className="flex flex-col items-center p-4 bg-green-50 rounded-lg w-full sm:w-1/3">
            <h4 className="text-xl font-semibold text-green-700 md:text-xl md:leading-8">
              CHIEF GUEST:
            </h4>
            <p className="text-lg text-gray-700 text-center md:text-xl md:leading-8">
              Prof. Bhartendu K Singh, Director, IIITDM, Jabalpur
            </p>
          </div>

          {/* Patron Container */}
          <div className="flex flex-col items-center p-4 bg-yellow-50 rounded-lg w-full sm:w-1/3">
            <h4 className="text-xl font-semibold text-yellow-700 md:text-xl md:leading-8">PATRON:</h4>
            <p className="text-lg text-gray-700 text-center md:text-xl md:leading-8">
              Prof. A. K. Singh, Dean, Faculty of Engineering and Technology,
              University of Lucknow
            </p>
          </div>
        </div>
      </div>

      {/* Organizing Committee Section */}
      <div className="bg-white p-6 my-8 w-full sm:w-4/5 mx-auto border-t-4 border-red-700">
        {/* Flex container for the individual sections */}
        <div className="flex flex-col sm:flex-row justify-around space-x-4 space-y-4 sm:space-y-0">
          {/* Convener Container */}
          <div className="bg-yellow-50 rounded-lg shadow-lg p-6 w-full sm:w-1/3 flex flex-col items-center">
            <h4 className="text-xl font-semibold text-blue-700 mb-2 md:text-xl md:leading-8">
              Convener
            </h4>
            <p className="text-lg text-gray-700 text-center md:text-xl md:leading-8">
              Dr. Deepak Gupta
            </p>
            <p className="text-lg text-gray-700 text-center md:text-xl md:leading-8">
              Department of Applied Science and Humanities, University of
              Lucknow
            </p>
          </div>

          {/* Co-Conveners Container */}
          <div className="bg-green-50 rounded-lg shadow-lg p-6 w-full sm:w-1/3 flex flex-col items-center">
            <h4 className="text-xl font-semibold text-green-700 mb-2 md:text-xl md:leading-8">
              Co-Conveners
            </h4>
            <p className="text-lg text-gray-700 text-center mb-4 md:text-xl md:leading-8">
              Dr. Anupam Kumar Tripathi, Department of Applied Science and
              Humanities, University of Lucknow
            </p>
            <p className="text-lg text-gray-700 text-center md:text-xl md:leading-8">
              Dr. Ranvijay Pratap Singh, Department of Applied Science and
              Humanities, University of Lucknow
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

