/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import bannerImage from "@/assets/home/banner.jpg";
import { Rate } from "antd";
import Image from "next/image";


const Reviews = () => {
  return (
    <div className="mb-24">
      <h2 className="font-bold text-2xl sm:text-4xl mb-3 sm:mb-6">Reviews</h2>

      {/* comments */}
      <div className="mb-5 sm:mb-11">
        <div className="flex items-center gap-4 mb-2 sm:mb-5">
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
              <Rate allowHalf disabled defaultValue={4.5} />
            </div>
          </div>
        </div>
        <h5 className="text-[18px] font-normal text-[#667085]">
          EduConnect makes finding and booking courses so easy! The platform is
          user-friendly, and I love the convenience of discovering top
          instructors and classes near me. Highly recommend!
        </h5>
      </div>
      <div className="mb-4 sm:mb-8">
        <div className="flex items-center gap-4 mb-2 sm:mb-5">
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
              <Rate allowHalf disabled defaultValue={4.5} />
            </div>
          </div>
        </div>
        <h5 className="text-[18px] font-normal text-[#667085]">
          EduConnect makes finding and booking courses so easy! The platform is
          user-friendly, and I love the convenience of discovering top
          instructors and classes near me. Highly recommend!
        </h5>
      </div>
    </div>
  );
};

export default Reviews;
