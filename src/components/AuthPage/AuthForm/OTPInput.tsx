"use client";

import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";

interface OTPInputProps {
  name: string;
  length?: number;
}

const OTPInput = ({ name, length = 4 }: OTPInputProps) => {
  const { setValue, getValues } = useFormContext();

  // Watch the current value of the OTP field
  const otpValue = getValues(name) || " ".repeat(length);

  useEffect(() => {
    // Initialize the field with empty values if not already set
    if (!otpValue.trim()) {
      setValue(name, " ".repeat(length), { shouldValidate: false });
    }
  }, [name, length, otpValue, setValue]);

  const handleInputChange = (value: string, index: number) => {
    const otpArray = otpValue.split("");
    otpArray[index] = value.slice(0, 1); // Ensure only single character input
    setValue(name, otpArray.join(""), { shouldValidate: true });
  };

  return (
    <InputOTP maxLength={length}>
      {Array.from({ length }).map((_, index) => (
        <InputOTPGroup key={index}>
          <InputOTPSlot
            index={index}
            onInput={(event) => {
              const target = event.target as HTMLInputElement;
              handleInputChange(target.value, index);
            }}
          />
          {index < length - 1 && <InputOTPSeparator />}
        </InputOTPGroup>
      ))}
    </InputOTP>
  );
};

export default OTPInput;
