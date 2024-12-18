/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Radio } from "antd";
import Image from "next/image";
import { Controller, useFormContext } from "react-hook-form";

const MyFormPaymentRadioGroup = ({ options }: { options: any[] }) => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col">
      <Controller
        name="paymentMethod"
        control={control}
        rules={{ required: "Please select a payment method" }}
        render={({ field, fieldState: { error } }) => (
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 rounded-lg border p-3">
              <Radio.Group {...field} className="w-full space-y-4">
                {options.map((option) => (
                  <div className="flex" key={option.id}>
                    <Radio
                      
                      value={option.id}
                      className="w-full "
                    >
                      <span className="text-[#726986B2] text-base">
                        {option.label}
                      </span>
                    </Radio>
                    <Image
                      src={option.imageSrc}
                      alt={option.altText}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                ))}
              </Radio.Group>
            </div>
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </div>
        )}
      />
    </div>
  );
};

export default MyFormPaymentRadioGroup;
