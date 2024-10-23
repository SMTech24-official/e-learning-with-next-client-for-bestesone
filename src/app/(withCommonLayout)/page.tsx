import Banner from "@/components/home/Banner";
import Footer from "@/components/home/Footer";
import OurPopularCourses from "@/components/home/OurPopularCourses";
import React from "react";

const commonLayoutHomePage = () => {
  return (
    <>
      <Banner />
      <OurPopularCourses />
      <Footer />
    </>
  );
};

export default commonLayoutHomePage;
