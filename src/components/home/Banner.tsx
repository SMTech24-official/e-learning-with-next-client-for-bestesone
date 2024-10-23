import Image from "next/image";
import bannerImage from "@/assets/home/banner.jpg";
import userImage1 from "@/assets/home/user-1.png";
import userImage2 from "@/assets/home/user-2.png";
import userImage3 from "@/assets/home/user-3.png";
import stars from "@/assets/home/stars.png";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <div className="lg:py-20 bg-primary-light">
      <div className="container">
        <div className="flex lg:flex-row flex-col justify-between gap-[36px] items-center">
          <div>
            <h1 className="mb-4 xl:text-[64px] md:text-[40px] text-gray-neutral-900 font-bold">
              Bridging Students and Educators for Seamless Learning
            </h1>
            <p className="mb-8 text-gray-500">
              Discover, Book, and Learn &#45; Your Gateway to a World of Courses
              and Knowledge
            </p>
            <Button>Get Started</Button>
          </div>
          <div className="justify-self-center">
            <div className="rounded-3xl sm:w-[440px] w-full h-[340px] sm:h-[434px] overflow-hidden relative before:content-[''] before:w-full before:h-[80%] before:absolute before:bg-black-gradient before:bottom-0 before:left-0 before:right-0 before:z-[1]">
              <Image
                src={bannerImage}
                height={400}
                width={700}
                alt="Banner Image"
                className="object-contain"
              />
              <div className="absolute bottom-5 left-4 right-4 z-[2] p-2 rounded-2xl bg-white flex gap-2 items-center">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
