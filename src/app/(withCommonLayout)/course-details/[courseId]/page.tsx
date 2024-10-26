import CourseBanner from "@/components/courseDetails/CourseBanner";
import bgImage from "@/assets/cardImages/CentersCard/CentersCardImage.jpg"; // Ensure this path is correct
import React from "react";
import WhatWillYouLearn from "@/components/courseDetails/WhatWillYouLearn";
import Reviews from "@/components/courseDetails/Reviews";

interface CourseId {
  params: {
    courseId: string;
  };
}

const CourseIdPage = async ({ params }: CourseId) => {
  const { courseId } = await params;

  return (
    <>
      <div className="flex justify-center items-center gap-10 container">
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
    </>
  );
};

export default CourseIdPage;
