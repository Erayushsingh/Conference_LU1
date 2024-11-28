import React from 'react';
import gatePhoto from '/src/assets/Lu-main.jpg';
import AbstractSubmission from '../../Pages/AbstractSubmission';
import RegisterButton from '../../Pages/RegisterButton';

const HeroSection = () => {
  return (
    <>
      <div className="bg-red-900 text-white py-2 text-center w-full">
        <p className="text-2xl font-bold  animate-zoom-out-in"> Registration Opened for RASHEE-2025 | Registration Close 25 Dec 2024  </p>
      </div>

      <div className="relative">
        <img src={gatePhoto} className="w-full" alt="Event Gate" />

        <div className="h-48 bg-black text-white flex justify-between items-center mt-4"> 
          <div className="w-[50%] flex flex-col items-end border-b-red-700 border-b-8 h-full justify-center">
            <div>
              <h1 className="text-5xl font-bold">RAASHEE - 25</h1>
              <p>International Conference on Recent Advances in</p>
              <p>Applied Science & Humanities in Evolution of Engineering</p>
            </div>
          </div>

          <div className="flex justify-between w-[40%] items-center mr-6">
            <div className="flex flex-col inline-block">
              <div className="inline-block">
                <p className="font-bold">Event Dates:</p>
                <p>June 10-12, 2024</p>
              </div>
              <div className="inline-block">
                <p className="font-bold">Abstract Dates:</p>
                <p>June 18, 2024</p>
              </div>
            </div>

            <div className="text-black mb-28 flex mt-40">
              <AbstractSubmission className="border-2 border-red-500" />
              <RegisterButton className="border-2 border-red-500" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;


