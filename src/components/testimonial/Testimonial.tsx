import { testimonials } from "@/constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TestimonialCard from "./TestimonialCard";
import type { Testimonial } from "@/interface/interface";
import Image from "next/image";
import AngleNext from "@/assets/testimonial/next.svg";
import AnglePrev from "@/assets/testimonial/prev.svg";
import { Navigation } from "swiper/modules";

const Testimonial = () => {
  return (
    <section className="pt-[50px] pb-[40px] overflow-x-hidden">
      <div className="container">
        <h2 className="mb-10 text-center text-3xl sm:text-5xl text-gray-black-900 font-semibold">
          What Our Students Says About us
        </h2>
        <div className="gap-3 justify-end mb-8 md:flex hidden">
          <div className="p-[10px] flex justify-center items-center cursor-pointer bg-white rounded-full shadow-[0px_4px_16px_0px_rgba(16,24,40,0.08),_0px_4px_6px_-5px_rgba(16,24,40,0.03)] w-[44px] h-[44px] testimonial-prev">
            <Image src={AnglePrev} width={6} height={12} alt="Arrow icon" />
          </div>
          <div className="p-[10px] flex justify-center items-center cursor-pointer bg-white rounded-full shadow-[0px_4px_16px_0px_rgba(16,24,40,0.08),_0px_4px_6px_-5px_rgba(16,24,40,0.03)] w-[44px] h-[44px] testimonial-next">
            <Image src={AngleNext} width={6} height={12} alt="Arrow icon" />
          </div>
        </div>

        <Swiper
          className="!overflow-visible"
          spaceBetween={24}
          slidesPerView="auto"
          grabCursor={true}
          speed={900}
          modules={[Navigation]}
          navigation={{
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
          }}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            620: { slidesPerView: 1.8 },
            1024: {
              slidesPerView: "auto",
            },
          }}
        >
          {testimonials?.map((testimonial: Testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="lg:max-w-[732px] max-w-full"
            >
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="gap-3 md:justify-end justify-center mb-8 md:hidden flex mt-[40px]">
          <div className="p-[10px] flex justify-center items-center cursor-pointer bg-white rounded-full shadow-[0px_4px_16px_0px_rgba(16,24,40,0.08),_0px_4px_6px_-5px_rgba(16,24,40,0.03)] w-[44px] h-[44px] testimonial-prev">
            <Image src={AnglePrev} width={6} height={12} alt="Arrow icon" />
          </div>
          <div className="p-[10px] flex justify-center items-center cursor-pointer bg-white rounded-full shadow-[0px_4px_16px_0px_rgba(16,24,40,0.08),_0px_4px_6px_-5px_rgba(16,24,40,0.03)] w-[44px] h-[44px] testimonial-next">
            <Image src={AngleNext} width={6} height={12} alt="Arrow icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
