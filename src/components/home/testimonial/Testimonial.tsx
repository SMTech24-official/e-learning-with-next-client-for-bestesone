import Image from "next/image";
import AngleNext from "@/assets/testimonial/next.svg";
import AnglePrev from "@/assets/testimonial/prev.svg";

const Testimonial = () => {
  return (
    <section className="pt-[50px] pb-[40px]">
      <div className="container">
        <h2 className="mb-10 text-center text-5xl text-gray-black-900 font-semibold">
          What Our Students Says About us
        </h2>
        <div className="flex gap-3 justify-end">
          <div className="p-[10px] flex justify-center items-center cursor-pointer bg-white rounded-full shadow-[0px_4px_16px_0px_rgba(16,24,40,0.08),_0px_4px_6px_-5px_rgba(16,24,40,0.03)] w-[44px] h-[44px]">
            <Image
              src={AnglePrev}
              width={6}
              height={12}
              alt="Arrow icon"
              // className="w-full"
            />
          </div>
          <div className="p-[10px] flex justify-center items-center cursor-pointer bg-white rounded-full shadow-[0px_4px_16px_0px_rgba(16,24,40,0.08),_0px_4px_6px_-5px_rgba(16,24,40,0.03)] w-[44px] h-[44px]">
            <Image src={AngleNext} width={6} height={12} alt="Arrow icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
