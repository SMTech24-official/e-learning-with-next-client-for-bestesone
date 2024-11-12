// components/PhoneNumberCard.tsx
import React from 'react';
import { FiMoreVertical } from 'react-icons/fi';

type PhoneNumberCardProps = {
  phoneNumbers: string[];
};

const PhoneNumberCard: React.FC<PhoneNumberCardProps> = ({ phoneNumbers }) => {
  return (
    <div className="relative w-full  p-4 bg-white shadow-md rounded-lg">
      <div className="absolute top-2 right-2 text-gray-400">
        <FiMoreVertical className="text-2xl font-bold" />
      </div>
      <h2 className="text-md font-semibold text-gray-800 mb-4">Phone number</h2>
      <ul className="space-y-2 mb-4">
        {phoneNumbers.map((phone, index) => (
          <li key={index} className="text-gray-600 text-sm">
            {phone}
          </li>
        ))}
      </ul>
      <button className="flex items-center space-x-2 px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        <span>Add more Phone number</span>
      </button>
    </div>
  );
};

export default PhoneNumberCard;
