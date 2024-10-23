import Image from "next/image";
import bannerImage from "@/assets/home/banner.jpg";

const Banner = () => {
  return (
    <div className="lg:py-20 bg-primary-light">
      <div className="container">
        <div className="grid grid-cols-2">
          <div></div>
          <div>
            <div className="rounded-3xl overflow-hidden relative before:content-[''] before:w-full before:h-full before:absolute before:bg-[rgba(0,0,0,0.5)] before:inset-0 before:z-[1]">
              <Image
                src={bannerImage}
                height={400}
                width={700}
                alt="Banner Image"
              />
              <div className="p-2 rounded-2xl bg-white flex gap-2">
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
