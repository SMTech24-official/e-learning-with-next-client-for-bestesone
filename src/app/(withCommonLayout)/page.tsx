import Banner from "@/components/home/Banner";
import GetInTouch from "@/components/home/GetInTouch";
import OurPopularCourses from "@/components/home/OurPopularCourses";
import SuggestCenters from "@/components/home/SuggestCenters";
import Testimonial from "@/components/home/testimonial/Testimonial";
import Footer from "@/shared/Footer";

const commonLayoutHomePage = () => {
  return (
    <>
      <Banner />
      <OurPopularCourses />
      <SuggestCenters />
      <Testimonial />
      <Footer />
      <GetInTouch/>
    </>
  );
};

export default commonLayoutHomePage;
