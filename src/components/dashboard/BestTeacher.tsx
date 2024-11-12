// components/BestTeacher.tsx
import { Avatar } from 'antd';
import React from 'react';

type Teacher = {
  name: string;
  email: string;
  subject: string;
  profileImage: string;
};

const teachers: Teacher[] = [
  {
    name: 'Jenny Wilson',
    email: 'w.lawson@example.com',
    subject: 'Business',
    profileImage: '/images/jenny.jpg', // Replace with the path to your image
  },
  {
    name: 'Devon Lane',
    email: 'dat.roberts@example.com',
    subject: 'Robotic',
    profileImage: '/images/devon.jpg', // Replace with the path to your image
  },
  {
    name: 'Jane Cooper',
    email: 'jgraham@example.com',
    subject: 'Science',
    profileImage: '/images/jane.jpg', // Replace with the path to your image
  },
  {
    name: 'Dianne Russell',
    email: 'curtis.d@example.com',
    subject: 'Digital marketing',
    profileImage: '/images/dianne.jpg', // Replace with the path to your image
  },
];

const BestTeacher: React.FC = () => {
  return (
    <div className="w-full p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-1">Our Best Teacher</h2>
      <p className="text-gray-500 text-sm mb-4">Lorem ipsum dolor sit ametis.</p>
      <ul className="space-y-4">
        {teachers.map((teacher, index) => (
          <li key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <div>
                <p className="text-sm font-semibold text-gray-800">{teacher.name}</p>
                <p className="text-gray-500 text-xs">{teacher.email}</p>
              </div>
            </div>
            <p className="text-gray-500 text-xs">{teacher.subject}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BestTeacher;
