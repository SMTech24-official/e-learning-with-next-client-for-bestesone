"use client";

import Banner from "@/components/home/Banner";
import GetInTouch from "@/components/home/GetInTouch";
import OurPopularCourses from "@/components/home/OurPopularCourses";
import Stats from "@/components/home/stats/Stats";
import SuggestCenters from "@/components/home/SuggestCenters";
import Testimonial from "@/components/testimonial/Testimonial";

const commonLayoutHomePage = () => {
  return (
    <>
      <Banner />
      <OurPopularCourses />
      <SuggestCenters />
      <Testimonial />
      <Stats />
      <GetInTouch />
    </>
  );
};

export default commonLayoutHomePage;
