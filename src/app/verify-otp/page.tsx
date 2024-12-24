/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { AuthPage } from "@/components/AuthPage/AuthPage";
import loginImage from "@/assets/authImages/register-image.png";
import background from "@/assets/authImages/authBgImage.png";
import containerImage from "@/assets/authImages/authBgContainerImage.png";
import authImage from "@/assets/authImages/authImage.png";
import authImage2 from "@/assets/authImages/authImage2.png";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RootState } from "@/redux/store";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useVerifyOtpMutation } from "@/redux/features/authSlice/authApi";
import { setUser, setVerifyEmail } from "@/redux/features/authSlice/authSlice";

// Define the validation schema for the OTP field using zod
const otpSchema = z.object({
  otp: z
    .string()
    .length(4, "OTP must be exactly 4 digits")
    .regex(/^[0-9]+$/, "OTP must contain only numbers"),
});

// Infer the type of the form data from the OTP schema
type OTPFormData = z.infer<typeof otpSchema>;

/* eslint-disable @typescript-eslint/no-explicit-any */
const MyForm = () => {
  const dispatch = useAppDispatch();
  const [verfyOtp] = useVerifyOtpMutation();
  const router = useRouter();
  const getEmail =
    useAppSelector((state: RootState) => state.auth.verifyEmail) || "";

  // Use react-hook-form with the zodResolver
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<OTPFormData>({
    resolver: zodResolver(otpSchema),
  });

  const onSubmit = async (data: OTPFormData) => {
    const updatedData = {
      email: getEmail || "",
      otp: Number(data.otp),
    };
    console.log(updatedData);
    try {
      const response = await verfyOtp({
        email: getEmail,
        otp: data?.otp,
      }).unwrap();

      if (response.success) {
        dispatch(setVerifyEmail({ verifyEmail: "" }));
        dispatch(setUser({ token: response.data.token, user: null }));
        router.push("/change-password");
      } else {
        toast.error("Invalid OTP");
      }

      console.log(response);

      reset();
      toast.success("Register successful");
    } catch (error) {
      toast.error("Your Given is not Correct");
    }
  };

  return (
    <AuthPage
      backgroundImageSrc={background}
      containerImageSrc={containerImage}
      floatingImageSrc={authImage2}
      authImage={authImage}
      headingText={
        "Forgot your password? don't worry we will solve this problem Together"
      }
    >
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-2 text-center flex flex-col justify-center items-center">
          <Image src={loginImage} alt="register Image" />
          <h1 className="text-3xl font-bold">E-learning</h1>
          <p className="text-base text-gray-500">Enter Your OTP</p>
        </div>
        <div className="w-full max-w-[454px] space-y-8 rounded">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex justify-center">
              <Controller
                name="otp"
                control={control}
                render={({ field }) => (
                  <InputOTP {...field} maxLength={6}>
                    <InputOTPGroup className="flex gap-6">
                      {[...Array(4)].map((_, index) => (
                        <InputOTPSlot
                          key={index}
                          index={index}
                          className="md:h-[56px] md:w-[55.67px] h-[36px] w-[35.67px] rounded-[8px] border border-[#98A2B3]"
                        />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                )}
              />
            </div>
            {errors.otp && (
              <p className="text-center text-sm text-red-500">
                {errors.otp.message}
              </p>
            )}

            <Button
              type="submit"
              className="w-full flex justify-center rounded-lg items-center font-outfit text-white text-[18px] font-medium py-[10px] bg-primary"
            >
              Verify OTP
            </Button>
          </form>
        </div>
      </div>
    </AuthPage>
  );
};

export default MyForm;
