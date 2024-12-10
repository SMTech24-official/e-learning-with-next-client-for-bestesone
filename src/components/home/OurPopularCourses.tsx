"use client";

import { Button } from "../ui/my-ui/button";
import CourseCard from "./CourseCard/CourseCard";
import { demoCourse } from "./demoCourses";
import SectionStarter from "./SectionStarter";

// Wrap the component using Suspense
const OurPopularCourses = () => {
  return (
    <div className="container">
      <SectionStarter
        heading="Our Popular Courses"
        title="Discover Our Most Popular Courses: Unlock Expert Knowledge and Boost Your Skills Today"
      />

      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8 mb-[66px]">
        {demoCourse.map((cardData, idx) => {
          return <CourseCard key={idx} {...cardData} />;
        })}
      </div>
      <div className="w-full flex justify-center my-10">
        <Button variant={"outline"} className="">
          View All Courses
        </Button>
      </div>
    </div>
  );
};

export default OurPopularCourses;
