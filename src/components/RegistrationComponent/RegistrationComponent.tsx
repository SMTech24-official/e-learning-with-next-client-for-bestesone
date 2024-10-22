/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React from "react";
import { z } from "zod";
import MyFormWrapper from "../ui/MyForm/MyFormWrapper/MyFormWrapper";
import MyFormInput from "../ui/MyForm/MyFormInput/MyFormInput";

const validationSchema = z.object({
  full_name: z
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
    .string({
      required_error: "Phone number is required",
    })
    .min(11, "Phone number must be 11 digits long")
    .max(11, "Phone number must be 11 digits long")
    .regex(
      /^0\d{10}$/,
      "Please enter a valid 11-digit phone number starting with 0"
    )
    .refine((value) => !!value, { message: "Phone number is required" }), // Ensure the value is not empty
  email: z
    .string({
      required_error: "Email is required",
    })
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"),

  // New fields
  address: z
    .string({
      required_error: "Address is required",
    })
    .min(5, "Address must be at least 5 characters long")
    .max(100, "Address cannot exceed 100 characters"),

  age: z.number().int().optional(),

  interested: z.array(z.string()).optional(), // Optional array of strings for interests

  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, "Password must be at least 8 characters long")
    .max(30, "Password cannot exceed 30 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/\d/, "Password must contain at least one digit")
    .regex(
      /[!@#$%^&*]/,
      "Password must contain at least one special character"
    ),
});

const RegistrationComponent = () => {
  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <div className="h-full flex justify-center items-center">
        <div className="w-full flex flex-col items-center justify-center">
          <Image
            className="w-36 mb-6 text-center"
            src={"https://i.ibb.co.com/s5vxFJb/image-32.png"}
            height={500}
            width={500}
            alt="Logo"
          />
          <h3 className="text-center text-xl font-semibold leading-[30px] mb-6">
            Register
          </h3>

          <MyFormWrapper
            className={"flex flex-col gap-5 w-full md:max-w-3xl px-2"}
            onSubmit={handleSubmit}
            resolver={zodResolver(validationSchema)}
          >
            <MyFormInput name={"full_name"} label={"Full name"} type={"text"} />
            <MyFormInput name={"phone"} label={"Phone Number"} type={"number"} />
            <MyFormInput name={"email"} label={"Email"} type={"email"} />
            <MyFormInput name={"address"} label={"Address"}  />
            <MyFormInput name={"age"} label={"Age (optional)"} type={"number"} />
            <MyFormInput name={"Interested"} label={"Interested (optional)"} type={"Interested (optional)"} />
            <MyFormInput name={"password"} label={"Password"} />
            {/* <MyFormPasswordInput name={"password"} label={"password"} type={"password"} onValueChange={setPassword}/>
        <MyFormPasswordInput name={"c_password"} label={"c_password"} type={"password"} matchWith={"password"} onValueChange={setConfirmPassword}/>
        <MyFormSelect name={"select"} label={"select"} options={option}/>
        <MyFormSelectWithWatch name={"select - 2"} options={option} label={"select"} onValueChange={setCourseId} />
        <MyFormTimePicker name={"timepicker"} label={"Time Picker"}  /> */}
            <button
              className="border w-min py-2 px-3 rounded bg-blue-400 text-white mt-2"
              type="submit"
            >
              Submit
            </button>
          </MyFormWrapper>
        </div>
      </div>
    </>
  );
};

export default RegistrationComponent;
