import CourseBanner from "@/components/courseDetails/CourseBanner";
import bgImage from "@/assets/courseDetails/bannerBackground.png"; // Ensure this path is correct
import React from "react";
import WhatWillYouLearn from "@/components/courseDetails/WhatWillYouLearn";
import Reviews from "@/components/courseDetails/Reviews";
import Image from "next/image";

interface CourseId {
  params: {
    courseId: string;
  };
}

const CourseIdPage = async ({ params }: CourseId) => {
  const { courseId } = await params;

  return (
    <div className="relative">
        <Image src={bgImage} height={800} width={800} alt="image" className="absolute -top-80 -left-96 opacity-[50%] blur-[250px] z-[-1]"/>
      <div className=" flex justify-center items-center gap-10 container z-[1]">
        {/* Left side start */}
        <div
          className="w-9/12 h-[400px] "
     
        >
          <CourseBanner />
          <WhatWillYouLearn />
          <Reviews />
        </div>
        {/* Left side end */}
        {/* Right side start */}
        <div className="w-3/12 bg-green-500 h-[400px]"> {/* Added height for consistency */}
          right
        </div>
        {/* Right side end */}
      </div>
    </div>
  );
};

export default CourseIdPage;
