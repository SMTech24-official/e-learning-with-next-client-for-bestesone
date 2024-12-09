import Image from "next/image";
import React from "react";
import successImage from "@/assets/payments/payment-success.png";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="container py-10">
      <div className="flex flex-col justify-center items-center">
        <Image src={successImage} alt="success image" />
        <h1 className="text-2xl sm:text-4xl text-heading-text my-8">Your Payment Successful</h1>
        <Button className="max-w-64 w-full">Go to Course</Button>
      </div>
    </div>
  );
};

export default page;
