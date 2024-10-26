/* eslint-disable @typescript-eslint/no-explicit-any */
import GetInTouchComponent from "./GetInTouchComponent/GetInTouchComponent";

const GetInTouch = () => {
  return (
    <div className="container border-[3px] rounded-[32px] border-primary-light py-[30px] md:py-[64px]">
      <p className="font-semibold text-base mb-1 text-center text-primary ">
        {" "}
        Explain your problem
      </p>
      <h1 className="text-[40px] font-semibold text-[#231F40] mb-2 md:mb-4 text-center ">
        Get In Touch
      </h1>
      <h1 className="text-[20px] font-normal text-[#231F40] mb-5 md:mb-10 text-center ">
        We’d love to hear from you. Please fill out this form.
      </h1>

      <GetInTouchComponent />
    </div>
  );
};

export default GetInTouch;
