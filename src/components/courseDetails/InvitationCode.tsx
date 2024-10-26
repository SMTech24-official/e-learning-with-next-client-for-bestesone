import Image from "next/image";
import React from "react";
import masterCard from "@/assets/courseDetails/MasterCard.svg";
import VisaCard from "@/assets/courseDetails/Visa.svg";
import GooglePay from "@/assets/courseDetails/GooglePay.svg";
import Paypal from "@/assets/courseDetails/Paypal.svg";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Button } from "../ui/button";

const InvitationCode = () => {
  return (
    <div
      className="p-8 rounded-[20px] "
      style={{
        boxShadow:
          "0px 4px 16px 0px rgba(16, 24, 40, 0.08), 0px 4px 6px -5px rgba(16, 24, 40, 0.03)",
      }}
    >
      <h5 className="text-[#384250] text-base font-semibold mb-4">
        Secure payment
      </h5>
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <Image
          src={masterCard}
          height={27}
          width={54}
          alt="image"
          className="cursor-pointer"
        />
        <Image
          src={GooglePay}
          height={27}
          width={54}
          alt="image"
          className="cursor-pointer"
        />
        <Image
          src={Paypal}
          height={27}
          width={54}
          alt="image"
          className="cursor-pointer"
        />
        <Image
          src={VisaCard}
          height={27}
          width={54}
          alt="image"
          className="cursor-pointer"
        />
      </div>
      <h5 className="text-[#384250] text-base font-semibold mb-4">
        Share and invite your friend get reword
      </h5>
      <div className="flex items-center gap-6 text-[#9E77ED] mb-8">
        <FaFacebookF size={23} />
        <FaTwitter size={23} />
        <RiInstagramFill size={23} />
        <FaLinkedin size={23} />
      </div>
      <Button variant='outline' className="w-full">
      Click here for invitation code
      </Button>
    </div>
  );
};

export default InvitationCode;
