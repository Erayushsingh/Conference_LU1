import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderUpper from '../../Components/HeaderUpper';
import LowerHeader from '../../Components/LowerHeader';
import Footer from '../../Components/Footer';
import './index.css'

import img0 from '../../assets/img0.jpeg';
import img1 from '../../assets/img1.jpeg';
import img2 from '../../assets/img2.jpeg';
import img3 from '../../assets/img3.jpeg';
import img4 from '../../assets/img4.jpeg';
import img5 from '../../assets/img5.jpeg';
import img6 from '../../assets/img6.jpeg';
import img7 from '../../assets/img7.jpeg';
import img8 from '../../assets/img8.jpeg';
import img9 from '../../assets/img9.jpeg';
import img10 from '../../assets/img10.jpeg';
import img11 from '../../assets/img11.jpeg';
import img12 from '../../assets/img12.jpeg';
import img13 from '../../assets/img13.jpeg';
import img14 from '../../assets/img14.jpeg';
import img15 from '../../assets/img15.jpeg';
import img16 from '../../assets/img16.jpeg';
import img17 from '../../assets/img17.jpeg';
import img18 from '../../assets/img18.jpeg';
import img19 from '../../assets/img19.jpeg';
import img20 from '../../assets/img20.jpeg';
import img21 from '../../assets/img21.jpeg';
import img22 from '../../assets/img22.jpeg';
import img23 from '../../assets/img23.jpeg';
import img24 from '../../assets/img24.jpeg';
import img25 from '../../assets/img25.jpeg';
import img26 from '../../assets/img26.jpeg';
import img27 from '../../assets/img27.jpeg';
import img28 from '../../assets/img28.jpeg';
import img29 from '../../assets/img29.jpeg';
import img30 from '../../assets/img30.jpeg';
import img31 from '../../assets/img31.jpeg';
import img32 from '../../assets/img32.jpeg';
import img33 from '../../assets/img33.jpeg';
import img34 from '../../assets/img34.jpeg';
import img35 from '../../assets/img35.jpeg';
import img36 from '../../assets/img36.jpeg';
import i002  from '../../assets/i002.jpeg';
import i001  from '../../assets/i001.jpeg';
import i004  from '../../assets/i004.jpeg';



const images = [
   i002,i001,i004, img0, img1, img2, img3, img4, img5, img6, img7, img8, img9,
    img10, img11, img12, img13, img14, img15, img16, img17, img18, img19,
    img20, img21, img22, img23, img24, img25, img26, img27, img28, img29,
    img30, img31, img32, img33, img34, img35, img36
];

const newsData = [
    { title: 'New Update', description: 'We invited Prof. @sangeeta_hr,Dean,Faculty of Management,has been formally invited to deliver a keynote address and chair a session in the International Conference RAASHEE ‘25.' ,
      src:'https://x.com/raashee25/status/1878087870088671706?s=48&mx=2' },

     { title: 'New Update', description: 'We invited Prof. Rajendra Tripathi, Director, IET, KMC Language University, to RAASHEE-25 at University of Lucknow' ,
        src:'https://x.com/raashee25/status/1876844413336408078?s=48' },
];

const Gallery = () => {
    const [modalImage, setModalImage] = useState(null);
    const [showAllNews, setShowAllNews] = useState(false);
    const navigate = useNavigate();

    const openModal = (image) => {
        setModalImage(image);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    const handleRedirect = () => {
        navigate('/newupdates');
    };

    return (
        <>
            <HeaderUpper />
            <LowerHeader />

            <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 py-16">
                <div className="container mx-auto text-center">
                    <h1 className="md:text-5xl text-3xl font-extrabold text-white drop-shadow-lg mb-4 animate-bounce">Explore Our Beautiful Gallery</h1>
                    <p className=" text-white opacity-80 mb-8 font-extrabold text-3xl animate-zoom-out-in">RAASHEE-2025</p>
                </div>
            </div>

            {/* Infinite Scrolling Container */}
            <div className="overflow-hidden relative  py-8 bg-teal-100">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Latest News & Announcements</h2>
                <div className="scrolling-wrapper">
                    <div className="link-container">
                      
                        {newsData.slice(0, showAllNews ? newsData.length : 3).map((newsItem, index) => (
                            <div className="link-item" key={index}>
                                <span className="font-bold text-2xl text-blue-600">{newsItem.title}:</span>
                                <span className="ml-4 text-gray-600">{newsItem.description}</span>
                                {/* Use anchor tag to open the post link */}
                                <a href={newsItem.src} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-2">
                                    - View Post
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={handleRedirect}
                    className="bg-blue-950 text-white px-4 py-2  rounded-full hover:bg-blue-950 flex items-center space-x-2 ml-4">
                    <span>View All</span>
                    <i className="fa fa-arrow-right button-icon"></i>
                </button>
            </div>

            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {images.map((image, index) => (
                        <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <img
                                src={image}
                                alt={`Image ${index}`}
                                className="w-full h-auto object-cover rounded-lg shadow-md transition-transform transform group-hover:scale-110 cursor-pointer"
                                onClick={() => openModal(image)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {modalImage && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-4xl w-full">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-black text-4xl font-bold hover:text-green-500"
                        >
                            &times; {/* Cross icon */}
                        </button>
                        <img
                            src={modalImage}
                            alt="Modal Image"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default Gallery;
