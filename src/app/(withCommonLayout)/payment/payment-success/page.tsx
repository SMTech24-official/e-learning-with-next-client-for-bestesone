"use client";
import Image from "next/image";
import successImage from "@/assets/payments/paymentSuccess.png";
import { Button } from "@/components/ui/my-ui/button";

const Page = () => {
  return (
    <div className="container py-10">
      <div className="flex flex-col justify-center items-center">
        <Image src={successImage.src} alt="success image" />
        <h1 className="text-2xl sm:text-4xl text-heading-text my-8">
          Your Payment Successful
        </h1>
        <Button className="max-w-64 w-full">Go to Course</Button>
      </div>
    </div>
  );
};

export default Page;
