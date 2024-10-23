import Banner from "@/components/home/Banner";
import OurPopularCourses from "@/components/home/OurPopularCourses";
import React from "react";

const commonLayoutHomePage = () => {
  return (
    <>
      <Banner />
      <OurPopularCourses/>
    </>
  );
};

export default commonLayoutHomePage;
