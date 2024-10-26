import React from "react";
import { Button } from "../ui/button";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { GoClock } from "react-icons/go";
import { FiVideo } from "react-icons/fi";
import { AiOutlineFlag } from "react-icons/ai";

const BuyNowCard = () => {
  return (
    <div
      className="p-4 sm:py-9 sm:px-8 rounded-[20px]"
      style={{
        boxShadow:
          "0px 4px 16px 0px rgba(16, 24, 40, 0.08), 0px 4px 6px -5px rgba(16, 24, 40, 0.03)",
      }}
    >
      <h2 className="text-2xl sm:text-4xl font-semibold mb-3 whitespace-nowrap">
        $ 850.00 USD
      </h2>
      <p className="text-sm font-normal text-[#384250] mb-4 sm:mb-8">
        Provide most popular courses that your want to join and lets start the
        course for the most simply way in here
      </p>
      <Button className=" w-full py-3 rounded-lg bg-primary text-white text-base font-normal leading-6 mb-5 sm:mb-14">
        Buy Now
      </Button>

      <>
        <div className="flex justify-between items-center mb-6 ">
          <div className=" flex items-center gap-1">
            <HiOutlineChartSquareBar size={20} className="text-[#667085]" />
            <p className="text-[#384250] text-sm font-normal">Course Level</p>
          </div>
          <div>
            <p className="text-[#384250] text-sm font-semibold">Intermediate</p>
          </div>
        </div>
        <div className="flex justify-between items-center mb-6">
          <div className=" flex items-center gap-1">
            <GoClock size={20} className="text-[#667085]" />
            <p className="text-[#384250] text-sm font-normal">Course Duration</p>
          </div>
          <div>
            <p className="text-[#384250] text-sm font-semibold">6hr 48m</p>
          </div>
        </div>
        <div className="flex justify-between items-center mb-6">
          <div className=" flex items-center gap-1">
            <FiVideo size={20} className="text-[#667085]" />
            <p className="text-[#384250] text-sm font-normal">Lessons</p>
          </div>
          <div>
            <p className="text-[#384250] text-sm font-semibold">40</p>
          </div>
        </div>
        <div className="flex justify-between items-center mb-6">
          <div className=" flex items-center gap-1">
            <AiOutlineFlag size={20} className="text-[#667085]" />
            <p className="text-[#384250] text-sm font-normal">Language</p>
          </div>
          <div>
            <p className="text-[#384250] text-sm font-semibold">English</p>
          </div>
        </div>
      </>
    </div>
  );
};

export default BuyNowCard;
