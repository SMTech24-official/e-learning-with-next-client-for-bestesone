import { TestimonialCardProps } from "@/interface/interface";

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="py-[52px] px-[40px] rounded-2xl bg-white shadow-[0px_4px_16px_0px_rgba(16,24,40,0.08),_0px_4px_6px_-5px_rgba(16,24,40,0.03)]">
      <h3>{testimonial.name}</h3>
      <p>{testimonial.review}</p>
    </div>
  );
};

export default TestimonialCard;
