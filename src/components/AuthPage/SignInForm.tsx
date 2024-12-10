"use client";
import Link from "next/link";
import { Button } from "@/components/ui/my-ui/button";
import Image from "next/image";
import login from "@/assets/authImages/register-image.png";
import { AuthInput } from "./AuthForm/AuthInput";
import { AuthPasswordField } from "./AuthForm/AuthPasswordField";
import google from "@/assets/authImages/google.png";
import facebook from "@/assets/authImages/Facebook.png";
import apple from "@/assets/authImages/apple.png";
import { RoundedButton } from "./AuthForm/AuthSocialRoundedBtn";

export function SignInForm() {
  return (
    <div className="w-full max-w-md space-y-8">
      <div className="space-y-2 text-center flex flex-col justify-center items-center">
        <Image src={login} alt="register Image" />
        <h1 className="text-3xl font-bold">Sign In</h1>
        <p className="text-base text-gray-500">Welcome to Learning Together</p>
      </div>
      <form className="space-y-4">
        <AuthInput
          label="Email"
          type="email"
          id="email"
          placeholder="example@email.com"
          required
        />
        <AuthPasswordField />
        <Button type="submit" className="w-full">
          Log in
        </Button>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-muted-foreground rounded-lg">
            Or sign in with
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
        Don&apos;t have an account?{" "}
        <Link
          href="/registration"
          className="font-semibold text-primary underline"
        >
          Register
        </Link>
      </p>
    </div>
  );
}
