import cn from "@/utils/cn";
import { Form, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const MyFormInput = ({
  type = "text",
  name,
  label,
  inputClassName,
}: {
  type?: string;
  name: string;
  label: string;
  inputClassName?: string;
}) => {
  const { control } = useFormContext();
  return (
    <div>
      <Controller
        name={name}
        control={control}
        rules={{
          required: true,
        }}
        render={({ field, fieldState: { error } }) => (
          <div className="flex flex-col justify-center gap-2">
            <p className="ps-1 text-[#101828] text-base font-normal leading-6">
              {label}
            </p>
            <Form.Item style={{ marginBottom: "0px" }}>
              <Input
                {...field}
                type={type}
                id={name}
                size="large"
                className={cn(
                  "focus:!border-[#7F56D9] hover:!border-[#7F56D9]",
                  inputClassName
                )}
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
