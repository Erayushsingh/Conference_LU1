// import React from 'react';
// import gatePhoto from '/src/assets/Lu-main.jpg';
// import AbstractSubmission from '../../Pages/AbstractSubmission';
// import RegisterButton from '../../Pages/RegisterButton';

// const HeroSection = () => {
//   return (
//     <>
//       <div className="bg-red-900 text-white py-2 text-center w-full">
//         <p className="text-2xl font-bold  animate-zoom-out-in"> Registration Opened for RASHEE-2025 | Registration Close 25 Dec 2024  </p>
//       </div>

//       <div className="relative">
//         <img src={gatePhoto} className="w-full" alt="Event Gate" />

//         <div className="h-48 bg-black text-white flex justify-between items-center mt-4"> 
//           <div className="w-[50%] flex flex-col items-end border-b-red-700 border-b-8 h-full justify-center">
//             <div>
//               <h1 className="text-5xl font-bold">RAASHEE - 25</h1>
//               <p>International Conference on Recent Advances in</p>
//               <p>Applied Science & Humanities in Evolution of Engineering</p>
//             </div>
//           </div>

//           <div className="flex justify-between w-[40%] items-center mr-6">
//             <div className="flex flex-col inline-block">
//               <div className="inline-block">
//                 <p className="font-bold">Event Dates:</p>
//                 <p>June 10-12, 2024</p>
//               </div>
//               <div className="inline-block">
//                 <p className="font-bold">Abstract Dates:</p>
//                 <p>June 18, 2024</p>
//               </div>
//             </div>

//             <div className="text-black mb-28 flex mt-40">
//               <AbstractSubmission className="border-2 border-red-500" />
//               <RegisterButton className="border-2 border-red-500" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeroSection;


import React from "react";
import gatePhoto from "/src/assets/Lu-main.jpg";
import AbstractSubmission from "../../Pages/AbstractSubmission";
import RegisterButton from "../../Pages/RegisterButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AmanPhoto from "../../assets/Aman_Photo.jpg";
import Cards from "../Cards";


const HeroSection = () => {
  return (
    <>
     <div className="bg-red-900 text-white py-2 text-center w-full">
        <p className="text-2xl font-bold  animate-zoom-out-in"> Registration Opened for RASHEE-2025 | Registration Close 25 Dec 2024  </p>
       </div>
      {/* Image Section */}
      <div className="flex relative mt-1">
        <div className="w-[20%]">
          <div className="flex justify-center hover:cursor-pointer items-center bg-gray-100">
            <Cards
              title="Aman Chaurasiya"
              description="Chaurasiyaaman741@gmail.com"
              image={AmanPhoto}
            />
          </div>
          <div className="flex justify-center hover:cursor-pointer items-center bg-gray-100">
            <Cards
              title="Aman Chaurasiya"
              description="Chaurasiyaaman741@gmail.com"
              image={AmanPhoto}
            />
          </div>

          
        </div>

<div
  id="carouselExampleAutoplaying"
  className="carousel slide w-[60%]"
  data-bs-ride="carousel"
   // Set explicit height
>
  <div className="carousel-inner h-100">
    <div className="carousel-item active h-100">
      <img
        src={gatePhoto}
        className="d-block w-100 h-100 object-fit"
        alt="Gate"
      />
    </div>
    <div className="carousel-item h-100">
      <img
        src="https://www.hindustantimes.com/ht-img/img/2023/11/15/550x309/Lucknow-University--file-photo-_1700077793675.jpg"
        className="d-block w-100 h-100 object-fit"
        alt="Lucknow University"
      />
    </div>
    <div className="carousel-item h-100">
      <img
        src={gatePhoto}
        className="d-block w-100 h-100 object-fit"
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
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


          <div className="w-[20%]">
            <div className="flex justify-center hover:cursor-pointer items-center bg-gray-100">
              <Cards
                title="Aman Chaurasiya"
                description="Chaurasiyaaman741@gmail.com"
                image={AmanPhoto}
              />
            </div>
            <div className="flex justify-center hover:cursor-pointer items-center bg-gray-100">
              <Cards
                title="Aman Chaurasiya"
                description="Chaurasiyaaman741@gmail.com"
                image={AmanPhoto}
              />
            </div>
        </div>
      </div>

      {/* Hero Text Section */}
      <div className=" h-auto bg-black text-white flex flex-col lg:flex-row justify-between items-center p-4 lg:p-8">
        {/* Left Content */}
        <div className=" w-full lg:w-1/2 flex flex-col items-center lg:items-end text-center lg:text-right border-b-red-700 border-b-8 py-4 lg:py-0">
          <div className="max-w-md pb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              RAASHEE - 25
            </h1>
            <p className="mt-2 text-sm md:text-base">
              International Conference on Recent Advances in
            </p>
            <p className="text-sm md:text-base">
              Applied Science & Humanities in Evolution of Engineering
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:ml-9 w-full lg:w-1/2 flex flex-col lg:flex-row justify-center lg:justify-between items-center mt-4 lg:mt-0">
          <div className="flex flex-col items-center lg:items-start space-y-2">
            <div>
              <p className="font-bold">Event Dates:</p>
              <p>June 10-12, 2024</p>
            </div>
            <div>
              <p className="font-bold">Abstract Dates:</p>
              <p>June 18, 2024</p>
            </div>
          </div>

          <div className="flex space-x-4 mt-4 lg:mt-0">
            <AbstractSubmission className="border-2 border-red-500 px-4 py-2 bg-white text-black hover:bg-red-500 hover:text-white" />
            <RegisterButton className="border-2 border-red-500 px-4 py-2 bg-white text-black hover:bg-red-500 hover:text-white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;



