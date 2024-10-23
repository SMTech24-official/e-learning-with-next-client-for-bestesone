import Image from "next/image";
import React from "react";
import cardImage from "@/assets/courseCard/CourseCard.png";
import star from "@/assets/courseCard/star.png";
import { MdPeople } from "react-icons/md";
import { Button } from "@/components/ui/button";

const CourseCard = () => {
  return (
    <div className="rounded-[16px] bg-primary-light py-5 px-4">
      <div className="rounded-[16px] overflow-hidden relative mb-3">
        <Image
          src={cardImage}
          height={600}
          width={600}
          alt="Banner Image"
          className="object-contain "
        />
        <div className="absolute bottom-4 left-4 px-4 py-2 flex items-center justify-center gap-1 rounded-[16px] bg-[rgba(255,255,255,0.50)] backdrop-blur-[2px]">
          <Image
            src={star}
            width={15}
            height={15}
            className="object-contain"
            alt="Image of star"
          />
          <p className="text-white text-sm">4.5 </p>
        </div>
      </div>
      <div className="flex items-center justify-between mb-6 ">
        <p className="text-xs font-normal">Batch 4</p>
        <div className="flex items-center gap-1">
          <MdPeople />
          <p className="text-xs font-normal">Left seat 15</p>
        </div>
        <p className="text-xs font-normal">Days left 10</p>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <div className="p-2 bg-[#32D583] rounded-full"></div>
        <p className="text-[#32D583] font-medium leading-6">Available</p>
      </div>
      <h5 className="text-2xl font-semibold leading-6 mb-4">Business</h5>
      <p className="text-sm font-normal leading-[22px] mb-4">
        The Business Management System (ABMS) is an all-in-one software that
        streamlines operations and enhances decision-making.
      </p>
      <div className="flex items-center justify-between">
        <div className="text-2xl font-semibold">$850</div>

        <Button className="px-3 py-2 sm:px-5 sm:py-[10px]" >View Details</Button>
      </div>
    </div>
  );
};

export default CourseCard;
