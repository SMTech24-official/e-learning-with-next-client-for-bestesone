/* eslint-disable @typescript-eslint/no-explicit-any */
import cn from "@/utils/cn";
import { Form, Input } from "antd";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";

interface AuthInputProps {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  containerClassName?: string;
  inputClassName?: string;
  value?: any;
  currentValue?: (value: any) => void;
}

const AuthInput = ({
  name,
  label,
  type = "text",
  placeholder,
  containerClassName,
  inputClassName,
  value,
  currentValue,
}: AuthInputProps) => {
  const { control, setValue } = useFormContext();

  // Watch value changes for this field
  const inputValue = useWatch({
    control,
    name,
  });

  // Set the default value if provided
  useEffect(() => {
    if (value !== undefined) {
      setValue(name, value, { shouldValidate: false });
    }
  }, [value, name, setValue]);

  // Provide the current value through the `currentValue` callback
  useEffect(() => {
    if (currentValue) {
      currentValue(inputValue);
    }
  }, [inputValue, currentValue]);

  return (
    <div className={cn("space-y-2 flex flex-col", containerClassName)}>
      {label && <label htmlFor={name}>{label}</label>}
      <Controller
        name={name}
        control={control}
        rules={{
          required: "This field is required", // Example validation rule
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <Form.Item style={{ marginBottom: 0 }}>
              <Input
                {...field}
                id={name}
                type={type}
                placeholder={placeholder}
                className={cn("border border-gray-neutral shadow p-2 rounded", inputClassName)}
              />
            </Form.Item>
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </>
        )}
      />
    </div>
  );
};

export default AuthInput;
