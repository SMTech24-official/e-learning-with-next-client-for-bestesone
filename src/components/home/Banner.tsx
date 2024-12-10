import Image from "next/image";
import bannerImage from "@/assets/home/banner-2.png";
import { Button } from "../ui/my-ui/button";
import { ImTarget } from "react-icons/im";

const Banner = () => {
  return (
    <div className="md:py-[102px] py-12 bg-primary-light">
      <div className="container">
        <div className="flex md:flex-row flex-col justify-between gap-[36px] md:items-center">
          <div className="flex flex-col lg:w-2/4">
            <h1 className="mb-4 xl:text-[64px] md:text-[34px] text-[28px] text-gray-neutral-900 font-bold">
              The Data Science Course: Complete Data Science Bootcamp 2024
            </h1>
            <p className="md:mb-8 mb-4 text-gray-500">
              The &quot;Complete Data Science Bootcamp 2024&quot; teaches you
              essential data science skills, including Python, machine learning,
              and data analysis, through hands-on projects and real-world
              applications.
            </p>
            <div className="flex flex-col md:flex-row gap-4 ">
              <Button className="font-semibold" variant={"outline"}>
                <span className="flex justify-center items-center gap-2 w-max">
                  {" "}
                  Near by Courses <ImTarget />
                </span>
              </Button>
              <Button>All Courses</Button>
            </div>
          </div>
          <div className="self-center relative">
            <div className="rounded-3xl xl:w-full xl:h-full lg:w-[440px] md:w-[340px] w-full h-full lg:h-[434px]">
              <Image
                src={bannerImage}
                height={400}
                width={700}
                alt="Banner Image"
                className="object-fill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
