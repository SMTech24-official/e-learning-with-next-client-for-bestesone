"use client";

import Banner from "@/components/home/Banner";
import GetInTouch from "@/components/home/GetInTouch";
import OurPopularCourses from "@/components/home/OurPopularCourses";
import SuggestCenters from "@/components/home/SuggestCenters";
import Testimonial from "@/components/home/testimonial/Testimonial";

const commonLayoutHomePage = () => {
  return (
    <>
      <Banner />
      <OurPopularCourses />
      <SuggestCenters />
      <Testimonial />
      <GetInTouch />
    </>
  );
};

export default commonLayoutHomePage;
