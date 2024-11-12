// components/RecentTransactions.tsx
import React from 'react';
import StatusLabel from '../StatusLabel';

type Transaction = {
  status: string;
  cardType: string;
  cardNumber: string;
  amount: string;
  date: string;
  source: string;
};

const transactions: Transaction[] = [
  {
    status: 'Completed',
    cardType: 'Mastercard',
    cardNumber: '**** 6442',
    amount: '$99.00',
    date: 'Jan 17, 2024',
    source: 'Robotic',
  },
  {
    status: 'Completed',
    cardType: 'Mastercard',
    cardNumber: '**** 6442',
    amount: '$99.00',
    date: 'Jan 17, 2024',
    source: 'Robotic',
  },
  {
    status: 'Completed',
    cardType: 'Mastercard',
    cardNumber: '**** 6442',
    amount: '$99.00',
    date: 'Jan 17, 2024',
    source: 'Robotic',
  },
  {
    status: 'Completed',
    cardType: 'Mastercard',
    cardNumber: '**** 6442',
    amount: '$99.00',
    date: 'Jan 17, 2024',
    source: 'Robotic',
  },
  {
    status: 'Completed',
    cardType: 'Mastercard',
    cardNumber: '**** 6442',
    amount: '$99.00',
    date: 'Jan 17, 2024',
    source: 'Robotic',
  },

];

const RecentTransactions: React.FC = () => {
  return (
    <div className="w-full  p-6 bg-white shadow-md rounded-lg overflow-hidden overflow-x-auto slim-scroll">
      <h2 className="text-lg font-semibold mb-6">Recent Transaction</h2>
      <ul className="space-y-4">
        {transactions.map((transaction, index) => (
          <li key={index} className="flex items-center justify-between gap-2">
            <div className="flex items-center space-x-3">
              <StatusLabel />
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {transaction.cardType} {transaction.cardNumber}
                </p>
                <p className="text-gray-500 text-xs">Card payment</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-800">{transaction.amount}</p>
              <p className="text-gray-500 text-xs">{transaction.date}</p>
            </div>
            <p className="text-gray-500 text-xs">{transaction.source}</p>
            <div className="text-gray-400">
              <span className="text-2xl font-bold">⋮</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;
