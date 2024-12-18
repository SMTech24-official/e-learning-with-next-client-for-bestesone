/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Controller, useFormContext } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"; // Ensure these components are available in your project
import { Label } from "@/components/ui/label"; // Ensure this component is available
import Image, { StaticImageData } from "next/image";

type RadioOption = {
  id: string;
  label: string;
  imageSrc?: string | StaticImageData;
  altText?: string;
};

interface MyRadioGroupProps {
  name: string;
  label: string;
  options: RadioOption[];
  defaultValue?: string;
  rules?: any;
}

const MyFormPaymentRadioGroup = ({
  name,
  label,
  options,
  defaultValue,
  rules,
}: MyRadioGroupProps) => {
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <div className="flex flex-col justify-center w-full">
            {label && (
              <p className="ps-1 mb-2 text-[#101828] text-base font-normal leading-6">
                {label}
              </p>
            )}
            <RadioGroup
              {...field} // Spread the `field` props here to bind with `react-hook-form`
              className="space-y-3"
            >
              {options.map((option) => (
                <div
                  key={option.id}
                  className="flex items-center space-x-2 rounded-lg border p-3"
                >
                  <RadioGroupItem
                    value={option.id} // Make sure the `value` matches the option ID
                    id={option.id} // Use the `id` as the `id` attribute
                    checked={field.value === option.id} // Bind the selected state
                    onChange={(e) => field.onChange((e.target as HTMLInputElement).value)}
                  />
                  <Label htmlFor={option.id} className="flex-1">
                    {option.label}
                  </Label>
                  {option.imageSrc && (
                    <Image
                      src={option.imageSrc}
                      alt={option.altText || "payment card image"}
                      className="h-8 w-auto"
                    />
                  )}
                </div>
              ))}
            </RadioGroup>
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </div>
        )}
      />
    </div>
  );
};

export default MyFormPaymentRadioGroup;
