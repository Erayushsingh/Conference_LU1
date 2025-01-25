import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Logo2 from '/src/assets/mid-logo.png';
import Logo1 from '/src/assets/Lu-rank.jpg';
import Logo3 from '/src/assets/A++.jpeg';
import LowerHeader from '../../Components/LowerHeader';
import { AiOutlineArrowRight, AiOutlineClose } from 'react-icons/ai';

const AdminSection = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="h-24 w-full flex justify-between p-1 border-b-1 border-red-400">



        <div className="flex items-center space-x-2 justify-between  w-full ">
          <img src={Logo1} className="h-16 mt-4 ml-2" alt="Logo1" />
          <img src={Logo2} className="h-16 mt-4" alt="Logo" />
          <img src={Logo3} className="h-16 mt-4 mr-2" alt="Logo3" />
        </div>
      </div>

      <LowerHeader />

      <div className="flex">
        <div
          className={`${sidebarOpen ? 'w-1/4' : 'w-0'
            } bg-gray-800 text-white p-5 flex flex-col min-h-screen transition-all duration-300 ease-in-out`}
        >

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold ">{sidebarOpen ? 'Admin Panel' : ''}</h2>
            <button
              onClick={toggleSidebar}
              className="text-red-500 text-lg  "
            >
              {sidebarOpen ? <AiOutlineClose /> : <AiOutlineArrowRight />}
            </button>
          </div>

          {sidebarOpen && (
            <ul>
              <li className="mb-2">
                <NavLink
                  to="/admin/registered-candidates"
                  className={({ isActive }) =>
                    `p-2 rounded cursor-pointer ${isActive ? 'bg-gray-600 w-full block' : 'hover:bg-blue-600 w-full block'}`
                  }
                >
                  Registered Candidates
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/admin/abstract-submitted"
                  className={({ isActive }) =>
                    `p-2 rounded cursor-pointer ${isActive ? 'bg-gray-600 w-full block' : 'hover:bg-blue-600 w-full block'}`
                  }
                >
                  Abstract Submitted
                </NavLink>
              </li>

              <li className="mb-2">
                <NavLink
                  to="/admin/new-registered-candidates"
                  className={({ isActive }) =>
                    `p-2 rounded cursor-pointer ${isActive ? 'bg-gray-600 w-full block' : 'hover:bg-blue-600 w-full block'}`
                  }
                >
                  New Registered Candidates
                </NavLink>
              </li>

              <li className="mb-2">
                <NavLink
                  to="/admin/new-abstracts"
                  className={({ isActive }) =>
                    `p-2 rounded cursor-pointer ${isActive ? 'bg-gray-600 w-full block' : 'hover:bg-blue-600 w-full block'}`
                  }
                >
                  New Abstract Submitted
                </NavLink>
              </li>
            </ul>
          )}
        </div>

        <div
          className={`${sidebarOpen ? 'w-3/4' : 'w-full'
            } p-4 overflow-auto max-h-[80vh] transition-all duration-300 ease-in-out`}
        >
          <h2 className="text-2xl font-semibold text-center my-4 shadow-lg p-4">Admin Dashboard</h2>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminSection;