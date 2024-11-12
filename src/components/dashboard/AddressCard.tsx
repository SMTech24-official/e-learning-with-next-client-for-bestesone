// components/AddressCard.tsx
import React from 'react';

type AddressCardProps = {
  presentAddress: string[];
  permanentAddress: string[];
};

const AddressCard: React.FC<AddressCardProps> = ({ presentAddress, permanentAddress }) => {
  return (
    <div className="w-full  p-6 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <h2 className="text-md font-semibold text-gray-800 mb-2">Present Address</h2>
        <ul className="space-y-2 text-gray-600 text-sm">
          {presentAddress.map((address, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="mt-1 text-xs">•</span>
              <p>{address}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-md font-semibold text-gray-800 mb-2">Permanent Address</h2>
        <ul className="space-y-2 text-gray-600 text-sm">
          {permanentAddress.map((address, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="mt-1 text-xs">•</span>
              <p>{address}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddressCard;
