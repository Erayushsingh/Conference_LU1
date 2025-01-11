import React, { useState } from 'react';
import HeaderUpper from '../../Components/HeaderUpper';
import LowerHeader from '../../Components/LowerHeader';
import Footer from '../../Components/Footer';

const notifications = [
    {
        title: 'New Update',
        description: 'We invited Prof. @sangeeta_hr, Dean, Faculty of Management, has been formally invited to deliver a keynote address and chair a session in the International Conference RAASHEE ‘25.',
        src: 'https://x.com/raashee25/status/1878087870088671706?s=48&mx=2',
        date: 'January 11, 2025',
    },
    {
        title: 'New Update',
        description: 'We invited Prof. Rajendra Tripathi, Director, IET, KMC Language University, to RAASHEE-25 at University of Lucknow.',
        src: 'https://x.com/raashee25/status/1876844413336408078?s=48',
        date: 'January 11, 2025',
    },
];

const NewsAnnouncement = () => {
    const [showAllNotifications, setShowAllNotifications] = useState(false);

    const toggleShowNotifications = () => {
        setShowAllNotifications(!showAllNotifications); 
    };

    const openLink = (url) => {
        window.open(url, '_blank'); 
    };

    return (
        <>
            <HeaderUpper />
            <LowerHeader />

            <div className="bg-light-green py-8">
                <div className="container mx-auto text-center">
                    <p className="text-white bg-red-950 rounded-md opacity-80 mb-4 p-6 font-extrabold text-3xl">
                        RAASHEE 2025 - Updates & Announcements
                    </p>
                </div>
            </div>

            <div className="container mx-auto mb-6">

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Table for notifications */}
                    <table className="w-full table-auto">
                        <thead className="bg-blue-100 text-blue-700">
                            <tr>
                                <th className="px-6 py-4 text-center text-2xl font-semibold ">Activity</th>
                                <th className="px-6 py-4 text-center text-2xl font-semibold">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {notifications.slice(0, showAllNotifications ? notifications.length : 5).map((notification, index) => (
                                <tr
                                    key={index}
                                    className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 cursor-pointer transition-all text-2xl font-serif`}
                                    onClick={() => openLink(notification.src)}
                                >
                                    <td className="px-6 py-4 border-r">{notification.description}</td>
                                    <td className="px-6 py-4">{notification.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>



                {/* Button to toggle between showing all or few notifications */}
                <div className="text-center mt-6">
                    <button
                        onClick={toggleShowNotifications}
                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition duration-300"
                    >
                        {showAllNotifications ? "Show Less" : "View All"}
                    </button>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default NewsAnnouncement;
