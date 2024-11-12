'use client'
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import { FiFileText } from 'react-icons/fi';

type AnnouncementCardProps = {
  teacherName: string;
  teacherTitle: string;
  postDate: string;
  content: string;
  imageUrl: string | StaticImageData;
  category: string;
};

const AnnouncementCard: React.FC<AnnouncementCardProps> = ({
  teacherName,
  teacherTitle,
  postDate,
  content,
  imageUrl,
  category
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => setIsExpanded(!isExpanded);

  const truncatedContent = content.length > 150 ? `${content.slice(0, 150)}...` : content;
  const imageSrc = typeof imageUrl === 'string' ? imageUrl : imageUrl.src;
  return (
    <div className="w-full max-w-2xl p-6 bg-white shadow-md rounded-lg">
      <div className="flex items-center space-x-4 mb-4">
        <Image
          src={imageSrc}
          alt={teacherName}
          width={100}
          height={100}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-gray-800">{teacherName}</p>
          <p className="text-xs text-gray-500">{teacherTitle} • {postDate}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2 mb-2">
        <FiFileText className="text-gray-600" />
        <p className="text-xs font-medium">
          {category}
        </p>
      </div>
      <h3 className='font-semibold text-lg mt-4 mb-2'>Welcome to Learning with us</h3>
      <p className="text-gray-700 text-sm mb-4">
        {isExpanded ? content : truncatedContent}
        <button
          onClick={toggleContent}
          className="text-blue-500 text-xs ml-1"
        >
          {isExpanded ? 'see less' : 'see more'}
        </button>
      </p>
    </div>
  );
};

export default AnnouncementCard;
