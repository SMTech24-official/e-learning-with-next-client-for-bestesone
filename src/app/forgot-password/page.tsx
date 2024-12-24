"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { AuthPage } from "@/components/AuthPage/AuthPage";
import MyFormWrapper from "@/components/ui/MyForm/MyFormWrapper/MyFormWrapper";
import AuthInput from "@/components/AuthPage/AuthForm/AuthInput";
import { Button } from "@/components/ui/button";
import loginImage from "@/assets/authImages/register-image.png";
import background from "@/assets/authImages/authBgImage.png";
import containerImage from "@/assets/authImages/authBgContainerImage.png";
import authImage from "@/assets/authImages/authImage.png";
import authImage2 from "@/assets/authImages/authImage2.png";
import { toast } from "sonner";
import { setVerifyEmail } from "@/redux/features/authSlice/authSlice";
import { useSendOtpMutation } from "@/redux/features/authSlice/authApi";

export default function Page() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [sendOtp, { isLoading, error }] = useSendOtpMutation();

  const onSubmit = async (email: any) => {
    console.log(email);
    try {
      const response = await sendOtp(email);
      console.log(response.data);
      if (response?.data?.success) {
        dispatch(setVerifyEmail({ verifyEmail: email?.email }));
        router.push("/verify-otp");
      } else {
        toast.error(response?.data?.error?.message || "an error occurred");
      }
    } catch (err: any) {
      console.error("Error sending OTP:", err);
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
          <p className="text-base text-gray-500">Forget your password</p>
        </div>
        <MyFormWrapper className="flex flex-col gap-4" onSubmit={onSubmit}>
          <AuthInput
            name="email"
            label="Email"
            type="email"
            placeholder="example@email.com"
          />
          <Button type="submit" className="w-full mb-2">
            {isLoading ? "sending otp..." : "Forgot Password"}
          </Button>
        </MyFormWrapper>
      </div>
    </AuthPage>
  );
}
