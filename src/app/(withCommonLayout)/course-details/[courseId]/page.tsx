import CourseBanner from "@/components/courseDetails/CourseBanner";
import bgImage from "@/assets/courseDetails/bannerBackground.png"; // Ensure this path is correct
import React from "react";
import WhatWillYouLearn from "@/components/courseDetails/WhatWillYouLearn";
import Reviews from "@/components/courseDetails/Reviews";
import Image from "next/image";
import BuyNowCard from "@/components/courseDetails/BuyNowCard";
import InvitationCode from "@/components/courseDetails/InvitationCode";
import CourseTimeCard from "@/components/courseDetails/CourseTimeCard";

const CourseIdPage = async () => {
  return (
    <>
      <div className="relative w-full">
        <Image
          src={bgImage}
          height={800}
          width={800}
          alt="image"
          className="absolute -top-80 -left-96 opacity-[50%] blur-[250px] z-[-1]"
        />
        <div className=" flex flex-col md:flex-row justify-center gap-3 sm:gap-10 container z-[1] mb-6">
          {/* Left side start */}
          <div className="lg:w-8/12 ">
            <CourseBanner />
          </div>
          {/* Left side end */}
          {/* Right side start */}
          <div className="lg:w-4/12 flex flex-col gap-3 sm:gap-10 sm:mt-20">
            {" "}
            {/* Added height for consistency */}
            <BuyNowCard />
            <InvitationCode />
            <CourseTimeCard />
          </div>
          {/* Right side end */}
        </div>

        <div className="container">
          <div className=" lg:w-8/12 ">
            <WhatWillYouLearn />
            <Reviews />
          </div>
          <div className="lg:w-4/12"></div>
        </div>
      </div>
    </>
  );
};

export default CourseIdPage;
