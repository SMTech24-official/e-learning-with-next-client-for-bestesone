"use client";

import Banner from "@/components/home/Banner";
import GetInTouch from "@/components/home/GetInTouch";
import OurCategories from "@/components/home/OurCategories";
import OurPopularCourses from "@/components/home/OurPopularCourses";
import Overview from "@/components/home/Overview";
import Stats from "@/components/home/stats/Stats";
import SuggestCenters from "@/components/home/SuggestCenters";
import Testimonial from "@/components/testimonial/Testimonial";

const commonLayoutHomePage = () => {
  return (
    <>
      <Banner />
      <Overview />
      <OurCategories/>
      <OurPopularCourses />
      <SuggestCenters />
      <Testimonial />
      <Stats />
      <GetInTouch />
    </>
  );
};

export default commonLayoutHomePage;
