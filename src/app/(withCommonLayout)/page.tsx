import Banner from "@/components/home/Banner";
import OurPopularCourses from "@/components/home/OurPopularCourses";
import SuggestCenters from "@/components/home/SuggestCenters";
import Footer from "@/shared/Footer";

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
