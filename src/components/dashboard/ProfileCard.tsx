// components/ProfileCard.tsx
import Image from "next/image";
import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import { TbEdit } from "react-icons/tb";

type ProfileCardProps = {
  name: string;
  phone: string;
  profileImage: string;
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  phone,
  profileImage,
}) => {
  return (
  <div className="relative w-full  p-4 bg-white shadow rounded-lg">
    <h3 className="text-xl font-semibold mb-4">Your Profile</h3>
      <div className=" flex items-center space-x-4">
       
       <div className="absolute top-2 right-2 text-gray-400">
         <FiMoreVertical className="text-2xl font-bold" />
       </div>
       <Image
         src={profileImage}
         alt={name}
         height={100}
         width={100}
         className="w-16 h-16 rounded-full object-cover"
       />
       <div className="flex-1">
         <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
         <p className="text-gray-500 text-sm">{phone}</p>
       </div>
       <div className="text-gray-500">
         <TbEdit size={24} />
       </div>
     </div>
  </div>
  );
};

export default ProfileCard;
