import PartnerCard from "./PartnerCard/PartnerCard";
import SectionStarter from "./SectionStarter";

export const partners = [
  {
    imageUrl: "https://i.ibb.co.com/YQ78DrR/partner-image.png",
    name: "Creative IT Institute",
    title: "Leading IT Training Institute in BD",
    rating: 4.8,
    ratingCount: 1285,
  },
  {
    imageUrl: "https://i.ibb.co.com/pKDLRrW/partner-image-2.png",
    name: "Creative IT Institute",
    title: "Leading IT Training Institute in BD",
    rating: 4.5,
    ratingCount: 89,
  },
  {
    imageUrl: "https://i.ibb.co.com/YQ78DrR/partner-image.png",
    name: "Creative IT Institute",
    title: "Leading IT Training Institute in BD",
    rating: 4.8,
    ratingCount: 1285,
  },
  {
    imageUrl: "https://i.ibb.co.com/pKDLRrW/partner-image-2.png",
    name: "Creative IT Institute",
    title: "Leading IT Training Institute in BD",
    rating: 4.5,
    ratingCount: 89,
  },
  {
    imageUrl: "https://i.ibb.co.com/YQ78DrR/partner-image.png",
    name: "Creative IT Institute",
    title: "Leading IT Training Institute in BD",
    rating: 4.8,
    ratingCount: 1285,
  },
  {
    imageUrl: "https://i.ibb.co.com/pKDLRrW/partner-image-2.png",
    name: "Creative IT Institute",
    title: "Leading IT Training Institute in BD",
    rating: 4.5,
    ratingCount: 89,
  },
  {
    imageUrl: "https://i.ibb.co.com/YQ78DrR/partner-image.png",
    name: "Creative IT Institute",
    title: "Leading IT Training Institute in BD",
    rating: 4.8,
    ratingCount: 1285,
  },
  {
    imageUrl: "https://i.ibb.co.com/pKDLRrW/partner-image-2.png",
    name: "Creative IT Institute",
    title: "Leading IT Training Institute in BD",
    rating: 4.5,
    ratingCount: 89,
  },
  {
    imageUrl: "https://i.ibb.co.com/YQ78DrR/partner-image.png",
    name: "Creative IT Institute",
    title: "Leading IT Training Institute in BD",
    rating: 4.8,
    ratingCount: 1285,
  },
  {
    imageUrl: "https://i.ibb.co.com/pKDLRrW/partner-image-2.png",
    name: "Creative IT Institute",
    title: "Leading IT Training Institute in BD",
    rating: 4.5,
    ratingCount: 89,
  },
];

const OurPartnerInstituteList = () => {
  return (
    <div className="container">
      <SectionStarter
        heading="Our Partner Institute List"
        title="Discover Our Most Popular Courses: Unlock Expert Knowledge and Boost Your Skills Today"
      />
      <div className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-8 mb-[66px]">
        {partners.map((partner, idx) => {
          return <PartnerCard key={idx} {...partner} />;
        })}
      </div>
    </div>
  );
};

export default OurPartnerInstituteList;
