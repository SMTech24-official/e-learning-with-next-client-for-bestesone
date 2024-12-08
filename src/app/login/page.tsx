import { AuthPage } from "@/components/AuthPage/AuthPage";
import { SignInForm } from "@/components/AuthPage/SignInForm";
import background from "@/assets/authImages/authBgImage.png";
import containerImage from "@/assets/authImages/authBgContainerImage.png";
import authImage from "@/assets/authImages/authImage.png";
import authImage2 from "@/assets/authImages/authImage2.png";
import React from "react";

const Login = () => {
  return (
    <>
      <AuthPage
        backgroundImageSrc={background}
        containerImageSrc={containerImage}
        floatingImageSrc={authImage2}
        authImage={authImage}
        headingText={
          "Welcome, Future Achiever! Unlock your potential 🫱🏻‍🫲🏻 with us."
        }
      >
        <SignInForm />
      </AuthPage>
    </>
  );
};
export default Login;
