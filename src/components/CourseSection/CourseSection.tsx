import React from "react";
import CourseCard from "../home/CourseCard/CourseCard";
import { demoCourse as courses } from "@/components/home/demoCourses";

const CourseSection = () => {
  return (
    <div className="container pt-24">
      <h1 className="text-heading-text text-3xl font-bold mb-12">Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses?.slice(0, 8).map((course, idx) => {
          return <CourseCard key={idx} {...course} />;
        })}
      </div>
    </div>
  );
};

export default CourseSection;
