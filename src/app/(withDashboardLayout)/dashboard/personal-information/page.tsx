import AddressCard from "@/components/dashboard/AddressCard";
import EmailCard from "@/components/dashboard/EmailCard";
import PhoneNumberCard from "@/components/dashboard/PhoneNumberCard";
import ProfileCard from "@/components/dashboard/ProfileCard";
import React from "react";

const PersonalInformationPage = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-5">
      <div className="w-full flex flex-col gap-3">
        <ProfileCard
          name="Dianne Russell"
          phone="+880 14 258 654"
          profileImage="https://mycollectorsoutpost.com/cdn/shop/files/aang-water-spirit-avatar-the-last-airbender-legacy-series-portrait-art-print1_550x.jpg" // Replace with actual image path
        />
         <EmailCard emails={['example@gmail.com', 'ecample@gmail.com']} />
         <PhoneNumberCard phoneNumbers={['+880 14 258 654', '+880 14 258 654']} />
      </div>
      <div className="w-full">
        <AddressCard
          presentAddress={[
            "4517 Washington Ave. Manchester, Kentucky 39495",
            "8502 Preston Rd. Inglewood, Maine 98380",
          ]}
          permanentAddress={[
            "4517 Washington Ave. Manchester, Kentucky 39495",
            "8502 Preston Rd. Inglewood, Maine 98380",
          ]}
        />
      </div>
    </div>
  );
};

export default PersonalInformationPage;
