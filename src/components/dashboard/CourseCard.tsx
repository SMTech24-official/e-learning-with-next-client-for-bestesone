// components/CourseCard.tsx
import Image, { StaticImageData } from 'next/image';
import React from 'react';

type CourseCardProps = {
  courseTitle: string;
  status: string;
  batch: string;
  imageUrl: string | StaticImageData;
};

const CourseCard: React.FC<CourseCardProps> = ({ courseTitle, status, batch, imageUrl }) => {
  const imageSrc = typeof imageUrl === 'string' ? imageUrl : imageUrl.src;
  return (
    <div className="flex flex-col sm:flex-row sm:items-center w-full max-w-4xl p-4 bg-white shadow-lg rounded-lg">
      <Image
        src={imageSrc}
        alt={courseTitle}
        height={400}
        width={800}
        className="w-72 h-40 object-cover rounded-lg mr-4"
      />
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-gray-800">{courseTitle}</h2>
        <div className="mt-2 flex space-x-2">
          <span className="px-3 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full">{status}</span>
          <span className="px-3 py-1 text-sm font-medium text-purple-700 bg-purple-100 rounded-full">{batch}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
