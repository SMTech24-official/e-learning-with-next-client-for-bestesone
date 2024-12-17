"use client";
import { Form, Input } from "antd";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";

interface MyFormPasswordInputProps {
  type: string; // e.g., "password" or any input type
  name: string; // Name of the input field (used for react-hook-form control)
  label: string; // Label text displayed above the input field
  onValueChange: (value: string) => void; // Callback triggered when the input value changes
}

const MyFormPasswordInput = ({
  type,
  name,
  label,
  onValueChange,
}: MyFormPasswordInputProps) => {
  const { control } = useFormContext();

  const inputValue = useWatch({ control, name }); // Watch the input value

  useEffect(() => {
    onValueChange(inputValue); // Trigger onValueChange when the input value changes
  }, [inputValue, onValueChange]);

  return (
    <div>
      <Controller
        name={name}
        control={control}
        rules={{
          required: `${label} is required`, // Add a dynamic error message
        }}
        render={({ field, fieldState: { error } }) => (
          <div className="flex flex-col justify-center gap-1">
            <p className="ps-1">{label}</p>
            <Form.Item style={{ marginBottom: "0px" }}>
              <Input.Password {...field} type={type} id={name} size="large" />
            </Form.Item>
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </div>
        )}
      />
    </div>
  );
};

export default MyFormPasswordInput;
