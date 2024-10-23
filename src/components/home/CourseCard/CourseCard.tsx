import Image from "next/image";
import React from "react";
import cardImage from "@/assets/courseCard/CourseCard.png";
import star from "@/assets/courseCard/star.png";

const CourseCard = () => {
  return (
    <div className="rounded-[16px] bg-primary-light py-5 px-4">
      <div className="rounded-[16px] overflow-hidden relative">
        <Image
          src={cardImage}
          height={300}
          width={300}
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
    </div>
  );
};

export default CourseCard;
