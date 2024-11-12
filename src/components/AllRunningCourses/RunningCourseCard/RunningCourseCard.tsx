import cardImage from "@/assets/cardImages/courseCard/CourseCard.png";
import Image from "next/image";

const RunningCourseCard = () => {
  return (
    <div className="rounded-[16px] bg-primary-light pt-5 pb-3 px-4">
      <div className="rounded-[16px] overflow-hidden relative ">
        <Image
          src={cardImage}
          height={600}
          width={600}
          alt="Banner Image"
          className="object-contain "
        />
      </div>
      <p className="pt-2 text-base md:text-lg font-semibold text-center">Advance Business Management System </p>
    </div>
  );
};

export default RunningCourseCard;
