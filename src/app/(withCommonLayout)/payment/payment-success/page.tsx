"use client";
import Image from "next/image";
import successImage from "@/assets/payments/paymentSuccess.png";
import { Button } from "@/components/ui/my-ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <div className="container py-10 min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <Image
          width={300}
          height={300}
          src={successImage.src}
          alt="success image"
          className="w-auto h-auto lg:w-[500px]"
        />
        <h1 className="text-2xl sm:text-4xl text-heading-text my-8">
          Your Payment Successful
        </h1>
        <Link href={"/"}>
          <Button className="max-w-64 w-full">Go to Course</Button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
