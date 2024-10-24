import Banner from "@/components/home/Banner";
import Footer from "@/shared/Footer";
import OurPopularCourses from "@/components/home/OurPopularCourses";
import SuggestCenters from "@/components/home/SuggestCenters";

const commonLayoutHomePage = () => {
  return (
    <>
      <Banner />
      <OurPopularCourses />
      <SuggestCenters />
      <Footer />
    </>
  );
};

export default commonLayoutHomePage;
