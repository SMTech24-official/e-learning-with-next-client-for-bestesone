import CourseCard from "@/components/dashboard/CourseCard";
import React from "react";
import bannerImage from "@/assets/home/banner.jpg";

const EnrolledCoursesPage = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">My Courses</h3>

      <div className="flex flex-col gap-3 ">
        {
            [1,2,3]?.map((course, index) => <CourseCard key={index}
                courseTitle="Business Development Fundamentals"
                status="Finished"
                batch="Batch 4"
                imageUrl={bannerImage} // Replace with actual image path
              />)
        }
      </div>
    </div>
  );
};

export default EnrolledCoursesPage;
