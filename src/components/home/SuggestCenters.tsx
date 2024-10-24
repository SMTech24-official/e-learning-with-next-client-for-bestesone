"use client";
import React, { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import CentersCard from "./CentersCard/CentersCard";

// Extract the filtering logic into a separate component
const CenterFilters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentType = searchParams.get("center") || "university";

  const setQueryValue = (courseType: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("center", courseType);
    router.replace(`?${newParams.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center sm:justify-center gap-3 sm:gap-10 mb-3 sm:mb-8 overflow-hidden overflow-x-auto pb-2">
      <Button
        variant={currentType === "university" ? "underline" : "ghost"}
        className="p-2 sm:px-5 sm:py-[10px]"
        onClick={() => setQueryValue("university")}
      >
        <p className="text-lg font-semibold">University</p>
      </Button>
      <Button
        variant={currentType === "centers" ? "underline" : "ghost"}
        className="p-2 sm:px-5 sm:py-[10px]"
        onClick={() => setQueryValue("centers")}
      >
        <p className="text-lg font-semibold">Centers</p>
      </Button>
      <Button
        variant={currentType === "collage" ? "underline" : "ghost"}
        className="p-2 sm:px-5 sm:py-[10px]"
        onClick={() => setQueryValue("collage")}
      >
        <p className="text-lg font-semibold">Collage</p>
      </Button>
    </div>
  );
};

// Wrap the filtering component inside a Suspense boundary
const SuggestCenters = () => {
  const count = [1, 2, 3, 4, 5, 6];

  return (
    <div className="container">
      <h3 className="text-center text-3xl sm:text-5xl font-bold leading-[64px] mt-4  sm:mt-20 sm:mb-6">
        Suggest Centers, Collage & University
      </h3>
      <p className="text-center text-[#667085] text-base font-normal leading-6 mb-4 sm:mb-8 md:mb-10">
        Explore Our Top-Rated Centers, Collage and University
      </p>

      <Suspense fallback={<div>Loading filters...</div>}>
        <CenterFilters />
      </Suspense>

      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3  gap-4 mb-[66px]">
        {count?.map((course, index) => (
          <CentersCard key={index} />
        ))}
      </div>

      <div className="w-full flex justify-center my-10">
        <Button variant={"outline"} className="">
        View All University
        </Button>
      </div>
    </div>
  );
};

export default SuggestCenters;
