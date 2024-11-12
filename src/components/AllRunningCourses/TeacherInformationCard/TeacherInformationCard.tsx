import cardImage from "@/assets/cardImages/courseCard/CourseCard.png";
import Image from "next/image";

const TeacherInformationCard = () => {
  return (
    <div className="rounded-[16px] flex items-center gap-5">
      <div className="rounded-[16px] overflow-hidden relative ">
        <Image
          src={cardImage}
          height={300}
          width={300}
          alt="Banner Image"
          className="object-contain "
        />
      </div>
      <div className="flex flex-col gap-2">
        <p>
          Instructor Name: <span className="text-[#667085]"> Abcd</span>
        </p>
        <p>
          Designation: <span className="text-[#667085]"> Lecturer</span>
        </p>
        <p>
          Cell-Phone: <span className="text-[#667085]">01761918875</span>
        </p>
        <p>
          Email:  <span className="text-[#667085]">abcd@diu.edu.bd</span>
        </p>
      </div>
    </div>
  );
};

export default TeacherInformationCard;
