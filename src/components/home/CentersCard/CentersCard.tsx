import cardImage from "@/assets/cardImages/CentersCard/CentersCardImage.jpg";
import Image from "next/image";
import { MdOutlineLocationOn, MdPeople } from "react-icons/md";

const CentersCard = () => {
  return (
    <div className="rounded-[16px] bg-primary p-5">
      <div className="rounded-[16px] overflow-hidden relative mb-3">
        <Image
          src={cardImage}
          height={600}
          width={600}
          alt="Banner Image"
          className="object-contain "
        />
      </div>
      <div className="flex xl:max-w-[90%] text-white items-center justify-between mb-[18px] whitespace-nowrap ">
        <div className="flex items-center gap-1">
          <MdOutlineLocationOn />
          <p className="text-sm md:text-base font-normal">Dhahran</p>
        </div>
        <div className="flex items-center gap-1">
          <MdPeople />
          <p className="text-sm md:text-base font-normal">6 Courses</p>
        </div>
      </div>
      <h3 className="text-xl lg:text-2xl font-semibold text-white">
        King Fahd University of Petroleum and Minerals
      </h3>
    </div>
  );
};

export default CentersCard;
