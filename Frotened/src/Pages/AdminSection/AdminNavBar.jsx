import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Logo2 from '/src/assets/mid-logo.png';
import Logo1 from '/src/assets/Lu-rank.jpg';
import Logo3 from '/src/assets/A++.jpeg';
import LowerHeader from '../../Components/LowerHeader';

const AdminSection = () => {
  return (
    <>
      <div className="h-24 w-full flex justify-between p-1 border-b-4 border-red-400">
        <img src={Logo1} className="h-16 mt-4 ml-2" />
        <img src={Logo2} className="h-16 mt-4" />
        <img src={Logo3} className="h-16 mt-4 mr-2" />
      </div>

      <LowerHeader />
      <div className="flex">
        <div className="w-1/4 bg-gray-800 text-white p-4 h-screen">
          <h2 className="text-lg font-semibold mb-4">Admin Panel</h2>
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
          </ul>
        </div>
        <div className="w-3/4 p-4">
          <h2 className="text-2xl font-semibold text-center my-4 shadow-lg p-4">Admin Dashboard</h2>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminSection;
