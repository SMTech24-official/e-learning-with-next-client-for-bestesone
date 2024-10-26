import { TestimonialCardProps } from "@/interface/interface";
import { Rate } from "antd";
import Image from "next/image";

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="flex lg:flex-row flex-col lg:items-center lg:gap-6 gap-4 lg:py-[52px] p-[25px] lg:px-[40px] rounded-2xl bg-white shadow-[0px_4px_16px_0px_rgba(16,24,40,0.08),_0px_4px_6px_-5px_rgba(16,24,40,0.03)]">
      <Image
        src={testimonial?.imageUrl}
        height={180}
        width={180}
        className="object-contain rounded-full lg:w-[180px] lg:h-[180px] w-[80px] h-[80px]"
        alt={testimonial?.name}
      />
      <div className="flex flex-col lg:gap-6 gap-4">
        <Rate disabled count={5} value={5} />
        <p className="text-gray-neutral-700 lg:text-base text-sm">
          {testimonial?.review}
        </p>
        <div>
          <h3 className="font-semibold text-xl">{testimonial?.name}</h3>
          <p className="lg:text-base text-sm text-gray-neutral-700">
            {testimonial?.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
