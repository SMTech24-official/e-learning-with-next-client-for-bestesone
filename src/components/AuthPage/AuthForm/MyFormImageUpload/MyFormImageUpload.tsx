import React, { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { RiDeleteBinLine } from "react-icons/ri";

type TImageUploadProps = {
  name: string;
  defaultValue?: string | File | null;
  label?: string;
  parentClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  onChange?: (file: File | null) => void; // Handler for image change
  onSubmitChange?: (file: File | null) => void; // Handler for submitting the changed image
};

const MyFormImageUploader = ({
  name,
  defaultValue,
  label = "Profile Picture",
  parentClassName = "",
  labelClassName = "",
  inputClassName = "",
  onChange, // onChange handler for file changes
  onSubmitChange, // onSubmitChange handler for submitting file
}: TImageUploadProps) => {
  const { control, setValue, resetField } = useFormContext();
  const [showUploader, setShowUploader] = useState(false);
  const [fileName, setFileName] = useState<string | null>(
    defaultValue instanceof File ? defaultValue.name : null
  );

  const handleFileChange = (file: File | null) => {
    setValue(name, file); // Sync file with form state
    setFileName(file?.name || null); // Update file name state
    if (onChange) {
      onChange(file); // Call the parent onChange handler
    }
  };

  const handleRemoveImage = () => {
    resetField(name); // Clear form state
    setFileName(null);
    setShowUploader(false);
    if (onChange) {
      onChange(null); // Notify parent about image removal
    }
  };

  return (
    <div className={cn("form-group", parentClassName)}>
      {label && (
        <p className={cn("mb-2 font-medium", labelClassName)}>{label}</p>
      )}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue || null}
        render={({ field }) => (
          <>
            {defaultValue &&
            typeof defaultValue === "string" &&
            !showUploader ? (
              <div className="flex items-center gap-4">
                <Image
                  src={defaultValue}
                  alt="Current Profile Picture"
                  width={100}
                  height={100}
                  className="h-24 w-24 rounded-md object-cover"
                />
                <button
                  type="button"
                  onClick={() => setShowUploader(true)}
                  className="px-4 py-2 text-white bg-primary rounded-md hover:bg-primary/70"
                >
                  Change Picture
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    handleFileChange(file);
                    field.onChange(file); // Update React Hook Form state
                  }}
                  className={cn(
                    "w-full rounded-md border border-gray-300 p-2",
                    inputClassName
                  )}
                />
                {fileName && (
                  <div className="flex items-center justify-between bg-gray-100 p-2 rounded-md">
                    <span>{fileName}</span>
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className="text-red-500 hover:text-red-700"
                    >
                      <RiDeleteBinLine size={20} />
                    </button>
                  </div>
                )}
                {fileName && (
                  <button
                    type="button"
                    onClick={() => {
                      onSubmitChange?.(field.value);
                      handleRemoveImage();
                    }} // Pass the file as an argument
                    className="px-4 py-2 text-white bg-primary rounded-md hover:bg-primary/70"
                  >
                    Change
                  </button>
                )}
              </div>
            )}
          </>
        )}
      />
    </div>
  );
};

export default MyFormImageUploader;
