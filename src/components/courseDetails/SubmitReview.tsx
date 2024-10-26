/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { z } from 'zod';
import MyFormWrapper from '../ui/MyForm/MyFormWrapper/MyFormWrapper';
import { zodResolver } from '@hookform/resolvers/zod';
import MyFormInput from '../ui/MyForm/MyFormInput/MyFormInput';
import MyFormTextArea from '../ui/MyForm/MyFormTextArea/MyFormTextArea';
import { Button } from '../ui/button';

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

const SubmitReview = () => {
    const handleSubmit = (data: any) => {
        console.log(data);
      };
    return (
        <div>
            
      <MyFormWrapper
        className={"flex flex-col gap-5 w-full "}
        onSubmit={handleSubmit}
        resolver={zodResolver(validationSchema)}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-4">
          <div className="w-full">
            <MyFormInput
              name={"full_name"}
              type={"text"}
              placeHolder="Review tittle"
            />
          </div>
          <div className="w-full">
            <MyFormInput
              name={"full_name"}
              type={"text"}
              placeHolder="Reviewer name"
            />
          </div>
          <div className="w-full">
            <MyFormInput
              name={"full_name"}
              type={"text"}
              placeHolder="Reviewer email"
            />
          </div>
          <div className="w-full">
            <MyFormInput
              name={"full_name"}
              type={"text"}
              placeHolder="Phone number"
            />
          </div>
          <div className="sm:col-span-2">
            <MyFormTextArea
              name={"Message"}
              placeHolder="Review summary"
            />
          </div>
        </div>

        <Button
          className=" w-full py-3 rounded-lg bg-primary text-white text-base font-normal leading-6"
          type="submit"
        >
          Submit
        </Button>
      </MyFormWrapper>
        </div>
    );
};

export default SubmitReview;