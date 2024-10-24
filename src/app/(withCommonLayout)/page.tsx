import Banner from "@/components/home/Banner";
import GetInTouch from "@/components/home/GetInTouch";
import OurPopularCourses from "@/components/home/OurPopularCourses";
import SuggestCenters from "@/components/home/SuggestCenters";
import React from "react";

const commonLayoutHomePage = () => {
  return (
    <>
      <Banner />
      <OurPopularCourses/>
      <SuggestCenters/>
      <GetInTouch/>
    </>
  );
};

export default commonLayoutHomePage;
