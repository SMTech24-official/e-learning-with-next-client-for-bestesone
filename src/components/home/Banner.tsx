import Image from "next/image";
import bannerImage from "@/assets/home/banner.jpg";
import userImage1 from "@/assets/home/user-1.png";
import userImage2 from "@/assets/home/user-2.png";
import userImage3 from "@/assets/home/user-3.png";
import stars from "@/assets/home/stars.png";
import analytics from "@/assets/home/analytics.svg";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <div className="md:py-[102px] py-12 bg-primary-light">
      <div className="container">
        <div className="flex md:flex-row flex-col justify-between gap-[36px] md:items-center">
          <div>
            <h1 className="mb-4 xl:text-[64px] md:text-[34px] text-[28px] text-gray-neutral-900 font-bold">
              Bridging Students and Educators for Seamless Learning
            </h1>
            <p className="md:mb-8 mb-4 text-gray-500">
              Discover, Book, and Learn &#45; Your Gateway to a World of Courses
              and Knowledge
            </p>
            <div className="flex gap-4">
              <Button>Get Started</Button>
              <Button variant={"outline"}>Learn More</Button>
            </div>
          </div>
          <div className="self-center relative">
            <div className="rounded-3xl lg:w-[440px] md:w-[340px] w-full h-[340px] lg:h-[434px] overflow-hidden relative before:content-[''] before:w-full before:h-[80%] before:absolute before:bg-black-gradient before:bottom-0 before:left-0 before:right-0 before:z-[1]">
              <Image
                src={bannerImage}
                height={400}
                width={700}
                alt="Banner Image"
                className="object-contain"
              />
              <div className="max-w-[296px] absolute bottom-5 left-4 right-4 z-[2] p-2 rounded-2xl bg-white flex gap-2 items-center">
                <div className="flex items-center">
                  <Image
                    src={userImage1}
                    width={52}
                    height={52}
                    className="object-contain border-2 border-white rounded-full"
                    alt="Image of user"
                  />
                  <Image
                    src={userImage2}
                    width={52}
                    height={52}
                    className="object-contain ms-[-15px] border-2 border-white rounded-full"
                    alt="Image of user"
                  />
                  <Image
                    src={userImage3}
                    width={52}
                    height={52}
                    className="object-contain ms-[-15px] border-2 border-white rounded-full"
                    alt="Image of user"
                  />
                </div>
                <div>
                  <Image
                    src={stars}
                    width={98}
                    height={20}
                    className="object-contain"
                    alt="Image of star"
                  />
                  <p className="text-sm font-semibold mt-[4px]">
                    ( 10k+ Reviews)
                  </p>
                </div>
              </div>
            </div>
            <Image
              src={analytics}
              width={102}
              height={56}
              className="lg:w-[102px] w-[80px] h-auto object-contain absolute lg:left-[-30%] left-[-30%] bottom-[30px] z-[3] md:block hidden"
              alt="Image of analytics"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
