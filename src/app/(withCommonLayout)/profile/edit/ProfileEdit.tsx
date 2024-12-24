/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/my-ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MyFormWrapper from "@/components/ui/MyForm/MyFormWrapper/MyFormWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import MyFormInput from "@/components/ui/MyForm/MyFormInput/MyFormInput";
import { z } from "zod";
import teacher from "@/assets/institute/teacherImage.png";
import {
  useGetUserQuery,
  useUpdateUserMutation,
} from "@/redux/features/authSlice/authApi";
import { useAppSelector } from "@/redux/hooks";
import { toast } from "sonner";
import { RootState } from "@/redux/store";
import MyFormImageUploader from "@/components/AuthPage/AuthForm/MyFormImageUpload/MyFormImageUpload";

const validationSchema = z.object({
  name: z
    .string({
      required_error: "Full name is required",
    })
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name cannot exceed 50 characters")
    .regex(
      /^[A-Za-z\s\-,'.]+$/,
      "Name can only contain letters, spaces, hyphens, commas, apostrophes, and dots"
    )
    .optional(),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits long")
    .max(20, "Phone number cannot exceed 20 digits")
    .regex(/^[\+\d\s\-\(\)]+$/, "Phone number can only contain numbers")
    .refine((value) => !!value, { message: "Phone number is required" })
    .optional(),
  image: z
    .instanceof(File)
    .refine((file) => file.type.startsWith("image/"), {
      message: "Only image files are allowed",
    })
    .optional(),
  email: z
    .string()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address")
    .optional(),

  message: z.string().optional(),
});

export default function ProfileEdit() {
  const [updateUser] = useUpdateUserMutation();
  const token = useAppSelector((state: RootState) => state.auth.token);
  const { data: user } = useGetUserQuery(token, {
    selectFromResult: ({ data }) => ({
      data: data?.data,
    }),
  });

  const [img, setImg] = useState<File | string | null>(
    user?.student[0]?.profileImage || null
  );
  const [name, setName] = useState(user?.student[0]?.name);
  const [email, setEmail] = useState(user?.student[0]?.email);
  const [phone, setPhone] = useState(user?.student[0]?.phoneNumber || 0);

  const handleImageChange = (file: File | null) => {
    setImg(file); // Update the image state
    console.log("Selected Image:", file);
  };

  const handleImageUpload = async (file: File | null) => {
    if (!file) {
      toast.error("No file selected for upload");
      return;
    }

    const formData = new FormData();
    if (img) {
      console.log(img);
      formData.append("image", img);
    }

    const res = await updateUser(formData).unwrap();
    console.log(res.data);
    if (res?.data) {
      toast.success(res?.data?.data?.message || "Image uploaded successfully");
    } else {
      toast.error(res?.data?.data?.error?.message || "Image upload failed");
    }
  };

  const handleNameChange = async () => {
    const formData = new FormData();
    const body = { name: name };
    formData.append("body", JSON.stringify(body));

    const res = await updateUser(formData);
    console.log(res.data);
    if (res?.data) {
      toast.success(res?.data?.data?.message);
    } else {
      toast.error(res?.data?.data?.error?.message);
    }
  };

  const handleEmailChange = async () => {
    const formData = new FormData();
    const body = { email: email };
    formData.append("body", JSON.stringify(body));

    const res = await updateUser(formData);
    console.log(res.data);
    if (res?.data) {
      toast.success(res?.data?.data?.message);
    } else {
      toast.error(res?.data?.data?.error?.message);
    }
  };

  const handlePhoneChange = async () => {
    const formData = new FormData();
    const body = { phoneNumber: phone };
    formData.append("body", JSON.stringify(body));
    console.log(body);

    const res = await updateUser(formData);
    console.log(res.data);
    if (res?.data) {
      toast.success(res?.data?.data?.message);
    } else {
      toast.error(res?.data?.data?.error?.message);
    }
  };

  return (
    <div className="container min-h-screen ">
      <Card className="container w-full max-w-2xl mt-10 md:m-12  md:p-16 rounded-[32px]">
        <CardHeader>
          <CardTitle className="text-heading-text text-3xl">
            Profile Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <MyFormWrapper
            onSubmit={handleImageUpload}
            resolver={zodResolver(validationSchema)}
            defaultValues={{
              image: img || teacher,
            }}
          >
            <MyFormImageUploader
              name="image"
              defaultValue={img || teacher.src}
              label="Profile Picture"
              onChange={handleImageChange}
              onSubmitChange={handleImageUpload}
            />
          </MyFormWrapper>
          <div className="space-y-2">
            <MyFormWrapper
              className={"flex flex-col gap-5 w-full md:max-w-lg "}
              onSubmit={handleNameChange}
              resolver={zodResolver(validationSchema)}
              defaultValues={{ name: name }}
            >
              <div className="flex  w-full gap-2">
                <div className="w-full">
                  <MyFormInput
                    name={"name"}
                    type={"text"}
                    label="Name"
                    placeHolder="Name"
                    inputClassName="w-full"
                    currentValue={(val: string) => setName(val)}
                  />
                </div>
                <Button
                  onClick={handleNameChange}
                  variant="secondary"
                  className={`w-20 h-10 mt-8 ${
                    name?.length > 0 &&
                    "bg-primary hover:bg-primary/70 text-white"
                  }`}
                >
                  {name?.length > 0 ? "Save" : "Edit"}
                </Button>
              </div>
            </MyFormWrapper>
          </div>

          <div className="space-y-2">
            <MyFormWrapper
              className={"flex flex-col gap-5 w-full md:max-w-lg "}
              onSubmit={handleEmailChange}
              resolver={zodResolver(validationSchema)}
              defaultValues={{ email: email }}
            >
              <div className="flex gap-2">
                <div className="w-full">
                  <MyFormInput
                    name={"email"}
                    type={"email"}
                    label="Email"
                    placeHolder="Enter your email"
                    currentValue={(val: string) => setEmail(val)}
                  />
                </div>
                <Button
                  onClick={handleEmailChange}
                  variant="secondary"
                  className={`w-20 h-10 mt-8 ${
                    email?.length > 0 &&
                    "bg-primary hover:bg-primary/70 text-white"
                  }`}
                >
                  {email?.length > 0 ? "Save" : "Edit"}
                </Button>
              </div>
            </MyFormWrapper>
          </div>

          <div className="space-y-2">
            <MyFormWrapper
              className={"flex flex-col gap-5 w-full md:max-w-lg "}
              onSubmit={handlePhoneChange}
              resolver={zodResolver(validationSchema)}
              defaultValues={{ phoneNumber: phone }}
            >
              <div className="flex gap-2">
                <div className="w-full">
                  <MyFormInput
                    name={"phoneNumber"}
                    type={"number"}
                    label="Phone"
                    placeHolder="Enter your phone number"
                    currentValue={(val: string) => setPhone(val)}
                  />
                </div>
                <Button
                  onClick={handlePhoneChange}
                  variant="secondary"
                  className={`w-20 h-10 mt-8 ${
                    phone?.length > 0 &&
                    "bg-primary hover:bg-primary/70 text-white"
                  }`}
                >
                  {phone?.length > 0 ? "Save" : "Edit"}
                </Button>
              </div>
            </MyFormWrapper>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
