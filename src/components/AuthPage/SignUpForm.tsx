/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/my-ui/button";
import Image from "next/image";
import register from "@/assets/authImages/register-image.png";
import AuthInput from "./AuthForm/AuthInput";
import { AuthPasswordField } from "./AuthForm/AuthPasswordField";
import google from "@/assets/authImages/google.png";
import facebook from "@/assets/authImages/Facebook.png";
import apple from "@/assets/authImages/apple.png";
import { RoundedButton } from "./AuthForm/AuthSocialRoundedBtn";
import MyFormWrapper from "../ui/MyForm/MyFormWrapper/MyFormWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/schema/signUpSchema";
import MyFormCheckBox from "../ui/MyForm/MyFormCheckBox/MyFormCheckBox";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { saveRegistrationData } from "@/redux/features/authSlice/authSlice";

export function SignUpForm() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onSubmit = (data: any) => {
    const registrationData = {
      password: data.password,
      student: {
        name: data.name,
        email: data.email,
        referredId: data.referredId,
      },
    };
    dispatch(saveRegistrationData(registrationData));
    router.push("/personalized/step-one");
  };

  return (
    <div className="w-full max-w-md space-y-8">
      <div className="space-y-2 text-center flex flex-col justify-center items-center">
        <Image src={register} alt="register Image" />
        <h1 className="text-3xl font-bold">Register</h1>
      </div>
      <MyFormWrapper
        resolver={zodResolver(signUpSchema)}
        onSubmit={onSubmit}
        className="space-y-4"
      >
        <AuthInput
          name="name"
          label="Name"
          type="text"
          placeholder="John Doe"
        />
        <AuthInput
          name="email"
          label="Email"
          type="email"
          placeholder="example@email.com"
        />
        <AuthPasswordField name="password" label="Password" />
        <AuthInput
          name="referredId"
          label="Refer Id (optional)"
          type="text"
          placeholder="sha38dk93"
        />
        <MyFormCheckBox
          name="terms"
          label={
            <>
              Agree with{" "}
              <Link href="/terms" className="underline">
                Terms & condition
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline">
                Privacy Policy
              </Link>
            </>
          }
        />
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
      </MyFormWrapper>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-muted-foreground rounded-lg">
            Or sign up with
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center ">
        <RoundedButton
          imageSrc={google}
          altText="Google Logo"
          className="mx-3"
        />
        <RoundedButton
          imageSrc={facebook}
          altText="facebook Logo"
          className="mx-3"
        />
        <RoundedButton imageSrc={apple} altText="Apple Logo" className="mx-3" />
      </div>
      <p className="text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-primary underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
