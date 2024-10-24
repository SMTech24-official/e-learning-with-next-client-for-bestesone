/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import MyFormInput from "@/components/ui/MyForm/MyFormInput/MyFormInput";
import MyFormTextArea from "@/components/ui/MyForm/MyFormTextArea/MyFormTextArea";
import MyFormWrapper from "@/components/ui/MyForm/MyFormWrapper/MyFormWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import type { CheckboxProps } from "antd";
import { Button, Checkbox, Select } from "antd";
import { useEffect, useState } from "react";
import { z } from "zod";

const validationSchema = z.object({
  first_name: z
    .string({
      required_error: "Full name is required",
    })
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name cannot exceed 50 characters")
    .regex(
      /^[A-Za-z\s\-,'.]+$/,
      "Name can only contain letters, spaces, hyphens, commas, apostrophes, and dots"
    ),
  last_name: z
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
    .min(5, "Phone number must be at least 5 digits long")
    .max(20, "Phone number cannot exceed 20 digits")
    .regex(/^[\+\d\s\-\(\)]+$/, "Phone number can only contain numbers")
    .refine((value) => !!value, { message: "Phone number is required" }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"),

  message: z.string().optional(),
});

const GetInTouchComponent = () => {
  const [countries, setCountries] = useState<
    { value: string; label: string }[]
  >([]);
  const [selectedItem, setSelectedItem] = useState<string>("");

  const handleChange = (value: string) => {
    setSelectedItem(value);
  };

  const onChangeCheckbox: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=idd,name,cca2"
        );
        const data = await response.json();

        // Transform the data to fit the Select input format
        const countryOptions = data.map((country: any) => ({
          value: country.idd?.root
            ? `${country.idd.root}${country.idd.suffixes?.[0] || ""}`
            : "", // Example: "+1"
          label: `${country.cca2}`,
        }));

        setCountries(countryOptions);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center mt-8 px-2">
        <MyFormWrapper
          className={"flex flex-col gap-5 w-full md:max-w-lg "}
          onSubmit={handleSubmit}
          resolver={zodResolver(validationSchema)}
        >
          <div className="flex items-center gap-3 w-full">
            <div className="w-full">
              <MyFormInput
                name={"first_name"}
                label={"First name"}
                type={"text"}
                placeHolder="First name"
              />
            </div>
            <div className="w-full">
              <MyFormInput
                name={"last_name"}
                label={"Last name"}
                type={"text"}
                placeHolder="Last name"
              />
            </div>
          </div>
          <MyFormInput
            name={"email"}
            label={"Email"}
            type={"email"}
            placeHolder="Enter your email"
          />
          <div className="relative">
            <MyFormInput
              inputClassName="ps-20"
              value={selectedItem}
              name={"phone"}
              label={"Phone Number"}
              type={"text"}
              placeHolder="Enter your phone number"
            />
            <Select
              className="absolute top-8 left-0 z-10 w-[70px] h-10 rounded-lg !border-none"
              showSearch
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={countries}
              onChange={handleChange}
              placeholder="Select country"
            />
          </div>

          <MyFormTextArea
            name={"Message"}
            label={"Message"}
            placeHolder="Enter your message"
          />

          <Checkbox onChange={onChangeCheckbox}>
            <p className="font-medium text-base">
              You agree to our friendly{" "}
              <span className="font-normal underline">privacy policy</span>.
            </p>
          </Checkbox>
          <Button
            className=" w-full py-5 rounded-lg bg-primary text-white text-base font-normal leading-6"
            htmlType="submit"
          >
            Send message
          </Button>
        </MyFormWrapper>
      </div>
    </>
  );
};

export default GetInTouchComponent;
