import React from "react";
import Logo4 from "/src/assets/Raashee_Logo.svg";
import gatePhoto from "/src/assets/Lu-main.jpg";
import gatePhoto1 from "/src/assets/Lu-gate.jpg";
import LuPhoto06 from "/src/assets/LuPhoto06.jpg";
import LuPhoto05 from "/src/assets/LuPhoto05.jpg";
import LuPhoto04 from "/src/assets/LuPhoto04.jpg";
import VC_Sir from "/src/assets/VC_Sir.jpg";
import TN_Sir from "/src/assets/TN_Sir.jpg";
import KeynoteSpeaker1 from "/src/assets/KeynoteSpeaker1.jpg";
import KeynoteSpeaker2 from "/src/assets/KeynoteSpeaker2.jpg";
import Akshay_Sharma from "/src/assets/Akshay_Sharma.jpg";
import Pravinji from "/src/assets/Pravinji.jpeg";
import Dean_Sir from "/src/assets/Dean_Sir.jpg";
import Deepak_Sir from "/src/assets/Deepak_Sir.jpg";
import Launch from "/src/assets/Launch.jpg";
import Launch01 from "/src/assets/Launch01.jpg";
import Launch02 from "/src/assets/Launch02.jpg";
import i001 from "/src/assets/i001.jpeg";
import i002 from "/src/assets/i002.jpeg";
import i004 from "/src/assets/i004.jpeg";
import Faculty from "/src/assets/faculty_photo.jpg";
import Faculty01 from "/src/assets/faculty_Photo01.jpg";
import Faculty02 from "/src/assets/faculty_Photo02.jpg";
import Faculty03 from "/src/assets/Faculty_Photo03.webp";
import ProfRaj from "/src/assets/ProfRaj.jpg";
import ProfVijay from "/src/assets/ProfVijay.jpg";
import rajeevji from "/src/assets/rajeevji.jpg";
import arvindji from "/src/assets/arvindji.jpg";
import satyadevji from "/src/assets/satyadevji.jpg";
import vijayji from "/src/assets/vijayji.jpg";
import drneha from "/src/assets/drneha.jpg";
import img001 from "/src/assets/img001.jpg";
import img002 from "/src/assets/img002.jpg";
import img003 from "/src/assets/img003.jpg";
import img004 from "/src/assets/img004.jpeg";
import img005 from "/src/assets/img005.jpeg";
import img006 from "/src/assets/img006.jpg";
import img007 from "/src/assets/img007.jpg";
import img008 from "/src/assets/img008.jpg";
import img009 from "/src/assets/img009.jpeg";
import img010 from "/src/assets/img010.jpeg";
import img011 from "/src/assets/img011.jpg";
import img012 from "/src/assets/img012.jpg";
import img013 from "/src/assets/img013.jpg";
import img014 from "/src/assets/img014.jpeg";
import img015 from "/src/assets/img015.jpg";
import img016 from "/src/assets/img016.jpg";
import drprabhanshu from "/src/assets/drprabhanshu.jpg";
import img112 from "/src/assets/img112.jpg";
import img113 from "/src/assets/img113.jpg";
import Indresh_Ji from "/src/assets/Indresh_Ji.jpg";
import drsaroj from "/src/assets/drsaroj.jpg";
import drsaurabh from "/src/assets/drsaurabh.jpg";
import iiit from "/src/assets/iiit.jpg";
import fans from "/src/assets/fans.png";
import pnb from "/src/assets/pnb.png";
import media from "/src/assets/media.png";
import UCO from "/src/assets/UCO.jpeg"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const HeroSection = () => {
  const handleRegisterClick = () => {
    window.open("/auth", "_blank");
  };

  return (
    <>
      {/* Banner Section */}
      <div className="bg-red-900 text-white py-2 text-center w-full">
        <div className="flex justify-center items-center flex-col md:flex-row  animate-zoom-out-in">
          <p className="text-2xl font-bold mb-2 md:mb-0 ">
            Registration Open for RAASHEE-2025
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

          <div className="carousel-item active">
              <img
                src={i002}
                className="d-block w-full object-cover h-[400px] sm:h-[500px] lg:h-[600px]"
                alt="i002"
              />
            </div>

            <div className="carousel-item active">
              <img
                src={i001}
                className="d-block w-full object-cover h-[400px] sm:h-[500px] lg:h-[600px]"
                alt="i001"
              />
            </div>

            <div className="carousel-item active">
              <img
                src={i004}
                className="d-block w-full object-cover h-[400px] sm:h-[500px] lg:h-[600px]"
                alt="i004"
              />
            </div>
            <div className="carousel-item active">
              <img
                src={Launch02}
                className="d-block w-full object-cover h-[400px] sm:h-[500px] lg:h-[600px]"
                alt="Gate 2"
              />
            </div>
            <div className="carousel-item active">
              <img
                src={Launch01}
                className="d-block w-full object-cover h-[400px] sm:h-[500px] lg:h-[600px]"
                alt="Gate 2"
              />
            </div>
            <div className="carousel-item active">
              <img
                src={Launch}
                className="d-block w-full object-cover h-[400px] sm:h-[500px] lg:h-[600px]"
                alt="Gate 2"
              />
            </div>
            <div className="carousel-item active">
              <img
                src={LuPhoto05}
                className="d-block w-full object-cover h-[400px] sm:h-[500px] lg:h-[600px]"
                alt="Gate 2"
              />
            </div>
            <div className="carousel-item active">
              <img
                src={gatePhoto}
                className="d-block w-full object-cover h-[400px] sm:h-[500px] lg:h-[600px]"
                alt="Gate 2"
              />
            </div>
            <div className="carousel-item active">
              <img
                src={LuPhoto04}
                className="d-block w-full object-cover h-[400px] sm:h-[500px] lg:h-[600px]"
                alt="Gate 2"
              />
            </div>

            <div className="carousel-item active">
              <img
                src={LuPhoto06}
                className="d-block w-full object-cover h-[400px] sm:h-[500px] lg:h-[600px]"
                alt="Gate 2"
              />
            </div>
            <div className="carousel-item active">
              <img
                src={gatePhoto1}
                className="d-block w-full object-cover h-[400px] sm:h-[500px] lg:h-[600px]"
                alt="Gate 2"
              />
            </div>
            <div className="carousel-item active">
              <img
                src={Faculty03}
                className="d-block w-full object-cover h-[400px] sm:h-[500px] lg:h-[600px]"
                alt="Gate 2"
              />
            </div>
            <div className="carousel-item active">
              <img
                src={Faculty01}
                className="d-block w-full object-cover overflow-hidden h-[400px] sm:h-[500px] lg:h-[600px]"
                alt="Gate 2"
              />
            </div>
            <div className="carousel-item active">
              <img
                src={Faculty}
                className="d-block w-full object-cover overflow-hidden h-[400px] sm:h-[500px] lg:h-[600px]"
                alt="Gate 2"
              />
            </div>
            <div className="carousel-item active">
              <img
                src={Faculty02}
                className="d-block w-full object-cover overflow-hidden h-[400px] sm:h-[500px] lg:h-[600px]"
                alt="Gate 2"
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
          <p className="text-white md:text-4xl text-xl font-bold ">
            University of Lucknow
          </p>
        </div>
      </div>

      <div className="bg-white p-6 my-8 space-y-6 w-full sm:w-4/5 mx-auto border-y-4 border-red-700">
        {/* Grid container for individual sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {/* Chief Patron Container */}
          <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
            <img src={VC_Sir} className="w-full h-[350px] object-fit rounded-lg" />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-700 text-center md:text-2xl md:leading-8">
                CHIEF-PATRON:
              </h4>
              <p className="text-lg text-gray-700 text-center md:text-2xl md:leading-8">
                <span className="font-bold">Prof. Alok Kumar Rai</span>
                <p>Hon’ble Vice-Chancellor</p>
                University of Lucknow
              </p>
            </div>
          </div>

          {/* Guest of Honor Container */}
          <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
            <img src={Indresh_Ji} className="w-full h-[350px] object-fit rounded-lg" />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-700 text-center md:text-2xl md:leading-8">
                CHIEF-GUIEST:
              </h4>
              <p className="text-lg text-gray-700 text-center md:text-2xl md:leading-8">
                <span className="font-bold">Shri Indresh Kumar Ji</span>
                <p>Patron</p>
                FANS
              </p>
            </div>
          </div>

          {/* Guest of Honor Container */}
          <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
            <img src={TN_Sir} className="w-full h-[350px] object-fit rounded-lg" />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-700 text-center md:text-2xl md:leading-8">
                GUEST OF HONOUR:
              </h4>
              <p className="text-lg text-gray-700 text-center md:text-2xl md:leading-8">
                <span className="font-bold">Prof. T. N. Singh</span>
                <p>Director</p>
                IIT-Patna
              </p>
            </div>
          </div>


          {/* Patron Container */}
          <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
            <img src={Dean_Sir} className="w-full h-[350px] object-fit rounded-lg" />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-700 text-center md:text-2xl md:leading-8">
                PATRON:
              </h4>
              <p className="text-lg text-gray-700 text-center md:text-2xl md:leading-8">
                <span className="font-bold">Prof. A. K. Singh</span>
                <p>Dean, FoET</p>
                University of Lucknow
              </p>
            </div>
          </div>


          {/* Another Special Guest */}
          <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
            <img src={Akshay_Sharma} className="w-full h-[350px] object-fit rounded-lg" />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-700 text-center md:text-2xl md:leading-8">SPECIAL GUEST:</h4>
              <p className="text-lg text-gray-700 text-center md:text-2xl md:leading-8">
                <span className="font-bold">Akshay Sharma</span>
                <p>Novelist, Actor, Philanthropist</p>
              </p>
            </div>
          </div>


        </div>
      </div>


      {/* Introduction Section */}
      <div className="md:py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
              Introduction
            </h2>
            <p className="text-lg text-gray-700 mb-6 md:text-2xl md:leading-8">
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
            <p className="text-lg text-gray-700 mb-6  md:text-2xl md:leading-8">
              Just as the basic sciences have evolved, so too has human society.
              The development of human social behavior, linguistic capabilities,
              imagination, psychological traits, and sociological understanding
              manifests the core values that enable humans to persist in the
              evolutionary process. Humans have exhibited remarkable strength in
              acknowledging their shortcomings, modifying approaches, and diving
              deeper into nature's mysteries to discover solutions. This
              exploration becomes the bedrock for the evolution of engineering.
            </p>
            <p className="text-lg text-gray-700 mb-6  md:text-2xl md:leading-8">
              Thus, the combination of basic sciences and human traits is
              collectively known as{" "}
              <strong>Applied Sciences and Humanities in Engineering</strong>.
              These disciplines work hand-in-hand, addressing challenges and
              facilitating the continuous growth of modern engineering.
            </p>
            <p className="text-lg text-gray-700 mb-6  md:text-2xl md:leading-8">
              The central question that drives this discourse is whether recent
              trends in applied sciences and humanities are sufficiently
              prepared to support and advance modern engineering as they have
              done in the past. If the answer is yes, we need to identify the
              specific trends and explore how they contribute to this
              development. On the other hand, if the answer is no, the
              course-correction required must be examined.
            </p>
            <p className="text-lg text-gray-700 md:text-2xl md:leading-8 ">
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
            <p className="text-lg text-gray-700 mb-6  md:text-2xl md:leading-8">
              The conference is an attempt at promoting basic sciences and
              humanistic studies through scholarly research. It aims at
              providing a platform to hold scholastic deliberations and
              engagements to appropriate concurrent ideas. It will provide an
              opportunity to delegates from all fields of applied sciences and
              humanities to forward their ideas, which would help in the growth
              of society through discussions, deliberations, and innovations. It
              also aims at:
            </p>

            <ul className="list-inside space-y-4 text-lg text-gray-800  md:text-2xl md:leading-8">
              <li className="flex items-center">
                <span className="w-3 h-3 mr-4 bg-indigo-500 rounded-full  md:leading-8"></span>
                Encouraging scholarly discussions on the ongoing researches in
                the field of applied sciences and humanities.
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 mr-4 bg-indigo-500 rounded-full  md:leading-8"></span>
                Contributing towards the sustainable development of the nation.
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 mr-4 bg-indigo-500 rounded-full md:leading-8"></span>
                Providing a comprehensive overview of the current state of
                research and exploring new avenues for future growth.
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 mr-4 bg-indigo-500 rounded-full   md:leading-8"></span>
                Establishing coherence between core subjects and allowing the
                fraternization of different ideas.
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 mr-4 bg-indigo-500 rounded-full  md:leading-8"></span>
                Publishing a high-quality special issue research periodical with
                international reach.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/*About Logo*/}
      <div className="flex p-7 justify-center  py-12">
        <div className="md:pb-10 w-[90%] max-w-4xl">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
            About The Logo
          </h2>
          <div className="flex justify-center">
            <img
              src={Logo4}
              alt="Logo Design"
              className="h-40 w-40 bg-black rounded-full mb-10 mt-6 shadow-lg"
            />
          </div>
          <p className="text-lg p-8 text-gray-800 leading-relaxed md:leading-8 md:text-2xl">
            The foundation of the logo comes from the helix structure of DNA,
            standing for humanity as a whole, a symbol that resonates with
            evolution. The gears along the structure give it a nature of
            engineering and technological aspects. Adding to that, the green
            leaf speaks volumes about the growth and evolution of the human race
            and years of advancement. The color red represents the passion of
            human society, while the blue adds an aspect of the nobleness that
            grounds engineering as a noble career.
          </p>
        </div>
      </div>

      <div className="">
        <div className="bg-white rounded-lg shadow-lg p-6 my-8 w-full sm:w-4/5 lg:w-[90%] xl:w-[80%] mx-auto">
          <div>
            <h3 className="md:text-4xl text-3xl font-extrabold text-center text-gray-800 mb-8">
              Keynote and Invited Talk
            </h3>



            {/* Grid for images */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-10">
              {/* Image Block 1 */}
              <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
                <img src={KeynoteSpeaker1} className="w-auto h-[100px] object-cover rounded-full" />
                <div className="p-4 text-center">
                  <p className="text-xl font-bold text-blue-700">Prof. Rajinder Singh Chandel</p>
                  <p className="text-lg text-gray-700">Punjabi University</p>
                </div>
              </div>

              {/* Image Block 2 */}
              <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
                <img src={rajeevji} className="w-auto h-[100px] object-cover rounded-full" />
                <div className="p-4 text-center">
                  <p className="text-xl font-bold text-blue-700">Prof. Rajeev Sijariya</p>
                  <p className="text-lg text-gray-700">JNU</p>
                </div>
              </div>

              {/* Image Block 3 */}
              <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
                <img src={satyadevji} className="w-auto h-[100px] object-cover rounded-full" />
                <div className="p-4 text-center">
                  <p className="text-xl font-bold text-blue-700">Prof. Satya Deo</p>
                  <p className="text-lg text-gray-700"> University of Allahabad</p>
                </div>
              </div>

              {/* Image Block 4 */}
              <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
                <img src={arvindji} className="w-auto h-[100px] object-cover rounded-full" />
                <div className="p-4 text-center">
                  <p className="text-xl font-bold text-blue-700">Prof. Arvind Kumar Singh</p>
                  <p className="text-lg text-gray-700"> Banaras Hindu University</p>
                </div>
              </div>

              {/* Image Block 8 */}
              <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
                <img src={ProfRaj} className="w-auto h-[100px] object-cover rounded-full" />
                <div className="p-4 text-center">
                  <p className="text-xl font-bold text-blue-700">Prof. Raj P. Chhabra</p>
                  <p className="text-lg text-gray-700">IIT-Kanpur</p>
                </div>
              </div>

               {/* Image Block 9 */}
               <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
                <img src={ProfVijay} className="w-auto h-[100px] object-cover rounded-full" />
                <div className="p-4 text-center">
                  <p className="text-xl font-bold text-blue-700">Prof. Vijay Prakash Singh</p>
                  <p className="text-lg text-gray-700">EMEL, UoL</p>
                </div>
              </div>

              {/* Image Block 10 */}
              <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
                <img src={KeynoteSpeaker2} className="w-auto h-[100px] object-cover rounded-full" />
                <div className="p-4 text-center">
                  <p className="text-xl font-bold text-blue-700">Prof. Binod Mishra</p>
                  <p className="text-lg text-gray-700">IIT-Roorkee</p>
                </div>
              </div>

              {/* Image Block 5 */}
              <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
                <img src={Pravinji} className="w-auto h-[100px] object-cover rounded-full" />
                <div className="p-4 text-center">
                  <p className="text-xl font-bold text-blue-700">Dr. Pravin Kumar</p>
                  <p className="text-lg text-gray-700">Scientist G,IUAC, New Delhi</p>
                </div>
              </div>

              {/* Image Block 6 */}
              <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
                <img src={iiit} className="w-auto h-[100px] object-cover rounded-full" />
                <div className="p-4 text-center">
                  <p className="text-xl font-bold text-blue-700">Dr. Dhananjoy Dey</p>
                  <p className="text-lg text-gray-700"> IIIT Lucknow</p>
                </div>
              </div>

              {/* Image Block 7 */}
              <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
                <img src={vijayji} className="w-auto h-[100px] object-cover rounded-full" />
                <div className="p-4 text-center">
                  <p className="text-xl font-bold text-blue-700">Dr. Vijay Kumar Singh</p>
                  <p className="text-lg text-gray-700">IIT Jodhpur</p>
                </div>
              </div>

              
             
              {/* Image Block 10 */}
              <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
                <img src={drneha} className="w-auto h-[100px] object-cover rounded-full" />
                <div className="p-4 text-center">
                  <p className="text-xl font-bold text-blue-700">Dr. Neha Arora</p>
                  <p className="text-lg text-gray-700">Central University of Rajasthan, Ajmer</p>
                </div>
              </div>


              {/* Image Block 10 */}
              <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
                <img src={drprabhanshu} className="w-auto h-[100px] object-cover rounded-full" />
                <div className="p-4 text-center">
                  <p className="text-xl font-bold text-blue-700">Dr. Prabhanshu Tripathi</p>
                  <p className="text-lg text-gray-700">CSIR-IITR, Lucknow</p>
                </div>
              </div>

              {/* Image Block 10 */}
              <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
                <img src={drsaroj} className="w-auto h-[100px] object-cover rounded-full" />
                <div className="p-4 text-center">
                  <p className="text-xl font-bold text-blue-700">Dr. Saroj Kumar</p>
                  <p className="text-lg text-gray-700"> Central University of South Bihar, Gaya</p>
                </div>
              </div>

              {/* Image Block 10 */}
              <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
                <img src={drsaurabh} className="w-auto h-[100px] object-cover rounded-full" />
                <div className="p-4 text-center">
                  <p className="text-xl font-bold text-blue-700">Dr. Saurabh Yadav</p>
                  <p className="text-lg text-gray-700">UPSIFS, Lucknow</p>
                </div>
              </div>

              {/* Image Block 10 */}
              <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
                <img src={img112} className="w-auto h-[100px] object-cover rounded-full" />
                <div className="p-4 text-center">
                  <p className="text-xl font-bold text-blue-700">Ms. Supriya Yadav</p>
                  <p className="text-lg text-gray-700">GM-HR, Magnet Technologies, Noida</p>
                </div>
              </div>

              <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
                <img src={img113} className="w-auto h-[100px] object-cover rounded-full" />
                <div className="p-4 text-center">
                  <p className="text-xl font-bold text-blue-700">Dr. Shashi Bala</p>
                  <p className="text-lg text-gray-700">University of Lucknow</p>
                </div>
              </div>

              <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
                <img src={img001} className="w-auto h-[100px] object-cover rounded-full" />
                <div className="p-4 text-center">
                  <p className="text-xl font-bold text-blue-700">Prof. Sangeeta Sahu</p>
                  <p className="text-lg text-gray-700">University of Lucknow</p>
                </div>
              </div>

              <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
                <img src={img002} className="w-auto h-[100px] object-cover rounded-full" />
                <div className="p-4 text-center">
                  <p className="text-xl font-bold text-blue-700">Prof. Vivek Sahai</p>
                  <p className="text-lg text-gray-700">University of Lucknow</p>
                </div>
              </div>

              <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
                <img src={img003} className="w-auto h-[100px] object-cover rounded-full" />
                <div className="p-4 text-center">
                  <p className="text-lg font-bold text-blue-700">Prof. Matreyi Priyadashini</p>
                  <p className="text-lg text-gray-700">University of Lucknow</p>
                </div>
              </div>

              <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
                <img src={img004} className="w-auto h-[100px] object-cover rounded-full" />
                <div className="p-4 text-center">
                  <p className="text-lg font-bold text-blue-700">Prof. R. P. Singh</p>
                  <p className="text-lg text-gray-700">University of Lucknow</p>
                </div>
              </div>

              <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
                <img src={img005} className="w-auto h-[100px] object-cover rounded-full" />
                <div className="p-4 text-center">
                  <p className="text-lg font-bold text-blue-700">Prof. Satendra Pal Singh</p>
                  <p className="text-lg text-gray-700">University of Lucknow</p>
                </div>
              </div>

              <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
                <img src={img006} className="w-auto h-[100px] object-cover rounded-full" />
                <div className="p-4 text-center">
                  <p className="text-lg font-bold text-blue-700">Prof. Anchal Srivastava</p>
                  <p className="text-lg text-gray-700">University of Lucknow</p>
                </div>
              </div>

              <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
                <img src={img007} className="w-auto h-[100px] object-cover rounded-full" />
                <div className="p-4 text-center">
                  <p className="text-lg font-bold text-blue-700">Prof. Abha Bishnoi</p>
                  <p className="text-lg text-gray-700">University of Lucknow</p>
                </div>
              </div>

              <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
                <img src={img008} className="w-auto h-[100px] object-cover rounded-full" />
                <div className="p-4 text-center">
                  <p className="text-lg font-bold text-blue-700">Prof. Meena Sahai</p>
                  <p className="text-lg text-gray-700">University of Lucknow</p>
                </div>
              </div>

              <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
                <img src={img009} className="w-auto h-[100px] object-cover rounded-full" />
                <div className="p-4 text-center">
                  <p className="text-lg font-bold text-blue-700">Prof. O. N. Upadhyay</p>
                  <p className="text-lg text-gray-700">University of Lucknow</p>
                </div>
              </div>

              <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
                <img src={img010} className="w-auto h-[100px] object-cover rounded-full" />
                <div className="p-4 text-center">
                  <p className="text-lg font-bold text-blue-700">Prof. Pankaj Mathur</p>
                  <p className="text-lg text-gray-700">University of Lucknow</p>
                </div>
              </div>

              <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
                <img src={img011} className="w-auto h-[100px] object-cover rounded-full" />
                <div className="p-4 text-center">
                  <p className="text-lg font-bold text-blue-700">Prof. Masood H. Siddiqui</p>
                  <p className="text-lg text-gray-700">University of Lucknow</p>
                </div>
              </div>

              <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
                <img src={img012} className="w-auto h-[100px] object-cover rounded-full" />
                <div className="p-4 text-center">
                  <p className="text-lg font-bold text-blue-700">Prof. D. R. Sahu</p>
                  <p className="text-lg text-gray-700">University of Lucknow</p>
                </div>
              </div>

              <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
                <img src={img013} className="w-auto h-[100px] object-cover rounded-full" />
                <div className="p-4 text-center">
                  <p className="text-lg font-bold text-blue-700">Prof. Manoj Kumar Singh</p>
                  <p className="text-lg text-gray-700">University of Lucknow</p>
                </div>
              </div>

              <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
                <img src={img014} className="w-auto h-[100px] object-cover rounded-full" />
                <div className="p-4 text-center">
                  <p className="text-lg font-bold text-blue-700">Dr. Shambhavi Mishra</p>
                  <p className="text-lg text-gray-700">University of Lucknow</p>
                </div>
              </div>

              <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
                <img src={img015} className="w-auto h-[100px] object-cover rounded-full" />
                <div className="p-4 text-center">
                  <p className="text-lg font-bold text-blue-700">Dr. Amrendra Kumar</p>
                  <p className="text-lg text-gray-700">University of Lucknow</p>
                </div>
              </div>

              <div className="flex flex-col items-center bg-blue-50 rounded-lg w-full">
                <img src={img016} className="w-auto h-[100px] object-cover rounded-full" />
                <div className="p-4 text-center">
                  <p className="text-lg font-bold text-blue-700">Dr. Jyotsna Singh</p>
                  <p className="text-lg text-gray-700">University of Lucknow</p>
                </div>
              </div>


            </div>
          </div>

          <div className="space-b-2 text-left md:grid md:grid-cols-2 md:gap-4">
            <div >
              <ul className="space-y-2">
                <li className="font-semibold text-red-600 md:mb-3 md:text-2xl md:leading-8">
                  Prof. Vinay Pandey, Tribhuwan University, Nepal
                </li>
                <li className="font-semibold text-indigo-600 md:mb-3 md:text-2xl md:leading-8">
                  Dr. Shefali Vaidya , CTU Czech Republic
                </li>

                <li className="font-semibold text-red-600 md:mb-3 md:text-2xl md:leading-8">
                  Dr. Shantu Mondal , CTU Czech Republic
                </li>
                <li className="font-semibold text-indigo-600 md:mb-3 md:text-2xl md:leading-8">
                  Dr. Mohammad Nazrul Islam Khan, Qassim University, Saudi Arabia
                </li>

                <li className="font-semibold text-red-600 md:mb-3 md:text-2xl md:leading-8">
                  Dr. Gopal Krishna Dixit, Grenoble, France
                </li>
                <li className="font-semibold text-indigo-600 md:mb-3 md:text-2xl md:leading-8">
                  Dr. Sanobar Siddiqui, University of Regina, Saskatchewan, Canada
                </li>

                <li className="font-semibold text-red-600 md:mb-3 md:text-2xl md:leading-8">
                  Dr. Naila Erum, Universiti Teknologi MARA, Malaysia
                </li>
                <li className="font-semibold text-indigo-600 md:mb-3 md:text-2xl md:leading-8">
                  Dr. Rajneesh Kumar Pandey, Tribhuwan University, Nepal
                </li>

                <li className="font-semibold text-red-600 md:mb-3 md:text-2xl md:leading-8">
                  Mr. Vivek Kumar, Cognizent, U. S. A.
                </li>
               
                <li className="font-semibold text-indigo-600 md:mb-3 md:text-2xl md:leading-8">
                  Prof. John Corcoran, University of Buffalo, New York, U. S. A.
                </li>

                <li className="font-semibold text-red-600 md:mb-3 md:text-2xl md:leading-8">
                  Prof. Ajit Srivastava, Institute of Physics, Bhubneshwar
                </li>
                <li className="font-semibold text-indigo-600 md:mb-3 md:text-2xl md:leading-8">
                  Prof. Anil Mishra, HOD Department of Chemistry University of Lucknow
                </li>

                
                <li className="font-semibold text-indigo-600 md:mb-3 md:text-2xl md:leading-8">
                  Prof. Roman Taraban, Texas Tech University, U. S. A.
                </li>

                <li className="font-semibold text-red-600 md:mb-3 md:text-2xl md:leading-8">
                  Prof. Shikha Verma, Institute of Physics, Bhubneshwar
                </li>
                

                <li className="font-semibold text-red-600 md:mb-3 md:text-2xl md:leading-8">
                  Dr. Jyoti Juyal, Sharda University, Mathura
                </li>
                <li className="font-semibold text-indigo-600 md:mb-3 md:text-2xl md:leading-8">
                  Dr. C. Withana, Study Group, Australia
                </li>

                <li className="font-semibold text-red-600 md:mb-3 md:text-2xl md:leading-8">
                  Dr. Vimal Kumar Vishwakarma, National Law University, Jabalpur
                </li>
 
              </ul>

            </div>

            <div>
              <ul className="space-y-2">
               
               
                <li className="font-semibold text-red-600 md:mb-3 md:text-2xl md:leading-8">
                  Prof. Pankaj Srivastava, MNNIT, Prayagraj
                </li>

                <li className="font-semibold text-indigo-600 md:mb-3 md:text-2xl md:leading-8">
                  Prof. Praveen Sahu, Central University of Rajasthan, Ajmer
                </li>
                <li className="font-semibold text-red-600 md:mb-3 md:text-2xl md:leading-8">
                  Prof. Aine Ito, NUS, Singapore
                </li>

                <li className="font-semibold text-indigo-600 md:mb-3 md:text-2xl md:leading-8">
                  Prof. B. K. Mohanty, IIM, Lucknow
                </li>
                <li className="font-semibold text-red-600 md:mb-3 md:text-2xl md:leading-8">
                  Prof. Tetiana Kaminska, Kyiv, Ukraine
                </li>

                <li className="font-semibold text-indigo-600 md:mb-3 md:text-2xl md:leading-8">
                  Prof. Rajeev Sijeria, Jawaharlal Nehru University, New Delhi
                </li>
                <li className="font-semibold text-red-600 md:mb-3 md:text-2xl md:leading-8">
                  Dr. Sanjay Medhavi, University of Lucknow, Lucknow
                </li>

                <li className="font-semibold text-indigo-600 md:mb-3 md:text-2xl md:leading-8">
                  Dr. Nimisha Kapoor, University of Lucknow, Lucknow
                </li>
                
                <li className="font-semibold text-red-600 md:mb-3 md:text-2xl md:leading-8">
                  Dr. Pravin Kumar, IUAC, New Delhi
                </li>

                <li className="font-semibold text-indigo-600 md:mb-3 md:text-2xl md:leading-8">
                  Dr. Vijay Kumar, Galgotia University, Greater Noida
                </li>
                

                <li className="font-semibold text-indigo-600 md:mb-3 md:text-2xl md:leading-8">
                  Dr. Pragya Mishra, University of Lucknow, Lucknow
                </li>
                <li className="font-semibold text-red-600 md:mb-3 md:text-2xl md:leading-8">
                  Dr. Archana Shukla, University of Lucknow, Lucknow
                </li>

                <li className="font-semibold text-indigo-600 md:mb-3 md:text-2xl md:leading-8">
                  Dr. Madhu Chetty, Federation University, Australia
                </li>
                
                <li className="font-semibold text-red-600 md:mb-3 md:text-2xl md:leading-8">
                  Dr. Dilip Jaiswal, Ramswaroop Memorial University, Lucknow
                </li>
                <li className="font-semibold text-indigo-600 md:mb-3 md:text-2xl md:leading-8">
                  Dr. Mukesh Mishra, Ramswaroop Memorial University, Lucknow
                </li>

                <li className="font-semibold text-red-600 md:mb-3 md:text-2xl md:leading-8">
                  Dr. Vijay Kumar Singh, IIT, Jodhpur
                </li>
                
                <li className="font-semibold text-indigo-600 md:mb-3 md:text-2xl md:leading-8">
                  Dr. Rituraj Mishra, National P. G. College, Lucknow
                </li>

                <li className="font-semibold text-red-600 md:mb-3 md:text-2xl md:leading-8">
                  Dr. Sapna Sharma, Uttar Pradesh State Institute of Forensic Science, Lucknow
                </li>

              </ul>

            </div>
          </div>


        </div>

        <div className="p-6 my-8 w-full sm:w-[30%] mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-6">
            Venue of Conference
          </h2>

          <p className="text-lg text-gray-700 text-center md:text-2xl">
            The conference will be held at:
          </p>

          <a
            href="https://maps.app.goo.gl/g6rxtX9ULTdprEBRA"
            target="blank"
            className="text-xl font-semibold flex justify-center text-red-900 mb-4 text-center animate-zoom-out-in md:text-xl md:leading-8"
          >
            Vishwakarma Auditorium
            <br />
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
                <th className="border-b px-4 py-2 text-left text-lg font-semibold text-gray-700 md:text-2xl md:leading-8 ">
                  Time
                </th>
                <th className="border-b px-4 py-2 text-left text-lg font-semibold text-gray-700 md:text-2xl md:leading-8">
                  Event
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700 md:text-2xl md:leading-8">
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
              <tr>
                <td className="border px-4 py-2">5:00 pm - 5:30 pm</td>
                <td className="border px-4 py-2">Tea Break </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">5:30 pm – 6:15 pm </td>
                <td className="border px-4 py-2">
                  Novel Reading and Discussion{" "}
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">6:30 pm – 7:45 pm </td>
                <td className="border px-4 py-2">Cultural Program</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">7:50- pm – 8:50 pm </td>
                <td className="border px-4 py-2">Dinner </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 my-8 w-full">
          <h3 className="text-2xl font-bold text-black mb-4">
            Day 2: 08 February 2025, Saturday
          </h3>
          <table className="min-w-full table-auto border-collapse bg-green-50 md:text-2xl md:leading-8">
            <thead>
              <tr>
                <th className="border-b px-4 py-2 text-left text-lg font-semibold text-gray-700 md:text-2xl">
                  Time
                </th>
                <th className="border-b px-4 py-2 text-left text-lg font-semibold text-gray-700 md:text-2xl">
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
              <tr>
                <td className="border px-4 py-2">4:50 pm – 5:30 pm</td>
                <td className="border px-4 py-2">Valedictory Session</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">5:30 pm – 5:45 pm</td>
                <td className="border px-4 py-2">Photo Session </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">5:45 pm –6:00 pm</td>
                <td className="border px-4 py-2">Networking </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">6:00 pm</td>
                <td className="border px-4 py-2">Closure and Departure</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Organizing Committee Section */}
      <div className="bg-white p-6 my-8 w-full sm:w-4/5 mx-auto border-t-4 border-red-700">
        {/* Flex container for the individual sections */}
        <div className="flex flex-col sm:flex-row justify-around space-x-4 space-y-4 sm:space-y-0">
          {/* Convener Container */}
          <div className="md:w-[30%]">
            <div className="w-full h-[300px] bg-gray-200 rounded-lg overflow-hidden mx-auto ">  {/* Rectangular container */}
              <img
                className="w-full h-full object-fit"
                src={Deepak_Sir}
                alt="Dr. Deepak Gupta"
              />
            </div>
            <div className="flex flex-col items-center  bg-blue-50 rounded-lg w-full sm:w-full">
              <h4 className="text-xl font-semibold text-blue-700 md:text-2xl md:leading-8">
                Convener
              </h4>
              <p className="text-lg text-gray-700 text-center md:text-2xl md:leading-8">
                Dr. Deepak Gupta, Department of Applied Science and Humanities,
                University of Lucknow
              </p>
            </div>
          </div>


        </div>
      </div>


      <div className="bg-white p-6 my-8 w-full sm:w-4/5 mx-auto border-y-4 border-red-700">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 text-center md:mb-0">Our Partners</h2>

        {/* Scrolling Wrapper Container */}
        <div className="scrolling-wrapper mt-4">
          <div className="link-container">
            {/* Sponsor 1 */}
            <img
              src={fans}
              alt="Sponsor 1"
              className="w-full sm:w-[150px] md:w-[200px] lg:w-[250px] h-[150px] sm:h-[150px] md:h-[200px] lg:h-[250px] object-contain mr-10"
            />

            {/* Sponsor 2 */}
            <img
              src={pnb}
              alt="Sponsor 2"
              className="w-full sm:w-[150px] md:w-[200px] lg:w-[250px] h-[150px] sm:h-[150px] md:h-[200px] lg:h-[250px] object-contain mr-10"
            />

            {/* Sponsor 3 */}
            <img
              src={media}
              alt="Sponsor 3"
              className=" w-[250px] sm:w-[150px] md:w-[400px] lg:w-[450px] h-[150px] sm:h-[150px] md:h-[200px] lg:h-[250px] object-fit mr-10"
            />

            {/* Sponsor 4 */}
            <img
              src={UCO}
              alt="Sponsor 4"
              className="w-full sm:w-[150px] md:w-[200px] lg:w-[350px] h-[150px] sm:h-[150px] md:h-[200px] lg:h-[200px] object-fit mr-10 my-auto"
            />

            {/* Sponsor 1 */}
            <img
              src={fans}
              alt="Sponsor 1"
              className="w-full sm:w-[150px] md:w-[200px] lg:w-[250px] h-[150px] sm:h-[150px] md:h-[200px] lg:h-[250px] object-contain mr-10"
            />

            {/* Sponsor 2 */}
            <img
              src={pnb}
              alt="Sponsor 2"
              className="w-full sm:w-[150px] md:w-[200px] lg:w-[250px] h-[150px] sm:h-[150px] md:h-[200px] lg:h-[250px] object-contain mr-10"
            />

            {/* Sponsor 3 */}
            <img
              src={media}
              alt="Sponsor 3"
              className=" w-[250px] sm:w-[150px] md:w-[400px] lg:w-[450px] h-[150px] sm:h-[150px] md:h-[200px] lg:h-[250px] object-fit mr-10"
            />

            {/* Sponsor 4 */}
            <img
              src={UCO}
              alt="Sponsor 4"
              className="w-full sm:w-[150px] md:w-[200px] lg:w-[350px] h-[150px] sm:h-[150px] md:h-[200px] lg:h-[200px] object-fit mr-10 my-auto"
            />

          </div>
        </div>

      </div>


    </>
  );
};

export default HeroSection;
