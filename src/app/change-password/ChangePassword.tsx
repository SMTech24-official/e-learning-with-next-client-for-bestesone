"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { AuthPage } from "@/components/AuthPage/AuthPage";
import MyFormWrapper from "@/components/ui/MyForm/MyFormWrapper/MyFormWrapper";
import { Button } from "@/components/ui/button";
import loginImage from "@/assets/authImages/register-image.png";
import background from "@/assets/authImages/authBgImage.png";
import containerImage from "@/assets/authImages/authBgContainerImage.png";
import authImage from "@/assets/authImages/authImage.png";
import authImage2 from "@/assets/authImages/authImage2.png";
import { toast } from "sonner";
import { AuthPasswordField } from "@/components/AuthPage/AuthForm/AuthPasswordField";
import { useResetPasswordMutation } from "@/redux/features/authSlice/authApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { newPasswordSchema } from "@/schema/signInSchema";

export function ChangePassword() {
  const router = useRouter();
  const [resetPass, { isLoading }] = useResetPasswordMutation();
  const onSubmit = async (password: any) => {
    console.log(password);
    try {
      const response = await resetPass(password);
      console.log(response);
      if (response?.data?.success) {
        toast.success("Password reset successful");
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to reset password");
    }
  };

  return (
    <AuthPage
      backgroundImageSrc={background}
      containerImageSrc={containerImage}
      floatingImageSrc={authImage2}
      authImage={authImage}
      headingText={
        "welcome back, you successfully come to this learning platform"
      }
    >
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-2 text-center flex flex-col justify-center items-center">
          <Image src={loginImage} alt="register Image" />
          <h1 className="text-3xl font-bold">E-learning</h1>
          <p className="text-base text-gray-500">write new password</p>
        </div>
        <MyFormWrapper
          resolver={zodResolver(newPasswordSchema)}
          className="flex flex-col gap-4"
          onSubmit={onSubmit}
        >
          <AuthPasswordField
            name="password"
            label="New Password"
            placeholder="*******"
          />
          <Button type="submit" className="w-full mb-2">
            {isLoading ? "Changing Password..." : "Add New Password"}
          </Button>
        </MyFormWrapper>
      </div>
    </AuthPage>
  );
}

export default ChangePassword;