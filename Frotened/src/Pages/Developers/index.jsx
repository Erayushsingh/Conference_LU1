import React, { useEffect } from "react";
import Photo1 from "../../assets/Aman_photo.jpg";
import Photo2 from "../../assets/Ayush_Photo.jpg";
import Photo3 from "../../assets/Saif.jpg";
import "animate.css";
import HeaderUpper from "../../Components/HeaderUpper";
import Footer from "../../Components/Footer";
import Photo4 from "../../assets/Sudeep.png";

const Developers = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("animate__fadeIn");
      }, index * 500);
    });
  }, []);

  return (
    <>
      <HeaderUpper />
      <div className="mb-4 px-4 sm:px-6 lg:px-8  w-full">
        <h1 className="text-2xl sm:text-3xl text-red-600 text-center mt-10 mb-6 font-bold">
          Tech Team RAASHEE-25
        </h1>
        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6  ">
            {/* Developer Card 1 */}
            <div className=" max-w-sm bg-white rounded-lg shadow-lg ">
              <img
                className="w-full h-40 object-contain "
                src={Photo1}
                alt="Aman Chaurasiya"
              />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                    Aman Chaurasiya
                  </h2>
                  <div className="flex space-x-2">
                    <a
                      href="https://www.linkedin.com/in/aman-chaurasiya-45914224b/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-linkedin text-blue-600 text-2xl"></i>
                    </a>
                    <a
                      href="https://github.com/HeyAman63"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-github text-black text-2xl"></i>
                    </a>
                  </div>
                </div>
                <a href="mailto:chaurasiyaaman741@gmail.com" className="mt-2 font-bold text-gray-600 text-sm">
                  <span className="font-bold text-black">Email:</span> chaurasiyaaman741@gmail.com
                </a>
              </div>
            </div>

            {/* Developer Card 2 */}
            <div className=" max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full h-40 object-contain "
                src={Photo2}
                alt="Ayush Singh"
              />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                    Ayush Singh
                  </h2>
                  <div className="flex space-x-2">
                    <a
                      href="https://www.linkedin.com/in/ayush-singh-641871260/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-linkedin text-blue-600 text-2xl"></i>
                    </a>
                    <a
                      href="https://github.com/Erayushsingh"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-github text-black text-2xl"></i>
                    </a>
                  </div>
                </div>
                <a href="mailto:ayushsingh74340@gmail.com" className="mt-2 font-bold text-gray-600 text-sm">
                  <span className="font-bold text-black">Email:</span> ayushsingh74340@gmail.com
                </a>
              </div>
            </div>

            {/* Developer Card 3 */}
            <div className=" max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full h-40 object-cover sm:object-cover"
                src={Photo3}
                alt="Saif"
              />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                    Mohammad Saif
                  </h2>
                  <div className="flex space-x-2">
                    <a
                      href="https://www.linkedin.com/in/mohammad-saif01/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-linkedin text-blue-600 text-2xl"></i>
                    </a>
                    <a
                      href="https://github.com/Thebeast01"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-github text-black text-2xl"></i>
                    </a>
                  </div>
                </div>
                <a href="mailto:mohammadsaif0847@gmail.com" className="mt-2 font-bold text-gray-600 text-sm">
                  <span className="font-bold text-black">Email:</span> mohammadsaif0847@gmail.com
                </a>
              </div>
            </div>

            {/* Developer Card 4 */}
            <div className=" max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full h-40 object-contain sm:object-cover"
                src={Photo4}
                alt="Sudeep"
              />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                    Sudip Kumar
                  </h2>
                  <div className="flex space-x-2">
                    <a
                      href="https://www.linkedin.com/in/sudip-kumar-sk/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-linkedin text-blue-600 text-2xl"></i>
                    </a>
                    <a
                      href="https://github.com/sudipkumar0200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-github text-black text-2xl"></i>
                    </a>
                  </div>
                </div>
                <a href="mailto:sudipkumar0200@gmail.com" className="mt-2 font-bold text-gray-600 text-sm">
                  <span className="font-bold text-black">Email:</span> sudipkumar0200@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center font-bold text-sm sm:text-base md:text-lg mt-6">
          <u className="text-lg">Note:</u>
        </p>
        <p className="text-center font-bold text-lg sm:text-sm md:text-base lg:text-lg mb-2 xl:text-xl">
          If you are facing any issue, mail us at:
        </p>
        <ol type="A" className="text-red-500 font-bold w-full text-center space-y-2 text-xl">
          <li><a href="mailto:chaurasiyaaman741@gmail.com">chaurasiyaaman741@gmail.com</a></li>
          <li><a href="mailto:ayushsingh74340@gmail.com">ayushsingh74340@gmail.com</a></li>
          <li><a href="mailto:mohammadsaif0847@gmail.com">mohammadsaif0847@gmail.com</a></li>
          <li><a href="mailto:sudipkumar0200@gmail.com">sudipkumar0200@gmail.com</a></li>
        </ol>
      </div>

      <Footer />
    </>
  );
};

export default Developers;
