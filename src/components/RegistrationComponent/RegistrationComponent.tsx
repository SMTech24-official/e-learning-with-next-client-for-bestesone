/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Divider } from "antd";
import Image from "next/image";
import { z } from "zod";
import MyFormInput from "../ui/MyForm/MyFormInput/MyFormInput";
import MyFormSelect from "../ui/MyForm/MyFormSelect/MyFormSelect";
import MyFormWrapper from "../ui/MyForm/MyFormWrapper/MyFormWrapper";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";

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

  age: z.string().optional(),

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
      <div className="w-full flex flex-col items-center justify-center mt-8 px-2">
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
          className={"flex flex-col gap-5 w-full md:max-w-xl "}
          onSubmit={handleSubmit}
          resolver={zodResolver(validationSchema)}
        >
          <MyFormInput
            name={"fullName"}
            label={"Full name"}
            type={"text"}
            placeHolder="Enter your name"
          />
          <MyFormInput
            name={"phone"}
            label={"Phone Number"}
            type={"number"}
            placeHolder="Enter your phone number"
          />
          <MyFormInput
            name={"email"}
            label={"Email"}
            type={"email"}
            placeHolder="Enter your email"
          />
          <MyFormInput
            name={"address"}
            label={"Address"}
            placeHolder="Enter your address"
          />
          <MyFormInput
            name={"age"}
            label={"Age (optional)"}
            type={"number"}
            placeHolder="Enter your age"
          />
          <MyFormSelect
            name={"Interested"}
            label={"Interested (optional)"}
            options={[
              { value: "1", label: "Jack" },
              { value: "2", label: "Lucy" },
              { value: "3", label: "Tom" },
            ]}
            placeHolder="Select your interested subject"
          />
          <MyFormInput
            type="password"
            name={"password"}
            label={"Password"}
            placeHolder="Enter your password"
          />

          {/* <MyFormPasswordInput name={"password"} label={"password"} type={"password"} onValueChange={setPassword}/>
        <MyFormPasswordInput name={"c_password"} label={"c_password"} type={"password"} matchWith={"password"} onValueChange={setConfirmPassword}/>
        <MyFormSelect name={"select"} label={"select"} options={option}/>
        <MyFormSelectWithWatch name={"select - 2"} options={option} label={"select"} onValueChange={setCourseId} />
        <MyFormTimePicker name={"timepicker"} label={"Time Picker"}  /> */}
          <Button
            className=" w-full py-5 rounded-lg bg-primary text-white text-base font-normal leading-6"
            htmlType="submit"
          >
            Get Started
          </Button>
        </MyFormWrapper>

        <div className=" mb-10">
          <p className="text-base leading-6 text-[#ABABAB] font-normal my-8">
            If you already have any account please{" "}
            <span className="text-[#FF8C00] font-medium">log in</span>
          </p>

          <Divider style={{ borderColor: "#7F56D9" }} className="">
            <span className="text-[#667085] text-base leading-6 font-normal">
              Or sign up with
            </span>
          </Divider>
          <div className="flex items-center justify-center gap-4 my-8">
            <Button className="text-base font-medium leading-6 sm:px-4 py-[18px] rounded-lg ">
              <FcGoogle size={22} />
              <p className="hidden sm:block "> Google</p>
            </Button>
            <Button className="text-base font-medium leading-6 sm:px-4  py-[18px] rounded-lg ">
              <FaApple size={22} />
              <p className="hidden sm:block "> Apple</p>
            </Button>
            <Button className="text-base font-medium leading-6 sm:px-4 py-[18px] rounded-lg ">
              <FaFacebook size={22} className="text-blue-500" />
              <p className="hidden sm:block"> Facebook</p>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationComponent;
