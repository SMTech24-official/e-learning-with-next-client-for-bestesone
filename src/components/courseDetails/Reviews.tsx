import React from "react";
import bannerImage from "@/assets/home/banner.jpg";
import Image from "next/image";
import { Rate } from "antd";

const Reviews = () => {
  return (
    <div>
      <h2 className="font-bold text-4xl mb-10">Reviews</h2>

      <div className="mb-4">
      <div className="flex items-center gap-4 mb-5">
        <div className="rounded-full h-12 w-12 overflow-hidden">
          <Image
            src={bannerImage}
            height={50}
            width={50}
            alt="Banner Image"
            className="object-contain"
          />
        </div>
        <div>
          <p className="text-base font-medium mb-2">Abdul Ahad</p>
          <div>
            <Rate allowHalf defaultValue={4.5} />
          </div>
        </div>
      </div>
      <h5 className="text-[18px] font-normal text-[#667085]">
        EduConnect makes finding and booking courses so easy! The platform is
        user-friendly, and I love the convenience of discovering top instructors
        and classes near me. Highly recommend!
      </h5>
      </div>
      <div className="mb-4">
      <div className="flex items-center gap-4 mb-5">
        <div className="rounded-full h-12 w-12 overflow-hidden">
          <Image
            src={bannerImage}
            height={50}
            width={50}
            alt="Banner Image"
            className="object-contain"
          />
        </div>
        <div>
          <p className="text-base font-medium mb-2">Abdul Ahad</p>
          <div>
            <Rate allowHalf defaultValue={4.5} />
          </div>
        </div>
      </div>
      <h5 className="text-[18px] font-normal text-[#667085]">
        EduConnect makes finding and booking courses so easy! The platform is
        user-friendly, and I love the convenience of discovering top instructors
        and classes near me. Highly recommend!
      </h5>
      </div>
    </div>
  );
};

export default Reviews;
