// components/StatusLabel.tsx
import React from 'react';

const StatusLabel: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 px-2 py-1 bg-green-100 rounded-full">
      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
      <span className="text-sm font-normal text-green-700">Completed</span>
    </div>
  );
};

export default StatusLabel;
