/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/my-ui/button";
import Image from "next/image";
import loginImage from "@/assets/authImages/register-image.png";
import google from "@/assets/authImages/google.png";
import facebook from "@/assets/authImages/Facebook.png";
import apple from "@/assets/authImages/apple.png";
import { RoundedButton } from "./AuthForm/AuthSocialRoundedBtn";
import MyFormWrapper from "../ui/MyForm/MyFormWrapper/MyFormWrapper";
import AuthInput from "./AuthForm/AuthInput";
import { AuthPasswordField } from "./AuthForm/AuthPasswordField";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/schema/signInSchema";
import { useLoginMutation } from "@/redux/features/authSlice/authApi";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { setUser } from "@/redux/features/authSlice/authSlice";
import { useAppDispatch } from "@/redux/hooks";

export function SignInForm() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [login] = useLoginMutation();

  const onSubmit = async (data: any) => {
    const credentials = {
      email: data.email,
      password: data.password,
    };

    try {
      const response = await login(credentials).unwrap();
      console.log(response.data.token);
      if (response.success) {
        dispatch(setUser({ token: response?.data.token, user: null }));
      }
      toast.success(response?.message);

      router.push("/");
    } catch (error) {
      if (error) {
        toast.error((error as any)?.data?.message);
      } else {
        toast.error("An unknown error occurred.");
      }
      console.error("Login failed:", error);
    }
  };
  return (
    <div className="w-full max-w-md space-y-8">
      <div className="space-y-2 text-center flex flex-col justify-center items-center">
        <Image src={loginImage} alt="register Image" />
        <h1 className="text-3xl font-bold">Sign In</h1>
        <p className="text-base text-gray-500">Welcome to Learning Together</p>
      </div>
      <MyFormWrapper
        resolver={zodResolver(signInSchema)}
        className="flex flex-col gap-4"
        onSubmit={onSubmit}
      >
        <AuthInput
          name="email"
          label="Email"
          type="email"
          placeholder="example@email.com"
        />
        <AuthPasswordField name="password" label="Password" />
        <Button type="submit" className="w-full mb-2">
          Log in
        </Button>
      </MyFormWrapper>
      <Link href={"/forgot-password"} className="text-primary">
        Forgot Password?
      </Link>
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
