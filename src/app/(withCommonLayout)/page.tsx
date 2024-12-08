"use client";

import Banner from "@/components/home/Banner";
import { FloatingChatBtn } from "@/components/home/FloatingChatBtn";
import OurCategories from "@/components/home/OurCategories";
import OurPartnerInstituteList from "@/components/home/OurPartnerInstituteList";
import OurPopularCourses from "@/components/home/OurPopularCourses";
import Stats from "@/components/home/stats/Stats";

const commonLayoutHomePage = () => {
  return (
    <>
      <Banner />
      <Stats />
      <OurCategories />
      <OurPopularCourses />
      <OurPartnerInstituteList />
      <FloatingChatBtn />
    </>
  );
};

export default commonLayoutHomePage;
