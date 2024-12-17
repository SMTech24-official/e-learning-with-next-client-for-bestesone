import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // Adjust import if using a different icon library
import { Controller, useFormContext } from "react-hook-form";
import cn from "@/utils/cn";

interface PasswordFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  containerClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;
}

export function AuthPasswordField({
  name,
  label = "Password",
  placeholder = "********",
  containerClassName,
  inputClassName,
  buttonClassName,
}: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const { control } = useFormContext();

  return (
    <div className={cn("space-y-2", containerClassName)}>
      {label && <label htmlFor={name}>{label}</label>}
      <Controller
        name={name}
        control={control}
        defaultValue="" // Set default value to avoid uncontrolled warnings
        render={({ field, fieldState: { error } }) => (
          <div className="relative">
            <input
              {...field}
              id={name}
              type={showPassword ? "text" : "password"}
              placeholder={placeholder}
              className={cn(
                "border border-gray-neutral p-2 rounded w-full",
                inputClassName
              )}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={cn(
                "absolute right-3 top-1/2 transform -translate-y-1/2",
                buttonClassName
              )}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-gray-500" />
              ) : (
                <Eye className="h-4 w-4 text-gray-500" />
              )}
            </button>
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </div>
        )}
      />
    </div>
  );
}
