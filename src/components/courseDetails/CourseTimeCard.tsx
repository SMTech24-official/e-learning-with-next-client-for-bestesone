import React from "react";

const CourseTimeCard = () => {
  return (
    <div
      className="py-4 px-8 rounded-[20px]"
      style={{
        boxShadow:
          "0px 4px 16px 0px rgba(16, 24, 40, 0.08), 0px 4px 6px -5px rgba(16, 24, 40, 0.03)",
      }}
    >
      <h5 className="text-[#384250] font-semibold text-base mb-7">
        Course Time
      </h5>

      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <div className=" flex items-center gap-2">
            <div className="p-1 bg-[#384250] rounded-full"></div>
            <p className="text-[#384250] text-sm font-normal">
              Course Duration
            </p>
          </div>
          <div>
            <p className="text-[#384250] text-sm font-semibold">2 Days</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className=" flex items-center gap-2">
            <div className="p-1 bg-[#384250] rounded-full"></div>
            <p className="text-[#384250] text-sm font-normal">Class time</p>
          </div>
          <div>
            <p className="text-[#384250] text-sm font-semibold">2PM - 4PM</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className=" flex items-center gap-2">
            <div className="p-1 bg-[#384250] rounded-full"></div>
            <p className="text-[#384250] text-sm font-normal">Course Hour</p>
          </div>
          <div>
            <p className="text-[#384250] text-sm font-semibold">72 Hours</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className=" flex items-center gap-2">
            <div className="p-1 bg-[#384250] rounded-full"></div>
            <p className="text-[#384250] text-sm font-normal">Teacher Name</p>
          </div>
          <div>
            <p className="text-[#384250] text-sm font-semibold">Mrs Fatema</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className=" flex items-center gap-2">
            <div className="p-1 bg-[#384250] rounded-full"></div>
            <p className="text-[#384250] text-sm font-normal">Course day</p>
          </div>
          <div>
            <p className="text-[#384250] text-sm font-semibold">Sun,Mon,Thur</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseTimeCard;
