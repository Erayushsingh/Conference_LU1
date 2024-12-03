import React, { useEffect } from 'react';
import Photo1 from '../../assets/Aman_photo.jpg';
import Photo2 from '../../assets/Ayush_Photo.jpg';
import Photo3 from '../../assets/Saif.jpg';
import 'animate.css';
import HeaderUpper from '../../Components/HeaderUpper';
import LowerHeader from '../../Components/LowerHeader';
import Footer from '../../Components/Footer';

const Developers = () => {
    useEffect(() => {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('animate__fadeIn');
            }, index * 500);
        });
    }, []);

    return (
        <>
        <HeaderUpper/>
        <LowerHeader/>
        <div className="bg-gray-100 flex items-center justify-center min-h-screen py-4 px-2">
            <div className="flex flex-wrap justify-center">
                <div className="fade-in animate__animated animate__fadeInLeft w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
                        <img className="w-full h-44 object-cover" src={Photo1} alt="Aman Chaurasiya" />
                        <div className="p-3">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-bold text-gray-800">
                                    Aman Chaurasiya
                                </h2>
                                <div>
                                    <a
                                        href="https://www.linkedin.com/in/aman-chaurasiya-45914224b/"
                                        target="blank"
                                    >
                                        <i className="fa-brands fa-linkedin text-blue-600 p-2 text-3xl"></i>
                                    </a>
                                    <a href="https://github.com/HeyAman63" target="blank">
                                        <i className="fa-brands fa-github text-black p-2 text-3xl"></i>
                                    </a>
                                </div>
                            </div>
                            <p className="mt-2 text-gray-600">
                                <span className="font-bold text-black">Email : </span>
                                Chaurasiyaaman741@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
 

                <div className="fade-in animate__animated animate__fadeInRight w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
                        <img className="w-full h-[12rem] object-cover" src={Photo2} alt="Ayush Singh" />
                        <div className="p-3">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-bold text-gray-800">
                                    Ayush Singh
                                </h2>
                                <div>
                                    <a
                                        href="https://www.linkedin.com/in/ayush-singh-641871260/"
                                        target="blank"
                                    >
                                        <i className="fa-brands fa-linkedin text-blue-600 p-2 text-3xl"></i>
                                    </a>
                                    <a href="https://github.com/Erayushsingh" target="blank">
                                        <i className="fa-brands fa-github text-black p-2 text-3xl"></i>
                                    </a>
                                </div>
                            </div>
                            <p className="mt-2 text-gray-600">
                                <span className="font-bold text-black">Email : </span>
                                ayushsingh74340@gmail.com
                            </p>
                        </div>
                    </div>
                </div>

                <div className="fade-in animate__animated animate__fadeInLeft w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
                        <img className="w-full h-44 object-cover" src={Photo3} alt="Aman Chaurasiya" />
                        <div className="p-3">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-bold text-gray-800">
                                    Mohammad Saif
                                </h2>
                                <div>
                                    <a
                                        href="https://www.linkedin.com/in/mohammad-saif01/"
                                        target="blank"
                                    >
                                        <i className="fa-brands fa-linkedin text-blue-600 p-2 text-3xl"></i>
                                    </a>
                                    <a href="https://github.com/Thebeast01" target="blank">
                                        <i className="fa-brands fa-github text-black p-2 text-3xl"></i>
                                    </a>
                                </div>
                            </div>
                            <p className="mt-2 text-gray-600">
                                <span className="font-bold text-black">Email : </span>
                                Chaurasiyaaman741@gmail.com
                            </p>
                        </div>
                    </div>
                </div>

                <div className="fade-in animate__animated animate__fadeInLeft w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
                        <img className="w-full h-44 object-cover" src={Photo1} alt="Aman Chaurasiya" />
                        <div className="p-3">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-bold text-gray-800">
                                Sudip Kumar
                                </h2>
                                <div>
                                    <a
                                        href=" https://www.linkedin.com/in/sudip-kumar-sk/"
                                        target="blank"
                                    >
                                        <i className="fa-brands fa-linkedin text-blue-600 p-2 text-3xl"></i>
                                    </a>
                                    <a href=" https://github.com/sudipkumar0200" target="blank">
                                        <i className="fa-brands fa-github text-black p-2 text-3xl"></i>
                                    </a>
                                </div>
                            </div>
                            <p className="mt-2 text-gray-600">
                                <span className="font-bold text-black">Email : </span>
                                sudipkumar0200@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default Developers;
