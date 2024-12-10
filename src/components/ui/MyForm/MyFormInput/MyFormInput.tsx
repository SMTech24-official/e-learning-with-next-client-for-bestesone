/* eslint-disable @typescript-eslint/no-explicit-any */
import cn from "@/utils/cn";
import { Form, Input } from "antd";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";

const MyFormInput = ({
  type = "text",
  name,
  label,
  inputClassName,
  placeHolder,
  value,
  currentValue
}: {
  type?: string;
  name: string;
  label?: string;
  inputClassName?: string;
  placeHolder?: string;
  value?: any;
  currentValue?: any
}) => {
  const { setValue, control } = useFormContext();

  const inputValue = useWatch({
        control: control,
        name,
      });
      
  useEffect(() => {
    setValue(name, value, { shouldValidate: false });
  }, [value, name, setValue]);

    useEffect(() => {
      if(currentValue){
        currentValue(inputValue);
      }
  }, [inputValue, currentValue]);

  return (
    <div>
      <Controller
        name={name}
        control={control}
        rules={{
          required: true,
        }}
        render={({ field, fieldState: { error } }) => (
          <div className="flex flex-col justify-center w-full">
            {label && (
              <p className="ps-1 mb-2 text-[#101828] text-base font-normal leading-6">
                {label}
              </p>
            )}
            <Form.Item style={{ marginBottom: "0px" }}>
              <Input
                {...field}
                type={type}
                id={name}
                size="large"
                className={cn("w-full ", inputClassName)}
                placeholder={placeHolder}
              />
            </Form.Item>
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </div>
        )}
      />
    </div>
  );
};

export default MyFormInput;
