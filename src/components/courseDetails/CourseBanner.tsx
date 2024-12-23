import Image from "next/image";
import React from "react";
import bannerImage from "@/assets/home/banner.jpg";
import videoImg from "@/assets/courseDetails/videoImg.png";

const CourseBanner = () => {
  return (
    <>
      <div className="py-7 sm:py-16">
        <h1 className="font-semibold text-2xl sm:text-5xl md:text-6xl mb-2 sm:mb-4 text-primary-bold leading-[100%]">
          HTML, CSS, and JavaScript for Web Developers Specialization
        </h1>
        <p className="text-sm font-normal mb-4 text-[#667085]">
          Unlimited access to 7,000+ courses, projects, and certificates with
          your subscription.
        </p>
        <div className="flex items-center gap-2 mb-5">
          <div className="rounded-full h-10 w-10 overflow-hidden">
            <Image
              src={bannerImage}
              height={50}
              width={50}
              alt="Banner Image"
              className="object-contain"
            />
          </div>
          <p className="text-sm font-normal text-[#384250]">by Albert Flores</p>
        </div>

        <div className="overflow-hidden rounded-3xl max-h-[500px] ">
          <Image
            src={videoImg}
            height={300}
            width={1200}
            alt="Banner Image"
            className="object-contain"
          />
        </div>
      </div>
      <div>
        <h2 className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-6 text-[#1D2939]">
          About the course
        </h2>
        <p className="text-lg font-normal mb-3 sm:mb-8 text-[#667085]">
          Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.
          Felis donec massa aliquam id.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Purus viverra praesent felis consequat pellentesque
          turpis et quisque platea. Eu, elit ut nunc ac mauris bibendum nulla
          placerat. Sagittis sit eu sit massa sapien,
        </p>
      </div>
    </>
  );
};

export default CourseBanner;
