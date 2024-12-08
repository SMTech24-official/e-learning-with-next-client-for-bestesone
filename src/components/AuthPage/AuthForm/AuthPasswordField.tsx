import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // Adjust import if using a different icon library
import cn from "@/utils/cn";

interface PasswordFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;
}

export function AuthPasswordField({
  containerClassName,
  inputClassName,
  buttonClassName,
  ...props
}: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className={cn("space-y-2", containerClassName)}>
      {<label htmlFor={"password"}>Password</label>}
      <div className="relative">
        <input
          id={"password"}
          type={showPassword ? "text" : "password"}
          placeholder="********"
          className={cn(
            "border border-gray-neutral p-2 rounded w-full",
            inputClassName
          )}
          {...props}
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
      </div>
    </div>
  );
}
