"use client";
import React from "react";
import { Button } from "../ui/button";
import { useSearchParams, useRouter } from "next/navigation";
import CourseCard from "./CourseCard/CourseCard";

const OurPopularCourses = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get the current 'type' query parameter
  const currentType = searchParams.get("type") || "all";

  // Function to set the query value in the URL without reloading the page
  const setQueryValue = (courseType: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("type", courseType);
    router.replace(`?${newParams.toString()}`, { scroll: false });
  };

  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="container">
      <h3 className="text-center text-5xl font-bold leading-[64px] mb-4">
        Our Popular Courses
      </h3>
      <p className="text-center text-[#667085] text-base font-normal leading-6 mb-10">
        Explore Our Top-Rated Courses and Start Your Learning Journey Today
      </p>

      <div className="flex items-center justify-center gap-6 mb-10">
        <Button
          variant={currentType === "all" ? "default" : "outline"}
          onClick={() => setQueryValue("all")}
        >
          All Courses
        </Button>
        <Button
          variant={currentType === "web-development" ? "default" : "outline"}
          onClick={() => setQueryValue("web-development")}
        >
          Web Development
        </Button>
        <Button
          variant={currentType === "data-science" ? "default" : "outline"}
          onClick={() => setQueryValue("data-science")}
        >
          Data Science
        </Button>
        <Button
          variant={currentType === "design" ? "default" : "outline"}
          onClick={() => setQueryValue("design")}
        >
          Design
        </Button>
      </div>

      {/* Your course listings here */}

      <div className="grid grid-cols-4 gap-4 m">
        {count?.map((course, index) => (
          <CourseCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default OurPopularCourses;
