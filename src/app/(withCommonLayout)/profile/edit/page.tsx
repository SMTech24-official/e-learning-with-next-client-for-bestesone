/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/my-ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MyFormWrapper from "@/components/ui/MyForm/MyFormWrapper/MyFormWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import MyFormInput from "@/components/ui/MyForm/MyFormInput/MyFormInput";
import Image from "next/image";
import { z } from "zod";
import image from "@/assets/institute/teacher-image.png";

// {
//   required_error: "Full name is required",
// }

const validationSchema = z.object({
  name: z
    .string({
      required_error: "Full name is required",
    })
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name cannot exceed 50 characters")
    .regex(
      /^[A-Za-z\s\-,'.]+$/,
      "Name can only contain letters, spaces, hyphens, commas, apostrophes, and dots"
    ),
  phone: z
    .string()
    .min(5, "Phone number must be at least 5 digits long")
    .max(20, "Phone number cannot exceed 20 digits")
    .regex(/^[\+\d\s\-\(\)]+$/, "Phone number can only contain numbers")
    .refine((value) => !!value, { message: "Phone number is required" }),
  email: z
    .string()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"),

  message: z.string().optional(),
});

export default function EditProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (data: any) => {
    console.log(data);
  };
  const handleNameChange = () => {
    console.log(name);
  };

  return (
    <div className="container min-h-screen ">
      <Card className="container w-full max-w-2xl mt-10 md:m-12  md:p-16 rounded-[32px]">
        <CardHeader>
          <CardTitle className="text-heading-text text-3xl">
            Profile Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <MyFormWrapper
            className={"flex flex-col gap-5 w-full md:max-w-lg "}
            onSubmit={handleSubmit}
            resolver={zodResolver(validationSchema)}
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="h-24 w-24">
                <Image src={image} alt="Profile picture" />
              </div>
              <Button variant="outline" className="px-5 py-2">
                Change Picture
              </Button>
            </div>
          </MyFormWrapper>
          <div className="space-y-2">
            <MyFormWrapper
              className={"flex flex-col gap-5 w-full md:max-w-lg "}
              onSubmit={handleNameChange}
              resolver={zodResolver(validationSchema)}
            >
              <div className="flex  w-full gap-2">
                <div className="w-full">
                  <MyFormInput
                    name={"name"}
                    type={"text"}
                    label="Name"
                    placeHolder="Name"
                    inputClassName="w-full"
                    currentValue={(val: string) => setName(val)}
                  />
                </div>
                <Button
                  onClick={handleNameChange}
                  variant="secondary"
                  className={`w-20 h-10 mt-8 ${
                    name?.length > 0 &&
                    "bg-primary hover:bg-primary/70 text-white"
                  }`}
                >
                  {name?.length > 0 ? "Save" : "Edit"}
                </Button>
              </div>
            </MyFormWrapper>
          </div>

          <div className="space-y-2">
            <MyFormWrapper
              className={"flex flex-col gap-5 w-full md:max-w-lg "}
              onSubmit={handleSubmit}
              resolver={zodResolver(validationSchema)}
            >
              <div className="flex gap-2">
                <div className="w-full">
                  <MyFormInput
                    name={"email"}
                    type={"email"}
                    label="Email"
                    placeHolder="Enter your email"
                    currentValue={(val: string) => setEmail(val)}
                  />
                </div>
                <Button
                  variant="secondary"
                  className={`w-20 h-10 mt-8 ${
                    email?.length > 0 &&
                    "bg-primary hover:bg-primary/70 text-white"
                  }`}
                >
                  {email?.length > 0 ? "Save" : "Edit"}
                </Button>
              </div>
            </MyFormWrapper>
          </div>

          <div className="space-y-2">
            <MyFormWrapper
              className={"flex flex-col gap-5 w-full md:max-w-lg "}
              onSubmit={handleSubmit}
              resolver={zodResolver(validationSchema)}
            >
              <div className="flex gap-2">
                <div className="w-full">
                  <MyFormInput
                    name={"phone"}
                    type={"number"}
                    label="Phone"
                    placeHolder="Enter your phone number"
                    currentValue={(val: string) => setPhone(val)}
                  />
                </div>
                <Button
                  variant="secondary"
                  className={`w-20 h-10 mt-8 ${
                    phone?.length > 0 &&
                    "bg-primary hover:bg-primary/70 text-white"
                  }`}
                >
                  {phone?.length > 0 ? "Save" : "Edit"}
                </Button>
              </div>
            </MyFormWrapper>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
