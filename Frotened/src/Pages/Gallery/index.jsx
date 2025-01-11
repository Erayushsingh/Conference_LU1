import React, { useState } from 'react';
import HeaderUpper from '../../Components/HeaderUpper';
import LowerHeader from '../../Components/LowerHeader';
import Footer from '../../Components/Footer';

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

const images = [
    img0, img1, img2, img3, img4, img5, img6, img7, img8, img9,
    img10, img11, img12, img13, img14, img15, img16, img17, img18, img19,
    img20, img21, img22, img23, img24, img25, img26, img27, img28, img29,
    img30, img31, img32, img33, img34, img35, img36
];

const Gallery = () => {
    const [modalImage, setModalImage] = useState(null); 

    const openModal = (image) => {
        setModalImage(image);  
    };

    const closeModal = () => {
        setModalImage(null);  
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
