// Dashboard.jsx

import React from 'react';
import Navbar from './Navbar';
import FinancialData from './FinancialData';
import FinancialTable from './FinancialTable';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar/Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Page Title */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto w-full bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-3xl font-medium">PayBuddies</h3>
            {/* Financial Data */}
            <FinancialData />  
            </div>
            <FinancialTable />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
