import React from 'react';
import { FiHome, FiDollarSign, FiTrendingUp, FiLogOut } from 'react-icons/fi'; // Import icons from react-icons library

const Navbar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition-transform duration-200 ease-in-out">
      <a href="#" className="text-white flex items-center space-x-2 px-4">
        <span className="text-xl font-semibold">PayBuddies</span>
      </a>

      {/* Navigation Links */}
      <nav>
        <a href="#" className="block py-2.5 px-4 transition bg-gray-700 duration-200 hover:bg-gray-700 hover:text-gray-200">
          <FiHome className="inline-block mr-2 " /> Dashboard
        </a>
        <a href="#" className="block py-2.5 px-4 transition duration-200 hover:bg-gray-700 hover:text-gray-200">
          <FiDollarSign className="inline-block mr-2" /> Transactions
        </a>
        <a href="#" className="block py-2.5 px-4 transition duration-200 hover:bg-gray-700 hover:text-gray-200">
          <FiTrendingUp className="inline-block mr-2" /> Investments
        </a>
        {/* Add more navigation links as needed */}

      </nav>
    </aside>
  );
};

export default Navbar;
