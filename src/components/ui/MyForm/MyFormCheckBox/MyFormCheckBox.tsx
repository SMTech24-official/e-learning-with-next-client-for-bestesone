"use client";

import { useFormContext } from "react-hook-form";

interface TermsCheckboxProps {
  name: string;
  label: React.ReactNode;
}

const MyFormCheckBox: React.FC<TermsCheckboxProps> = ({ name, label }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // Safely extract the error message
  const errorMessage =
    errors[name]?.message && typeof errors[name]?.message === "string"
      ? errors[name]?.message
      : null;

  return (
    <div className="flex flex-col space-y-1">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id={name}
          {...register(name, {
            required: "You must agree to the terms and privacy policy.",
          })}
          className="border-gray-300 rounded"
        />
        <label htmlFor={name} className="text-sm">
          {label || "Agree with terms and privacy policy"}
        </label>
      </div>
      {errorMessage && <small className="text-red-500">{errorMessage}</small>}
    </div>
  );
};

export default MyFormCheckBox;
