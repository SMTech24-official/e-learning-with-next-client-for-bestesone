import React from "react";
import TeacherInformationCard from "./TeacherInformationCard/TeacherInformationCard";
import { AiOutlineLaptop } from "react-icons/ai";

const BusinessManagementSystem = () => {
  const count = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  ];
  const classes = [
    {
      title: "Introduction",
      link: "https://youtu.be/MVVJzStbGQk?si=JWQIfRO10BgBosGD",
    },
    {
      title: "Demo class",
      link: "https://youtu.be/MVVJzStbGQk?si=JWQIfRO10BgBosGD",
    },
    {
      title: "Example class 1",
      link: "https://youtu.be/MVVJzStbGQk?si=JWQIfRO10BgBosGD",
    },
    {
      title: "Example class 2",
      link: "https://youtu.be/MVVJzStbGQk?si=JWQIfRO10BgBosGD",
    },
  ];

  type RoutineItem = {
    day: string;
    time: string;
  };

  const routine: RoutineItem[] = [
    { day: "Sunday", time: "7:00am - 8:00am" },
    { day: "Monday", time: "7:00am - 8:00am" },
    { day: "Tuesday", time: "Off day" },
    { day: "Wednesday", time: "7:00am - 8:00am" },
    { day: "Thursday", time: "7:00am - 8:00am" },
    { day: "Friday", time: "Off day" },
  ];
  return (
    <div className=" lg:px-20">
      <div className="py-2 w-full bg-primary-light border border-primary rounded-[8px] my-10">
        <p className="text-center text-primary">
          Welcome To Business Management system
        </p>
      </div>
      {/* Teacher information and Program Curriculum start */}
      <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 lg:gap-20 items-start mb-8 lg:mb-20">
        <div className="lg:w-6/12">
          <p className="text-base font-medium mb-5">Teacher information</p>
          <TeacherInformationCard />
        </div>
        <div className=" w-full lg:w-6/12">
          <p className="text-base font-medium mb-5">Program Curriculum</p>
          <div className="border-b-2 flex items-center gap-6 w-full pb-3 mb-6">
            <div className="text-[#344054] text-sm flex items-center gap-1">
              <AiOutlineLaptop />
              <p>32 class</p>
            </div>
            <div className="text-[#344054] text-sm flex items-center gap-1">
              <AiOutlineLaptop />
              <p>10 assignment</p>
            </div>
            <div className="text-[#344054] text-sm flex items-center gap-1">
              <AiOutlineLaptop />
              <p>4 exams</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 py- px-2  max-h-60 overflow-hidden overflow-y-auto slim-scroll">
            {count.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <p className="text-[#1D2939] text-base font-medium whitespace-nowrap">
                  Class {item}:
                </p>
                <p className="text-[#475467] text-base font-normal">
                  Orientation, How to get ready for this program. system for
                  next js{" "}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Teacher information and Program Curriculum end */}
      {/* Class routine and Pre recorded class start */}
      <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 lg:gap-20 items-start mb-8 lg:mb-20">
        <div className="w-full lg:w-4/12">
          <p className="text-base font-medium mb-5 pb-3 border-b-2 w-full">
            Class routine
          </p>
          <ul>
            {routine.map((item, index) => (
              <li key={index} className="flex items-center py-2">
                <span className="text-gray-600 w-28">{item.day}</span>
                <span className="text-gray-600 w-8 text-center">:</span>
                <span className="text-gray-800">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className=" w-full lg:w-8/12">
          <p className="text-base font-medium mb-5 pb-3 border-b-2 w-full">
            Pre recorded class
          </p>

          <div className="flex flex-col gap-4 py- px-2  max-h-60 overflow-hidden overflow-y-auto slim-scroll">
            <ul>
              {classes.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col xs:flex-row items-start py-2"
                >
                  <span className="text-gray-600 w-28 whitespace-nowrap">
                    {item.title}
                  </span>
                  <span className="text-gray-600 w-8 text-center hidden xs:block">
                    :
                  </span>
                  <span className="text-primary">{item.link}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/*  Class routine and Pre recorded class end */}
    </div>
  );
};

export default BusinessManagementSystem;
