"use client";

import Banner from "@/components/home/Banner";
import GetInTouch from "@/components/home/GetInTouch";
import OurCategories from "@/components/home/OurCategories";
import OurPopularCourses from "@/components/home/OurPopularCourses";
import Stats from "@/components/home/stats/Stats";

const commonLayoutHomePage = () => {
  return (
    <>
      <Banner />
      <Stats />
      <OurCategories />
      <OurPopularCourses />
      <GetInTouch />
    </>
  );
};

export default commonLayoutHomePage;
