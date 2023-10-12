// FinancialData.jsx

import React from 'react';
import { FiBarChart } from 'react-icons/fi';

const FinancialData = () => {
  // Dummy financial data
  const financialData = [
    { id: 1, name: 'Savings Account', balance: 5000 },
    { id: 2, name: 'Investment Portfolio', balance: 25000 },
    { id: 3, name: 'Debt', balance: 1000 },
    // Add more data as needed
  ];

  return (
    <div className="mt-8">
      <h4 className="text-lg font-medium mb-4">Your Financial Overview</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {financialData.map((account, index) => (
          <div
            key={account.id}
            className={`bg-white p-6 transition duration-200 hover:bg-shadow-md rounded-md ${index === 0
              ? 'text-green-600'
              : index === 1
              ? 'text-yellow-400'
              : 'text-red-600'
            }`}
          >
            <FiBarChart className="text-4xl border-2 rounded-full mb-4" />
            <h5 className="text-xl font-semibold">{account.name}</h5>
            <p className="text-gray-600 mt-2">Balance: <span className='font-bold'>${account.balance}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialData;
