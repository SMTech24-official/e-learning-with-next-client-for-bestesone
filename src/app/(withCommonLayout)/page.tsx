import Banner from "@/components/home/Banner";
import OurPopularCourses from "@/components/home/OurPopularCourses";
import SuggestCenters from "@/components/home/SuggestCenters";
import React from "react";

const commonLayoutHomePage = () => {
  return (
    <>
      <Banner />
      <OurPopularCourses/>
      <SuggestCenters/>
    </>
  );
};

export default commonLayoutHomePage;
