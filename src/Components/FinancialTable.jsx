import React from 'react';

const FinancialTable = ({ financialData }) => {
  return (
    <div className="m-6">
      <h4 className="text-lg font-medium mb-4">History</h4>
      <table className="min-w-full divide-y shadow-md divide-gray-200">
        <thead className="bg-gray-50">
            <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              S/N
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Account Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Balance
            </th>
          </tr>
        </thead>
        {/* <tbody className="bg-white divide-y divide-gray-200">
          {financialData.map((account) => (
            <tr key={account.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{account.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">${account.balance}</div>
              </td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </div>
  );
};

export default FinancialTable;
